/*! For license information please see tableau.embedding.3.12.0-pre.25.min.js.LICENSE.txt */
var e = {
        5668: (e, t, r) => {
            r(1300);
            var i = r(340);
            e.exports = i.Number.isInteger;
        },
        5816: (e, t, r) => {
            r(3656);
            var i = r(340);
            e.exports = i.Number.isNaN;
        },
        8824: (e, t, r) => {
            r(6368);
            var i = r(340);
            e.exports = i.Object.assign;
        },
        1381: (e, t, r) => {
            var i = r(1600),
                n = r(984),
                a = r(1532),
                o = i.TypeError;
            e.exports = function (e) {
                if (n(e)) return e;
                throw o(a(e) + " is not a function");
            };
        },
        3736: (e, t, r) => {
            var i = r(1600),
                n = r(9952),
                a = i.String,
                o = i.TypeError;
            e.exports = function (e) {
                if (n(e)) return e;
                throw o(a(e) + " is not an object");
            };
        },
        6024: (e, t, r) => {
            var i = r(3068),
                n = r(7920),
                a = r(9183),
                o = function (e) {
                    return function (t, r, o) {
                        var s,
                            l = i(t),
                            u = a(l),
                            c = n(o, u);
                        if (e && r != r) {
                            for (; u > c; ) if ((s = l[c++]) != s) return !0;
                        } else
                            for (; u > c; c++)
                                if ((e || c in l) && l[c] === r)
                                    return e || c || 0;
                        return !e && -1;
                    };
                };
            e.exports = { includes: o(!0), indexOf: o(!1) };
        },
        4108: (e, t, r) => {
            var i = r(604),
                n = i({}.toString),
                a = i("".slice);
            e.exports = function (e) {
                return a(n(e), 8, -1);
            };
        },
        4640: (e, t, r) => {
            var i = r(9180),
                n = r(4092),
                a = r(2920),
                o = r(7072);
            e.exports = function (e, t) {
                for (var r = n(t), s = o.f, l = a.f, u = 0; u < r.length; u++) {
                    var c = r[u];
                    i(e, c) || s(e, c, l(t, c));
                }
            };
        },
        4768: (e, t, r) => {
            var i = r(2828),
                n = r(7072),
                a = r(364);
            e.exports = i
                ? function (e, t, r) {
                      return n.f(e, t, a(1, r));
                  }
                : function (e, t, r) {
                      return (e[t] = r), e;
                  };
        },
        364: (e) => {
            e.exports = function (e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t,
                };
            };
        },
        2828: (e, t, r) => {
            var i = r(7004);
            e.exports = !i(function () {
                return (
                    7 !=
                    Object.defineProperty({}, 1, {
                        get: function () {
                            return 7;
                        },
                    })[1]
                );
            });
        },
        7300: (e, t, r) => {
            var i = r(1600),
                n = r(9952),
                a = i.document,
                o = n(a) && n(a.createElement);
            e.exports = function (e) {
                return o ? a.createElement(e) : {};
            };
        },
        5316: (e, t, r) => {
            var i = r(6532);
            e.exports = i("navigator", "userAgent") || "";
        },
        2592: (e, t, r) => {
            var i,
                n,
                a = r(1600),
                o = r(5316),
                s = a.process,
                l = a.Deno,
                u = (s && s.versions) || (l && l.version),
                c = u && u.v8;
            c &&
                (n =
                    (i = c.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
                !n &&
                    o &&
                    (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
                    (i = o.match(/Chrome\/(\d+)/)) &&
                    (n = +i[1]),
                (e.exports = n);
        },
        8675: (e) => {
            e.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf",
            ];
        },
        7248: (e, t, r) => {
            var i = r(1600),
                n = r(2920).f,
                a = r(4768),
                o = r(5028),
                s = r(2984),
                l = r(4640),
                u = r(4232);
            e.exports = function (e, t) {
                var r,
                    c,
                    d,
                    p,
                    h,
                    m = e.target,
                    y = e.global,
                    g = e.stat;
                if ((r = y ? i : g ? i[m] || s(m, {}) : (i[m] || {}).prototype))
                    for (c in t) {
                        if (
                            ((p = t[c]),
                            (d = e.noTargetGet
                                ? (h = n(r, c)) && h.value
                                : r[c]),
                            !u(y ? c : m + (g ? "." : "#") + c, e.forced) &&
                                void 0 !== d)
                        ) {
                            if (typeof p == typeof d) continue;
                            l(p, d);
                        }
                        (e.sham || (d && d.sham)) && a(p, "sham", !0),
                            o(r, c, p, e);
                    }
            };
        },
        7004: (e) => {
            e.exports = function (e) {
                try {
                    return !!e();
                } catch (e) {
                    return !0;
                }
            };
        },
        3032: (e) => {
            var t = Function.prototype.call;
            e.exports = t.bind
                ? t.bind(t)
                : function () {
                      return t.apply(t, arguments);
                  };
        },
        8492: (e, t, r) => {
            var i = r(2828),
                n = r(9180),
                a = Function.prototype,
                o = i && Object.getOwnPropertyDescriptor,
                s = n(a, "name"),
                l = s && "something" === function () {}.name,
                u = s && (!i || (i && o(a, "name").configurable));
            e.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: u };
        },
        604: (e) => {
            var t = Function.prototype,
                r = t.bind,
                i = t.call,
                n = r && r.bind(i);
            e.exports = r
                ? function (e) {
                      return e && n(i, e);
                  }
                : function (e) {
                      return (
                          e &&
                          function () {
                              return i.apply(e, arguments);
                          }
                      );
                  };
        },
        6532: (e, t, r) => {
            var i = r(1600),
                n = r(984);
            e.exports = function (e, t) {
                return arguments.length < 2
                    ? ((r = i[e]), n(r) ? r : void 0)
                    : i[e] && i[e][t];
                var r;
            };
        },
        8808: (e, t, r) => {
            var i = r(1381);
            e.exports = function (e, t) {
                var r = e[t];
                return null == r ? void 0 : i(r);
            };
        },
        1600: (e, t, r) => {
            var i = function (e) {
                return e && e.Math == Math && e;
            };
            e.exports =
                i("object" == typeof globalThis && globalThis) ||
                i("object" == typeof window && window) ||
                i("object" == typeof self && self) ||
                i("object" == typeof r.g && r.g) ||
                (function () {
                    return this;
                })() ||
                Function("return this")();
        },
        9180: (e, t, r) => {
            var i = r(604),
                n = r(3848),
                a = i({}.hasOwnProperty);
            e.exports =
                Object.hasOwn ||
                function (e, t) {
                    return a(n(e), t);
                };
        },
        6632: (e) => {
            e.exports = {};
        },
        2339: (e, t, r) => {
            var i = r(2828),
                n = r(7004),
                a = r(7300);
            e.exports =
                !i &&
                !n(function () {
                    return (
                        7 !=
                        Object.defineProperty(a("div"), "a", {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        3188: (e, t, r) => {
            var i = r(1600),
                n = r(604),
                a = r(7004),
                o = r(4108),
                s = i.Object,
                l = n("".split);
            e.exports = a(function () {
                return !s("z").propertyIsEnumerable(0);
            })
                ? function (e) {
                      return "String" == o(e) ? l(e, "") : s(e);
                  }
                : s;
        },
        1727: (e, t, r) => {
            var i = r(604),
                n = r(984),
                a = r(6376),
                o = i(Function.toString);
            n(a.inspectSource) ||
                (a.inspectSource = function (e) {
                    return o(e);
                }),
                (e.exports = a.inspectSource);
        },
        7932: (e, t, r) => {
            var i,
                n,
                a,
                o = r(8736),
                s = r(1600),
                l = r(604),
                u = r(9952),
                c = r(4768),
                d = r(9180),
                p = r(6376),
                h = r(280),
                m = r(6632),
                y = "Object already initialized",
                g = s.TypeError,
                f = s.WeakMap;
            if (o || p.state) {
                var b = p.state || (p.state = new f()),
                    v = l(b.get),
                    I = l(b.has),
                    S = l(b.set);
                (i = function (e, t) {
                    if (I(b, e)) throw new g(y);
                    return (t.facade = e), S(b, e, t), t;
                }),
                    (n = function (e) {
                        return v(b, e) || {};
                    }),
                    (a = function (e) {
                        return I(b, e);
                    });
            } else {
                var T = h("state");
                (m[T] = !0),
                    (i = function (e, t) {
                        if (d(e, T)) throw new g(y);
                        return (t.facade = e), c(e, T, t), t;
                    }),
                    (n = function (e) {
                        return d(e, T) ? e[T] : {};
                    }),
                    (a = function (e) {
                        return d(e, T);
                    });
            }
            e.exports = {
                set: i,
                get: n,
                has: a,
                enforce: function (e) {
                    return a(e) ? n(e) : i(e, {});
                },
                getterFor: function (e) {
                    return function (t) {
                        var r;
                        if (!u(t) || (r = n(t)).type !== e)
                            throw g(
                                "Incompatible receiver, " + e + " required"
                            );
                        return r;
                    };
                },
            };
        },
        984: (e) => {
            e.exports = function (e) {
                return "function" == typeof e;
            };
        },
        4232: (e, t, r) => {
            var i = r(7004),
                n = r(984),
                a = /#|\.prototype\./,
                o = function (e, t) {
                    var r = l[s(e)];
                    return r == c || (r != u && (n(t) ? i(t) : !!t));
                },
                s = (o.normalize = function (e) {
                    return String(e).replace(a, ".").toLowerCase();
                }),
                l = (o.data = {}),
                u = (o.NATIVE = "N"),
                c = (o.POLYFILL = "P");
            e.exports = o;
        },
        992: (e, t, r) => {
            var i = r(9952),
                n = Math.floor;
            e.exports =
                Number.isInteger ||
                function (e) {
                    return !i(e) && isFinite(e) && n(e) === e;
                };
        },
        9952: (e, t, r) => {
            var i = r(984);
            e.exports = function (e) {
                return "object" == typeof e ? null !== e : i(e);
            };
        },
        7408: (e) => {
            e.exports = !1;
        },
        1836: (e, t, r) => {
            var i = r(1600),
                n = r(6532),
                a = r(984),
                o = r(2408),
                s = r(7216),
                l = i.Object;
            e.exports = s
                ? function (e) {
                      return "symbol" == typeof e;
                  }
                : function (e) {
                      var t = n("Symbol");
                      return a(t) && o(t.prototype, l(e));
                  };
        },
        9183: (e, t, r) => {
            var i = r(1868);
            e.exports = function (e) {
                return i(e.length);
            };
        },
        3880: (e, t, r) => {
            var i = r(2592),
                n = r(7004);
            e.exports =
                !!Object.getOwnPropertySymbols &&
                !n(function () {
                    var e = Symbol();
                    return (
                        !String(e) ||
                        !(Object(e) instanceof Symbol) ||
                        (!Symbol.sham && i && i < 41)
                    );
                });
        },
        8736: (e, t, r) => {
            var i = r(1600),
                n = r(984),
                a = r(1727),
                o = i.WeakMap;
            e.exports = n(o) && /native code/.test(a(o));
        },
        6984: (e, t, r) => {
            var i = r(2828),
                n = r(604),
                a = r(3032),
                o = r(7004),
                s = r(9880),
                l = r(2128),
                u = r(5988),
                c = r(3848),
                d = r(3188),
                p = Object.assign,
                h = Object.defineProperty,
                m = n([].concat);
            e.exports =
                !p ||
                o(function () {
                    if (
                        i &&
                        1 !==
                            p(
                                { b: 1 },
                                p(
                                    h({}, "a", {
                                        enumerable: !0,
                                        get: function () {
                                            h(this, "b", {
                                                value: 3,
                                                enumerable: !1,
                                            });
                                        },
                                    }),
                                    { b: 2 }
                                )
                            ).b
                    )
                        return !0;
                    var e = {},
                        t = {},
                        r = Symbol(),
                        n = "abcdefghijklmnopqrst";
                    return (
                        (e[r] = 7),
                        n.split("").forEach(function (e) {
                            t[e] = e;
                        }),
                        7 != p({}, e)[r] || s(p({}, t)).join("") != n
                    );
                })
                    ? function (e, t) {
                          for (
                              var r = c(e),
                                  n = arguments.length,
                                  o = 1,
                                  p = l.f,
                                  h = u.f;
                              n > o;

                          )
                              for (
                                  var y,
                                      g = d(arguments[o++]),
                                      f = p ? m(s(g), p(g)) : s(g),
                                      b = f.length,
                                      v = 0;
                                  b > v;

                              )
                                  (y = f[v++]),
                                      (i && !a(h, g, y)) || (r[y] = g[y]);
                          return r;
                      }
                    : p;
        },
        7072: (e, t, r) => {
            var i = r(1600),
                n = r(2828),
                a = r(2339),
                o = r(3736),
                s = r(4061),
                l = i.TypeError,
                u = Object.defineProperty;
            t.f = n
                ? u
                : function (e, t, r) {
                      if ((o(e), (t = s(t)), o(r), a))
                          try {
                              return u(e, t, r);
                          } catch (e) {}
                      if ("get" in r || "set" in r)
                          throw l("Accessors not supported");
                      return "value" in r && (e[t] = r.value), e;
                  };
        },
        2920: (e, t, r) => {
            var i = r(2828),
                n = r(3032),
                a = r(5988),
                o = r(364),
                s = r(3068),
                l = r(4061),
                u = r(9180),
                c = r(2339),
                d = Object.getOwnPropertyDescriptor;
            t.f = i
                ? d
                : function (e, t) {
                      if (((e = s(e)), (t = l(t)), c))
                          try {
                              return d(e, t);
                          } catch (e) {}
                      if (u(e, t)) return o(!n(a.f, e, t), e[t]);
                  };
        },
        4880: (e, t, r) => {
            var i = r(9912),
                n = r(8675).concat("length", "prototype");
            t.f =
                Object.getOwnPropertyNames ||
                function (e) {
                    return i(e, n);
                };
        },
        2128: (e, t) => {
            t.f = Object.getOwnPropertySymbols;
        },
        2408: (e, t, r) => {
            var i = r(604);
            e.exports = i({}.isPrototypeOf);
        },
        9912: (e, t, r) => {
            var i = r(604),
                n = r(9180),
                a = r(3068),
                o = r(6024).indexOf,
                s = r(6632),
                l = i([].push);
            e.exports = function (e, t) {
                var r,
                    i = a(e),
                    u = 0,
                    c = [];
                for (r in i) !n(s, r) && n(i, r) && l(c, r);
                for (; t.length > u; )
                    n(i, (r = t[u++])) && (~o(c, r) || l(c, r));
                return c;
            };
        },
        9880: (e, t, r) => {
            var i = r(9912),
                n = r(8675);
            e.exports =
                Object.keys ||
                function (e) {
                    return i(e, n);
                };
        },
        5988: (e, t) => {
            var r = {}.propertyIsEnumerable,
                i = Object.getOwnPropertyDescriptor,
                n = i && !r.call({ 1: 2 }, 1);
            t.f = n
                ? function (e) {
                      var t = i(this, e);
                      return !!t && t.enumerable;
                  }
                : r;
        },
        7540: (e, t, r) => {
            var i = r(1600),
                n = r(3032),
                a = r(984),
                o = r(9952),
                s = i.TypeError;
            e.exports = function (e, t) {
                var r, i;
                if ("string" === t && a((r = e.toString)) && !o((i = n(r, e))))
                    return i;
                if (a((r = e.valueOf)) && !o((i = n(r, e)))) return i;
                if ("string" !== t && a((r = e.toString)) && !o((i = n(r, e))))
                    return i;
                throw s("Can't convert object to primitive value");
            };
        },
        4092: (e, t, r) => {
            var i = r(6532),
                n = r(604),
                a = r(4880),
                o = r(2128),
                s = r(3736),
                l = n([].concat);
            e.exports =
                i("Reflect", "ownKeys") ||
                function (e) {
                    var t = a.f(s(e)),
                        r = o.f;
                    return r ? l(t, r(e)) : t;
                };
        },
        340: (e, t, r) => {
            var i = r(1600);
            e.exports = i;
        },
        5028: (e, t, r) => {
            var i = r(1600),
                n = r(984),
                a = r(9180),
                o = r(4768),
                s = r(2984),
                l = r(1727),
                u = r(7932),
                c = r(8492).CONFIGURABLE,
                d = u.get,
                p = u.enforce,
                h = String(String).split("String");
            (e.exports = function (e, t, r, l) {
                var u,
                    d = !!l && !!l.unsafe,
                    m = !!l && !!l.enumerable,
                    y = !!l && !!l.noTargetGet,
                    g = l && void 0 !== l.name ? l.name : t;
                n(r) &&
                    ("Symbol(" === String(g).slice(0, 7) &&
                        (g =
                            "[" +
                            String(g).replace(/^Symbol\(([^)]*)\)/, "$1") +
                            "]"),
                    (!a(r, "name") || (c && r.name !== g)) && o(r, "name", g),
                    (u = p(r)).source ||
                        (u.source = h.join("string" == typeof g ? g : ""))),
                    e !== i
                        ? (d ? !y && e[t] && (m = !0) : delete e[t],
                          m ? (e[t] = r) : o(e, t, r))
                        : m
                        ? (e[t] = r)
                        : s(t, r);
            })(Function.prototype, "toString", function () {
                return (n(this) && d(this).source) || l(this);
            });
        },
        1840: (e, t, r) => {
            var i = r(1600).TypeError;
            e.exports = function (e) {
                if (null == e) throw i("Can't call method on " + e);
                return e;
            };
        },
        2984: (e, t, r) => {
            var i = r(1600),
                n = Object.defineProperty;
            e.exports = function (e, t) {
                try {
                    n(i, e, { value: t, configurable: !0, writable: !0 });
                } catch (r) {
                    i[e] = t;
                }
                return t;
            };
        },
        280: (e, t, r) => {
            var i = r(4624),
                n = r(6536),
                a = i("keys");
            e.exports = function (e) {
                return a[e] || (a[e] = n(e));
            };
        },
        6376: (e, t, r) => {
            var i = r(1600),
                n = r(2984),
                a = "__core-js_shared__",
                o = i[a] || n(a, {});
            e.exports = o;
        },
        4624: (e, t, r) => {
            var i = r(7408),
                n = r(6376);
            (e.exports = function (e, t) {
                return n[e] || (n[e] = void 0 !== t ? t : {});
            })("versions", []).push({
                version: "3.19.0",
                mode: i ? "pure" : "global",
                copyright: "Â© 2021 Denis Pushkarev (zloirock.ru)",
            });
        },
        7920: (e, t, r) => {
            var i = r(9824),
                n = Math.max,
                a = Math.min;
            e.exports = function (e, t) {
                var r = i(e);
                return r < 0 ? n(r + t, 0) : a(r, t);
            };
        },
        3068: (e, t, r) => {
            var i = r(3188),
                n = r(1840);
            e.exports = function (e) {
                return i(n(e));
            };
        },
        9824: (e) => {
            var t = Math.ceil,
                r = Math.floor;
            e.exports = function (e) {
                var i = +e;
                return i != i || 0 === i ? 0 : (i > 0 ? r : t)(i);
            };
        },
        1868: (e, t, r) => {
            var i = r(9824),
                n = Math.min;
            e.exports = function (e) {
                return e > 0 ? n(i(e), 9007199254740991) : 0;
            };
        },
        3848: (e, t, r) => {
            var i = r(1600),
                n = r(1840),
                a = i.Object;
            e.exports = function (e) {
                return a(n(e));
            };
        },
        2312: (e, t, r) => {
            var i = r(1600),
                n = r(3032),
                a = r(9952),
                o = r(1836),
                s = r(8808),
                l = r(7540),
                u = r(3668),
                c = i.TypeError,
                d = u("toPrimitive");
            e.exports = function (e, t) {
                if (!a(e) || o(e)) return e;
                var r,
                    i = s(e, d);
                if (i) {
                    if (
                        (void 0 === t && (t = "default"),
                        (r = n(i, e, t)),
                        !a(r) || o(r))
                    )
                        return r;
                    throw c("Can't convert object to primitive value");
                }
                return void 0 === t && (t = "number"), l(e, t);
            };
        },
        4061: (e, t, r) => {
            var i = r(2312),
                n = r(1836);
            e.exports = function (e) {
                var t = i(e, "string");
                return n(t) ? t : t + "";
            };
        },
        1532: (e, t, r) => {
            var i = r(1600).String;
            e.exports = function (e) {
                try {
                    return i(e);
                } catch (e) {
                    return "Object";
                }
            };
        },
        6536: (e, t, r) => {
            var i = r(604),
                n = 0,
                a = Math.random(),
                o = i((1).toString);
            e.exports = function (e) {
                return (
                    "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++n + a, 36)
                );
            };
        },
        7216: (e, t, r) => {
            var i = r(3880);
            e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        3668: (e, t, r) => {
            var i = r(1600),
                n = r(4624),
                a = r(9180),
                o = r(6536),
                s = r(3880),
                l = r(7216),
                u = n("wks"),
                c = i.Symbol,
                d = c && c.for,
                p = l ? c : (c && c.withoutSetter) || o;
            e.exports = function (e) {
                if (!a(u, e) || (!s && "string" != typeof u[e])) {
                    var t = "Symbol." + e;
                    s && a(c, e)
                        ? (u[e] = c[e])
                        : (u[e] = l && d ? d(t) : p(t));
                }
                return u[e];
            };
        },
        1300: (e, t, r) => {
            r(7248)({ target: "Number", stat: !0 }, { isInteger: r(992) });
        },
        3656: (e, t, r) => {
            r(7248)(
                { target: "Number", stat: !0 },
                {
                    isNaN: function (e) {
                        return e != e;
                    },
                }
            );
        },
        6368: (e, t, r) => {
            var i = r(7248),
                n = r(6984);
            i(
                { target: "Object", stat: !0, forced: Object.assign !== n },
                { assign: n }
            );
        },
        1808: (e) => {
            !(function () {
                var t = new RegExp(
                    "^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$",
                    "i"
                );
                function r(e) {
                    for (var t = "", r = 0; r < e; r++)
                        t += ((65536 * (1 + Math.random())) | 0)
                            .toString(16)
                            .substring(1);
                    return t;
                }
                function i(e) {
                    if (!e)
                        throw new TypeError(
                            "Invalid argument; `value` has no value."
                        );
                    (this.value = i.EMPTY),
                        e && e instanceof i
                            ? (this.value = e.toString())
                            : e &&
                              "[object String]" ===
                                  Object.prototype.toString.call(e) &&
                              i.isGuid(e) &&
                              (this.value = e),
                        (this.equals = function (e) {
                            return i.isGuid(e) && this.value == e;
                        }),
                        (this.isEmpty = function () {
                            return this.value === i.EMPTY;
                        }),
                        (this.toString = function () {
                            return this.value;
                        }),
                        (this.toJSON = function () {
                            return this.value;
                        });
                }
                (i.EMPTY = "00000000-0000-0000-0000-000000000000"),
                    (i.isGuid = function (e) {
                        return e && (e instanceof i || t.test(e.toString()));
                    }),
                    (i.create = function () {
                        return new i([r(2), r(1), r(1), r(1), r(3)].join("-"));
                    }),
                    (i.raw = function () {
                        return [r(2), r(1), r(1), r(1), r(3)].join("-");
                    }),
                    e.exports
                        ? (e.exports = i)
                        : "undefined" != typeof window && (window.Guid = i);
            })();
        },
        9788: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(7419),
                n = r(5136),
                a = r(2764),
                o = r(5568),
                s = r(584),
                l = r(5312),
                u = "undefined" != typeof VERSION_IS_ALPHA && VERSION_IS_ALPHA;
            function c(e, t) {
                try {
                    window.customElements.get(e)
                        ? console.warn(
                              `Custom element '${e}' is already defined.`
                          )
                        : window.customElements.define(e, t);
                } catch (t) {
                    console.error(`Error defining custom element '${e}':`, t);
                }
            }
            n.ApiVersion.SetVersionNumber("3.12.0-pre.25", u),
                "customElements" in window
                    ? (c("tableau-viz", l.TableauViz),
                      c("tableau-authoring-viz", o.TableauAuthoringViz),
                      c("tableau-ask-data", a.TableauAskData),
                      c("tableau-pulse", s.TableauPulse))
                    : console.error(
                          "Custom Elements API is not supported in this browser."
                      );
            const d = Object.assign(
                Object.assign({}, i.EmbeddingErrorCodes),
                i.SharedErrorCodes
            );
            t.ErrorCodes = d;
            var p = r(7419);
            (t.AnalyticsObjectType = p.AnalyticsObjectType),
                (t.AnnotationType = p.AnnotationType),
                (t.ApiMenuType = p.ApiMenuType),
                (t.ClassNameKey = p.ClassNameKey),
                (t.ColumnType = p.ColumnType),
                (t.CrosstabFileFormat = p.CrosstabFileFormat),
                (t.DashboardLayoutChange = p.DashboardLayoutChange),
                (t.DashboardObjectType = p.DashboardObjectType),
                (t.DataType = p.DataType),
                (t.DateRangeType = p.DateRangeType),
                (t.DeviceType = p.DeviceType),
                (t.EmbeddedIframeAttributes = p.EmbeddedIframeAttributes),
                (t.EncodingType = p.EncodingType),
                (t.FieldAggregationType = p.FieldAggregationType),
                (t.FieldRoleType = p.FieldRoleType),
                (t.FileFormats = p.FileFormats),
                (t.FilterDomainType = p.FilterDomainType),
                (t.FilterNullOption = p.FilterNullOption),
                (t.FilterType = p.FilterType),
                (t.FilterUpdateType = p.FilterUpdateType),
                (t.HierarchicalLevelSelectionState =
                    p.HierarchicalLevelSelectionState),
                (t.IncludeDataValuesOption = p.IncludeDataValuesOption),
                (t.MarkType = p.MarkType),
                (t.ParameterValueType = p.ParameterValueType),
                (t.PeriodType = p.PeriodType),
                (t.PrintOrientation = p.PrintOrientation),
                (t.PrintPageSize = p.PrintPageSize),
                (t.PrintScaling = p.PrintScaling),
                (t.PulseAttributes = p.PulseAttributes),
                (t.PulseErrorMessageVisibility = p.PulseErrorMessageVisibility),
                (t.PulseLayout = p.PulseLayout),
                (t.PulseTimeDimension = p.PulseTimeDimension),
                (t.QuickTableCalcType = p.QuickTableCalcType),
                (t.SelectionUpdateType = p.SelectionUpdateType),
                (t.SheetSizeBehavior = p.SheetSizeBehavior),
                (t.SheetType = p.SheetType),
                (t.SortDirection = p.SortDirection),
                (t.TableauDialogType = p.TableauDialogType),
                (t.TableauEventType = p.EmbeddingTableauEventType),
                (t.Toolbar = p.Toolbar),
                (t.TrendLineModelType = p.TrendLineModelType),
                (t.VizAttributes = p.VizAttributes),
                (t.VizAuthoringAttributes = p.VizAuthoringAttributes),
                (t.VizSharedAttributes = p.VizSharedAttributes),
                (t.WebComponentAttributes = p.WebComponentAttributes);
            var h = r(2764);
            t.TableauAskData = h.TableauAskData;
            var m = r(5568);
            t.TableauAuthoringViz = m.TableauAuthoringViz;
            var y = r(584);
            t.TableauPulse = y.TableauPulse;
            var g = r(5312);
            t.TableauViz = g.TableauViz;
        },
        2764: function (e, t, r) {
            var i =
                (this && this.__awaiter) ||
                function (e, t, r, i) {
                    return new (r || (r = Promise))(function (n, a) {
                        function o(e) {
                            try {
                                l(i.next(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function s(e) {
                            try {
                                l(i.throw(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function l(e) {
                            var t;
                            e.done
                                ? n(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                      ? t
                                      : new r(function (e) {
                                            e(t);
                                        })).then(o, s);
                        }
                        l((i = i.apply(e, t || [])).next());
                    });
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = r(7419),
                a = r(9552),
                o = r(6272),
                s = r(9432),
                l = r(5760);
            class u extends l.TableauWebComponent {
                constructor() {
                    super();
                }
                static get observedAttributes() {
                    return [
                        ...super.observedAttributes,
                        ...Object.values(n.AskDataAttributes),
                    ];
                }
                updateRenderingIfInitialized(e) {
                    return i(this, void 0, void 0, function* () {
                        if (this._initialized)
                            return (
                                s.WebComponentManager.unregisterWebComponent(
                                    this._embeddingIdCounter
                                ),
                                this.updateRendering(e)
                            );
                    });
                }
                updateRendering(e) {
                    return i(this, void 0, void 0, function* () {
                        try {
                            if (((this._initialized = !0), !e))
                                return void console.debug(
                                    `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`
                                );
                            if (
                                (yield this.auth(o.getSiteId(e))) ===
                                l.TableauAuthResponse.Failure
                            )
                                return void console.debug(
                                    "Authentication failed."
                                );
                            if (!this.src)
                                return void console.debug(
                                    `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`
                                );
                            if (!this.iframe)
                                return void console.debug(
                                    "No iframe available to update the src."
                                );
                            const t = this.readCustomParamsFromChildren();
                            this._embeddingIdCounter =
                                s.WebComponentManager.registerWebComponent(
                                    this
                                );
                            const r = a
                                .createAskDataUrl(
                                    this.src,
                                    this.constructOptions(),
                                    this._embeddingIdCounter,
                                    t
                                )
                                .toString();
                            return (
                                (this.iframe.src = r),
                                void this.raiseIframeSrcUpdatedNotification()
                            );
                        } catch (e) {
                            console.warn(e);
                        }
                    });
                }
                constructOptions() {
                    return {
                        origin: this.origin,
                        showEmbed: this.showEmbed,
                        showPin: this.showPin,
                        showSave: this.showSave,
                        showShare: this.showShare,
                        token: this.token,
                        iframeAuth: this.iframeAuth,
                        debug: this.debug,
                    };
                }
                get origin() {
                    return (
                        this.getAttribute(n.AskDataAttributes.Origin) || void 0
                    );
                }
                set origin(e) {
                    e
                        ? this.setAttribute(n.AskDataAttributes.Origin, e)
                        : this.removeAttribute(n.AskDataAttributes.Origin);
                }
                get showEmbed() {
                    return this.hasAttribute(n.AskDataAttributes.ShowEmbed);
                }
                set showEmbed(e) {
                    e
                        ? this.setAttribute(n.AskDataAttributes.ShowEmbed, "")
                        : this.removeAttribute(n.AskDataAttributes.ShowEmbed);
                }
                get showPin() {
                    return this.hasAttribute(n.AskDataAttributes.ShowPin);
                }
                set showPin(e) {
                    e
                        ? this.setAttribute(n.AskDataAttributes.ShowPin, "")
                        : this.removeAttribute(n.AskDataAttributes.ShowPin);
                }
                get showShare() {
                    return this.hasAttribute(n.AskDataAttributes.ShowShare);
                }
                set showShare(e) {
                    e
                        ? this.setAttribute(n.AskDataAttributes.ShowShare, "")
                        : this.removeAttribute(n.AskDataAttributes.ShowShare);
                }
                get showSave() {
                    return this.hasAttribute(n.AskDataAttributes.ShowSave);
                }
                set showSave(e) {
                    e
                        ? this.setAttribute(n.AskDataAttributes.ShowSave, "")
                        : this.removeAttribute(n.AskDataAttributes.ShowSave);
                }
            }
            t.TableauAskData = u;
        },
        5568: function (e, t, r) {
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return (t.default = e), t;
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = i(r(7419)),
                a = r(3448),
                o = r(6948),
                s = r(2024),
                l = r(5884);
            class u extends l.TableauVizBase {
                static get observedAttributes() {
                    return [
                        ...super.observedAttributes,
                        ...Object.values(n.VizAuthoringAttributes),
                    ];
                }
                getAttributeEvents() {
                    return [
                        [
                            n.VizSharedAttributes.OnEditInDesktopButtonClicked,
                            n.EmbeddingTableauEventType
                                .EditInDesktopButtonClicked,
                        ],
                        [
                            n.VizSharedAttributes.OnFirstInteractive,
                            n.EmbeddingTableauEventType.FirstInteractive,
                        ],
                        [
                            n.VizSharedAttributes.OnFirstVizSizeKnown,
                            n.EmbeddingTableauEventType.FirstVizSizeKnown,
                        ],
                        [
                            n.VizAuthoringAttributes.OnWorkbookPublished,
                            n.EmbeddingTableauEventType.WorkbookPublished,
                        ],
                        [
                            n.VizAuthoringAttributes.OnWorkbookPublishedAs,
                            n.EmbeddingTableauEventType.WorkbookPublishedAs,
                        ],
                        [
                            n.VizAuthoringAttributes.OnWorkbookReadyToClose,
                            n.EmbeddingTableauEventType.WorkbookReadyToClose,
                        ],
                        [
                            n.VizAttributes.OnReadyToReceiveAuthToken,
                            n.EmbeddingTableauEventType.ReadyToReceiveAuthToken,
                        ],
                    ];
                }
                createFrameUrlWithParams() {
                    const e = this.constructVizqlOptions(),
                        t = this.readCustomParamsFromChildren();
                    return s.createVizUrl(
                        this.src,
                        s.EmbeddingUrlMode.Authoring,
                        e,
                        this._embeddingIdCounter,
                        [],
                        [],
                        t
                    );
                }
                constructVizqlOptions() {
                    return {
                        token: this.token,
                        touchOptimize: this.touchOptimize,
                        hideEditInDesktopButton: this.hideEditInDesktopButton,
                        suppressDefaultEditBehavior:
                            this.suppressDefaultEditBehavior,
                        hideCloseButton: this.hideCloseButton,
                        debug: this.debug,
                        iframeAuth: this.iframeAuth,
                    };
                }
                getRegisteredEvents() {
                    return super.getRegisteredEvents().concat([
                        [
                            a.NotificationId.WorkbookPublished,
                            () => !0,
                            () =>
                                this.dispatchEvent(
                                    new CustomEvent(
                                        n.EmbeddingTableauEventType.WorkbookPublished
                                    )
                                ),
                        ],
                        [
                            a.NotificationId.WorkbookPublishedAs,
                            () => !0,
                            (e) => this.handleWorkbookPublishedAsEvent(e),
                        ],
                        [
                            a.NotificationId.WorkbookReadyToClose,
                            () => !0,
                            () =>
                                this.dispatchEvent(
                                    new CustomEvent(
                                        n.EmbeddingTableauEventType.WorkbookReadyToClose
                                    )
                                ),
                        ],
                    ]);
                }
                handleWorkbookPublishedAsEvent(e) {
                    const t = { newUrl: e.newUrl };
                    this.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.WorkbookPublishedAs,
                            { detail: t }
                        )
                    );
                }
                set hideCloseButton(e) {
                    e
                        ? this.setAttribute(
                              n.VizAuthoringAttributes.HideCloseButton,
                              ""
                          )
                        : this.removeAttribute(
                              n.VizAuthoringAttributes.HideCloseButton
                          );
                }
                get hideCloseButton() {
                    return this.hasAttribute(
                        n.VizAuthoringAttributes.HideCloseButton
                    );
                }
                get workbook() {
                    return new o.AuthoringWorkbook(
                        this.vizImpl.workbookImpl,
                        this.vizImpl.embeddingId
                    );
                }
                setAuthToken(e) {
                    this.vizImpl.setAuthToken(e);
                }
            }
            t.TableauAuthoringViz = u;
        },
        584: function (e, t, r) {
            var i =
                (this && this.__awaiter) ||
                function (e, t, r, i) {
                    return new (r || (r = Promise))(function (n, a) {
                        function o(e) {
                            try {
                                l(i.next(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function s(e) {
                            try {
                                l(i.throw(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function l(e) {
                            var t;
                            e.done
                                ? n(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                      ? t
                                      : new r(function (e) {
                                            e(t);
                                        })).then(o, s);
                        }
                        l((i = i.apply(e, t || [])).next());
                    });
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = r(7419),
                a = r(5136),
                o = r(2144),
                s = r(8920),
                l = r(6272),
                u = r(9432),
                c = r(5884),
                d = r(5760);
            class p extends d.TableauWebComponent {
                constructor() {
                    super(), (this._preInitFilters = []);
                }
                disconnectedCallback() {
                    super.disconnectedCallback(),
                        (this._preInitFilters = []),
                        this._pulseImpl && this._pulseImpl.dispose();
                }
                getAttributeEvents() {
                    return [
                        [
                            n.PulseAttributes.OnFirstInteractive,
                            n.EmbeddingTableauEventType.FirstInteractive,
                        ],
                        [
                            n.PulseAttributes.OnFirstPulseMetricSizeKnown,
                            n.EmbeddingTableauEventType
                                .FirstPulseMetricSizeKnown,
                        ],
                        [
                            n.PulseAttributes.OnPulseUrlError,
                            n.EmbeddingTableauEventType.PulseError,
                        ],
                        [
                            n.PulseAttributes.OnPulseFiltersChanged,
                            n.EmbeddingTableauEventType.PulseFiltersChanged,
                        ],
                        [
                            n.PulseAttributes.OnPulseInsightDiscovered,
                            n.EmbeddingTableauEventType.PulseInsightDiscovered,
                        ],
                        [
                            n.PulseAttributes.OnPulseTimeDimensionChanged,
                            n.EmbeddingTableauEventType
                                .PulseTimeDimensionChanged,
                        ],
                        [
                            n.PulseAttributes.OnPulseUrlChanged,
                            n.EmbeddingTableauEventType.PulseUrlChanged,
                        ],
                    ];
                }
                static get observedAttributes() {
                    return [
                        ...super.observedAttributes,
                        ...Object.values(n.PulseAttributes),
                    ];
                }
                updateRenderingIfInitialized(e) {
                    return i(this, void 0, void 0, function* () {
                        if (this._initialized)
                            return (
                                this._pulseImpl && this._pulseImpl.dispose(),
                                u.WebComponentManager.unregisterWebComponent(
                                    this._embeddingIdCounter
                                ),
                                this.updateRendering(e)
                            );
                    });
                }
                updateRendering(e) {
                    return i(this, void 0, void 0, function* () {
                        try {
                            if (((this._initialized = !0), !e))
                                return void console.debug(
                                    `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`
                                );
                            if (!this.token && !this.isTokenOptional)
                                return void console.debug(
                                    `A token needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`
                                );
                            if (
                                (yield this.auth(l.getSiteIdForPulse(e))) ===
                                d.TableauAuthResponse.Failure
                            )
                                return void console.debug(
                                    "Authentication failed."
                                );
                            if (!this.src)
                                return void console.debug(
                                    `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`
                                );
                            if (!this.iframe)
                                return void console.debug(
                                    "No iframe available to update the src."
                                );
                            const t = this.readCustomParamsFromChildren();
                            (this._embeddingIdCounter =
                                u.WebComponentManager.registerWebComponent(
                                    this
                                )),
                                this.registerAttributeEvents();
                            const r = s.createPulseUrl(
                                    this.src,
                                    this.constructOptions(),
                                    t
                                ),
                                i = this.readFiltersFromChild().concat(
                                    this._preInitFilters
                                );
                            return (
                                (this._pulseImpl =
                                    this.createAndInitializePulseImpl(r, i)),
                                (this.timeDimension || i.length) &&
                                    (this.iframe.style.visibility = "hidden"),
                                (this.iframe.src = r.toString()),
                                void this.raiseIframeSrcUpdatedNotification()
                            );
                        } catch (e) {
                            console.warn(e);
                        }
                    });
                }
                createAndInitializePulseImpl(e, t) {
                    const r = new o.PulseImpl(
                        this,
                        this.iframe,
                        e,
                        this.timeDimension,
                        t,
                        this._embeddingIdCounter
                    );
                    return r.initialize(), r;
                }
                registerAttributeEvents() {
                    this.getAttributeEvents().forEach((e) => {
                        const [t, r] = e;
                        this.registerCallback(t, r);
                    });
                }
                readFiltersFromChild() {
                    const e = [];
                    return (
                        [].forEach.call(this.children, (t) => {
                            t.localName === n.PulseChildElements.PulseFilter &&
                                t.getAttribute(
                                    n.PulseChildElementAttributes.Field
                                ) &&
                                t.getAttribute(
                                    n.PulseChildElementAttributes.Value
                                ) &&
                                e.push({
                                    field: t.getAttribute(
                                        n.PulseChildElementAttributes.Field
                                    ),
                                    value: t.getAttribute(
                                        n.PulseChildElementAttributes.Value
                                    ),
                                });
                        }),
                        e
                    );
                }
                readThemeParametersFromChild() {
                    const e = [];
                    return (
                        [].forEach.call(this.children, (t) => {
                            if (
                                t.localName ===
                                n.PulseChildElements.ThemeParameter
                            ) {
                                const r = t.getAttribute(
                                        n.PulseChildElementAttributes.Name
                                    ),
                                    i = t.getAttribute(
                                        n.PulseChildElementAttributes.Value
                                    ),
                                    a = t.getAttribute(
                                        n.PulseChildElementAttributes.Type
                                    );
                                r &&
                                    i &&
                                    e.push({ name: r, value: i, type: a });
                            }
                        }),
                        e
                    );
                }
                getThemeString() {
                    const e = this.themeObj;
                    if (e)
                        try {
                            return btoa(JSON.stringify(e));
                        } catch (e) {
                            return;
                        }
                }
                constructOptions() {
                    const e = {
                        token: this.token,
                        theme: this.getThemeString(),
                    };
                    return (
                        this.disableExploreFilter &&
                            (e.disableExploreFilter =
                                this.disableExploreFilter),
                        this.layout &&
                            this.layout !== n.PulseLayout.Default &&
                            (e.layout = this.layout),
                        e
                    );
                }
                get disableExploreFilter() {
                    return this.hasAttribute(
                        n.PulseAttributes.DisableExploreFilter
                    );
                }
                set disableExploreFilter(e) {
                    e
                        ? this.setAttribute(
                              n.PulseAttributes.DisableExploreFilter,
                              ""
                          )
                        : this.removeAttribute(
                              n.PulseAttributes.DisableExploreFilter
                          );
                }
                get layout() {
                    const e = c.attributeToEnumKey(
                        this.getAttribute(n.PulseAttributes.Layout)
                    );
                    return n.PulseLayout[e] || n.PulseLayout.Default;
                }
                set layout(e) {
                    e
                        ? this.setAttribute(n.PulseAttributes.Layout, e)
                        : this.removeAttribute(n.PulseAttributes.Layout);
                }
                get themeObj() {
                    var e;
                    let t;
                    for (const {
                        name: r,
                        value: i,
                        type: n,
                    } of this.readThemeParametersFromChild())
                        (t = null != t ? t : {}),
                            n
                                ? ((t[n] = null != (e = t[n]) ? e : {}),
                                  (t[n][r] = i))
                                : (t[r] = i);
                    return t;
                }
                get timeDimension() {
                    const e = this.getAttribute(
                        n.PulseAttributes.TimeDimension
                    );
                    if (e)
                        return (
                            a.ErrorHelpers.verifyEnumValue(
                                e,
                                n.PulseTimeDimension,
                                "Contract.PulseTimeDimension"
                            ),
                            n.PulseTimeDimension[e]
                        );
                }
                set timeDimension(e) {
                    e
                        ? (a.ErrorHelpers.verifyEnumValue(
                              e,
                              n.PulseTimeDimension,
                              "Contract.PulseTimeDimension"
                          ),
                          this.setAttribute(n.PulseAttributes.TimeDimension, e))
                        : this.removeAttribute(n.PulseAttributes.TimeDimension);
                }
                get isTokenOptional() {
                    return this.hasAttribute(n.PulseAttributes.TokenOptional);
                }
                set isTokenOptional(e) {
                    e
                        ? this.setAttribute(n.PulseAttributes.TokenOptional, "")
                        : this.removeAttribute(n.PulseAttributes.TokenOptional);
                }
                addFilter(e, t) {
                    this._preInitFilters.push({ field: e, value: t }),
                        u.WebComponentManager.synchronizeRender(
                            this.updateRenderingIfInitialized.bind(
                                this,
                                this.src
                            )
                        );
                }
                resize() {
                    this._pulseImpl.resize();
                }
                applyFilterAsync(e, t, r, i) {
                    return this.applyFiltersAsync([
                        { fieldName: e, values: t, updateType: r, options: i },
                    ]).then((e) => e[0]);
                }
                applyFiltersAsync(e) {
                    return this._pulseImpl.applyFiltersAsync(e);
                }
                getTimeDimensionAsync() {
                    return this._pulseImpl.getTimeDimensionAsync();
                }
                applyTimeDimensionAsync(e) {
                    return this._pulseImpl.applyTimeDimensionAsync(e);
                }
                getFiltersAsync() {
                    return this._pulseImpl.getFiltersAsync();
                }
                clearFilterAsync(e) {
                    return this.clearFiltersAsync([e]).then((e) => e[0]);
                }
                clearFiltersAsync(e) {
                    return this._pulseImpl.clearFiltersAsync(e);
                }
                clearAllFiltersAsync() {
                    return this._pulseImpl.clearAllFiltersAsync();
                }
            }
            t.TableauPulse = p;
        },
        5312: function (e, t, r) {
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return (t.default = e), t;
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = i(r(7419)),
                a = r(3448),
                o = r(5136),
                s = r(5339),
                l = r(9184),
                u = r(140),
                c = r(3540),
                d = r(2512),
                p = r(3792),
                h = r(9344),
                m = r(2024),
                y = r(4756),
                g = r(9432),
                f = r(5884);
            class b extends f.TableauVizBase {
                constructor() {
                    super(...arguments), (this.preInitFilters = []);
                }
                readFiltersFromChild() {
                    const e = [];
                    return (
                        [].forEach.call(this.children, (t) => {
                            t.localName === n.VizChildElements.VizFilter &&
                                t.getAttribute(
                                    n.VizChildElementAttributes.Field
                                ) &&
                                void 0 !==
                                    t.getAttribute(
                                        n.VizChildElementAttributes.Value
                                    ) &&
                                e.push({
                                    field: t.getAttribute(
                                        n.VizChildElementAttributes.Field
                                    ),
                                    value: t.getAttribute(
                                        n.VizChildElementAttributes.Value
                                    ),
                                });
                        }),
                        e
                    );
                }
                readParametersFromChild() {
                    const e = [];
                    return (
                        [].forEach.call(this.children, (t) => {
                            t.localName === n.VizChildElements.VizParameter &&
                                t.getAttribute(
                                    n.VizChildElementAttributes.Name
                                ) &&
                                t.getAttribute(
                                    n.VizChildElementAttributes.Value
                                ) &&
                                e.push({
                                    name: t.getAttribute(
                                        n.VizChildElementAttributes.Name
                                    ),
                                    value: t.getAttribute(
                                        n.VizChildElementAttributes.Value
                                    ),
                                });
                        }),
                        e
                    );
                }
                static get observedAttributes() {
                    return [
                        ...super.observedAttributes,
                        ...Object.values(n.VizAttributes),
                    ];
                }
                disconnectedCallback() {
                    (this.preInitFilters = []), super.disconnectedCallback();
                }
                createFrameUrlWithParams() {
                    const e = this.constructVizqlOptions(),
                        t = this.readFiltersFromChild().concat(
                            this.preInitFilters
                        ),
                        r = this.readParametersFromChild(),
                        i = this.readCustomParamsFromChildren();
                    return m.createVizUrl(
                        this.src,
                        m.EmbeddingUrlMode.Viewing,
                        e,
                        this._embeddingIdCounter,
                        t,
                        r,
                        i
                    );
                }
                constructVizqlOptions() {
                    return {
                        disableUrlActionsPopups: this.disableUrlActionsPopups,
                        hideTabs: this.hideTabs,
                        toolbar: this.toolbar,
                        instanceIdToClone: this.instanceIdToClone,
                        device: this.device,
                        token: this.token,
                        touchOptimize: this.touchOptimize,
                        hideEditButton: this.hideEditButton,
                        hideEditInDesktopButton: this.hideEditInDesktopButton,
                        suppressDefaultEditBehavior:
                            this.suppressDefaultEditBehavior,
                        debug: this.debug,
                        iframeAuth: this.iframeAuth,
                    };
                }
                getAttributeEvents() {
                    return [
                        [
                            n.VizAttributes.OnCustomMarkContextMenuEvent,
                            n.EmbeddingTableauEventType
                                .CustomMarkContextMenuEvent,
                        ],
                        [
                            n.VizAttributes.OnEditButtonClicked,
                            n.EmbeddingTableauEventType.EditButtonClicked,
                        ],
                        [
                            n.VizSharedAttributes.OnEditInDesktopButtonClicked,
                            n.EmbeddingTableauEventType
                                .EditInDesktopButtonClicked,
                        ],
                        [
                            n.VizAttributes.OnFilterChanged,
                            n.EmbeddingTableauEventType.FilterChanged,
                        ],
                        [
                            n.VizSharedAttributes.OnFirstInteractive,
                            n.EmbeddingTableauEventType.FirstInteractive,
                        ],
                        [
                            n.VizSharedAttributes.OnFirstVizSizeKnown,
                            n.EmbeddingTableauEventType.FirstVizSizeKnown,
                        ],
                        [
                            n.VizAttributes.OnMarkSelectionChanged,
                            n.EmbeddingTableauEventType.MarkSelectionChanged,
                        ],
                        [
                            n.VizAttributes.OnParameterChanged,
                            n.EmbeddingTableauEventType.ParameterChanged,
                        ],
                        [
                            n.VizAttributes.OnTabSwitched,
                            n.EmbeddingTableauEventType.TabSwitched,
                        ],
                        [
                            n.VizAttributes.OnToolbarStateChanged,
                            n.EmbeddingTableauEventType.ToolbarStateChanged,
                        ],
                        [
                            n.VizAttributes.OnUrlAction,
                            n.EmbeddingTableauEventType.UrlAction,
                        ],
                        [
                            n.VizAttributes.OnCustomViewLoaded,
                            n.EmbeddingTableauEventType.CustomViewLoaded,
                        ],
                        [
                            n.VizAttributes.OnCustomViewRemoved,
                            n.EmbeddingTableauEventType.CustomViewRemoved,
                        ],
                        [
                            n.VizAttributes.OnCustomViewSaved,
                            n.EmbeddingTableauEventType.CustomViewSaved,
                        ],
                        [
                            n.VizAttributes.OnCustomViewSetDefault,
                            n.EmbeddingTableauEventType.CustomViewSetDefault,
                        ],
                        [
                            n.VizAttributes.OnStoryPointSwitched,
                            n.EmbeddingTableauEventType.StoryPointSwitched,
                        ],
                        [
                            n.VizAttributes.OnSummaryDataChanged,
                            n.EmbeddingTableauEventType.SummaryDataChanged,
                        ],
                        [
                            n.VizAttributes.OnReadyToReceiveAuthToken,
                            n.EmbeddingTableauEventType.ReadyToReceiveAuthToken,
                        ],
                    ];
                }
                getRegisteredEvents() {
                    return super.getRegisteredEvents().concat([
                        [
                            a.NotificationId.SelectedMarksChanged,
                            (e) => this.shouldNotifyEvent(e),
                            (e) => this.handleSelectedMarksChangedEvent(e),
                        ],
                        [
                            a.NotificationId.FilterChanged,
                            (e) => this.shouldNotifyEvent(e.visualId),
                            (e) => this.handleFilterChangedEvent(e),
                        ],
                        [
                            a.NotificationId.EditButtonClicked,
                            () => !0,
                            () => this.handleEditButtonClicked(),
                        ],
                        [
                            a.NotificationId.CustomMarkContextMenuClicked,
                            (e) => this.shouldNotifyEvent(e.visualId),
                            (e) =>
                                this.handleCustomMarkClickedContextMenuEvent(e),
                        ],
                        [
                            a.NotificationId.ParameterChanged,
                            () => !0,
                            (e) => this.handleParameterChangedEvent(e),
                        ],
                        [
                            a.NotificationId.UrlAction,
                            () => !0,
                            (e) => this.handleUrlAction(e),
                        ],
                        [
                            a.NotificationId.StoryPointSwitched,
                            () => !0,
                            (e) => this.handleStoryPointSwitch(e),
                        ],
                        [
                            a.NotificationId.SummaryDataChanged,
                            (e) => this.shouldNotifyEvent(e.visualId),
                            (e) => this.handleSummaryDataChangedEvent(e),
                        ],
                    ]);
                }
                shouldNotifyEvent(e) {
                    switch (this.workbook.activeSheet.sheetType) {
                        case n.SheetType.Worksheet:
                            return (
                                this.workbook.activeSheet.name === e.worksheet
                            );
                        case n.SheetType.Dashboard:
                            return (
                                1 ===
                                this.workbook.activeSheet.worksheets.filter(
                                    (t) => t.name === e.worksheet
                                ).length
                            );
                        case n.SheetType.Story: {
                            const t =
                                this.workbook.activeSheet.activeStoryPoint
                                    .containedSheet;
                            return (
                                !!t &&
                                (t.sheetType === n.SheetType.Worksheet
                                    ? t.name === e.worksheet
                                    : t.sheetType === n.SheetType.Dashboard &&
                                      1 ===
                                          t.worksheets.filter(
                                              (t) => t.name === e.worksheet
                                          ).length)
                            );
                        }
                        default:
                            return !1;
                    }
                }
                handleSelectedMarksChangedEvent(e) {
                    const t = new u.MarksSelectedEvent(
                        this.getWorksheetForNotificationHandler(e)
                    );
                    this.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.MarkSelectionChanged,
                            { detail: t }
                        )
                    );
                }
                handleFilterChangedEvent(e) {
                    const t = new l.FilterChangedEvent(
                        this.getWorksheetForNotificationHandler(e.visualId),
                        e.fieldName,
                        e.fieldId
                    );
                    this.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.FilterChanged,
                            { detail: t }
                        )
                    );
                }
                handleSummaryDataChangedEvent(e) {
                    const t = new p.SummaryDataChangedEvent(
                        this.getWorksheetForNotificationHandler(e.visualId)
                    );
                    this.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.SummaryDataChanged,
                            { detail: t }
                        )
                    );
                }
                handleEditButtonClicked() {
                    this.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.EditButtonClicked
                        )
                    );
                }
                handleCustomMarkClickedContextMenuEvent(e) {
                    const t = new s.CustomMarkContextMenuEvent(
                        this.getWorksheetForNotificationHandler(e.visualId),
                        e.contextMenuId
                    );
                    this.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.CustomMarkContextMenuEvent,
                            { detail: t }
                        )
                    );
                }
                handleParameterChangedEvent(e) {
                    const t = new c.ParameterChangedEvent(
                        e,
                        this.vizImpl.embeddingId
                    );
                    this.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.ParameterChanged,
                            { detail: t }
                        )
                    );
                }
                handleUrlAction(e) {
                    const t = new h.UrlActionEvent(e.url, e.target);
                    this.dispatchEvent(
                        new CustomEvent(n.EmbeddingTableauEventType.UrlAction, {
                            detail: t,
                        })
                    );
                }
                handleStoryPointSwitch(e) {
                    const t = this.vizImpl.workbookImpl.activeSheet,
                        r = t.storyPointsInfo.find((e) => !0 === e.active);
                    if (
                        t.activeStoryPoint &&
                        r &&
                        t.activeStoryPoint.index !== e.index
                    ) {
                        t.updateStory(e);
                        const i = new d.StoryPointSwitchedEvent(
                            r,
                            t.activeStoryPoint,
                            this.vizImpl.workbookImpl
                        );
                        this.dispatchEvent(
                            new CustomEvent(
                                n.EmbeddingTableauEventType.StoryPointSwitched,
                                { detail: i }
                            )
                        );
                    }
                }
                getWorksheetForNotificationHandler(e) {
                    let t;
                    switch (this.workbook.activeSheet.sheetType) {
                        case n.SheetType.Worksheet:
                            t = this.workbook.activeSheet;
                            break;
                        case n.SheetType.Dashboard: {
                            const r =
                                this.workbook.activeSheet.worksheets.filter(
                                    (t) => t.name === e.worksheet
                                );
                            if (1 !== r.length)
                                throw new o.TableauError(
                                    n.EmbeddingErrorCodes.IndexOutOfRange,
                                    "Worksheet not found"
                                );
                            t = r[0];
                            break;
                        }
                        case n.SheetType.Story: {
                            const r =
                                this.workbook.activeSheet.activeStoryPoint
                                    .containedSheet;
                            if (!r)
                                throw new o.TableauError(
                                    n.EmbeddingErrorCodes.IndexOutOfRange,
                                    "Worksheet not found"
                                );
                            if (r.sheetType === n.SheetType.Worksheet) t = r;
                            else {
                                if (r.sheetType !== n.SheetType.Dashboard)
                                    throw new o.TableauError(
                                        n.EmbeddingErrorCodes.ImplementationError,
                                        "Could not find sheetType"
                                    );
                                {
                                    const i = r.worksheets.filter(
                                        (t) => t.name === e.worksheet
                                    );
                                    if (1 !== i.length)
                                        throw new o.TableauError(
                                            n.EmbeddingErrorCodes.IndexOutOfRange,
                                            "Worksheet not found"
                                        );
                                    t = i[0];
                                }
                            }
                            break;
                        }
                        default:
                            throw new o.TableauError(
                                n.EmbeddingErrorCodes.ImplementationError,
                                "Could not find sheetType"
                            );
                    }
                    return t;
                }
                get disableUrlActionsPopups() {
                    return this.hasAttribute(
                        n.VizAttributes.DisableUrlActionsPopups
                    );
                }
                set disableUrlActionsPopups(e) {
                    e
                        ? this.setAttribute(
                              n.VizAttributes.DisableUrlActionsPopups,
                              ""
                          )
                        : this.removeAttribute(
                              n.VizAttributes.DisableUrlActionsPopups
                          );
                }
                get hideTabs() {
                    return this.hasAttribute(n.VizAttributes.HideTabs);
                }
                set hideTabs(e) {
                    e
                        ? this.setAttribute(n.VizAttributes.HideTabs, "")
                        : this.removeAttribute(n.VizAttributes.HideTabs);
                }
                get toolbar() {
                    const e = f.attributeToEnumKey(
                        this.getAttribute(n.VizAttributes.Toolbar)
                    );
                    return (
                        n.Toolbar[e] ||
                        f.TableauVizBase.VizAttributeDefaults.toolbar
                    );
                }
                set toolbar(e) {
                    e && this.setAttribute(n.VizAttributes.Toolbar, e);
                }
                get instanceIdToClone() {
                    const e = this.getAttribute(
                        n.VizAttributes.InstanceIdToClone
                    );
                    if (e) return e;
                }
                set instanceIdToClone(e) {
                    e
                        ? this.setAttribute(
                              n.VizAttributes.InstanceIdToClone,
                              e
                          )
                        : this.removeAttribute(
                              n.VizAttributes.InstanceIdToClone
                          );
                }
                get device() {
                    const e = f.attributeToEnumKey(
                        this.getAttribute(n.VizAttributes.Device)
                    );
                    return (
                        n.DeviceType[e] ||
                        f.TableauVizBase.VizAttributeDefaults.device
                    );
                }
                set device(e) {
                    this.setAttribute(n.VizAttributes.Device, e);
                }
                get hideEditButton() {
                    return this.hasAttribute(n.VizAttributes.HideEditButton);
                }
                set hideEditButton(e) {
                    e
                        ? this.setAttribute(n.VizAttributes.HideEditButton, "")
                        : this.removeAttribute(n.VizAttributes.HideEditButton);
                }
                get automaticUpdatesArePaused() {
                    return this.vizImpl.automaticUpdatesArePaused;
                }
                pauseAutomaticUpdatesAsync() {
                    return this.vizImpl.pauseAutomaticUpdatesAsync();
                }
                resumeAutomaticUpdatesAsync() {
                    return this.vizImpl.resumeAutomaticUpdatesAsync();
                }
                toggleAutomaticUpdatesAsync() {
                    return this.vizImpl.toggleAutomaticUpdatesAsync();
                }
                revertAllAsync() {
                    return this.vizImpl.revertAllAsync();
                }
                refreshDataAsync() {
                    return this.vizImpl.refreshDataAsync();
                }
                exportImageAsync() {
                    return this.vizImpl.exportImageAsync();
                }
                exportCrosstabAsync(e, t) {
                    return this.vizImpl.exportCrosstabAsync(e, t);
                }
                exportDataAsync(e, t) {
                    return this.vizImpl.exportDataAsync(e, t);
                }
                exportPowerPointAsync(e) {
                    return this.vizImpl.exportPowerPointAsync(e);
                }
                exportPDFAsync(e, t) {
                    return this.vizImpl.exportPDFAsync(e, t);
                }
                displayDialogAsync(e) {
                    return this.vizImpl.displayDialogAsync(e);
                }
                redoAsync() {
                    return this.vizImpl.redoAsync();
                }
                undoAsync() {
                    return this.vizImpl.undoAsync();
                }
                setAuthToken(e) {
                    this.vizImpl.setAuthToken(e);
                }
                addFilter(e, t) {
                    this.preInitFilters.push({ field: e, value: t }),
                        g.WebComponentManager.synchronizeRender(
                            this.updateRenderingIfInitialized.bind(
                                this,
                                this.src
                            )
                        );
                }
                get workbook() {
                    return new y.Workbook(this.vizImpl.workbookImpl);
                }
            }
            t.TableauViz = b;
        },
        5884: function (e, t, r) {
            var i =
                    (this && this.__awaiter) ||
                    function (e, t, r, i) {
                        return new (r || (r = Promise))(function (n, a) {
                            function o(e) {
                                try {
                                    l(i.next(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function s(e) {
                                try {
                                    l(i.throw(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function l(e) {
                                var t;
                                e.done
                                    ? n(e.value)
                                    : ((t = e.value),
                                      t instanceof r
                                          ? t
                                          : new r(function (e) {
                                                e(t);
                                            })).then(o, s);
                            }
                            l((i = i.apply(e, t || [])).next());
                        });
                    },
                n =
                    (this && this.__importStar) ||
                    function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e)
                                Object.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        return (t.default = e), t;
                    };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const a = n(r(7419)),
                o = r(3448),
                s = r(5136),
                l = r(2936),
                u = r(6272),
                c = r(9432),
                d = r(5760);
            class p extends d.TableauWebComponent {
                disconnectedCallback() {
                    super.disconnectedCallback(),
                        this._vizImpl && this._vizImpl.dispose();
                }
                static get observedAttributes() {
                    return [
                        ...super.observedAttributes,
                        ...Object.values(a.VizSharedAttributes),
                    ];
                }
                updateRenderingIfInitialized(e) {
                    return i(this, void 0, void 0, function* () {
                        if (this._initialized)
                            return (
                                this._vizImpl && this._vizImpl.dispose(),
                                c.WebComponentManager.unregisterWebComponent(
                                    this._embeddingIdCounter
                                ),
                                this.updateRendering(e)
                            );
                    });
                }
                updateRendering(e) {
                    return i(this, void 0, void 0, function* () {
                        try {
                            if (((this._initialized = !0), !e))
                                return void console.debug(
                                    `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`
                                );
                            if (
                                (yield this.auth(u.getSiteId(e))) ===
                                d.TableauAuthResponse.Failure
                            )
                                return void console.debug(
                                    "Authentication failed."
                                );
                            if (!this.src)
                                return void console.debug(
                                    `A src needs to be set on the ${this.tagName.toLowerCase()} element. Skipping rendering.`
                                );
                            if (!this.iframe)
                                return void console.debug(
                                    "No iframe available to update the src."
                                );
                            (this._embeddingIdCounter =
                                c.WebComponentManager.registerWebComponent(
                                    this
                                )),
                                this.registerAttributeEvents();
                            const t = this.createFrameUrlWithParams();
                            return (
                                (this._vizImpl =
                                    this.createAndInitializeVizImpl(t)),
                                (this.iframe.src = t.toString()),
                                void this.raiseIframeSrcUpdatedNotification()
                            );
                        } catch (e) {
                            console.debug(e);
                        }
                    });
                }
                createAndInitializeVizImpl(e) {
                    const t = new l.VizImpl(
                        this,
                        this.iframe,
                        e,
                        this._embeddingIdCounter
                    );
                    return t.initializeViz(), t;
                }
                registerAttributeEvents() {
                    this.getAttributeEvents().forEach((e) => {
                        const [t, r] = e;
                        this.registerCallback(t, r);
                    });
                }
                initializeEvents() {
                    let e;
                    try {
                        e = s.ApiServiceRegistry.get(
                            this.vizImpl.embeddingId
                        ).getService("notification-service");
                    } catch (e) {
                        throw new s.TableauError(
                            a.EmbeddingErrorCodes.EventInitializationError,
                            "Event initialization failed"
                        );
                    }
                    const t = this.getRegisteredEvents();
                    for (const [r, i, n] of t) e.registerHandler(r, i, n);
                }
                getRegisteredEvents() {
                    return [
                        [
                            o.NotificationId.EditInDesktopButtonClicked,
                            () => !0,
                            () =>
                                this.dispatchEvent(
                                    new CustomEvent(
                                        a.EmbeddingTableauEventType.EditInDesktopButtonClicked
                                    )
                                ),
                        ],
                    ];
                }
                get touchOptimize() {
                    return this.hasAttribute(
                        a.VizSharedAttributes.TouchOptimize
                    );
                }
                set touchOptimize(e) {
                    e
                        ? this.setAttribute(
                              a.VizSharedAttributes.TouchOptimize,
                              ""
                          )
                        : this.removeAttribute(
                              a.VizSharedAttributes.TouchOptimize
                          );
                }
                get vizImpl() {
                    return this._vizImpl;
                }
                get hideEditInDesktopButton() {
                    return this.hasAttribute(
                        a.VizSharedAttributes.HideEditInDesktopButton
                    );
                }
                set hideEditInDesktopButton(e) {
                    e
                        ? this.setAttribute(
                              a.VizSharedAttributes.HideEditInDesktopButton,
                              ""
                          )
                        : this.removeAttribute(
                              a.VizSharedAttributes.HideEditInDesktopButton
                          );
                }
                get suppressDefaultEditBehavior() {
                    return this.hasAttribute(
                        a.VizSharedAttributes.SuppressDefaultEditBehavior
                    );
                }
                set suppressDefaultEditBehavior(e) {
                    e
                        ? this.setAttribute(
                              a.VizSharedAttributes.SuppressDefaultEditBehavior,
                              ""
                          )
                        : this.removeAttribute(
                              a.VizSharedAttributes.SuppressDefaultEditBehavior
                          );
                }
                get disableVersionCheck() {
                    return this.hasAttribute(
                        a.VizSharedAttributes.DisableVersionCheck
                    );
                }
                set disableVersionCheck(e) {
                    e
                        ? this.setAttribute(
                              a.VizSharedAttributes.DisableVersionCheck,
                              ""
                          )
                        : this.removeAttribute(
                              a.VizSharedAttributes.DisableVersionCheck
                          );
                }
                getCurrentSrcAsync() {
                    return this.vizImpl.getCurrentSrcAsync();
                }
                resize() {
                    this.vizImpl.resize();
                }
            }
            (t.TableauVizBase = p),
                (p.VizAttributeDefaults = {
                    device: a.DeviceType.Default,
                    toolbar: a.Toolbar.Bottom,
                }),
                (t.attributeToEnumKey = function (e) {
                    if (!e || e.length < 1) return "";
                    const t = e.toLowerCase();
                    return t[0].toUpperCase() + t.substring(1);
                });
        },
        5760: function (e, t, r) {
            var i =
                (this && this.__awaiter) ||
                function (e, t, r, i) {
                    return new (r || (r = Promise))(function (n, a) {
                        function o(e) {
                            try {
                                l(i.next(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function s(e) {
                            try {
                                l(i.throw(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function l(e) {
                            var t;
                            e.done
                                ? n(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                      ? t
                                      : new r(function (e) {
                                            e(t);
                                        })).then(o, s);
                        }
                        l((i = i.apply(e, t || [])).next());
                    });
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = r(7419),
                a = r(5136),
                o = r(8776),
                s = r(2240),
                l = r(9432);
            var u;
            !(function (e) {
                (e.Skip = "skip"),
                    (e.Success = "success"),
                    (e.Failure = "failure");
            })((u = t.TableauAuthResponse || (t.TableauAuthResponse = {})));
            const c = "style",
                d = "class",
                p = "loading";
            t.getLocalizedTitle = (e) => {
                const t = {
                    en: "Data Visualization",
                    "en-GB": "Data Visualisation",
                    fr: "Visualisation de donnÃ©es",
                    es: "VisualizaciÃ³n de datos",
                    it: "Visualizzazione dati",
                    pt: "VisualizaÃ§Ã£o de dados",
                    ja: "ãƒ‡ãƒ¼ã‚¿ ãƒ“ã‚¸ãƒ¥ã‚¢ãƒ©ã‚¤ã‚¼ãƒ¼ã‚·ãƒ§ãƒ³",
                    de: "Datenvisualisierung",
                    ko: "ë°ì´í„° ë¹„ì£¼ì–¼ë¦¬ì œì´ì…˜",
                    "zh-CN": "æ•°æ®å¯è§†åŒ–",
                    "zh-TW": "è³‡æ–™å¯è¦–åŒ–",
                };
                return t[e] || t[e.substr(0, 2)] || t.en;
            };
            class h extends HTMLElement {
                constructor() {
                    super(),
                        (this._initialized = !1),
                        (this._embeddingIdCounter = 0),
                        (this._fixedSize = !1),
                        this.attachShadow({ mode: "open" });
                }
                disconnectedCallback() {
                    var e, t;
                    this._iframe &&
                        (null === (e = this.shadowRoot) ||
                            void 0 === e ||
                            e.removeChild(this._iframe)),
                        this._iframeStyle &&
                            (null === (t = this.shadowRoot) ||
                                void 0 === t ||
                                t.removeChild(this._iframeStyle)),
                        l.WebComponentManager.clearOrigin(
                            this.src,
                            this.forceTokenSync
                        ),
                        l.WebComponentManager.unregisterWebComponent(
                            this._embeddingIdCounter
                        ),
                        (this._initialized = !1);
                }
                connectedCallback() {
                    "loading" === document.readyState
                        ? document.addEventListener("DOMContentLoaded", () => {
                              this.initialize();
                          })
                        : this.initialize();
                }
                attributeChangedCallback(e, t, r) {
                    (t || t !== r) &&
                        (e !== n.WebComponentAttributes.Width &&
                        e !== n.WebComponentAttributes.Height
                            ? (e === n.WebComponentAttributes.Token &&
                                  t &&
                                  t !== r &&
                                  l.WebComponentManager.clearOrigin(
                                      this.src,
                                      this.forceTokenSync
                                  ),
                              l.WebComponentManager.synchronizeRender(
                                  this.updateRenderingIfInitialized.bind(
                                      this,
                                      this.src
                                  )
                              ))
                            : this.setFrameSize());
                }
                static get observedAttributes() {
                    return Object.values(n.WebComponentAttributes);
                }
                initialize() {
                    this._initialized ||
                        ((this.style.display = "flex"),
                        this.setupFrame(),
                        this.registerAttributeAuthErrorEvent(),
                        l.WebComponentManager.synchronizeRender(
                            this.updateRendering.bind(this, this.src)
                        ));
                }
                get fixedSize() {
                    return this._fixedSize;
                }
                readCustomParamsFromChildren() {
                    const e = [];
                    return (
                        Array.from(this.children).forEach((t) => {
                            t.localName ===
                                n.WebComponentChildElements.CustomParameter &&
                                t.getAttribute(
                                    n.WebComponentChildElementAttributes.Name
                                ) &&
                                t.getAttribute(
                                    n.WebComponentChildElementAttributes.Value
                                ) &&
                                e.push({
                                    name: t.getAttribute(
                                        n.WebComponentChildElementAttributes
                                            .Name
                                    ),
                                    value: t.getAttribute(
                                        n.WebComponentChildElementAttributes
                                            .Value
                                    ),
                                });
                        }),
                        e
                    );
                }
                getIframeStyleChild() {
                    let e;
                    for (const t of Array.from(this.children))
                        if (
                            t.localName ===
                            n.WebComponentChildElements.IframeStyle
                        ) {
                            if (e)
                                throw new a.TableauError(
                                    n.EmbeddingErrorCodes.InternalError,
                                    `Only one ${n.WebComponentChildElements.IframeStyle} child element is supported. Please combine your styles.`
                                );
                            e = t;
                        }
                    return e;
                }
                setupFrame() {
                    var e;
                    this._iframe = document.createElement("iframe");
                    const r = navigator.language,
                        i = t.getLocalizedTitle(r);
                    if (
                        (this._iframe.setAttribute("title", i),
                        this._iframe.setAttribute("allowTransparency", "true"),
                        this._iframe.setAttribute("allowFullScreen", "true"),
                        this.iframeAttributeLoading &&
                            this._iframe.setAttribute(
                                "loading",
                                this.iframeAttributeLoading
                            ),
                        (this._iframe.style.margin = "0px"),
                        (this._iframe.style.padding = "0px"),
                        (this._iframe.style.border = "none"),
                        (this._iframe.style.position = "relative"),
                        (this._iframe.id = this.id),
                        (this._iframe.name = this.id),
                        this.setFrameSize(),
                        this.iframeAttributeStyle)
                    ) {
                        const e = this._iframe.getAttribute(c);
                        this._iframe.setAttribute(
                            c,
                            `${e} ${this.iframeAttributeStyle}`
                        );
                    }
                    if (
                        (this.iframeAttributeClass &&
                            this._iframe.setAttribute(
                                d,
                                this.iframeAttributeClass
                            ),
                        this.shadowRoot)
                    ) {
                        const t = this.getIframeStyleChild();
                        if (t) {
                            t.style.display = "none";
                            const r =
                                null === (e = t.textContent) || void 0 === e
                                    ? void 0
                                    : e.trim();
                            r &&
                                ((this._iframeStyle =
                                    document.createElement("style")),
                                (this._iframeStyle.textContent = r),
                                this.shadowRoot.appendChild(this._iframeStyle));
                        }
                        this.shadowRoot.appendChild(this._iframe);
                    }
                }
                setFrameSize() {
                    this._iframe &&
                        ((this._iframe.style.height = this.height),
                        (this._iframe.style.width = this.width));
                }
                computeElementSize() {
                    const e = this.getPixelAttribute(
                            n.WebComponentAttributes.Height
                        ),
                        t = this.getPixelAttribute(
                            n.WebComponentAttributes.Width
                        );
                    if (e && t)
                        return (this._fixedSize = !0), { height: e, width: t };
                    if (this.parentElement) {
                        const { height: e, width: t } =
                            s.HtmlElementHelpers.getContentSize(
                                this.parentElement
                            );
                        if (e && t)
                            return (
                                (this._fixedSize = !0),
                                { height: `${e}px`, width: `${t}px` }
                            );
                    }
                    return (
                        (this._fixedSize = !1),
                        {
                            height: h.AttributeDefaults.height,
                            width: h.AttributeDefaults.width,
                        }
                    );
                }
                get src() {
                    return this.getAttribute(n.WebComponentAttributes.Src);
                }
                set src(e) {
                    e && this.setAttribute(n.WebComponentAttributes.Src, e);
                }
                get forceTokenSync() {
                    return this.hasAttribute(
                        n.WebComponentAttributes.ForceTokenSync
                    );
                }
                set forceTokenSync(e) {
                    e
                        ? this.setAttribute(
                              n.WebComponentAttributes.ForceTokenSync,
                              ""
                          )
                        : this.removeAttribute(
                              n.WebComponentAttributes.ForceTokenSync
                          );
                }
                get width() {
                    return this.computeElementSize().width;
                }
                set width(e) {
                    this.setAttribute(n.WebComponentAttributes.Width, e);
                }
                get height() {
                    return this.computeElementSize().height;
                }
                set height(e) {
                    this.setAttribute(n.WebComponentAttributes.Height, e);
                }
                get debug() {
                    return this.hasAttribute(n.WebComponentAttributes.Debug);
                }
                set debug(e) {
                    e
                        ? this.setAttribute(n.WebComponentAttributes.Debug, "")
                        : this.removeAttribute(n.WebComponentAttributes.Debug);
                }
                get token() {
                    const e = this.getAttribute(n.WebComponentAttributes.Token);
                    if (e) return e;
                }
                set token(e) {
                    e
                        ? this.setAttribute(n.WebComponentAttributes.Token, e)
                        : this.removeAttribute(n.WebComponentAttributes.Token);
                }
                get iframeAuth() {
                    return this.hasAttribute(
                        n.WebComponentAttributes.IframeAuth
                    );
                }
                set iframeAuth(e) {
                    e
                        ? this.setAttribute(
                              n.WebComponentAttributes.IframeAuth,
                              ""
                          )
                        : this.removeAttribute(
                              n.WebComponentAttributes.IframeAuth
                          );
                }
                get iframeAttributeLoading() {
                    const e = this.getAttribute(
                        n.EmbeddedIframeAttributes.Loading
                    );
                    if (e) return e;
                }
                set iframeAttributeLoading(e) {
                    var t, r;
                    e
                        ? (this.setAttribute(
                              n.EmbeddedIframeAttributes.Loading,
                              e
                          ),
                          null === (t = this._iframe) ||
                              void 0 === t ||
                              t.setAttribute(p, e))
                        : (this.removeAttribute(
                              n.EmbeddedIframeAttributes.Loading
                          ),
                          null === (r = this._iframe) ||
                              void 0 === r ||
                              r.removeAttribute(p));
                }
                get iframeAttributeStyle() {
                    const e = this.getAttribute(
                        n.EmbeddedIframeAttributes.Style
                    );
                    if (e) return e;
                }
                set iframeAttributeStyle(e) {
                    var t, r;
                    e
                        ? (this.setAttribute(
                              n.EmbeddedIframeAttributes.Style,
                              e
                          ),
                          null === (t = this._iframe) ||
                              void 0 === t ||
                              t.setAttribute(c, e))
                        : (this.removeAttribute(
                              n.EmbeddedIframeAttributes.Style
                          ),
                          null === (r = this._iframe) ||
                              void 0 === r ||
                              r.removeAttribute(c));
                }
                get iframeAttributeClass() {
                    const e = this.getAttribute(
                        n.EmbeddedIframeAttributes.Class
                    );
                    if (e) return e;
                }
                set iframeAttributeClass(e) {
                    var t, r;
                    e
                        ? (this.setAttribute(
                              n.EmbeddedIframeAttributes.Class,
                              e
                          ),
                          null === (t = this._iframe) ||
                              void 0 === t ||
                              t.setAttribute(d, e))
                        : (this.removeAttribute(
                              n.EmbeddedIframeAttributes.Class
                          ),
                          null === (r = this._iframe) ||
                              void 0 === r ||
                              r.removeAttribute(d));
                }
                getPixelAttribute(e) {
                    const t = this.getAttribute(e);
                    return t && "" !== t
                        ? isNaN(Number(t))
                            ? t
                            : `${Math.round(Number(t))}px`
                        : "";
                }
                get iframe() {
                    return this._iframe;
                }
                registerAttributeAuthErrorEvent() {
                    this.getWebComponentAttributeEvents().forEach((e) => {
                        const [t, r] = e;
                        this.registerCallback(t, r);
                    });
                }
                getWebComponentAttributeEvents() {
                    return [
                        [
                            n.WebComponentAttributes.OnVizLoadError,
                            n.EmbeddingTableauEventType.VizLoadError,
                        ],
                    ];
                }
                registerCallback(e, t) {
                    const r = this.getAttribute(e);
                    r &&
                        /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(r) &&
                        window[r] &&
                        this.addEventListener(t, window[r]);
                }
                auth(e) {
                    return i(this, void 0, void 0, function* () {
                        try {
                            if (!this.src) return u.Skip;
                            if (!this.token) return u.Skip;
                            if (this.iframeAuth) return u.Skip;
                            if (
                                !l.WebComponentManager.authRequired(
                                    this.src,
                                    this.forceTokenSync
                                )
                            )
                                return u.Skip;
                            const t = `${new URL(
                                    this.src
                                ).origin.toString()}/vizportal/api/web/v1/auth/embed/signin`,
                                r = { siteName: e, jwt: this.token },
                                i = {
                                    method: "POST",
                                    credentials: "include",
                                    headers: {
                                        "content-type": "application/json",
                                    },
                                    body: JSON.stringify(r),
                                },
                                a = yield fetch(t, i);
                            if (a.ok)
                                return (
                                    l.WebComponentManager.updateSignedInOrigin(
                                        this.src,
                                        this.forceTokenSync
                                    ),
                                    u.Success
                                );
                            const o = yield a.text(),
                                s = { statusCode: a.status, errorMessage: o };
                            return this.isFallbackToRedirectAuthNeeded(s)
                                ? ((this.iframeAuth = !0),
                                  console.debug("Auth Fallback trigger"),
                                  u.Failure)
                                : (this.raiseVizLoadErrorNotification(
                                      n.EmbeddingErrorCodes.AuthFailed,
                                      s
                                  ),
                                  u.Failure);
                        } catch (e) {
                            return (
                                this.raiseVizLoadErrorNotification(
                                    n.EmbeddingErrorCodes.UnknownAuthError,
                                    e
                                ),
                                u.Failure
                            );
                        }
                    });
                }
                isFallbackToRedirectAuthNeeded(e) {
                    try {
                        if (404 === e.statusCode) return !0;
                        if (401 === e.statusCode) {
                            let t = JSON.parse(e.errorMessage).result.errors;
                            if (t && t.length > 0 && 67 === t[0].code)
                                return !0;
                        }
                        return !1;
                    } catch (e) {
                        return console.error("Parsing error: " + e), !1;
                    }
                }
                raiseIframeSrcUpdatedNotification() {
                    this.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.IframeSrcUpdated
                        )
                    );
                }
                raiseVizLoadErrorNotification(e, t) {
                    try {
                        console.error(t);
                        const r = new o.VizLoadErrorEvent(e, JSON.stringify(t));
                        this.dispatchEvent(
                            new CustomEvent(
                                n.EmbeddingTableauEventType.VizLoadError,
                                { detail: r }
                            )
                        );
                    } catch (e) {
                        const t = new o.VizLoadErrorEvent(
                            n.EmbeddingErrorCodes.UnknownAuthError,
                            ""
                        );
                        this.dispatchEvent(
                            new CustomEvent(
                                n.EmbeddingTableauEventType.VizLoadError,
                                { detail: t }
                            )
                        );
                    }
                }
            }
            (t.TableauWebComponent = h),
                (h.AttributeDefaults = { width: "800px", height: "600px" });
        },
        5339: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(7419),
                n = r(2260);
            class a extends n.TableauWorksheetEvent {
                constructor(e, t) {
                    super(
                        i.EmbeddingTableauEventType.CustomMarkContextMenuEvent,
                        e
                    ),
                        (this._contextMenuId = t);
                }
                getContextMenuId() {
                    return this._contextMenuId;
                }
                getSelectedMarksAsync() {
                    return this.worksheet.getSelectedMarksAsync();
                }
            }
            t.CustomMarkContextMenuEvent = a;
        },
        9184: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(7419),
                n = r(5136),
                a = r(2260);
            class o extends a.TableauWorksheetEvent {
                constructor(e, t, r) {
                    super(i.EmbeddingTableauEventType.FilterChanged, e),
                        (this._fieldName = t),
                        (this._fieldId = r);
                }
                get fieldName() {
                    return this._fieldName;
                }
                get fieldId() {
                    return this._fieldId;
                }
                getFilterAsync() {
                    return this.worksheet.getFiltersAsync().then((e) => {
                        const t = this.fieldId
                            ? e.find((e) => e.fieldId === this.fieldId, this)
                            : e.find(
                                  (e) => e.fieldName === this.fieldName,
                                  this
                              );
                        if (!t)
                            throw new n.TableauError(
                                i.EmbeddingErrorCodes.FilterMissingOrNotImplemented,
                                `Cannot find filter: ${this._fieldName}.`
                            );
                        return t;
                    });
                }
            }
            t.FilterChangedEvent = o;
        },
        2456: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.FirstPulseMetricSizeKnownEvent = class {
                    constructor(e, t) {
                        (this._width = e), (this._height = t);
                    }
                    get width() {
                        return this._width;
                    }
                    get height() {
                        return this._height;
                    }
                });
        },
        6276: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.FirstVizSizeKnownEvent = class {
                    constructor(e) {
                        this._vizSize = e;
                    }
                    get vizSize() {
                        return this._vizSize;
                    }
                });
        },
        140: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(7419),
                n = r(2260);
            class a extends n.TableauWorksheetEvent {
                constructor(e) {
                    super(i.EmbeddingTableauEventType.MarkSelectionChanged, e);
                }
                getMarksAsync() {
                    return this.worksheet.getSelectedMarksAsync();
                }
            }
            t.MarksSelectedEvent = a;
        },
        3540: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(7419),
                n = r(5136),
                a = r(8512);
            t.ParameterChangedEvent = class {
                constructor(e, t) {
                    (this._globalFieldName = e), (this._embeddingId = t);
                }
                getParameterAsync() {
                    return n.ApiServiceRegistry.get(this._embeddingId)
                        .getService("parameters-service")
                        .findParameterByGlobalFieldNameAsync(
                            this._globalFieldName
                        )
                        .then((e) => {
                            if (void 0 === e)
                                throw new n.TableauError(
                                    i.EmbeddingErrorCodes.MissingParameter,
                                    `Cannot find parameter: ${this._globalFieldName}`
                                );
                            return new a.Parameter(e);
                        });
                }
            };
        },
        2648: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.PulseErrorEvent = class {
                    constructor(e, t, r) {
                        (this._message = e),
                            (this._httpStatus = t),
                            (this._messageVisibility = r);
                    }
                    get message() {
                        return this._message;
                    }
                    get httpStatus() {
                        return this._httpStatus;
                    }
                    get messageVisibility() {
                        return this._messageVisibility;
                    }
                });
        },
        4416: function (e, t, r) {
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return (t.default = e), t;
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = i(r(7419)),
                a = r(5136);
            t.PulseFiltersChangedEvent = class {
                constructor(e, t) {
                    (this._fieldNames = e), (this._embeddingId = t);
                }
                get fieldNames() {
                    return this._fieldNames;
                }
                getFiltersAsync() {
                    return a.ApiServiceRegistry.get(this._embeddingId)
                        .getService("PulseService")
                        .getFiltersAsync()
                        .then((e) => {
                            const t = [],
                                r = [];
                            for (const i of this._fieldNames) {
                                const n = e.find((e) => e.fieldName === i);
                                n ? t.push(n) : r.push(i);
                            }
                            if (r.length)
                                throw new a.TableauError(
                                    n.EmbeddingErrorCodes.FilterMissingOrNotImplemented,
                                    `Cannot find filter(s): ${r.join(", ")}.`
                                );
                            return t;
                        });
                }
            };
        },
        3984: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.PulseInsightDiscoveredEvent = class {
                    constructor(e, t, r, i, n, a, o) {
                        (this._id = e),
                            (this._characterization = t),
                            (this._markup = r),
                            (this._question = i),
                            (this._score = n),
                            (this._type = a),
                            (this._version = o);
                    }
                    get id() {
                        return this._id;
                    }
                    get characterization() {
                        return this._characterization;
                    }
                    get markup() {
                        return this._markup;
                    }
                    get question() {
                        return this._question;
                    }
                    get score() {
                        return this._score;
                    }
                    get type() {
                        return this._type;
                    }
                    get version() {
                        return this._version;
                    }
                });
        },
        4984: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.PulseTimeDimensionChangedEvent = class {
                    constructor(e) {
                        this._timeDimension = e;
                    }
                    get timeDimension() {
                        return this._timeDimension;
                    }
                });
        },
        3616: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.PulseUrlChangedEvent = class {
                    constructor(e, t, r) {
                        (this._oldUrl = e),
                            (this._newUrl = t),
                            (this._context = r);
                    }
                    get oldUrl() {
                        return this._oldUrl;
                    }
                    get newUrl() {
                        return this._newUrl;
                    }
                    get context() {
                        return this._context;
                    }
                });
        },
        2512: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(4420),
                n = r(180);
            t.StoryPointSwitchedEvent = class {
                constructor(e, t, r) {
                    (this._oldStoryPointInfoImpl = e),
                        (this._currStoryPointImpl = t),
                        (this._workbookImpl = r);
                }
                get oldStoryPointInfo() {
                    return new n.StoryPointInfo(
                        this._oldStoryPointInfoImpl,
                        this._workbookImpl
                    );
                }
                get newStoryPoint() {
                    return new i.StoryPoint(
                        this._currStoryPointImpl,
                        this._workbookImpl
                    );
                }
            };
        },
        3792: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(7419),
                n = r(2260);
            class a extends n.TableauWorksheetEvent {
                constructor(e) {
                    super(i.EmbeddingTableauEventType.SummaryDataChanged, e);
                }
            }
            t.SummaryDataChangedEvent = a;
        },
        4852: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.TabSwitchedEvent = class {
                    constructor(e, t) {
                        (this._oldSheetName = e), (this._newSheetName = t);
                    }
                    get oldSheetName() {
                        return this._oldSheetName;
                    }
                    get newSheetName() {
                        return this._newSheetName;
                    }
                });
        },
        260: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.TableauSheetEvent = class {
                    constructor(e, t) {
                        this._sheet = t;
                    }
                    get sheet() {
                        return this._sheet;
                    }
                });
        },
        2260: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(260);
            class n extends i.TableauSheetEvent {
                constructor(e, t) {
                    super(e, t), (this._worksheet = t);
                }
                get worksheet() {
                    return this._worksheet;
                }
            }
            t.TableauWorksheetEvent = n;
        },
        964: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.ToolbarStateChangedEvent = class {
                    constructor(e, t) {
                        (this._canRedo = e), (this._canUndo = t);
                    }
                    get canRedo() {
                        return this._canRedo;
                    }
                    get canUndo() {
                        return this._canUndo;
                    }
                });
        },
        9344: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.UrlActionEvent = class {
                    constructor(e, t) {
                        (this._url = e), (this._target = t);
                    }
                    get url() {
                        return this._url;
                    }
                    get target() {
                        return this._target;
                    }
                });
        },
        8776: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.VizLoadErrorEvent = class {
                    constructor(e, t) {
                        (this._errorCode = e), (this._message = t);
                    }
                    get message() {
                        return this._message;
                    }
                    get errorCode() {
                        return this._errorCode;
                    }
                });
        },
        3712: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(5136);
            t.AuthoringWorksheetImpl = class {
                constructor(e) {
                    this._registryId = e;
                }
                getAbstractQueryWithDataModel() {
                    return i.ApiServiceRegistry.get(this._registryId)
                        .getService("EmbeddingVizApiService")
                        .getEmbeddingAbstractQueryAsync();
                }
                getVizStateWithDataModel() {
                    return i.ApiServiceRegistry.get(this._registryId)
                        .getService("EmbeddingVizApiService")
                        .getEmbeddingVizStateWithDataModelAsync();
                }
                setVizStateWithDataModel(e) {
                    return i.ApiServiceRegistry.get(this._registryId)
                        .getService("EmbeddingVizApiService")
                        .setEmbeddingVizStateWithDataModelAsync(e);
                }
            };
        },
        1232: function (e, t, r) {
            var i =
                    (this && this.__awaiter) ||
                    function (e, t, r, i) {
                        return new (r || (r = Promise))(function (n, a) {
                            function o(e) {
                                try {
                                    l(i.next(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function s(e) {
                                try {
                                    l(i.throw(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function l(e) {
                                var t;
                                e.done
                                    ? n(e.value)
                                    : ((t = e.value),
                                      t instanceof r
                                          ? t
                                          : new r(function (e) {
                                                e(t);
                                            })).then(o, s);
                            }
                            l((i = i.apply(e, t || [])).next());
                        });
                    },
                n =
                    (this && this.__importStar) ||
                    function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e)
                                Object.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        return (t.default = e), t;
                    };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const a = n(r(7419)),
                o = r(3448),
                s = r(5136);
            class l extends s.WorkbookImpl {
                constructor(e, t) {
                    super(),
                        (this._registryId = t),
                        (this._publishedSheetsInfo = []),
                        (this._customViews = new Map()),
                        (this._name = e.workbookName),
                        (this._canDownloadWorkbook = e.canDownloadWorkbook),
                        this.initializeWorkbook(e);
                }
                get activeSheet() {
                    return this._activeSheetImpl;
                }
                get publishedSheetsInfo() {
                    return this._publishedSheetsInfo;
                }
                get name() {
                    return this._name;
                }
                get canDownloadWorkbook() {
                    return this._canDownloadWorkbook;
                }
                get pendingTabSwitchPromise() {
                    return this._pendingTabSwitchPromise;
                }
                get pendingShowCustomViewPromise() {
                    return this._pendingShowCustomViewPromise;
                }
                clearPendingShowCustomViewPromise() {
                    this._pendingShowCustomViewPromise = void 0;
                }
                get activeCustomView() {
                    return this._currentCustomView;
                }
                activateSheetAsync(e) {
                    s.ErrorHelpers.verifyParameter(e, "sheetNameOrIndex");
                    let t = this.convertSheetIndexToSheetName(e);
                    return (
                        s.ErrorHelpers.verifyParameterType(
                            t,
                            "string",
                            "sheetNameOrIndex"
                        ),
                        this.validatePublishedSheet(t) ||
                            this.verifyDashboardSheets(t),
                        this._activeSheetImpl &&
                        t === this._activeSheetImpl.name
                            ? new Promise((e, t) => {
                                  e(this);
                              })
                            : (s.ApiServiceRegistry.get(this._registryId)
                                  .getService("viz-service")
                                  .activateSheetAsync(t),
                              new Promise((e, t) => {
                                  this._pendingTabSwitchPromise = {
                                      resolve: e,
                                      reject: t,
                                  };
                              }))
                    );
                }
                getParametersAsync() {
                    return s.ApiServiceRegistry.get(this._registryId)
                        .getService("parameters-service")
                        .getAllParametersAsync();
                }
                changeParameterValueAsync(e, t) {
                    return i(this, void 0, void 0, function* () {
                        s.ErrorHelpers.verifyParameter(e, "parameterName");
                        const r = s.ApiServiceRegistry.get(
                                this._registryId
                            ).getService("parameters-service"),
                            i = yield r.findParameterByNameAsync(e);
                        return i ? i.changeValueAsync(t).then(() => i) : void 0;
                    });
                }
                updateExistingActiveSheetReferences(e) {
                    if (this._activeSheetImpl) {
                        if (this._activeSheetImpl.name === e) return;
                        (this._activeSheetImpl.active = !1),
                            this._publishedSheetsInfo.forEach((e, t) => {
                                e.name === this._activeSheetImpl.name &&
                                    (e.active = !1);
                            });
                    }
                }
                processCustomViews(e, t) {
                    var r;
                    const i =
                        null === (r = t.currentView) || void 0 === r
                            ? void 0
                            : r.luid;
                    let n = [];
                    switch (e) {
                        case o.NotificationId.CustomViewsLoaded:
                        case o.NotificationId.CustomViewSaved:
                            if ((this.refreshCustomViewCache(t), i)) {
                                const e = this._customViews.get(i);
                                e && n.push(e);
                            }
                            break;
                        case o.NotificationId.CustomViewRemoved: {
                            let e = new Map(this._customViews);
                            this._customViews.clear(),
                                t.customViewsList.map((t) => {
                                    this._customViews.set(
                                        t.luid,
                                        new s.CustomViewImpl(
                                            t,
                                            this._registryId
                                        )
                                    ),
                                        e.delete(t.luid);
                                });
                            for (let t of e.values()) n.push(t);
                            break;
                        }
                        case o.NotificationId.CustomViewSetDefault: {
                            this.refreshCustomViewCache(t);
                            const e = t.customViewsList.find(
                                (e) => e.isDefault
                            );
                            e &&
                                n.push(
                                    new s.CustomViewImpl(e, this._registryId)
                                );
                            break;
                        }
                    }
                    return (
                        (this._currentCustomView = i
                            ? this._customViews.get(i)
                            : void 0),
                        n
                    );
                }
                refreshCustomViewCache(e) {
                    this._customViews.clear(),
                        e.customViewsList.map((e) => {
                            this._customViews.set(
                                e.luid,
                                new s.CustomViewImpl(e, this._registryId)
                            );
                        });
                }
                revertAllAsync() {
                    return s.ApiServiceRegistry.get(this._registryId)
                        .getService("ToolbarService")
                        .revertAllAsync();
                }
                getCustomViewsAsync() {
                    return s.ApiServiceRegistry.get(this._registryId)
                        .getService("viz-service")
                        .getCustomViewsAsync();
                }
                showCustomViewAsync(e) {
                    return (
                        s.ApiServiceRegistry.get(this._registryId)
                            .getService("viz-service")
                            .showCustomViewAsync(e),
                        new Promise((e, t) => {
                            this._pendingShowCustomViewPromise = {
                                resolve: e,
                                reject: t,
                            };
                        })
                    );
                }
                removeCustomViewAsync(e) {
                    return s.ApiServiceRegistry.get(this._registryId)
                        .getService("viz-service")
                        .removeCustomViewAsync(e);
                }
                saveCustomViewAsync(e) {
                    return s.ApiServiceRegistry.get(this._registryId)
                        .getService("viz-service")
                        .saveCustomViewAsync(e);
                }
                setActiveCustomViewAsDefaultAsync() {
                    return s.ApiServiceRegistry.get(this._registryId)
                        .getService("viz-service")
                        .setActiveCustomViewAsDefaultAsync();
                }
                initializeWorkbook(e) {
                    e.publishedSheets.forEach((t, r) => {
                        const i = s.SheetUtils.getSheetSizeFromSizeConstraints(
                                t.sizeConstraint
                            ),
                            n = t.name === e.currWorksheetName,
                            o = s.SheetUtils.getSheetTypeEnum(t.sheetType),
                            l = new s.SheetInfoImpl(
                                t.name,
                                o,
                                i,
                                r,
                                n,
                                !1,
                                t.url
                            );
                        if ((this._publishedSheetsInfo.push(l), n))
                            switch (l.sheetType) {
                                case a.SheetType.Worksheet: {
                                    const e = { worksheet: l.name };
                                    this._activeSheetImpl = new s.WorksheetImpl(
                                        l,
                                        this._registryId,
                                        e,
                                        null,
                                        null
                                    );
                                    break;
                                }
                                case a.SheetType.Dashboard: {
                                    const t = {
                                        sheetName: l.name,
                                        isDashboard: !0,
                                    };
                                    this._activeSheetImpl = new s.DashboardImpl(
                                        l,
                                        e.dashboardZones,
                                        t,
                                        this._registryId,
                                        null
                                    );
                                    break;
                                }
                                case a.SheetType.Story:
                                    if (!e.story)
                                        throw new s.TableauError(
                                            a.SharedErrorCodes.ServerError,
                                            "Unable to receive story information from Tableau"
                                        );
                                    this._activeSheetImpl = new s.StoryImpl(
                                        l,
                                        e.story,
                                        e.publishedSheets,
                                        this._registryId
                                    );
                                    break;
                                default:
                                    throw new s.TableauError(
                                        a.SharedErrorCodes.ServerError,
                                        "Invalid SheetType"
                                    );
                            }
                    });
                }
                convertSheetIndexToSheetName(e) {
                    if ("number" == typeof e) {
                        const t = e;
                        if (this.publishedSheetsInfo[t])
                            return this.publishedSheetsInfo[t].name;
                        throw new s.TableauError(
                            a.EmbeddingErrorCodes.IndexOutOfRange,
                            `Index ${t} is out of range.`
                        );
                    }
                    return e;
                }
                validatePublishedSheet(e) {
                    return (
                        void 0 !==
                        this.publishedSheetsInfo.find((t) => t.name === e)
                    );
                }
                verifyDashboardSheets(e) {
                    if (
                        this._activeSheetImpl.sheetType ===
                        a.SheetType.Dashboard
                    ) {
                        let t = this._activeSheetImpl,
                            r = t.worksheetsImpl.findIndex((t) => t.name === e);
                        if (-1 !== r) {
                            if (t.worksheetsImpl[r].hidden)
                                throw new s.TableauError(
                                    a.SharedErrorCodes.ServerError,
                                    "Cannot activate hidden sheet"
                                );
                            return;
                        }
                    }
                    throw new s.TableauError(
                        a.EmbeddingErrorCodes.SheetNotInWorkbook,
                        "Sheet is not found in Workbook"
                    );
                }
            }
            t.EmbeddingWorkbookImpl = l;
        },
        2144: function (e, t, r) {
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return (t.default = e), t;
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = i(r(7419)),
                a = r(3448),
                o = r(5136),
                s = r(2456),
                l = r(2648),
                u = r(4416),
                c = r(3984),
                d = r(4984),
                p = r(3616),
                h = r(8272),
                m = r(632),
                y = r(2240);
            t.PulseImpl = class {
                constructor(e, t, r, i, a, s) {
                    if (
                        ((this._pulse = e),
                        (this._iframe = t),
                        (this._frameUrl = r),
                        (this._timeDimension = i),
                        (this._filters = a),
                        (this._embeddingId = s),
                        (this._resizeEventType = "resize"),
                        !this._iframe)
                    )
                        throw new o.TableauError(
                            n.EmbeddingErrorCodes.InternalError,
                            "Iframe has not been created yet"
                        );
                    this._shouldDispatchMetricSizeKnownEvent = !i && !a.length;
                }
                get iframe() {
                    return this._iframe;
                }
                get embeddingId() {
                    return this._embeddingId;
                }
                initialize() {
                    const e = this._iframe.contentWindow;
                    if (!e)
                        throw new o.TableauError(
                            n.EmbeddingErrorCodes.InternalError,
                            "Iframe has not been created yet"
                        );
                    try {
                        (this._messenger = new a.CrossFrameMessenger(
                            window,
                            e,
                            this._frameUrl.origin
                        )),
                            (this._dispatcher = new o.CrossFrameDispatcher(
                                this._messenger
                            )),
                            h.registerInitializationEmbeddingServices(
                                this._dispatcher,
                                this.embeddingId
                            );
                        const t = o.ApiServiceRegistry.get(
                                this.embeddingId
                            ).getService("initialization-service"),
                            r = t.registerHandler(
                                a.NotificationId.FirstPulseMetricSizeKnown,
                                () => this._shouldDispatchMetricSizeKnownEvent,
                                (e) => {
                                    this.handlePulseMetricSizeKnownEvent(e),
                                        r();
                                }
                            );
                        t.registerHandler(
                            a.NotificationId.PulseInteractive,
                            () => !0,
                            (e) => {
                                this.handlePulseInteractiveEvent(e);
                            }
                        ),
                            t.registerHandler(
                                a.NotificationId.PulseError,
                                () => !0,
                                (e) => {
                                    this.handlePulseErrorEvent(e);
                                }
                            ),
                            t.registerHandler(
                                a.NotificationId.PulseUrlChanged,
                                () => !0,
                                (e) => {
                                    this.handlePulseUrlChangedEvent(e);
                                }
                            ),
                            t.registerHandler(
                                a.NotificationId.PulseTimeDimensionChanged,
                                () => !0,
                                (e) => {
                                    this.handlePulseTimeDimensionChangedEvent(
                                        e
                                    );
                                }
                            ),
                            t.registerHandler(
                                a.NotificationId.PulseInsightDiscovered,
                                () => !0,
                                (e) => {
                                    this.handlePulseInsightDiscoveredEvent(e);
                                }
                            ),
                            t.registerHandler(
                                a.NotificationId.PulseFiltersChanged,
                                () => !0,
                                (e) => {
                                    this.handlePulseFiltersChangedEvent(e);
                                }
                            ),
                            this._messenger.startListening();
                    } catch (e) {
                        throw new o.TableauError(
                            n.EmbeddingErrorCodes.InternalError,
                            "Unexpected error during initialization."
                        );
                    }
                }
                dispose() {
                    this._messenger && this._messenger.stopListening(),
                        this.removeWindowResizeHandler();
                }
                updateIframeTitle(e) {
                    this._iframe.setAttribute("title", e.iframeTitle);
                }
                handlePulseMetricSizeKnownEvent(e) {
                    const t = new s.FirstPulseMetricSizeKnownEvent(
                        e.width,
                        e.height
                    );
                    this._pulse.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.FirstPulseMetricSizeKnown,
                            { detail: t }
                        )
                    ),
                        this._pulse.fixedSize ||
                            (this.resize(), this.addWindowResizeHandler());
                }
                resize() {
                    const { height: e, width: t } = this.calculateLayoutSize();
                    (this._iframe.style.height = e + "px"),
                        (this._iframe.style.width = t + "px");
                }
                calculateLayoutSize() {
                    return this._pulse.parentElement
                        ? y.HtmlElementHelpers.getContentSize(
                              this._pulse.parentElement
                          )
                        : { height: 0, width: 0 };
                }
                removeWindowResizeHandler() {
                    this._windowResizeHandler &&
                        window.removeEventListener(
                            this._resizeEventType,
                            this._windowResizeHandler
                        );
                }
                addWindowResizeHandler() {
                    this._windowResizeHandler ||
                        ((this._windowResizeHandler = this.resize.bind(this)),
                        window.addEventListener(
                            this._resizeEventType,
                            this._windowResizeHandler
                        ));
                }
                handlePulseInteractiveEvent(e) {
                    return (
                        o.ApiServiceRegistry.get(
                            this.embeddingId
                        ).registerService(
                            new m.PulseServiceImpl(
                                this._dispatcher,
                                this.embeddingId
                            )
                        ),
                        o.ApiServiceRegistry.get(
                            this.embeddingId
                        ).registerService(
                            new o.NotificationServiceImpl(this._dispatcher)
                        ),
                        this._timeDimension
                            ? (this.applyTimeDimensionAsync(
                                  this._timeDimension
                              ),
                              void (this._timeDimension = void 0))
                            : this._filters.length
                            ? (this.applyFiltersAsync(
                                  this._filters.map((e) => ({
                                      fieldName: e.field,
                                      values: e.value.split(","),
                                      updateType: n.FilterUpdateType.Replace,
                                      options: { isExcludeMode: !1 },
                                  }))
                              ),
                              void (this._filters = []))
                            : ((this._iframe.style.visibility = "visible"),
                              this.updateIframeTitle(e),
                              (this._shouldDispatchMetricSizeKnownEvent = !0),
                              void this._pulse.dispatchEvent(
                                  new CustomEvent(
                                      n.EmbeddingTableauEventType.FirstInteractive
                                  )
                              ))
                    );
                }
                handlePulseErrorEvent(e) {
                    const t = new l.PulseErrorEvent(
                        e.message,
                        e.httpStatus,
                        e.messageVisibility
                    );
                    this._pulse.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.PulseError,
                            { detail: t }
                        )
                    );
                }
                handlePulseUrlChangedEvent(e) {
                    const t = new p.PulseUrlChangedEvent(
                        e.oldUrl,
                        e.newUrl,
                        e.context
                    );
                    this._pulse.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.PulseUrlChanged,
                            { detail: t }
                        )
                    );
                }
                handlePulseTimeDimensionChangedEvent(e) {
                    const t = new d.PulseTimeDimensionChangedEvent(
                        e.timeDimension
                    );
                    this._pulse.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.PulseTimeDimensionChanged,
                            { detail: t }
                        )
                    );
                }
                handlePulseInsightDiscoveredEvent(e) {
                    const t = new c.PulseInsightDiscoveredEvent(
                        e.id,
                        e.characterization,
                        e.markup,
                        e.question,
                        e.score,
                        e.type,
                        e.version
                    );
                    this._pulse.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.PulseInsightDiscovered,
                            { detail: t }
                        )
                    );
                }
                handlePulseFiltersChangedEvent(e) {
                    const t = new u.PulseFiltersChangedEvent(
                        e.fieldNames,
                        this.embeddingId
                    );
                    this._pulse.dispatchEvent(
                        new CustomEvent(
                            n.EmbeddingTableauEventType.PulseFiltersChanged,
                            { detail: t }
                        )
                    );
                }
                applyFiltersAsync(e) {
                    return o.ApiServiceRegistry.get(this.embeddingId)
                        .getService("PulseService")
                        .applyFiltersAsync(e);
                }
                getTimeDimensionAsync() {
                    return o.ApiServiceRegistry.get(this.embeddingId)
                        .getService("PulseService")
                        .getTimeDimensionAsync();
                }
                applyTimeDimensionAsync(e) {
                    return o.ApiServiceRegistry.get(this.embeddingId)
                        .getService("PulseService")
                        .applyTimeDimensionAsync(e);
                }
                getFiltersAsync() {
                    return o.ApiServiceRegistry.get(this.embeddingId)
                        .getService("PulseService")
                        .getFiltersAsync();
                }
                clearFiltersAsync(e) {
                    return o.ApiServiceRegistry.get(this.embeddingId)
                        .getService("PulseService")
                        .clearFiltersAsync(e);
                }
                clearAllFiltersAsync() {
                    return o.ApiServiceRegistry.get(this.embeddingId)
                        .getService("PulseService")
                        .clearAllFiltersAsync();
                }
            };
        },
        2936: function (e, t, r) {
            var i =
                    (this && this.__awaiter) ||
                    function (e, t, r, i) {
                        return new (r || (r = Promise))(function (n, a) {
                            function o(e) {
                                try {
                                    l(i.next(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function s(e) {
                                try {
                                    l(i.throw(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function l(e) {
                                var t;
                                e.done
                                    ? n(e.value)
                                    : ((t = e.value),
                                      t instanceof r
                                          ? t
                                          : new r(function (e) {
                                                e(t);
                                            })).then(o, s);
                            }
                            l((i = i.apply(e, t || [])).next());
                        });
                    },
                n =
                    (this && this.__importStar) ||
                    function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e)
                                Object.hasOwnProperty.call(e, r) &&
                                    (t[r] = e[r]);
                        return (t.default = e), t;
                    };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const a = n(r(7419)),
                o = r(3536),
                s = r(3448),
                l = r(5136),
                u = r(5760),
                c = r(6276),
                d = r(4852),
                p = r(964),
                h = r(1232),
                m = r(672),
                y = r(4032),
                g = r(8272),
                f = r(7720),
                b = r(2240);
            t.VizImpl = class {
                constructor(e, t, r, i) {
                    if (
                        ((this._viz = e),
                        (this._iframe = t),
                        (this._frameUrl = r),
                        (this._embeddingId = i),
                        (this._automaticUpdatesArePaused = !1),
                        (this._resizeEventType = "resize"),
                        !this._iframe)
                    )
                        throw new l.TableauError(
                            a.EmbeddingErrorCodes.InternalError,
                            "Iframe has not been created yet"
                        );
                }
                get workbookImpl() {
                    return this._workbookImpl;
                }
                get iframe() {
                    return this._iframe;
                }
                get embeddingId() {
                    return this._embeddingId;
                }
                get exportScenariosForPdfAndPowerPoint() {
                    return {
                        currentSheetName: this._workbookImpl.activeSheet.name,
                        exportableSheetNamesFromDashboard:
                            this.exportableSheetNamesFromDashboard,
                        exportableSheetNamesFromWorkbook:
                            this.exportableSheetNamesFromWorkbook,
                    };
                }
                get exportableSheetNamesFromDashboard() {
                    const e = this._workbookImpl.activeSheet;
                    return e && e.sheetType === a.SheetType.Dashboard
                        ? e.getWorksheetNamesFromZones()
                        : [];
                }
                get exportableSheetNamesFromWorkbook() {
                    const e = [];
                    if (this._workbookImpl)
                        for (const t of this._workbookImpl.publishedSheetsInfo)
                            e.push(t.name);
                    return e;
                }
                get automaticUpdatesArePaused() {
                    return this._automaticUpdatesArePaused;
                }
                set automaticUpdatesArePaused(e) {
                    this._automaticUpdatesArePaused = e;
                }
                getVisualIdForSheetName(e) {
                    var t, r, i;
                    const n = this._workbookImpl.activeSheet;
                    switch (n.sheetType) {
                        case a.SheetType.Worksheet:
                            if (n.name === e) return n.visualId;
                            break;
                        case a.SheetType.Dashboard: {
                            const t = n;
                            for (const r of t.getWorksheetNamesFromZones())
                                if (r === e)
                                    return { worksheet: r, dashboard: t.name };
                            break;
                        }
                        case a.SheetType.Story: {
                            const o = n,
                                s =
                                    null === (t = o.activeStoryPoint) ||
                                    void 0 === t
                                        ? void 0
                                        : t.containedSheet;
                            if (
                                s &&
                                s.sheetType === a.SheetType.Worksheet &&
                                s.name === e
                            ) {
                                const e = Object.assign({}, s.visualId);
                                return (
                                    (e.dashboard = e.worksheet),
                                    (e.storyboard = o.name),
                                    (e.storyPointID =
                                        null === (r = o.activeStoryPoint) ||
                                        void 0 === r
                                            ? void 0
                                            : r.storyPointId),
                                    e
                                );
                            }
                            if (s && s.sheetType === a.SheetType.Dashboard) {
                                const t = s;
                                for (const r of t.getWorksheetNamesFromZones())
                                    if (r === e)
                                        return {
                                            worksheet: r,
                                            dashboard: t.name,
                                            storyboard: o.name,
                                            storyPointID:
                                                null ===
                                                    (i = o.activeStoryPoint) ||
                                                void 0 === i
                                                    ? void 0
                                                    : i.storyPointId,
                                        };
                            }
                            break;
                        }
                        default:
                            throw new l.TableauError(
                                a.SharedErrorCodes.ServerError,
                                "Invalid SheetType"
                            );
                    }
                    throw new l.TableauError(
                        a.SharedErrorCodes.InvalidParameter,
                        "sheetName parameter must belong to a worksheet within the current view"
                    );
                }
                get exportableWorksheetNames() {
                    var e;
                    const t = this._workbookImpl.activeSheet;
                    switch (t.sheetType) {
                        case a.SheetType.Worksheet:
                            return [t.name];
                        case a.SheetType.Dashboard:
                            return t.getWorksheetNamesFromZones();
                        case a.SheetType.Story: {
                            const r =
                                null === (e = t.activeStoryPoint) ||
                                void 0 === e
                                    ? void 0
                                    : e.containedSheet;
                            if (r && r.sheetType === a.SheetType.Worksheet)
                                return [r.name];
                            if (r && r.sheetType === a.SheetType.Dashboard)
                                return r.getWorksheetNamesFromZones();
                            break;
                        }
                    }
                    return [];
                }
                initializeViz() {
                    const e = this._iframe.contentWindow;
                    if (!e)
                        throw new l.TableauError(
                            a.EmbeddingErrorCodes.InternalError,
                            "Iframe has not been created yet"
                        );
                    try {
                        (this._messenger = new s.CrossFrameMessenger(
                            window,
                            e,
                            this._frameUrl.origin
                        )),
                            (this._dispatcher = new l.CrossFrameDispatcher(
                                this._messenger
                            )),
                            g.registerInitializationEmbeddingServices(
                                this._dispatcher,
                                this.embeddingId
                            ),
                            f.registerAuthServices(
                                this._dispatcher,
                                this.embeddingId
                            );
                        const t = l.ApiServiceRegistry.get(
                                this.embeddingId
                            ).getService("initialization-service"),
                            r = t.registerHandler(
                                s.NotificationId.FirstVizSizeKnown,
                                () => !0,
                                (e) => {
                                    this.handleVizSizeKnownEvent(e), r();
                                }
                            ),
                            i = t.registerHandler(
                                s.NotificationId.VizInteractive,
                                () => !0,
                                (e) => {
                                    this.handleVizInteractiveEvent(e), i();
                                }
                            );
                        t.registerHandler(
                            s.NotificationId.ReadyToReceiveAuthToken,
                            () => !0,
                            () => {
                                this._viz.dispatchEvent(
                                    new CustomEvent(
                                        a.EmbeddingTableauEventType.ReadyToReceiveAuthToken,
                                        {}
                                    )
                                );
                            }
                        ),
                            t.registerHandler(
                                s.NotificationId.ToolbarStateChanged,
                                () => !0,
                                (e) => this.handleToolbarStateEvent(e)
                            ),
                            t.registerHandler(
                                s.NotificationId.TabSwitched,
                                () => !0,
                                (e) => this.handleTabSwitch(e)
                            ),
                            t.registerHandler(
                                s.NotificationId.CustomViewsLoaded,
                                () => !0,
                                (e) => this.handleCustomViews(e)
                            ),
                            t.registerHandler(
                                s.NotificationId.CustomViewRemoved,
                                () => !0,
                                (e) => this.handleCustomViewRemoved(e)
                            ),
                            t.registerHandler(
                                s.NotificationId.CustomViewSaved,
                                () => !0,
                                (e) => this.handleCustomViewSaved(e)
                            ),
                            t.registerHandler(
                                s.NotificationId.CustomViewSetDefault,
                                () => !0,
                                (e) => this.handleCustomViewSetDefault(e)
                            ),
                            this._messenger.startListening();
                    } catch (e) {
                        throw new l.TableauError(
                            a.EmbeddingErrorCodes.InternalError,
                            "Unexpected error during initialization."
                        );
                    }
                }
                dispose() {
                    this._messenger && this._messenger.stopListening(),
                        this.removeWindowResizeHandler();
                }
                getCurrentSrcAsync() {
                    return l.ApiServiceRegistry.get(this.embeddingId)
                        .getService("viz-service")
                        .getCurrentSrcAsync();
                }
                revertAllAsync() {
                    return l.ApiServiceRegistry.get(this.embeddingId)
                        .getService("ToolbarService")
                        .revertAllAsync();
                }
                redoAsync() {
                    return l.ApiServiceRegistry.get(this.embeddingId)
                        .getService("ToolbarService")
                        .redoAsync();
                }
                undoAsync() {
                    return l.ApiServiceRegistry.get(this.embeddingId)
                        .getService("ToolbarService")
                        .undoAsync();
                }
                refreshDataAsync() {
                    return l.ApiServiceRegistry.get(this.embeddingId)
                        .getService("data-source-service")
                        .refreshAsync();
                }
                pauseAutomaticUpdatesAsync() {
                    return this._automaticUpdatesArePaused
                        ? Promise.resolve()
                        : this.setAutoUpdateAsync(!1);
                }
                resumeAutomaticUpdatesAsync() {
                    return this._automaticUpdatesArePaused
                        ? this.setAutoUpdateAsync(!0)
                        : Promise.resolve();
                }
                toggleAutomaticUpdatesAsync() {
                    return this.setAutoUpdateAsync(
                        this._automaticUpdatesArePaused
                    );
                }
                exportImageAsync() {
                    return l.ApiServiceRegistry.get(this.embeddingId)
                        .getService("ToolbarService")
                        .exportImageAsync();
                }
                exportCrosstabAsync(e, t) {
                    return i(this, void 0, void 0, function* () {
                        const r = l.ApiServiceRegistry.get(
                            this.embeddingId
                        ).getService("export-service");
                        yield r.exportCrosstabAsync(
                            e,
                            t,
                            this.exportableWorksheetNames,
                            this._workbookImpl.activeSheet.sheetType
                        );
                    });
                }
                exportDataAsync(e, t = l.ExportHelpers.DefaultDataOptions) {
                    return l.ApiServiceRegistry.get(this.embeddingId)
                        .getService("export-service")
                        .exportDataAsync(this.getVisualIdForSheetName(e), t);
                }
                exportPowerPointAsync(e = []) {
                    return i(this, void 0, void 0, function* () {
                        const t = l.ApiServiceRegistry.get(
                                this.embeddingId
                            ).getService("export-service"),
                            r = this.exportScenariosForPdfAndPowerPoint;
                        0 === e.length && e.push(r.currentSheetName),
                            yield t.exportPowerPointAsync(e, r);
                    });
                }
                exportPDFAsync(e = [], t = l.ExportHelpers.DefaultPDFOptions) {
                    return i(this, void 0, void 0, function* () {
                        const r = l.ApiServiceRegistry.get(
                                this.embeddingId
                            ).getService("export-service"),
                            i = this.exportScenariosForPdfAndPowerPoint;
                        0 === e.length && e.push(i.currentSheetName),
                            yield r.exportPDFAsync(e, t, i);
                    });
                }
                displayDialogAsync(e) {
                    const t = l.ApiServiceRegistry.get(
                        this.embeddingId
                    ).getService("ToolbarService");
                    switch (e) {
                        case o.TableauDialogType.ExportWorkbook:
                            if (!this.workbookImpl.canDownloadWorkbook)
                                throw new l.TableauError(
                                    a.EmbeddingErrorCodes.DownloadWorkbookNotAllowed,
                                    "Download workbook is not allowed"
                                );
                            return t.displayDownloadWorkbookDialogAsync();
                        case o.TableauDialogType.ExportPDF:
                            return t.displayExportPdfDialogAsync();
                        case o.TableauDialogType.ExportPowerPoint:
                            return t.displayExportPowerpointDialogAsync();
                        case o.TableauDialogType.ExportData:
                            return t.displayExportDataDialogAsync();
                        case o.TableauDialogType.ExportCrossTab:
                            return t.displayExportCrosstabDialogAsync();
                        case o.TableauDialogType.Share:
                            return t.displayShareDialogAsync();
                        default:
                            throw new l.TableauError(
                                a.EmbeddingErrorCodes.UnknownDialogType,
                                "Unknown dialog type"
                            );
                    }
                }
                setAuthToken(e) {
                    l.ApiServiceRegistry.get(this.embeddingId)
                        .getService("authentication")
                        .setAuthToken(e);
                }
                setAutoUpdateAsync(e) {
                    return l.ApiServiceRegistry.get(this.embeddingId)
                        .getService("ToolbarService")
                        .setAutoUpdateAsync(e)
                        .then(() => {
                            this._automaticUpdatesArePaused = !e;
                        });
                }
                isVersionCompatible(e) {
                    return (
                        !!e &&
                        (s.VersionLessThan(s.INTERNAL_CONTRACT_VERSION, e) ||
                            s.VersionEqualTo(s.INTERNAL_CONTRACT_VERSION, e))
                    );
                }
                updateIframeTitle(e) {
                    this._iframe.setAttribute(
                        "title",
                        u.getLocalizedTitle(navigator.language) +
                            ": " +
                            e.workbookName +
                            ": " +
                            e.currWorksheetName
                    );
                }
                handleVizInteractiveEvent(e) {
                    if (
                        !this._viz.disableVersionCheck &&
                        !this.isVersionCompatible(e.platformVersion)
                    )
                        throw (
                            (this._messenger.stopListening(),
                            new l.TableauError(
                                a.EmbeddingErrorCodes.IncompatibleVersionError,
                                "The version of the Embedding library is not compatible with the version of Tableau. The visualization will load, but the Embedding API methods and events are not available."
                            ))
                        );
                    this.updateIframeTitle(e),
                        l.registerAllSharedServices(
                            this._dispatcher,
                            this.embeddingId
                        ),
                        g.registerAllEmbeddingServices(
                            this._dispatcher,
                            this.embeddingId
                        ),
                        this._viz.initializeEvents(),
                        (this._workbookImpl = new h.EmbeddingWorkbookImpl(
                            e,
                            this.embeddingId
                        ));
                    let t = [];
                    this._customViewsTemp &&
                        (t = this._workbookImpl.processCustomViews(
                            s.NotificationId.CustomViewsLoaded,
                            this._customViewsTemp
                        )),
                        this._viz.dispatchEvent(
                            new CustomEvent(
                                a.EmbeddingTableauEventType.FirstInteractive
                            )
                        ),
                        this._customViewsTemp &&
                            (this.sendCustomViewEvents(
                                a.EmbeddingTableauEventType.CustomViewLoaded,
                                t
                            ),
                            (this._customViewsTemp = null));
                }
                handleVizSizeKnownEvent(e) {
                    const t = l.SheetUtils.getSheetSizeFromSizeConstraints(
                        e.sheetSize
                    );
                    this._vizSize = new y.VizSize(t, e.chromeHeight);
                    const r = new c.FirstVizSizeKnownEvent(this._vizSize);
                    this._viz.dispatchEvent(
                        new CustomEvent(
                            a.EmbeddingTableauEventType.FirstVizSizeKnown,
                            { detail: r }
                        )
                    ),
                        this._viz.fixedSize ||
                            (this.resize(), this.addWindowResizeHandler());
                }
                resize() {
                    const { height: e, width: t } = this.calculateLayoutSize();
                    e !== this._vizSize.chromeHeight &&
                        ((this._iframe.style.height = e + "px"),
                        (this._iframe.style.width = t + "px"));
                }
                calculateLayoutSize() {
                    const e = this._viz.parentElement
                            ? b.HtmlElementHelpers.getContentSize(
                                  this._viz.parentElement
                              )
                            : { height: 0, width: 0 },
                        { chromeHeight: t, sheetSize: r } = this._vizSize;
                    let i = 0,
                        n = 0;
                    const o = r.minSize || { height: 0, width: 0 },
                        s = r.maxSize || { height: 0, width: 0 };
                    if (r.behavior === a.SheetSizeBehavior.Exactly)
                        (i = s.width), (n = s.height + t);
                    else {
                        let u, c, d, p;
                        switch (r.behavior) {
                            case a.SheetSizeBehavior.Range:
                                (u = o.width),
                                    (c = s.width),
                                    (d = o.height + t),
                                    (p = s.height + t),
                                    (i = Math.max(u, Math.min(c, e.width))),
                                    (n = Math.max(d, Math.min(p, e.height)));
                                break;
                            case a.SheetSizeBehavior.AtLeast:
                                (u = o.width),
                                    (d = o.height + t),
                                    (i = Math.max(u, e.width)),
                                    (n = Math.max(d, e.height));
                                break;
                            case a.SheetSizeBehavior.AtMost:
                                (c = s.width),
                                    (p = s.height + t),
                                    (i = Math.min(c, e.width)),
                                    (n = Math.min(p, e.height));
                                break;
                            case a.SheetSizeBehavior.Automatic:
                                (i = e.width), (n = Math.max(e.height, t));
                                break;
                            default:
                                throw new l.TableauError(
                                    a.EmbeddingErrorCodes.InvalidSizeBehavior,
                                    "Unknown SheetSizeBehavior for viz: " +
                                        r.behavior
                                );
                        }
                    }
                    return { height: n, width: i };
                }
                removeWindowResizeHandler() {
                    this._windowResizeHandler &&
                        window.removeEventListener(
                            this._resizeEventType,
                            this._windowResizeHandler
                        );
                }
                addWindowResizeHandler() {
                    this._windowResizeHandler ||
                        ((this._windowResizeHandler = this.resize.bind(this)),
                        window.addEventListener(
                            this._resizeEventType,
                            this._windowResizeHandler
                        ));
                }
                handleToolbarStateEvent(e) {
                    const t = new p.ToolbarStateChangedEvent(
                        e.toolbarState.canRedo,
                        e.toolbarState.canUndo
                    );
                    this._viz.dispatchEvent(
                        new CustomEvent(
                            a.EmbeddingTableauEventType.ToolbarStateChanged,
                            { detail: t }
                        )
                    );
                }
                handleTabSwitch(e) {
                    if (!this._workbookImpl) return;
                    if (!e.oldSheetName) return;
                    this.updateIframeTitle(e);
                    const t = this._workbookImpl.pendingTabSwitchPromise;
                    this._workbookImpl.updateExistingActiveSheetReferences(
                        e.currWorksheetName
                    ),
                        (this._workbookImpl = new h.EmbeddingWorkbookImpl(
                            e,
                            this.embeddingId
                        )),
                        t && t.resolve(this._workbookImpl);
                    const r = new d.TabSwitchedEvent(
                        e.oldSheetName,
                        e.currWorksheetName
                    );
                    this._viz.dispatchEvent(
                        new CustomEvent(
                            a.EmbeddingTableauEventType.TabSwitched,
                            { detail: r }
                        )
                    );
                }
                handleCustomViews(e) {
                    if (this._workbookImpl) {
                        const t = this._workbookImpl.processCustomViews(
                                s.NotificationId.CustomViewsLoaded,
                                e
                            ),
                            r = this._workbookImpl.pendingShowCustomViewPromise;
                        if (r) {
                            const e = t[0];
                            r.resolve(e),
                                this._workbookImpl.clearPendingShowCustomViewPromise();
                        }
                        this.sendCustomViewEvents(
                            a.EmbeddingTableauEventType.CustomViewLoaded,
                            t
                        );
                    } else this._customViewsTemp = e;
                }
                handleCustomViewRemoved(e) {
                    const t = this._workbookImpl.processCustomViews(
                        s.NotificationId.CustomViewRemoved,
                        e
                    );
                    this.sendCustomViewEvents(
                        a.EmbeddingTableauEventType.CustomViewRemoved,
                        t
                    );
                }
                handleCustomViewSaved(e) {
                    const t = this._workbookImpl.processCustomViews(
                        s.NotificationId.CustomViewSaved,
                        e
                    );
                    this.sendCustomViewEvents(
                        a.EmbeddingTableauEventType.CustomViewSaved,
                        t
                    );
                }
                handleCustomViewSetDefault(e) {
                    const t = this._workbookImpl.processCustomViews(
                        s.NotificationId.CustomViewSetDefault,
                        e
                    );
                    this.sendCustomViewEvents(
                        a.EmbeddingTableauEventType.CustomViewSetDefault,
                        t
                    );
                }
                sendCustomViewEvents(e, t) {
                    for (let r of t) {
                        const t = {
                            customView: new m.CustomView(r, this._workbookImpl),
                        };
                        this._viz.dispatchEvent(
                            new CustomEvent(e, { detail: t })
                        );
                    }
                }
            };
        },
        6948: function (e, t, r) {
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return (t.default = e), t;
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = i(r(7419)),
                a = r(5136),
                o = r(3712),
                s = r(6943);
            t.AuthoringWorkbook = class {
                constructor(e, t) {
                    (this._workbookImpl = e), (this._registryId = t);
                }
                get activeSheet() {
                    if (
                        this._workbookImpl.activeSheet.sheetType ===
                        n.SheetType.Worksheet
                    ) {
                        const e = new o.AuthoringWorksheetImpl(
                            this._registryId
                        );
                        return new s.AuthoringWorksheet(e);
                    }
                    throw new a.TableauError(
                        n.EmbeddingErrorCodes.InvalidSheetType,
                        "Worksheet type not yet supported in Authoring"
                    );
                }
            };
        },
        6943: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.AuthoringWorksheet = class {
                    constructor(e) {
                        this._authoringWorksheetImpl = e;
                    }
                    getAbstractQueryWithDataModelAsync() {
                        return this._authoringWorksheetImpl.getAbstractQueryWithDataModel();
                    }
                    getVizStateWithDataModelAsync() {
                        return this._authoringWorksheetImpl.getVizStateWithDataModel();
                    }
                    setVizStateWithDataModelAsync(e) {
                        return this._authoringWorksheetImpl.setVizStateWithDataModel(
                            e
                        );
                    }
                });
        },
        672: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(4756);
            class n {
                constructor(e, t) {
                    (this._customViewImpl = e), (this._workbookImpl = t);
                }
                get name() {
                    return this._customViewImpl.name;
                }
                set name(e) {
                    this._customViewImpl.name = e;
                }
                get shared() {
                    return this._customViewImpl.shared;
                }
                set shared(e) {
                    this._customViewImpl.shared = e;
                }
                get default() {
                    return this._customViewImpl.isDefault;
                }
                set default(e) {
                    this._customViewImpl.isDefault = e;
                }
                get ownerName() {
                    return this._customViewImpl.ownerName;
                }
                get url() {
                    return this._customViewImpl.url;
                }
                get workbook() {
                    return new i.Workbook(this._workbookImpl);
                }
                saveAsync() {
                    return this._customViewImpl
                        .saveAsync()
                        .then((e) => new n(e, this._workbookImpl));
                }
            }
            t.CustomView = n;
        },
        3560: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(2116),
                n = r(1667),
                a = r(4420),
                o = r(8292);
            class s extends n.Sheet {
                constructor(e, t) {
                    super(e, t),
                        (this._dashboardImpl = e),
                        e.initializeWithPublicInterfaces();
                }
                get objects() {
                    return this._dashboardImpl.objects.map(
                        (e) => new i.DashboardObject(e, this._workbookImpl)
                    );
                }
                get worksheets() {
                    return this._dashboardImpl.worksheetsImpl.map(
                        (e) => new o.Worksheet(e, this._workbookImpl)
                    );
                }
                get parentStoryPoint() {
                    return null == this._dashboardImpl.parentStoryPoint
                        ? null
                        : new a.StoryPoint(
                              this._dashboardImpl.parentStoryPoint,
                              this._workbookImpl
                          );
                }
                getFiltersAsync() {
                    return this._dashboardImpl.getFiltersAsync();
                }
                applyFilterAsync(e, t, r, i) {
                    return this._dashboardImpl.applyFilterAsync(e, t, r, i);
                }
            }
            t.Dashboard = s;
        },
        2116: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(3560),
                n = r(8292);
            t.DashboardObject = class {
                constructor(e, t) {
                    (this._dashboardObjectImpl = e), (this._workbookImpl = t);
                }
                get dashboard() {
                    return new i.Dashboard(
                        this._dashboardObjectImpl.dashboardImpl,
                        this._workbookImpl
                    );
                }
                get type() {
                    return this._dashboardObjectImpl.type;
                }
                get position() {
                    return this._dashboardObjectImpl.position;
                }
                get size() {
                    return this._dashboardObjectImpl.size;
                }
                get worksheet() {
                    if (this._dashboardObjectImpl.worksheetImpl)
                        return new n.Worksheet(
                            this._dashboardObjectImpl.worksheetImpl,
                            this._workbookImpl
                        );
                }
                get name() {
                    return this._dashboardObjectImpl.name;
                }
                get isFloating() {
                    return this._dashboardObjectImpl.isFloating;
                }
                get isVisible() {
                    return this._dashboardObjectImpl.isVisible;
                }
                get id() {
                    return this._dashboardObjectImpl.id;
                }
            };
        },
        9552: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(7419),
                n = r(3448),
                a = r(5136),
                o = r(6272);
            t.createAskDataUrl = function (e, t, r, l) {
                const u = e.split("?")[0];
                let c;
                try {
                    (c = new URL(u)), o.validateUrl(c);
                } catch (e) {
                    throw new a.TableauError(
                        i.EmbeddingErrorCodes.InvalidUrl,
                        e.message
                    );
                }
                const d = (function (e, t) {
                        const r = new Map(),
                            i = `${n.INTERNAL_CONTRACT_VERSION.major}.${n.INTERNAL_CONTRACT_VERSION.minor}.${n.INTERNAL_CONTRACT_VERSION.fix}`;
                        r.set(n.AskDataOptionNames.ApiInternalVersion, i);
                        const o = a.ApiVersion.Instance.formattedValue;
                        return (
                            r.set(n.AskDataOptionNames.ApiExternalVersion, o),
                            r.set(n.AskDataOptionNames.ApiID, `embhost${t}`),
                            r.set(
                                n.AskDataOptionNames.AskDataWebComponent,
                                "true"
                            ),
                            r
                        );
                    })(0, r),
                    p = new s(c)
                        .appendDefaultParameters(d)
                        .appendUserOptions(t)
                        .appendCustomParams(l);
                return t.iframeAuth && p.setToken(t.token), p.build();
            };
            class s extends o.EmbeddingUrlBuilder {
                constructor(e) {
                    super(),
                        (this._url = e),
                        (this._optionNames = n.AskDataOptionNames);
                }
                sanitizeParameterValue(e, t) {
                    return this.sanitizeValue(t);
                }
            }
            t.EmbeddingAskDataUrlBuilder = s;
        },
        8920: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(7419),
                n = r(3448),
                a = r(5136),
                o = r(6272);
            t.createPulseUrl = function (e, t, r) {
                const l = e.split("?")[0];
                let u;
                try {
                    (u = new URL(l)), o.validateUrl(u);
                } catch (e) {
                    throw new a.TableauError(
                        i.EmbeddingErrorCodes.InvalidUrl,
                        e.message
                    );
                }
                const c = (function (e) {
                    const t = new Map(),
                        r = `${n.INTERNAL_CONTRACT_VERSION.major}.${n.INTERNAL_CONTRACT_VERSION.minor}.${n.INTERNAL_CONTRACT_VERSION.fix}`;
                    t.set(n.PulseOptionNames.ApiInternalVersion, r),
                        t.set(n.PulseOptionNames.embed, "y");
                    const i = a.ApiVersion.Instance.formattedValue;
                    return (
                        t.set(n.PulseOptionNames.ApiExternalVersion, i),
                        t.set(n.PulseOptionNames.PulseWebComponent, "true"),
                        t
                    );
                })();
                return new s(u)
                    .appendDefaultParameters(c)
                    .appendUserOptions(t)
                    .appendCustomParams(r)
                    .build();
            };
            class s extends o.EmbeddingUrlBuilder {
                constructor(e) {
                    super(),
                        (this._url = e),
                        (this._optionNames = n.PulseOptionNames);
                }
                sanitizeParameterValue(e, t) {
                    return this.sanitizeValue(t);
                }
            }
            t.EmbeddingPulseUrlBuilder = s;
        },
        6272: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.SANITIZED_VALUES = { YES_VALUE: "y", NO_VALUE: "n" });
            const r = new Set(["https:", "http:"]);
            function i(e) {
                let t = e.toString();
                return (
                    (t = t.replace("/#/site/", "/t/").replace("/#/", "/")),
                    new URL(t)
                );
            }
            (t.EmbeddingUrlBuilder = class {
                build() {
                    return this._url;
                }
                appendDefaultParameters(e) {
                    for (const t of e.keys()) {
                        const r = e.get(t);
                        r &&
                            !this._url.searchParams.has(t) &&
                            this._url.searchParams.append(t, r);
                    }
                    return this;
                }
                appendUserOptions(e) {
                    for (const t of Object.keys(e)) {
                        if (null === e[t] || void 0 === e[t]) continue;
                        const r = this._optionNames[t];
                        if (!r) continue;
                        const i = this.sanitizeParameterValue(r, e[t]);
                        this._url.searchParams.append(r, i);
                    }
                    return this;
                }
                appendCustomParams(e) {
                    for (const t of e)
                        this._url.searchParams.set(t.name, t.value);
                    return this;
                }
                setToken(e) {
                    if (this._token)
                        throw new Error(
                            `The token has already been set to ${this._token}`
                        );
                    if (!e) return this;
                    this._token = e;
                    const t = this._url
                        .toString()
                        .substring(this._url.origin.length);
                    return (
                        (this._url = new URL(
                            `${this._url.origin}/vizportal/api/web/v1/auth/embed/target`
                        )),
                        this._url.searchParams.append("token", e),
                        this._url.searchParams.append("target", t),
                        this
                    );
                }
                sanitizeValue(e) {
                    const r = String(e);
                    switch (r) {
                        case "true":
                            return t.SANITIZED_VALUES.YES_VALUE;
                        case "false":
                            return t.SANITIZED_VALUES.NO_VALUE;
                        default:
                            return r;
                    }
                }
            }),
                (t.validateUrl = function (e) {
                    !(function (e) {
                        const t = e.protocol;
                        if (!r.has(t))
                            throw new Error(
                                `Invalid protocol in URL '${e}'. The protocols supported are ${Array.from(
                                    r
                                ).join(", ")}.`
                            );
                    })(e);
                }),
                (t.getSiteIdForPulse = function (e) {
                    const t = i(new URL(e.toString()))
                        .pathname.split("/")
                        .filter((e) => e);
                    return 0 === t.length
                        ? ""
                        : "site" === t[0]
                        ? t[1]
                        : "pulse" === t[0] && "site" === t[1]
                        ? t[2]
                        : "";
                }),
                (t.getSiteId = function (e) {
                    const t = i(new URL(e.toString()))
                        .pathname.split("/")
                        .filter((e) => e);
                    return 0 === t.length || "t" !== t[0] || t.length < 2
                        ? ""
                        : t[1];
                }),
                (t.canonicalizeVizPortalRoutingHashes = i);
        },
        2024: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(7419),
                n = r(3448),
                a = r(5136),
                o = r(6272),
                s = r(8844);
            var l;
            !(function (e) {
                (e[(e.Viewing = 0)] = "Viewing"),
                    (e[(e.Authoring = 1)] = "Authoring");
            })((l = t.EmbeddingUrlMode || (t.EmbeddingUrlMode = {})));
            const u = new Map([
                [l.Viewing, s.VizUrlMode.Viewing],
                [l.Authoring, s.VizUrlMode.Authoring],
            ]);
            class c extends o.EmbeddingUrlBuilder {
                constructor(e) {
                    super(),
                        (this._url = e),
                        (this._optionNames = n.VizOptionNames);
                }
                appendFilters(e) {
                    for (const t of e)
                        this._url.searchParams.append(t.field, t.value);
                    return this;
                }
                appendParams(e) {
                    for (const t of e)
                        this._url.searchParams.append(t.name, t.value);
                    return this;
                }
                sanitizeParameterValue(e, t) {
                    let r;
                    switch (e) {
                        case n.VizOptionNames.hideTabs:
                            r = this.sanitizeValue(!t);
                            break;
                        case n.VizOptionNames.toolbar:
                            r = this.sanitizeValue(t !== i.Toolbar.Hidden && t);
                            break;
                        default:
                            r = this.sanitizeValue(t);
                    }
                    return r;
                }
            }
            (t.EmbeddingVizUrlBuilder = c),
                (t.createVizUrl = function (e, t, r, l, d, p, h) {
                    if (!e)
                        throw new a.TableauError(
                            i.EmbeddingErrorCodes.InternalError,
                            "We should not have attempted to render the component without a src"
                        );
                    const m = u.get(t);
                    if (!m)
                        throw new a.TableauError(
                            i.EmbeddingErrorCodes.InternalError,
                            `'${t}' is not yet supported.`
                        );
                    const y = e.split("?")[0];
                    let g;
                    try {
                        (g = new URL(y)), o.validateUrl(g);
                    } catch (e) {
                        throw new a.TableauError(
                            i.EmbeddingErrorCodes.InvalidUrl,
                            e.message
                        );
                    }
                    try {
                        g = s.VizUrl.create(y).withMode(m).toURL();
                    } catch (e) {}
                    const f = (function (e, t) {
                            const r = new Map();
                            r.set(
                                n.VizOptionNames.Embed,
                                o.SANITIZED_VALUES.YES_VALUE
                            ),
                                r.set(n.VizOptionNames.ApiID, `embhost${t}`),
                                "public.tableau.com" === e.hostname &&
                                    r.set(
                                        n.VizOptionNames.ShowVizHome,
                                        o.SANITIZED_VALUES.NO_VALUE
                                    );
                            const i = `${n.INTERNAL_CONTRACT_VERSION.major}.${n.INTERNAL_CONTRACT_VERSION.minor}.${n.INTERNAL_CONTRACT_VERSION.fix}`;
                            r.set(n.VizOptionNames.ApiInternalVersion, i);
                            const s = a.ApiVersion.Instance.formattedValue;
                            return (
                                r.set(n.VizOptionNames.ApiExternalVersion, s),
                                r.set(n.VizOptionNames.NavType, "0"),
                                r.set(n.VizOptionNames.NavSrc, "Opt"),
                                r
                            );
                        })(g, l),
                        b = new c(g)
                            .appendDefaultParameters(f)
                            .appendUserOptions(r)
                            .appendFilters(d)
                            .appendParams(p)
                            .appendCustomParams(h);
                    return r.iframeAuth && b.setToken(r.token), b.build();
                });
        },
        8512: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.Parameter = class {
                    constructor(e) {
                        this.parameterImpl = e;
                    }
                    get name() {
                        return this.parameterImpl.name;
                    }
                    get currentValue() {
                        return this.parameterImpl.currentValue;
                    }
                    get dataType() {
                        return this.parameterImpl.dataType;
                    }
                    get allowableValues() {
                        return this.parameterImpl.allowableValues;
                    }
                    get id() {
                        return this.parameterImpl.id;
                    }
                    changeValueAsync(e) {
                        return this.parameterImpl.changeValueAsync(e);
                    }
                });
        },
        4472: function (e, t, r) {
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return (t.default = e), t;
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = i(r(7419)),
                a = r(5136);
            class o {
                constructor(e, t, r, i) {
                    (this._fieldName = e),
                        (this._filterType = t),
                        (this._metricId = r),
                        (this._registryId = i);
                }
                get fieldName() {
                    return this._fieldName;
                }
                get filterType() {
                    return this._filterType;
                }
                get metricId() {
                    return this._metricId;
                }
            }
            (t.PulseFilter = o),
                (t.CategoricalPulseFilter = class extends o {
                    constructor(e, t, r, i, n, a, o) {
                        super(e, r, t, i),
                            (this._appliedValues = n),
                            (this._isExcludeMode = a),
                            (this._isAllSelected = o);
                    }
                    get isAllSelected() {
                        return this._isAllSelected;
                    }
                    get appliedValues() {
                        return this._appliedValues;
                    }
                    get isExcludeMode() {
                        return this._isExcludeMode;
                    }
                    getDomainAsync(e, t, r, i) {
                        return (
                            i || (i = n.FilterDomainType.Relevant),
                            a.ErrorHelpers.verifyEnumValue(
                                i,
                                n.FilterDomainType,
                                "Contract.FilterDomainType"
                            ),
                            a.ApiServiceRegistry.get(this._registryId)
                                .getService("PulseService")
                                .getCategoricalDomainAsync(
                                    this._fieldName,
                                    i,
                                    e,
                                    t,
                                    r
                                )
                        );
                    }
                });
        },
        1667: function (e, t, r) {
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return (t.default = e), t;
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = i(r(7419)),
                a = r(5136),
                o = r(4756);
            t.Sheet = class {
                constructor(e, t) {
                    (this._sheetImpl = e), (this._workbookImpl = t);
                }
                get isHidden() {
                    return this._sheetImpl.hidden;
                }
                get isActive() {
                    return this._sheetImpl.active;
                }
                get name() {
                    return this._sheetImpl.name;
                }
                get sheetType() {
                    return this._sheetImpl.sheetType;
                }
                get size() {
                    if (a.SheetUtils.isValidSheetSize(this._sheetImpl.size))
                        return this._sheetImpl.size;
                    throw new a.TableauError(
                        n.EmbeddingErrorCodes.NotImplemented,
                        "Not implemented"
                    );
                }
                get url() {
                    if (this.isHidden)
                        throw new a.TableauError(
                            n.EmbeddingErrorCodes.NoUrlForHiddenWorksheet,
                            "No URL for hidden worksheet"
                        );
                    return this._sheetImpl.url;
                }
                get index() {
                    return this._sheetImpl.index;
                }
                get workbook() {
                    return new o.Workbook(this._workbookImpl);
                }
                changeSizeAsync(e) {
                    return this._sheetImpl.changeSizeAsync(e);
                }
            };
        },
        8583: function (e, t, r) {
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return (t.default = e), t;
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = i(r(7419)),
                a = r(5136),
                o = r(4756);
            t.SheetInfo = class {
                constructor(e, t) {
                    (this._sheetInfoImpl = e), (this._workbookImpl = t);
                }
                get name() {
                    return this._sheetInfoImpl.name;
                }
                get sheetType() {
                    return this._sheetInfoImpl.sheetType;
                }
                get index() {
                    if (void 0 !== this._sheetInfoImpl.index)
                        return this._sheetInfoImpl.index;
                    throw new a.TableauError(
                        n.EmbeddingErrorCodes.ImplementationError,
                        "index not implemented"
                    );
                }
                get isActive() {
                    return (
                        !!this._sheetInfoImpl.isActive &&
                        this._sheetInfoImpl.isActive
                    );
                }
                get isHidden() {
                    return (
                        !!this._sheetInfoImpl.isHidden &&
                        this._sheetInfoImpl.isHidden
                    );
                }
                get workbook() {
                    return new o.Workbook(this._workbookImpl);
                }
                get url() {
                    return this._sheetInfoImpl.url
                        ? this._sheetInfoImpl.url
                        : "";
                }
                get size() {
                    if (
                        a.SheetUtils.isValidSheetSize(
                            this._sheetInfoImpl.sheetSize
                        )
                    )
                        return this._sheetInfoImpl.sheetSize;
                    throw new a.TableauError(
                        n.EmbeddingErrorCodes.NotImplemented,
                        "Not implemented"
                    );
                }
            };
        },
        9900: function (e, t, r) {
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return (t.default = e), t;
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = i(r(7419)),
                a = r(5136),
                o = r(1667),
                s = r(4420),
                l = r(180);
            class u extends o.Sheet {
                constructor(e, t) {
                    super(e, t), (this._storyImpl = e);
                }
                get activeStoryPoint() {
                    if (!this._storyImpl.activeStoryPoint)
                        throw new a.TableauError(
                            n.EmbeddingErrorCodes.ImplementationError,
                            "Active story point has not been initialized"
                        );
                    return new s.StoryPoint(
                        this._storyImpl.activeStoryPoint,
                        this._workbookImpl
                    );
                }
                get storyPointsInfo() {
                    return this._storyImpl.storyPointsInfo.map(
                        (e) => new l.StoryPointInfo(e, this._workbookImpl)
                    );
                }
                activateNextStoryPointAsync() {
                    return this._storyImpl
                        .activateNextStoryPointAsync()
                        .then((e) => new s.StoryPoint(e, this._workbookImpl));
                }
                activatePreviousStoryPointAsync() {
                    return this._storyImpl
                        .activatePreviousStoryPointAsync()
                        .then((e) => new s.StoryPoint(e, this._workbookImpl));
                }
                activateStoryPointAsync(e) {
                    return this._storyImpl
                        .activateStoryPointAsync(e)
                        .then((e) => new s.StoryPoint(e, this._workbookImpl));
                }
                revertStoryPointAsync(e) {
                    return this._storyImpl
                        .revertStoryPointAsync(e)
                        .then(
                            (e) => new l.StoryPointInfo(e, this._workbookImpl)
                        );
                }
            }
            t.Story = u;
        },
        4420: function (e, t, r) {
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return (t.default = e), t;
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = i(r(7419)),
                a = r(5136),
                o = r(3560),
                s = r(9900),
                l = r(8292);
            t.StoryPoint = class {
                constructor(e, t) {
                    (this._storyPointImpl = e), (this._workbookImpl = t);
                }
                get index() {
                    return this._storyPointImpl.index;
                }
                get caption() {
                    return this._storyPointImpl.caption;
                }
                get active() {
                    return this._storyPointImpl.active;
                }
                get updated() {
                    return this._storyPointImpl.updated;
                }
                get containedSheet() {
                    const e = this._storyPointImpl.containedSheet;
                    if (e)
                        switch (e.sheetType) {
                            case n.SheetType.Worksheet:
                                return new l.Worksheet(e, this._workbookImpl);
                            case n.SheetType.Dashboard:
                                return new o.Dashboard(e, this._workbookImpl);
                            case n.SheetType.Story:
                                throw new a.TableauError(
                                    n.EmbeddingErrorCodes.ImplementationError,
                                    "A story cannot contain another story"
                                );
                            default:
                                throw new a.TableauError(
                                    n.EmbeddingErrorCodes.ImplementationError,
                                    "Unable to initialize contained sheet"
                                );
                        }
                }
                get parentStory() {
                    return new s.Story(
                        this._storyPointImpl.parentStory,
                        this._workbookImpl
                    );
                }
            };
        },
        180: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(9900);
            t.StoryPointInfo = class {
                constructor(e, t) {
                    (this._storyPointInfoImpl = e), (this._workbookImpl = t);
                }
                get index() {
                    return this._storyPointInfoImpl.index;
                }
                get caption() {
                    return this._storyPointInfoImpl.caption;
                }
                get active() {
                    return this._storyPointInfoImpl.active;
                }
                get updated() {
                    return this._storyPointInfoImpl.updated;
                }
                get parentStory() {
                    return new i.Story(
                        this._storyPointInfoImpl.parentStory,
                        this._workbookImpl
                    );
                }
            };
        },
        4032: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.VizSize = class {
                    constructor(e, t) {
                        (this._sheetSize = e), (this._chromeHeight = t);
                    }
                    get sheetSize() {
                        return this._sheetSize;
                    }
                    get chromeHeight() {
                        return this._chromeHeight;
                    }
                });
        },
        8844: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(6272);
            t.VizUrlMode = { Viewing: "views", Authoring: "authoring" };
            class n {
                constructor(e, t) {
                    (this._url = e), (this._segments = t);
                }
                get mode() {
                    return this._segments.mode;
                }
                get siteId() {
                    return this._segments.siteId;
                }
                get workbookId() {
                    return this._segments.workbookId;
                }
                get sheetId() {
                    return this._segments.sheetId;
                }
                get customView() {
                    return this._segments.customView;
                }
                static create(e) {
                    const t = i.canonicalizeVizPortalRoutingHashes(
                            new URL(e.toString())
                        ),
                        r = n._parsePathName(t.pathname);
                    return (t.pathname = n._buildPathName(r)), new n(t, r);
                }
                toURL() {
                    return new URL(this.toString());
                }
                toString() {
                    return this._url.toString();
                }
                withMode(e) {
                    if (this._segments.mode === e) return this;
                    const t = this._getSegmentsForMode(e);
                    return this._makeVizUrlFromPathSegments(t);
                }
                withCustomView(e) {
                    var t;
                    if (
                        e.luid ===
                            (null === (t = this.customView) || void 0 === t
                                ? void 0
                                : t.luid) &&
                        e.name === this.customView.name
                    )
                        return this;
                    const r = this._getSegmentsForMode(this.mode);
                    return (
                        (r.customView = e), this._makeVizUrlFromPathSegments(r)
                    );
                }
                withSheetId(e) {
                    if (this.sheetId === e) return this;
                    const t = Object.assign(Object.assign({}, this._segments), {
                        sheetId: e,
                    });
                    return this._makeVizUrlFromPathSegments(t);
                }
                withWorkbookId(e) {
                    if (this.workbookId === e) return this;
                    const t = Object.assign(Object.assign({}, this._segments), {
                        workbookId: e,
                    });
                    return this._makeVizUrlFromPathSegments(t);
                }
                _getSegmentsForMode(e) {
                    return (
                        e === t.VizUrlMode.Authoring &&
                            (this._segments.customView = void 0),
                        Object.assign(Object.assign({}, this._segments), {
                            mode: e,
                        })
                    );
                }
                _makeVizUrlFromPathSegments(e) {
                    const t = n._buildPathName(e),
                        r = new URL(this._url.toString());
                    return (r.pathname = t), new n(r, e);
                }
                static _parsePathName(e) {
                    var r, i, n;
                    const a = e.split("/").filter((e) => e);
                    if (0 === a.length) throw new Error("Invalid path name");
                    let o;
                    if ("t" === a[0]) {
                        if (a.length < 2)
                            throw new Error(`Invalid site in path '${e}'`);
                        (o = a[1]), a.splice(0, 2);
                    }
                    const s = a.shift();
                    if (!s) throw new Error(`Missing mode in path '${e}'`);
                    const l = s;
                    if (!Object.values(t.VizUrlMode).includes(l))
                        throw new Error(
                            `Invalid Viz Url Mode '${s}' in path '${e}'`
                        );
                    if (0 === a.length)
                        throw new Error(
                            `Missing workbook/sheet name in path '${e}'`
                        );
                    const u = null != (r = a.shift()) ? r : "",
                        c = a.shift();
                    if (0 !== a.length && 2 !== a.length)
                        throw new Error(
                            `Invalid path name: unknown parts after sheet id: '${e}'`
                        );
                    let d;
                    return (
                        2 === a.length &&
                            (d = {
                                luid: null != (i = a.shift()) ? i : "",
                                name: null != (n = a.shift()) ? n : "",
                            }),
                        {
                            mode: l,
                            siteId: o,
                            workbookId: u,
                            sheetId: c,
                            customView: d,
                        }
                    );
                }
                static _buildPathName(e) {
                    const r = [];
                    return (
                        e.siteId && (r.push("t"), r.push(e.siteId)),
                        r.push(e.mode),
                        e.workbookId && r.push(e.workbookId),
                        e.sheetId && r.push(e.sheetId),
                        e.customView &&
                            e.mode === t.VizUrlMode.Viewing &&
                            (r.push(e.customView.luid),
                            r.push(e.customView.name)),
                        r.join("/")
                    );
                }
            }
            t.VizUrl = n;
        },
        4756: function (e, t, r) {
            var i =
                (this && this.__importStar) ||
                function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e)
                            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return (t.default = e), t;
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            const n = i(r(7419)),
                a = r(5136),
                o = r(672),
                s = r(3560),
                l = r(8512),
                u = r(8583),
                c = r(9900),
                d = r(8292);
            t.Workbook = class {
                constructor(e) {
                    this._workbookImpl = e;
                }
                get activeSheet() {
                    switch (this._workbookImpl.activeSheet.sheetType) {
                        case n.SheetType.Worksheet:
                            return new d.Worksheet(
                                this._workbookImpl.activeSheet,
                                this._workbookImpl
                            );
                        case n.SheetType.Dashboard:
                            return new s.Dashboard(
                                this._workbookImpl.activeSheet,
                                this._workbookImpl
                            );
                        case n.SheetType.Story:
                            return new c.Story(
                                this._workbookImpl.activeSheet,
                                this._workbookImpl
                            );
                        default:
                            throw new a.TableauError(
                                n.EmbeddingErrorCodes.ImplementationError,
                                "Unable to initialize ActiveSheet"
                            );
                    }
                }
                get publishedSheetsInfo() {
                    return this._workbookImpl.publishedSheetsInfo.map(
                        (e) => new u.SheetInfo(e, this._workbookImpl)
                    );
                }
                get name() {
                    return this._workbookImpl.name;
                }
                get activeCustomView() {
                    return this._workbookImpl.activeCustomView
                        ? new o.CustomView(
                              this._workbookImpl.activeCustomView,
                              this._workbookImpl
                          )
                        : void 0;
                }
                activateSheetAsync(e) {
                    return this._workbookImpl
                        .activateSheetAsync(e)
                        .then(
                            (e) => (
                                this._workbookImpl !== e &&
                                    (this._workbookImpl = e),
                                this.activeSheet
                            )
                        );
                }
                revertAllAsync() {
                    return this._workbookImpl.revertAllAsync();
                }
                getCustomViewsAsync() {
                    return this._workbookImpl
                        .getCustomViewsAsync()
                        .then((e) =>
                            e.map(
                                (e) => new o.CustomView(e, this._workbookImpl)
                            )
                        );
                }
                showCustomViewAsync(e) {
                    return this._workbookImpl
                        .showCustomViewAsync(e)
                        .then((e) =>
                            e ? new o.CustomView(e, this._workbookImpl) : void 0
                        );
                }
                removeCustomViewAsync(e) {
                    return this._workbookImpl
                        .removeCustomViewAsync(e)
                        .then((e) => new o.CustomView(e, this._workbookImpl));
                }
                saveCustomViewAsync(e) {
                    return this._workbookImpl
                        .saveCustomViewAsync(e)
                        .then((e) => new o.CustomView(e, this._workbookImpl));
                }
                setActiveCustomViewAsDefaultAsync() {
                    return this._workbookImpl.setActiveCustomViewAsDefaultAsync();
                }
                getParametersAsync() {
                    return this._workbookImpl
                        .getParametersAsync()
                        .then((e) => e.map((e) => new l.Parameter(e)));
                }
                changeParameterValueAsync(e, t) {
                    return this._workbookImpl
                        .changeParameterValueAsync(e, t)
                        .then((t) => {
                            if (t) return new l.Parameter(t);
                            throw new a.TableauError(
                                n.EmbeddingErrorCodes.InvalidParameter,
                                `Invalid parameter:  ${e}`
                            );
                        });
                }
            };
        },
        8292: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(3560),
                n = r(1667),
                a = r(4420);
            class o extends n.Sheet {
                constructor(e, t) {
                    super(e, t), (this._worksheetImpl = e);
                }
                get parentDashboard() {
                    return null == this._worksheetImpl.parentDashboard
                        ? null
                        : new i.Dashboard(
                              this._worksheetImpl.parentDashboard,
                              this._workbookImpl
                          );
                }
                get parentStoryPoint() {
                    return null == this._worksheetImpl.parentStoryPoint
                        ? null
                        : new a.StoryPoint(
                              this._worksheetImpl.parentStoryPoint,
                              this._workbookImpl
                          );
                }
                getDataSourcesAsync() {
                    return this._worksheetImpl.getDataSourcesAsync();
                }
                getSummaryDataAsync(e) {
                    return this._worksheetImpl.getSummaryDataAsync(e);
                }
                getSummaryDataReaderAsync(e, t) {
                    return this._worksheetImpl.getSummaryDataReaderAsync(e, t);
                }
                getSummaryColumnsInfoAsync() {
                    return this._worksheetImpl.getSummaryColumnsInfoAsync();
                }
                getUnderlyingDataAsync(e) {
                    return (
                        console.warn(
                            "Worksheet.getUnderlyingDataAsync is deprecated. Please use Worksheet.getUnderlyingTablesAsync and Worksheet.getUnderlyingTableDataAsync"
                        ),
                        this._worksheetImpl.getUnderlyingDataAsync(e)
                    );
                }
                getUnderlyingTablesAsync() {
                    return this._worksheetImpl.getUnderlyingTablesAsync();
                }
                getUnderlyingTableDataAsync(e, t) {
                    return this._worksheetImpl.getUnderlyingTableDataAsync(
                        e,
                        t
                    );
                }
                getUnderlyingTableDataReaderAsync(e, t, r) {
                    return this._worksheetImpl.getUnderlyingTableDataReaderAsync(
                        e,
                        t,
                        r
                    );
                }
                getFiltersAsync() {
                    return this._worksheetImpl.getFiltersAsync();
                }
                applyFilterAsync(e, t, r, i) {
                    return this._worksheetImpl.applyFilterAsync(e, t, r, i);
                }
                applyRangeFilterAsync(e, t) {
                    return this._worksheetImpl.applyRangeFilterAsync(e, t);
                }
                clearFilterAsync(e) {
                    return this._worksheetImpl.clearFilterAsync(e);
                }
                applyRelativeDateFilterAsync(e, t) {
                    return this._worksheetImpl.applyRelativeDateFilterAsync(
                        e,
                        t
                    );
                }
                applyHierarchicalFilterAsync(e, t, r, i) {
                    return this._worksheetImpl.applyHierarchicalFilterAsync(
                        e,
                        t,
                        r,
                        i
                    );
                }
                clearSelectedMarksAsync() {
                    return this._worksheetImpl.clearSelectedMarksAsync();
                }
                getSelectedMarksAsync() {
                    return this._worksheetImpl.getSelectedMarksAsync();
                }
                annotateMarkAsync(e, t) {
                    return this._worksheetImpl.annotateMarkAsync(e, t);
                }
                getAnnotationsAsync() {
                    return this._worksheetImpl.getAnnotationsAsync();
                }
                removeAnnotationAsync(e) {
                    return this._worksheetImpl.removeAnnotationAsync(e);
                }
                selectMarksByValueAsync(e, t) {
                    return this._worksheetImpl.selectMarksByValueAsync(e, t);
                }
                appendContextMenuAsync(e, t) {
                    return this._worksheetImpl.appendContextMenuAsync(e, t);
                }
                removeContextMenuAsync(e, t) {
                    return this._worksheetImpl.removeContextMenuAsync(e, t);
                }
                executeContextMenuAsync(e, t) {
                    return this._worksheetImpl.executeContextMenuAsync(e, t);
                }
                renameContextMenuAsync(e, t, r) {
                    return this._worksheetImpl.renameContextMenuAsync(e, t, r);
                }
                getVisualSpecificationAsync() {
                    return this._worksheetImpl.getVisualSpecificationAsync();
                }
                addMarksCardFieldsAsync(e, t, r, i) {
                    return this._worksheetImpl.addMarksCardFieldsAsync(
                        e,
                        t,
                        r,
                        i
                    );
                }
                moveMarksCardFieldAsync(e, t, r, i) {
                    return this._worksheetImpl.moveMarksCardFieldAsync(
                        e,
                        t,
                        r,
                        i
                    );
                }
                spliceMarksCardFieldsAsync(e, t, r, i, n) {
                    return this._worksheetImpl.spliceMarksCardFieldsAsync(
                        e,
                        t,
                        r,
                        i,
                        n
                    );
                }
            }
            t.Worksheet = o;
        },
        7264: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(3448),
                n = r(5136);
            class a extends n.ServiceImplBase {
                get serviceName() {
                    return "authentication";
                }
                setAuthToken(e) {
                    const t = { authToken: e };
                    return this.execute(i.VerbId.Authenticate, t).then(
                        (e) => {}
                    );
                }
            }
            t.AuthServiceImpl = a;
        },
        472: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(7419),
                n = r(3448),
                a = r(5136);
            class o extends a.ServiceImplBase {
                get serviceName() {
                    return "EmbeddingVizApiService";
                }
                getEmbeddingVizStateWithDataModelAsync() {
                    const e = n.VerbId.GetVizStateWithDataModel,
                        t = {
                            [n.ParameterId.FunctionName]:
                                "getVizStateWithDataModel",
                        };
                    return this.execute(e, t).then((e) => {
                        const t = e.result;
                        return (
                            this.checkForErrorParameter(t),
                            {
                                vizStateWithDataModel:
                                    t[n.ParameterId.VizAPIStateWithDataModel],
                            }
                        );
                    });
                }
                checkForErrorParameter(e) {
                    if (e[n.ParameterId.VizAPIStateWarningMsg])
                        throw new a.TableauError(
                            i.ErrorCodes.InternalError,
                            e[n.ParameterId.VizAPIStateWarningMsg]
                        );
                }
                setEmbeddingVizStateWithDataModelAsync(e) {
                    const t = n.VerbId.SetVizStateWithDataModel,
                        r = {
                            [n.ParameterId.FunctionName]:
                                "setVizStateWithDataModel",
                            [n.ParameterId.VizAPIStateWithDataModel]:
                                e.vizStateWithDataModel,
                        };
                    return this.execute(t, r).then((e) => {
                        if (0 !== Object.keys(e.result).length) {
                            const t = e.result;
                            throw new a.TableauError(
                                i.ErrorCodes.InternalError,
                                t
                            );
                        }
                    });
                }
                getEmbeddingAbstractQueryAsync() {
                    const e = n.VerbId.GetEmbeddingAbstractQueryWithDataModel,
                        t = {
                            [n.ParameterId.FunctionName]:
                                "getEmbeddingAbstractQuery",
                        };
                    return this.execute(e, t).then((e) => e.result);
                }
            }
            t.EmbeddingVizApiServiceImpl = o;
        },
        192: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(5136);
            class n extends i.NotificationServiceImplBase {
                get serviceName() {
                    return "initialization-service";
                }
            }
            t.InitializationServiceImpl = n;
        },
        632: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(7419),
                n = r(3448),
                a = r(5136),
                o = r(9788),
                s = r(4472);
            class l extends a.ServiceImplBase {
                get serviceName() {
                    return "PulseService";
                }
                applyFiltersAsync(e) {
                    const t = n.VerbId.ApplyPulseFilters,
                        r = { [n.ParameterId.PulseFilters]: e };
                    if (!Array.isArray(e))
                        throw new a.TableauError(
                            o.ErrorCodes.InvalidParameter,
                            "filters parameter for applyFiltersAsync must be an array"
                        );
                    for (const t of e) {
                        if (!Array.isArray(t.values))
                            throw new a.TableauError(
                                o.ErrorCodes.InvalidParameter,
                                "filter values for applyFiltersAsync must be an array"
                            );
                        if (
                            !t.updateType ||
                            !Object.values(n.FilterUpdateType).includes(
                                t.updateType
                            )
                        )
                            throw new a.TableauError(
                                o.ErrorCodes.InvalidParameter,
                                "filter updateType for applyFiltersAsync must be a valid update type"
                            );
                        if (!t.options)
                            throw new a.TableauError(
                                o.ErrorCodes.InvalidParameter,
                                "filter options object for applyFiltersAsync must be provided"
                            );
                        if (![!0, !1].includes(t.options.isExcludeMode))
                            throw new a.TableauError(
                                o.ErrorCodes.InvalidParameter,
                                "filter options.isExcludeMode for applyFiltersAsync must be a boolean"
                            );
                    }
                    return this.execute(t, r).then((t) =>
                        e.map((e) => e.fieldName)
                    );
                }
                getTimeDimensionAsync() {
                    const e = n.VerbId.GetPulseTimeDimension;
                    return this.execute(e, {}).then((e) => {
                        const { timeDimension: t } = e.result;
                        if (!t)
                            throw new a.TableauError(
                                o.ErrorCodes.InvalidTimeDimension,
                                "Unable to determine the currently applied time dimension."
                            );
                        if (
                            !a.ErrorHelpers.isValidEnumValue(
                                t,
                                i.PulseTimeDimension
                            )
                        ) {
                            const e = [
                                `The current time dimension is '${t}', which is not a known value of the Contract.PulseTimeDimension enum.`,
                                "You may need to update your version of the Tableau Embedding API.",
                                `Valid values are: ${Object.keys(
                                    i.PulseTimeDimension
                                ).join(", ")}`,
                            ];
                            console.warn(e.join(" "));
                        }
                        return t;
                    });
                }
                applyTimeDimensionAsync(e) {
                    a.ErrorHelpers.verifyEnumValue(
                        e,
                        i.PulseTimeDimension,
                        "Contract.PulseTimeDimension"
                    );
                    const t = n.VerbId.ApplyPulseTimeDimension,
                        r = { [n.ParameterId.PulseTimeDimension]: e };
                    return this.execute(t, r).then((e) => {});
                }
                getCategoricalDomainAsync(e, t, r, o, s) {
                    a.ErrorHelpers.verifyStringParameter(e, "fieldName"),
                        a.ErrorHelpers.verifyEnumValue(
                            t,
                            i.FilterDomainType,
                            "Contract.FilterDomainType"
                        );
                    const l = n.VerbId.GetPulseCategoricalDomain,
                        u = {
                            [n.ParameterId.PulseFieldName]: e,
                            [n.ParameterId.PulseFilterDomainType]: t,
                            [n.ParameterId.PulseFilterDomainSearchTerm]: r,
                        };
                    return (
                        void 0 !== o && (u[n.ParameterId.PulsePageSize] = o),
                        void 0 !== s &&
                            (u[n.ParameterId.PulseNextPageToken] = s),
                        this.execute(l, u).then((e) => e.result)
                    );
                }
                getFiltersAsync() {
                    const e = n.VerbId.GetPulseFilters;
                    return this.execute(e, {}).then((e) => {
                        const t = e.result;
                        return this.convertDomainFilters(t);
                    });
                }
                clearFiltersAsync(e) {
                    const t = n.VerbId.ClearPulseFilters,
                        r = { [n.ParameterId.PulseFieldNames]: e };
                    if (!Array.isArray(e))
                        throw new a.TableauError(
                            o.ErrorCodes.InvalidParameter,
                            "fieldNames parameter for clearFiltersAsync must be an array"
                        );
                    return this.execute(t, r).then((t) => e);
                }
                clearAllFiltersAsync() {
                    const e = n.VerbId.ClearAllPulseFilters;
                    return this.execute(e, {}).then((e) => {});
                }
                convertDomainFilters(e) {
                    const t = [];
                    return (
                        e.forEach((e) => {
                            switch (e.filterType) {
                                case i.FilterType.Categorical: {
                                    const r = e;
                                    if (!r)
                                        throw new Error(
                                            "Invalid Categorical Filter"
                                        );
                                    t.push(this.convertCategoricalFilter(r));
                                    break;
                                }
                            }
                        }),
                        t
                    );
                }
                convertCategoricalFilter(e) {
                    return new s.CategoricalPulseFilter(
                        e.fieldName,
                        e.metricId,
                        i.FilterType.Categorical,
                        this._registryId,
                        e.appliedValues,
                        e.isExcludeMode,
                        e.isAllSelected
                    );
                }
            }
            t.PulseServiceImpl = l;
        },
        9616: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(3448),
                n = r(5136);
            class a extends n.ServiceImplBase {
                get serviceName() {
                    return "ToolbarService";
                }
                revertAllAsync() {
                    const e = i.VerbId.RevertWorkbook,
                        t = { [i.ParameterId.FunctionName]: "revertAllAsync" };
                    return this.execute(e, t).then((e) => {});
                }
                redoAsync() {
                    const e = i.VerbId.Redo,
                        t = { [i.ParameterId.FunctionName]: "redoAsync" };
                    return this.execute(e, t).then((e) => {});
                }
                undoAsync() {
                    const e = i.VerbId.Undo,
                        t = { [i.ParameterId.FunctionName]: "undoAsync" };
                    return this.execute(e, t).then((e) => {});
                }
                exportImageAsync() {
                    const e = i.VerbId.ExportImage,
                        t = {
                            [i.ParameterId.FunctionName]: "exportImageAsync",
                        };
                    return this.execute(e, t).then((e) => {});
                }
                setAutoUpdateAsync(e) {
                    const t = i.VerbId.SetAutoUpdate,
                        r = {
                            [i.ParameterId.FunctionName]: "setAutoUpdateAsync",
                            [i.ParameterId.State]: e,
                        };
                    return this.execute(t, r).then(() => {});
                }
                displayDownloadWorkbookDialogAsync() {
                    const e = i.VerbId.DownloadWorkbook,
                        t = {
                            [i.ParameterId.FunctionName]:
                                "displayDialogAsync(Workbook)",
                        };
                    return this.execute(e, t).then((e) => {});
                }
                displayExportPdfDialogAsync() {
                    const e = i.VerbId.ExportPdf,
                        t = {
                            [i.ParameterId.FunctionName]:
                                "displayDialogAsync(ExportPDF)",
                        };
                    return this.execute(e, t).then((e) => {});
                }
                displayExportPowerpointDialogAsync() {
                    const e = i.VerbId.ExportPowerpoint,
                        t = {
                            [i.ParameterId.FunctionName]:
                                "displayDialogAsync(ExportPowerPoint)",
                        };
                    return this.execute(e, t).then((e) => {});
                }
                displayExportDataDialogAsync() {
                    const e = i.VerbId.ExportData,
                        t = {
                            [i.ParameterId.FunctionName]:
                                "displayDialogAsync(ExportData)",
                        };
                    return this.execute(e, t).then((e) => {});
                }
                displayExportCrosstabDialogAsync() {
                    const e = i.VerbId.ExportCrosstab,
                        t = {
                            [i.ParameterId.FunctionName]:
                                "displayDialogAsync(ExportCrossTab)",
                        };
                    return this.execute(e, t).then((e) => {});
                }
                displayShareDialogAsync() {
                    const e = i.VerbId.Share,
                        t = {
                            [i.ParameterId.FunctionName]:
                                "displayDialogAsync(Share)",
                        };
                    return this.execute(e, t).then((e) => {});
                }
            }
            t.ToolbarServiceImpl = a;
        },
        7720: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(5136),
                n = r(7264),
                a = r(472),
                o = r(192),
                s = r(9616);
            (t.registerAllEmbeddingServices = function (e, t) {
                const r = i.ApiServiceRegistry.get(t);
                r.registerService(new i.ClientInfoServiceImpl(e, t)),
                    r.registerService(new a.EmbeddingVizApiServiceImpl(e, t)),
                    r.registerService(new i.SizeServiceImpl(e, t)),
                    r.registerService(new i.StoryActivationServiceImpl(e, t)),
                    r.registerService(new s.ToolbarServiceImpl(e, t));
            }),
                (t.registerInitializationEmbeddingServices = function (e, t) {
                    i.ApiServiceRegistry.get(t).registerService(
                        new o.InitializationServiceImpl(e)
                    );
                }),
                (t.registerAuthServices = function (e, t) {
                    i.ApiServiceRegistry.get(t).registerService(
                        new n.AuthServiceImpl(e, t)
                    );
                });
        },
        8272: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7720);
            (t.registerAllEmbeddingServices = i.registerAllEmbeddingServices),
                (t.registerInitializationEmbeddingServices =
                    i.registerInitializationEmbeddingServices);
        },
        2240: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            class r {}
            (t.HtmlElementHelpers = r),
                (r.getContentSize = (e) => {
                    const t = window.getComputedStyle(e),
                        r = parseInt(t.paddingLeft, 10) || 0,
                        i = parseInt(t.paddingTop, 10) || 0,
                        n = parseInt(t.paddingRight, 10) || 0,
                        a = parseInt(t.paddingBottom, 10) || 0;
                    return {
                        width: e.clientWidth - Math.round(r + n),
                        height: e.clientHeight - Math.round(i + a),
                    };
                });
        },
        6760: function (e, t) {
            var r =
                (this && this.__awaiter) ||
                function (e, t, r, i) {
                    return new (r || (r = Promise))(function (n, a) {
                        function o(e) {
                            try {
                                l(i.next(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function s(e) {
                            try {
                                l(i.throw(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function l(e) {
                            var t;
                            e.done
                                ? n(e.value)
                                : ((t = e.value),
                                  t instanceof r
                                      ? t
                                      : new r(function (e) {
                                            e(t);
                                        })).then(o, s);
                        }
                        l((i = i.apply(e, t || [])).next());
                    });
                };
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.PromiseQueue = class {
                    constructor() {
                        (this.queue = []),
                            (this.pending = 0),
                            (this.concurrency = 1);
                    }
                    add(e) {
                        return new Promise((t, i) => {
                            this.queue.push(() =>
                                r(this, void 0, void 0, function* () {
                                    try {
                                        const r = yield e();
                                        t(r);
                                    } catch (e) {
                                        i(e);
                                    } finally {
                                        this.pending--, this.poll();
                                    }
                                })
                            );
                        });
                    }
                    poll() {
                        if (
                            this.pending < this.concurrency &&
                            this.queue.length > 0
                        ) {
                            const e = this.queue.shift();
                            this.pending++, e();
                        }
                    }
                    size() {
                        return this.queue.length;
                    }
                });
        },
        9432: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(6760);
            class n {
                static authRequired(e, t) {
                    if (!t) return !0;
                    try {
                        const t = new URL(e);
                        if (this.signedInOrigins.has(t.origin)) return !1;
                    } catch (e) {
                        return !0;
                    }
                    return !0;
                }
                static updateSignedInOrigin(e, t) {
                    if (t)
                        try {
                            const t = new URL(e);
                            this.signedInOrigins.add(t.origin);
                        } catch (e) {
                            return;
                        }
                }
                static clearOrigin(e, t) {
                    if (t && e)
                        try {
                            const t = new URL(e);
                            this.signedInOrigins.delete(t.origin);
                        } catch (e) {
                            return;
                        }
                }
                static registerWebComponent(e) {
                    const t = this.embeddingIndex;
                    return (
                        this.webComponents.set(t, e), this.embeddingIndex++, t
                    );
                }
                static unregisterWebComponent(e) {
                    this.webComponents.delete(e);
                }
                static getWebComponents() {
                    const e = new Map();
                    return (
                        this.webComponents.forEach((t, r) => {
                            e.set(r, t);
                        }),
                        e
                    );
                }
                static synchronizeRender(e) {
                    const t = this.queue.add(e);
                    return this.queue.poll(), t;
                }
                static clear() {
                    this.webComponents.clear();
                }
            }
            (t.WebComponentManager = n),
                (n.embeddingIndex = 0),
                (n.webComponents = new Map()),
                (n.queue = new i.PromiseQueue()),
                (n.signedInOrigins = new Set());
        },
        268: (e, t, r) => {
            function i(e) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), i(r(4171));
            var n = r(3536);
            (t.ApiMenuType = n.ApiMenuType),
                (t.CrosstabFileFormat = n.CrosstabFileFormat),
                (t.DeviceType = n.DeviceType),
                (t.EmbeddingErrorCodes = n.EmbeddingErrorCodes),
                (t.EmbeddingTableauEventType = n.TableauEventType),
                (t.FileFormats = n.FileFormats),
                (t.PrintOrientation = n.PrintOrientation),
                (t.PrintPageSize = n.PrintPageSize),
                (t.PrintScaling = n.PrintScaling),
                (t.PulseErrorMessageVisibility = n.PulseErrorMessageVisibility),
                (t.PulseLayout = n.PulseLayout),
                (t.PulseTimeDimension = n.PulseTimeDimension),
                (t.SheetSizeBehavior = n.SheetSizeBehavior),
                (t.TableauDialogType = n.TableauDialogType),
                (t.Toolbar = n.Toolbar),
                i(r(828)),
                i(r(3432)),
                i(r(1480)),
                i(r(5488));
        },
        5840: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(4744);
            (t.ErrorCodes = i.ErrorCodes),
                (t.ExtensionContext = i.ExtensionContext),
                (t.ExtensionMode = i.ExtensionMode),
                (t.TableauEventType = i.TableauEventType),
                (t.VizImageEncodingType = i.VizImageEncodingType),
                (t.VizImagePaletteType = i.VizImagePaletteType),
                (t.VizImageSizeSettingAlignmentType =
                    i.VizImageSizeSettingAlignmentType),
                (t.VizImageSizeSettingType = i.VizImageSizeSettingType),
                (t.VizImageSortDirectionType = i.VizImageSortDirectionType),
                (function (e) {
                    for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
                })(r(5488));
        },
        7419: (e, t, r) => {
            function i(e) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                i(r(268)),
                i(r(5840));
        },
        4171: (e, t) => {
            var r;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((r =
                    t.AskDataAttributes || (t.AskDataAttributes = {})).Origin =
                    "origin"),
                (r.ShowEmbed = "show-embed"),
                (r.ShowPin = "show-pin"),
                (r.ShowSave = "show-save"),
                (r.ShowShare = "show-share");
        },
        3536: (e, t) => {
            var r, i, n, a, o, s, l, u, c, d, p, h, m, y, g, f;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((f = t.CrosstabFileFormat || (t.CrosstabFileFormat = {})).CSV =
                    "csv"),
                (f.Excel = "xlsx"),
                ((g = t.DeviceType || (t.DeviceType = {})).Default = "default"),
                (g.Desktop = "desktop"),
                (g.Tablet = "tablet"),
                (g.Phone = "phone"),
                ((y =
                    t.EmbeddingErrorCodes ||
                    (t.EmbeddingErrorCodes = {})).AuthFailed = "auth-failed"),
                (y.BrowserNotCapable = "browser-not-capable"),
                (y.DownloadWorkbookNotAllowed =
                    "download-workbook-not-allowed"),
                (y.FilterCannotBePerformed = "filter-cannot-be-performed"),
                (y.IndexOutOfRange = "index-out-of-range"),
                (y.InternalError = "internal-error"),
                (y.InvalidCustomViewName = "invalid-custom-view-name"),
                (y.InvalidDateParameter = "invalid-date-parameter"),
                (y.invalidFilterFieldNameOrValue = "invalid-filter-field-name"),
                (y.InvalidParameter = "invalid-parameter"),
                (y.InvalidTimeDimension = "invalid-time-dimension"),
                (y.InvalidSize = "invalid-size"),
                (y.InvalidSheetType = "invalid-sheet-type"),
                (y.InvalidSizeBehavior = "invalid-size-behavior"),
                (y.InvalidSizeBehaviorOnWorksheet =
                    "invalid-size-behavior-on-worksheet"),
                (y.InvalidUrl = "invalid-url"),
                (y.MissingMaxSize = "missing-max-size"),
                (y.MissingMinSize = "missing-min-size"),
                (y.MissingMinMaxSize = "missing-min-max-size"),
                (y.MissingParameter = "missing-parameter"),
                (y.MissingRangeNForRelativeDateFilters =
                    "missing-range-n-for-relative-date-filters"),
                (y.NoUrlForHiddenWorksheet = "no-url-for-hidden-worksheet"),
                (y.NoUrlOrParentElementNotFound =
                    "no-url-or-parent-element-not-found"),
                (y.NotActiveSheet = "not-active-sheet"),
                (y.NullOrEmptyParameter = "null-or-empty-parameter"),
                (y.SheetNotInWorkbook = "sheet-not-in-workbook"),
                (y.StaleDataReference = "stale-data-reference"),
                (y.UnknownAuthError = "unknown-auth-error"),
                (y.UnsupportedEventName = "unsupported-event-name"),
                (y.VizAlreadyInManager = "viz-already-in-manager"),
                (y.ImplementationError = "wrong-implementation"),
                (y.NotImplemented = "not-implemented"),
                (y.EventInitializationError = "event-initialization-error"),
                (y.IncompatibleVersionError = "incompatible-version-error"),
                (y.UnknownDialogType = "unknown-dialog-type"),
                (y.FilterMissingOrNotImplemented =
                    "filter-missing-not-implemented"),
                (y.StoryPointIdMismatch = "storypoint-id-mismatch"),
                ((m = t.FileFormats || (t.FileFormats = {})).PDF = "pdf"),
                (m.PNG = "png"),
                ((h =
                    t.PrintOrientation || (t.PrintOrientation = {})).Portrait =
                    "portrait"),
                (h.Landscape = "landscape"),
                ((p = t.PrintPageSize || (t.PrintPageSize = {})).Letter =
                    "letter"),
                (p.Legal = "legal"),
                (p.Note = "note"),
                (p.Folio = "folio"),
                (p.Tabloid = "tabloid"),
                (p.Ledger = "ledger"),
                (p.Statement = "statement"),
                (p.Executive = "executive"),
                (p.A3 = "A3"),
                (p.A4 = "A4"),
                (p.A5 = "A5"),
                (p.B4 = "B4"),
                (p.B5 = "B5"),
                (p.Quarto = "quarto"),
                (p.Unspecified = "unspecified"),
                ((d = t.PrintScaling || (t.PrintScaling = {})).Automatic =
                    "automatic"),
                (d.Perc25 = "25%"),
                (d.Perc50 = "50%"),
                (d.Perc60 = "60%"),
                (d.Perc75 = "75%"),
                (d.Perc80 = "80%"),
                (d.Perc90 = "90%"),
                (d.Perc100 = "100%"),
                (d.Perc200 = "200%"),
                (d.Perc400 = "400%"),
                (d.AtMost1PageHigh = "at-most-1-page-high"),
                (d.AtMost2PagesHigh = "at-most-2-pages-high"),
                (d.AtMost1PageWide = "at-most-1-page-wide"),
                (d.AtMost2PagesWide = "at-most-2-pages-wide"),
                ((c = t.RevertVizSelection || (t.RevertVizSelection = {})).All =
                    "all"),
                (c.Axes = "axes"),
                (c.Filters = "filters"),
                (c.Sorts = "sorts"),
                (c.Shelves = "shelves"),
                ((u = t.ToolbarButtons || (t.ToolbarButtons = {})).Alerts =
                    "alerts"),
                (u.AskData = "askData"),
                (u.CustomViews = "customViews"),
                (u.DataDetails = "dataDetails"),
                (u.Share = "share"),
                (u.Subscribe = "subscribe"),
                ((l = t.Toolbar || (t.Toolbar = {})).Top = "top"),
                (l.Bottom = "bottom"),
                (l.Hidden = "hidden"),
                ((s =
                    t.SheetSizeBehavior ||
                    (t.SheetSizeBehavior = {})).Automatic = "automatic"),
                (s.Exactly = "exactly"),
                (s.Range = "range"),
                (s.AtLeast = "atleast"),
                (s.AtMost = "atmost"),
                ((o = t.PulseLayout || (t.PulseLayout = {})).Default =
                    "default"),
                (o.Card = "card"),
                (o.Ban = "ban"),
                ((a =
                    t.PulseTimeDimension || (t.PulseTimeDimension = {})).Today =
                    "Today"),
                (a.Yesterday = "Yesterday"),
                (a.WeekToDate = "WeekToDate"),
                (a.LastWeek = "LastWeek"),
                (a.MonthToDate = "MonthToDate"),
                (a.LastMonth = "LastMonth"),
                (a.QuarterToDate = "QuarterToDate"),
                (a.LastQuarter = "LastQuarter"),
                (a.YearToDate = "YearToDate"),
                (a.LastYear = "LastYear"),
                ((n =
                    t.PulseErrorMessageVisibility ||
                    (t.PulseErrorMessageVisibility = {})).Visible = "visible"),
                (n.Hidden = "hidden"),
                (n.Suppressed = "suppressed"),
                ((i =
                    t.TableauEventType ||
                    (t.TableauEventType = {})).CustomViewLoaded =
                    "customviewloaded"),
                (i.CustomViewRemoved = "customviewremoved"),
                (i.CustomViewSaved = "customviewsaved"),
                (i.CustomViewSetDefault = "customviewsetdefault"),
                (i.EditButtonClicked = "editbuttonclicked"),
                (i.EditInDesktopButtonClicked = "editindesktopbuttonclicked"),
                (i.FilterChanged = "filterchanged"),
                (i.FirstVizSizeKnown = "firstvizsizeknown"),
                (i.FirstInteractive = "firstinteractive"),
                (i.CustomMarkContextMenuEvent = "custommarkcontextmenu"),
                (i.MarkSelectionChanged = "markselectionchanged"),
                (i.ParameterChanged = "parameterchanged"),
                (i.ToolbarStateChanged = "toolbarstatechanged"),
                (i.WorkbookReadyToClose = "workbookreadytoclose"),
                (i.WorkbookPublished = "workbookpublished"),
                (i.WorkbookPublishedAs = "workbookpublishedas"),
                (i.UrlAction = "urlaction"),
                (i.TabSwitched = "tabswitched"),
                (i.StoryPointSwitched = "storypointswitched"),
                (i.VizLoadError = "vizloaderror"),
                (i.IframeSrcUpdated = "iframesrcupdated"),
                (i.SummaryDataChanged = "summarydatachanged"),
                (i.ReadyToReceiveAuthToken = "readytoreceiveauthtoken"),
                (i.FirstPulseMetricSizeKnown = "firstpulsemetricsizeknown"),
                (i.PulseError = "pulseerror"),
                (i.PulseFiltersChanged = "pulsefilterschanged"),
                (i.PulseInsightDiscovered = "pulseinsightdiscovered"),
                (i.PulseTimeDimensionChanged = "pulsetimedimensionchanged"),
                (i.PulseUrlChanged = "pulseurlchanged"),
                ((t.ApiMenuType || (t.ApiMenuType = {})).Ubertip = "ubertip"),
                ((r =
                    t.TableauDialogType ||
                    (t.TableauDialogType = {})).ExportPDF = "export-pdf"),
                (r.ExportPowerPoint = "export-powerpoint"),
                (r.ExportData = "export-data"),
                (r.ExportCrossTab = "export-cross-tab"),
                (r.ExportWorkbook = "export-workbook"),
                (r.Share = "share");
        },
        828: (e, t) => {
            var r, i, n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((n =
                    t.PulseAttributes ||
                    (t.PulseAttributes = {})).DisableExploreFilter =
                    "disable-explore-filter"),
                (n.Layout = "layout"),
                (n.OnFirstInteractive = "onFirstInteractive"),
                (n.OnFirstPulseMetricSizeKnown = "onFirstPulseMetricSizeKnown"),
                (n.OnPulseUrlError = "onPulseError"),
                (n.OnPulseFiltersChanged = "onPulseFiltersChanged"),
                (n.OnPulseInsightDiscovered = "onPulseInsightDiscovered"),
                (n.OnPulseTimeDimensionChanged = "onPulseTimeDimensionChanged"),
                (n.OnPulseUrlChanged = "onPulseUrlChanged"),
                (n.TimeDimension = "time-dimension"),
                (n.TokenOptional = "token-optional"),
                ((i =
                    t.PulseChildElements ||
                    (t.PulseChildElements = {})).IframeStyle = "iframe-style"),
                (i.ThemeParameter = "theme-parameter"),
                (i.PulseFilter = "pulse-filter"),
                ((r =
                    t.PulseChildElementAttributes ||
                    (t.PulseChildElementAttributes = {})).Name = "name"),
                (r.Field = "field"),
                (r.Value = "value"),
                (r.Type = "type");
        },
        3432: (e, t) => {
            var r, i, n, a, o;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((o =
                    t.VizSharedAttributes ||
                    (t.VizSharedAttributes = {})).TouchOptimize =
                    "touch-optimize"),
                (o.HideEditInDesktopButton = "hide-edit-in-desktop-button"),
                (o.SuppressDefaultEditBehavior =
                    "suppress-default-edit-behavior"),
                (o.DisableVersionCheck = "disable-version-check"),
                (o.OnEditInDesktopButtonClicked =
                    "onEditInDesktopButtonClicked"),
                (o.OnFirstVizSizeKnown = "onFirstVizSizeKnown"),
                (o.OnFirstInteractive = "onFirstInteractive"),
                ((a =
                    t.VizAttributes ||
                    (t.VizAttributes = {})).DisableUrlActionsPopups =
                    "disable-url-actions"),
                (a.HideTabs = "hide-tabs"),
                (a.Toolbar = "toolbar"),
                (a.InstanceIdToClone = "instance-id-to-clone"),
                (a.Device = "device"),
                (a.HideEditButton = "hide-edit-button"),
                (a.OnEditButtonClicked = "onEditButtonClicked"),
                (a.OnFilterChanged = "onFilterChanged"),
                (a.OnCustomMarkContextMenuEvent =
                    "onCustomMarkContextMenuEvent"),
                (a.OnMarkSelectionChanged = "onMarkSelectionChanged"),
                (a.OnParameterChanged = "onParameterChanged"),
                (a.OnToolbarStateChanged = "onToolbarStateChanged"),
                (a.OnUrlAction = "onUrlAction"),
                (a.OnTabSwitched = "onTabSwitched"),
                (a.OnCustomViewLoaded = "onCustomViewLoaded"),
                (a.OnCustomViewRemoved = "onCustomViewRemoved"),
                (a.OnCustomViewSaved = "onCustomViewSaved"),
                (a.OnCustomViewSetDefault = "onCustomViewSetDefault"),
                (a.OnStoryPointSwitched = "onStoryPointSwitched"),
                (a.OnSummaryDataChanged = "onSummaryDataChanged"),
                (a.OnReadyToReceiveAuthToken = "onReadyToReceiveAuthToken"),
                ((n =
                    t.VizAuthoringAttributes ||
                    (t.VizAuthoringAttributes = {})).OnWorkbookPublished =
                    "onWorkbookPublished"),
                (n.OnWorkbookPublishedAs = "onWorkbookPublishedAs"),
                (n.OnWorkbookReadyToClose = "onWorkbookReadyToClose"),
                (n.HideCloseButton = "hide-close-button"),
                ((i =
                    t.VizChildElements || (t.VizChildElements = {})).VizFilter =
                    "viz-filter"),
                (i.VizParameter = "viz-parameter"),
                (i.CustomParameter = "custom-parameter"),
                (i.IframeStyle = "iframe-style"),
                ((r =
                    t.VizChildElementAttributes ||
                    (t.VizChildElementAttributes = {})).Field = "field"),
                (r.Value = "value"),
                (r.Name = "name");
        },
        1480: (e, t) => {
            var r, i, n, a;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((a =
                    t.WebComponentAttributes ||
                    (t.WebComponentAttributes = {})).Src = "src"),
                (a.Width = "width"),
                (a.Height = "height"),
                (a.Token = "token"),
                (a.Debug = "debug"),
                (a.IframeAuth = "iframe-auth"),
                (a.OnVizLoadError = "onvizloaderror"),
                (a.ForceTokenSync = "force-token-sync"),
                ((n =
                    t.EmbeddedIframeAttributes ||
                    (t.EmbeddedIframeAttributes = {})).Loading =
                    "iframe-attr-loading"),
                (n.Style = "iframe-attr-style"),
                (n.Class = "iframe-attr-class"),
                ((i =
                    t.WebComponentChildElements ||
                    (t.WebComponentChildElements = {})).CustomParameter =
                    "custom-parameter"),
                (i.IframeStyle = "iframe-style"),
                ((r =
                    t.WebComponentChildElementAttributes ||
                    (t.WebComponentChildElementAttributes = {})).Field =
                    "field"),
                (r.Value = "value"),
                (r.Name = "name");
        },
        4744: (e) => {
            var t;
            !(function (e) {
                var t, r, i, n, a, o, s, l, u;
                ((u = e.ErrorCodes || (e.ErrorCodes = {})).APINotInitialized =
                    "api-not-initialized"),
                    (u.VisibilityError = "visibility-error"),
                    (u.DialogAlreadyOpen = "dialog-already-open"),
                    (u.DialogClosedByUser = "dialog-closed-by-user"),
                    (u.InternalError = "internal-error"),
                    (u.InvalidDomainDialog = "invalid-dialog-domain"),
                    (u.InvalidParameter = "invalid-parameter"),
                    (u.MissingFilter = "missing-filter"),
                    (u.MissingParameter = "missing-parameter"),
                    (u.ServerError = "server-error"),
                    (u.SettingSaveInProgress = "setting-save-in-progress"),
                    (u.UnsupportedEventName = "unsupported-event-name"),
                    (u.UnsupportedMethodForDataSourceType =
                        "unsupported-method-for-data-source-type"),
                    ((l =
                        e.ExtensionContext ||
                        (e.ExtensionContext = {})).Desktop = "desktop"),
                    (l.Server = "server"),
                    ((s = e.ExtensionMode || (e.ExtensionMode = {})).Authoring =
                        "authoring"),
                    (s.Viewing = "viewing"),
                    ((o =
                        e.TableauEventType ||
                        (e.TableauEventType = {})).FilterChanged =
                        "filter-changed"),
                    (o.MarkSelectionChanged = "mark-selection-changed"),
                    (o.SummaryDataChanged = "summary-data-changed"),
                    (o.ParameterChanged = "parameter-changed"),
                    (o.SettingsChanged = "settings-changed"),
                    (o.DashboardLayoutChanged = "dashboard-layout-changed"),
                    (o.WorkbookFormattingChanged =
                        "workbook-formatting-changed"),
                    (o.WorksheetFormattingChanged =
                        "worksheet-formatting-changed"),
                    ((a =
                        e.VizImageEncodingType ||
                        (e.VizImageEncodingType = {})).Discrete = "discrete"),
                    (a.Continuous = "continuous"),
                    ((n =
                        e.VizImageSortDirectionType ||
                        (e.VizImageSortDirectionType = {})).Ascending =
                        "ascending"),
                    (n.Descending = "descending"),
                    ((i =
                        e.VizImagePaletteType ||
                        (e.VizImagePaletteType = {})).CustomDiverging =
                        "custom-diverging"),
                    (i.CustomSequential = "custom-sequential"),
                    ((r =
                        e.VizImageSizeSettingType ||
                        (e.VizImageSizeSettingType = {})).Fixed = "fixed"),
                    (r.Manual = "manual"),
                    ((t =
                        e.VizImageSizeSettingAlignmentType ||
                        (e.VizImageSizeSettingAlignmentType = {})).Right =
                        "right"),
                    (t.Left = "left"),
                    (t.Center = "center");
            })(t || (t = {})),
                (e.exports = t);
        },
        4912: (e, t) => {
            var r;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((r =
                    t.SharedErrorCodes ||
                    (t.SharedErrorCodes = {})).CrosstabCreationError =
                    "crosstab-creation-error"),
                (r.DataCreationError = "data-creation-error"),
                (r.InvalidAggregationFieldName =
                    "invalid-aggregation-field-name"),
                (r.InvalidFilterFieldName = "invalid-filter-name"),
                (r.InvalidFilterFieldValue = "invalid-filter-fieldValue"),
                (r.InvalidSelectionDate = "invalid-selection-date"),
                (r.InvalidSelectionFieldName = "invalid-selection-fieldName"),
                (r.InvalidSelectionValue = "invalid-selection-value"),
                (r.InvalidSelectionSheet = "invalid-selection-sheet"),
                (r.InternalError = "internal-error"),
                (r.InvalidParameter = "invalid-parameter"),
                (r.PDFCreationError = "pdf-creation-error"),
                (r.PowerPointCreationError = "powerpoint-creation-error"),
                (r.NotActiveSheet = "not-active-sheet"),
                (r.ImplementationError = "wrong-implementation"),
                (r.ApiExecutionError = "api-execution-error"),
                (r.ServerError = "server-error"),
                (r.Timeout = "timeout");
        },
        808: function (e) {
            var t,
                r =
                    (this && this.__assign) ||
                    function () {
                        return (
                            (r =
                                Object.assign ||
                                function (e) {
                                    for (
                                        var t, r = 1, i = arguments.length;
                                        r < i;
                                        r++
                                    )
                                        for (var n in (t = arguments[r]))
                                            Object.prototype.hasOwnProperty.call(
                                                t,
                                                n
                                            ) && (e[n] = t[n]);
                                    return e;
                                }),
                            r.apply(this, arguments)
                        );
                    };
            !(function (e) {
                var t,
                    i,
                    n,
                    a,
                    o,
                    s,
                    l,
                    u,
                    c,
                    d,
                    p,
                    h,
                    m,
                    y,
                    g,
                    f,
                    b,
                    v,
                    I,
                    S,
                    T,
                    A,
                    _,
                    P,
                    E,
                    w,
                    C,
                    D,
                    k;
                ((k =
                    e.AnalyticsObjectType ||
                    (e.AnalyticsObjectType = {})).Cluster = "cluster"),
                    (k.Forecast = "forecast"),
                    (k.TrendLine = "trend-line"),
                    ((D = e.AnnotationType || (e.AnnotationType = {})).Mark =
                        "mark"),
                    (D.Point = "point"),
                    (D.Area = "area"),
                    ((C = e.ColumnType || (e.ColumnType = {})).Discrete =
                        "discrete"),
                    (C.Continuous = "continuous"),
                    (C.Unknown = "unknown"),
                    ((w =
                        e.ClassNameKey ||
                        (e.ClassNameKey = {})).WorksheetTitle =
                        "tableau-worksheet-title"),
                    (w.Worksheet = "tableau-worksheet"),
                    (w.Tooltip = "tableau-tooltip"),
                    (w.StoryTitle = "tableau-story-title"),
                    (w.DashboardTitle = "tableau-dashboard-title"),
                    (w.Pane = "tableau-pane"),
                    (w.RowDividers = "tableau-row-dividers"),
                    (w.ColumnDividers = "tableau-column-dividers"),
                    ((E =
                        e.DashboardObjectType ||
                        (e.DashboardObjectType = {})).Blank = "blank"),
                    (E.Worksheet = "worksheet"),
                    (E.QuickFilter = "quick-filter"),
                    (E.ParameterControl = "parameter-control"),
                    (E.PageFilter = "page-filter"),
                    (E.Legend = "legend"),
                    (E.Title = "title"),
                    (E.Text = "text"),
                    (E.Image = "image"),
                    (E.WebPage = "web-page"),
                    (E.Extension = "extension"),
                    (function (e) {
                        (e.Show = "show"), (e.Hide = "hide");
                    })(
                        (t =
                            e.DashboardObjectVisibilityType ||
                            (e.DashboardObjectVisibilityType = {}))
                    ),
                    ((P = e.DataType || (e.DataType = {})).String = "string"),
                    (P.Int = "int"),
                    (P.Float = "float"),
                    (P.Bool = "bool"),
                    (P.Date = "date"),
                    (P.DateTime = "date-time"),
                    (P.Spatial = "spatial"),
                    (P.Unknown = "unknown"),
                    ((_ =
                        e.DashboardLayoutChange ||
                        (e.DashboardLayoutChange = {})).Added = "added"),
                    (_.Removed = "removed"),
                    (_.IsFloatingChanged = "is-floating-changed"),
                    (_.IsVisibleChanged = "is-visible-changed"),
                    (_.PositionChanged = "position-changed"),
                    (_.SizeChanged = "size-changed"),
                    (_.NameChanged = "name-changed"),
                    (_.Selected = "selected"),
                    (_.Deselected = "deselected"),
                    (_.DashboardChanged = "dashboard-changed"),
                    ((A = e.DateRangeType || (e.DateRangeType = {})).Last =
                        "last"),
                    (A.LastN = "last-n"),
                    (A.Next = "next"),
                    (A.NextN = "next-n"),
                    (A.Current = "current"),
                    (A.ToDate = "to-date"),
                    ((T = e.DialogStyle || (e.DialogStyle = {})).Window =
                        "window"),
                    (T.Modal = "modal"),
                    (T.Modeless = "modeless"),
                    ((S = e.EncodingType || (e.EncodingType = {})).Column =
                        "column"),
                    (S.Row = "row"),
                    (S.Page = "page"),
                    (S.Filter = "filter"),
                    (S.MarksType = "marks-type"),
                    (S.MeasureValues = "measure-values"),
                    (S.Color = "color"),
                    (S.Size = "size"),
                    (S.Label = "label"),
                    (S.Detail = "detail"),
                    (S.Tooltip = "tooltip"),
                    (S.Shape = "shape"),
                    (S.Path = "path"),
                    (S.Angle = "angle"),
                    (S.Geometry = "geometry"),
                    (S.Custom = "custom"),
                    ((I =
                        e.FieldAggregationType ||
                        (e.FieldAggregationType = {})).Sum = "sum"),
                    (I.Avg = "avg"),
                    (I.Min = "min"),
                    (I.Max = "max"),
                    (I.Stdev = "stdev"),
                    (I.Stdevp = "stdevp"),
                    (I.Var = "var"),
                    (I.Varp = "varp"),
                    (I.Collect = "collect"),
                    (I.Count = "count"),
                    (I.Countd = "countd"),
                    (I.Median = "median"),
                    (I.Attr = "attr"),
                    (I.None = "none"),
                    (I.Year = "year"),
                    (I.Qtr = "qtr"),
                    (I.Month = "month"),
                    (I.Day = "day"),
                    (I.Hour = "hour"),
                    (I.Minute = "minute"),
                    (I.Second = "second"),
                    (I.Week = "week"),
                    (I.Weekday = "weekday"),
                    (I.MonthYear = "month-year"),
                    (I.Mdy = "mdy"),
                    (I.End = "end"),
                    (I.TruncYear = "trunc-year"),
                    (I.TruncQtr = "trunc-qtr"),
                    (I.TruncMonth = "trunc-month"),
                    (I.TruncWeek = "trunc-week"),
                    (I.TruncDay = "trunc-day"),
                    (I.TruncHour = "trunc-hour"),
                    (I.TruncMinute = "trunc-minute"),
                    (I.TruncSecond = "trunc-second"),
                    (I.Quart1 = "quart1"),
                    (I.Quart3 = "quart3"),
                    (I.Skewness = "skewness"),
                    (I.Kurtosis = "kurtosis"),
                    (I.InOut = "in-out"),
                    (I.User = "user"),
                    ((v = e.FieldRoleType || (e.FieldRoleType = {})).Dimension =
                        "dimension"),
                    (v.Measure = "measure"),
                    (v.Unknown = "unknown"),
                    ((b = e.FilterType || (e.FilterType = {})).Categorical =
                        "categorical"),
                    (b.Range = "range"),
                    (b.Hierarchical = "hierarchical"),
                    (b.RelativeDate = "relative-date"),
                    ((f = e.FilterUpdateType || (e.FilterUpdateType = {})).Add =
                        "add"),
                    (f.All = "all"),
                    (f.Replace = "replace"),
                    (f.Remove = "remove"),
                    ((g =
                        e.FilterDomainType ||
                        (e.FilterDomainType = {})).Relevant = "relevant"),
                    (g.Database = "database"),
                    ((y =
                        e.FilterNullOption ||
                        (e.FilterNullOption = {})).NullValues = "null-values"),
                    (y.NonNullValues = "non-null-values"),
                    (y.AllValues = "all-values"),
                    ((m =
                        e.IncludeDataValuesOption ||
                        (e.IncludeDataValuesOption = {})).AllValues =
                        "all-values"),
                    (m.OnlyNativeValues = "only-native-values"),
                    (m.OnlyFormattedValues = "only-formatted-values"),
                    ((h = e.MarkType || (e.MarkType = {})).Bar = "bar"),
                    (h.Line = "line"),
                    (h.Area = "area"),
                    (h.Square = "square"),
                    (h.Circle = "circle"),
                    (h.Shape = "shape"),
                    (h.Text = "text"),
                    (h.Map = "map"),
                    (h.Pie = "pie"),
                    (h.GanttBar = "gantt-bar"),
                    (h.Polygon = "polygon"),
                    (h.Heatmap = "heatmap"),
                    (h.VizExtension = "viz-extension"),
                    ((p =
                        e.ParameterValueType ||
                        (e.ParameterValueType = {})).All = "all"),
                    (p.List = "list"),
                    (p.Range = "range"),
                    ((d = e.PeriodType || (e.PeriodType = {})).Years = "years"),
                    (d.Quarters = "quarters"),
                    (d.Months = "months"),
                    (d.Weeks = "weeks"),
                    (d.Days = "days"),
                    (d.Hours = "hours"),
                    (d.Minutes = "minutes"),
                    (d.Seconds = "seconds"),
                    ((c =
                        e.QuickTableCalcType ||
                        (e.QuickTableCalcType = {})).RunningTotal =
                        "running-total"),
                    (c.Difference = "difference"),
                    (c.PercentDifference = "percent-difference"),
                    (c.PercentOfTotal = "percent-of-total"),
                    (c.Rank = "rank"),
                    (c.Percentile = "percentile"),
                    (c.MovingAverage = "moving-average"),
                    (c.YTDTotal = "ytd-total"),
                    (c.CompoundGrowthRate = "compound-growth-rate"),
                    (c.YearOverYearGrowth = "year-over-year-growth"),
                    (c.YTDGrowth = "ytd-growth"),
                    (c.Undefined = "undefined"),
                    ((u =
                        e.SelectionUpdateType ||
                        (e.SelectionUpdateType = {})).Replace =
                        "select-replace"),
                    (u.Add = "select-add"),
                    (u.Remove = "select-remove"),
                    ((l = e.SelectOptions || (e.SelectOptions = {})).Simple =
                        "select-options-simple"),
                    (l.Toggle = "select-options-toggle"),
                    ((s = e.SheetType || (e.SheetType = {})).Dashboard =
                        "dashboard"),
                    (s.Story = "story"),
                    (s.Worksheet = "worksheet"),
                    ((o =
                        e.SortDirection || (e.SortDirection = {})).Increasing =
                        "increasing"),
                    (o.Decreasing = "decreasing"),
                    ((a =
                        e.TrendLineModelType ||
                        (e.TrendLineModelType = {})).Linear = "linear"),
                    (a.Logarithmic = "logarithmic"),
                    (a.Exponential = "exponential"),
                    (a.Polynomial = "polynomial"),
                    ((n = e.ReplaySpeedType || (e.ReplaySpeedType = {})).Slow =
                        "slow"),
                    (n.Normal = "normal"),
                    (n.Fast = "fast"),
                    ((i =
                        e.HierarchicalLevelSelectionState ||
                        (e.HierarchicalLevelSelectionState = {})).AllSelected =
                        "all-selected"),
                    (i.NoneSelected = "none-selected"),
                    (i.SomeSelected = "some-selected"),
                    (i.UnknownSelected = "unknown-selected"),
                    (e.ZoneVisibilityType = r({}, t));
            })(t || (t = {})),
                (e.exports = t);
        },
        5488: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
                })(r(4912));
            var i = r(808);
            (t.AnalyticsObjectType = i.AnalyticsObjectType),
                (t.AnnotationType = i.AnnotationType),
                (t.ClassNameKey = i.ClassNameKey),
                (t.ColumnType = i.ColumnType),
                (t.DashboardLayoutChange = i.DashboardLayoutChange),
                (t.DashboardObjectType = i.DashboardObjectType),
                (t.DashboardObjectVisibilityType =
                    i.DashboardObjectVisibilityType),
                (t.DataType = i.DataType),
                (t.DateRangeType = i.DateRangeType),
                (t.DialogStyle = i.DialogStyle),
                (t.EncodingType = i.EncodingType),
                (t.FieldAggregationType = i.FieldAggregationType),
                (t.FieldRoleType = i.FieldRoleType),
                (t.FilterDomainType = i.FilterDomainType),
                (t.FilterNullOption = i.FilterNullOption),
                (t.FilterType = i.FilterType),
                (t.FilterUpdateType = i.FilterUpdateType),
                (t.HierarchicalLevelSelectionState =
                    i.HierarchicalLevelSelectionState),
                (t.IncludeDataValuesOption = i.IncludeDataValuesOption),
                (t.MarkType = i.MarkType),
                (t.ParameterValueType = i.ParameterValueType),
                (t.PeriodType = i.PeriodType),
                (t.QuickTableCalcType = i.QuickTableCalcType),
                (t.ReplaySpeedType = i.ReplaySpeedType),
                (t.SelectOptions = i.SelectOptions),
                (t.SelectionUpdateType = i.SelectionUpdateType),
                (t.SheetType = i.SheetType),
                (t.SortDirection = i.SortDirection),
                (t.TrendLineModelType = i.TrendLineModelType),
                (t.ZoneVisibilityType = i.ZoneVisibilityType);
        },
        3448: (e, t, r) => {
            function i(e) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                r(5668),
                r(5816),
                r(8824);
            var n = r(5892);
            (t.INTERNAL_CONTRACT_VERSION = n),
                i(r(6716)),
                i(r(1080)),
                i(r(5824)),
                i(r(4547)),
                i(r(2400)),
                i(r(2496)),
                i(r(2472)),
                i(r(552)),
                i(r(3256)),
                i(r(7204)),
                i(r(3760)),
                i(r(4528)),
                i(r(3388)),
                (t.MESSAGING_VERSION = { major: 1, minor: 0, fix: 0 });
        },
        6716: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(1080),
                n = (function () {
                    function e() {}
                    return (
                        (e.isSpecial = function (e) {
                            return (
                                e.length > 2 &&
                                "%" === e[0] &&
                                "%" === e[e.length - 1]
                            );
                        }),
                        (e.parseBoolean = function (e) {
                            var t = e.toLowerCase();
                            return "true" !== t && "false" !== t
                                ? this.specialValueIndicator
                                : "true" === t;
                        }),
                        (e.parseNumber = function (e) {
                            var t = Number(e);
                            return isNaN(t) ? this.specialValueIndicator : t;
                        }),
                        (e.parseDate = function (e) {
                            var t = new Date(e);
                            return Number.isNaN(t.getTime()) ? null : t;
                        }),
                        (e.parseDateTime = function (e) {
                            var t = e.replace(" ", "T").concat("Z"),
                                r = new Date(t);
                            return Number.isNaN(r.getTime()) ? null : r;
                        }),
                        (e.convertValueAsStringToValue = function (e, t) {
                            if (null != e) {
                                if (this.isSpecial(e)) return e;
                                switch (t) {
                                    case i.DataType.Bool:
                                        return this.parseBoolean(e);
                                    case i.DataType.Int:
                                    case i.DataType.Float:
                                        return this.parseNumber(e);
                                    case i.DataType.Date:
                                        return null === this.parseDate(e)
                                            ? this.specialValueIndicator
                                            : e;
                                    case i.DataType.DateTime:
                                        return null === this.parseDateTime(e)
                                            ? this.specialValueIndicator
                                            : e;
                                    case i.DataType.Spatial:
                                    case i.DataType.String:
                                    default:
                                        return e;
                                }
                            }
                        }),
                        (e.convertValueToNativeValue = function (e, t) {
                            if (null == e) return null;
                            switch (t) {
                                case i.DataType.Bool:
                                case i.DataType.Int:
                                case i.DataType.Float:
                                    return "string" == typeof e ? null : e;
                                case i.DataType.Date:
                                    return this.parseDate(e);
                                case i.DataType.DateTime:
                                    return this.parseDateTime(e);
                                case i.DataType.String:
                                    return this.isSpecial(e) ? null : e;
                                case i.DataType.Spatial:
                                default:
                                    return e;
                            }
                        }),
                        (e.convertStringValueToNativeValue = function (e, t) {
                            return this.convertValueToNativeValue(
                                this.convertValueAsStringToValue(e, t),
                                t
                            );
                        }),
                        (e.specialValueIndicator = "%null%"),
                        e
                    );
                })();
            t.DataTypeConverter = n;
        },
        1080: (e, t) => {
            var r,
                i,
                n,
                a,
                o,
                s,
                l,
                u,
                c,
                d,
                p,
                h,
                m,
                y,
                g,
                f,
                b,
                v,
                I,
                S,
                T,
                A,
                _,
                P,
                E,
                w,
                C,
                D,
                k,
                O,
                V,
                x,
                F,
                M,
                N;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((N = t.ExtensionContext || (t.ExtensionContext = {})).Desktop =
                    "desktop"),
                (N.Server = "server"),
                (N.Unknown = "unknown"),
                ((M = t.ExtensionMode || (t.ExtensionMode = {})).Authoring =
                    "authoring"),
                (M.Viewing = "viewing"),
                (M.Unknown = "unknown"),
                ((F = t.AnnotateEnum || (t.AnnotateEnum = {})).Mark = "mark"),
                (F.Point = "point"),
                (F.Area = "area"),
                ((x = t.ColumnType || (t.ColumnType = {})).Discrete =
                    "discrete"),
                (x.Continuous = "continuous"),
                (x.Unknown = "unknown"),
                ((V =
                    t.DashboardObjectType ||
                    (t.DashboardObjectType = {})).Blank = "blank"),
                (V.Worksheet = "worksheet"),
                (V.QuickFilter = "quick-filter"),
                (V.ParameterControl = "parameter-control"),
                (V.PageFilter = "page-filter"),
                (V.Legend = "legend"),
                (V.Title = "title"),
                (V.Text = "text"),
                (V.Image = "image"),
                (V.WebPage = "web-page"),
                (V.Extension = "extension"),
                ((O = t.DataType || (t.DataType = {})).String = "string"),
                (O.Int = "int"),
                (O.Float = "float"),
                (O.Bool = "bool"),
                (O.Date = "date"),
                (O.DateTime = "date-time"),
                (O.Spatial = "spatial"),
                (O.Unknown = "unknown"),
                ((k = t.DialogStyle || (t.DialogStyle = {})).Window = "window"),
                (k.Modal = "modal"),
                (k.Modeless = "modeless"),
                ((D = t.EncodedDataType || (t.EncodedDataType = {})).Number =
                    "number"),
                (D.String = "string"),
                (D.Date = "date"),
                (D.Boolean = "boolean"),
                ((C =
                    t.ErrorCodes || (t.ErrorCodes = {})).INITIALIZATION_ERROR =
                    "initialization-error"),
                (C.INTERNAL_ERROR = "internal-error"),
                (C.MISSING_ENUM_MAPPING = "missing-enum-mapping"),
                (C.MISSING_PARAMETER = "missing-parameter"),
                (C.PERMISSION_DENIED = "permission-denied"),
                (C.PRES_MODEL_PARSING_ERROR = "pres-model-parsing-error"),
                (C.VERSION_NOT_CONFIGURED = "version-not-configured"),
                (C.VISIBILITY_ERROR = "visibility-error"),
                (C.UNKNOWN_VERB_ID = "unknown-verb-id"),
                ((w =
                    t.FieldAggregationType ||
                    (t.FieldAggregationType = {})).Sum = "sum"),
                (w.Avg = "avg"),
                (w.Min = "min"),
                (w.Max = "max"),
                (w.Stdev = "stdev"),
                (w.Stdevp = "stdevp"),
                (w.Var = "var"),
                (w.Varp = "varp"),
                (w.Collect = "collect"),
                (w.Count = "count"),
                (w.Countd = "countd"),
                (w.Median = "median"),
                (w.Attr = "attr"),
                (w.None = "none"),
                (w.Year = "year"),
                (w.Qtr = "qtr"),
                (w.Month = "month"),
                (w.Day = "day"),
                (w.Hour = "hour"),
                (w.Minute = "minute"),
                (w.Second = "second"),
                (w.Week = "week"),
                (w.Weekday = "weekday"),
                (w.MonthYear = "month-year"),
                (w.Mdy = "mdy"),
                (w.End = "end"),
                (w.TruncYear = "trunc-year"),
                (w.TruncQtr = "trunc-qtr"),
                (w.TruncMonth = "trunc-month"),
                (w.TruncWeek = "trunc-week"),
                (w.TruncDay = "trunc-day"),
                (w.TruncHour = "trunc-hour"),
                (w.TruncMinute = "trunc-minute"),
                (w.TruncSecond = "trunc-second"),
                (w.Quart1 = "quart1"),
                (w.Quart3 = "quart3"),
                (w.Skewness = "skewness"),
                (w.Kurtosis = "kurtosis"),
                (w.InOut = "in-out"),
                (w.User = "user"),
                ((E = t.FieldRoleType || (t.FieldRoleType = {})).Dimension =
                    "dimension"),
                (E.Measure = "measure"),
                (E.Unknown = "unknown"),
                ((P = t.FilterUpdateType || (t.FilterUpdateType = {})).Add =
                    "add"),
                (P.All = "all"),
                (P.Replace = "replace"),
                (P.Remove = "remove"),
                ((_ = t.SheetType || (t.SheetType = {})).Dashboard =
                    "dashboard"),
                (_.Story = "story"),
                (_.Worksheet = "worksheet"),
                ((A =
                    t.DomainRestrictionType ||
                    (t.DomainRestrictionType = {})).All = "all"),
                (A.List = "list"),
                (A.Range = "range"),
                ((T = t.DateStepPeriod || (t.DateStepPeriod = {})).Years =
                    "years"),
                (T.Quarters = "quarters"),
                (T.Months = "months"),
                (T.Weeks = "weeks"),
                (T.Days = "days"),
                (T.Hours = "hours"),
                (T.Minutes = "minutes"),
                (T.Seconds = "seconds"),
                ((S =
                    t.FilterNullOption ||
                    (t.FilterNullOption = {})).NullValues = "nullvalues"),
                (S.NonNullValues = "nonnullvalues"),
                (S.AllValues = "allvalues"),
                ((I =
                    t.FilterDomainType || (t.FilterDomainType = {})).Relevant =
                    "relevant"),
                (I.Database = "database"),
                ((v =
                    t.SelectionUpdateType ||
                    (t.SelectionUpdateType = {})).Replace = "select-replace"),
                (v.Add = "select-add"),
                (v.Remove = "select-remove"),
                ((b = t.SelectOptions || (t.SelectOptions = {})).Simple =
                    "select-options-simple"),
                (b.Toggle = "select-options-toggle"),
                (b.Menu = "select-options-menu"),
                (b.Range = "select-options-range"),
                (b.Search = "select-options-search"),
                ((f =
                    t.QuantitativeIncludedValues ||
                    (t.QuantitativeIncludedValues = {})).IncludeNull =
                    "include-null"),
                (f.IncludeNonNull = "include-non-null"),
                (f.IncludeAll = "include-all"),
                ((g =
                    t.HierarchicalLevelSelectionState ||
                    (t.HierarchicalLevelSelectionState = {})).AllSelected =
                    "all-selected"),
                (g.NoneSelected = "none-selected"),
                (g.SomeSelected = "some-selected"),
                (g.UnknownSelected = "unknown-selected"),
                ((y = t.MarkType || (t.MarkType = {})).Bar = "bar"),
                (y.Line = "line"),
                (y.Area = "area"),
                (y.Square = "square"),
                (y.Circle = "circle"),
                (y.Shape = "shape"),
                (y.Text = "text"),
                (y.Map = "map"),
                (y.Pie = "pie"),
                (y.GanttBar = "gantt-bar"),
                (y.Polygon = "polygon"),
                (y.Heatmap = "heatmap"),
                (y.VizExtension = "viz-extension"),
                ((m = t.FilterType || (t.FilterType = {})).Categorical =
                    "categorical"),
                (m.Range = "range"),
                (m.RelativeDate = "relativeDate"),
                (m.Hierarchical = "hierarchical"),
                ((h = t.DateRangeType || (t.DateRangeType = {})).Last = "last"),
                (h.LastN = "lastN"),
                (h.Next = "next"),
                (h.NextN = "nextN"),
                (h.Current = "current"),
                (h.ToDate = "toDate"),
                ((p =
                    t.ExtensionDialogResult ||
                    (t.ExtensionDialogResult = {})).DialogAlreadyOpen =
                    "dialog-already-open"),
                (p.InvalidDomain = "invalid-domain"),
                (p.Success = "success"),
                ((d =
                    t.ApiShowDataTableSentinel ||
                    (t.ApiShowDataTableSentinel = {})).SingleTableId =
                    "single-table-id-sentinel"),
                (d.SingleTableCaption = "Single table id sentinel"),
                ((c =
                    t.ApiShowDataTableFormat ||
                    (t.ApiShowDataTableFormat = {})).NativeValuesOnly =
                    "native-values-only"),
                (c.FormattedValuesOnly = "formatted-values-only"),
                (c.NativeAndFormattedValues = "native-and-formatted-values"),
                ((u = t.PageSizeOption || (t.PageSizeOption = {})).Letter =
                    "letter"),
                (u.Legal = "legal"),
                (u.Note = "note"),
                (u.Folio = "folio"),
                (u.Tabloid = "tabloid"),
                (u.Ledger = "ledger"),
                (u.Statement = "statement"),
                (u.Executive = "executive"),
                (u.A3 = "a3"),
                (u.A4 = "a4"),
                (u.A5 = "a5"),
                (u.B4 = "b4"),
                (u.B5 = "b5"),
                (u.Quarto = "quarto"),
                (u.Unspecified = "unspecified"),
                ((l = t.PageOrientation || (t.PageOrientation = {})).Printer =
                    "printer"),
                (l.Portrait = "portrait"),
                (l.Landscape = "landscape"),
                ((s = t.ScaleMode || (t.ScaleMode = {})).ScaleAuto = "auto"),
                (s.ScalePercentage = "percent"),
                (s.ScaleFitPages = "fit-pages"),
                ((o =
                    t.PageScalingOption ||
                    (t.PageScalingOption = {})).ScalePctAuto = "auto"),
                (o.ScalePct400 = "pct400"),
                (o.ScalePct200 = "pct200"),
                (o.ScalePct100 = "pct100"),
                (o.ScalePct90 = "pct90"),
                (o.ScalePct80 = "pct80"),
                (o.ScalePct75 = "pct75"),
                (o.ScalePct60 = "pct60"),
                (o.ScalePct50 = "pct50"),
                (o.ScalePct25 = "pct25"),
                ((a = t.FitPages || (t.FitPages = {})).FitOneHigh = "fit0x1"),
                (a.FitTwoHigh = "fit0x2"),
                (a.FitOneWide = "fit1x0"),
                (a.FitTwoWide = "fit2x0"),
                ((n = t.EncodingType || (t.EncodingType = {})).Color = "color"),
                (n.Size = "size"),
                (n.Label = "label"),
                (n.Detail = "detail"),
                (n.Tooltip = "tooltip"),
                (n.Shape = "shape"),
                (n.Path = "path"),
                (n.Angle = "angle"),
                (n.Geometry = "geometry"),
                (n.Custom = "custom"),
                ((i =
                    t.PulseTimeDimension || (t.PulseTimeDimension = {})).Today =
                    "Today"),
                (i.Yesterday = "Yesterday"),
                (i.WeekToDate = "WeekToDate"),
                (i.LastWeek = "LastWeek"),
                (i.MonthToDate = "MonthToDate"),
                (i.LastMonth = "LastMonth"),
                (i.QuarterToDate = "QuarterToDate"),
                (i.LastQuarter = "LastQuarter"),
                (i.YearToDate = "YearToDate"),
                (i.LastYear = "LastYear"),
                ((r =
                    t.PulseErrorMessageVisibility ||
                    (t.PulseErrorMessageVisibility = {})).Visible = "visible"),
                (r.Hidden = "hidden"),
                (r.Suppressed = "suppressed");
        },
        5824: (e, t) => {
            var r;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((r =
                    t.NotificationId ||
                    (t.NotificationId = {})).CustomMarkContextMenuClicked =
                    "custom-mark-context-menu-clicked"),
                (r.ContextMenuClick = "context-menu-click"),
                (r.CustomViewRemoved = "custom-view-removed"),
                (r.CustomViewSaved = "custom-view-saved"),
                (r.CustomViewSetDefault = "custom-view-set-default"),
                (r.CustomViewsLoaded = "custom-views-loaded"),
                (r.DashboardLayoutChanged = "dashboard-layout-changed"),
                (r.EditButtonClicked = "edit-button-clicked"),
                (r.EditInDesktopButtonClicked =
                    "edit-in-desktop-button-clicked"),
                (r.ExtensionDialogUpdate = "extension-dialog-update"),
                (r.FilterChanged = "filter-changed"),
                (r.FirstVizSizeKnown = "first-viz-size-known"),
                (r.FirstPulseMetricSizeKnown = "first-pulse-metric-size-known"),
                (r.ParameterChanged = "parameter-changed"),
                (r.PulseError = "pulse-error"),
                (r.PulseFiltersChanged = "pulse-filters-changed"),
                (r.PulseInsightDiscovered = "pulse-insight-discovered"),
                (r.PulseInteractive = "pulse-interactive"),
                (r.PulseTimeDimensionChanged = "pulse-time-dimension-changed"),
                (r.PulseUrlChanged = "pulse-url-changed"),
                (r.SelectedMarksChanged = "selected-marks-changed"),
                (r.SettingsChanged = "settings-changed"),
                (r.SummaryDataChanged = "summary-data-changed"),
                (r.TestConversionNotification = "test-conversion-notification"),
                (r.ToolbarStateChanged = "toolbar-state-changed"),
                (r.VizInteractive = "viz-interactive"),
                (r.AskDataInteractive = "ask-data-interactive"),
                (r.WorkbookReadyToClose = "workbook-ready-to-close"),
                (r.WorkbookFormattingChanged = "workbook-formatting-changed"),
                (r.WorkbookPublished = "workbook-published"),
                (r.WorkbookPublishedAs = "workbook-published-as"),
                (r.WorksheetFormattingChanged = "worksheet-formatting-changed"),
                (r.UrlAction = "url-action"),
                (r.TabSwitched = "tab-switched"),
                (r.StoryPointSwitched = "story-point-switched"),
                (r.ReadyToReceiveAuthToken = "ready-to-receive-auth-token");
        },
        4547: (e, t) => {
            var r;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((r = t.ParameterId || (t.ParameterId = {})).ActiveTablesInfo =
                    "active-tables-info"),
                (r.AnchorDate = "anchor-date"),
                (r.AnnotateEnum = "annotate-enum"),
                (r.AnnotationList = "annotation-list"),
                (r.ApplyWorksheetFormatting = "apply-worksheet-formatting"),
                (r.CategoricalDomain = "categorical-domain"),
                (r.ClickThroughEnabled = "click-through-enabled"),
                (r.Columns = "columns"),
                (r.ColumnsToInclude = "columns-to-include"),
                (r.ColumnsToIncludeById = "columns-to-include-by-id"),
                (r.ConnectionDescriptionSummaries =
                    "connection-description-summaries"),
                (r.CurrentSheetType = "current-sheet-type"),
                (r.CustomView = "custom-view"),
                (r.CustomViewIsDefault = "custom-view-is-default"),
                (r.CustomViewIsPublic = "custom-view-is-public"),
                (r.CustomViewLuid = "custom-view-luid"),
                (r.CustomViewName = "custom-view-name"),
                (r.CustomViews = "custom-views"),
                (r.Dashboard = "dashboard"),
                (r.DashboardFilters = "dashboard-filters"),
                (r.DashboardName = "dashboard"),
                (r.DashboardObjectPositionAndSizeUpdate =
                    "dashboard-object-position-and-size-update"),
                (r.DashboardObjectPositionAndSizeUpdateList =
                    "dashboard-object-position-and-size-update-list"),
                (r.DataRowIndex = "data-row-index"),
                (r.DataSchema = "data-schema"),
                (r.DataSource = "data-source"),
                (r.DataSourceDataTable = "data-source-data-table"),
                (r.DataSourceId = "data-source-id"),
                (r.DataSourceName = "data-source-name"),
                (r.DataTable = "data-table"),
                (r.DataTableReader = "data-table-reader"),
                (r.DateRangeType = "date-range-type"),
                (r.DeleteCount = "delete-count"),
                (r.DeltaTimeMs = "delta-time-ms"),
                (r.DimValSelectionModels = "dimensionValueSelectionModels"),
                (r.DomainType = "domain-type"),
                (r.EmbeddingAbstractQuery = "embedding-abstract-query"),
                (r.EmbeddingBootstrapInfo = "embedding-bootstrap-info"),
                (r.EncodingType = "encoding-type"),
                (r.ExportCrosstabSheetMap = "export-crosstab-sheet-map"),
                (r.ExportFile = "export-file"),
                (r.ExportOriginUrl = "export-origin-url"),
                (r.ExportPdfOptions = "export-pdf-options"),
                (r.ExtensionBootstrapInfo = "extension-bootstrap-info"),
                (r.ExtensionContextMenuIds = "extension-context-menu-ids"),
                (r.ExtensionDialogH = "extension-dialog-height"),
                (r.ExtensionDialogPayload = "extension-dialog-payload"),
                (r.ExtensionDialogResult = "extension-dialog-result"),
                (r.ExtensionDialogStyle = "extension-dialog-style"),
                (r.ExtensionDialogUrl = "extension-dialog-url"),
                (r.ExtensionDialogW = "extension-dialog-width"),
                (r.ExtensionLocator = "extension-locator"),
                (r.ExtensionSettingsInfo = "extension-settings-info"),
                (r.ExtensionZoneId = "extension-zone-id"),
                (r.ExternalMenuDescription = "external-menu-description"),
                (r.ExternalMenuHeader = "external-menu-header"),
                (r.ExternalMenuItemDisplayName =
                    "external-menu-item-display-name"),
                (r.ExternalMenuItemId = "external-menu-item-id"),
                (r.Field = "field"),
                (r.FieldCount = "field-count"),
                (r.FieldId = "field-id"),
                (r.FieldName = "field-name"),
                (r.FilterLevels = "filter-levels"),
                (r.FilterRangeMax = "filter-range-max"),
                (r.FilterRangeMin = "filter-range-min"),
                (r.FilterRangeNullOption = "filter-range-null-option"),
                (r.FilterUpdateType = "filter-update-type"),
                (r.FilterValues = "filter-values"),
                (r.FontNameListItems = "font-name-list-items"),
                (r.FormattedText = "formatted-text"),
                (r.FunctionName = "function-name"),
                (r.FromIndex = "from-index"),
                (r.HierValSelectionModels = "hierarchicalValueSelectionModels"),
                (r.HighlightedData = "highlighted-data"),
                (r.HoverTupleInteraction = "hover-tuple-interaction"),
                (r.IgnoreAliases = "ignore-aliases"),
                (r.IgnoreSelection = "ignore-selection"),
                (r.IncludeAllColumns = "include-all-columns"),
                (r.InvalidAggFieldName = "invalid-agg-field-name"),
                (r.InvalidDates = "invalid-dates"),
                (r.InvalidFieldCaption = "invalid-field-caption"),
                (r.InvalidFields = "invalid-fields"),
                (r.InvalidValues = "invalid-values"),
                (r.IsExcludeMode = "is-exclude"),
                (r.IsExtensionDialog = "is-extension-dialog"),
                (r.JoinDescription = "join-description"),
                (r.LogicalTableId = "logical-table-id"),
                (r.LogicalTableInfoList = "logical-table-info-list"),
                (r.MarksCardIndex = "marks-card-index"),
                (r.MaxHeight = "max-height"),
                (r.MaxRows = "max-rows"),
                (r.MaxWidth = "max-width"),
                (r.MinHeight = "min-height"),
                (r.MinWidth = "min-width"),
                (r.PageRowCount = "page-row-count"),
                (r.ParameterCaption = "paremeter-caption"),
                (r.ParameterError = "parameter-error"),
                (r.ParameterFieldName = "parameter-field-name"),
                (r.ParameterInfo = "parameter-info"),
                (r.ParameterInfos = "parameter-infos"),
                (r.ParameterValue = "parameter-value"),
                (r.PeriodType = "period-type"),
                (r.PulseFieldName = "fieldName"),
                (r.PulseFieldNames = "fieldNames"),
                (r.PulseFilterDomainType = "domainType"),
                (r.PulseFilterDomainSearchTerm = "searchTerm"),
                (r.PulsePageSize = "pageSize"),
                (r.PulseNextPageToken = "nextPageToken"),
                (r.PulseFilters = "filters"),
                (r.PulseTimeDimension = "timeDimension"),
                (r.QuantitativeDomain = "quantitative-dmain"),
                (r.QuantRangeSelectionModels =
                    "quantativeRangeSelectionModels"),
                (r.RangeN = "range-n"),
                (r.ReplaySpeed = "replay-speed"),
                (r.SelectedData = "selected-data"),
                (r.SelectedSheetNames = "selected-sheet-names"),
                (r.Selection = "selection"),
                (r.SelectionList = "selection-list"),
                (r.SelectionUpdateType = "selectionUpdateType"),
                (r.SelectTuplesInteraction = "select-tuples-interaction"),
                (r.SendNotifications = "send-notifications"),
                (r.SettingsValues = "settings-values"),
                (r.SharedFilterSheets = "shared-filter-sheets"),
                (r.SharedFiltersInfo = "shared-filters-info"),
                (r.SheetIdentifier = "sheet-identifier"),
                (r.SheetName = "sheet-name"),
                (r.SheetPath = "sheet-path"),
                (r.ShouldRefreshDS = "should-refresh-ds"),
                (r.ShowDataTableFormat = "show-data-table-format"),
                (r.StartIndex = "start-index"),
                (r.State = "state"),
                (r.StoryPointIndex = "story-point-index"),
                (r.StoryPointInfo = "story-point-info"),
                (r.SwitchToSheetName = "switch-to-sheet-name"),
                (r.TargetPoint = "target-point"),
                (r.TestConversionParameter = "test-conversion-parameter"),
                (r.Text = "formatted-text"),
                (r.ToIndex = "to-index"),
                (r.TooltipContext = "tooltip-context"),
                (r.TooltipTextRequest = "tooltip-text-request"),
                (r.TooltipText = "tooltip-text"),
                (r.UnderlyingDataTable = "underlying-data-table"),
                (r.UnderlyingSummaryDataTable =
                    "underlying-summary-data-table"),
                (r.Url = "url"),
                (r.UseTabDelimiters = "use-tab-delimiters"),
                (r.ViewDataTableCacheId = "view-data-table-cache-id"),
                (r.ViewDataTableId = "view-data-table-id"),
                (r.VisualId = "visual-id"),
                (r.VisualSpecification = "visual-specification"),
                (r.VizAPIInputJson = "vizapi-input-json"),
                (r.VizAPIStateWithDataModel = "vizapi-state-with-data-model"),
                (r.VizAPIStateWarningMsg = "vizapi-state-warning-msg"),
                (r.VizAPISVG = "vizapi-svg"),
                (r.WorksheetName = "worksheet-name"),
                (r.WorksheetFilters = "worksheet-filters"),
                (r.ZoneIdsVisibilityMap = "zone-ids-visibility-map");
        },
        2400: (e, t) => {
            var r;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((r = t.VerbId || (t.VerbId = {})).ActivateNextStoryPoint =
                    "activate-next-story-point"),
                (r.ActivatePreviousStoryPoint =
                    "activate-previous-story-point"),
                (r.ActivateSheet = "activateSheet"),
                (r.ActivateStoryPoint = "activate-story-point"),
                (r.AddMarksCardFields = "add-marks-card-fields"),
                (r.AppendExternalMenuItem = "append-external-menu-item"),
                (r.ApplyCategoricalFilter = "categorical-filter"),
                (r.ApplyPulseFilters = "apply-pulse-filters"),
                (r.ApplyPulseTimeDimension = "apply-pulse-time-dimension"),
                (r.ApplyRangeFilter = "range-filter"),
                (r.ApplyRelativeDateFilter = "apply-relative-date-Filter"),
                (r.Authenticate = "authenticate"),
                (r.BlockExtension = "block-extension"),
                (r.ChangeParameterValue = "change-parameter-value"),
                (r.ChangeSharedFilter = "change-shared-filter"),
                (r.ClearAllPulseFilters = "clear-all-pulse-filters"),
                (r.ClearFilter = "clear-filter"),
                (r.ClearPulseFilters = "clear-pulse-filters"),
                (r.ClearSelectedMarks = "clear-selected-marks"),
                (r.CloseDialog = "close-dialog"),
                (r.CreateAnnotation = "create-annotation"),
                (r.DashboardCategoricalFilter = "dashboard-categorical-filter"),
                (r.DisplayDialog = "display-dialog"),
                (r.DownloadWorkbook = "download-workbook"),
                (r.EditAliasesDialog = "edit-aliases-dialog"),
                (r.ExecuteExternalMenuItem = "execute-external-menu-item"),
                (r.ExportCrosstab = "export-crosstab"),
                (r.ExportCrosstabCsvDownload = "export-crosstab-csv-download"),
                (r.ExportCrosstabExcelDownload =
                    "export-crosstab-excel-download"),
                (r.ExportData = "export-data"),
                (r.ExportDataDownload = "export-data-download"),
                (r.ExportImage = "export-image"),
                (r.ExportPdf = "export-pdf"),
                (r.ExportPdfDownload = "export-pdf-download"),
                (r.ExportPowerpoint = "export-powerpoint"),
                (r.ExportPowerpointDownload = "export-powerpoint-download"),
                (r.FindParameter = "find-parameter"),
                (r.GetActiveTables = "get-active-tables"),
                (r.GetAllDataSources = "get-all-data-sources"),
                (r.GetAnnotations = "get-annotations"),
                (r.GetCategoricalDomain = "get-categorical-domain"),
                (r.GetConnectionDescriptionSummaries =
                    "get-connection-description-summaries"),
                (r.GetCurrentSrc = "get-current-src"),
                (r.GetCustomViews = "get-custom-views"),
                (r.GetDashboardFilters = "get-dashboard-filters"),
                (r.GetDataSource = "get-datasource"),
                (r.GetDataSourceData = "get-datasource-data"),
                (r.GetDataSources = "get-data-sources"),
                (r.GetDataSummaryData = "get-summary-data"),
                (r.GetDataSummaryDataReader = "get-summary-data-reader"),
                (r.GetDataTableReaderPage = "get-data-table-reader-page"),
                (r.GetEmbeddingAbstractQueryWithDataModel =
                    "get-embedding-abstract-query-with-data-model"),
                (r.GetEmbeddingClientInfo = "get-embedding-client-info"),
                (r.GetVizStateWithDataModel = "get-viz-state-with-data-model"),
                (r.GetExportCrosstabSheetMap = "get-export-crosstab-sheet-map"),
                (r.GetExportPdfOptions = "get-export-pdf-options"),
                (r.GetField = "get-field"),
                (r.GetFieldAndDataSource = "get-field-and-datasource"),
                (r.GetVisualSpecification = "get-visual-specification"),
                (r.GetFilters = "get-filters"),
                (r.GetFonts = "get-fonts"),
                (r.GetHighlightedMarks = "get-highlighted-marks"),
                (r.GetJoinDescription = "get-join-description"),
                (r.GetLogicalTableData = "get-logical-table-data"),
                (r.GetLogicalTableDataReader = "get-logical-table-data-reader"),
                (r.GetLogicalTables = "get-logical-tables"),
                (r.GetParametersForSheet = "get-parameters-for-sheet"),
                (r.GetPulseCategoricalDomain = "get-pulse-categorical-domain"),
                (r.GetPulseFilters = "get-pulse-filters"),
                (r.GetPulseTimeDimension = "get-pulse-time-dimension"),
                (r.GetRangeDomain = "get-range-domain"),
                (r.GetSelectedMarks = "get-selected-marks"),
                (r.GetSharedFilter = "get-shared-filter"),
                (r.GetTooltipText = "get-tooltip-text"),
                (r.GetUnderlyingData = "get-underlying-data"),
                (r.GetUnderlyingTableData = "get-underlying-table-data"),
                (r.GetUnderlyingTableDataReader =
                    "get-underlying-table-data-reader"),
                (r.GetUnderlyingTables = "get-underlying-tables"),
                (r.HierarchicalFilter = "hierachical-filter"),
                (r.InitializeExtension = "initialize-extension"),
                (r.MoveAndResizeZones = "move-and-resize-zones"),
                (r.MoveMarksCardField = "move-marks-card-field"),
                (r.RaiseLeaveMarkNavNotification =
                    "raise-leave-mark-nav-notification"),
                (r.RaiseHoverTupleNotification =
                    "raise-hover-tuple-notification"),
                (r.RaiseSelectTuplesNotification =
                    "raise-select-tuples-notification"),
                (r.Redo = "redo"),
                (r.RefreshDataSource = "refresh-data-source"),
                (r.ReleaseDataTableReader = "release-data-table-reader"),
                (r.RemoveAnnotation = "remove-annotation"),
                (r.RemoveCustomView = "remove-custom-view"),
                (r.RemoveExternalMenuItem = "remove-external-menu-item"),
                (r.RenameExternalMenu = "rename-external-menu"),
                (r.ReplayAnimation = "replay-animation"),
                (r.RevertStoryPoint = "revert-story-point"),
                (r.RevertWorkbook = "revert-workbook"),
                (r.SaveExtensionSettings = "save-extension-settings"),
                (r.SaveWorkbookAsCustomView = "save-workbook-as-custom-view"),
                (r.SelectByValue = "select-by-value"),
                (r.SetActiveCustomViewAsDefault =
                    "set-active-custom-view-as-default"),
                (r.SetAutoUpdate = "set-auto-update"),
                (r.SetClickThrough = "set-click-through"),
                (r.SetVizStateWithDataModel = "set-viz-state-with-data-model"),
                (r.SetSheetSize = "set-sheet-size"),
                (r.SetZoneVisibility = "set-zone-visibility"),
                (r.Share = "share"),
                (r.ShowCustomView = "show-custom-view"),
                (r.SpliceMarksCardFields = "splice-marks-card-fields"),
                (r.TestConversionVerb = "test-conversion-verb"),
                (r.Undo = "undo"),
                (r.UpdateCustomView = "update-custom-view"),
                (r.VizAPI = "viz-api");
        },
        2496: (e, t) => {
            var r;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((r =
                    t.AskDataOptionNames || (t.AskDataOptionNames = {})).token =
                    "token"),
                (r.origin = "origin"),
                (r.showEmbed = "showEmbed"),
                (r.showPin = "showPin"),
                (r.showSave = "showSave"),
                (r.showShare = "showShare"),
                (r.debug = ":jsdebug"),
                (r.ApiID = ":apiID"),
                (r.ApiExternalVersion = ":apiExternalVersion"),
                (r.ApiInternalVersion = ":apiInternalVersion"),
                (r.AskDataWebComponent = ":askDataWebComponent");
        },
        2472: (e, t) => {
            var r;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((r = t.PulseOptionNames || (t.PulseOptionNames = {})).embed =
                    "embed"),
                (r.token = "token"),
                (r.disableExploreFilter = "disableExploreFilter"),
                (r.layout = "embed_layout"),
                (r.theme = "embed_theme"),
                (r.ApiExternalVersion = ":apiExternalVersion"),
                (r.ApiInternalVersion = ":apiInternalVersion"),
                (r.PulseWebComponent = ":pulseWebComponent");
        },
        552: (e, t) => {
            var r, i, n;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e) {
                    (e.ONE = "1"),
                        (e.ALERTS = ":alerts"),
                        (e.ALIAS = "alias"),
                        (e.ALLOW_DEFERRED_BOOTSTRAP =
                            ":allowDeferredBootstrap"),
                        (e.ALLOW_AUTOGEN_WORKSHEET_PHONE_LAYOUTS =
                            "allowAutogenWorksheetPhoneLayouts"),
                        (e.API_ID = ":apiID"),
                        (e.APP = ":app"),
                        (e.ATTACHMENT = "attachment"),
                        (e.IS_IPAD_APP = "app"),
                        (e.ANIMATE_TRANSITION = ":animate_transition"),
                        (e.ASCENDING = "ascending"),
                        (e.AUTHENTICATION = "authentication"),
                        (e.ATTRIBUTES = "attributes"),
                        (e.AUTHORING_SHEET = ":authSheet"),
                        (e.AXIS = "axis"),
                        (e.BOOTSTRAP_WHEN_NOTIFIED = ":bootstrapWhenNotified"),
                        (e.BROWSER_BACK_BUTTON_UNDO = ":browserBackButtonUndo"),
                        (e.BROWSER_RENDERING_ON = "isBrowserRendering"),
                        (e.BROWSER_RENDERING_THRESHOLD =
                            "browserRenderingThreshold"),
                        (e.CHARSET = "charset"),
                        (e.CLIENT_DIMENSION = "clientDimension"),
                        (e.CLIENT_IP = "client_ip"),
                        (e.CLIENT_NUM = "clientNum"),
                        (e.COLON_EMBEDDED = ":embedded"),
                        (e.COLON_MOBILE = ":mobile"),
                        (e.COLON_DEEP_LINKING_DISABLED =
                            ":deepLinkingDisabled"),
                        (e.COLON_WATERMARK = ":watermark"),
                        (e.COMMENTS = ":comments"),
                        (e.COMMENTING_ENABLED = ":commentingEnabled"),
                        (e.COMMENTING_MENTIONS_ENABLED = ":commentingMentions"),
                        (e.CONNECTION = "connection"),
                        (e.CREATED_BY_FEATURE = "createdByFeature"),
                        (e.CRYPTED_PASSWORD = "crypted"),
                        (e.CSSDEBUG = ":cssdebug"),
                        (e.CSV = "csv"),
                        (e.CUSTOM_VIEWS = ":customViews"),
                        (e.CV = ":cv"),
                        (e.CV_ID = "cvId"),
                        (e.DASHBOARD_PORT_SIZE = "dashboardPortSize"),
                        (e.DATA_DETAILS = ":dataDetails"),
                        (e.DATASOURCE = "datasource"),
                        (e.DEBUG = ":debug"),
                        (e.DELAY = ":delay"),
                        (e.DEPTH = "depth"),
                        (e.DEVICE_TYPE = ":device"),
                        (e.DEVICE_PIXEL_RATIO = "devicePixelRatio"),
                        (e.DEVICE_PREVIEW_MODE = ":devicepreviewmode"),
                        (e.DIMENSIONS = ":dimensions"),
                        (e.DISABLE_SHARED_SESSIONS =
                            ":disable_shared_sessions"),
                        (e.DISABLE_URL_ACTIONS_POPUPS =
                            ":disableUrlActionsPopups"),
                        (e.DIRECTION = "direction"),
                        (e.DISPLAY_OVERLAY = ":display_overlay"),
                        (e.DISPLAY_SHARE = ":display_share"),
                        (e.DISPLAY_SPINNER = ":display_spinner"),
                        (e.DISPLAY_STATIC_IMAGE = ":display_static_image"),
                        (e.DISPLAY_TABS = "display_tabs"),
                        (e.DISPLAY_VIEW_COUNT = ":display_count"),
                        (e.IGNORE_STICKY_SESSION = ":ignore_sticky_session"),
                        (e.INCREMENT_VIEW_COUNT = ":increment_view_count"),
                        (e.DOCMODE = "docmode"),
                        (e.DOMAIN = "domain"),
                        (e.DO_WORK = "do_work"),
                        (e.DX = "dx"),
                        (e.DY = "dy"),
                        (e.EDIT_DATA_ALERT = ":editDataAlert"),
                        (e.EMBED = ":embed"),
                        (e.EMBEDDED = "embedded"),
                        (e.ENCRYPTED = "encrypted"),
                        (e.API_EXTERNAL_VERSION = ":apiExternalVersion"),
                        (e.API_INTERNAL_VERSION = ":apiInternalVersion"),
                        (e.EXCLUDE = "exclude"),
                        (e.EXPORT_FORMAT = ":export_format"),
                        (e.FIELDNAME = "fieldname"),
                        (e.FIELD_NAME = "field_name"),
                        (e.FIELD_SEP = "field_sep"),
                        (e.FILE = "file"),
                        (e.FILTER_TILE_SIZE = "filterTileSize"),
                        (e.FN = "fn"),
                        (e.FOCUS = "focus"),
                        (e.FORCE_CACHE = "force_cache"),
                        (e.FORMAT = "format"),
                        (e.FORMAT_DATA_VALUE_LOCALLY =
                            "formatDataValueLocally"),
                        (e.FROM_WG = ":from_wg"),
                        (e.GRAPHQL_DATABASE_ID = ":graphQLDatabaseId"),
                        (e.GRAPHQL_TABLE_ID = ":graphQLTableId"),
                        (e.GUID = ":guid"),
                        (e.H = "h"),
                        (e.HIDDEN = "hidden"),
                        (e.HIDE_CLOSE_BUTTON = ":hideCloseButton"),
                        (e.HIDE_EDIT_BUTTON = ":hideEditButton"),
                        (e.HIDE_EDIT_IN_DESKTOP_BUTTON =
                            ":hideEditInDesktopButton"),
                        (e.HIGH_DPI = ":highdpi"),
                        (e.IMAGE_SIZE_LIMIT = "imageSizeLimit"),
                        (e.TRANSPARENT_LINE_MARKS_LIMIT =
                            "transparentLineMarkLimit"),
                        (e.CLIENT_RENDER_PIXEL_LIMIT =
                            "clientRenderPixelLimit"),
                        (e.IN = "in"),
                        (e.INSTANCE_ID = ":iid"),
                        (e.IS_GUEST_REDIRECT_FROM_VIZPORTAL =
                            ":isGuestRedirectFromVizportal"),
                        (e.IS_MARK_ANIMATION_ENABLED =
                            "isMarkAnimationEnabled"),
                        (e.IS_VIZPORTAL = ":isVizPortal"),
                        (e.INPUT_ = "input_string"),
                        (e.JSDEBUG = ":jsdebug"),
                        (e.JSON = "json"),
                        (e.JSON_ONLY = ":jsonOnly"),
                        (e.KEEPFILE = "keepfile"),
                        (e.KEY = "key"),
                        (e.LANGUAGE = "language"),
                        (e.LANGUAGE_REQUESTED = ":language"),
                        (e.LINKTARGET = ":linktarget"),
                        (e.LOAD_ORDER_ID = ":loadOrderID"),
                        (e.LOAD_NEWEST_REVISION = ":loadNewestRevision"),
                        (e.LOCAL_PATHS = ":localPaths"),
                        (e.LOCALE = "locale"),
                        (e.LOCATION_ID = "locationid"),
                        (e.LOCATION_TYPE = "locationtype"),
                        (e.WORKBOOK_LOCALE = "workbookLocale"),
                        (e.MAXROWS = "maxrows"),
                        (e.MAX_AGE = "maxAge"),
                        (e.MAX_ROWS = "maxRows"),
                        (e.METHOD = "method"),
                        (e.MOBILE = "mobile"),
                        (e.MODIFIER = "modifier"),
                        (e.NAME = "name"),
                        (e.NAV_TYPE = "navType"),
                        (e.NAV_SRC = "navSrc"),
                        (e.NOATTACHMENT = "no-attachment"),
                        (e.NO_OVERWRITE = "no_overwrite"),
                        (e.OPEN_AUTHORING_IN_TOP_WINDOW =
                            ":openAuthoringInTopWindow"),
                        (e.OPENID_HD = ":openid_hd"),
                        (e.OPENID_LOGIN_HINT = ":openid_login_hint"),
                        (e.OAUTHREQUEST = "oauthrequest"),
                        (e.OAUTH_CREDENTIAL_IDS = "oauth_credential_ids"),
                        (e.OFFLINE_MODE = ":offlinemode"),
                        (e.ORIGIN = ":origin"),
                        (e.OVERLAY = ":overlay"),
                        (e.P = "p"),
                        (e.PATH = "path"),
                        (e.PANE_RESOLVER_X = "paneResolverX"),
                        (e.PANE_RESOLVER_Y = "paneResolverY"),
                        (e.PARAM = "param"),
                        (e.PARENT_ID = "parent_id"),
                        (e.PASSWORD = "password"),
                        (e.PATTERN = "pattern"),
                        (e.PIXEL_RATIO = ":pixelratio"),
                        (e.PREFIX = ":prefix"),
                        (e.PREVIEW = ":preview"),
                        (e.PRIMARY_CONTENT_URL = "primary_content_url"),
                        (e.PROJECT = "project"),
                        (e.PROTOCOL = "protocol"),
                        (e.PSEUDO = ":pseudo"),
                        (e.QUERY = "query"),
                        (e.R = "r"),
                        (e.RANGE_TYPE = "range_type"),
                        (e.RECORD_SEP = "record_sep"),
                        (e.RECORD_CLIENT_PERFORMANCE =
                            ":record_client_performance"),
                        (e.RECORD_PERFORMANCE = ":record_performance"),
                        (e.RECOVER_OLD_SESSION_ID = ":recover_old_session_id"),
                        (e.RECOVER_SESSION_STATE_TICKETS =
                            ":recover_session_state_tickets"),
                        (e.REFRESH = ":refresh"),
                        (e.REFRESHUNMODIFIED = ":refreshunmodified"),
                        (e.REGION = "region"),
                        (e.RELOAD_ON_CUSTOM_VIEW_SAVE =
                            ":reloadOnCustomViewSave"),
                        (e.RENDER = ":render"),
                        (e.RENDER_MAPS_CLIENT_SIDE = "renderMapsClientSide"),
                        (e.RETRY = ":retry"),
                        (e.REUSE = "reuse"),
                        (e.REUSE_FOREVER = "reuse_forever"),
                        (e.REVERT = ":revert"),
                        (e.SAVE_DB_PASSWORDS = "save_db_passwords"),
                        (e.SELECT_X = "select_x"),
                        (e.SELECT_Y = "select_y"),
                        (e.SESSION_FEATURE_PREFIX = ":ff_"),
                        (e.SESSION_FLAGS = ":session_feature_flags"),
                        (e.SHARE_BUTTON = "share_button"),
                        (e.SHEET_ID = "sheet_id"),
                        (e.SHARED = "shared"),
                        (e.SHOWALL = "showall"),
                        (e.SHOW_APP_BANNER = ":showAppBanner"),
                        (e.SHOW_ASK_DATA = ":showAskData"),
                        (e.SHOW_PARAMS = "showParams"),
                        (e.SHOW_SHARE_OPTIONS = ":showShareOptions"),
                        (e.SIZE = ":size"),
                        (e.SOURCE = "source"),
                        (e.STATE = "state"),
                        (e.STICKY_SESSION_KEY = "stickySessionKey"),
                        (e.SUBSCRIPTIONS = ":subscriptions"),
                        (e.SUMMARY = "summary"),
                        (e.SUPPRESS_DEFAULT_EDIT_BEHAVIOR =
                            ":suppressDefaultEditBehavior"),
                        (e.SYNC_SESSION = ":sync_session"),
                        (e.SYNC_SESSION_STATE = "sync_session_state"),
                        (e.TABS = ":tabs"),
                        (e.TARGET = "target"),
                        (e.TARGET_SITE = "target_site"),
                        (e.TOOLBAR = ":toolbar"),
                        (e.TOOLTIP = ":tooltip"),
                        (e.TS = "ts"),
                        (e.UNDERLYING_TABLE_ID = "underlying_table_id"),
                        (e.UNDERLYING_TABLE_CAPTION =
                            "underlying_table_caption"),
                        (e.UPDATE_TYPE = "update_type"),
                        (e.USE_GUEST = ":useGuest"),
                        (e.USE_INLINE_IMAGES = "use_inline_images"),
                        (e.USERAGENT = "useragent"),
                        (e.USERNAME = "username"),
                        (e.VALUE = "value"),
                        (e.VERBOSE_MODE = "verboseMode"),
                        (e.VIEW_ID = "views_id"),
                        (e.VIZ_SNAPSHOT_ID = "viz_snapshot_id"),
                        (e.VW = ":vw"),
                        (e.W = "w"),
                        (e.WORKSHEET_PORT_SIZE = "worksheetPortSize"),
                        (e.WATERMARK = "watermark"),
                        (e.WATERMARK_MARGIN = ":watermark_margin"),
                        (e.WB = ":wb"),
                        (e.WHICH = "which"),
                        (e.X = "x"),
                        (e.Y = "y"),
                        (e.ZID = "zid"),
                        (e.ZONE_ID = "zone_id"),
                        (e.KEYCHAIN_VERSION = "keychain_version"),
                        (e.DATASOURCE_ID = "datasource_id"),
                        (e.DATASOURCE_NAME = "datasource_name"),
                        (e.LENS_ID = "lens_id"),
                        (e.WIDTH = "width"),
                        (e.HEIGHT = "height"),
                        (e.LAYOUT_VIEWS = "views"),
                        (e.LAYOUT_MENUS = "menus"),
                        (e.LAYOUT_GEOMETRY = "geometry"),
                        (e.LAYOUT_PAGES = "pages"),
                        (e.LAYOUT_CACHEURL = "cacheurl"),
                        (e.LAYOUT_SHEET = "sheet"),
                        (e.LAYOUT_DEPTH = "depth");
                })(r || (r = {})),
                (function (e) {
                    e.SHOW_VIZ_HOME = ":showVizHome";
                })(i || (i = {})),
                ((n = t.VizOptionNames || (t.VizOptionNames = {})).Size =
                    ":size"),
                (n.Embed = ":embed"),
                (n.ApiInternalVersion = ":apiInternalVersion"),
                (n.ApiExternalVersion = ":apiExternalVersion"),
                (n.ShowVizHome = ":showVizHome"),
                (n.Jsdebug = ":jsdebug"),
                (n.BootstrapWhenNotified = ":bootstrapWhenNotified"),
                (n.NavType = "navType"),
                (n.NavSrc = "navSrc"),
                (n.debug = ":jsdebug"),
                (n.ApiID = ":apiID"),
                (n.disableUrlActionsPopups = ":disableUrlActionsPopups"),
                (n.hideTabs = ":tabs"),
                (n.toolbar = ":toolbar"),
                (n.device = ":device"),
                (n.instanceIdToClone = ":iid"),
                (n.touchOptimize = "mobile"),
                (n.hideEditButton = ":hideEditButton"),
                (n.hideEditInDesktopButton = ":hideEditInDesktopButton"),
                (n.suppressDefaultEditBehavior =
                    ":suppressDefaultEditBehavior"),
                (n.hideCloseButton = ":hideCloseButton");
        },
        3256: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(1808),
                n = r(3448),
                a = r(1680),
                o = r(4020),
                s = r(7204),
                l = (function () {
                    function e(e, t, r) {
                        (this.thisWindow = e),
                            (this.otherWindow = t),
                            (this.otherWindowOrigin = r);
                    }
                    return (
                        (e.prototype.startListening = function () {
                            var e = this;
                            if (!this.unregisterFunction) {
                                var t = this.onMessageReceived.bind(this);
                                this.thisWindow.addEventListener(
                                    "message",
                                    t,
                                    !0
                                ),
                                    (this.unregisterFunction = function () {
                                        return e.thisWindow.removeEventListener(
                                            "message",
                                            t,
                                            !0
                                        );
                                    });
                            }
                        }),
                        (e.prototype.stopListening = function () {
                            this.unregisterFunction &&
                                (this.unregisterFunction(),
                                (this.unregisterFunction = void 0));
                        }),
                        (e.prototype.setInitializeMessageHandler = function (
                            e
                        ) {
                            this.initializeMessageHandler = e;
                        }),
                        (e.prototype.setCommandResponseMessageHandler =
                            function (e) {
                                this.commandResponseMessageHandler = e;
                            }),
                        (e.prototype.setCommandMessageHandler = function (e) {
                            this.commandMessageHandler = e;
                        }),
                        (e.prototype.setNotificationMessageHandler = function (
                            e
                        ) {
                            this.notificationMessageHandler = e;
                        }),
                        (e.prototype.setHandshakeMessageHandler = function (e) {
                            this.handshakeMessageHandler = e;
                        }),
                        (e.prototype.prepareInitializationMessage = function (
                            e,
                            t,
                            r
                        ) {
                            var n = {
                                msgGuid: i.raw(),
                                msgType: s.MessageType.Initialize,
                                crossFrameVersion: t,
                                apiVersion: e,
                                options: r,
                            };
                            return this.prepareMessage(n);
                        }),
                        (e.prototype.prepareCommandMessage = function (e, t) {
                            var r = {
                                msgGuid: i.raw(),
                                msgType: s.MessageType.Command,
                                verbId: e,
                                parameters: t,
                            };
                            return this.prepareMessage(r);
                        }),
                        (e.prototype.prepareCommandResponseMessage = function (
                            e,
                            t,
                            r
                        ) {
                            var n = {
                                msgGuid: i.raw(),
                                msgType: s.MessageType.CommandResponse,
                                commandGuid: e,
                                data: t,
                                error: r,
                            };
                            return (
                                r && (n.error = JSON.parse(JSON.stringify(r))),
                                this.prepareMessage(n)
                            );
                        }),
                        (e.prototype.prepareNotificationMessage = function (
                            e,
                            t
                        ) {
                            var r = {
                                msgGuid: i.raw(),
                                msgType: s.MessageType.Notification,
                                notificationId: e,
                                data: t,
                            };
                            return this.prepareMessage(r);
                        }),
                        (e.prototype.prepareAckMessage = function () {
                            var e = {
                                msgGuid: i.raw(),
                                msgType: s.MessageType.Ack,
                                platformVersion: n.INTERNAL_CONTRACT_VERSION,
                            };
                            return this.prepareMessage(e);
                        }),
                        (e.prototype.prepareMessage = function (e) {
                            if (!this.otherWindow || !this.otherWindowOrigin)
                                throw "Other window not initialized, cannot dispatch messages";
                            return new a.CrossFramePreparedMessage(
                                e,
                                this.otherWindow,
                                this.otherWindowOrigin
                            );
                        }),
                        (e.prototype.onMessageReceived = function (e) {
                            if (
                                (!this.otherWindow ||
                                    e.source === this.otherWindow) &&
                                e.data
                            ) {
                                var t = e.data;
                                if (o.isMessage(t))
                                    switch (t.msgType) {
                                        case s.MessageType.Initialize:
                                            if (
                                                !o.isInitMessage(t) ||
                                                !this.initializeMessageHandler
                                            )
                                                return;
                                            this.initializeMessageHandler(
                                                t,
                                                e.source
                                            );
                                            break;
                                        case s.MessageType.CommandResponse:
                                            if (
                                                !o.isCommandResponseMessage(
                                                    t
                                                ) ||
                                                !this
                                                    .commandResponseMessageHandler
                                            )
                                                return;
                                            this.commandResponseMessageHandler(
                                                t,
                                                e.source
                                            );
                                            break;
                                        case s.MessageType.Command:
                                            if (
                                                !o.isCommandMessage(t) ||
                                                !this.commandMessageHandler
                                            )
                                                return;
                                            this.commandMessageHandler(
                                                t,
                                                e.source
                                            );
                                            break;
                                        case s.MessageType.Notification:
                                            if (
                                                !o.isNotificationMessage(t) ||
                                                !this.notificationMessageHandler
                                            )
                                                return;
                                            this.notificationMessageHandler(
                                                t,
                                                e.source
                                            );
                                            break;
                                        case s.MessageType.Handshake:
                                            if (
                                                !o.isHandshakeMessage(t) ||
                                                !this.handshakeMessageHandler
                                            )
                                                return;
                                            this.handshakeMessageHandler(
                                                t,
                                                e.source
                                            );
                                    }
                            }
                        }),
                        (e.prototype.setOtherWindow = function (e) {
                            this.otherWindow = e;
                        }),
                        (e.prototype.setOtherWindowOrigin = function (e) {
                            this.otherWindowOrigin = e;
                        }),
                        e
                    );
                })();
            t.CrossFrameMessenger = l;
        },
        1680: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e, t, r) {
                    (this._message = e), (this._target = t), (this._origin = r);
                }
                return (
                    Object.defineProperty(e.prototype, "messageGuid", {
                        get: function () {
                            return this._message.msgGuid;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.send = function () {
                        return (
                            this._target.postMessage(
                                this._message,
                                this._origin
                            ),
                            this
                        );
                    }),
                    e
                );
            })();
            t.CrossFramePreparedMessage = r;
        },
        4020: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(1808),
                n = r(5824),
                a = r(7204),
                o = new Set([
                    n.NotificationId.EditButtonClicked,
                    n.NotificationId.EditInDesktopButtonClicked,
                    n.NotificationId.WorkbookPublished,
                    n.NotificationId.WorkbookReadyToClose,
                    n.NotificationId.ReadyToReceiveAuthToken,
                ]);
            function s(e) {
                if (!e) return !1;
                var t = e;
                return !(
                    !(t && t.msgGuid && t.msgType) ||
                    !i.isGuid(t.msgGuid) ||
                    "string" != typeof t.msgType ||
                    [
                        a.MessageType.Command,
                        a.MessageType.CommandResponse,
                        a.MessageType.Initialize,
                        a.MessageType.Notification,
                        a.MessageType.Handshake,
                    ].indexOf(t.msgType) < 0
                );
            }
            function l(e) {
                if (!e) return !1;
                var t = e;
                return (
                    "object" == typeof t &&
                    "number" == typeof t.fix &&
                    "number" == typeof t.minor &&
                    "number" == typeof t.major
                );
            }
            (t.isMessage = s),
                (t.isVersion = l),
                (t.isInitMessage = function (e) {
                    if (!s(e)) return !1;
                    var t = e;
                    return !!(
                        t.msgType === a.MessageType.Initialize &&
                        t.apiVersion &&
                        l(t.apiVersion) &&
                        t.crossFrameVersion &&
                        l(t.crossFrameVersion)
                    );
                }),
                (t.isCommandResponseMessage = function (e) {
                    if (!s(e)) return !1;
                    var t = e;
                    return !(
                        t.msgType !== a.MessageType.CommandResponse ||
                        !i.isGuid(t.commandGuid) ||
                        (!t.data && !t.error)
                    );
                }),
                (t.isCommandMessage = function (e) {
                    if (!s(e)) return !1;
                    var t = e;
                    return !(
                        t.msgType !== a.MessageType.Command ||
                        !t.parameters ||
                        "object" != typeof t.parameters ||
                        !t.verbId ||
                        "string" != typeof t.verbId
                    );
                }),
                (t.isNotificationMessage = function (e) {
                    if (!s(e)) return !1;
                    var t = e;
                    return !(
                        t.msgType !== a.MessageType.Notification ||
                        (!t.data && !o.has(t.notificationId)) ||
                        !t.notificationId ||
                        "string" != typeof t.notificationId
                    );
                }),
                (t.isHandshakeMessage = function (e) {
                    return !!s(e) && e.msgType === a.MessageType.Handshake;
                });
        },
        7204: (e, t) => {
            var r;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((r = t.MessageType || (t.MessageType = {})).Initialize =
                    "initialize"),
                (r.Notification = "notification"),
                (r.Command = "command"),
                (r.CommandResponse = "command-response"),
                (r.Handshake = "v-handshake"),
                (r.Ack = "v-ack");
        },
        9220: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e() {}
                return (
                    (e.prototype.upgradeExecuteCall = function (e, t) {
                        return { verb: e, parameters: t };
                    }),
                    (e.prototype.downgradeExecuteReturn = function (e) {
                        return e;
                    }),
                    (e.prototype.downgradeNotification = function (e) {
                        return e;
                    }),
                    e
                );
            })();
            t.IdentityVersionConverter = r;
        },
        2320: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e, t, r, i, n) {
                    if (
                        ((this._externalMajorVersion = e),
                        (this._platformMajorVersion = t),
                        (this._upgradeExecuteTranslations = r),
                        (this._downgradeExecuteTranslations = i),
                        (this._downgradeNotificationTranslations = n),
                        this._externalMajorVersion > this._platformMajorVersion)
                    )
                        throw new Error(
                            "Cannot convert between external version " +
                                this._externalMajorVersion +
                                " and " +
                                this._platformMajorVersion
                        );
                }
                return (
                    (e.fromData = function (e, t, r, i, n) {
                        return new this(e.major, t.major, r, i, n);
                    }),
                    (e.prototype.upgradeExecuteCall = function (e, t) {
                        for (
                            var r = { verb: e, parameters: t },
                                i = 0,
                                n = this._upgradeExecuteTranslations;
                            i < n.length;
                            i++
                        )
                            r = (0, n[i])(r.verb, r.parameters);
                        return r;
                    }),
                    (e.prototype.downgradeExecuteReturn = function (e) {
                        for (
                            var t = e,
                                r = 0,
                                i = this._downgradeExecuteTranslations;
                            r < i.length;
                            r++
                        )
                            t = (0, i[r])(t);
                        return t;
                    }),
                    (e.prototype.downgradeNotification = function (e) {
                        for (
                            var t = e,
                                r = 0,
                                i = this._downgradeNotificationTranslations;
                            r < i.length;
                            r++
                        )
                            t = (0, i[r])(t);
                        return t;
                    }),
                    e
                );
            })();
            t.StackingVersionConverter = r;
        },
        3760: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(9220),
                n = r(2320),
                a = r(720);
            function o(e, t) {
                return e.major === t.major && e.minor === t.minor;
            }
            function s(e, t, r, a, s) {
                var u = e.major,
                    c = e.minor,
                    d = t.major;
                if (u > d)
                    throw new Error(
                        "External version must be less than or equal to platform version.\n    externalMajorVersion=" +
                            u +
                            " platformMajorVersion=" +
                            d
                    );
                if (o(e, t)) return new i.IdentityVersionConverter();
                var p = l(u, d, c, r),
                    h = l(u, d, c, a),
                    m = l(u, d, c, s);
                return (
                    h.reverse(),
                    m.reverse(),
                    n.StackingVersionConverter.fromData(e, t, p, h, m)
                );
            }
            function l(e, t, r, i) {
                for (var n = [], a = e; a <= t; a++)
                    if (a in i)
                        for (
                            var o = a === e ? r : 0,
                                s = u(Object.keys(i[a])),
                                l = o;
                            l <= s;
                            l++
                        )
                            l in i[a] && n.push.apply(n, i[a][l]);
                return n;
            }
            function u(e) {
                return e
                    .map(function (e) {
                        return Number(e);
                    })
                    .reduce(function (e, t) {
                        return e > t ? e : t;
                    });
            }
            (t.VersionLessThan = function (e, t) {
                return (
                    !(e.major > t.major) &&
                    (e.major < t.major || e.minor < t.minor)
                );
            }),
                (t.VersionEqualTo = o),
                (t.ExecuteMinorUpgrades = { 1: { 9: [] } }),
                (t.ExecuteMinorDowngrades = {
                    1: {
                        5: [a.DowngradeWorksheetNames],
                        9: [],
                        175: [a.DowngradeWorksheetFomatting175],
                    },
                }),
                (t.NotificationMinorDowngrades = {
                    1: {
                        9: [],
                        10: [a.DowngradeFlipboardZoneID],
                        175: [a.DowngradeWorksheetFomattingNotification175],
                    },
                }),
                (t.CreateVersionConverter = function (e, r) {
                    return s(
                        e,
                        r,
                        t.ExecuteMinorUpgrades,
                        t.ExecuteMinorDowngrades,
                        t.NotificationMinorDowngrades
                    );
                }),
                (t.CreateVersionConverterWithTranslators = s),
                (t.GetMaximumMinorIndex = u);
        },
        720: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(5824);
            (t.DowngradeWorksheetNames = function (e) {
                var t = e.result;
                return (
                    void 0 !== t.extensionDashboardInfo &&
                        t.extensionDashboardInfo.zones.forEach(function (e) {
                            e.sheetInfo && (e.name = e.sheetInfo.name);
                        }),
                    e
                );
            }),
                (t.DowngradeFlipboardZoneID = function (e) {
                    if (
                        e.notificationId ===
                        i.NotificationId.SelectedMarksChanged
                    ) {
                        var t = e.data;
                        void 0 === t.flipboardZoneID && (t.flipboardZoneID = 0);
                    }
                    return e;
                });
            var n = [
                "tableau-row-dividers",
                "tableau-column-dividers",
                "tableau-pane",
            ];
            (t.DowngradeWorksheetFomatting175 = function (e) {
                return (
                    (r = n),
                    (null ===
                        (a =
                            null === (i = o = (t = e).result) || void 0 === i
                                ? void 0
                                : i.extensionWorksheetInfo) || void 0 === a
                        ? void 0
                        : a.formatting) &&
                        (o.extensionWorksheetInfo.formatting.formattingSheets =
                            o.extensionWorksheetInfo.formatting.formattingSheets.filter(
                                function (e) {
                                    return !r.includes(e.classNameKey);
                                }
                            )),
                    t
                );
                var t, r, i, a, o;
            }),
                (t.DowngradeWorksheetFomattingNotification175 = function (e) {
                    return (function (e, t) {
                        if (
                            e.notificationId ===
                            i.NotificationId.WorksheetFormattingChanged
                        ) {
                            var r = e.data;
                            e.data = r.formattingSheets.filter(function (e) {
                                return !t.includes(e.classNameKey);
                            });
                        }
                        return e;
                    })(e, n);
                });
        },
        4528: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e() {}
                return (
                    (e.prototype.downgradeExecuteCall = function (e, t) {
                        return { verb: e, parameters: t };
                    }),
                    (e.prototype.upgradeExecuteReturn = function (e, t, r) {
                        return e;
                    }),
                    (e.prototype.upgradeNotification = function (e) {
                        return e;
                    }),
                    e
                );
            })();
            t.ExternalIdentityVersionConverter = r;
        },
        5768: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e, t, r, i, n) {
                    if (
                        ((this._externalVersion = e),
                        (this._platformVersion = t),
                        (this._downgradeExecuteCallTranslations = r),
                        (this._upgradeExecuteReturnTranslations = i),
                        (this._upgradeNotificationTranslations = n),
                        this._externalVersion.major >
                            this._platformVersion.major)
                    )
                        throw new Error(
                            "Cannot convert between external version " +
                                this._externalVersion.major +
                                "\n      and " +
                                this._platformVersion.major
                        );
                }
                return (
                    (e.prototype.downgradeExecuteCall = function (e, t) {
                        for (
                            var r = { verb: e, parameters: t },
                                i = 0,
                                n = this._downgradeExecuteCallTranslations;
                            i < n.length;
                            i++
                        )
                            r = (0, n[i])(r.verb, r.parameters);
                        return r;
                    }),
                    (e.prototype.upgradeExecuteReturn = function (e, t, r) {
                        for (
                            var i = e,
                                n = 0,
                                a = this._upgradeExecuteReturnTranslations;
                            n < a.length;
                            n++
                        )
                            i = (0, a[n])(i, t, r);
                        return i;
                    }),
                    (e.prototype.upgradeNotification = function (e) {
                        for (
                            var t = e,
                                r = 0,
                                i = this._upgradeNotificationTranslations;
                            r < i.length;
                            r++
                        )
                            t = (0, i[r])(t);
                        return t;
                    }),
                    e
                );
            })();
            t.ExternalStackingVersionConverter = r;
        },
        3388: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(3760),
                n = r(4528),
                a = r(5768),
                o = r(2088);
            function s(e, t, r, o, s) {
                var u = e.major,
                    c = t.major,
                    d = t.minor;
                if (u > c)
                    throw new Error(
                        "External version must be less than or equal to platform version.\n    externalMajorVersion=" +
                            u +
                            " platformMajorVersion=" +
                            c
                    );
                if (u < c || i.VersionEqualTo(e, t))
                    return new n.ExternalIdentityVersionConverter();
                var p = l(c, d, r),
                    h = l(c, d, o),
                    m = l(c, d, s);
                return (
                    p.reverse(),
                    new a.ExternalStackingVersionConverter(e, t, p, h, m)
                );
            }
            function l(e, t, r) {
                var n = [];
                if (e in r)
                    for (
                        var a = t,
                            o = i.GetMaximumMinorIndex(Object.keys(r[e])),
                            s = a;
                        s <= o;
                        s++
                    )
                        s in r[e] && n.push.apply(n, r[e][s]);
                return n;
            }
            (t.ExecuteMinorDowngradeCallExternal = {
                1: {
                    9: [],
                    13: [
                        o.DowngradeUnderlyingTableDataAsync,
                        o.DowngradeLogicalTableDataAsync,
                    ],
                },
            }),
                (t.ExecuteMinorUpgradeReturnExternal = {
                    1: {
                        9: [o.UpgradeDataTableTypes],
                        29: [o.UpgradeDataTableRowsAndColumns],
                    },
                }),
                (t.ExecuteMinorUpgradeNotification = { 1: { 9: [] } }),
                (t.CreateExternalCompatibleVersionConverter = function (e, r) {
                    return s(
                        e,
                        r,
                        t.ExecuteMinorDowngradeCallExternal,
                        t.ExecuteMinorUpgradeReturnExternal,
                        t.ExecuteMinorUpgradeNotification
                    );
                }),
                (t.CreateExternalCompatibleVersionConverterWithTranslators = s);
        },
        2088: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(3448);
            function n(e) {
                void 0 !== e &&
                    void 0 !== e.dataTable &&
                    Array.isArray(e.dataTable) &&
                    e.dataTable.forEach(function (t) {
                        t.forEach(function (t, r) {
                            var n = t.value;
                            null !== n &&
                                (t.value =
                                    i.DataTypeConverter.convertValueAsStringToValue(
                                        n,
                                        e.headers[r].dataType
                                    ));
                        });
                    });
            }
            function a(e, t) {
                if (
                    t[i.ParameterId.LogicalTableId] !==
                    i.ApiShowDataTableSentinel.SingleTableId
                )
                    throw new Error(
                        "Invalid logical table id passed to " + e + "."
                    );
            }
            (t.UpgradeDataTableTypes = function (e, t, r) {
                if (!e) return e;
                var i = e.result;
                if (void 0 !== i.data && void 0 !== i.isSummary)
                    return n(i.data), e;
                var a = e.result;
                return void 0 !== a.data && Array.isArray(a.data)
                    ? (a.data.forEach(function (e) {
                          n(e);
                      }),
                      e)
                    : e;
            }),
                (t.DowngradeUnderlyingTableDataAsync = function (e, t) {
                    return (
                        e === i.VerbId.GetUnderlyingTableData &&
                            (a(e, t), (e = i.VerbId.GetUnderlyingData)),
                        { verb: e, parameters: t }
                    );
                }),
                (t.DowngradeLogicalTableDataAsync = function (e, t) {
                    return (
                        e === i.VerbId.GetLogicalTableData &&
                            (a(e, t), (e = i.VerbId.GetDataSourceData)),
                        { verb: e, parameters: t }
                    );
                }),
                (t.UpgradeDataTableRowsAndColumns = function (e, t, r) {
                    return (
                        (function (e) {
                            return e === i.VerbId.GetDataSummaryData;
                        })(t) &&
                            r[i.ParameterId.MaxRows] &&
                            (e = (function (e, t) {
                                var r = e.result;
                                return r.data && Array.isArray(r.data.dataTable)
                                    ? (t > 0 &&
                                          t < r.data.dataTable.length &&
                                          (r.data.dataTable.length = t),
                                      e)
                                    : e;
                            })(e, r[i.ParameterId.MaxRows])),
                        (function (e) {
                            return (
                                e === i.VerbId.GetDataSummaryData ||
                                e === i.VerbId.GetUnderlyingTableData ||
                                e === i.VerbId.GetLogicalTableData ||
                                e === i.VerbId.GetDataSourceData ||
                                e === i.VerbId.GetUnderlyingData
                            );
                        })(t) &&
                            r[i.ParameterId.ColumnsToIncludeById] &&
                            (e = (function (e, t) {
                                if (0 === t.length) return e;
                                var r = e.result;
                                if (
                                    !r.data ||
                                    !Array.isArray(r.data.dataTable) ||
                                    !Array.isArray(r.data.headers)
                                )
                                    return e;
                                var i = r.data.headers.filter(function (e, r) {
                                    return t.find(function (t) {
                                        return t === e.fieldName;
                                    });
                                });
                                r.data.dataTable.forEach(function (e, t) {
                                    r.data.dataTable[t] = e.filter(function (
                                        e,
                                        t
                                    ) {
                                        return (
                                            -1 !==
                                            i.findIndex(function (e) {
                                                return e.index === t;
                                            })
                                        );
                                    });
                                });
                                var n = 0;
                                return (
                                    (r.data.headers = i.map(function (e) {
                                        return (e.index = n++), e;
                                    })),
                                    e
                                );
                            })(e, r[i.ParameterId.ColumnsToIncludeById])),
                        e
                    );
                });
        },
        5136: (e, t, r) => {
            function i(e) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = r(2808);
            (t.ApiVersion = n.ApiVersion), i(r(5184));
            var a = r(8540);
            t.CrossFrameDispatcher = a.CrossFrameDispatcher;
            var o = r(8340);
            t.DataSource = o.DataSource;
            var s = r(1044);
            t.ExternalToInternalEnumMappings = s.ExternalToInternalEnumMappings;
            var l = r(6557);
            t.InternalToExternalEnumMappings = l.InternalToExternalEnumMappings;
            var u = r(2680);
            t.EventListenerManager = u.EventListenerManager;
            var c = r(1072);
            t.Field = c.Field;
            var d = r(2520);
            t.CustomViewImpl = d.CustomViewImpl;
            var p = r(1940);
            t.DashboardImpl = p.DashboardImpl;
            var h = r(6488);
            t.DashboardObjectImpl = h.DashboardObjectImpl;
            var m = r(2180);
            t.DataSourceImpl = m.DataSourceImpl;
            var y = r(8552);
            t.ParameterImpl = y.ParameterImpl;
            var g = r(8332);
            t.SheetImpl = g.SheetImpl;
            var f = r(1116);
            t.SheetInfoImpl = f.SheetInfoImpl;
            var b = r(5144);
            t.SingleEventManagerImpl = b.SingleEventManagerImpl;
            var v = r(6804);
            t.StoryImpl = v.StoryImpl;
            var I = r(2608);
            t.StoryPointImpl = I.StoryPointImpl;
            var S = r(6068);
            t.StoryPointInfoImpl = S.StoryPointInfoImpl;
            var T = r(3044);
            t.WorkbookImpl = T.WorkbookImpl;
            var A = r(6500);
            t.WorksheetImpl = A.WorksheetImpl;
            var _ = r(3987);
            (t.Point = _.Point), i(r(8672)), i(r(3008));
            var P = r(1832);
            t.ClientInfoServiceImpl = P.ClientInfoServiceImpl;
            var E = r(1288);
            t.NotificationServiceImpl = E.NotificationServiceImpl;
            var w = r(6428);
            (t.NotificationServiceImplBase = w.NotificationServiceImplBase),
                (t.Registration = w.Registration);
            var C = r(1776);
            t.ServiceImplBase = C.ServiceImplBase;
            var D = r(4109);
            t.SizeServiceImpl = D.SizeServiceImpl;
            var k = r(2248);
            t.StoryActivationServiceImpl = k.StoryActivationServiceImpl;
            var O = r(6664);
            t.TableauError = O.TableauError;
            var V = r(1724);
            t.Deferred = V.Deferred;
            var x = r(7480);
            t.ErrorHelpers = x.ErrorHelpers;
            var F = r(5044);
            t.ExportHelpers = F.ExportHelpers;
            var M = r(2780);
            t.SheetUtils = M.SheetUtils;
            var N = r(1576);
            t.VersionNumber = N.VersionNumber;
            var R = r(8648);
            t.VersionedExternalApiDispatcher = R.VersionedExternalApiDispatcher;
        },
        2808: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(1576),
                n = (function () {
                    function e() {}
                    return (
                        Object.defineProperty(e, "Instance", {
                            get: function () {
                                return e._instance;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.SetVersionNumber = function (t, r) {
                            e._instance = new i.VersionNumber(t, r);
                        }),
                        e
                    );
                })();
            t.ApiVersion = n;
        },
        716: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e) {
                    this._connectionInfo = e;
                }
                return (
                    Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this._connectionInfo.name;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "id", {
                        get: function () {
                            return this._connectionInfo.id;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "serverURI", {
                        get: function () {
                            return this._connectionInfo.serverURI;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "type", {
                        get: function () {
                            return this._connectionInfo.type;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.ConnectionSummary = r;
        },
        5184: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(3448),
                n = r(8540);
            t.doCrossFrameBootstrap = function (e, t, r) {
                return new Promise(function (a, o) {
                    var s;
                    (s = (function (e) {
                        try {
                            return e.self !== e.parent;
                        } catch (e) {
                            return !0;
                        }
                    })(e)
                        ? e.parent
                        : e.opener) ||
                        o(
                            "This extension is not running inside an iframe, desktop, or popup window. Initialization failed."
                        );
                    var l = new i.CrossFrameMessenger(e, s, "*"),
                        u = l.prepareInitializationMessage(
                            t,
                            i.MESSAGING_VERSION,
                            r
                        );
                    l.setCommandResponseMessageHandler(function (e) {
                        e.commandGuid === u.messageGuid &&
                            a(function () {
                                return new n.CrossFrameDispatcher(l);
                            });
                    }),
                        l.startListening(),
                        u.send();
                });
            };
        },
        8540: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = (function () {
                    function e(e) {
                        if (
                            ((this._messenger = e),
                            (this._pendingPromises = {}),
                            (this._notificationHandlers = []),
                            !this._messenger)
                        )
                            throw "Missing messenger object";
                        this._messenger.setCommandResponseMessageHandler(
                            this.onCommandResponse.bind(this)
                        ),
                            this._messenger.setNotificationMessageHandler(
                                this.onNotification.bind(this)
                            );
                    }
                    return (
                        (e.prototype.execute = function (e, t) {
                            var r = this,
                                i = this._messenger.prepareCommandMessage(e, t),
                                n = new Promise(function (e, t) {
                                    r._pendingPromises[i.messageGuid] = {
                                        resolve: e,
                                        reject: t,
                                    };
                                });
                            return i.send(), n;
                        }),
                        (e.prototype.registerNotificationHandler = function (
                            e
                        ) {
                            this._notificationHandlers.push(e);
                        }),
                        (e.prototype.unregisterNotificationHandler = function (
                            e
                        ) {
                            this._notificationHandlers =
                                this._notificationHandlers.filter(function (t) {
                                    return t !== e;
                                });
                        }),
                        (e.prototype.onCommandResponse = function (e) {
                            if (
                                !(
                                    Object.keys(this._pendingPromises).indexOf(
                                        e.commandGuid
                                    ) < 0
                                )
                            ) {
                                var t = this._pendingPromises[e.commandGuid];
                                e.error && t.reject(e.error),
                                    e.data && t.resolve({ result: e.data }),
                                    delete this._pendingPromises[e.commandGuid];
                            }
                        }),
                        (e.prototype.onNotification = function (e) {
                            for (
                                var t = 0, r = this._notificationHandlers;
                                t < r.length;
                                t++
                            ) {
                                var n = r[t];
                                try {
                                    n({
                                        notificationId: e.notificationId,
                                        data: e.data,
                                    });
                                } catch (e) {
                                    if (
                                        e.errorCode ===
                                        i.EmbeddingErrorCodes
                                            .IncompatibleVersionError
                                    )
                                        throw e;
                                }
                            }
                        }),
                        e
                    );
                })();
            t.CrossFrameDispatcher = n;
        },
        8340: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e) {
                    this._dataSourceImpl = e;
                }
                return (
                    Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this._dataSourceImpl.name;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "id", {
                        get: function () {
                            return this._dataSourceImpl.id;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fields", {
                        get: function () {
                            return this._dataSourceImpl.fields;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "extractUpdateTime", {
                        get: function () {
                            return this._dataSourceImpl.extractUpdateTime;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isExtract", {
                        get: function () {
                            return this._dataSourceImpl.isExtract;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isPublished", {
                        get: function () {
                            return this._dataSourceImpl.isPublished;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.publishedUrl = function () {
                        return this._dataSourceImpl.publishedUrl();
                    }),
                    (e.prototype.refreshAsync = function () {
                        return this._dataSourceImpl.refreshAsync();
                    }),
                    (e.prototype.getActiveTablesAsync = function () {
                        return (
                            console.warn(
                                "DataSource.getActiveTablesAsync is deprecated. Please use DataSource.getLogicalTablesAsync."
                            ),
                            this._dataSourceImpl.getActiveTablesAsync()
                        );
                    }),
                    (e.prototype.getConnectionSummariesAsync = function () {
                        return this._dataSourceImpl.getConnectionSummariesAsync();
                    }),
                    (e.prototype.getUnderlyingDataAsync = function (e) {
                        return (
                            console.warn(
                                "DataSource.getUnderlyingDataAsync is deprecated. Please use DataSource.getLogicalTablesAsync and DataSource.getLogicalTableDataAsync."
                            ),
                            this._dataSourceImpl.getUnderlyingDataAsync(e)
                        );
                    }),
                    (e.prototype.getLogicalTablesAsync = function () {
                        return this._dataSourceImpl.getLogicalTablesAsync();
                    }),
                    (e.prototype.getLogicalTableDataAsync = function (e, t) {
                        return this._dataSourceImpl.getLogicalTableDataAsync(
                            e,
                            t
                        );
                    }),
                    (e.prototype.getLogicalTableDataReaderAsync = function (
                        e,
                        t,
                        r
                    ) {
                        return this._dataSourceImpl.getLogicalTableDataReaderAsync(
                            e,
                            t,
                            r
                        );
                    }),
                    e
                );
            })();
            t.DataSource = r;
        },
        1044: (e, t, r) => {
            var i, n, a, o, s, l, u, c, d, p;
            Object.defineProperty(t, "__esModule", { value: !0 });
            var h = r(7419),
                m = r(3448),
                y = r(5520),
                g = (function () {
                    function e() {}
                    return (
                        (e.filterDomainType = new y.EnumConverter(
                            (((i = {})[h.FilterDomainType.Relevant] =
                                m.FilterDomainType.Relevant),
                            (i[h.FilterDomainType.Database] =
                                m.FilterDomainType.Database),
                            i)
                        )),
                        (e.nullOptions = new y.EnumConverter(
                            (((n = {})[h.FilterNullOption.AllValues] =
                                m.FilterNullOption.AllValues),
                            (n[h.FilterNullOption.NonNullValues] =
                                m.FilterNullOption.NonNullValues),
                            (n[h.FilterNullOption.NullValues] =
                                m.FilterNullOption.NullValues),
                            n)
                        )),
                        (e.filterUpdateType = new y.EnumConverter(
                            (((a = {})[h.FilterUpdateType.Add] =
                                m.FilterUpdateType.Add),
                            (a[h.FilterUpdateType.All] =
                                m.FilterUpdateType.All),
                            (a[h.FilterUpdateType.Remove] =
                                m.FilterUpdateType.Remove),
                            (a[h.FilterUpdateType.Replace] =
                                m.FilterUpdateType.Replace),
                            a)
                        )),
                        (e.setVisibilityType = new y.EnumConverter(
                            (((o = {})[h.ZoneVisibilityType.Show] = !0),
                            (o[h.ZoneVisibilityType.Hide] = !1),
                            o)
                        )),
                        (e.setReplaySpeedType = new y.EnumConverter(
                            (((s = {})[h.ReplaySpeedType.Slow] = 2),
                            (s[h.ReplaySpeedType.Normal] = 1),
                            (s[h.ReplaySpeedType.Fast] = 0.5),
                            s)
                        )),
                        (e.sheetType = new y.EnumConverter(
                            (((l = {})[h.SheetType.Dashboard] =
                                m.SheetType.Dashboard),
                            (l[h.SheetType.Worksheet] = m.SheetType.Worksheet),
                            (l[h.SheetType.Story] = m.SheetType.Story),
                            l)
                        )),
                        (e.showDataTableFormatType = new y.EnumConverter(
                            (((u = {})[h.IncludeDataValuesOption.AllValues] =
                                m.ApiShowDataTableFormat.NativeAndFormattedValues),
                            (u[h.IncludeDataValuesOption.OnlyNativeValues] =
                                m.ApiShowDataTableFormat.NativeValuesOnly),
                            (u[h.IncludeDataValuesOption.OnlyFormattedValues] =
                                m.ApiShowDataTableFormat.FormattedValuesOnly),
                            u)
                        )),
                        (e.periodType = new y.EnumConverter(
                            (((c = {})[h.PeriodType.Years] =
                                m.DateStepPeriod.Years),
                            (c[h.PeriodType.Quarters] =
                                m.DateStepPeriod.Quarters),
                            (c[h.PeriodType.Months] = m.DateStepPeriod.Months),
                            (c[h.PeriodType.Weeks] = m.DateStepPeriod.Weeks),
                            (c[h.PeriodType.Days] = m.DateStepPeriod.Days),
                            (c[h.PeriodType.Hours] = m.DateStepPeriod.Hours),
                            (c[h.PeriodType.Minutes] =
                                m.DateStepPeriod.Minutes),
                            (c[h.PeriodType.Seconds] =
                                m.DateStepPeriod.Seconds),
                            c)
                        )),
                        (e.dateRangeType = new y.EnumConverter(
                            (((d = {})[h.DateRangeType.Last] =
                                m.DateRangeType.Last),
                            (d[h.DateRangeType.LastN] = m.DateRangeType.LastN),
                            (d[h.DateRangeType.Next] = m.DateRangeType.Next),
                            (d[h.DateRangeType.NextN] = m.DateRangeType.NextN),
                            (d[h.DateRangeType.Current] =
                                m.DateRangeType.Current),
                            (d[h.DateRangeType.ToDate] =
                                m.DateRangeType.ToDate),
                            d)
                        )),
                        (e.dialogStyles = new y.EnumConverter(
                            (((p = {})[h.DialogStyle.Window] =
                                m.DialogStyle.Window),
                            (p[h.DialogStyle.Modal] = m.DialogStyle.Modal),
                            (p[h.DialogStyle.Modeless] =
                                m.DialogStyle.Modeless),
                            p)
                        )),
                        e
                    );
                })();
            t.ExternalToInternalEnumMappings = g;
        },
        6557: (e, t, r) => {
            var i, n, a, o, s, l, u, c, d, p, h, m, y, g, f, b, v, I;
            Object.defineProperty(t, "__esModule", { value: !0 });
            var S = r(7419),
                T = r(3448),
                A = r(5520),
                _ = (function () {
                    function e() {}
                    return (
                        (e.extensionContext = new A.EnumConverter(
                            (((i = {})[T.ExtensionContext.Desktop] =
                                S.ExtensionContext.Desktop),
                            (i[T.ExtensionContext.Server] =
                                S.ExtensionContext.Server),
                            i)
                        )),
                        (e.extensionMode = new A.EnumConverter(
                            (((n = {})[T.ExtensionMode.Authoring] =
                                S.ExtensionMode.Authoring),
                            (n[T.ExtensionMode.Viewing] =
                                S.ExtensionMode.Viewing),
                            n)
                        )),
                        (e.columnType = new A.EnumConverter(
                            (((a = {})[T.ColumnType.Continuous] =
                                S.ColumnType.Continuous),
                            (a[T.ColumnType.Discrete] = S.ColumnType.Discrete),
                            (a[T.ColumnType.Unknown] = S.ColumnType.Unknown),
                            a)
                        )),
                        (e.fieldAggregationType = new A.EnumConverter(
                            (((o = {})[T.FieldAggregationType.Attr] =
                                S.FieldAggregationType.Attr),
                            (o[T.FieldAggregationType.Avg] =
                                S.FieldAggregationType.Avg),
                            (o[T.FieldAggregationType.Collect] =
                                S.FieldAggregationType.Collect),
                            (o[T.FieldAggregationType.Count] =
                                S.FieldAggregationType.Count),
                            (o[T.FieldAggregationType.Countd] =
                                S.FieldAggregationType.Countd),
                            (o[T.FieldAggregationType.Day] =
                                S.FieldAggregationType.Day),
                            (o[T.FieldAggregationType.End] =
                                S.FieldAggregationType.End),
                            (o[T.FieldAggregationType.Hour] =
                                S.FieldAggregationType.Hour),
                            (o[T.FieldAggregationType.InOut] =
                                S.FieldAggregationType.InOut),
                            (o[T.FieldAggregationType.Kurtosis] =
                                S.FieldAggregationType.Kurtosis),
                            (o[T.FieldAggregationType.Max] =
                                S.FieldAggregationType.Max),
                            (o[T.FieldAggregationType.Mdy] =
                                S.FieldAggregationType.Mdy),
                            (o[T.FieldAggregationType.Median] =
                                S.FieldAggregationType.Median),
                            (o[T.FieldAggregationType.Min] =
                                S.FieldAggregationType.Min),
                            (o[T.FieldAggregationType.Minute] =
                                S.FieldAggregationType.Minute),
                            (o[T.FieldAggregationType.MonthYear] =
                                S.FieldAggregationType.MonthYear),
                            (o[T.FieldAggregationType.None] =
                                S.FieldAggregationType.None),
                            (o[T.FieldAggregationType.Qtr] =
                                S.FieldAggregationType.Qtr),
                            (o[T.FieldAggregationType.Quart1] =
                                S.FieldAggregationType.Quart1),
                            (o[T.FieldAggregationType.Quart3] =
                                S.FieldAggregationType.Quart3),
                            (o[T.FieldAggregationType.Second] =
                                S.FieldAggregationType.Second),
                            (o[T.FieldAggregationType.Skewness] =
                                S.FieldAggregationType.Skewness),
                            (o[T.FieldAggregationType.Stdev] =
                                S.FieldAggregationType.Stdev),
                            (o[T.FieldAggregationType.Stdevp] =
                                S.FieldAggregationType.Stdevp),
                            (o[T.FieldAggregationType.Sum] =
                                S.FieldAggregationType.Sum),
                            (o[T.FieldAggregationType.TruncDay] =
                                S.FieldAggregationType.TruncDay),
                            (o[T.FieldAggregationType.TruncHour] =
                                S.FieldAggregationType.TruncHour),
                            (o[T.FieldAggregationType.TruncMinute] =
                                S.FieldAggregationType.TruncMinute),
                            (o[T.FieldAggregationType.TruncMonth] =
                                S.FieldAggregationType.TruncMonth),
                            (o[T.FieldAggregationType.TruncQtr] =
                                S.FieldAggregationType.TruncQtr),
                            (o[T.FieldAggregationType.TruncSecond] =
                                S.FieldAggregationType.TruncSecond),
                            (o[T.FieldAggregationType.TruncWeek] =
                                S.FieldAggregationType.TruncWeek),
                            (o[T.FieldAggregationType.TruncYear] =
                                S.FieldAggregationType.TruncYear),
                            (o[T.FieldAggregationType.User] =
                                S.FieldAggregationType.User),
                            (o[T.FieldAggregationType.Var] =
                                S.FieldAggregationType.Var),
                            (o[T.FieldAggregationType.Varp] =
                                S.FieldAggregationType.Varp),
                            (o[T.FieldAggregationType.Week] =
                                S.FieldAggregationType.Week),
                            (o[T.FieldAggregationType.Weekday] =
                                S.FieldAggregationType.Weekday),
                            (o[T.FieldAggregationType.Year] =
                                S.FieldAggregationType.Year),
                            o)
                        )),
                        (e.fieldRoleType = new A.EnumConverter(
                            (((s = {})[T.FieldRoleType.Dimension] =
                                S.FieldRoleType.Dimension),
                            (s[T.FieldRoleType.Measure] =
                                S.FieldRoleType.Measure),
                            (s[T.FieldRoleType.Unknown] =
                                S.FieldRoleType.Unknown),
                            s)
                        )),
                        (e.sheetType = new A.EnumConverter(
                            (((l = {})[T.SheetType.Dashboard] =
                                S.SheetType.Dashboard),
                            (l[T.SheetType.Story] = S.SheetType.Story),
                            (l[T.SheetType.Worksheet] = S.SheetType.Worksheet),
                            l)
                        )),
                        (e.dashboardObjectType = new A.EnumConverter(
                            (((u = {})[T.DashboardObjectType.Extension] =
                                S.DashboardObjectType.Extension),
                            (u[T.DashboardObjectType.Blank] =
                                S.DashboardObjectType.Blank),
                            (u[T.DashboardObjectType.Image] =
                                S.DashboardObjectType.Image),
                            (u[T.DashboardObjectType.Legend] =
                                S.DashboardObjectType.Legend),
                            (u[T.DashboardObjectType.PageFilter] =
                                S.DashboardObjectType.PageFilter),
                            (u[T.DashboardObjectType.ParameterControl] =
                                S.DashboardObjectType.ParameterControl),
                            (u[T.DashboardObjectType.QuickFilter] =
                                S.DashboardObjectType.QuickFilter),
                            (u[T.DashboardObjectType.Text] =
                                S.DashboardObjectType.Text),
                            (u[T.DashboardObjectType.Title] =
                                S.DashboardObjectType.Title),
                            (u[T.DashboardObjectType.WebPage] =
                                S.DashboardObjectType.WebPage),
                            (u[T.DashboardObjectType.Worksheet] =
                                S.DashboardObjectType.Worksheet),
                            u)
                        )),
                        (e.dataType = new A.EnumConverter(
                            (((c = {})[T.DataType.Bool] = S.DataType.Bool),
                            (c[T.DataType.Date] = S.DataType.Date),
                            (c[T.DataType.DateTime] = S.DataType.DateTime),
                            (c[T.DataType.Float] = S.DataType.Float),
                            (c[T.DataType.Int] = S.DataType.Int),
                            (c[T.DataType.Spatial] = S.DataType.Spatial),
                            (c[T.DataType.String] = S.DataType.String),
                            c)
                        )),
                        (e.filterUpdateType = new A.EnumConverter(
                            (((d = {})[T.FilterUpdateType.Add] =
                                S.FilterUpdateType.Add),
                            (d[T.FilterUpdateType.All] =
                                S.FilterUpdateType.All),
                            (d[T.FilterUpdateType.Remove] =
                                S.FilterUpdateType.Remove),
                            (d[T.FilterUpdateType.Replace] =
                                S.FilterUpdateType.Replace),
                            d)
                        )),
                        (e.allowableValues = new A.EnumConverter(
                            (((p = {})[T.DomainRestrictionType.All] =
                                S.ParameterValueType.All),
                            (p[T.DomainRestrictionType.List] =
                                S.ParameterValueType.List),
                            (p[T.DomainRestrictionType.Range] =
                                S.ParameterValueType.Range),
                            p)
                        )),
                        (e.dateStepPeriod = new A.EnumConverter(
                            (((h = {})[T.DateStepPeriod.Years] =
                                S.PeriodType.Years),
                            (h[T.DateStepPeriod.Quarters] =
                                S.PeriodType.Quarters),
                            (h[T.DateStepPeriod.Months] = S.PeriodType.Months),
                            (h[T.DateStepPeriod.Weeks] = S.PeriodType.Weeks),
                            (h[T.DateStepPeriod.Days] = S.PeriodType.Days),
                            (h[T.DateStepPeriod.Hours] = S.PeriodType.Hours),
                            (h[T.DateStepPeriod.Minutes] =
                                S.PeriodType.Minutes),
                            (h[T.DateStepPeriod.Seconds] =
                                S.PeriodType.Seconds),
                            h)
                        )),
                        (e.dateRangeType = new A.EnumConverter(
                            (((m = {})[T.DateRangeType.Current] =
                                S.DateRangeType.Current),
                            (m[T.DateRangeType.Last] = S.DateRangeType.Last),
                            (m[T.DateRangeType.LastN] = S.DateRangeType.LastN),
                            (m[T.DateRangeType.Next] = S.DateRangeType.Next),
                            (m[T.DateRangeType.NextN] = S.DateRangeType.NextN),
                            (m[T.DateRangeType.ToDate] =
                                S.DateRangeType.ToDate),
                            m)
                        )),
                        (e.errorCode = new A.EnumConverter(
                            (((y = {})[T.ErrorCodes.INITIALIZATION_ERROR] =
                                S.ErrorCodes.InternalError),
                            (y[T.ErrorCodes.INTERNAL_ERROR] =
                                S.ErrorCodes.InternalError),
                            (y[T.ErrorCodes.MISSING_ENUM_MAPPING] =
                                S.ErrorCodes.InternalError),
                            (y[T.ErrorCodes.MISSING_PARAMETER] =
                                S.ErrorCodes.InternalError),
                            (y[T.ErrorCodes.PERMISSION_DENIED] =
                                S.ErrorCodes.InternalError),
                            (y[T.ErrorCodes.PRES_MODEL_PARSING_ERROR] =
                                S.ErrorCodes.InternalError),
                            (y[T.ErrorCodes.UNKNOWN_VERB_ID] =
                                S.ErrorCodes.InternalError),
                            (y[T.ErrorCodes.VERSION_NOT_CONFIGURED] =
                                S.ErrorCodes.APINotInitialized),
                            (y[T.ErrorCodes.VISIBILITY_ERROR] =
                                S.ErrorCodes.VisibilityError),
                            y),
                            S.ErrorCodes.InternalError
                        )),
                        (e.filterType = new A.EnumConverter(
                            (((g = {})[T.FilterType.Categorical] =
                                S.FilterType.Categorical),
                            (g[T.FilterType.Range] = S.FilterType.Range),
                            (g[T.FilterType.RelativeDate] =
                                S.FilterType.RelativeDate),
                            (g[T.FilterType.Hierarchical] =
                                S.FilterType.Hierarchical),
                            g)
                        )),
                        (e.classNameKey = new A.EnumConverter(
                            (((f = {})["tableau-dashboard-title"] =
                                S.ClassNameKey.DashboardTitle),
                            (f["tableau-story-title"] =
                                S.ClassNameKey.StoryTitle),
                            (f["tableau-tooltip"] = S.ClassNameKey.Tooltip),
                            (f["tableau-worksheet"] = S.ClassNameKey.Worksheet),
                            (f["tableau-worksheet-title"] =
                                S.ClassNameKey.WorksheetTitle),
                            (f["tableau-pane"] = S.ClassNameKey.Pane),
                            (f["tableau-row-dividers"] =
                                S.ClassNameKey.RowDividers),
                            (f["tableau-column-dividers"] =
                                S.ClassNameKey.ColumnDividers),
                            (f["dashboard-title"] =
                                S.ClassNameKey.DashboardTitle),
                            (f["story-title"] = S.ClassNameKey.StoryTitle),
                            (f.tooltip = S.ClassNameKey.Tooltip),
                            (f.worksheet = S.ClassNameKey.Worksheet),
                            (f["worksheet-title"] =
                                S.ClassNameKey.WorksheetTitle),
                            (f.pane = S.ClassNameKey.Pane),
                            (f["row-dividers"] = S.ClassNameKey.RowDividers),
                            (f["column-dividers"] =
                                S.ClassNameKey.ColumnDividers),
                            f)
                        )),
                        (e.hierarchicalLevelSelectionState =
                            new A.EnumConverter(
                                (((b = {})[
                                    T.HierarchicalLevelSelectionState.AllSelected
                                ] =
                                    S.HierarchicalLevelSelectionState.AllSelected),
                                (b[
                                    T.HierarchicalLevelSelectionState.NoneSelected
                                ] =
                                    S.HierarchicalLevelSelectionState.NoneSelected),
                                (b[
                                    T.HierarchicalLevelSelectionState.SomeSelected
                                ] =
                                    S.HierarchicalLevelSelectionState.SomeSelected),
                                (b[
                                    T.HierarchicalLevelSelectionState.UnknownSelected
                                ] =
                                    S.HierarchicalLevelSelectionState.UnknownSelected),
                                b)
                            )),
                        (e.annotationType = new A.EnumConverter(
                            (((v = {})[T.AnnotateEnum.Area] =
                                S.AnnotationType.Area),
                            (v[T.AnnotateEnum.Mark] = S.AnnotationType.Mark),
                            (v[T.AnnotateEnum.Point] = S.AnnotationType.Point),
                            v)
                        )),
                        (e.markType = new A.EnumConverter(
                            (((I = {})[T.MarkType.Area] = S.MarkType.Area),
                            (I[T.MarkType.Bar] = S.MarkType.Bar),
                            (I[T.MarkType.Circle] = S.MarkType.Circle),
                            (I[T.MarkType.GanttBar] = S.MarkType.GanttBar),
                            (I[T.MarkType.Heatmap] = S.MarkType.Heatmap),
                            (I[T.MarkType.Line] = S.MarkType.Line),
                            (I[T.MarkType.Map] = S.MarkType.Map),
                            (I[T.MarkType.Pie] = S.MarkType.Pie),
                            (I[T.MarkType.Polygon] = S.MarkType.Polygon),
                            (I[T.MarkType.Shape] = S.MarkType.Shape),
                            (I[T.MarkType.Square] = S.MarkType.Square),
                            (I[T.MarkType.Text] = S.MarkType.Text),
                            (I[T.MarkType.VizExtension] =
                                S.MarkType.VizExtension),
                            I)
                        )),
                        e
                    );
                })();
            t.InternalToExternalEnumMappings = _;
        },
        2680: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(6664),
                a = (function () {
                    function e() {
                        this._eventListenerManagers = {};
                    }
                    return (
                        (e.prototype.addEventListener = function (e, t) {
                            if (!this._eventListenerManagers.hasOwnProperty(e))
                                throw new n.TableauError(
                                    i.ErrorCodes.UnsupportedEventName,
                                    "Cannot add event, unsupported event type: " +
                                        e
                                );
                            return this._eventListenerManagers[
                                e
                            ].addEventListener(t);
                        }),
                        (e.prototype.removeEventListener = function (e, t) {
                            if (!this._eventListenerManagers.hasOwnProperty(e))
                                throw new n.TableauError(
                                    i.ErrorCodes.UnsupportedEventName,
                                    "Cannot remove event, unsupported event type: " +
                                        e
                                );
                            return this._eventListenerManagers[
                                e
                            ].removeEventListener(t);
                        }),
                        (e.prototype.addNewEventType = function (e) {
                            this._eventListenerManagers[e.eventType] = e;
                        }),
                        e
                    );
                })();
            t.EventListenerManager = a;
        },
        1072: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e) {
                    this._fieldImpl = e;
                }
                return (
                    Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this._fieldImpl.name;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "id", {
                        get: function () {
                            return this._fieldImpl.id;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "description", {
                        get: function () {
                            return this._fieldImpl.description;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "dataType", {
                        get: function () {
                            return this._fieldImpl.dataType;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "aggregation", {
                        get: function () {
                            return this._fieldImpl.aggregation;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "dataSource", {
                        get: function () {
                            return this._fieldImpl.dataSource;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "role", {
                        get: function () {
                            return this._fieldImpl.role;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "columnType", {
                        get: function () {
                            return this._fieldImpl.columnType;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isCalculatedField", {
                        get: function () {
                            return this._fieldImpl.isCalculatedField;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isCombinedField", {
                        get: function () {
                            return this._fieldImpl.isCombinedField;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isGenerated", {
                        get: function () {
                            return this._fieldImpl.isGenerated;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isGeospatial", {
                        get: function () {
                            return this._fieldImpl.isGeospatial;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isHidden", {
                        get: function () {
                            return this._fieldImpl.isHidden;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(
                        e.prototype,
                        "isPresentOnPublishedDatasource",
                        {
                            get: function () {
                                return this._fieldImpl
                                    .isPresentOnPublishedDatasource;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }
                    ),
                    e
                );
            })();
            t.Field = r;
        },
        2520: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(5136),
                n = (function () {
                    function e(e, t) {
                        (this._registryId = t),
                            (this._luid = e.luid),
                            (this._name = e.name),
                            (this._shared = e.shared),
                            (this._isDefault = e.isDefault),
                            (this._ownerName = e.owner.userFriendlyName),
                            (this._url = e.url);
                    }
                    return (
                        Object.defineProperty(e.prototype, "luid", {
                            get: function () {
                                return this._luid;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return this._name;
                            },
                            set: function (e) {
                                this._name = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "shared", {
                            get: function () {
                                return this._shared;
                            },
                            set: function (e) {
                                this._shared = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "isDefault", {
                            get: function () {
                                return this._isDefault;
                            },
                            set: function (e) {
                                this._isDefault = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "ownerName", {
                            get: function () {
                                return this._ownerName;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "url", {
                            get: function () {
                                return this._url;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.saveAsync = function () {
                            return i.ApiServiceRegistry.get(this._registryId)
                                .getService("viz-service")
                                .saveAsync(this);
                        }),
                        e
                    );
                })();
            t.CustomViewImpl = n;
        },
        1940: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(7419),
                o = r(7419),
                s = r(3448),
                l = r(6557),
                u = r(3987),
                c = r(3008),
                d = r(6664),
                p = r(7480),
                h = r(6488),
                m = r(8332),
                y = r(1116),
                g = r(6500),
                f = (function (e) {
                    function t(t, r, i, n, a, o) {
                        void 0 === o && (o = 0);
                        var s = e.call(this, t, n) || this;
                        return (
                            (s._zones = r),
                            (s._sheetPath = i),
                            (s._parentStoryPointImpl = a),
                            (s._activeDashboardObjectId = o),
                            s
                        );
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "worksheetsImpl", {
                            get: function () {
                                return this._worksheetsImpl;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "objects", {
                            get: function () {
                                return this._objects;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "parentStoryPoint", {
                            get: function () {
                                return this._parentStoryPointImpl;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            t.prototype,
                            "activeDashboardObjectId",
                            {
                                get: function () {
                                    return this._activeDashboardObjectId;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(
                            t.prototype,
                            "activeDashboardName",
                            {
                                get: function () {
                                    return this._sheetPath.sheetName;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        (t.prototype.initializeWithPublicInterfaces =
                            function () {
                                (this._worksheetsImpl = new Array()),
                                    (this._objects = new Array()),
                                    (this.zoneMap = new Map());
                                for (
                                    var e = 0, t = this._zones;
                                    e < t.length;
                                    e++
                                ) {
                                    var r = t[e],
                                        i = void 0,
                                        n = {
                                            width: r.width,
                                            height: r.height,
                                        };
                                    if (
                                        r.zoneType ===
                                            s.DashboardObjectType.Worksheet ||
                                        r.zoneType ===
                                            s.DashboardObjectType.QuickFilter
                                    ) {
                                        var a = "",
                                            c = "",
                                            d = !1;
                                        r.sheetInfo
                                            ? ((a = r.sheetInfo.name),
                                              (d =
                                                  "" ===
                                                  (c = r.sheetInfo.url || "")))
                                            : (a = r.name);
                                        var p = new y.SheetInfoImpl(
                                                a,
                                                o.SheetType.Worksheet,
                                                n,
                                                this._worksheetsImpl.length,
                                                !1,
                                                d,
                                                c
                                            ),
                                            m = {
                                                worksheet: a,
                                                dashboard:
                                                    this._sheetInfoImpl.name,
                                                storyboard:
                                                    this._sheetPath.storyboard,
                                                flipboardZoneID:
                                                    this._sheetPath
                                                        .flipboardZoneID,
                                                storyPointID:
                                                    this._sheetPath
                                                        .storyPointID,
                                            };
                                        (i = new g.WorksheetImpl(
                                            p,
                                            this._registryId,
                                            m,
                                            this,
                                            this._parentStoryPointImpl
                                        )),
                                            r.zoneType ===
                                                s.DashboardObjectType
                                                    .Worksheet &&
                                                this._worksheetsImpl.push(i);
                                    }
                                    var f = new u.Point(r.x, r.y),
                                        b = new h.DashboardObjectImpl(
                                            this,
                                            l.InternalToExternalEnumMappings.dashboardObjectType.convert(
                                                r.zoneType
                                            ),
                                            f,
                                            n,
                                            i,
                                            r.name,
                                            void 0 !== r.isFloating &&
                                                r.isFloating,
                                            void 0 === r.isVisible ||
                                                r.isVisible,
                                            r.zoneId,
                                            r.fieldId
                                        );
                                    this._objects.push(b),
                                        this.zoneMap.set(r.zoneId, b);
                                }
                            }),
                        (t.prototype.setDashboardObjectVisibilityAsync =
                            function (e) {
                                return c.ApiServiceRegistry.get(
                                    this._registryId
                                )
                                    .getService("zone-service")
                                    .setVisibilityAsync(
                                        this.name,
                                        this.zoneMap,
                                        e
                                    );
                            }),
                        (t.prototype.getDashboardObjectById = function (e) {
                            return this.zoneMap.get(e);
                        }),
                        (t.prototype.updateZones = function (e, t, r) {
                            var i = this;
                            void 0 === t && (t = 0), void 0 === r && (r = "");
                            var n = this._objects,
                                a = this.zoneMap,
                                s = this._activeDashboardObjectId,
                                l = this._sheetPath.sheetName;
                            (this._zones = e),
                                (this._activeDashboardObjectId = t),
                                (this._sheetPath.sheetName = r),
                                (this._sheetInfoImpl.name = r),
                                this.initializeWithPublicInterfaces();
                            var u = this._objects,
                                c = this.zoneMap,
                                d = new Map();
                            return (
                                n.forEach(function (e) {
                                    var t = e.id;
                                    if (c.has(t)) {
                                        var r = c.get(t);
                                        e.isFloating !== r.isFloating &&
                                            i.addChange(
                                                t,
                                                d,
                                                o.DashboardLayoutChange
                                                    .IsFloatingChanged
                                            ),
                                            e.isVisible !== r.isVisible &&
                                                i.addChange(
                                                    t,
                                                    d,
                                                    o.DashboardLayoutChange
                                                        .IsVisibleChanged
                                                ),
                                            e.name !== r.name &&
                                                i.addChange(
                                                    t,
                                                    d,
                                                    o.DashboardLayoutChange
                                                        .NameChanged
                                                ),
                                            (e.position.x === r.position.x &&
                                                e.position.y ===
                                                    r.position.y) ||
                                                i.addChange(
                                                    t,
                                                    d,
                                                    o.DashboardLayoutChange
                                                        .PositionChanged
                                                ),
                                            (e.size.width === r.size.width &&
                                                e.size.height ===
                                                    r.size.height) ||
                                                i.addChange(
                                                    t,
                                                    d,
                                                    o.DashboardLayoutChange
                                                        .SizeChanged
                                                );
                                    } else i.addChange(t, d, o.DashboardLayoutChange.Removed);
                                }),
                                u.forEach(function (e) {
                                    a.has(e.id) ||
                                        i.addChange(
                                            e.id,
                                            d,
                                            o.DashboardLayoutChange.Added
                                        );
                                }),
                                s !== t &&
                                    (0 !== t &&
                                        this.addChange(
                                            t,
                                            d,
                                            o.DashboardLayoutChange.Selected
                                        ),
                                    0 !== s &&
                                        this.addChange(
                                            s,
                                            d,
                                            o.DashboardLayoutChange.Deselected
                                        )),
                                l !== r &&
                                    this.addChange(
                                        0,
                                        d,
                                        o.DashboardLayoutChange.DashboardChanged
                                    ),
                                d
                            );
                        }),
                        (t.prototype.addChange = function (e, t, r) {
                            t.has(e) || t.set(e, []), t.get(e).push(r);
                        }),
                        (t.prototype.moveAndResizeDashboardObjectsAsync =
                            function (e) {
                                return c.ApiServiceRegistry.get(
                                    this._registryId
                                )
                                    .getService("zone-service")
                                    .moveAndResizeAsync(
                                        this.name,
                                        this.zoneMap,
                                        e
                                    );
                            }),
                        (t.prototype.replayAnimationAsync = function (e) {
                            return c.ApiServiceRegistry.get(this._registryId)
                                .getService("animation-service")
                                .replayAsync(e);
                        }),
                        (t.prototype.getFiltersAsync = function () {
                            return (
                                this.verifyActiveSheetOrEmbeddedInActiveStoryPoint(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("filter-service")
                                    .getDashboardFiltersAsync()
                            );
                        }),
                        (t.prototype.applyFilterAsync = function (e, t, r, i) {
                            if (
                                (p.ErrorHelpers.verifyEnumValue(
                                    r,
                                    a.FilterUpdateType,
                                    "FilterUpdateType"
                                ),
                                p.ErrorHelpers.verifyStringParameter(
                                    e,
                                    "fieldName"
                                ),
                                !Array.isArray(t))
                            )
                                throw new d.TableauError(
                                    o.ErrorCodes.InvalidParameter,
                                    "values parameter for applyDashboardFilterAsync must be an array"
                                );
                            return (
                                this.verifyActiveSheetOrEmbeddedInActiveStoryPoint(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("filter-service")
                                    .applyDashboardFilterAsync(e, t, r, i)
                            );
                        }),
                        (t.prototype.getWorksheetNamesFromZones = function () {
                            for (
                                var e = [], t = 0, r = this._zones;
                                t < r.length;
                                t++
                            ) {
                                var i = r[t];
                                if (
                                    i.zoneType ===
                                    s.DashboardObjectType.Worksheet
                                ) {
                                    var n = i.sheetInfo
                                        ? i.sheetInfo.name
                                        : i.name;
                                    e.push(n);
                                }
                            }
                            return e;
                        }),
                        (t.prototype.verifyActiveSheetOrEmbeddedInActiveStoryPoint =
                            function () {
                                var e = this.active,
                                    t =
                                        null != this.parentStoryPoint &&
                                        this.parentStoryPoint.active;
                                if (!e && !t)
                                    throw new d.TableauError(
                                        o.SharedErrorCodes.NotActiveSheet,
                                        "Operation not allowed on non-active sheet"
                                    );
                            }),
                        t
                    );
                })(m.SheetImpl);
            t.DashboardImpl = f;
        },
        6488: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e, t, r, i, n, a, o, s, l, u) {
                    (this._dashboardImpl = e),
                        (this._type = t),
                        (this._position = r),
                        (this._size = i),
                        (this._worksheetImpl = n),
                        (this._name = a),
                        (this._isFloating = o),
                        (this._isVisible = s),
                        (this._id = l),
                        (this._fieldId = u);
                }
                return (
                    Object.defineProperty(e.prototype, "dashboardImpl", {
                        get: function () {
                            return this._dashboardImpl;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "type", {
                        get: function () {
                            return this._type;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "position", {
                        get: function () {
                            return this._position;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "size", {
                        get: function () {
                            return this._size;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "worksheetImpl", {
                        get: function () {
                            return this._worksheetImpl;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this._name;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isFloating", {
                        get: function () {
                            return this._isFloating;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isVisible", {
                        get: function () {
                            return this._isVisible;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "id", {
                        get: function () {
                            return this._id;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fieldId", {
                        get: function () {
                            return this._fieldId;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.DashboardObjectImpl = r;
        },
        2180: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(716),
                a = r(1072),
                o = r(624),
                s = r(3008),
                l = r(7603),
                u = r(7480),
                c = r(5288),
                d = (function () {
                    function e(e, t) {
                        var r = this;
                        (this._dataSourceInfo = e),
                            (this._registryId = t),
                            (this._fields = e.fields.map(function (e) {
                                var t = new c.FieldImpl(e, r);
                                return new a.Field(t);
                            }));
                    }
                    return (
                        Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return this._dataSourceInfo.name;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "id", {
                            get: function () {
                                return this._dataSourceInfo.id;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            e.prototype,
                            "extractUpdateTime",
                            {
                                get: function () {
                                    return this._dataSourceInfo
                                        .extractUpdateTime;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(e.prototype, "fields", {
                            get: function () {
                                return this._fields;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "isExtract", {
                            get: function () {
                                return this._dataSourceInfo.isExtract;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "isPublished", {
                            get: function () {
                                return this._dataSourceInfo.isPublished;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.publishedUrl = function () {
                            return this._dataSourceInfo.publishedUrl;
                        }),
                        (e.prototype.getMaxPageRowLimit = function () {
                            return 1e4;
                        }),
                        (e.prototype.refreshAsync = function () {
                            return s.ApiServiceRegistry.get(this._registryId)
                                .getService("data-source-service")
                                .refreshAsync(this._dataSourceInfo.id);
                        }),
                        (e.prototype.getConnectionSummariesAsync = function () {
                            return s.ApiServiceRegistry.get(this._registryId)
                                .getService("data-source-service")
                                .getConnectionSummariesAsync(
                                    this._dataSourceInfo.id
                                )
                                .then(function (e) {
                                    return e.map(function (e) {
                                        return new n.ConnectionSummary(e);
                                    });
                                });
                        }),
                        (e.prototype.getActiveTablesAsync = function () {
                            return s.ApiServiceRegistry.get(this._registryId)
                                .getService("data-source-service")
                                .getActiveTablesAsync(this._dataSourceInfo.id)
                                .then(function (e) {
                                    return e.map(function (e) {
                                        return new l.TableSummary(e);
                                    });
                                });
                        }),
                        (e.prototype.getUnderlyingDataAsync = function (e) {
                            return (
                                (e = e || {}),
                                s.ApiServiceRegistry.get(this._registryId)
                                    .getService("get-data-service")
                                    .getDataSourceDataAsync(
                                        this.id,
                                        !!e.ignoreAliases,
                                        e.maxRows || 0,
                                        e.columnsToInclude || [],
                                        e.columnsToIncludeById || [],
                                        e.includeDataValuesOption ||
                                            i.IncludeDataValuesOption.AllValues
                                    )
                            );
                        }),
                        (e.prototype.getLogicalTableDataAsync = function (
                            e,
                            t
                        ) {
                            return (
                                (t = t || {}),
                                s.ApiServiceRegistry.get(this._registryId)
                                    .getService("get-data-service")
                                    .getLogicalTableDataAsync(
                                        this.id,
                                        e,
                                        !!t.ignoreAliases,
                                        t.maxRows || 0,
                                        t.columnsToInclude || [],
                                        t.columnsToIncludeById || [],
                                        t.includeDataValuesOption ||
                                            i.IncludeDataValuesOption.AllValues
                                    )
                            );
                        }),
                        (e.prototype.getLogicalTableDataReaderAsync = function (
                            e,
                            t,
                            r
                        ) {
                            return (
                                (r = r || {}),
                                s.ApiServiceRegistry.get(this._registryId)
                                    .getService("get-data-service")
                                    .getLogicalTableDataReaderAsync(
                                        this.id,
                                        e,
                                        t || this.getMaxPageRowLimit(),
                                        !!r.ignoreAliases,
                                        r.columnsToIncludeById || [],
                                        r.includeDataValuesOption ||
                                            i.IncludeDataValuesOption.AllValues
                                    )
                            );
                        }),
                        (e.prototype.initializeWithPublicInterfaces = function (
                            e
                        ) {
                            u.ErrorHelpers.verifyInternalValue(e, "dataSource"),
                                (this._fields = this._dataSourceInfo.fields.map(
                                    function (t) {
                                        var r = new c.FieldImpl(t, e);
                                        return new a.Field(r);
                                    }
                                ));
                        }),
                        (e.prototype.getLogicalTablesAsync = function () {
                            return s.ApiServiceRegistry.get(this._registryId)
                                .getService("data-source-service")
                                .getLogicalTablesAsync(this.id)
                                .then(function (e) {
                                    return e.map(function (e) {
                                        return new o.LogicalTable(e);
                                    });
                                });
                        }),
                        e
                    );
                })();
            t.DataSourceImpl = d;
        },
        5288: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(3448),
                a = r(6557),
                o = (function () {
                    function e(e, t) {
                        (this._fieldInfo = e), (this._parentDataSource = t);
                    }
                    return (
                        Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return this._fieldInfo.name;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "id", {
                            get: function () {
                                return this._fieldInfo.id;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "description", {
                            get: function () {
                                return this._fieldInfo.description;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "dataType", {
                            get: function () {
                                var e;
                                return null != (e = this._fieldInfo.dataType)
                                    ? e
                                    : i.DataType.Unknown;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "aggregation", {
                            get: function () {
                                return a.InternalToExternalEnumMappings.fieldAggregationType.convert(
                                    this._fieldInfo.aggregation
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "dataSource", {
                            get: function () {
                                if (!this._parentDataSource)
                                    throw new Error(
                                        "Data source information is not available for this field. Please use getFieldAsync method to get field's data source information"
                                    );
                                return this._parentDataSource;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "role", {
                            get: function () {
                                return a.InternalToExternalEnumMappings.fieldRoleType.convert(
                                    this._fieldInfo.role
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "columnType", {
                            get: function () {
                                var e =
                                    this._fieldInfo.columnType ||
                                    n.ColumnType.Unknown;
                                return a.InternalToExternalEnumMappings.columnType.convert(
                                    e
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            e.prototype,
                            "isCalculatedField",
                            {
                                get: function () {
                                    return this._fieldInfo.isCalculatedField;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        Object.defineProperty(e.prototype, "isCombinedField", {
                            get: function () {
                                return this._fieldInfo.isCombinedField;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "isGenerated", {
                            get: function () {
                                return this._fieldInfo.isGenerated;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "isGeospatial", {
                            get: function () {
                                return this._fieldInfo.isGeospatial;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "isHidden", {
                            get: function () {
                                return this._fieldInfo.isHidden;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            e.prototype,
                            "isPresentOnPublishedDatasource",
                            {
                                get: function () {
                                    return this._fieldInfo
                                        .isPresentOnPublishedDatasource;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        e
                    );
                })();
            t.FieldImpl = o;
        },
        8552: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(6557),
                a = r(3008),
                o = r(8052),
                s = r(7480),
                l = r(1172),
                u = (function () {
                    function e(e, t) {
                        (this._registryId = t), this.setParameterInfo(e);
                    }
                    return (
                        Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return this._parameterInfo.name;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "currentValue", {
                            get: function () {
                                return o.DataValueFactory.MakeParameterDataValue(
                                    this._parameterInfo.currentValue,
                                    this._parameterInfo.dataType
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "dataType", {
                            get: function () {
                                return n.InternalToExternalEnumMappings.dataType.convert(
                                    this._parameterInfo.dataType
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "id", {
                            get: function () {
                                return this._globalFieldName;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "allowableValues", {
                            get: function () {
                                return this._allowableValues;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.changeValueAsync = function (e) {
                            var t = this;
                            s.ErrorHelpers.verifyParameter(e, "newValue");
                            var r = l.Param.serializeParameterValue(e);
                            return a.ApiServiceRegistry.get(this._registryId)
                                .getService("parameters-service")
                                .changeParameterValueAsync(
                                    this._globalFieldName,
                                    r
                                )
                                .then(function (e) {
                                    return (
                                        t.setParameterInfo(e), t.currentValue
                                    );
                                });
                        }),
                        (e.prototype.setParameterInfo = function (e) {
                            (this._parameterInfo = e),
                                (this._globalFieldName = e.fieldName);
                            var t,
                                r,
                                a,
                                s,
                                l,
                                u =
                                    n.InternalToExternalEnumMappings.allowableValues.convert(
                                        e.allowableValuesType
                                    );
                            u === i.ParameterValueType.List
                                ? (t = (e.allowableValues || []).map(function (
                                      t
                                  ) {
                                      return o.DataValueFactory.MakeParameterDataValue(
                                          t,
                                          e.dataType
                                      );
                                  }))
                                : u === i.ParameterValueType.Range &&
                                  ((r =
                                      e.minValue &&
                                      o.DataValueFactory.MakeParameterDataValue(
                                          e.minValue,
                                          e.dataType
                                      )),
                                  (a =
                                      e.maxValue &&
                                      o.DataValueFactory.MakeParameterDataValue(
                                          e.maxValue,
                                          e.dataType
                                      )),
                                  (s = e.stepSize),
                                  (l =
                                      e.dateStepPeriod &&
                                      n.InternalToExternalEnumMappings.dateStepPeriod.convert(
                                          e.dateStepPeriod
                                      ))),
                                (this._allowableValues = {
                                    type: u,
                                    allowableValues: t,
                                    minValue: r,
                                    maxValue: a,
                                    stepSize: s,
                                    dateStepPeriod: l,
                                });
                        }),
                        e
                    );
                })();
            t.ParameterImpl = u;
        },
        8332: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(3008),
                a = r(6664),
                o = r(7480),
                s = r(1172),
                l = r(2780),
                u = (function () {
                    function e(e, t) {
                        (this._sheetInfoImpl = e), (this._registryId = t);
                    }
                    return (
                        Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return this._sheetInfoImpl.name;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sheetType", {
                            get: function () {
                                return this._sheetInfoImpl.sheetType;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sheetPath", {
                            get: function () {
                                return this._sheetInfoImpl.sheetPath;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "size", {
                            get: function () {
                                return this._sheetInfoImpl.sheetSize;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "hidden", {
                            get: function () {
                                if (void 0 !== this._sheetInfoImpl.isHidden)
                                    return this._sheetInfoImpl.isHidden;
                                throw new a.TableauError(
                                    i.EmbeddingErrorCodes.ImplementationError,
                                    "isHidden not implemented"
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "active", {
                            get: function () {
                                if (void 0 !== this._sheetInfoImpl.isActive)
                                    return this._sheetInfoImpl.isActive;
                                throw new a.TableauError(
                                    i.EmbeddingErrorCodes.ImplementationError,
                                    "active not implemented"
                                );
                            },
                            set: function (e) {
                                void 0 !== this._sheetInfoImpl.isActive &&
                                    (this._sheetInfoImpl.active = e);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "index", {
                            get: function () {
                                if (void 0 !== this._sheetInfoImpl.index)
                                    return this._sheetInfoImpl.index;
                                throw new a.TableauError(
                                    i.EmbeddingErrorCodes.ImplementationError,
                                    "index not implemented"
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "url", {
                            get: function () {
                                if (void 0 !== this._sheetInfoImpl.url)
                                    return this._sheetInfoImpl.url;
                                throw new a.TableauError(
                                    i.EmbeddingErrorCodes.ImplementationError,
                                    "url not implemented"
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.getSheetSize = function () {
                            if (!l.SheetUtils.isValidSheetSize(this.size))
                                throw new a.TableauError(
                                    i.EmbeddingErrorCodes.InternalError,
                                    "size is not of type SheetSize"
                                );
                            return this.size;
                        }),
                        (e.prototype.findParameterAsync = function (e) {
                            return (
                                o.ErrorHelpers.verifyParameter(
                                    e,
                                    "parameterName"
                                ),
                                n.ApiServiceRegistry.get(this._registryId)
                                    .getService("parameters-service")
                                    .findParameterByNameAsync(e)
                            );
                        }),
                        (e.prototype.getParametersAsync = function () {
                            return n.ApiServiceRegistry.get(this._registryId)
                                .getService("parameters-service")
                                .getParametersForSheetAsync(this.sheetPath);
                        }),
                        (e.prototype.changeSizeAsync = function (e) {
                            var t = this,
                                r = new a.TableauError(
                                    i.EmbeddingErrorCodes.InvalidSize,
                                    "Invalid sheet size parameter"
                                );
                            if (!e || !e.behavior) throw r;
                            var o = this.normalizeSheetSize(e),
                                s =
                                    o.behavior ===
                                    i.SheetSizeBehavior.Automatic;
                            if (!s && !o.minSize && !o.maxSize) throw r;
                            if (!s && this.sheetType === i.SheetType.Worksheet)
                                throw new a.TableauError(
                                    i.EmbeddingErrorCodes.InvalidSizeBehaviorOnWorksheet,
                                    "Only SheetSizeBehavior.Automatic is allowed on Worksheets"
                                );
                            if (
                                s &&
                                this.getSheetSize().behavior === o.behavior
                            )
                                return Promise.resolve(e);
                            var u = this.processNewSize(o);
                            return n.ApiServiceRegistry.get(this._registryId)
                                .getService("size-service")
                                .changeSizeAsync(this.name, u)
                                .then(function () {
                                    return n.ApiServiceRegistry.get(
                                        t._registryId
                                    )
                                        .getService("client-info-service")
                                        .getClientInfoAsync()
                                        .then(function (e) {
                                            var r = e.publishedSheets.find(
                                                function (e) {
                                                    return e.name === t.name;
                                                }
                                            );
                                            if (!r)
                                                throw new a.TableauError(
                                                    i.SharedErrorCodes.InternalError,
                                                    "Can't find sheet with name " +
                                                        t.name
                                                );
                                            var n =
                                                l.SheetUtils.getSheetSizeFromSizeConstraints(
                                                    r.sizeConstraint
                                                );
                                            return (
                                                (t._sheetInfoImpl.sheetSize =
                                                    n),
                                                n
                                            );
                                        });
                                });
                        }),
                        (e.prototype.normalizeSheetSize = function (t) {
                            var r = t.behavior;
                            return (
                                o.ErrorHelpers.verifyEnumValue(
                                    r,
                                    i.SheetSizeBehavior,
                                    "SheetSizeBehavior"
                                ),
                                {
                                    behavior: r,
                                    minSize: e.parseDimensions(t.minSize),
                                    maxSize: e.parseDimensions(t.maxSize),
                                }
                            );
                        }),
                        (e.prototype.processNewSize = function (e) {
                            var t,
                                r,
                                n,
                                o,
                                l = e.behavior,
                                u = e.minSize,
                                c = e.maxSize,
                                d = !s.Param.isNullOrUndefined(
                                    null === (t = u) || void 0 === t
                                        ? void 0
                                        : t.width
                                ),
                                p = !s.Param.isNullOrUndefined(
                                    null === (r = u) || void 0 === r
                                        ? void 0
                                        : r.height
                                ),
                                h = !s.Param.isNullOrUndefined(
                                    null === (n = c) || void 0 === n
                                        ? void 0
                                        : n.width
                                ),
                                m = !s.Param.isNullOrUndefined(
                                    null === (o = c) || void 0 === o
                                        ? void 0
                                        : o.height
                                ),
                                y = d && p,
                                g = h && m;
                            switch (l) {
                                case i.SheetSizeBehavior.Automatic:
                                    return { behavior: l };
                                case i.SheetSizeBehavior.AtMost:
                                    if (!c || !g)
                                        throw new a.TableauError(
                                            i.EmbeddingErrorCodes.MissingMaxSize,
                                            "Missing maxSize for SheetSizeBehavior.AtMost"
                                        );
                                    if (
                                        (b = {
                                            width: c.width,
                                            height: c.height,
                                        }).width < 0 ||
                                        b.height < 0
                                    )
                                        throw new a.TableauError(
                                            i.EmbeddingErrorCodes.InvalidSize,
                                            "Size value cannot be less than zero"
                                        );
                                    return { behavior: l, maxSize: b };
                                case i.SheetSizeBehavior.AtLeast:
                                    if (!u || !y)
                                        throw new a.TableauError(
                                            i.EmbeddingErrorCodes.MissingMinSize,
                                            "Missing minSize for SheetSizeBehavior.AtLeast"
                                        );
                                    if (
                                        (f = {
                                            width: u.width,
                                            height: u.height,
                                        }).width < 0 ||
                                        f.height < 0
                                    )
                                        throw new a.TableauError(
                                            i.EmbeddingErrorCodes.InvalidSize,
                                            "Size value cannot be less than zero"
                                        );
                                    return { behavior: l, minSize: f };
                                case i.SheetSizeBehavior.Range:
                                    if (!(u && c && y && g))
                                        throw new a.TableauError(
                                            i.EmbeddingErrorCodes.MissingMinMaxSize,
                                            "Missing minSize or maxSize for SheetSizeBehavior.Range"
                                        );
                                    var f = {
                                            width: u.width,
                                            height: u.height,
                                        },
                                        b = {
                                            width: c.width,
                                            height: c.height,
                                        };
                                    if (
                                        f.width < 0 ||
                                        f.height < 0 ||
                                        b.width < 0 ||
                                        b.height < 0 ||
                                        f.width > b.width ||
                                        f.height > b.height
                                    )
                                        throw new a.TableauError(
                                            i.EmbeddingErrorCodes.InvalidSize,
                                            "Missing minSize or maxSize for SheetSizeBehavior.Range"
                                        );
                                    return {
                                        behavior: l,
                                        minSize: f,
                                        maxSize: b,
                                    };
                                case i.SheetSizeBehavior.Exactly:
                                    if (u && c) {
                                        if (y && g) {
                                            if (
                                                ((f = {
                                                    width: u.width,
                                                    height: u.height,
                                                }),
                                                (b = {
                                                    width: c.width,
                                                    height: c.height,
                                                }),
                                                f.width !== b.width ||
                                                    f.height !== b.height)
                                            )
                                                throw new a.TableauError(
                                                    i.EmbeddingErrorCodes.InvalidSize,
                                                    "Conflicting size values for SheetSizeBehavior.Exactly"
                                                );
                                            return {
                                                behavior: l,
                                                minSize: f,
                                                maxSize: b,
                                            };
                                        }
                                        if (y)
                                            return {
                                                behavior: l,
                                                minSize: (f = {
                                                    width: u.width,
                                                    height: u.height,
                                                }),
                                                maxSize: f,
                                            };
                                        if (g)
                                            return {
                                                behavior: l,
                                                minSize: (b = {
                                                    width: c.width,
                                                    height: c.height,
                                                }),
                                                maxSize: b,
                                            };
                                    }
                                    throw new a.TableauError(
                                        i.EmbeddingErrorCodes.InvalidSize,
                                        "Invalid sheet size parameter"
                                    );
                                default:
                                    throw new a.TableauError(
                                        i.SharedErrorCodes.InternalError,
                                        "Unsupported sheet size behavior: " + l
                                    );
                            }
                        }),
                        (e.parseDimensions = function (e) {
                            var t = { width: void 0, height: void 0 };
                            if (!e) return t;
                            var r = s.Param.tryParseNumber(e.width),
                                i = r.success,
                                n = r.parsed,
                                a = s.Param.tryParseNumber(e.height),
                                o = a.success,
                                l = a.parsed;
                            return i && o
                                ? { width: n, height: l }
                                : i
                                ? { width: n }
                                : o
                                ? { height: l }
                                : t;
                        }),
                        e
                    );
                })();
            t.SheetImpl = u;
        },
        1116: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = (function () {
                    function e(e, t, r, i, n, a, o) {
                        (this._name = e),
                            (this._sheetType = t),
                            (this._sheetSize = r),
                            (this._index = i),
                            (this._isActive = n),
                            (this._isHidden = a),
                            (this._url = o);
                    }
                    return (
                        Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return this._name;
                            },
                            set: function (e) {
                                this._name = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sheetSize", {
                            get: function () {
                                return this._sheetSize;
                            },
                            set: function (e) {
                                this._sheetSize = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sheetType", {
                            get: function () {
                                return this._sheetType;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sheetPath", {
                            get: function () {
                                return {
                                    sheetName: this.name,
                                    isDashboard:
                                        this.sheetType ===
                                        i.SheetType.Dashboard,
                                };
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "index", {
                            get: function () {
                                return this._index;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "isActive", {
                            get: function () {
                                return this._isActive;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "active", {
                            set: function (e) {
                                this._isActive = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "isHidden", {
                            get: function () {
                                return this._isHidden;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "url", {
                            get: function () {
                                return this._url;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            t.SheetInfoImpl = n;
        },
        5144: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e) {
                    (this._eventType = e), (this._handlers = []);
                }
                return (
                    Object.defineProperty(e.prototype, "eventType", {
                        get: function () {
                            return this._eventType;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.addEventListener = function (e) {
                        var t = this;
                        return (
                            this._handlers.push(e),
                            function () {
                                return t.removeEventListener(e);
                            }
                        );
                    }),
                    (e.prototype.removeEventListener = function (e) {
                        var t = this._handlers.length;
                        return (
                            (this._handlers = this._handlers.filter(function (
                                t
                            ) {
                                return t !== e;
                            })),
                            t > this._handlers.length
                        );
                    }),
                    (e.prototype.triggerEvent = function (e) {
                        for (var t = 0, r = this._handlers; t < r.length; t++) {
                            var i = r[t];
                            try {
                                i(e());
                            } catch (e) {
                                continue;
                            }
                        }
                    }),
                    e
                );
            })();
            t.SingleEventManagerImpl = r;
        },
        6804: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(7419),
                o = r(3008),
                s = r(6664),
                l = r(7480),
                u = r(3036),
                c = r(8332),
                d = r(2608),
                p = r(6068),
                h = (function (e) {
                    function t(t, r, i, n) {
                        var a = e.call(this, t, n) || this;
                        return (
                            (a._sheetInfoImpl = t),
                            (a._publishedSheetInfos = i),
                            (a._registryId = n),
                            (a._storyPointInfoImpls = []),
                            (a._deferred = new u.ShortLivedDeferred()),
                            a.initializeStory(r),
                            a
                        );
                    }
                    return (
                        n(t, e),
                        (t.prototype.initializeStory = function (e) {
                            var t = this;
                            e.storyPoints.forEach(function (r) {
                                var i = r.index === e.activeStoryPointIndex,
                                    n = new p.StoryPointInfoImpl(
                                        r.caption,
                                        r.index,
                                        r.storyPointId,
                                        i,
                                        r.updated,
                                        t
                                    );
                                t._storyPointInfoImpls.push(n),
                                    i &&
                                        (t._activeStoryPointImpl =
                                            new d.StoryPointImpl(
                                                n,
                                                t._publishedSheetInfos,
                                                t._registryId,
                                                r.containedSheetInfo
                                            ));
                            });
                        }),
                        (t.prototype.updateStoryInfo = function (e, t) {
                            if (this._storyPointInfoImpls) {
                                var r = this._storyPointInfoImpls[e];
                                if (r.storyPointId !== t.storyPointId)
                                    throw new s.TableauError(
                                        a.EmbeddingErrorCodes.StoryPointIdMismatch,
                                        "We should not be updating a story point when the IDs don't match. Existing storyPointID=" +
                                            r.storyPointId +
                                            ", newStoryPointID=" +
                                            t.storyPointId
                                    );
                                (r.caption = t.caption),
                                    (r.updated = t.updated),
                                    this._activeStoryPointImpl.storyPointId ===
                                        t.storyPointId &&
                                        (this._activeStoryPointImpl.updated =
                                            r.updated);
                            }
                        }),
                        (t.prototype.updateStory = function (e) {
                            var t = this;
                            this._storyPointInfoImpls &&
                                (this._storyPointInfoImpls.forEach(function (
                                    r
                                ) {
                                    r.storyPointId === e.storyPointId
                                        ? ((r.caption = e.caption),
                                          (r.index = e.index),
                                          (r.active = !0),
                                          (r.updated = e.updated),
                                          (t._activeStoryPointImpl =
                                              new d.StoryPointImpl(
                                                  r,
                                                  t._publishedSheetInfos,
                                                  t._registryId,
                                                  e.containedSheetInfo
                                              )))
                                        : (r.active = !1);
                                }),
                                this.activeStoryPoint &&
                                    this._deferred.resolve(
                                        this.activeStoryPoint
                                    ));
                        }),
                        Object.defineProperty(t.prototype, "activeStoryPoint", {
                            get: function () {
                                return this._activeStoryPointImpl;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "storyPointsInfo", {
                            get: function () {
                                return this._storyPointInfoImpls;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "isActive", {
                            get: function () {
                                return this._sheetInfoImpl.active;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "isHidden", {
                            get: function () {
                                return !!this._sheetInfoImpl.isHidden;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.activateNextStoryPointAsync = function () {
                            if (
                                this._activeStoryPointImpl.index ===
                                this._storyPointInfoImpls.length - 1
                            )
                                return Promise.resolve(
                                    this._activeStoryPointImpl
                                );
                            var e = this._deferred.getNewPromiseOrThrowIfBusy();
                            return (
                                o.ApiServiceRegistry.get(this._registryId)
                                    .getService("story-activation-service")
                                    .activateNextStoryPointAsync(),
                                e
                            );
                        }),
                        (t.prototype.activatePreviousStoryPointAsync =
                            function () {
                                if (0 === this._activeStoryPointImpl.index)
                                    return Promise.resolve(
                                        this._activeStoryPointImpl
                                    );
                                var e =
                                    this._deferred.getNewPromiseOrThrowIfBusy();
                                return (
                                    o.ApiServiceRegistry.get(this._registryId)
                                        .getService("story-activation-service")
                                        .activatePreviousStoryPointAsync(),
                                    e
                                );
                            }),
                        (t.prototype.activateStoryPointAsync = function (e) {
                            if (
                                (l.ErrorHelpers.verifyParameter(e, "index"),
                                l.ErrorHelpers.verifyParameterType(
                                    e,
                                    "number",
                                    "index"
                                ),
                                e < 0 || e >= this._storyPointInfoImpls.length)
                            )
                                throw new s.TableauError(
                                    a.EmbeddingErrorCodes.IndexOutOfRange,
                                    "The index passed to this command is out of range."
                                );
                            if (e === this._activeStoryPointImpl.index)
                                return Promise.resolve(
                                    this._activeStoryPointImpl
                                );
                            var t = this._deferred.getNewPromiseOrThrowIfBusy();
                            return (
                                o.ApiServiceRegistry.get(this._registryId)
                                    .getService("story-activation-service")
                                    .activateStoryPointAsync(e),
                                t
                            );
                        }),
                        (t.prototype.revertStoryPointAsync = function (e) {
                            var t = this;
                            if (
                                (l.ErrorHelpers.verifyParameter(e, "index"),
                                l.ErrorHelpers.verifyParameterType(
                                    e,
                                    "number",
                                    "index"
                                ),
                                e < 0 || e >= this._storyPointInfoImpls.length)
                            )
                                throw new s.TableauError(
                                    a.EmbeddingErrorCodes.IndexOutOfRange,
                                    "The index passed to this command is out of range."
                                );
                            return o.ApiServiceRegistry.get(this._registryId)
                                .getService("story-activation-service")
                                .revertStoryPointAsync(e)
                                .then(function (e) {
                                    return (
                                        t.updateStoryInfo(e.index, e),
                                        new p.StoryPointInfoImpl(
                                            e.caption,
                                            e.index,
                                            e.storyPointId,
                                            !1,
                                            e.updated,
                                            t
                                        )
                                    );
                                });
                        }),
                        (t.prototype.clearPendingPromises = function () {
                            this._deferred &&
                                this._deferred.reject(
                                    "All pending promises cleared"
                                );
                        }),
                        t
                    );
                })(c.SheetImpl);
            t.StoryImpl = h;
        },
        2608: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(6664),
                a = r(2780),
                o = r(1940),
                s = r(1116),
                l = r(6500),
                u = (function () {
                    function e(e, t, r, i) {
                        (this._storyPointInfoImpl = e),
                            i &&
                                (this._containedSheetImpl =
                                    this.createContainedSheet(i, t, r));
                    }
                    return (
                        Object.defineProperty(e.prototype, "index", {
                            get: function () {
                                return this._storyPointInfoImpl.index;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "caption", {
                            get: function () {
                                return this._storyPointInfoImpl.caption;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "active", {
                            get: function () {
                                return this._storyPointInfoImpl.active;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "updated", {
                            get: function () {
                                return this._storyPointInfoImpl.updated;
                            },
                            set: function (e) {
                                this._storyPointInfoImpl.updated = e;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "parentStory", {
                            get: function () {
                                return this._storyPointInfoImpl.parentStory;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "containedSheet", {
                            get: function () {
                                return this._containedSheetImpl;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "storyPointId", {
                            get: function () {
                                return this._storyPointInfoImpl.storyPointId;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.createContainedSheet = function (e, t, r) {
                            var u,
                                c = a.SheetUtils.getPublishedSheetInfoByName(
                                    e.name,
                                    t
                                ),
                                d = a.SheetUtils.createAutomaticSize(),
                                p = void 0 === c,
                                h = c ? c.url : "",
                                m = new s.SheetInfoImpl(
                                    e.name,
                                    a.SheetUtils.getSheetTypeEnum(e.sheetType),
                                    d,
                                    -1,
                                    !1,
                                    p,
                                    h
                                );
                            switch (m.sheetType) {
                                case i.SheetType.Worksheet:
                                    var y = { worksheet: m.name };
                                    u = new l.WorksheetImpl(
                                        m,
                                        r,
                                        y,
                                        null,
                                        this
                                    );
                                    break;
                                case i.SheetType.Dashboard:
                                    var g = {
                                        sheetName: m.name,
                                        isDashboard: !0,
                                    };
                                    u = new o.DashboardImpl(
                                        m,
                                        e.dashboardZones,
                                        g,
                                        r,
                                        this
                                    );
                                    break;
                                default:
                                    throw new n.TableauError(
                                        i.SharedErrorCodes.ServerError,
                                        "Invalid SheetType"
                                    );
                            }
                            return u;
                        }),
                        e
                    );
                })();
            t.StoryPointImpl = u;
        },
        6068: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e, t, r, i, n, a) {
                    (this._caption = e),
                        (this._index = t),
                        (this._storyPointId = r),
                        (this._active = i),
                        (this._updated = n),
                        (this._parentStoryImpl = a);
                }
                return (
                    Object.defineProperty(e.prototype, "caption", {
                        get: function () {
                            return this._caption;
                        },
                        set: function (e) {
                            this._caption = e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "index", {
                        get: function () {
                            return this._index;
                        },
                        set: function (e) {
                            this._index = e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "storyPointId", {
                        get: function () {
                            return this._storyPointId;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "active", {
                        get: function () {
                            return this._active;
                        },
                        set: function (e) {
                            this._active = e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "updated", {
                        get: function () {
                            return this._updated;
                        },
                        set: function (e) {
                            this._updated = e;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "parentStory", {
                        get: function () {
                            return this._parentStoryImpl;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.StoryPointInfoImpl = r;
        },
        3044: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.WorkbookImpl = function () {};
        },
        6500: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(7419),
                o = r(7419),
                s = r(8340),
                l = r(624),
                u = r(3483),
                c = r(3008),
                d = r(6664),
                p = r(7480),
                h = r(2180),
                m = (function (e) {
                    function t(t, r, i, n, a, o, s) {
                        void 0 === o && (o = null), void 0 === s && (s = null);
                        var l = e.call(this, t, r) || this;
                        return (
                            (l._visualId = i),
                            (l._parentDashboardImpl = n),
                            (l._parentStoryPointImpl = a),
                            (l._backgroundColor = o),
                            (l._formatting = s),
                            l
                        );
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "parentDashboard", {
                            get: function () {
                                return this._parentDashboardImpl;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "parentStoryPoint", {
                            get: function () {
                                return this._parentStoryPointImpl;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "visualId", {
                            get: function () {
                                return this._visualId;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.getMaxPageRowLimit = function () {
                            return 1e4;
                        }),
                        Object.defineProperty(t.prototype, "backgroundColor", {
                            get: function () {
                                return this._backgroundColor;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "formatting", {
                            get: function () {
                                return this._formatting;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.applyFilterAsync = function (e, t, r, i) {
                            return (
                                p.ErrorHelpers.verifyEnumValue(
                                    r,
                                    a.FilterUpdateType,
                                    "Contract.FilterUpdateType"
                                ),
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("filter-service")
                                    .applyFilterAsync(this.visualId, e, t, r, i)
                            );
                        }),
                        (t.prototype.applyRangeFilterAsync = function (e, t) {
                            return (
                                p.ErrorHelpers.verifyParameter(e, "fieldName"),
                                p.ErrorHelpers.verifyParameter(
                                    t,
                                    "filterOptions"
                                ),
                                t.nullOption
                                    ? p.ErrorHelpers.verifyEnumValue(
                                          t.nullOption,
                                          o.FilterNullOption,
                                          "FilterNullOption"
                                      )
                                    : p.ErrorHelpers.verifyRangeParamType(
                                          t.min,
                                          t.max
                                      ),
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("filter-service")
                                    .applyRangeFilterAsync(this.visualId, e, t)
                            );
                        }),
                        (t.prototype.applyHierarchicalFilterAsync = function (
                            e,
                            t,
                            r,
                            i
                        ) {
                            if (
                                (p.ErrorHelpers.verifyParameter(e, "fieldName"),
                                p.ErrorHelpers.verifyParameter(t, "values"),
                                p.ErrorHelpers.verifyEnumValue(
                                    r,
                                    a.FilterUpdateType,
                                    "Contract.FilterUpdateType"
                                ),
                                !Array.isArray(t) && !t.levels)
                            )
                                throw new d.TableauError(
                                    o.ErrorCodes.InvalidParameter,
                                    "values parameter for applyHierarchicalFilterAsync must be an array or contain a levels key"
                                );
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("filter-service")
                                    .applyHierarchicalFilterAsync(
                                        this.visualId,
                                        e,
                                        t,
                                        r,
                                        i
                                    )
                            );
                        }),
                        (t.prototype.clearFilterAsync = function (e) {
                            return (
                                p.ErrorHelpers.verifyParameter(e, "fieldName"),
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("filter-service")
                                    .clearFilterAsync(this.visualId, e)
                            );
                        }),
                        (t.prototype.applyRelativeDateFilterAsync = function (
                            e,
                            t
                        ) {
                            return (
                                p.ErrorHelpers.verifyStringParameter(
                                    e,
                                    "fieldName"
                                ),
                                p.ErrorHelpers.verifyParameter(t, "options"),
                                p.ErrorHelpers.verifyEnumValue(
                                    t.periodType,
                                    o.PeriodType,
                                    "PeriodType"
                                ),
                                p.ErrorHelpers.verifyEnumValue(
                                    t.rangeType,
                                    o.DateRangeType,
                                    "DateRangeType"
                                ),
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("filter-service")
                                    .applyRelativeDateFilterAsync(
                                        this.visualId,
                                        e,
                                        t
                                    )
                            );
                        }),
                        (t.prototype.getDataSourcesAsync = function () {
                            var e = this;
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("data-source-service")
                                    .getDataSourcesAsync(this.visualId)
                                    .then(function (t) {
                                        var r = t,
                                            i =
                                                r.worksheetDataSchemaMap[
                                                    e.name
                                                ],
                                            n = [],
                                            a = i.primaryDataSource;
                                        n.push(
                                            e.createDataSourceFromInfo(
                                                r.dataSources[a]
                                            )
                                        );
                                        for (
                                            var o = 0,
                                                s = i.referencedDataSourceList;
                                            o < s.length;
                                            o++
                                        ) {
                                            var l = s[o];
                                            l !== a &&
                                                n.push(
                                                    e.createDataSourceFromInfo(
                                                        r.dataSources[l]
                                                    )
                                                );
                                        }
                                        return n;
                                    })
                            );
                        }),
                        (t.prototype.getFiltersAsync = function () {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("filter-service")
                                    .getFiltersAsync(this.visualId)
                            );
                        }),
                        (t.prototype.getSelectedMarksAsync = function () {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("get-data-service")
                                    .getSelectedMarksAsync(this.visualId)
                            );
                        }),
                        (t.prototype.getHighlightedMarksAsync = function () {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("get-data-service")
                                    .getHighlightedMarksAsync(this.visualId)
                            );
                        }),
                        (t.prototype.getSummaryDataAsync = function (e) {
                            var t;
                            return (
                                this.verifyActiveSheet(),
                                (e = e || {}),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("get-data-service")
                                    .getUnderlyingDataAsync(
                                        this.visualId,
                                        u.GetDataType.Summary,
                                        !!e.ignoreAliases,
                                        !!e.ignoreSelection,
                                        !0,
                                        e.columnsToIncludeById || [],
                                        e.maxRows || 0,
                                        e.includeDataValuesOption ||
                                            o.IncludeDataValuesOption.AllValues,
                                        null !=
                                            (t = e.applyWorksheetFormatting) &&
                                            t
                                    )
                            );
                        }),
                        (t.prototype.getSummaryDataReaderAsync = function (
                            e,
                            t
                        ) {
                            var r;
                            return (
                                this.verifyActiveSheet(),
                                (t = t || {}),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("get-data-service")
                                    .getSummaryDataReaderAsync(
                                        this.visualId,
                                        e || this.getMaxPageRowLimit(),
                                        !!t.ignoreAliases,
                                        !!t.ignoreSelection,
                                        !0,
                                        t.columnsToIncludeById || [],
                                        t.includeDataValuesOption ||
                                            o.IncludeDataValuesOption.AllValues,
                                        null !=
                                            (r = t.applyWorksheetFormatting) &&
                                            r
                                    )
                            );
                        }),
                        (t.prototype.getVisualSpecificationAsync = function () {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("visual-model-service")
                                    .getVisualSpecificationAsync(this.visualId)
                            );
                        }),
                        (t.prototype.addMarksCardFieldsAsync = function (
                            e,
                            t,
                            r,
                            i
                        ) {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("visual-model-service")
                                    .addMarksCardFieldsAsync(
                                        this.visualId,
                                        e,
                                        t,
                                        r,
                                        i
                                    )
                            );
                        }),
                        (t.prototype.moveMarksCardFieldAsync = function (
                            e,
                            t,
                            r,
                            i
                        ) {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("visual-model-service")
                                    .moveMarksCardFieldAsync(
                                        this.visualId,
                                        e,
                                        t,
                                        r,
                                        i
                                    )
                            );
                        }),
                        (t.prototype.spliceMarksCardFieldsAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n
                        ) {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("visual-model-service")
                                    .spliceMarksCardFieldsAsync(
                                        this.visualId,
                                        e,
                                        t,
                                        r,
                                        i,
                                        n
                                    )
                            );
                        }),
                        (t.prototype.getSummaryColumnsInfoAsync = function () {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("get-data-service")
                                    .getSummaryColumnsInfoAsync(this.visualId)
                            );
                        }),
                        (t.prototype.getUnderlyingDataAsync = function (e) {
                            var t;
                            return (
                                this.verifyActiveSheet(),
                                (e = e || {}),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("get-data-service")
                                    .getUnderlyingDataAsync(
                                        this.visualId,
                                        u.GetDataType.Underlying,
                                        !!e.ignoreAliases,
                                        !!e.ignoreSelection,
                                        !!e.includeAllColumns,
                                        e.columnsToIncludeById || [],
                                        e.maxRows || 0,
                                        e.includeDataValuesOption ||
                                            o.IncludeDataValuesOption.AllValues,
                                        null !=
                                            (t = e.applyWorksheetFormatting) &&
                                            t
                                    )
                            );
                        }),
                        (t.prototype.getUnderlyingTablesAsync = function () {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("data-source-service")
                                    .getUnderlyingTablesAsync(this.visualId)
                                    .then(function (e) {
                                        return e.map(function (e) {
                                            return new l.LogicalTable(e);
                                        });
                                    })
                            );
                        }),
                        (t.prototype.getUnderlyingTableDataAsync = function (
                            e,
                            t
                        ) {
                            var r;
                            return (
                                this.verifyActiveSheet(),
                                (t = t || {}),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("get-data-service")
                                    .getUnderlyingTableDataAsync(
                                        this.visualId,
                                        e,
                                        !!t.ignoreAliases,
                                        !!t.ignoreSelection,
                                        !!t.includeAllColumns,
                                        t.columnsToIncludeById || [],
                                        t.maxRows || 0,
                                        t.includeDataValuesOption ||
                                            o.IncludeDataValuesOption.AllValues,
                                        null !=
                                            (r = t.applyWorksheetFormatting) &&
                                            r
                                    )
                            );
                        }),
                        (t.prototype.getUnderlyingTableDataReaderAsync =
                            function (e, t, r) {
                                var i;
                                return (
                                    this.verifyActiveSheet(),
                                    (r = r || {}),
                                    c.ApiServiceRegistry.get(this._registryId)
                                        .getService("get-data-service")
                                        .getUnderlyingTableDataReaderAsync(
                                            this.visualId,
                                            e,
                                            t || this.getMaxPageRowLimit(),
                                            !!r.ignoreAliases,
                                            !!r.ignoreSelection,
                                            !!r.includeAllColumns,
                                            r.columnsToIncludeById || [],
                                            r.includeDataValuesOption ||
                                                o.IncludeDataValuesOption
                                                    .AllValues,
                                            null !=
                                                (i =
                                                    r.applyWorksheetFormatting) &&
                                                i
                                        )
                                );
                            }),
                        (t.prototype.clearSelectedMarksAsync = function () {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("selection-service")
                                    .clearSelectedMarksAsync(this.visualId)
                            );
                        }),
                        (t.prototype.selectMarksByValueAsync = function (e, t) {
                            return (
                                p.ErrorHelpers.verifyParameter(e, "fieldName"),
                                p.ErrorHelpers.verifyEnumValue(
                                    t,
                                    o.SelectionUpdateType,
                                    "SelectionUpdateType"
                                ),
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("selection-service")
                                    .selectMarksByValueAsync(
                                        this.visualId,
                                        e,
                                        t
                                    )
                            );
                        }),
                        (t.prototype.selectMarksByIdAsync = function (e, t) {
                            return (
                                p.ErrorHelpers.verifyParameter(e, "fieldName"),
                                p.ErrorHelpers.verifyEnumValue(
                                    t,
                                    o.SelectionUpdateType,
                                    "SelectionUpdateType"
                                ),
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("selection-service")
                                    .selectMarksByIdAsync(this.visualId, e, t)
                            );
                        }),
                        (t.prototype.annotateMarkAsync = function (e, t) {
                            return (
                                p.ErrorHelpers.verifyParameter(e, "mark"),
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("annotation-service")
                                    .annotateMarkAsync(this.visualId, e, t)
                            );
                        }),
                        (t.prototype.getAnnotationsAsync = function () {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("annotation-service")
                                    .getAnnotationsAsync(this.visualId)
                            );
                        }),
                        (t.prototype.removeAnnotationAsync = function (e) {
                            return (
                                p.ErrorHelpers.verifyParameter(e, "annotation"),
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("annotation-service")
                                    .removeAnnotationAsync(this.visualId, e)
                            );
                        }),
                        (t.prototype.appendContextMenuAsync = function (e, t) {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("external-context-menu-service")
                                    .appendContextMenuAsync(
                                        this.visualId.worksheet,
                                        e,
                                        t
                                    )
                            );
                        }),
                        (t.prototype.removeContextMenuAsync = function (e, t) {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("external-context-menu-service")
                                    .removeContextMenuAsync(
                                        this.visualId.worksheet,
                                        e,
                                        t
                                    )
                            );
                        }),
                        (t.prototype.executeContextMenuAsync = function (e, t) {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("external-context-menu-service")
                                    .executeContextMenuAsync(
                                        this.visualId.worksheet,
                                        e,
                                        t
                                    )
                            );
                        }),
                        (t.prototype.renameContextMenuAsync = function (
                            e,
                            t,
                            r
                        ) {
                            return (
                                this.verifyActiveSheet(),
                                c.ApiServiceRegistry.get(this._registryId)
                                    .getService("external-context-menu-service")
                                    .renameContextMenuAsync(
                                        this.visualId.worksheet,
                                        e,
                                        t,
                                        r
                                    )
                            );
                        }),
                        (t.prototype.hoverTupleAsync = function (e, t, r) {
                            return this.isInsideDashboardExtension()
                                ? Promise.reject(
                                      new d.TableauError(
                                          a.SharedErrorCodes.ImplementationError,
                                          "hoverTupleAsync is not supported in dashboard extensions"
                                      )
                                  )
                                : c.ApiServiceRegistry.get(this._registryId)
                                      .getService("selection-service")
                                      .hoverTupleAsync(this.visualId, e, t, r);
                        }),
                        (t.prototype.selectTuplesAsync = function (e, t, r) {
                            return this.isInsideDashboardExtension()
                                ? Promise.reject(
                                      new d.TableauError(
                                          a.SharedErrorCodes.ImplementationError,
                                          "selectTuplesAsync is not supported in dashboard extensions"
                                      )
                                  )
                                : c.ApiServiceRegistry.get(this._registryId)
                                      .getService("selection-service")
                                      .selectTuplesAsync(
                                          this.visualId,
                                          e,
                                          t,
                                          r
                                      );
                        }),
                        (t.prototype.getTooltipTextAsync = function (e) {
                            return this.isInsideDashboardExtension()
                                ? Promise.reject(
                                      new d.TableauError(
                                          a.SharedErrorCodes.ImplementationError,
                                          "getTooltipTextAsync is not supported in dashboard extensions"
                                      )
                                  )
                                : c.ApiServiceRegistry.get(this._registryId)
                                      .getService("accessibility")
                                      .getTooltipTextAsync(this.visualId, e);
                        }),
                        (t.prototype.leaveMarkNavigationAsync = function () {
                            return this.isInsideDashboardExtension()
                                ? Promise.reject(
                                      new d.TableauError(
                                          a.SharedErrorCodes.ImplementationError,
                                          "leaveMarkNavigationAsync is not supported in dashboard extensions"
                                      )
                                  )
                                : c.ApiServiceRegistry.get(this._registryId)
                                      .getService("accessibility")
                                      .leaveMarkNavigationAsync(this.visualId);
                        }),
                        (t.prototype.editAliasesDialogAsync = function (e) {
                            return c.ApiServiceRegistry.get(this._registryId)
                                .getService("visual-model-service")
                                .editAliasesDialogAsync(e);
                        }),
                        (t.prototype.createDataSourceFromInfo = function (e) {
                            var t = new h.DataSourceImpl(e, this._registryId),
                                r = new s.DataSource(t);
                            return t.initializeWithPublicInterfaces(r), r;
                        }),
                        (t.prototype.verifyActiveSheet = function () {
                            var e = this.active,
                                t = this.isInsideActiveDashboard(),
                                r = this.isInsideActiveStoryPoint();
                            if (!e && !t && !r)
                                throw new d.TableauError(
                                    o.SharedErrorCodes.NotActiveSheet,
                                    "Operation not allowed on non-active sheet"
                                );
                        }),
                        (t.prototype.isInsideActiveStoryPoint = function () {
                            return (
                                this._parentStoryPointImpl &&
                                this._parentStoryPointImpl.active
                            );
                        }),
                        (t.prototype.isInsideActiveDashboard = function () {
                            return (
                                this._parentDashboardImpl &&
                                this._parentDashboardImpl.active
                            );
                        }),
                        (t.prototype.isInsideDashboardExtension = function () {
                            return null !== this._parentDashboardImpl;
                        }),
                        t
                    );
                })(r(8332).SheetImpl);
            t.WorksheetImpl = m;
        },
        624: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e) {
                    this._logicalTable = e;
                }
                return (
                    Object.defineProperty(e.prototype, "id", {
                        get: function () {
                            return this._logicalTable.id;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "caption", {
                        get: function () {
                            return this._logicalTable.caption;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.LogicalTable = r;
        },
        5064: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            t.TooltipTextRequestModel = function (e, t) {
                (this.visualIdPresModel = e), (this.tupleId = t);
            };
        },
        6296: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(7419),
                o = r(3008),
                s = r(7480),
                l = (function () {
                    function e(e, t, r, i, n) {
                        (this._worksheetName = e),
                            (this._fieldName = t),
                            (this._filterType = r),
                            (this._fieldId = i),
                            (this._registryId = n);
                    }
                    return (
                        Object.defineProperty(e.prototype, "worksheetName", {
                            get: function () {
                                return this._worksheetName;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "fieldName", {
                            get: function () {
                                return this._fieldName;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "fieldId", {
                            get: function () {
                                return this._fieldId;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "filterType", {
                            get: function () {
                                return this._filterType;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.getFieldAsync = function () {
                            return o.ApiServiceRegistry.get(this._registryId)
                                .getService("data-source-service")
                                .getFieldAsync(this._fieldId);
                        }),
                        (e.prototype.getAppliedWorksheetsAsync = function () {
                            return o.ApiServiceRegistry.get(this._registryId)
                                .getService("filter-service")
                                .getAppliedWorksheetsAsync(
                                    this._worksheetName,
                                    this._fieldId
                                );
                        }),
                        (e.prototype.setAppliedWorksheetsAsync = function (e) {
                            s.ErrorHelpers.verifyParameter(
                                e,
                                "applyToWorksheets"
                            );
                            var t = new Set(e);
                            return o.ApiServiceRegistry.get(this._registryId)
                                .getService("filter-service")
                                .setAppliedWorksheetsAsync(
                                    this._worksheetName,
                                    this._fieldName,
                                    this._fieldId,
                                    Array.from(t)
                                );
                        }),
                        e
                    );
                })();
            t.Filter = l;
            var u = (function (e) {
                function t(t, r, i, n, a, o, s, l) {
                    var u = e.call(this, t, r, n, i, a) || this;
                    return (
                        (u._appliedValues = o),
                        (u._isExcludeMode = s),
                        (u._isAllSelected = l),
                        u
                    );
                }
                return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "isAllSelected", {
                        get: function () {
                            return this._isAllSelected;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "appliedValues", {
                        get: function () {
                            return this._appliedValues;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "isExcludeMode", {
                        get: function () {
                            return this._isExcludeMode;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.getDomainAsync = function (e) {
                        return (
                            e || (e = a.FilterDomainType.Relevant),
                            s.ErrorHelpers.verifyEnumValue(
                                e,
                                a.FilterDomainType,
                                "FilterDomainType"
                            ),
                            o.ApiServiceRegistry.get(this._registryId)
                                .getService("filter-service")
                                .getCategoricalDomainAsync(
                                    this._worksheetName,
                                    this._fieldId,
                                    e
                                )
                        );
                    }),
                    t
                );
            })(l);
            t.CategoricalFilter = u;
            var c = (function () {
                function e(e, t, r) {
                    (this._value = e),
                        (this._hierarchicalPath = t),
                        (this._level = r);
                }
                return (
                    Object.defineProperty(e.prototype, "value", {
                        get: function () {
                            return this._value;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "hierarchicalPath", {
                        get: function () {
                            return this._hierarchicalPath;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "level", {
                        get: function () {
                            return this._level;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.HierarchicalDataValue = c;
            var d = (function () {
                function e(e, t) {
                    (this._name = e), (this._levelSelectionState = t);
                }
                return (
                    Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this._name;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "levelSelectionState", {
                        get: function () {
                            return this._levelSelectionState;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.HierarchicalLevelDetail = d;
            var p = (function (e) {
                function t(t, r, i, n, a, o, s, l, u, c, d) {
                    var p = e.call(this, t, r, n, i, a) || this;
                    return (
                        (p._dimensionName = o),
                        (p._hierarchyCaption = s),
                        (p._numberOfLevels = l),
                        (p._levelDetails = u),
                        (p._appliedValues = c),
                        (p._isAllSelected = d),
                        p
                    );
                }
                return (
                    n(t, e),
                    (t.prototype.getDomainAsync = function (e) {
                        throw new Error("Method not implemented.");
                    }),
                    Object.defineProperty(t.prototype, "dimensionName", {
                        get: function () {
                            return this._dimensionName;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "hierarchyCaption", {
                        get: function () {
                            return this._hierarchyCaption;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "numberOfLevels", {
                        get: function () {
                            return this._numberOfLevels;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "levelDetails", {
                        get: function () {
                            return this._levelDetails;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "isAllSelected", {
                        get: function () {
                            return this._isAllSelected;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "appliedValues", {
                        get: function () {
                            return this._appliedValues;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    t
                );
            })(l);
            t.HierarchicalFilter = p;
            var h = (function (e) {
                function t(t, r, i, n, a, o, s, l) {
                    var u = e.call(this, t, r, n, i, a) || this;
                    return (
                        (u._min = o),
                        (u._max = s),
                        (u._includeNullValues = l),
                        u
                    );
                }
                return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "minValue", {
                        get: function () {
                            return this._min;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "maxValue", {
                        get: function () {
                            return this._max;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "includeNullValues", {
                        get: function () {
                            return this._includeNullValues;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (t.prototype.getDomainAsync = function (e) {
                        var t = o.ApiServiceRegistry.get(
                            this._registryId
                        ).getService("filter-service");
                        return (
                            e || (e = a.FilterDomainType.Relevant),
                            s.ErrorHelpers.verifyEnumValue(
                                e,
                                a.FilterDomainType,
                                "FilterDomainType"
                            ),
                            t.getRangeDomainAsync(
                                this._worksheetName,
                                this._fieldId,
                                e
                            )
                        );
                    }),
                    t
                );
            })(l);
            t.RangeFilter = h;
            var m = (function (e) {
                function t(t, r, i, n, a, o, s, l, u) {
                    var c = e.call(this, t, r, n, i, a) || this;
                    return (
                        (c._anchorDate = o),
                        (c._periodType = s),
                        (c._rangeType = l),
                        (c._rangeN = u),
                        c
                    );
                }
                return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "anchorDate", {
                        get: function () {
                            return this._anchorDate;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "periodType", {
                        get: function () {
                            return this._periodType;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "rangeType", {
                        get: function () {
                            return this._rangeType;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "rangeN", {
                        get: function () {
                            return this._rangeN;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    t
                );
            })(l);
            t.RelativeDateFilter = m;
            var y = (function () {
                function e(e, t) {
                    (this._values = e), (this._domainType = t);
                }
                return (
                    Object.defineProperty(e.prototype, "values", {
                        get: function () {
                            return this._values;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "type", {
                        get: function () {
                            return this._domainType;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.CategoricalDomain = y;
            var g = (function () {
                function e(e, t, r) {
                    (this._min = e), (this._max = t), (this._domainType = r);
                }
                return (
                    Object.defineProperty(e.prototype, "type", {
                        get: function () {
                            return this._domainType;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "min", {
                        get: function () {
                            return this._min;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "max", {
                        get: function () {
                            return this._max;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.RangeDomain = g;
        },
        5068: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e, t, r, i, n, a) {
                    (this._data = e),
                        (this._columns = t),
                        (this._totalRowCount = r),
                        (this._isTotalRowCountLimited = i),
                        (this._isSummaryData = n),
                        (this._marksInfo = a),
                        (this._name = n
                            ? "Summary Data Table"
                            : "Underlying Data Table");
                }
                return (
                    Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this._name;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "data", {
                        get: function () {
                            return this._data;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "columns", {
                        get: function () {
                            return this._columns;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "marksInfo", {
                        get: function () {
                            return this._marksInfo;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "totalRowCount", {
                        get: function () {
                            return this._totalRowCount;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(
                        e.prototype,
                        "isTotalRowCountLimited",
                        {
                            get: function () {
                                return this._isTotalRowCountLimited;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }
                    ),
                    Object.defineProperty(e.prototype, "isSummaryData", {
                        get: function () {
                            return this._isSummaryData;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.DataTable = r;
            var i = (function () {
                function e(e, t, r) {
                    (this._type = e), (this._color = t), (this._tupleId = r);
                }
                return (
                    Object.defineProperty(e.prototype, "type", {
                        get: function () {
                            return this._type;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "color", {
                        get: function () {
                            return this._color;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "tupleId", {
                        get: function () {
                            return this._tupleId;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.MarkInfo = i;
            var n = (function () {
                function e(e, t, r, i, n) {
                    (this._fieldName = e),
                        (this._fieldId = t),
                        (this._dataType = r),
                        (this._isReferenced = i),
                        (this._index = n);
                }
                return (
                    Object.defineProperty(e.prototype, "fieldName", {
                        get: function () {
                            return this._fieldName;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "fieldId", {
                        get: function () {
                            return this._fieldId;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "dataType", {
                        get: function () {
                            return this._dataType;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isReferenced", {
                        get: function () {
                            return this._isReferenced;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "index", {
                        get: function () {
                            return this._index;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.Column = n;
            var a = (function () {
                function e(e, t, r) {
                    (this._value = e),
                        (this._nativeValue = t),
                        (this._formattedValue = r);
                }
                return (
                    Object.defineProperty(e.prototype, "value", {
                        get: function () {
                            return this._value;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "nativeValue", {
                        get: function () {
                            return this._nativeValue;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "formattedValue", {
                        get: function () {
                            return this._formattedValue;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.DataValue = a;
        },
        7968: function (e, t, r) {
            var i =
                    (this && this.__awaiter) ||
                    function (e, t, r, i) {
                        return new (r || (r = Promise))(function (n, a) {
                            function o(e) {
                                try {
                                    l(i.next(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function s(e) {
                                try {
                                    l(i.throw(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function l(e) {
                                var t;
                                e.done
                                    ? n(e.value)
                                    : ((t = e.value),
                                      t instanceof r
                                          ? t
                                          : new r(function (e) {
                                                e(t);
                                            })).then(o, s);
                            }
                            l((i = i.apply(e, t || [])).next());
                        });
                    },
                n =
                    (this && this.__generator) ||
                    function (e, t) {
                        var r,
                            i,
                            n,
                            a,
                            o = {
                                label: 0,
                                sent: function () {
                                    if (1 & n[0]) throw n[1];
                                    return n[1];
                                },
                                trys: [],
                                ops: [],
                            };
                        return (
                            (a = { next: s(0), throw: s(1), return: s(2) }),
                            "function" == typeof Symbol &&
                                (a[Symbol.iterator] = function () {
                                    return this;
                                }),
                            a
                        );
                        function s(a) {
                            return function (s) {
                                return (function (a) {
                                    if (r)
                                        throw new TypeError(
                                            "Generator is already executing."
                                        );
                                    for (; o; )
                                        try {
                                            if (
                                                ((r = 1),
                                                i &&
                                                    (n =
                                                        2 & a[0]
                                                            ? i.return
                                                            : a[0]
                                                            ? i.throw ||
                                                              ((n = i.return) &&
                                                                  n.call(i),
                                                              0)
                                                            : i.next) &&
                                                    !(n = n.call(i, a[1])).done)
                                            )
                                                return n;
                                            switch (
                                                ((i = 0),
                                                n && (a = [2 & a[0], n.value]),
                                                a[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    n = a;
                                                    break;
                                                case 4:
                                                    return (
                                                        o.label++,
                                                        {
                                                            value: a[1],
                                                            done: !1,
                                                        }
                                                    );
                                                case 5:
                                                    o.label++,
                                                        (i = a[1]),
                                                        (a = [0]);
                                                    continue;
                                                case 7:
                                                    (a = o.ops.pop()),
                                                        o.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !(
                                                            (n =
                                                                (n = o.trys)
                                                                    .length >
                                                                    0 &&
                                                                n[
                                                                    n.length - 1
                                                                ]) ||
                                                            (6 !== a[0] &&
                                                                2 !== a[0])
                                                        )
                                                    ) {
                                                        o = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === a[0] &&
                                                        (!n ||
                                                            (a[1] > n[0] &&
                                                                a[1] < n[3]))
                                                    ) {
                                                        o.label = a[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === a[0] &&
                                                        o.label < n[1]
                                                    ) {
                                                        (o.label = n[1]),
                                                            (n = a);
                                                        break;
                                                    }
                                                    if (n && o.label < n[2]) {
                                                        (o.label = n[2]),
                                                            o.ops.push(a);
                                                        break;
                                                    }
                                                    n[2] && o.ops.pop(),
                                                        o.trys.pop();
                                                    continue;
                                            }
                                            a = t.call(e, o);
                                        } catch (e) {
                                            (a = [6, e]), (i = 0);
                                        } finally {
                                            r = n = 0;
                                        }
                                    if (5 & a[0]) throw a[1];
                                    return {
                                        value: a[0] ? a[1] : void 0,
                                        done: !0,
                                    };
                                })([a, s]);
                            };
                        }
                    };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(3008),
                o = r(7480),
                s = (function () {
                    function e(e, t, r, i) {
                        (this._id = e),
                            (this._totalRowCount = t),
                            (this._pageRowCount = r),
                            (this._registryId = i),
                            (this._pageCount = Math.ceil(t / r));
                    }
                    return (
                        Object.defineProperty(e.prototype, "totalRowCount", {
                            get: function () {
                                return this._totalRowCount;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "pageCount", {
                            get: function () {
                                return this._pageCount;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (e.prototype.getPageAsync = function (e) {
                            return (
                                o.ErrorHelpers.verifyRange(
                                    e,
                                    0,
                                    this._pageCount
                                ),
                                a.ApiServiceRegistry.get(this._registryId)
                                    .getService("get-data-service")
                                    .getPageAsync(
                                        this._id,
                                        e,
                                        this._pageRowCount
                                    )
                            );
                        }),
                        (e.prototype.getAllPagesAsync = function (e) {
                            return i(this, void 0, void 0, function () {
                                var t, r, i, a, o, s, l, u, c, d;
                                return n(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.getPageAsync(0)];
                                        case 1:
                                            (t = n.sent()),
                                                (e = e || this.totalRowCount),
                                                (r = Math.min(
                                                    e,
                                                    this.totalRowCount
                                                )),
                                                (i = Math.ceil(
                                                    r / this._pageRowCount
                                                )),
                                                (a = Math.min(i, 400)),
                                                (o = a < i),
                                                (s = []),
                                                (l = 1),
                                                (n.label = 2);
                                        case 2:
                                            return l < a
                                                ? [4, this.getPageAsync(l)]
                                                : [3, 5];
                                        case 3:
                                            (u = n.sent()),
                                                s.push(u.data),
                                                (n.label = 4);
                                        case 4:
                                            return l++, [3, 2];
                                        case 5:
                                            return (
                                                ((c = (d = t.data).concat.apply(
                                                    d,
                                                    s
                                                )).length = r),
                                                [
                                                    2,
                                                    {
                                                        name: t.name,
                                                        data: c,
                                                        columns: t.columns,
                                                        totalRowCount: o
                                                            ? a *
                                                              this._pageRowCount
                                                            : r,
                                                        isTotalRowCountLimited:
                                                            o,
                                                        isSummaryData:
                                                            t.isSummaryData,
                                                    },
                                                ]
                                            );
                                    }
                                });
                            });
                        }),
                        (e.prototype.releaseAsync = function () {
                            return a.ApiServiceRegistry.get(this._registryId)
                                .getService("get-data-service")
                                .releaseAsync(this._id);
                        }),
                        e
                    );
                })();
            t.DataTableReader = s;
        },
        7104: function (e, t) {
            var r,
                i =
                    (this && this.__extends) ||
                    ((r = function (e, t) {
                        return (
                            (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            r(e, t)
                        );
                    }),
                    function (e, t) {
                        function i() {
                            this.constructor = e;
                        }
                        r(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((i.prototype = t.prototype), new i()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function () {};
            t.SelectionModel = n;
            var a = (function (e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (t.selectValues = []), t;
                }
                return i(t, e), t;
            })(n);
            t.ValueSelectionModel = a;
            var o = (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return i(t, e), t;
            })(a);
            t.HierarchicalSelectionModel = o;
            var s = (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return i(t, e), t;
            })(n);
            t.RangeSelectionModel = s;
            var l = (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return i(t, e), t;
            })(a);
            t.DimensionSelectionModel = l;
            t.TupleSelectionModel = function () {
                this.objectIds = [];
            };
            t.SelectionModelsContainer = function () {
                (this.hierModelArr = []),
                    (this.dimModelArr = []),
                    (this.quantModelArr = []);
            };
            t.SelectTuplesInteractionModel = function (e, t, r, i) {
                void 0 === t && (t = []),
                    (this.visualIdPresModel = e),
                    (this.tupleIds = t),
                    (this.selectOptions = r),
                    (this.tooltipContext = i);
            };
            t.HoverTupleInteractionModel = function (e, t, r, i) {
                (this.visualIdPresModel = e),
                    (this.tupleId = t),
                    (this.tooltipContext = r),
                    (this.allowHoverActions = i);
            };
        },
        3987: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e, t) {
                    (this._x = e), (this._y = t);
                }
                return (
                    Object.defineProperty(e.prototype, "x", {
                        get: function () {
                            return this._x;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "y", {
                        get: function () {
                            return this._y;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.Point = r;
        },
        3483: (e, t) => {
            var r;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                ((r = t.GetDataType || (t.GetDataType = {})).Summary =
                    "summary"),
                (r.Underlying = "underlying");
        },
        8672: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(3008),
                n = r(3964),
                a = r(8028),
                o = r(1384),
                s = r(9196),
                l = r(4924),
                u = r(3851),
                c = r(8864),
                d = r(7712),
                p = r(1288),
                h = r(7260),
                m = r(8784),
                y = r(4109),
                g = r(6096),
                f = r(744),
                b = r(8856);
            t.registerAllSharedServices = function (e, t, r) {
                i.ApiServiceRegistry.get(t).registerService(
                    new a.AnimationServiceImpl(e, t)
                ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new s.DataSourceServiceImpl(e, t, r)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new l.ExportServiceImpl(e, t)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new d.GetDataServiceImpl(e, t)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new c.FilterServiceImpl(e, t)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new p.NotificationServiceImpl(e)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new h.ParametersServiceImpl(e, t)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new m.SelectionServiceImpl(e, t)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new o.AnnotationServiceImpl(e, t)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new b.ZoneServiceImpl(e, t)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new y.SizeServiceImpl(e, t)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new g.VisualModelServiceImpl(e, t)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new f.VizServiceImpl(e, t)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new u.ExternalContextMenuServiceImpl(e, t)
                    ),
                    i.ApiServiceRegistry.get(t).registerService(
                        new n.AccessibilityServiceImpl(e, t)
                    );
            };
        },
        3008: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(6664);
            window.__tableauApiServiceRegistry =
                window.__tableauApiServiceRegistry || {};
            var a = (function () {
                    function e() {
                        this._services = {};
                    }
                    return (
                        (e.prototype.registerService = function (e) {
                            this._services[e.serviceName] = e;
                        }),
                        (e.prototype.getService = function (e) {
                            if (!this._services.hasOwnProperty(e))
                                throw new n.TableauError(
                                    i.ErrorCodes.InternalError,
                                    "Service not registered: " + e
                                );
                            return this._services[e];
                        }),
                        e
                    );
                })(),
                o = (function () {
                    function e() {}
                    return (
                        (e.get = function (t) {
                            if (
                                ((window.__tableauApiServiceRegistry &&
                                    window.__tableauApiServiceRegistry[t]) ||
                                    e.setInstance(t, new a()),
                                !window.__tableauApiServiceRegistry[t])
                            )
                                throw new n.TableauError(
                                    i.ErrorCodes.InternalError,
                                    "Service registry failed"
                                );
                            return window.__tableauApiServiceRegistry[t];
                        }),
                        (e.setInstance = function (e, t) {
                            window.__tableauApiServiceRegistry ||
                                (window.__tableauApiServiceRegistry = {}),
                                (window.__tableauApiServiceRegistry[e] = t);
                        }),
                        (e.clearRegistry = function () {
                            window.__tableauApiServiceRegistry = {};
                        }),
                        e
                    );
                })();
            t.ApiServiceRegistry = o;
        },
        3964: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(3448),
                o = r(5064),
                s = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "accessibility";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.getTooltipTextAsync = function (e, t) {
                            var r,
                                i = new o.TooltipTextRequestModel(e, t),
                                n =
                                    (((r = {})[a.ParameterId.FunctionName] =
                                        "getTooltipTextAsync"),
                                    (r[a.ParameterId.TooltipTextRequest] = i),
                                    r);
                            return this.execute(
                                a.VerbId.GetTooltipText,
                                n
                            ).then(function (e) {
                                return e.result;
                            });
                        }),
                        (t.prototype.leaveMarkNavigationAsync = function (e) {
                            var t,
                                r =
                                    (((t = {})[a.ParameterId.FunctionName] =
                                        "leaveMarkNavigationAsync"),
                                    (t[a.ParameterId.VisualId] = e),
                                    t);
                            return this.execute(
                                a.VerbId.RaiseLeaveMarkNavNotification,
                                r
                            ).then(function (e) {});
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.AccessibilityServiceImpl = s;
        },
        8028: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(7419),
                o = r(3448),
                s = r(1044),
                l = r(7480),
                u = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "animation-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.replayAsync = function (e) {
                            var t,
                                r =
                                    (((t = {})[o.ParameterId.ReplaySpeed] = 1),
                                    t);
                            return (
                                l.ErrorHelpers.verifyEnumValue(
                                    e,
                                    a.ReplaySpeedType,
                                    "ReplaySpeedType"
                                ),
                                (r[o.ParameterId.ReplaySpeed] =
                                    s.ExternalToInternalEnumMappings.setReplaySpeedType.convert(
                                        e
                                    )),
                                this.execute(o.VerbId.ReplayAnimation, r).then(
                                    function (e) {}
                                )
                            );
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.AnimationServiceImpl = u;
        },
        1384: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(7419),
                o = r(3448),
                s = r(6557),
                l = r(7104),
                u = r(6664),
                c = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "annotation-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.annotateMarkAsync = function (e, t, r) {
                            var i,
                                n = this.parseMarkSelectionIds([t]),
                                a =
                                    "<formatted-text><run>" +
                                    r +
                                    "</run></formatted-text>",
                                s =
                                    (((i = {})[o.ParameterId.FunctionName] =
                                        "annotateMarkAsync"),
                                    (i[o.ParameterId.VisualId] = e),
                                    (i[o.ParameterId.AnnotateEnum] =
                                        o.AnnotateEnum.Mark),
                                    (i[o.ParameterId.TargetPoint] = {
                                        x: 0,
                                        y: 0,
                                    }),
                                    (i[o.ParameterId.SelectionList] = [
                                        n.selection,
                                    ]),
                                    (i[o.ParameterId.FormattedText] = a),
                                    i);
                            return this.execute(
                                o.VerbId.CreateAnnotation,
                                s
                            ).then(function (e) {});
                        }),
                        (t.prototype.getAnnotationsAsync = function (e) {
                            var t,
                                r = this,
                                i =
                                    (((t = {})[o.ParameterId.FunctionName] =
                                        "getAnnotationsAsync"),
                                    (t[o.ParameterId.VisualId] = e),
                                    t);
                            return this.execute(
                                o.VerbId.GetAnnotations,
                                i
                            ).then(function (e) {
                                var t = e.result;
                                return r.annotationFilterMap(t);
                            });
                        }),
                        (t.prototype.removeAnnotationAsync = function (e, t) {
                            var r,
                                i = this.parseAnnotationSelectionIds([t]),
                                n =
                                    (((r = {})[o.ParameterId.FunctionName] =
                                        "removeAnnotationAsync"),
                                    (r[o.ParameterId.VisualId] = e),
                                    (r[o.ParameterId.SelectionList] = [
                                        i.selection,
                                    ]),
                                    r);
                            return this.execute(
                                o.VerbId.RemoveAnnotation,
                                n
                            ).then(function (e) {});
                        }),
                        (t.prototype.parseMarkSelectionIds = function (e) {
                            var t = [],
                                r = new l.SelectionModelsContainer();
                            if (
                                (e.forEach(function (e) {
                                    var r = e.tupleId;
                                    if (!(null != r && r > 0))
                                        throw new u.TableauError(
                                            a.ErrorCodes.InternalError,
                                            "invalid tupleId"
                                        );
                                    t.push(r.toString());
                                }),
                                0 !== t.length)
                            ) {
                                var i = new l.TupleSelectionModel();
                                (i.selectionType = "tuples"),
                                    (i.objectIds = t),
                                    (r.selection = i);
                            }
                            return r;
                        }),
                        (t.prototype.parseAnnotationSelectionIds = function (
                            e
                        ) {
                            var t = [],
                                r = new l.SelectionModelsContainer();
                            if (
                                (e.forEach(function (e) {
                                    var r = e.annotationId;
                                    if (!(null != r && r >= 0))
                                        throw new u.TableauError(
                                            a.ErrorCodes.InternalError,
                                            "invalid annotationId"
                                        );
                                    t.push(r.toString());
                                }),
                                0 !== t.length)
                            ) {
                                var i = new l.TupleSelectionModel();
                                (i.selectionType = "annotations"),
                                    (i.objectIds = t),
                                    (r.selection = i);
                            }
                            return r;
                        }),
                        (t.prototype.mapAnnotation = function (e) {
                            return {
                                annotationHTML: e.annotationText,
                                annotationId: e.annotationId,
                                annotationText: e.annotationPlainText,
                                annotationType:
                                    s.InternalToExternalEnumMappings.annotationType.convert(
                                        e.annotateEnum
                                    ),
                                tupleId: e.tupleId,
                            };
                        }),
                        (t.prototype.annotationFilterMap = function (e) {
                            var t = this;
                            return e.map(function (e) {
                                return t.mapAnnotation(e);
                            });
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.AnnotationServiceImpl = c;
        },
        1832: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(3448),
                o = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "client-info-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.getClientInfoAsync = function () {
                            var e,
                                t = a.VerbId.GetEmbeddingClientInfo,
                                r =
                                    (((e = {})[a.ParameterId.FunctionName] =
                                        "getClientInfoAsync"),
                                    e);
                            return this.execute(t, r).then(function (e) {
                                return e.result;
                            });
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.ClientInfoServiceImpl = o;
        },
        9196: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(7419),
                o = r(3448),
                s = r(3448),
                l = r(8340),
                u = r(1072),
                c = r(2180),
                d = r(5288),
                p = r(6664),
                h = r(1776);
            t.SENTINEL_LOGICAL_TABLE_INFO = {
                id: o.ApiShowDataTableSentinel.SingleTableId,
                caption: o.ApiShowDataTableSentinel.SingleTableCaption,
            };
            var m = { major: 1, minor: 20, fix: 1 },
                y = (function (e) {
                    function r(t, r, i) {
                        void 0 === i && (i = m);
                        var n = e.call(this, t, r) || this;
                        return (n._platformVersion = i), n;
                    }
                    return (
                        n(r, e),
                        Object.defineProperty(r.prototype, "serviceName", {
                            get: function () {
                                return "data-source-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (r.prototype.refreshAsync = function (e) {
                            var t,
                                r =
                                    (((t = {})[s.ParameterId.FunctionName] =
                                        "refreshAsync"),
                                    (t[s.ParameterId.DeltaTimeMs] = 0),
                                    (t[s.ParameterId.ShouldRefreshDS] = !0),
                                    t);
                            return (
                                e && (r[s.ParameterId.DataSourceId] = e),
                                this.execute(
                                    s.VerbId.RefreshDataSource,
                                    r
                                ).then(function (e) {})
                            );
                        }),
                        (r.prototype.getActiveTablesAsync = function (e) {
                            var t,
                                r =
                                    (((t = {})[s.ParameterId.FunctionName] =
                                        "getActiveTablesAsync"),
                                    (t[s.ParameterId.DataSourceId] = e),
                                    t);
                            return this.execute(
                                s.VerbId.GetActiveTables,
                                r
                            ).then(function (t) {
                                var r = t.result;
                                if (0 === r.tables.length)
                                    throw new p.TableauError(
                                        a.ErrorCodes.UnsupportedMethodForDataSourceType,
                                        "getActiveTables is not supported for: " +
                                            e
                                    );
                                return r.tables;
                            });
                        }),
                        (r.prototype.getDataSourcesAsync = function (e) {
                            var t,
                                r =
                                    (((t = {})[s.ParameterId.FunctionName] =
                                        "getDataSourcesAsync"),
                                    (t[s.ParameterId.VisualId] = e),
                                    t);
                            return this.execute(
                                s.VerbId.GetDataSources,
                                r
                            ).then(function (e) {
                                return e.result;
                            });
                        }),
                        (r.prototype.getAllDataSourcesAsync = function () {
                            var e,
                                t =
                                    (((e = {})[s.ParameterId.FunctionName] =
                                        "getAllDataSourcesAsync"),
                                    e);
                            return this.execute(
                                s.VerbId.GetAllDataSources,
                                t
                            ).then(function (e) {
                                return e.result;
                            });
                        }),
                        (r.prototype.getConnectionSummariesAsync = function (
                            e
                        ) {
                            var t,
                                r =
                                    (((t = {})[s.ParameterId.FunctionName] =
                                        "getConnectionSummariesAsync"),
                                    (t[s.ParameterId.DataSourceId] = e),
                                    t);
                            return this.execute(
                                s.VerbId.GetConnectionDescriptionSummaries,
                                r
                            ).then(function (e) {
                                return e.result;
                            });
                        }),
                        (r.prototype.getFieldAsync = function (e) {
                            var t,
                                r = this,
                                i = s.VerbId.GetFieldAndDataSource,
                                n =
                                    (((t = {})[s.ParameterId.FunctionName] =
                                        "getFieldAsync"),
                                    (t[s.ParameterId.FieldId] = e),
                                    t);
                            return this.execute(i, n).then(function (e) {
                                var t = e.result[s.ParameterId.DataSource],
                                    i = e.result[s.ParameterId.Field];
                                return r.convertField(
                                    i,
                                    r.convertDataSource(t)
                                );
                            });
                        }),
                        (r.prototype.getLogicalTablesAsync = function (e) {
                            var r;
                            if (!this.isObjectModelSupportedByPlatform())
                                return new Promise(function (e) {
                                    return e([t.SENTINEL_LOGICAL_TABLE_INFO]);
                                });
                            var i =
                                (((r = {})[s.ParameterId.FunctionName] =
                                    "getLogicalTablesAsync"),
                                (r[s.ParameterId.DataSourceId] = e),
                                r);
                            return this.execute(
                                s.VerbId.GetLogicalTables,
                                i
                            ).then(function (e) {
                                return e.result;
                            });
                        }),
                        (r.prototype.getUnderlyingTablesAsync = function (e) {
                            var r;
                            if (!this.isObjectModelSupportedByPlatform())
                                return new Promise(function (e) {
                                    return e([t.SENTINEL_LOGICAL_TABLE_INFO]);
                                });
                            var i =
                                (((r = {})[s.ParameterId.FunctionName] =
                                    "getUnderlyingTablesAsync"),
                                (r[s.ParameterId.VisualId] = e),
                                r);
                            return this.execute(
                                s.VerbId.GetUnderlyingTables,
                                i
                            ).then(function (e) {
                                return e.result;
                            });
                        }),
                        (r.prototype.convertField = function (e, t) {
                            return new u.Field(new d.FieldImpl(e, t));
                        }),
                        (r.prototype.convertDataSource = function (e) {
                            return new l.DataSource(
                                new c.DataSourceImpl(e, this._registryId)
                            );
                        }),
                        (r.prototype.isObjectModelSupportedByPlatform =
                            function () {
                                return o.VersionLessThan(
                                    { major: 1, minor: 13, fix: 0 },
                                    this._platformVersion
                                );
                            }),
                        r
                    );
                })(h.ServiceImplBase);
            t.DataSourceServiceImpl = y;
        },
        4924: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    }),
                a =
                    (this && this.__awaiter) ||
                    function (e, t, r, i) {
                        return new (r || (r = Promise))(function (n, a) {
                            function o(e) {
                                try {
                                    l(i.next(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function s(e) {
                                try {
                                    l(i.throw(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function l(e) {
                                var t;
                                e.done
                                    ? n(e.value)
                                    : ((t = e.value),
                                      t instanceof r
                                          ? t
                                          : new r(function (e) {
                                                e(t);
                                            })).then(o, s);
                            }
                            l((i = i.apply(e, t || [])).next());
                        });
                    },
                o =
                    (this && this.__generator) ||
                    function (e, t) {
                        var r,
                            i,
                            n,
                            a,
                            o = {
                                label: 0,
                                sent: function () {
                                    if (1 & n[0]) throw n[1];
                                    return n[1];
                                },
                                trys: [],
                                ops: [],
                            };
                        return (
                            (a = { next: s(0), throw: s(1), return: s(2) }),
                            "function" == typeof Symbol &&
                                (a[Symbol.iterator] = function () {
                                    return this;
                                }),
                            a
                        );
                        function s(a) {
                            return function (s) {
                                return (function (a) {
                                    if (r)
                                        throw new TypeError(
                                            "Generator is already executing."
                                        );
                                    for (; o; )
                                        try {
                                            if (
                                                ((r = 1),
                                                i &&
                                                    (n =
                                                        2 & a[0]
                                                            ? i.return
                                                            : a[0]
                                                            ? i.throw ||
                                                              ((n = i.return) &&
                                                                  n.call(i),
                                                              0)
                                                            : i.next) &&
                                                    !(n = n.call(i, a[1])).done)
                                            )
                                                return n;
                                            switch (
                                                ((i = 0),
                                                n && (a = [2 & a[0], n.value]),
                                                a[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    n = a;
                                                    break;
                                                case 4:
                                                    return (
                                                        o.label++,
                                                        {
                                                            value: a[1],
                                                            done: !1,
                                                        }
                                                    );
                                                case 5:
                                                    o.label++,
                                                        (i = a[1]),
                                                        (a = [0]);
                                                    continue;
                                                case 7:
                                                    (a = o.ops.pop()),
                                                        o.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !(
                                                            (n =
                                                                (n = o.trys)
                                                                    .length >
                                                                    0 &&
                                                                n[
                                                                    n.length - 1
                                                                ]) ||
                                                            (6 !== a[0] &&
                                                                2 !== a[0])
                                                        )
                                                    ) {
                                                        o = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === a[0] &&
                                                        (!n ||
                                                            (a[1] > n[0] &&
                                                                a[1] < n[3]))
                                                    ) {
                                                        o.label = a[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === a[0] &&
                                                        o.label < n[1]
                                                    ) {
                                                        (o.label = n[1]),
                                                            (n = a);
                                                        break;
                                                    }
                                                    if (n && o.label < n[2]) {
                                                        (o.label = n[2]),
                                                            o.ops.push(a);
                                                        break;
                                                    }
                                                    n[2] && o.ops.pop(),
                                                        o.trys.pop();
                                                    continue;
                                            }
                                            a = t.call(e, o);
                                        } catch (e) {
                                            (a = [6, e]), (i = 0);
                                        } finally {
                                            r = n = 0;
                                        }
                                    if (5 & a[0]) throw a[1];
                                    return {
                                        value: a[0] ? a[1] : void 0,
                                        done: !0,
                                    };
                                })([a, s]);
                            };
                        }
                    };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = r(3448),
                l = r(7419),
                u = r(1044),
                c = r(5044),
                d = r(7480),
                p = r(6664),
                h = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "export-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.getExportCrosstabSheetMapAsync = function (
                            e
                        ) {
                            var t,
                                r = s.VerbId.GetExportCrosstabSheetMap,
                                i =
                                    (((t = {})[s.ParameterId.FunctionName] =
                                        "getExportCrosstabSheetMapAsync"),
                                    (t[s.ParameterId.CurrentSheetType] =
                                        u.ExternalToInternalEnumMappings.sheetType.convert(
                                            e
                                        )),
                                    t);
                            return this.execute(r, i).then(function (e) {
                                return e.result;
                            });
                        }),
                        (t.prototype.exportCrosstabAsync = function (
                            e,
                            t,
                            r,
                            i
                        ) {
                            return a(this, void 0, void 0, function () {
                                var n, a, u, c;
                                return o(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return (
                                                d.ErrorHelpers.verifySheetName(
                                                    r,
                                                    e
                                                ),
                                                d.ErrorHelpers.verifyEnumValue(
                                                    t,
                                                    l.CrosstabFileFormat,
                                                    "CrosstabFileFormat"
                                                ),
                                                [
                                                    4,
                                                    this.getExportCrosstabSheetMapAsync(
                                                        i
                                                    ),
                                                ]
                                            );
                                        case 1:
                                            if (!(n = o.sent())[e])
                                                throw new p.TableauError(
                                                    l.SharedErrorCodes.InternalError,
                                                    "missing sheet doc id from sheetMap"
                                                );
                                            switch (
                                                (((c = {})[
                                                    s.ParameterId.FunctionName
                                                ] = "exportCrosstabAsync"),
                                                (c[
                                                    s.ParameterId.SheetIdentifier
                                                ] = n[e]),
                                                (c[
                                                    s.ParameterId.SendNotifications
                                                ] = !0),
                                                (a = c),
                                                t)
                                            ) {
                                                case l.CrosstabFileFormat.CSV:
                                                    (u =
                                                        s.VerbId
                                                            .ExportCrosstabCsvDownload),
                                                        (a[
                                                            s.ParameterId.UseTabDelimiters
                                                        ] = !0);
                                                    break;
                                                case l.CrosstabFileFormat.Excel:
                                                    u =
                                                        s.VerbId
                                                            .ExportCrosstabExcelDownload;
                                                    break;
                                                default:
                                                    throw new p.TableauError(
                                                        l.SharedErrorCodes.InternalError,
                                                        "unsupported Crosstab file format."
                                                    );
                                            }
                                            return [
                                                2,
                                                this.execute(u, a)
                                                    .then(function (e) {
                                                        return e.result;
                                                    })
                                                    .catch(function () {
                                                        throw new p.TableauError(
                                                            l.SharedErrorCodes.CrosstabCreationError,
                                                            "An unexpected error occurred while generating the document."
                                                        );
                                                    }),
                                            ];
                                    }
                                });
                            });
                        }),
                        (t.prototype.exportDataAsync = function (e, t) {
                            var r, i;
                            d.ErrorHelpers.verifyExportDataOptions(t);
                            var n = new Set(t.columnsToIncludeById),
                                a = Array.from(n),
                                o = s.VerbId.ExportDataDownload,
                                u =
                                    (((r = {})[s.ParameterId.FunctionName] =
                                        "exportDataAsync"),
                                    (r[s.ParameterId.VisualId] = e),
                                    (r[s.ParameterId.IgnoreAliases] =
                                        null != (i = t.ignoreAliases) && i),
                                    (r[s.ParameterId.ColumnsToIncludeById] = a),
                                    r);
                            return this.execute(o, u)
                                .then(function () {})
                                .catch(function () {
                                    throw new p.TableauError(
                                        l.SharedErrorCodes.DataCreationError,
                                        "An unexpected error occurred while generating the document."
                                    );
                                });
                        }),
                        (t.prototype.exportPowerPointAsync = function (e, t) {
                            var r;
                            d.ErrorHelpers.verifySheetNamesForPDFAndPPT(e, t);
                            var i = s.VerbId.ExportPowerpointDownload,
                                n =
                                    (((r = {})[s.ParameterId.FunctionName] =
                                        "exportPowerPointAsync"),
                                    (r[s.ParameterId.ExportOriginUrl] = ""),
                                    (r[s.ParameterId.SelectedSheetNames] = e),
                                    r);
                            return this.execute(i, n)
                                .then(function (e) {
                                    return e.result;
                                })
                                .catch(function () {
                                    throw new p.TableauError(
                                        l.SharedErrorCodes.PowerPointCreationError,
                                        "An error occured while attempting to generate the PowerPoint file."
                                    );
                                });
                        }),
                        (t.prototype.exportPDFAsync = function (e, t, r) {
                            return a(this, void 0, void 0, function () {
                                var i, n, a, u;
                                return o(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return (
                                                d.ErrorHelpers.verifyExportPDFOptions(
                                                    t
                                                ),
                                                d.ErrorHelpers.verifySheetNamesForPDFAndPPT(
                                                    e,
                                                    r
                                                ),
                                                [
                                                    4,
                                                    this.getExportPDFOptionsAsync(),
                                                ]
                                            );
                                        case 1:
                                            return (
                                                (i = o.sent()),
                                                c.ExportHelpers.updateInternalExportPDFOptions(
                                                    i,
                                                    t,
                                                    e
                                                ),
                                                (n =
                                                    s.VerbId.ExportPdfDownload),
                                                ((u = {})[
                                                    s.ParameterId.FunctionName
                                                ] = "exportPDFAsync"),
                                                (u[
                                                    s.ParameterId.ExportPdfOptions
                                                ] = i),
                                                (a = u),
                                                [
                                                    2,
                                                    this.execute(n, a)
                                                        .then(function (e) {
                                                            return e.result;
                                                        })
                                                        .catch(function () {
                                                            throw new p.TableauError(
                                                                l.SharedErrorCodes.PDFCreationError,
                                                                "Unable to create PDF because something went wrong. Try again."
                                                            );
                                                        }),
                                                ]
                                            );
                                    }
                                });
                            });
                        }),
                        (t.prototype.getExportPDFOptionsAsync = function () {
                            var e,
                                t = s.VerbId.GetExportPdfOptions,
                                r =
                                    (((e = {})[s.ParameterId.FunctionName] =
                                        "getExportPdfOptionsAsync"),
                                    e);
                            return this.execute(t, r).then(function (e) {
                                return e.result;
                            });
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.ExportServiceImpl = h;
        },
        3851: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(3448),
                o = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "external-context-menu-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.appendContextMenuAsync = function (
                            e,
                            t,
                            r
                        ) {
                            var i,
                                n = a.VerbId.AppendExternalMenuItem,
                                o =
                                    (((i = {})[a.ParameterId.FunctionName] =
                                        "appendContextMenuAsync"),
                                    (i[a.ParameterId.WorksheetName] = e),
                                    (i[
                                        a.ParameterId.ExternalMenuItemDisplayName
                                    ] = r.displayName),
                                    i);
                            return this.execute(n, o).then(function (e) {
                                return e.result;
                            });
                        }),
                        (t.prototype.removeContextMenuAsync = function (
                            e,
                            t,
                            r
                        ) {
                            var i,
                                n = a.VerbId.RemoveExternalMenuItem,
                                o =
                                    (((i = {})[a.ParameterId.FunctionName] =
                                        "removeContextMenuAsync"),
                                    (i[a.ParameterId.WorksheetName] = e),
                                    (i[a.ParameterId.ExternalMenuItemId] = r),
                                    i);
                            return this.execute(n, o).then(function (e) {});
                        }),
                        (t.prototype.executeContextMenuAsync = function (
                            e,
                            t,
                            r
                        ) {
                            var i,
                                n = a.VerbId.ExecuteExternalMenuItem,
                                o =
                                    (((i = {})[a.ParameterId.FunctionName] =
                                        "executeContextMenuAsync"),
                                    (i[a.ParameterId.WorksheetName] = e),
                                    (i[a.ParameterId.ExternalMenuItemId] = r),
                                    i);
                            return this.execute(n, o).then(function (e) {});
                        }),
                        (t.prototype.renameContextMenuAsync = function (
                            e,
                            t,
                            r,
                            i
                        ) {
                            var n,
                                o = a.VerbId.RenameExternalMenu,
                                s =
                                    (((n = {})[a.ParameterId.FunctionName] =
                                        "renameContextMenuAsync"),
                                    (n[a.ParameterId.WorksheetName] = e),
                                    (n[a.ParameterId.ExternalMenuHeader] = r),
                                    (n[a.ParameterId.ExternalMenuDescription] =
                                        i),
                                    n);
                            return this.execute(o, s).then(function (e) {});
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.ExternalContextMenuServiceImpl = o;
        },
        8864: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    }),
                a =
                    (this && this.__awaiter) ||
                    function (e, t, r, i) {
                        return new (r || (r = Promise))(function (n, a) {
                            function o(e) {
                                try {
                                    l(i.next(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function s(e) {
                                try {
                                    l(i.throw(e));
                                } catch (e) {
                                    a(e);
                                }
                            }
                            function l(e) {
                                var t;
                                e.done
                                    ? n(e.value)
                                    : ((t = e.value),
                                      t instanceof r
                                          ? t
                                          : new r(function (e) {
                                                e(t);
                                            })).then(o, s);
                            }
                            l((i = i.apply(e, t || [])).next());
                        });
                    },
                o =
                    (this && this.__generator) ||
                    function (e, t) {
                        var r,
                            i,
                            n,
                            a,
                            o = {
                                label: 0,
                                sent: function () {
                                    if (1 & n[0]) throw n[1];
                                    return n[1];
                                },
                                trys: [],
                                ops: [],
                            };
                        return (
                            (a = { next: s(0), throw: s(1), return: s(2) }),
                            "function" == typeof Symbol &&
                                (a[Symbol.iterator] = function () {
                                    return this;
                                }),
                            a
                        );
                        function s(a) {
                            return function (s) {
                                return (function (a) {
                                    if (r)
                                        throw new TypeError(
                                            "Generator is already executing."
                                        );
                                    for (; o; )
                                        try {
                                            if (
                                                ((r = 1),
                                                i &&
                                                    (n =
                                                        2 & a[0]
                                                            ? i.return
                                                            : a[0]
                                                            ? i.throw ||
                                                              ((n = i.return) &&
                                                                  n.call(i),
                                                              0)
                                                            : i.next) &&
                                                    !(n = n.call(i, a[1])).done)
                                            )
                                                return n;
                                            switch (
                                                ((i = 0),
                                                n && (a = [2 & a[0], n.value]),
                                                a[0])
                                            ) {
                                                case 0:
                                                case 1:
                                                    n = a;
                                                    break;
                                                case 4:
                                                    return (
                                                        o.label++,
                                                        {
                                                            value: a[1],
                                                            done: !1,
                                                        }
                                                    );
                                                case 5:
                                                    o.label++,
                                                        (i = a[1]),
                                                        (a = [0]);
                                                    continue;
                                                case 7:
                                                    (a = o.ops.pop()),
                                                        o.trys.pop();
                                                    continue;
                                                default:
                                                    if (
                                                        !(
                                                            (n =
                                                                (n = o.trys)
                                                                    .length >
                                                                    0 &&
                                                                n[
                                                                    n.length - 1
                                                                ]) ||
                                                            (6 !== a[0] &&
                                                                2 !== a[0])
                                                        )
                                                    ) {
                                                        o = 0;
                                                        continue;
                                                    }
                                                    if (
                                                        3 === a[0] &&
                                                        (!n ||
                                                            (a[1] > n[0] &&
                                                                a[1] < n[3]))
                                                    ) {
                                                        o.label = a[1];
                                                        break;
                                                    }
                                                    if (
                                                        6 === a[0] &&
                                                        o.label < n[1]
                                                    ) {
                                                        (o.label = n[1]),
                                                            (n = a);
                                                        break;
                                                    }
                                                    if (n && o.label < n[2]) {
                                                        (o.label = n[2]),
                                                            o.ops.push(a);
                                                        break;
                                                    }
                                                    n[2] && o.ops.pop(),
                                                        o.trys.pop();
                                                    continue;
                                            }
                                            a = t.call(e, o);
                                        } catch (e) {
                                            (a = [6, e]), (i = 0);
                                        } finally {
                                            r = n = 0;
                                        }
                                    if (5 & a[0]) throw a[1];
                                    return {
                                        value: a[0] ? a[1] : void 0,
                                        done: !0,
                                    };
                                })([a, s]);
                            };
                        }
                    };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = r(7419),
                l = r(3448),
                u = r(3448),
                c = r(5136),
                d = r(1044),
                p = r(6557),
                h = r(6296),
                m = r(8052),
                y = r(1172),
                g = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "filter-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.applyFilterAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n
                        ) {
                            var a,
                                o = u.VerbId.ApplyCategoricalFilter,
                                l =
                                    (((a = {})[u.ParameterId.FunctionName] =
                                        "applyFilterAsync"),
                                    a);
                            if (
                                ((l[u.ParameterId.VisualId] = e),
                                (l[u.ParameterId.FieldName] = t),
                                !Array.isArray(r))
                            )
                                throw new c.TableauError(
                                    s.ErrorCodes.InvalidParameter,
                                    "values parameter for applyFilterAsync must be an array"
                                );
                            return (
                                (l[u.ParameterId.FilterValues] = r),
                                (l[u.ParameterId.FilterUpdateType] =
                                    d.ExternalToInternalEnumMappings.filterUpdateType.convert(
                                        i
                                    )),
                                (l[u.ParameterId.IsExcludeMode] =
                                    void 0 !== n &&
                                    void 0 !== n.isExcludeMode &&
                                    n.isExcludeMode),
                                this.execute(o, l).then(function (e) {
                                    return t;
                                })
                            );
                        }),
                        (t.prototype.applyRangeFilterAsync = function (
                            e,
                            t,
                            r
                        ) {
                            var i,
                                n = this,
                                a = u.VerbId.ApplyRangeFilter,
                                o =
                                    (((i = {})[u.ParameterId.FunctionName] =
                                        "applyRangeFilterAsync"),
                                    i);
                            if (void 0 !== r.min && null !== r.min) {
                                var s;
                                (s =
                                    r.min instanceof Date
                                        ? y.Param.serializeDateForPlatform(
                                              r.min
                                          )
                                        : r.min),
                                    (o[u.ParameterId.FilterRangeMin] = s);
                            }
                            if (void 0 !== r.max && null !== r.max) {
                                var l;
                                (l =
                                    r.max instanceof Date
                                        ? y.Param.serializeDateForPlatform(
                                              r.max
                                          )
                                        : r.max),
                                    (o[u.ParameterId.FilterRangeMax] = l);
                            }
                            return (
                                r.nullOption &&
                                    (o[u.ParameterId.FilterRangeNullOption] =
                                        d.ExternalToInternalEnumMappings.nullOptions.convert(
                                            r.nullOption
                                        )),
                                (o[u.ParameterId.FieldName] = t),
                                (o[u.ParameterId.VisualId] = e),
                                this.execute(a, o).then(function (e) {
                                    return (
                                        n.apiFilterHandlerCheckForCommandError(
                                            e.result
                                        ),
                                        t
                                    );
                                })
                            );
                        }),
                        (t.prototype.applyHierarchicalFilterAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n
                        ) {
                            var a,
                                o = u.VerbId.HierarchicalFilter,
                                s =
                                    (((a = {})[u.ParameterId.FunctionName] =
                                        "applyHierarchicalFilterAsync"),
                                    a);
                            (s[u.ParameterId.VisualId] = e),
                                (s[u.ParameterId.FieldName] = t);
                            var l = r.levels;
                            return (
                                Array.isArray(l) && l.length > 0
                                    ? (s[u.ParameterId.FilterLevels] = l)
                                    : r.length > 0
                                    ? (s[u.ParameterId.FilterValues] = r)
                                    : (s[u.ParameterId.FilterLevels] = []),
                                (s[u.ParameterId.FilterUpdateType] =
                                    d.ExternalToInternalEnumMappings.filterUpdateType.convert(
                                        i
                                    )),
                                (s[u.ParameterId.IsExcludeMode] =
                                    n && !!n.isExcludeMode),
                                this.execute(o, s).then(function (e) {
                                    return t;
                                })
                            );
                        }),
                        (t.prototype.clearFilterAsync = function (e, t) {
                            var r,
                                i = u.VerbId.ClearFilter,
                                n =
                                    (((r = {})[u.ParameterId.FunctionName] =
                                        "clearFilterAsync"),
                                    r);
                            return (
                                (n[u.ParameterId.VisualId] = e),
                                (n[u.ParameterId.FieldName] = t),
                                this.execute(i, n).then(function (e) {
                                    return t;
                                })
                            );
                        }),
                        (t.prototype.applyRelativeDateFilterAsync = function (
                            e,
                            t,
                            r
                        ) {
                            var i,
                                n = u.VerbId.ApplyRelativeDateFilter,
                                a =
                                    (((i = {})[u.ParameterId.FunctionName] =
                                        "applyRelativeDateFilterAsync"),
                                    i);
                            if (
                                ((a[u.ParameterId.VisualId] = e),
                                (a[u.ParameterId.FieldName] = t),
                                (a[u.ParameterId.PeriodType] =
                                    d.ExternalToInternalEnumMappings.periodType.convert(
                                        r.periodType
                                    )),
                                (a[u.ParameterId.DateRangeType] =
                                    d.ExternalToInternalEnumMappings.dateRangeType.convert(
                                        r.rangeType
                                    )),
                                r.rangeType === s.DateRangeType.LastN ||
                                    r.rangeType === s.DateRangeType.NextN)
                            ) {
                                if (void 0 === r.rangeN || null === r.rangeN)
                                    throw new c.TableauError(
                                        s.EmbeddingErrorCodes.MissingRangeNForRelativeDateFilters,
                                        "Missing rangeN field for a relative date filter of LASTN or NEXTN."
                                    );
                                a[u.ParameterId.RangeN] = r.rangeN;
                            }
                            return (
                                void 0 !== r.anchorDate &&
                                    null !== r.anchorDate &&
                                    (a[u.ParameterId.AnchorDate] =
                                        this.convertAnchorDate(r.anchorDate)),
                                this.execute(n, a).then(function (e) {
                                    return e.result;
                                })
                            );
                        }),
                        (t.prototype.getFiltersAsync = function (e) {
                            var t,
                                r = this,
                                i = u.VerbId.GetFilters,
                                n =
                                    (((t = {})[u.ParameterId.FunctionName] =
                                        "getFiltersAsync"),
                                    t);
                            return (
                                (n[u.ParameterId.VisualId] = e),
                                this.execute(i, n).then(function (e) {
                                    var t = e.result;
                                    return r.convertDomainFilters(t);
                                })
                            );
                        }),
                        (t.prototype.getCategoricalDomainAsync = function (
                            e,
                            t,
                            r
                        ) {
                            var i,
                                n = this,
                                a = u.VerbId.GetCategoricalDomain,
                                o =
                                    (((i = {})[u.ParameterId.FunctionName] =
                                        "getCategoricalDomainAsync"),
                                    i);
                            return (
                                (o[u.ParameterId.VisualId] = { worksheet: e }),
                                (o[u.ParameterId.FieldId] = t),
                                (o[u.ParameterId.DomainType] =
                                    d.ExternalToInternalEnumMappings.filterDomainType.convert(
                                        r
                                    )),
                                this.execute(a, o).then(function (e) {
                                    var t = e.result;
                                    return n.convertCategoricalDomain(t, r);
                                })
                            );
                        }),
                        (t.prototype.getRangeDomainAsync = function (e, t, r) {
                            var i,
                                n = this,
                                a = u.VerbId.GetRangeDomain,
                                o =
                                    (((i = {})[u.ParameterId.FunctionName] =
                                        "getRangeDomainAsync"),
                                    i);
                            return (
                                (o[u.ParameterId.VisualId] = { worksheet: e }),
                                (o[u.ParameterId.FieldId] = t),
                                (o[u.ParameterId.DomainType] =
                                    d.ExternalToInternalEnumMappings.filterDomainType.convert(
                                        r
                                    )),
                                this.execute(a, o).then(function (e) {
                                    var t = e.result;
                                    return n.convertRangeDomain(t, r);
                                })
                            );
                        }),
                        (t.prototype.getDashboardFiltersAsync = function () {
                            var e,
                                t = this,
                                r = u.VerbId.GetDashboardFilters,
                                i =
                                    (((e = {})[u.ParameterId.FunctionName] =
                                        "getDashboardFiltersAsync"),
                                    e);
                            return this.execute(r, i).then(function (e) {
                                var r = e.result;
                                return t.convertDomainFilters(r);
                            });
                        }),
                        (t.prototype.applyDashboardFilterAsync = function (
                            e,
                            t,
                            r,
                            i
                        ) {
                            var n,
                                a = u.VerbId.DashboardCategoricalFilter,
                                o =
                                    (((n = {})[u.ParameterId.FunctionName] =
                                        "applyDashboardFilterAsync"),
                                    n);
                            return (
                                (o[u.ParameterId.FieldName] = e),
                                (o[u.ParameterId.FilterValues] = t),
                                (o[u.ParameterId.FilterUpdateType] =
                                    d.ExternalToInternalEnumMappings.filterUpdateType.convert(
                                        r
                                    )),
                                (o[u.ParameterId.IsExcludeMode] =
                                    i && !!i.isExcludeMode),
                                this.execute(a, o).then(function (e) {
                                    return e.result;
                                })
                            );
                        }),
                        (t.prototype.getAppliedWorksheetsAsync = function (
                            e,
                            t
                        ) {
                            var r;
                            return a(this, void 0, void 0, function () {
                                var i, n;
                                return o(this, function (a) {
                                    switch (a.label) {
                                        case 0:
                                            return [
                                                4,
                                                this.executeGetAppliedWorksheets(
                                                    e,
                                                    t,
                                                    "getAppliedWorksheetsAsync"
                                                ),
                                            ];
                                        case 1:
                                            return (
                                                (i = a.sent()),
                                                (n = []),
                                                null === (r = i.worksheets) ||
                                                    void 0 === r ||
                                                    r.map(function (e) {
                                                        e.isSelected &&
                                                            n.push(
                                                                e.worksheetName
                                                            );
                                                    }),
                                                [2, n]
                                            );
                                    }
                                });
                            });
                        }),
                        (t.prototype.setAppliedWorksheetsAsync = function (
                            e,
                            t,
                            r,
                            i
                        ) {
                            return a(this, void 0, void 0, function () {
                                var n, a, l, d, p;
                                return o(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return [
                                                4,
                                                this.executeGetAppliedWorksheets(
                                                    e,
                                                    r,
                                                    "getAppliedWorksheetsAsyncInternal"
                                                ),
                                            ];
                                        case 1:
                                            if (
                                                !(n = o.sent()) ||
                                                !n.worksheets
                                            )
                                                throw new c.TableauError(
                                                    s.SharedErrorCodes.InternalError,
                                                    "This filter does not apply to multiple worksheets"
                                                );
                                            if (
                                                ((a = []),
                                                (l = ""),
                                                n.worksheets.forEach(function (
                                                    e
                                                ) {
                                                    e.isActive &&
                                                        (l = e.worksheetName),
                                                        (e.isSelected ||
                                                            e.isEnabled) &&
                                                            a.push(
                                                                e.worksheetName
                                                            );
                                                }),
                                                "" === l)
                                            )
                                                throw new c.TableauError(
                                                    s.SharedErrorCodes.InternalError,
                                                    "No active worksheet"
                                                );
                                            if (!i.includes(l))
                                                throw new c.TableauError(
                                                    s.SharedErrorCodes.InternalError,
                                                    l +
                                                        " must be included in the applied worksheets"
                                                );
                                            return (
                                                i.forEach(function (e) {
                                                    if (!a.includes(e))
                                                        throw new c.TableauError(
                                                            s.SharedErrorCodes.InternalError,
                                                            "The field " +
                                                                t +
                                                                " isn't applicable to the worksheet " +
                                                                e
                                                        );
                                                }),
                                                (d =
                                                    u.VerbId
                                                        .ChangeSharedFilter),
                                                ((p = {})[
                                                    u.ParameterId.FunctionName
                                                ] =
                                                    "setAppliedWorksheetsAsync"),
                                                (p[u.ParameterId.VisualId] = {
                                                    worksheet: e,
                                                }),
                                                (p[u.ParameterId.FieldId] = r),
                                                (p[
                                                    u.ParameterId.SharedFilterSheets
                                                ] = i),
                                                [
                                                    2,
                                                    this.execute(d, p).then(
                                                        function (e) {
                                                            return i;
                                                        }
                                                    ),
                                                ]
                                            );
                                    }
                                });
                            });
                        }),
                        (t.prototype.executeGetAppliedWorksheets = function (
                            e,
                            t,
                            r
                        ) {
                            var i = u.VerbId.GetSharedFilter,
                                n = {};
                            return (
                                (n[u.ParameterId.FunctionName] = r),
                                (n[u.ParameterId.VisualId] = { worksheet: e }),
                                (n[u.ParameterId.FieldId] = t),
                                this.execute(i, n).then(function (e) {
                                    return e.result;
                                })
                            );
                        }),
                        (t.prototype.convertDomainFilters = function (e) {
                            var t = this,
                                r = [];
                            return (
                                e.forEach(function (e) {
                                    switch (e.filterType) {
                                        case u.FilterType.Categorical:
                                            if (!(i = e))
                                                throw new Error(
                                                    "Invalid Categorical Filter"
                                                );
                                            r.push(
                                                t.convertCategoricalFilter(i)
                                            );
                                            break;
                                        case u.FilterType.Hierarchical:
                                            if (!(i = e))
                                                throw new Error(
                                                    "Invalid Hierarchical Filter"
                                                );
                                            r.push(
                                                t.convertHierarchicalFilter(i)
                                            );
                                            break;
                                        case u.FilterType.Range:
                                            if (!(i = e))
                                                throw new Error(
                                                    "Invalid Range Filter"
                                                );
                                            r.push(t.convertRangeFilter(i));
                                            break;
                                        case u.FilterType.RelativeDate:
                                            var i;
                                            if (!(i = e))
                                                throw new Error(
                                                    "Invalid Relative Date Filter"
                                                );
                                            r.push(
                                                t.convertRelativeDateFilter(i)
                                            );
                                    }
                                }),
                                r
                            );
                        }),
                        (t.prototype.convertCategoricalFilter = function (e) {
                            var t = e.values.map(function (e) {
                                return m.DataValueFactory.MakeFilterDataValue(
                                    e
                                );
                            });
                            return new h.CategoricalFilter(
                                e.visualId.worksheet,
                                e.fieldCaption,
                                e.fieldName,
                                u.FilterType.Categorical,
                                this._registryId,
                                t,
                                e.isExclude,
                                e.isAllSelected
                            );
                        }),
                        (t.prototype.convertHierarchicalFilter = function (e) {
                            var t = e.values.map(function (e) {
                                    return new h.HierarchicalDataValue(
                                        m.DataValueFactory.MakeFilterDataValue(
                                            e.value
                                        ),
                                        e.hierarchicalPath,
                                        e.level
                                    );
                                }),
                                r = e.levelInfo.map(function (e) {
                                    return new h.HierarchicalLevelDetail(
                                        e.name,
                                        p.InternalToExternalEnumMappings.hierarchicalLevelSelectionState.convert(
                                            e.levelSelectionState
                                        )
                                    );
                                });
                            return new h.HierarchicalFilter(
                                e.visualId.worksheet,
                                e.fieldCaption,
                                e.fieldName,
                                u.FilterType.Hierarchical,
                                this._registryId,
                                e.dimensionName,
                                e.hierarchyCaption,
                                e.levels,
                                r,
                                t,
                                e.isAllSelected
                            );
                        }),
                        (t.prototype.convertRangeFilter = function (e) {
                            var t = m.DataValueFactory.MakeFilterDataValue(
                                    e.min
                                ),
                                r = m.DataValueFactory.MakeFilterDataValue(
                                    e.max
                                );
                            return new h.RangeFilter(
                                e.visualId.worksheet,
                                e.fieldCaption,
                                e.fieldName,
                                u.FilterType.Range,
                                this._registryId,
                                t,
                                r,
                                e.includeNullValues
                            );
                        }),
                        (t.prototype.convertRelativeDateFilter = function (e) {
                            var t = m.DataValueFactory.MakeFilterDataValue(
                                e.anchorDate
                            );
                            return new h.RelativeDateFilter(
                                e.visualId.worksheet,
                                e.fieldCaption,
                                e.fieldName,
                                s.FilterType.RelativeDate,
                                this._registryId,
                                t,
                                p.InternalToExternalEnumMappings.dateStepPeriod.convert(
                                    e.periodType
                                ),
                                p.InternalToExternalEnumMappings.dateRangeType.convert(
                                    e.rangeType
                                ),
                                e.rangeN
                            );
                        }),
                        (t.prototype.convertCategoricalDomain = function (
                            e,
                            t
                        ) {
                            var r = e.values.map(function (e) {
                                return m.DataValueFactory.MakeFilterDataValue(
                                    e
                                );
                            });
                            return new h.CategoricalDomain(r, t);
                        }),
                        (t.prototype.convertRangeDomain = function (e, t) {
                            var r = m.DataValueFactory.MakeFilterDataValue(
                                    e.min
                                ),
                                i = m.DataValueFactory.MakeFilterDataValue(
                                    e.max
                                );
                            return new h.RangeDomain(r, i, t);
                        }),
                        (t.prototype.convertAnchorDate = function (e) {
                            var t = e.getUTCFullYear(),
                                r = e.getUTCMonth() + 1,
                                i = e.getUTCDate(),
                                n = e.getUTCHours(),
                                a = e.getUTCMinutes(),
                                o = e.getUTCSeconds();
                            if (
                                isNaN(t) ||
                                isNaN(r) ||
                                isNaN(i) ||
                                isNaN(n) ||
                                isNaN(a) ||
                                isNaN(o)
                            )
                                throw new c.TableauError(
                                    s.EmbeddingErrorCodes.InvalidDateParameter,
                                    "Invalid date parameter: anchorDate"
                                );
                            return (
                                t +
                                "-" +
                                r +
                                "-" +
                                i +
                                " " +
                                n +
                                ":" +
                                a +
                                ":" +
                                o
                            );
                        }),
                        (t.prototype.apiFilterHandlerCheckForCommandError =
                            function (e) {
                                if (e[l.ParameterId.ParameterError]) {
                                    if (e[l.ParameterId.InvalidFieldCaption])
                                        throw new c.TableauError(
                                            s.SharedErrorCodes.InvalidFilterFieldName,
                                            e[l.ParameterId.InvalidFieldCaption]
                                        );
                                    if (e[l.ParameterId.InvalidValues])
                                        throw new c.TableauError(
                                            s.SharedErrorCodes.InvalidFilterFieldValue,
                                            e[l.ParameterId.InvalidValues]
                                        );
                                    if (e[l.ParameterId.InvalidAggFieldName])
                                        throw new c.TableauError(
                                            s.SharedErrorCodes.InvalidAggregationFieldName,
                                            e[l.ParameterId.InvalidAggFieldName]
                                        );
                                    throw new c.TableauError(
                                        s.SharedErrorCodes.ServerError,
                                        "Server Error"
                                    );
                                }
                            }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.FilterServiceImpl = g;
        },
        7712: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(7419),
                o = r(3448),
                s = r(6680),
                l = r(5136),
                u = r(1044),
                c = r(5068),
                d = r(7968),
                p = r(8052),
                h = r(3483),
                m = (function (e) {
                    function t() {
                        var t =
                            (null !== e && e.apply(this, arguments)) || this;
                        return (t.viewDataTableCacheId = s.v4()), t;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "get-data-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.getMaxRowLimit = function () {
                            return 1e4;
                        }),
                        (t.prototype.getViewDataTableCacheId = function () {
                            return this.viewDataTableCacheId;
                        }),
                        (t.prototype.getLimitedMaxRows = function (e, t) {
                            return e > 0 && e < t ? e : t;
                        }),
                        (t.prototype.getUnderlyingDataAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n,
                            a,
                            s,
                            l,
                            c
                        ) {
                            var d,
                                p = this,
                                m = t === h.GetDataType.Summary,
                                y = m
                                    ? "getSummaryDataAsync"
                                    : "getUnderlyingDataAsync",
                                g = m
                                    ? o.VerbId.GetDataSummaryData
                                    : o.VerbId.GetUnderlyingData,
                                f =
                                    g === o.VerbId.GetUnderlyingData
                                        ? this.getLimitedMaxRows(
                                              s,
                                              this.getMaxRowLimit() + 1
                                          )
                                        : s,
                                b =
                                    (((d = {})[o.ParameterId.FunctionName] = y),
                                    d);
                            return (
                                (b[o.ParameterId.VisualId] = e),
                                (b[o.ParameterId.IgnoreAliases] = r),
                                (b[o.ParameterId.IgnoreSelection] = i),
                                (b[o.ParameterId.IncludeAllColumns] = n),
                                (b[o.ParameterId.ColumnsToIncludeById] =
                                    this.verifyIncludeColumnArray(a)),
                                (b[o.ParameterId.MaxRows] = f),
                                (b[o.ParameterId.ShowDataTableFormat] =
                                    u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(
                                        l
                                    )),
                                (b[o.ParameterId.ApplyWorksheetFormatting] = c),
                                this.execute(g, b).then(function (e) {
                                    var t = e.result;
                                    return p.processResultsTable(
                                        t.data,
                                        t.isSummary
                                    );
                                })
                            );
                        }),
                        (t.prototype.getSummaryDataReaderAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n,
                            a,
                            s,
                            l
                        ) {
                            var c,
                                p = this,
                                h =
                                    (((c = {})[o.ParameterId.FunctionName] =
                                        "getSummaryDataReaderAsync"),
                                    (c[o.ParameterId.ViewDataTableCacheId] =
                                        this.getViewDataTableCacheId()),
                                    (c[o.ParameterId.VisualId] = e),
                                    (c[o.ParameterId.PageRowCount] = t),
                                    (c[o.ParameterId.IgnoreAliases] = r),
                                    (c[o.ParameterId.IgnoreSelection] = i),
                                    (c[o.ParameterId.IncludeAllColumns] = n),
                                    (c[o.ParameterId.ColumnsToIncludeById] =
                                        this.verifyIncludeColumnArray(a)),
                                    (c[o.ParameterId.ShowDataTableFormat] =
                                        u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(
                                            s
                                        )),
                                    (c[o.ParameterId.ApplyWorksheetFormatting] =
                                        l),
                                    c);
                            return this.execute(
                                o.VerbId.GetDataSummaryDataReader,
                                h
                            ).then(function (e) {
                                var r = e.result;
                                return new d.DataTableReader(
                                    r.id,
                                    r.totalRowCount,
                                    t,
                                    p._registryId
                                );
                            });
                        }),
                        (t.prototype.getSummaryColumnsInfoAsync = function (e) {
                            var t,
                                r = o.VerbId.GetDataSummaryData,
                                i =
                                    (((t = {})[o.ParameterId.FunctionName] =
                                        "getSummaryColumnsInfoAsync"),
                                    (t[o.ParameterId.VisualId] = e),
                                    (t[o.ParameterId.IgnoreAliases] = !0),
                                    (t[o.ParameterId.IgnoreSelection] = !0),
                                    (t[o.ParameterId.IncludeAllColumns] = !0),
                                    (t[o.ParameterId.MaxRows] = 1),
                                    (t[o.ParameterId.ShowDataTableFormat] =
                                        o.ApiShowDataTableFormat.NativeValuesOnly),
                                    t);
                            return this.execute(r, i).then(function (e) {
                                return e.result.data.headers.map(function (e) {
                                    return new c.Column(
                                        e.fieldCaption,
                                        e.fieldName,
                                        e.dataType,
                                        e.isReferenced,
                                        e.index
                                    );
                                });
                            });
                        }),
                        (t.prototype.getSelectedMarksAsync = function (e) {
                            var t,
                                r = this,
                                i =
                                    (((t = {})[o.ParameterId.FunctionName] =
                                        "getSelectedMarksAsync"),
                                    (t[o.ParameterId.VisualId] = e),
                                    t);
                            return this.execute(
                                o.VerbId.GetSelectedMarks,
                                i
                            ).then(function (e) {
                                return {
                                    data: e.result.data.map(function (e) {
                                        return r.processResultsTable(e, !0);
                                    }),
                                };
                            });
                        }),
                        (t.prototype.getHighlightedMarksAsync = function (e) {
                            var t,
                                r = this,
                                i =
                                    (((t = {})[o.ParameterId.FunctionName] =
                                        "getHighlightedMarksAsync"),
                                    (t[o.ParameterId.VisualId] = e),
                                    t);
                            return this.execute(
                                o.VerbId.GetHighlightedMarks,
                                i
                            ).then(function (e) {
                                return {
                                    data: e.result.data.map(function (e) {
                                        return r.processResultsTable(e, !0);
                                    }),
                                };
                            });
                        }),
                        (t.prototype.getDataSourceDataAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n,
                            a
                        ) {
                            var s,
                                l = this,
                                c =
                                    (((s = {})[o.ParameterId.FunctionName] =
                                        "getDataSourceDataAsync"),
                                    (s[o.ParameterId.DataSourceId] = e),
                                    (s[o.ParameterId.IgnoreAliases] = t),
                                    (s[o.ParameterId.MaxRows] =
                                        this.getLimitedMaxRows(
                                            r,
                                            this.getMaxRowLimit() + 1
                                        )),
                                    (s[o.ParameterId.ColumnsToInclude] =
                                        this.verifyIncludeColumnArray(i)),
                                    (s[o.ParameterId.ColumnsToIncludeById] =
                                        this.verifyIncludeColumnArray(n)),
                                    (s[o.ParameterId.ShowDataTableFormat] =
                                        u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(
                                            a
                                        )),
                                    s);
                            return this.execute(
                                o.VerbId.GetDataSourceData,
                                c
                            ).then(function (e) {
                                var t = e.result;
                                return l.processResultsTable(t.data, !1);
                            });
                        }),
                        (t.prototype.getLogicalTableDataAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n,
                            a,
                            s
                        ) {
                            var l,
                                c = this,
                                d =
                                    (((l = {})[o.ParameterId.FunctionName] =
                                        "getLogicalTableDataAsync"),
                                    (l[o.ParameterId.ColumnsToInclude] = n),
                                    (l[o.ParameterId.ColumnsToIncludeById] =
                                        this.verifyIncludeColumnArray(a)),
                                    (l[o.ParameterId.DataSourceId] = e),
                                    (l[o.ParameterId.IgnoreAliases] = r),
                                    (l[o.ParameterId.LogicalTableId] = t),
                                    (l[o.ParameterId.MaxRows] =
                                        this.getLimitedMaxRows(
                                            i,
                                            this.getMaxRowLimit() + 1
                                        )),
                                    (l[o.ParameterId.ShowDataTableFormat] =
                                        u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(
                                            s
                                        )),
                                    l);
                            return this.execute(
                                o.VerbId.GetLogicalTableData,
                                d
                            ).then(function (e) {
                                var t = e.result;
                                return c.processResultsTable(t.data, !1);
                            });
                        }),
                        (t.prototype.getLogicalTableDataReaderAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n,
                            a
                        ) {
                            var s,
                                l = this;
                            r = this.getLimitedMaxRows(
                                r,
                                this.getMaxRowLimit()
                            );
                            var c =
                                (((s = {})[o.ParameterId.FunctionName] =
                                    "getLogicalTableDataReaderAsync"),
                                (s[o.ParameterId.ViewDataTableCacheId] =
                                    this.getViewDataTableCacheId()),
                                (s[o.ParameterId.DataSourceId] = e),
                                (s[o.ParameterId.LogicalTableId] = t),
                                (s[o.ParameterId.PageRowCount] = r),
                                (s[o.ParameterId.IgnoreAliases] = i),
                                (s[o.ParameterId.ColumnsToIncludeById] =
                                    this.verifyIncludeColumnArray(n)),
                                (s[o.ParameterId.ShowDataTableFormat] =
                                    u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(
                                        a
                                    )),
                                s);
                            return this.execute(
                                o.VerbId.GetLogicalTableDataReader,
                                c
                            ).then(function (e) {
                                var t = e.result;
                                return new d.DataTableReader(
                                    t.id,
                                    t.totalRowCount,
                                    r,
                                    l._registryId
                                );
                            });
                        }),
                        (t.prototype.getUnderlyingTableDataAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n,
                            a,
                            s,
                            l,
                            c
                        ) {
                            var d,
                                p = this,
                                h =
                                    (((d = {})[o.ParameterId.FunctionName] =
                                        "getUnderlyingTableDataAsync"),
                                    (d[o.ParameterId.VisualId] = e),
                                    (d[o.ParameterId.LogicalTableId] = t),
                                    (d[o.ParameterId.IgnoreAliases] = r),
                                    (d[o.ParameterId.IgnoreSelection] = i),
                                    (d[o.ParameterId.IncludeAllColumns] = n),
                                    (d[o.ParameterId.ColumnsToIncludeById] =
                                        this.verifyIncludeColumnArray(a)),
                                    (d[o.ParameterId.MaxRows] =
                                        this.getLimitedMaxRows(
                                            s,
                                            this.getMaxRowLimit() + 1
                                        )),
                                    (d[o.ParameterId.ShowDataTableFormat] =
                                        u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(
                                            l
                                        )),
                                    (d[o.ParameterId.ApplyWorksheetFormatting] =
                                        c),
                                    d);
                            return this.execute(
                                o.VerbId.GetUnderlyingTableData,
                                h
                            ).then(function (e) {
                                var t = e.result;
                                return p.processResultsTable(t.data, !1);
                            });
                        }),
                        (t.prototype.getUnderlyingTableDataReaderAsync =
                            function (e, t, r, i, n, a, s, l, c) {
                                var p,
                                    h = this;
                                r = this.getLimitedMaxRows(
                                    r,
                                    this.getMaxRowLimit()
                                );
                                var m =
                                    (((p = {})[o.ParameterId.FunctionName] =
                                        "getUnderlyingTableDataReaderAsync"),
                                    (p[o.ParameterId.ViewDataTableCacheId] =
                                        this.getViewDataTableCacheId()),
                                    (p[o.ParameterId.VisualId] = e),
                                    (p[o.ParameterId.LogicalTableId] = t),
                                    (p[o.ParameterId.IgnoreAliases] = i),
                                    (p[o.ParameterId.IgnoreSelection] = n),
                                    (p[o.ParameterId.IncludeAllColumns] = a),
                                    (p[o.ParameterId.ColumnsToIncludeById] =
                                        this.verifyIncludeColumnArray(s)),
                                    (p[o.ParameterId.ShowDataTableFormat] =
                                        u.ExternalToInternalEnumMappings.showDataTableFormatType.convert(
                                            l
                                        )),
                                    (p[o.ParameterId.PageRowCount] = r),
                                    (p[o.ParameterId.ApplyWorksheetFormatting] =
                                        c),
                                    p);
                                return this.execute(
                                    o.VerbId.GetUnderlyingTableDataReader,
                                    m
                                ).then(function (e) {
                                    var t = e.result;
                                    return new d.DataTableReader(
                                        t.id,
                                        t.totalRowCount,
                                        r,
                                        h._registryId
                                    );
                                });
                            }),
                        (t.prototype.getPageAsync = function (e, r, i) {
                            var n,
                                a = this,
                                s =
                                    (((n = {})[o.ParameterId.FunctionName] =
                                        "getPageAsync"),
                                    (n[o.ParameterId.ViewDataTableCacheId] =
                                        this.getViewDataTableCacheId()),
                                    (n[o.ParameterId.ViewDataTableId] = e),
                                    (n[o.ParameterId.DataRowIndex] = r * i),
                                    n);
                            return this.execute(
                                o.VerbId.GetDataTableReaderPage,
                                s
                            ).then(function (r) {
                                var i = r.result;
                                return a.processResultsPage(
                                    i,
                                    e === t.summaryTableId
                                );
                            });
                        }),
                        (t.prototype.releaseAsync = function (e) {
                            var t,
                                r =
                                    (((t = {})[o.ParameterId.FunctionName] =
                                        "release"),
                                    (t[o.ParameterId.ViewDataTableCacheId] =
                                        this.getViewDataTableCacheId()),
                                    (t[o.ParameterId.ViewDataTableId] = e),
                                    t);
                            return this.execute(
                                o.VerbId.ReleaseDataTableReader,
                                r
                            ).then(function (e) {});
                        }),
                        (t.prototype.verifyIncludeColumnArray = function (e) {
                            if (!Array.isArray(e))
                                throw new l.TableauError(
                                    a.ErrorCodes.InvalidParameter,
                                    "columnsToInclude and columnsToIncludeById must be valid arrays"
                                );
                            var t = new Set(e);
                            return Array.from(t);
                        }),
                        (t.prototype.processResultsTable = function (e, t) {
                            var r,
                                i = e.headers.map(function (e) {
                                    return new c.Column(
                                        e.fieldCaption,
                                        e.fieldName,
                                        e.dataType,
                                        e.isReferenced,
                                        e.index
                                    );
                                });
                            e.marks &&
                                (r = e.marks.map(function (e) {
                                    return new c.MarkInfo(
                                        e.type,
                                        e.color,
                                        e.tupleId
                                    );
                                }));
                            var n =
                                !1 === t &&
                                e.dataTable.length ===
                                    this.getMaxRowLimit() + 1;
                            n && (e.dataTable.length -= 1);
                            var a = e.dataTable.map(function (e) {
                                return e.map(function (e, t) {
                                    return p.DataValueFactory.MakeTableDataValue(
                                        e,
                                        i[t].dataType
                                    );
                                });
                            });
                            return r
                                ? new c.DataTable(a, i, a.length, n, t, r)
                                : new c.DataTable(a, i, a.length, n, t);
                        }),
                        (t.prototype.processResultsPage = function (e, t) {
                            var r,
                                i = e.headers.map(function (e) {
                                    return new c.Column(
                                        e.fieldCaption,
                                        e.fieldName,
                                        e.dataType,
                                        e.isReferenced,
                                        e.index
                                    );
                                });
                            e.marks &&
                                (r = e.marks.map(function (e) {
                                    return new c.MarkInfo(
                                        e.type,
                                        e.color,
                                        e.tupleId
                                    );
                                }));
                            var n = e.dataTable.map(function (e) {
                                return e.map(function (e, t) {
                                    return p.DataValueFactory.MakeTableDataValue(
                                        e,
                                        i[t].dataType
                                    );
                                });
                            });
                            return r
                                ? new c.DataTable(n, i, n.length, !1, t, r)
                                : new c.DataTable(n, i, n.length, !1, t);
                        }),
                        (t.summaryTableId = ""),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.GetDataServiceImpl = m;
        },
        1288: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = (function (e) {
                function t() {
                    return (null !== e && e.apply(this, arguments)) || this;
                }
                return (
                    n(t, e),
                    Object.defineProperty(t.prototype, "serviceName", {
                        get: function () {
                            return "notification-service";
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    t
                );
            })(r(6428).NotificationServiceImplBase);
            t.NotificationServiceImpl = a;
        },
        6428: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e, t) {
                    (this._filterFn = e), (this._callbackFn = t);
                }
                return (
                    (e.prototype.onNotification = function (e) {
                        this._filterFn(e) && this._callbackFn(e);
                    }),
                    e
                );
            })();
            t.Registration = r;
            var i = (function () {
                function e(e) {
                    (this.dispatcher = e),
                        (this._handlers = {}),
                        this.dispatcher.registerNotificationHandler(
                            this.onNotification.bind(this)
                        );
                }
                return (
                    (e.prototype.registerHandler = function (e, t, i) {
                        var n = this,
                            a = this._handlers[e] || new Array(),
                            o = new r(t, i);
                        return (
                            a.push(o),
                            (this._handlers[e] = a),
                            function () {
                                return n.removeRegistration(e, o);
                            }
                        );
                    }),
                    (e.prototype.hasHandlersForNotificationType = function (e) {
                        return this._handlers.hasOwnProperty(e);
                    }),
                    (e.prototype.onNotification = function (e) {
                        this.hasHandlersForNotificationType(e.notificationId) &&
                            this._handlers[e.notificationId].forEach(function (
                                t
                            ) {
                                return t.onNotification(e.data);
                            });
                    }),
                    (e.prototype.removeRegistration = function (e, t) {
                        this.hasHandlersForNotificationType(e) &&
                            (this._handlers[e] = this._handlers[e].filter(
                                function (e) {
                                    return e !== t;
                                }
                            ));
                    }),
                    e
                );
            })();
            t.NotificationServiceImplBase = i;
        },
        7260: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(7419),
                o = r(3448),
                s = r(8552),
                l = r(6664),
                u = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "parameters-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.getParametersForSheetAsync = function (e) {
                            var t,
                                r =
                                    (((t = {})[o.ParameterId.FunctionName] =
                                        "getParametersForSheetAsync"),
                                    (t[o.ParameterId.SheetPath] = e),
                                    t);
                            return this.getParametersAsync(r);
                        }),
                        (t.prototype.getAllParametersAsync = function () {
                            var e,
                                t =
                                    (((e = {})[o.ParameterId.FunctionName] =
                                        "getParametersForSheetAsync"),
                                    e);
                            return this.getParametersAsync(t);
                        }),
                        (t.prototype.getParametersAsync = function (e) {
                            var t = this;
                            return this.execute(
                                o.VerbId.GetParametersForSheet,
                                e
                            ).then(function (e) {
                                return e.result.map(function (e) {
                                    return new s.ParameterImpl(
                                        e,
                                        t._registryId
                                    );
                                });
                            });
                        }),
                        (t.prototype.changeParameterValueAsync = function (
                            e,
                            t
                        ) {
                            var r,
                                i =
                                    (((r = {})[o.ParameterId.FunctionName] =
                                        "changeParameterValueAsync"),
                                    (r[o.ParameterId.ParameterFieldName] = e),
                                    (r[o.ParameterId.ParameterValue] = t),
                                    r);
                            return this.execute(
                                o.VerbId.ChangeParameterValue,
                                i
                            ).then(function (e) {
                                return e.result;
                            });
                        }),
                        (t.prototype.findParameterByNameAsync = function (e) {
                            return this.findParameterAsync(e, void 0);
                        }),
                        (t.prototype.findParameterByGlobalFieldNameAsync =
                            function (e) {
                                return this.findParameterAsync(void 0, e);
                            }),
                        (t.prototype.findParameterAsync = function (e, t) {
                            var r,
                                i = this,
                                n =
                                    (((r = {})[o.ParameterId.FunctionName] =
                                        "findParameterAsync"),
                                    r);
                            if (void 0 !== e)
                                n[o.ParameterId.ParameterCaption] = e;
                            else {
                                if (void 0 === t)
                                    throw new l.TableauError(
                                        a.ErrorCodes.InvalidParameter,
                                        "name or fieldName must be provided to find parameter"
                                    );
                                n[o.ParameterId.ParameterFieldName] = t;
                            }
                            return this.execute(o.VerbId.FindParameter, n).then(
                                function (e) {
                                    if ("fieldName" in e.result) {
                                        var t = e.result;
                                        return new s.ParameterImpl(
                                            t,
                                            i._registryId
                                        );
                                    }
                                }
                            );
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.ParametersServiceImpl = u;
        },
        8784: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(7419),
                o = r(3448),
                s = r(7104),
                l = r(6664),
                u = r(1172),
                c = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "selection-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.clearSelectedMarksAsync = function (e) {
                            var t,
                                r =
                                    (((t = {})[o.ParameterId.FunctionName] =
                                        "clearSelectedMarksAsync"),
                                    (t[o.ParameterId.VisualId] = e),
                                    t);
                            return this.execute(
                                o.VerbId.ClearSelectedMarks,
                                r
                            ).then(function (e) {});
                        }),
                        (t.prototype.selectMarksByValueAsync = function (
                            e,
                            t,
                            r
                        ) {
                            var i,
                                n = this;
                            if (0 === t.length)
                                throw new l.TableauError(
                                    a.ErrorCodes.InvalidParameter,
                                    "Selection criteria missing for selecting marks by value"
                                );
                            var s = this.validateSelectionUpdateType(r),
                                u = this.parseSelectionMarks(t),
                                c =
                                    (((i = {})[o.ParameterId.FunctionName] =
                                        "selectMarksByValueAsync"),
                                    (i[o.ParameterId.VisualId] = e),
                                    (i[o.ParameterId.SelectionUpdateType] = s),
                                    i);
                            return (
                                u.hierModelArr &&
                                    u.hierModelArr.length &&
                                    (c[o.ParameterId.HierValSelectionModels] =
                                        u.hierModelArr),
                                u.quantModelArr &&
                                    u.quantModelArr.length &&
                                    (c[
                                        o.ParameterId.QuantRangeSelectionModels
                                    ] = u.quantModelArr),
                                u.dimModelArr &&
                                    u.dimModelArr.length &&
                                    (c[o.ParameterId.DimValSelectionModels] =
                                        u.dimModelArr),
                                this.execute(o.VerbId.SelectByValue, c).then(
                                    function (e) {
                                        n.apiFilterHandlerCheckForCommandError(
                                            e.result
                                        );
                                    }
                                )
                            );
                        }),
                        (t.prototype.hoverTupleAsync = function (e, t, r, i) {
                            var n,
                                a = new s.HoverTupleInteractionModel(
                                    e,
                                    this.ensureTupleIDIsNonNegative(t),
                                    r,
                                    i
                                ),
                                l =
                                    (((n = {})[o.ParameterId.FunctionName] =
                                        "hoverTupleAsync"),
                                    (n[o.ParameterId.HoverTupleInteraction] =
                                        a),
                                    n);
                            return this.execute(
                                o.VerbId.RaiseHoverTupleNotification,
                                l
                            ).then(function (e) {});
                        }),
                        (t.prototype.selectTuplesAsync = function (e, t, r, i) {
                            var n,
                                a = new s.SelectTuplesInteractionModel(
                                    e,
                                    t,
                                    r,
                                    i
                                ),
                                l =
                                    (((n = {})[o.ParameterId.FunctionName] =
                                        "selectTuplesAsync"),
                                    (n[o.ParameterId.SelectTuplesInteraction] =
                                        a),
                                    n);
                            return this.execute(
                                o.VerbId.RaiseSelectTuplesNotification,
                                l
                            ).then(function (e) {});
                        }),
                        (t.prototype.apiFilterHandlerCheckForCommandError =
                            function (e) {
                                if (e[o.ParameterId.ParameterError]) {
                                    if (e[o.ParameterId.InvalidFields])
                                        throw new l.TableauError(
                                            a.SharedErrorCodes.InvalidSelectionFieldName,
                                            e[o.ParameterId.InvalidFields]
                                        );
                                    if (e[o.ParameterId.InvalidValues])
                                        throw new l.TableauError(
                                            a.SharedErrorCodes.InvalidSelectionValue,
                                            e[o.ParameterId.InvalidValues]
                                        );
                                    if (e[o.ParameterId.InvalidDates])
                                        throw new l.TableauError(
                                            a.SharedErrorCodes.InvalidSelectionDate,
                                            e[o.ParameterId.InvalidDates]
                                        );
                                }
                            }),
                        (t.prototype.selectMarksByIdAsync = function (e, t, r) {
                            var i;
                            if (0 === t.length)
                                throw new l.TableauError(
                                    a.ErrorCodes.InvalidParameter,
                                    "Marks info missing for selecting marks by Id"
                                );
                            var n = this.validateSelectionUpdateType(r),
                                s = this.parseSelectionIds(t),
                                u =
                                    (((i = {})[o.ParameterId.FunctionName] =
                                        "selectMarksByIdAsync"),
                                    (i[o.ParameterId.VisualId] = e),
                                    (i[o.ParameterId.SelectionUpdateType] = n),
                                    (i[o.ParameterId.Selection] = s.selection),
                                    i);
                            return this.execute(o.VerbId.SelectByValue, u).then(
                                function (e) {}
                            );
                        }),
                        (t.prototype.parseSelectionIds = function (e) {
                            for (
                                var t = [],
                                    r = new s.SelectionModelsContainer(),
                                    i = 0;
                                i < e.length;
                                i++
                            ) {
                                var n = e[i].tupleId;
                                if (null == n)
                                    throw new l.TableauError(
                                        a.ErrorCodes.InternalError,
                                        "tupleId parsing error"
                                    );
                                t.push(n.toString());
                            }
                            if (0 !== t.length) {
                                var o = new s.TupleSelectionModel();
                                (o.selectionType = "tuples"),
                                    (o.objectIds = t),
                                    (r.selection = o);
                            }
                            return r;
                        }),
                        (t.prototype.parseSelectionMarks = function (e) {
                            for (
                                var t = new s.SelectionModelsContainer(), r = 0;
                                r < e.length;
                                r++
                            ) {
                                var i = e[r];
                                if (
                                    !i.fieldName ||
                                    void 0 === i.value ||
                                    null === i.value
                                )
                                    throw new l.TableauError(
                                        a.ErrorCodes.InternalError,
                                        "Selection Criteria parsing error"
                                    );
                                var n = new RegExp("([[A-Za-z0-9]+]).*", "g"),
                                    o = i.value;
                                if (n.test(i.fieldName)) {
                                    var u = this.addToParamsList(
                                        i.fieldName,
                                        i.value
                                    );
                                    t.hierModelArr.push(u);
                                } else if (
                                    void 0 !== o.min &&
                                    void 0 !== o.max
                                ) {
                                    var c = this.addToRangeParamsList(
                                        i.fieldName,
                                        o
                                    );
                                    t.quantModelArr.push(c);
                                } else {
                                    var d = this.addToParamsList(
                                        i.fieldName,
                                        i.value
                                    );
                                    t.dimModelArr.push(d);
                                }
                            }
                            return t;
                        }),
                        (t.prototype.addToParamsList = function (e, t) {
                            var r = new s.ValueSelectionModel(),
                                i = [];
                            if (t instanceof Array)
                                for (var n = t, a = 0; a < n.length; a++)
                                    i.push(
                                        u.Param.serializeParameterValue(n[a])
                                    );
                            else i.push(u.Param.serializeParameterValue(t));
                            return (
                                (r.qualifiedFieldCaption = e),
                                (r.selectValues = i),
                                r
                            );
                        }),
                        (t.prototype.addToRangeParamsList = function (e, t) {
                            var r = new s.RangeSelectionModel();
                            return (
                                (r.qualifiedFieldCaption = e),
                                void 0 !== t.max &&
                                    null !== t.max &&
                                    (r.maxValue =
                                        u.Param.serializeParameterValue(t.max)),
                                void 0 !== t.min &&
                                    null !== t.min &&
                                    (r.minValue =
                                        u.Param.serializeParameterValue(t.min)),
                                (r.included = this.validateNullOptionType(
                                    t.nullOption
                                )),
                                r
                            );
                        }),
                        (t.prototype.validateSelectionUpdateType = function (
                            e
                        ) {
                            return e === a.SelectionUpdateType.Replace
                                ? o.SelectionUpdateType.Replace
                                : e === a.SelectionUpdateType.Add
                                ? o.SelectionUpdateType.Add
                                : e === a.SelectionUpdateType.Remove
                                ? o.SelectionUpdateType.Remove
                                : o.SelectionUpdateType.Replace;
                        }),
                        (t.prototype.validateNullOptionType = function (e) {
                            if (e) {
                                if (e === a.FilterNullOption.NullValues)
                                    return o.QuantitativeIncludedValues
                                        .IncludeNull;
                                if (e === a.FilterNullOption.NonNullValues)
                                    return o.QuantitativeIncludedValues
                                        .IncludeNonNull;
                                if (e === a.FilterNullOption.AllValues)
                                    return o.QuantitativeIncludedValues
                                        .IncludeAll;
                            }
                            return o.QuantitativeIncludedValues.IncludeAll;
                        }),
                        (t.prototype.ensureTupleIDIsNonNegative = function (e) {
                            return e && e > 0 ? e : 0;
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.SelectionServiceImpl = c;
        },
        1776: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(6557),
                n = r(6664),
                a = r(5520),
                o = (function () {
                    function e(e, t) {
                        (this._dispatcher = e), (this._registryId = t);
                    }
                    return (
                        (e.prototype.execute = function (e, t) {
                            return this._dispatcher
                                .execute(e, t)
                                .catch(function (e) {
                                    var t = e,
                                        r =
                                            i.InternalToExternalEnumMappings.errorCode.convert(
                                                t.errorCode,
                                                a.ShouldThrow.No
                                            );
                                    throw new n.TableauError(r, t.message);
                                });
                        }),
                        e
                    );
                })();
            t.ServiceImplBase = o;
        },
        4109: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(3448),
                o = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "size-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.changeSizeAsync = function (e, t) {
                            var r,
                                i,
                                n,
                                o,
                                s,
                                l =
                                    (((r = {})[a.ParameterId.FunctionName] =
                                        "changeSizeAsync"),
                                    (r[a.ParameterId.SheetName] = e),
                                    (r[a.ParameterId.MinHeight] =
                                        (null === (i = t.minSize) ||
                                        void 0 === i
                                            ? void 0
                                            : i.height) || 0),
                                    (r[a.ParameterId.MinWidth] =
                                        (null === (n = t.minSize) ||
                                        void 0 === n
                                            ? void 0
                                            : n.width) || 0),
                                    (r[a.ParameterId.MaxHeight] =
                                        (null === (o = t.maxSize) ||
                                        void 0 === o
                                            ? void 0
                                            : o.height) || 0),
                                    (r[a.ParameterId.MaxWidth] =
                                        (null === (s = t.maxSize) ||
                                        void 0 === s
                                            ? void 0
                                            : s.width) || 0),
                                    r);
                            return this.execute(a.VerbId.SetSheetSize, l).then(
                                function (e) {}
                            );
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.SizeServiceImpl = o;
        },
        2248: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(3448),
                o = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "story-activation-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.activateNextStoryPointAsync = function () {
                            var e,
                                t = a.VerbId.ActivateNextStoryPoint,
                                r =
                                    (((e = {})[a.ParameterId.FunctionName] =
                                        "activateNextStoryPointAsync"),
                                    e);
                            return this.execute(t, r).then(function (e) {});
                        }),
                        (t.prototype.activatePreviousStoryPointAsync =
                            function () {
                                var e,
                                    t = a.VerbId.ActivatePreviousStoryPoint,
                                    r =
                                        (((e = {})[a.ParameterId.FunctionName] =
                                            "activatePreviousStoryPointAsync"),
                                        e);
                                return this.execute(t, r).then(function (e) {});
                            }),
                        (t.prototype.activateStoryPointAsync = function (e) {
                            var t,
                                r = a.VerbId.ActivateStoryPoint,
                                i =
                                    (((t = {})[a.ParameterId.FunctionName] =
                                        "activateStoryPointAsync"),
                                    t);
                            return (
                                (i[a.ParameterId.StoryPointIndex] = e),
                                this.execute(r, i).then(function (e) {})
                            );
                        }),
                        (t.prototype.revertStoryPointAsync = function (e) {
                            var t,
                                r = a.VerbId.RevertStoryPoint,
                                i =
                                    (((t = {})[a.ParameterId.FunctionName] =
                                        "revertStoryPointAsync"),
                                    t);
                            return (
                                (i[a.ParameterId.StoryPointIndex] = e),
                                this.execute(r, i).then(function (e) {
                                    return e.result;
                                })
                            );
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.StoryActivationServiceImpl = o;
        },
        6096: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(3448),
                o = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "visual-model-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.getVisualSpecificationAsync = function (
                            e
                        ) {
                            var t,
                                r =
                                    (((t = {})[a.ParameterId.FunctionName] =
                                        "getVisualSpecificationAsync"),
                                    (t[a.ParameterId.WorksheetName] =
                                        e.worksheet),
                                    t);
                            return this.execute(
                                a.VerbId.GetVisualSpecification,
                                r
                            ).then(function (e) {
                                return e.result;
                            });
                        }),
                        (t.prototype.addMarksCardFieldsAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n
                        ) {
                            var o,
                                s =
                                    (((o = {})[a.ParameterId.FunctionName] =
                                        "addMarksCardFieldsAsync"),
                                    (o[a.ParameterId.WorksheetName] =
                                        e.worksheet),
                                    (o[a.ParameterId.MarksCardIndex] = t),
                                    (o[a.ParameterId.EncodingType] = r),
                                    (o[a.ParameterId.Columns] = i),
                                    (o[a.ParameterId.StartIndex] = n),
                                    o);
                            return this.execute(
                                a.VerbId.AddMarksCardFields,
                                s
                            ).then(function () {});
                        }),
                        (t.prototype.moveMarksCardFieldAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n
                        ) {
                            var o;
                            void 0 === n && (n = 1);
                            var s =
                                (((o = {})[a.ParameterId.FunctionName] =
                                    "addMarksCardFieldsAsync"),
                                (o[a.ParameterId.WorksheetName] = e.worksheet),
                                (o[a.ParameterId.MarksCardIndex] = t),
                                (o[a.ParameterId.FromIndex] = r),
                                (o[a.ParameterId.ToIndex] = i),
                                (o[a.ParameterId.FieldCount] = n),
                                o);
                            return this.execute(
                                a.VerbId.MoveMarksCardField,
                                s
                            ).then(function () {});
                        }),
                        (t.prototype.spliceMarksCardFieldsAsync = function (
                            e,
                            t,
                            r,
                            i,
                            n,
                            o
                        ) {
                            var s,
                                l =
                                    (((s = {})[a.ParameterId.FunctionName] =
                                        "spliceMarksCardFieldsAsync"),
                                    (s[a.ParameterId.WorksheetName] =
                                        e.worksheet),
                                    (s[a.ParameterId.MarksCardIndex] = t),
                                    (s[a.ParameterId.EncodingType] = r),
                                    (s[a.ParameterId.StartIndex] = i),
                                    (s[a.ParameterId.DeleteCount] = n),
                                    (s[a.ParameterId.Columns] = o),
                                    s);
                            return this.execute(
                                a.VerbId.SpliceMarksCardFields,
                                l
                            ).then(function () {});
                        }),
                        (t.prototype.editAliasesDialogAsync = function (e) {
                            var t,
                                r =
                                    (((t = {})[a.ParameterId.FunctionName] =
                                        "editAliasesDialogAsync"),
                                    (t[a.ParameterId.FieldId] = e),
                                    t);
                            return this.execute(
                                a.VerbId.EditAliasesDialog,
                                r
                            ).then(function () {});
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.VisualModelServiceImpl = o;
        },
        744: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(3448),
                o = r(2520),
                s = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "viz-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.createVizImageAsync = function (e) {
                            var t,
                                r =
                                    (((t = {})[a.ParameterId.FunctionName] =
                                        "createVizImageAsync"),
                                    (t[a.ParameterId.VizAPIInputJson] =
                                        JSON.stringify(e)),
                                    t);
                            return this.execute(a.VerbId.VizAPI, r).then(
                                function (e) {
                                    return e.result;
                                }
                            );
                        }),
                        (t.prototype.activateSheetAsync = function (e) {
                            var t,
                                r =
                                    (((t = {})[a.ParameterId.FunctionName] =
                                        "activateSheetAsync"),
                                    (t[a.ParameterId.SwitchToSheetName] = e),
                                    t);
                            return this.execute(a.VerbId.ActivateSheet, r).then(
                                function () {}
                            );
                        }),
                        (t.prototype.getCustomViewsAsync = function () {
                            var e,
                                t = this,
                                r =
                                    (((e = {})[a.ParameterId.FunctionName] =
                                        "getCustomViewsAsync"),
                                    e);
                            return this.execute(
                                a.VerbId.GetCustomViews,
                                r
                            ).then(function (e) {
                                return e.result.map(function (e) {
                                    return new o.CustomViewImpl(
                                        e,
                                        t._registryId
                                    );
                                });
                            });
                        }),
                        (t.prototype.showCustomViewAsync = function (e) {
                            var t,
                                r = this,
                                i =
                                    (((t = {})[a.ParameterId.FunctionName] =
                                        "showCustomViewAsync"),
                                    (t[a.ParameterId.CustomViewName] = e || ""),
                                    t);
                            return this.execute(
                                a.VerbId.ShowCustomView,
                                i
                            ).then(function (e) {
                                var t,
                                    i = e.result;
                                return (
                                    null === (t = i) || void 0 === t
                                        ? void 0
                                        : t.luid
                                )
                                    ? new o.CustomViewImpl(i, r._registryId)
                                    : void 0;
                            });
                        }),
                        (t.prototype.removeCustomViewAsync = function (e) {
                            var t,
                                r = this,
                                i =
                                    (((t = {})[a.ParameterId.FunctionName] =
                                        "removeCustomViewAsync"),
                                    (t[a.ParameterId.CustomViewName] = e),
                                    t);
                            return this.execute(
                                a.VerbId.RemoveCustomView,
                                i
                            ).then(function (e) {
                                var t = e.result;
                                return new o.CustomViewImpl(t, r._registryId);
                            });
                        }),
                        (t.prototype.saveCustomViewAsync = function (e) {
                            var t,
                                r = this,
                                i =
                                    (((t = {})[a.ParameterId.FunctionName] =
                                        "saveCustomViewAsync"),
                                    (t[a.ParameterId.CustomViewName] = e),
                                    (t[a.ParameterId.CustomViewIsDefault] = !1),
                                    t);
                            return this.execute(
                                a.VerbId.SaveWorkbookAsCustomView,
                                i
                            ).then(function (e) {
                                var t = e.result;
                                return new o.CustomViewImpl(t, r._registryId);
                            });
                        }),
                        (t.prototype.setActiveCustomViewAsDefaultAsync =
                            function () {
                                var e,
                                    t =
                                        (((e = {})[a.ParameterId.FunctionName] =
                                            "setActiveCustomViewAsDefaultAsync"),
                                        e);
                                return this.execute(
                                    a.VerbId.SetActiveCustomViewAsDefault,
                                    t
                                ).then(function () {});
                            }),
                        (t.prototype.saveAsync = function (e) {
                            var t,
                                r = this,
                                i =
                                    (((t = {})[a.ParameterId.FunctionName] =
                                        "saveAsync"),
                                    (t[a.ParameterId.CustomViewLuid] = e.luid),
                                    (t[a.ParameterId.CustomViewName] = e.name),
                                    (t[a.ParameterId.CustomViewIsDefault] =
                                        e.isDefault),
                                    (t[a.ParameterId.CustomViewIsPublic] =
                                        e.shared),
                                    t);
                            return this.execute(
                                a.VerbId.UpdateCustomView,
                                i
                            ).then(function (e) {
                                var t = e.result;
                                return new o.CustomViewImpl(t, r._registryId);
                            });
                        }),
                        (t.prototype.getCurrentSrcAsync = function () {
                            var e,
                                t =
                                    (((e = {})[a.ParameterId.FunctionName] =
                                        "getCurrentSrcAsync"),
                                    e);
                            return this.execute(a.VerbId.GetCurrentSrc, t).then(
                                function (e) {
                                    return e.result;
                                }
                            );
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.VizServiceImpl = s;
        },
        8856: function (e, t, r) {
            var i,
                n =
                    (this && this.__extends) ||
                    ((i = function (e, t) {
                        return (
                            (i =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            i(e, t)
                        );
                    }),
                    function (e, t) {
                        function r() {
                            this.constructor = e;
                        }
                        i(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((r.prototype = t.prototype), new r()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = r(7419),
                o = r(3448),
                s = r(1044),
                l = r(7480),
                u = r(1172),
                c = (function (e) {
                    function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                    }
                    return (
                        n(t, e),
                        Object.defineProperty(t.prototype, "serviceName", {
                            get: function () {
                                return "zone-service";
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.setVisibilityAsync = function (e, t, r) {
                            var i,
                                n =
                                    (((i = {})[o.ParameterId.FunctionName] =
                                        "setVisibilityAsync"),
                                    (i[o.ParameterId.Dashboard] = e),
                                    (i[o.ParameterId.ZoneIdsVisibilityMap] =
                                        {}),
                                    i);
                            return (
                                u.Param.convertParameterToMap(
                                    r,
                                    "zoneVisibilityMap"
                                ).forEach(function (e, r) {
                                    l.ErrorHelpers.verifyZoneIsValid(
                                        t,
                                        Number.parseInt(r, 10)
                                    ),
                                        l.ErrorHelpers.verifyEnumValue(
                                            e,
                                            a.DashboardObjectVisibilityType,
                                            "DashboardObjectVisibilityType"
                                        ),
                                        (n[o.ParameterId.ZoneIdsVisibilityMap][
                                            r
                                        ] =
                                            s.ExternalToInternalEnumMappings.setVisibilityType.convert(
                                                e
                                            ));
                                }),
                                this.execute(
                                    o.VerbId.SetZoneVisibility,
                                    n
                                ).then(function (e) {})
                            );
                        }),
                        (t.prototype.moveAndResizeAsync = function (e, t, r) {
                            var i,
                                n =
                                    (((i = {})[o.ParameterId.Dashboard] = e),
                                    (i[
                                        o.ParameterId.DashboardObjectPositionAndSizeUpdateList
                                    ] = r),
                                    i);
                            return (
                                r.forEach(function (e) {
                                    l.ErrorHelpers.verifyZoneIsValidAndFloating(
                                        t,
                                        e.dashboardObjectID
                                    ),
                                        l.ErrorHelpers.verifyWidthAndHeightOfDashboardObjectPositionAndSizeUpdate(
                                            e
                                        );
                                }),
                                this.execute(
                                    o.VerbId.MoveAndResizeZones,
                                    n
                                ).then(function (e) {})
                            );
                        }),
                        t
                    );
                })(r(1776).ServiceImplBase);
            t.ZoneServiceImpl = c;
        },
        7603: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e(e) {
                    this._tableInfo = e;
                }
                return (
                    Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this._tableInfo.name;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "id", {
                        get: function () {
                            return this._tableInfo.id;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "connectionId", {
                        get: function () {
                            return this._tableInfo.connectionId;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "customSQL", {
                        get: function () {
                            return this._tableInfo.customSQL;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    e
                );
            })();
            t.TableSummary = r;
        },
        6664: function (e, t) {
            var r,
                i =
                    (this && this.__extends) ||
                    ((r = function (e, t) {
                        return (
                            (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (e[r] = t[r]);
                                }),
                            r(e, t)
                        );
                    }),
                    function (e, t) {
                        function i() {
                            this.constructor = e;
                        }
                        r(e, t),
                            (e.prototype =
                                null === t
                                    ? Object.create(t)
                                    : ((i.prototype = t.prototype), new i()));
                    });
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = (function (e) {
                function t(r, i) {
                    var n = e.call(this, r + ": " + i) || this;
                    return (
                        (n._errorCode = r),
                        Object.setPrototypeOf(n, t.prototype),
                        n
                    );
                }
                return (
                    i(t, e),
                    Object.defineProperty(t.prototype, "errorCode", {
                        get: function () {
                            return this._errorCode;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    t
                );
            })(Error);
            t.TableauError = n;
        },
        8052: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(3448),
                n = r(5068),
                a = (function () {
                    function e() {}
                    return (
                        (e.MakeParameterDataValue = function (e, t) {
                            return new n.DataValue(
                                e.value,
                                i.DataTypeConverter.convertStringValueToNativeValue(
                                    e.value,
                                    t
                                ),
                                e.formattedValue
                            );
                        }),
                        (e.MakeFilterDataValue = function (e) {
                            return new n.DataValue(
                                e.value,
                                e.value,
                                e.formattedValue
                            );
                        }),
                        (e.MakeTableDataValue = function (e, t) {
                            return new n.DataValue(
                                e.value,
                                void 0 !== e.value
                                    ? i.DataTypeConverter.convertValueToNativeValue(
                                          e.value,
                                          t
                                      )
                                    : void 0,
                                e.formattedValue
                            );
                        }),
                        e
                    );
                })();
            t.DataValueFactory = a;
        },
        1724: (e, t) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                function e() {
                    var e = this;
                    this._promise = new Promise(function (t, r) {
                        (e._resolve = t), (e._reject = r);
                    });
                }
                return (
                    Object.defineProperty(e.prototype, "promise", {
                        get: function () {
                            return this._promise;
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.resolve = function (e) {
                        this._resolve && this._resolve(e);
                    }),
                    (e.prototype.reject = function (e) {
                        this._reject && this._reject(e);
                    }),
                    e
                );
            })();
            (t.Deferred = r), (t.UnregisterTimeoutInMilliseconds = 3e4);
        },
        5520: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i,
                n = r(7419),
                a = r(6664),
                o = (function () {
                    function e(e, t) {
                        (this._mappings = e), (this._defaultVal = t);
                    }
                    return (
                        (e.prototype.convert = function (e, t) {
                            if (
                                (void 0 === t && (t = i.Yes),
                                this._mappings.hasOwnProperty(e))
                            )
                                return this._mappings[e];
                            if (void 0 !== this._defaultVal && t !== i.Yes)
                                return this._defaultVal;
                            throw new a.TableauError(
                                n.ErrorCodes.InternalError,
                                "Enum Mapping not found for: " + e
                            );
                        }),
                        e
                    );
                })();
            (t.EnumConverter = o),
                (function (e) {
                    (e.Yes = "yes"), (e.No = "no");
                })((i = t.ShouldThrow || (t.ShouldThrow = {})));
        },
        7480: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(6664),
                a = r(1172),
                o = (function () {
                    function e() {}
                    return (
                        (e.apiNotImplemented = function (e) {
                            return new n.TableauError(
                                i.SharedErrorCodes.InternalError,
                                e + " API not yet implemented."
                            );
                        }),
                        (e.verifyInternalValue = function (e, t) {
                            if (null == e)
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InternalError,
                                    e + " is invalid value for: " + t
                                );
                        }),
                        (e.verifyParameter = function (e, t) {
                            if (null == e)
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    e + " is invalid value for parameter: " + t
                                );
                        }),
                        (e.verifyParameterType = function (e, t, r) {
                            if (typeof e !== t)
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    e +
                                        " has invalid type for parameter: " +
                                        r +
                                        "."
                                );
                        }),
                        (e.verifyStringParameter = function (e, t) {
                            if (null == e || "" === e)
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    e + " is invalid value for paramter: " + t
                                );
                        }),
                        (e.isValidEnumValue = function (e, t) {
                            var r = !1;
                            return (
                                Object.keys(t).forEach(function (i) {
                                    t[i] === e.toString() && (r = !0);
                                }),
                                r
                            );
                        }),
                        (e.verifyEnumValue = function (t, r, a) {
                            if (!e.isValidEnumValue(t, r))
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    t + " is invalid value for enum: " + a + "."
                                );
                        }),
                        (e.verifyRange = function (e, t, r) {
                            if (!(t <= e && e < r))
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    e +
                                        " is invalid value for range: [" +
                                        t +
                                        ".." +
                                        r +
                                        ")"
                                );
                        }),
                        (e.verifyRangeParamType = function (e, t) {
                            if (!e && !t)
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    "Unexpected invalid param value, at least one of min or max is required."
                                );
                            if (
                                e &&
                                !a.Param.isTypeNumber(e) &&
                                !a.Param.isTypeDate(e)
                            )
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    "Unexpected invalid param value, only Date and number are allowed for parameter min."
                                );
                            if (
                                t &&
                                !a.Param.isTypeNumber(t) &&
                                !a.Param.isTypeDate(t)
                            )
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    "Unexpected invalid param value, only Date and number are allowed for parameter max."
                                );
                            if (e && t && typeof e != typeof t)
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    "Unexpected invalid param value, parameters min and max should be of the same type."
                                );
                        }),
                        (e.verifyZoneIsValid = function (e, t) {
                            if (!e.has(t))
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    "Unexpected invalid param value, Dashboard Object Id: " +
                                        t +
                                        " is not present in dashboard."
                                );
                        }),
                        (e.verifyZoneIsValidAndFloating = function (e, t) {
                            if (!e.has(t) || !e.get(t).isFloating)
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    "Unexpected invalid param value, Dashboard Object Id: " +
                                        t +
                                        " is not present or is a fixed zone in the dashboard."
                                );
                        }),
                        (e.verifyWidthAndHeightOfDashboardObjectPositionAndSizeUpdate =
                            function (e) {
                                if (e.width < 0 || e.height < 0)
                                    throw new n.TableauError(
                                        i.SharedErrorCodes.InvalidParameter,
                                        "Unexpected invalid param value for dashboard object ID " +
                                            e.dashboardObjectID +
                                            ": negative widths and heights are not allowed."
                                    );
                            }),
                        (e.verifySheetName = function (e, t) {
                            if (!e.includes(t))
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidSelectionSheet,
                                    "sheetName parameter must belong to a worksheet within the current view"
                                );
                        }),
                        (e.verifyExportDataOptions = function (e) {
                            if (
                                (!a.Param.isNullOrUndefined(e.ignoreAliases) &&
                                    !a.Param.isTypeBool(e.ignoreAliases)) ||
                                (!a.Param.isNullOrUndefined(
                                    e.columnsToIncludeById
                                ) &&
                                    !Array.isArray(e.columnsToIncludeById))
                            )
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    "options paramater must be of type ExportDataOptions"
                                );
                        }),
                        (e.verifySheetNamesForPDFAndPPT = function (e, t) {
                            if (!Array.isArray(e))
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    "sheetNames parameter must be an array"
                                );
                            if (0 === e.length)
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InternalError,
                                    "sheetNames should not be empty"
                                );
                            if (
                                !e.every(function (e) {
                                    return t.exportableSheetNamesFromDashboard.includes(
                                        e
                                    );
                                }) &&
                                !(
                                    e.every(function (e) {
                                        return t.exportableSheetNamesFromWorkbook.includes(
                                            e
                                        );
                                    }) ||
                                    (1 === e.length &&
                                        e[0] === t.currentSheetName)
                                )
                            )
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidSelectionSheet,
                                    "sheetNames parameter must have all its entries be exportable sheet names from the dashboard or all its entries be exportable sheet names from the workbook"
                                );
                        }),
                        (e.verifyExportPDFOptions = function (e) {
                            try {
                                this.verifyEnumValue(
                                    e.orientation,
                                    i.PrintOrientation,
                                    "PrintOrientation"
                                ),
                                    this.verifyEnumValue(
                                        e.pageSize,
                                        i.PrintPageSize,
                                        "PrintPageSize"
                                    ),
                                    this.verifyEnumValue(
                                        e.scaling,
                                        i.PrintScaling,
                                        "PrintScaling"
                                    );
                            } catch (e) {
                                throw new n.TableauError(
                                    i.SharedErrorCodes.InvalidParameter,
                                    "options parameter must be of type ExportPDFOptions"
                                );
                            }
                        }),
                        e
                    );
                })();
            t.ErrorHelpers = o;
        },
        5044: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(3448),
                n = r(7419),
                a = r(6664),
                o = (function () {
                    function e() {}
                    return (
                        (e.updateInternalExportPDFOptions = function (e, t, r) {
                            (e.currentSheet = r[0]),
                                this.updateExportLayoutOptions(e, t),
                                this.updateSheetOptions(e, r);
                        }),
                        (e.updateExportLayoutOptions = function (e, t) {
                            var r = e.exportLayoutOptions;
                            switch (
                                ((r.imageHeight =
                                    this.DefaultLayoutOptions.imageHeight),
                                (r.imageWidth =
                                    this.DefaultLayoutOptions.imageWidth),
                                t.orientation)
                            ) {
                                case n.PrintOrientation.Landscape:
                                    r.pageOrientationOption =
                                        i.PageOrientation.Landscape;
                                    break;
                                case n.PrintOrientation.Portrait:
                                    r.pageOrientationOption =
                                        i.PageOrientation.Portrait;
                                    break;
                                default:
                                    throw new a.TableauError(
                                        n.SharedErrorCodes.InternalError,
                                        "invalid orientation for ExportPDFOption"
                                    );
                            }
                            switch (t.pageSize) {
                                case n.PrintPageSize.A3:
                                    r.pageSizeOption = i.PageSizeOption.A3;
                                    break;
                                case n.PrintPageSize.A4:
                                    r.pageSizeOption = i.PageSizeOption.A4;
                                    break;
                                case n.PrintPageSize.A5:
                                    r.pageSizeOption = i.PageSizeOption.A5;
                                    break;
                                case n.PrintPageSize.B4:
                                    r.pageSizeOption = i.PageSizeOption.B4;
                                    break;
                                case n.PrintPageSize.B5:
                                    r.pageSizeOption = i.PageSizeOption.B5;
                                    break;
                                case n.PrintPageSize.Executive:
                                    r.pageSizeOption =
                                        i.PageSizeOption.Executive;
                                    break;
                                case n.PrintPageSize.Folio:
                                    r.pageSizeOption = i.PageSizeOption.Folio;
                                    break;
                                case n.PrintPageSize.Ledger:
                                    r.pageSizeOption = i.PageSizeOption.Ledger;
                                    break;
                                case n.PrintPageSize.Legal:
                                    r.pageSizeOption = i.PageSizeOption.Legal;
                                    break;
                                case n.PrintPageSize.Letter:
                                    r.pageSizeOption = i.PageSizeOption.Letter;
                                    break;
                                case n.PrintPageSize.Note:
                                    r.pageSizeOption = i.PageSizeOption.Note;
                                    break;
                                case n.PrintPageSize.Quarto:
                                    r.pageSizeOption = i.PageSizeOption.Quarto;
                                    break;
                                case n.PrintPageSize.Statement:
                                    r.pageSizeOption =
                                        i.PageSizeOption.Statement;
                                    break;
                                case n.PrintPageSize.Tabloid:
                                    r.pageSizeOption = i.PageSizeOption.Tabloid;
                                    break;
                                case n.PrintPageSize.Unspecified:
                                    r.pageSizeOption =
                                        i.PageSizeOption.Unspecified;
                                    break;
                                default:
                                    throw new a.TableauError(
                                        n.SharedErrorCodes.InternalError,
                                        "invalid pageSize for ExportPDFOption"
                                    );
                            }
                            switch (t.scaling) {
                                case n.PrintScaling.AtMost1PageHigh:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.FitPages.FitOneHigh
                                    );
                                    break;
                                case n.PrintScaling.AtMost1PageWide:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.FitPages.FitOneWide
                                    );
                                    break;
                                case n.PrintScaling.AtMost2PagesHigh:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.FitPages.FitTwoHigh
                                    );
                                    break;
                                case n.PrintScaling.AtMost2PagesWide:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.FitPages.FitTwoWide
                                    );
                                    break;
                                case n.PrintScaling.Automatic:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.PageScalingOption.ScalePctAuto
                                    );
                                    break;
                                case n.PrintScaling.Perc100:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.PageScalingOption.ScalePct100
                                    );
                                    break;
                                case n.PrintScaling.Perc200:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.PageScalingOption.ScalePct200
                                    );
                                    break;
                                case n.PrintScaling.Perc25:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.PageScalingOption.ScalePct25
                                    );
                                    break;
                                case n.PrintScaling.Perc400:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.PageScalingOption.ScalePct400
                                    );
                                    break;
                                case n.PrintScaling.Perc50:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.PageScalingOption.ScalePct50
                                    );
                                    break;
                                case n.PrintScaling.Perc60:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.PageScalingOption.ScalePct60
                                    );
                                    break;
                                case n.PrintScaling.Perc75:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.PageScalingOption.ScalePct75
                                    );
                                    break;
                                case n.PrintScaling.Perc80:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.PageScalingOption.ScalePct80
                                    );
                                    break;
                                case n.PrintScaling.Perc90:
                                    this.setFitAndScaleValues(
                                        r,
                                        i.PageScalingOption.ScalePct90
                                    );
                                    break;
                                default:
                                    throw new a.TableauError(
                                        n.SharedErrorCodes.InternalError,
                                        "invalid scaling for ExportPDFOption"
                                    );
                            }
                        }),
                        (e.updateSheetOptions = function (e, t) {
                            for (
                                var r = e.exportLayoutOptions,
                                    i = 0,
                                    n = e.sheetOptions;
                                i < n.length;
                                i++
                            ) {
                                var a = n[i];
                                (a.exportLayoutOptions = r),
                                    (a.isSelected = t.includes(a.sheet));
                            }
                        }),
                        (e.setFitAndScaleValues = function (e, t) {
                            var r,
                                n = this.DefaultLayoutOptions,
                                a = n.pageFitHorizontal,
                                o = n.pageFitVertical,
                                s = n.pageScaleMode,
                                l = n.pageScalePercent,
                                u = this.fitRegex.exec(t),
                                c = this.pctRegex.exec(t);
                            u
                                ? ((a = (r = u.slice(1).map(function (e) {
                                      return Number(e);
                                  }))[0]),
                                  (o = r[1]),
                                  (s = i.ScaleMode.ScaleFitPages))
                                : c &&
                                  ((l = c.slice(1).map(function (e) {
                                      return Number(e);
                                  })[0]),
                                  (s = i.ScaleMode.ScalePercentage)),
                                (e.pageFitHorizontal = a),
                                (e.pageFitVertical = o),
                                (e.pageScaleMode = s),
                                (e.pageScalePercent = l);
                        }),
                        (e.DefaultDataOptions = {
                            ignoreAliases: !1,
                            columnsToIncludeById: [],
                        }),
                        (e.DefaultPDFOptions = {
                            scaling: n.PrintScaling.Automatic,
                            pageSize: n.PrintPageSize.Letter,
                            orientation: n.PrintOrientation.Portrait,
                        }),
                        (e.DefaultLayoutOptions = {
                            imageHeight: 0,
                            imageWidth: 0,
                            pageFitHorizontal: 1,
                            pageFitVertical: 1,
                            pageOrientationOption: i.PageOrientation.Portrait,
                            pageScaleMode: i.ScaleMode.ScaleAuto,
                            pageScalePercent: 100,
                            pageSizeOption: i.PageSizeOption.Letter,
                        }),
                        (e.fitRegex = new RegExp("fit([0-9]+)x([0-9]+)")),
                        (e.pctRegex = new RegExp("pct([0-9]+)")),
                        e
                    );
                })();
            t.ExportHelpers = o;
        },
        1172: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(6664),
                a = r(7480),
                o = (function () {
                    function e() {}
                    return (
                        (e.serializeDateForPlatform = function (e) {
                            return (
                                e.getUTCFullYear() +
                                "-" +
                                (e.getUTCMonth() + 1) +
                                "-" +
                                e.getUTCDate() +
                                " " +
                                e.getUTCHours() +
                                ":" +
                                e.getUTCMinutes() +
                                ":" +
                                e.getUTCSeconds()
                            );
                        }),
                        (e.serializeBooleanForPlatform = function (e) {
                            return e ? "true" : "false";
                        }),
                        (e.serializeNumberForPlatform = function (e) {
                            return e.toString(10);
                        }),
                        (e.isTypeNumber = function (e) {
                            return "number" == typeof e || e instanceof Number;
                        }),
                        (e.isTypeDate = function (e) {
                            return e instanceof Date;
                        }),
                        (e.isTypeString = function (e) {
                            return "string" == typeof e || e instanceof String;
                        }),
                        (e.isTypeBool = function (e) {
                            return (
                                "boolean" == typeof e || e instanceof Boolean
                            );
                        }),
                        (e.isNullOrUndefined = function (e) {
                            return null == e;
                        }),
                        (e.serializeParameterValue = function (t) {
                            if (e.isTypeNumber(t))
                                return e.serializeNumberForPlatform(t);
                            if (e.isTypeDate(t))
                                return e.serializeDateForPlatform(t);
                            if (e.isTypeBool(t))
                                return e.serializeBooleanForPlatform(t);
                            if (e.isTypeString(t)) return t;
                            throw new n.TableauError(
                                i.ErrorCodes.InternalError,
                                "Unexpected invalid value for: " + t
                            );
                        }),
                        (e.convertParameterToMap = function (e, t) {
                            if (
                                (a.ErrorHelpers.verifyParameterType(
                                    e,
                                    "object",
                                    t
                                ),
                                Array.isArray(e))
                            )
                                throw new n.TableauError(
                                    i.ErrorCodes.InvalidParameter,
                                    "Expecting object or Map for: " + t + "."
                                );
                            return e instanceof Map
                                ? e
                                : new Map(Object.entries(e));
                        }),
                        (e.tryParseNumber = function (t) {
                            if (e.isNullOrUndefined(t)) return { success: !1 };
                            if (e.isTypeNumber(t))
                                return { parsed: t, success: !0 };
                            var r = t.toString();
                            if ("NaN" === r)
                                return { parsed: NaN, success: !0 };
                            var i = parseFloat(r);
                            return isNaN(i)
                                ? { success: !1 }
                                : { parsed: i, success: !0 };
                        }),
                        e
                    );
                })();
            t.Param = o;
        },
        2780: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(3448),
                a = r(6664),
                o = (function () {
                    function e() {}
                    return (
                        (e.getSheetSizeFromSizeConstraints = function (e) {
                            var t = e.minWidth,
                                r = e.minHeight,
                                n = e.maxWidth,
                                a = e.maxHeight;
                            if (0 === r && 0 === t)
                                return 0 === a && 0 === n
                                    ? {
                                          behavior:
                                              i.SheetSizeBehavior.Automatic,
                                      }
                                    : {
                                          behavior: i.SheetSizeBehavior.AtMost,
                                          maxSize: { width: n, height: a },
                                      };
                            if (0 === a && 0 === n)
                                return {
                                    behavior: i.SheetSizeBehavior.AtLeast,
                                    minSize: { width: t, height: r },
                                };
                            if (a === r && n === t && t > 0)
                                return {
                                    behavior: i.SheetSizeBehavior.Exactly,
                                    minSize: { width: t, height: r },
                                    maxSize: { width: t, height: r },
                                };
                            var o = 0 === t && 0 === n;
                            return {
                                behavior: i.SheetSizeBehavior.Range,
                                minSize: { width: t, height: r },
                                maxSize: {
                                    width: o ? 2147483647 : n,
                                    height: a,
                                },
                            };
                        }),
                        (e.createAutomaticSize = function () {
                            return {
                                behavior: i.SheetSizeBehavior.Automatic,
                                minSize: { width: 0, height: 0 },
                                maxSize: { width: 0, height: 0 },
                            };
                        }),
                        (e.getPublishedSheetInfoByName = function (e, t) {
                            return t.find(function (t) {
                                return t.name === e;
                            });
                        }),
                        (e.getSheetTypeEnum = function (e) {
                            var t;
                            switch (e) {
                                case n.SheetType.Worksheet:
                                    t = i.SheetType.Worksheet;
                                    break;
                                case n.SheetType.Dashboard:
                                    t = i.SheetType.Dashboard;
                                    break;
                                case n.SheetType.Story:
                                    t = i.SheetType.Story;
                                    break;
                                default:
                                    throw new a.TableauError(
                                        i.SharedErrorCodes.ServerError,
                                        "Invalid SheetType"
                                    );
                            }
                            return t;
                        }),
                        (e.isValidSheetSize = function (e) {
                            return void 0 !== e.behavior;
                        }),
                        e
                    );
                })();
            t.SheetUtils = o;
        },
        3036: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(6664),
                a = r(1724),
                o = (function () {
                    function e(e) {
                        void 0 === e && (e = a.UnregisterTimeoutInMilliseconds),
                            (this._timeoutInMilliseconds = e);
                    }
                    return (
                        (e.prototype.getNewPromiseOrThrowIfBusy = function () {
                            var e = this;
                            if (this._deferred)
                                throw new n.TableauError(
                                    i.SharedErrorCodes.ApiExecutionError,
                                    "This api cannot be executed till previous call is resolved."
                                );
                            return (
                                (this._deferred = new a.Deferred()),
                                (this._timeoutId = setTimeout(function () {
                                    var t = new n.TableauError(
                                        i.SharedErrorCodes.Timeout,
                                        "Api failed to complete in " +
                                            e._timeoutInMilliseconds / 1e3 +
                                            " seconds"
                                    );
                                    e.reject(t);
                                }, this._timeoutInMilliseconds)),
                                this._deferred.promise
                            );
                        }),
                        (e.prototype.resolve = function (e) {
                            this._deferred &&
                                (clearTimeout(this._timeoutId),
                                this._deferred.resolve(e),
                                (this._deferred = void 0));
                        }),
                        (e.prototype.reject = function (e) {
                            this._deferred &&
                                (clearTimeout(this._timeoutId),
                                this._deferred.reject(e),
                                (this._deferred = void 0));
                        }),
                        e
                    );
                })();
            t.ShortLivedDeferred = o;
        },
        1576: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(7419),
                n = r(6664),
                a = (function () {
                    function e(e, t) {
                        var r = e.split("-");
                        this.build = this.getBuildNumber(r[1]);
                        var a = (e = r[0]).split(".").map(function (e) {
                            return parseInt(e, 10);
                        });
                        if (3 !== a.length)
                            throw new n.TableauError(
                                i.ErrorCodes.InternalError,
                                "Invalid version number: " + e
                            );
                        (this.major = a[0]),
                            (this.minor = a[1]),
                            (this.fix = a[2]),
                            (this.isAlpha = t);
                    }
                    return (
                        (e.prototype.getBuildNumber = function (e) {
                            if (!e) return -1;
                            var t = e.split(".");
                            return t[1] ? parseInt(t[1], 10) : -1;
                        }),
                        Object.defineProperty(e.prototype, "formattedValue", {
                            get: function () {
                                return (
                                    this.major +
                                    "." +
                                    this.minor +
                                    "." +
                                    this.fix
                                );
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(
                            e.prototype,
                            "fullFormattedValue",
                            {
                                get: function () {
                                    return (
                                        this.major +
                                        "." +
                                        this.minor +
                                        "." +
                                        this.fix +
                                        "-pre." +
                                        this.build
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }
                        ),
                        e
                    );
                })();
            t.VersionNumber = a;
        },
        8648: (e, t, r) => {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = r(3448),
                n = (function () {
                    function e(e, t) {
                        var r = this;
                        (this._apiDelegateDispatcher = e),
                            (this._versionConverter =
                                i.CreateExternalCompatibleVersionConverter(
                                    i.INTERNAL_CONTRACT_VERSION,
                                    t
                                )),
                            (this._notificationHandlers = []),
                            e.registerNotificationHandler(function (e) {
                                if (0 !== r._notificationHandlers.length) {
                                    var t =
                                        r._versionConverter.upgradeNotification(
                                            e
                                        );
                                    r._notificationHandlers.forEach(function (
                                        e
                                    ) {
                                        e(t);
                                    });
                                }
                            });
                    }
                    return (
                        (e.needsVersionConverter = function (e) {
                            return i.VersionLessThan(
                                e,
                                i.INTERNAL_CONTRACT_VERSION
                            );
                        }),
                        (e.prototype.execute = function (e, t) {
                            var r = this;
                            try {
                                var i =
                                    this._versionConverter.downgradeExecuteCall(
                                        e,
                                        t
                                    );
                                return this._apiDelegateDispatcher
                                    .execute(i.verb, i.parameters)
                                    .then(function (i) {
                                        return r._versionConverter.upgradeExecuteReturn(
                                            i,
                                            e,
                                            t
                                        );
                                    });
                            } catch (e) {
                                return Promise.reject(e);
                            }
                        }),
                        (e.prototype.registerNotificationHandler = function (
                            e
                        ) {
                            this._notificationHandlers.push(e);
                        }),
                        (e.prototype.unregisterNotificationHandler = function (
                            e
                        ) {
                            this._notificationHandlers =
                                this._notificationHandlers.filter(function (t) {
                                    return t !== e;
                                });
                        }),
                        e
                    );
                })();
            t.VersionedExternalApiDispatcher = n;
        },
        6680: (e, t, r) => {
            var i;
            r.r(t),
                r.d(t, {
                    NIL: () => k,
                    parse: () => g,
                    stringify: () => c,
                    v1: () => y,
                    v3: () => P,
                    v4: () => E,
                    v5: () => D,
                    validate: () => s,
                    version: () => O,
                });
            var n = new Uint8Array(16);
            function a() {
                if (
                    !i &&
                    !(i =
                        ("undefined" != typeof crypto &&
                            crypto.getRandomValues &&
                            crypto.getRandomValues.bind(crypto)) ||
                        ("undefined" != typeof msCrypto &&
                            "function" == typeof msCrypto.getRandomValues &&
                            msCrypto.getRandomValues.bind(msCrypto)))
                )
                    throw new Error(
                        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                    );
                return i(n);
            }
            const o =
                    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
                s = function (e) {
                    return "string" == typeof e && o.test(e);
                };
            for (var l = [], u = 0; u < 256; ++u)
                l.push((u + 256).toString(16).substr(1));
            const c = function (e) {
                var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                    r = (
                        l[e[t + 0]] +
                        l[e[t + 1]] +
                        l[e[t + 2]] +
                        l[e[t + 3]] +
                        "-" +
                        l[e[t + 4]] +
                        l[e[t + 5]] +
                        "-" +
                        l[e[t + 6]] +
                        l[e[t + 7]] +
                        "-" +
                        l[e[t + 8]] +
                        l[e[t + 9]] +
                        "-" +
                        l[e[t + 10]] +
                        l[e[t + 11]] +
                        l[e[t + 12]] +
                        l[e[t + 13]] +
                        l[e[t + 14]] +
                        l[e[t + 15]]
                    ).toLowerCase();
                if (!s(r)) throw TypeError("Stringified UUID is invalid");
                return r;
            };
            var d,
                p,
                h = 0,
                m = 0;
            const y = function (e, t, r) {
                    var i = (t && r) || 0,
                        n = t || new Array(16),
                        o = (e = e || {}).node || d,
                        s = void 0 !== e.clockseq ? e.clockseq : p;
                    if (null == o || null == s) {
                        var l = e.random || (e.rng || a)();
                        null == o &&
                            (o = d = [1 | l[0], l[1], l[2], l[3], l[4], l[5]]),
                            null == s && (s = p = 16383 & ((l[6] << 8) | l[7]));
                    }
                    var u = void 0 !== e.msecs ? e.msecs : Date.now(),
                        y = void 0 !== e.nsecs ? e.nsecs : m + 1,
                        g = u - h + (y - m) / 1e4;
                    if (
                        (g < 0 &&
                            void 0 === e.clockseq &&
                            (s = (s + 1) & 16383),
                        (g < 0 || u > h) && void 0 === e.nsecs && (y = 0),
                        y >= 1e4)
                    )
                        throw new Error(
                            "uuid.v1(): Can't create more than 10M uuids/sec"
                        );
                    (h = u), (m = y), (p = s);
                    var f =
                        (1e4 * (268435455 & (u += 122192928e5)) + y) %
                        4294967296;
                    (n[i++] = (f >>> 24) & 255),
                        (n[i++] = (f >>> 16) & 255),
                        (n[i++] = (f >>> 8) & 255),
                        (n[i++] = 255 & f);
                    var b = ((u / 4294967296) * 1e4) & 268435455;
                    (n[i++] = (b >>> 8) & 255),
                        (n[i++] = 255 & b),
                        (n[i++] = ((b >>> 24) & 15) | 16),
                        (n[i++] = (b >>> 16) & 255),
                        (n[i++] = (s >>> 8) | 128),
                        (n[i++] = 255 & s);
                    for (var v = 0; v < 6; ++v) n[i + v] = o[v];
                    return t || c(n);
                },
                g = function (e) {
                    if (!s(e)) throw TypeError("Invalid UUID");
                    var t,
                        r = new Uint8Array(16);
                    return (
                        (r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
                        (r[1] = (t >>> 16) & 255),
                        (r[2] = (t >>> 8) & 255),
                        (r[3] = 255 & t),
                        (r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
                        (r[5] = 255 & t),
                        (r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
                        (r[7] = 255 & t),
                        (r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
                        (r[9] = 255 & t),
                        (r[10] =
                            ((t = parseInt(e.slice(24, 36), 16)) /
                                1099511627776) &
                            255),
                        (r[11] = (t / 4294967296) & 255),
                        (r[12] = (t >>> 24) & 255),
                        (r[13] = (t >>> 16) & 255),
                        (r[14] = (t >>> 8) & 255),
                        (r[15] = 255 & t),
                        r
                    );
                };
            function f(e, t, r) {
                function i(e, i, n, a) {
                    if (
                        ("string" == typeof e &&
                            (e = (function (e) {
                                e = unescape(encodeURIComponent(e));
                                for (var t = [], r = 0; r < e.length; ++r)
                                    t.push(e.charCodeAt(r));
                                return t;
                            })(e)),
                        "string" == typeof i && (i = g(i)),
                        16 !== i.length)
                    )
                        throw TypeError(
                            "Namespace must be array-like (16 iterable integer values, 0-255)"
                        );
                    var o = new Uint8Array(16 + e.length);
                    if (
                        (o.set(i),
                        o.set(e, i.length),
                        ((o = r(o))[6] = (15 & o[6]) | t),
                        (o[8] = (63 & o[8]) | 128),
                        n)
                    ) {
                        a = a || 0;
                        for (var s = 0; s < 16; ++s) n[a + s] = o[s];
                        return n;
                    }
                    return c(o);
                }
                try {
                    i.name = e;
                } catch (e) {}
                return (
                    (i.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
                    (i.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"),
                    i
                );
            }
            function b(e) {
                return 14 + (((e + 64) >>> 9) << 4) + 1;
            }
            function v(e, t) {
                var r = (65535 & e) + (65535 & t);
                return (
                    (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r)
                );
            }
            function I(e, t, r, i, n, a) {
                return v(
                    ((o = v(v(t, e), v(i, a))) << (s = n)) | (o >>> (32 - s)),
                    r
                );
                var o, s;
            }
            function S(e, t, r, i, n, a, o) {
                return I((t & r) | (~t & i), e, t, n, a, o);
            }
            function T(e, t, r, i, n, a, o) {
                return I((t & i) | (r & ~i), e, t, n, a, o);
            }
            function A(e, t, r, i, n, a, o) {
                return I(t ^ r ^ i, e, t, n, a, o);
            }
            function _(e, t, r, i, n, a, o) {
                return I(r ^ (t | ~i), e, t, n, a, o);
            }
            const P = f("v3", 48, function (e) {
                    if ("string" == typeof e) {
                        var t = unescape(encodeURIComponent(e));
                        e = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; ++r)
                            e[r] = t.charCodeAt(r);
                    }
                    return (function (e) {
                        for (
                            var t = [],
                                r = 32 * e.length,
                                i = "0123456789abcdef",
                                n = 0;
                            n < r;
                            n += 8
                        ) {
                            var a = (e[n >> 5] >>> n % 32) & 255,
                                o = parseInt(
                                    i.charAt((a >>> 4) & 15) + i.charAt(15 & a),
                                    16
                                );
                            t.push(o);
                        }
                        return t;
                    })(
                        (function (e, t) {
                            (e[t >> 5] |= 128 << t % 32), (e[b(t) - 1] = t);
                            for (
                                var r = 1732584193,
                                    i = -271733879,
                                    n = -1732584194,
                                    a = 271733878,
                                    o = 0;
                                o < e.length;
                                o += 16
                            ) {
                                var s = r,
                                    l = i,
                                    u = n,
                                    c = a;
                                (r = S(r, i, n, a, e[o], 7, -680876936)),
                                    (a = S(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 1],
                                        12,
                                        -389564586
                                    )),
                                    (n = S(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 2],
                                        17,
                                        606105819
                                    )),
                                    (i = S(
                                        i,
                                        n,
                                        a,
                                        r,
                                        e[o + 3],
                                        22,
                                        -1044525330
                                    )),
                                    (r = S(
                                        r,
                                        i,
                                        n,
                                        a,
                                        e[o + 4],
                                        7,
                                        -176418897
                                    )),
                                    (a = S(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 5],
                                        12,
                                        1200080426
                                    )),
                                    (n = S(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 6],
                                        17,
                                        -1473231341
                                    )),
                                    (i = S(
                                        i,
                                        n,
                                        a,
                                        r,
                                        e[o + 7],
                                        22,
                                        -45705983
                                    )),
                                    (r = S(
                                        r,
                                        i,
                                        n,
                                        a,
                                        e[o + 8],
                                        7,
                                        1770035416
                                    )),
                                    (a = S(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 9],
                                        12,
                                        -1958414417
                                    )),
                                    (n = S(n, a, r, i, e[o + 10], 17, -42063)),
                                    (i = S(
                                        i,
                                        n,
                                        a,
                                        r,
                                        e[o + 11],
                                        22,
                                        -1990404162
                                    )),
                                    (r = S(
                                        r,
                                        i,
                                        n,
                                        a,
                                        e[o + 12],
                                        7,
                                        1804603682
                                    )),
                                    (a = S(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 13],
                                        12,
                                        -40341101
                                    )),
                                    (n = S(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 14],
                                        17,
                                        -1502002290
                                    )),
                                    (r = T(
                                        r,
                                        (i = S(
                                            i,
                                            n,
                                            a,
                                            r,
                                            e[o + 15],
                                            22,
                                            1236535329
                                        )),
                                        n,
                                        a,
                                        e[o + 1],
                                        5,
                                        -165796510
                                    )),
                                    (a = T(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 6],
                                        9,
                                        -1069501632
                                    )),
                                    (n = T(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 11],
                                        14,
                                        643717713
                                    )),
                                    (i = T(i, n, a, r, e[o], 20, -373897302)),
                                    (r = T(
                                        r,
                                        i,
                                        n,
                                        a,
                                        e[o + 5],
                                        5,
                                        -701558691
                                    )),
                                    (a = T(a, r, i, n, e[o + 10], 9, 38016083)),
                                    (n = T(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 15],
                                        14,
                                        -660478335
                                    )),
                                    (i = T(
                                        i,
                                        n,
                                        a,
                                        r,
                                        e[o + 4],
                                        20,
                                        -405537848
                                    )),
                                    (r = T(r, i, n, a, e[o + 9], 5, 568446438)),
                                    (a = T(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 14],
                                        9,
                                        -1019803690
                                    )),
                                    (n = T(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 3],
                                        14,
                                        -187363961
                                    )),
                                    (i = T(
                                        i,
                                        n,
                                        a,
                                        r,
                                        e[o + 8],
                                        20,
                                        1163531501
                                    )),
                                    (r = T(
                                        r,
                                        i,
                                        n,
                                        a,
                                        e[o + 13],
                                        5,
                                        -1444681467
                                    )),
                                    (a = T(a, r, i, n, e[o + 2], 9, -51403784)),
                                    (n = T(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 7],
                                        14,
                                        1735328473
                                    )),
                                    (r = A(
                                        r,
                                        (i = T(
                                            i,
                                            n,
                                            a,
                                            r,
                                            e[o + 12],
                                            20,
                                            -1926607734
                                        )),
                                        n,
                                        a,
                                        e[o + 5],
                                        4,
                                        -378558
                                    )),
                                    (a = A(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 8],
                                        11,
                                        -2022574463
                                    )),
                                    (n = A(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 11],
                                        16,
                                        1839030562
                                    )),
                                    (i = A(
                                        i,
                                        n,
                                        a,
                                        r,
                                        e[o + 14],
                                        23,
                                        -35309556
                                    )),
                                    (r = A(
                                        r,
                                        i,
                                        n,
                                        a,
                                        e[o + 1],
                                        4,
                                        -1530992060
                                    )),
                                    (a = A(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 4],
                                        11,
                                        1272893353
                                    )),
                                    (n = A(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 7],
                                        16,
                                        -155497632
                                    )),
                                    (i = A(
                                        i,
                                        n,
                                        a,
                                        r,
                                        e[o + 10],
                                        23,
                                        -1094730640
                                    )),
                                    (r = A(
                                        r,
                                        i,
                                        n,
                                        a,
                                        e[o + 13],
                                        4,
                                        681279174
                                    )),
                                    (a = A(a, r, i, n, e[o], 11, -358537222)),
                                    (n = A(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 3],
                                        16,
                                        -722521979
                                    )),
                                    (i = A(i, n, a, r, e[o + 6], 23, 76029189)),
                                    (r = A(
                                        r,
                                        i,
                                        n,
                                        a,
                                        e[o + 9],
                                        4,
                                        -640364487
                                    )),
                                    (a = A(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 12],
                                        11,
                                        -421815835
                                    )),
                                    (n = A(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 15],
                                        16,
                                        530742520
                                    )),
                                    (r = _(
                                        r,
                                        (i = A(
                                            i,
                                            n,
                                            a,
                                            r,
                                            e[o + 2],
                                            23,
                                            -995338651
                                        )),
                                        n,
                                        a,
                                        e[o],
                                        6,
                                        -198630844
                                    )),
                                    (a = _(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 7],
                                        10,
                                        1126891415
                                    )),
                                    (n = _(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 14],
                                        15,
                                        -1416354905
                                    )),
                                    (i = _(
                                        i,
                                        n,
                                        a,
                                        r,
                                        e[o + 5],
                                        21,
                                        -57434055
                                    )),
                                    (r = _(
                                        r,
                                        i,
                                        n,
                                        a,
                                        e[o + 12],
                                        6,
                                        1700485571
                                    )),
                                    (a = _(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 3],
                                        10,
                                        -1894986606
                                    )),
                                    (n = _(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 10],
                                        15,
                                        -1051523
                                    )),
                                    (i = _(
                                        i,
                                        n,
                                        a,
                                        r,
                                        e[o + 1],
                                        21,
                                        -2054922799
                                    )),
                                    (r = _(
                                        r,
                                        i,
                                        n,
                                        a,
                                        e[o + 8],
                                        6,
                                        1873313359
                                    )),
                                    (a = _(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 15],
                                        10,
                                        -30611744
                                    )),
                                    (n = _(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 6],
                                        15,
                                        -1560198380
                                    )),
                                    (i = _(
                                        i,
                                        n,
                                        a,
                                        r,
                                        e[o + 13],
                                        21,
                                        1309151649
                                    )),
                                    (r = _(
                                        r,
                                        i,
                                        n,
                                        a,
                                        e[o + 4],
                                        6,
                                        -145523070
                                    )),
                                    (a = _(
                                        a,
                                        r,
                                        i,
                                        n,
                                        e[o + 11],
                                        10,
                                        -1120210379
                                    )),
                                    (n = _(
                                        n,
                                        a,
                                        r,
                                        i,
                                        e[o + 2],
                                        15,
                                        718787259
                                    )),
                                    (i = _(
                                        i,
                                        n,
                                        a,
                                        r,
                                        e[o + 9],
                                        21,
                                        -343485551
                                    )),
                                    (r = v(r, s)),
                                    (i = v(i, l)),
                                    (n = v(n, u)),
                                    (a = v(a, c));
                            }
                            return [r, i, n, a];
                        })(
                            (function (e) {
                                if (0 === e.length) return [];
                                for (
                                    var t = 8 * e.length,
                                        r = new Uint32Array(b(t)),
                                        i = 0;
                                    i < t;
                                    i += 8
                                )
                                    r[i >> 5] |= (255 & e[i / 8]) << i % 32;
                                return r;
                            })(e),
                            8 * e.length
                        )
                    );
                }),
                E = function (e, t, r) {
                    var i = (e = e || {}).random || (e.rng || a)();
                    if (
                        ((i[6] = (15 & i[6]) | 64),
                        (i[8] = (63 & i[8]) | 128),
                        t)
                    ) {
                        r = r || 0;
                        for (var n = 0; n < 16; ++n) t[r + n] = i[n];
                        return t;
                    }
                    return c(i);
                };
            function w(e, t, r, i) {
                switch (e) {
                    case 0:
                        return (t & r) ^ (~t & i);
                    case 1:
                    case 3:
                        return t ^ r ^ i;
                    case 2:
                        return (t & r) ^ (t & i) ^ (r & i);
                }
            }
            function C(e, t) {
                return (e << t) | (e >>> (32 - t));
            }
            const D = f("v5", 80, function (e) {
                    var t = [1518500249, 1859775393, 2400959708, 3395469782],
                        r = [
                            1732584193, 4023233417, 2562383102, 271733878,
                            3285377520,
                        ];
                    if ("string" == typeof e) {
                        var i = unescape(encodeURIComponent(e));
                        e = [];
                        for (var n = 0; n < i.length; ++n)
                            e.push(i.charCodeAt(n));
                    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
                    e.push(128);
                    for (
                        var a = e.length / 4 + 2,
                            o = Math.ceil(a / 16),
                            s = new Array(o),
                            l = 0;
                        l < o;
                        ++l
                    ) {
                        for (var u = new Uint32Array(16), c = 0; c < 16; ++c)
                            u[c] =
                                (e[64 * l + 4 * c] << 24) |
                                (e[64 * l + 4 * c + 1] << 16) |
                                (e[64 * l + 4 * c + 2] << 8) |
                                e[64 * l + 4 * c + 3];
                        s[l] = u;
                    }
                    (s[o - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
                        (s[o - 1][14] = Math.floor(s[o - 1][14])),
                        (s[o - 1][15] = (8 * (e.length - 1)) & 4294967295);
                    for (var d = 0; d < o; ++d) {
                        for (var p = new Uint32Array(80), h = 0; h < 16; ++h)
                            p[h] = s[d][h];
                        for (var m = 16; m < 80; ++m)
                            p[m] = C(
                                p[m - 3] ^ p[m - 8] ^ p[m - 14] ^ p[m - 16],
                                1
                            );
                        for (
                            var y = r[0],
                                g = r[1],
                                f = r[2],
                                b = r[3],
                                v = r[4],
                                I = 0;
                            I < 80;
                            ++I
                        ) {
                            var S = Math.floor(I / 20),
                                T =
                                    (C(y, 5) +
                                        w(S, g, f, b) +
                                        v +
                                        t[S] +
                                        p[I]) >>>
                                    0;
                            (v = b),
                                (b = f),
                                (f = C(g, 30) >>> 0),
                                (g = y),
                                (y = T);
                        }
                        (r[0] = (r[0] + y) >>> 0),
                            (r[1] = (r[1] + g) >>> 0),
                            (r[2] = (r[2] + f) >>> 0),
                            (r[3] = (r[3] + b) >>> 0),
                            (r[4] = (r[4] + v) >>> 0);
                    }
                    return [
                        (r[0] >> 24) & 255,
                        (r[0] >> 16) & 255,
                        (r[0] >> 8) & 255,
                        255 & r[0],
                        (r[1] >> 24) & 255,
                        (r[1] >> 16) & 255,
                        (r[1] >> 8) & 255,
                        255 & r[1],
                        (r[2] >> 24) & 255,
                        (r[2] >> 16) & 255,
                        (r[2] >> 8) & 255,
                        255 & r[2],
                        (r[3] >> 24) & 255,
                        (r[3] >> 16) & 255,
                        (r[3] >> 8) & 255,
                        255 & r[3],
                        (r[4] >> 24) & 255,
                        (r[4] >> 16) & 255,
                        (r[4] >> 8) & 255,
                        255 & r[4],
                    ];
                }),
                k = "00000000-0000-0000-0000-000000000000",
                O = function (e) {
                    if (!s(e)) throw TypeError("Invalid UUID");
                    return parseInt(e.substr(14, 1), 16);
                };
        },
        5892: (e) => {
            e.exports = JSON.parse('{"major":1,"minor":177,"fix":0}');
        },
    },
    t = {};
function r(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var a = (t[i] = { exports: {} });
    return e[i].call(a.exports, a, a.exports, r), a.exports;
}
(r.d = (e, t) => {
    for (var i in t)
        r.o(t, i) &&
            !r.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
}),
    (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
        "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
    });
var i = r(9788),
    n = i.AnalyticsObjectType,
    a = i.AnnotationType,
    o = i.ApiMenuType,
    s = i.ClassNameKey,
    l = i.ColumnType,
    u = i.CrosstabFileFormat,
    c = i.DashboardLayoutChange,
    d = i.DashboardObjectType,
    p = i.DataType,
    h = i.DateRangeType,
    m = i.DeviceType,
    y = i.EmbeddedIframeAttributes,
    g = i.EncodingType,
    f = i.ErrorCodes,
    b = i.FieldAggregationType,
    v = i.FieldRoleType,
    I = i.FileFormats,
    S = i.FilterDomainType,
    T = i.FilterNullOption,
    A = i.FilterType,
    _ = i.FilterUpdateType,
    P = i.HierarchicalLevelSelectionState,
    E = i.IncludeDataValuesOption,
    w = i.MarkType,
    C = i.ParameterValueType,
    D = i.PeriodType,
    k = i.PrintOrientation,
    O = i.PrintPageSize,
    V = i.PrintScaling,
    x = i.PulseAttributes,
    F = i.PulseErrorMessageVisibility,
    M = i.PulseLayout,
    N = i.PulseTimeDimension,
    R = i.QuickTableCalcType,
    z = i.SelectionUpdateType,
    j = i.SheetSizeBehavior,
    L = i.SheetType,
    U = i.SortDirection,
    W = i.TableauAskData,
    H = i.TableauAuthoringViz,
    B = i.TableauDialogType,
    G = i.TableauEventType,
    Y = i.TableauPulse,
    K = i.TableauViz,
    Q = i.Toolbar,
    q = i.TrendLineModelType,
    Z = i.VizAttributes,
    $ = i.VizAuthoringAttributes,
    X = i.VizSharedAttributes,
    J = i.WebComponentAttributes,
    ee = i.__esModule;
export {
    n as AnalyticsObjectType,
    a as AnnotationType,
    o as ApiMenuType,
    s as ClassNameKey,
    l as ColumnType,
    u as CrosstabFileFormat,
    c as DashboardLayoutChange,
    d as DashboardObjectType,
    p as DataType,
    h as DateRangeType,
    m as DeviceType,
    y as EmbeddedIframeAttributes,
    g as EncodingType,
    f as ErrorCodes,
    b as FieldAggregationType,
    v as FieldRoleType,
    I as FileFormats,
    S as FilterDomainType,
    T as FilterNullOption,
    A as FilterType,
    _ as FilterUpdateType,
    P as HierarchicalLevelSelectionState,
    E as IncludeDataValuesOption,
    w as MarkType,
    C as ParameterValueType,
    D as PeriodType,
    k as PrintOrientation,
    O as PrintPageSize,
    V as PrintScaling,
    x as PulseAttributes,
    F as PulseErrorMessageVisibility,
    M as PulseLayout,
    N as PulseTimeDimension,
    R as QuickTableCalcType,
    z as SelectionUpdateType,
    j as SheetSizeBehavior,
    L as SheetType,
    U as SortDirection,
    W as TableauAskData,
    H as TableauAuthoringViz,
    B as TableauDialogType,
    G as TableauEventType,
    Y as TableauPulse,
    K as TableauViz,
    Q as Toolbar,
    q as TrendLineModelType,
    $ as VizAuthoringAttributes,
    X as VizSharedAttributes,
    J as WebComponentAttributes,
    ee as __esModule,
};

//clearFiltersAsync(e)
//clearAllFiltersAsync()
//applyFiltersAsync(e)



//# sourceMappingURL=tableau.embedding.3.12.0-pre.25.min.js.map
