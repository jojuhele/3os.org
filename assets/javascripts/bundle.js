!(function (t, e) {
    for (var n in e) t[n] = e[n];
})(
    window,
    (function (t) {
        function e(e) {
            for (
                var r, i, o = e[0], u = e[1], b = e[2], s = 0, O = [];
                s < o.length;
                s++
            )
                (i = o[s]),
                    Object.prototype.hasOwnProperty.call(c, i) &&
                        c[i] &&
                        O.push(c[i][0]),
                    (c[i] = 0);
            for (r in u)
                Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
            for (f && f(e); O.length; ) O.shift()();
            return a.push.apply(a, b || []), n();
        }
        function n() {
            for (var t, e = 0; e < a.length; e++) {
                for (var n = a[e], r = !0, o = 1; o < n.length; o++) {
                    var u = n[o];
                    0 !== c[u] && (r = !1);
                }
                r && (a.splice(e--, 1), (t = i((i.s = n[0]))));
            }
            return t;
        }
        var r = {},
            c = {0: 0},
            a = [];
        function i(e) {
            if (r[e]) return r[e].exports;
            var n = (r[e] = {i: e, l: !1, exports: {}});
            return t[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
        }
        (i.m = t),
            (i.c = r),
            (i.d = function (t, e, n) {
                i.o(t, e) ||
                    Object.defineProperty(t, e, {enumerable: !0, get: n});
            }),
            (i.r = function (t) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: 'Module',
                    }),
                    Object.defineProperty(t, '__esModule', {value: !0});
            }),
            (i.t = function (t, e) {
                if ((1 & e && (t = i(t)), 8 & e)) return t;
                if (4 & e && 'object' == typeof t && t && t.__esModule)
                    return t;
                var n = Object.create(null);
                if (
                    (i.r(n),
                    Object.defineProperty(n, 'default', {
                        enumerable: !0,
                        value: t,
                    }),
                    2 & e && 'string' != typeof t)
                )
                    for (var r in t)
                        i.d(
                            n,
                            r,
                            function (e) {
                                return t[e];
                            }.bind(null, r),
                        );
                return n;
            }),
            (i.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return i.d(e, 'a', e), e;
            }),
            (i.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (i.p = '');
        var o = (window.webpackJsonp = window.webpackJsonp || []),
            u = o.push.bind(o);
        (o.push = e), (o = o.slice());
        for (var b = 0; b < o.length; b++) e(o[b]);
        var f = u;
        return a.push([88, 1]), n();
    })([
        ,
        function (t, e, n) {
            'use strict';
            n.d(e, 'q', function () {
                return i;
            }),
                n.d(e, 'c', function () {
                    return o;
                }),
                n.d(e, 'd', function () {
                    return u;
                }),
                n.d(e, 'b', function () {
                    return b;
                }),
                n.d(e, 'e', function () {
                    return f;
                }),
                n.d(e, 'a', function () {
                    return s;
                }),
                n.d(e, 'j', function () {
                    return O;
                }),
                n.d(e, 'k', function () {
                    return h;
                }),
                n.d(e, 'r', function () {
                    return v;
                }),
                n.d(e, 's', function () {
                    return y;
                }),
                n.d(e, 'l', function () {
                    return g;
                }),
                n.d(e, 't', function () {
                    return k;
                }),
                n.d(e, 'i', function () {
                    return A;
                }),
                n.d(e, 'u', function () {
                    return T;
                }),
                n.d(e, 'm', function () {
                    return E;
                }),
                n.d(e, 'h', function () {
                    return L;
                }),
                n.d(e, 'g', function () {
                    return M;
                }),
                n.d(e, 'v', function () {
                    return H;
                }),
                n.d(e, 'w', function () {
                    return P;
                }),
                n.d(e, 'n', function () {
                    return q;
                }),
                n.d(e, 'x', function () {
                    return N;
                }),
                n.d(e, 'y', function () {
                    return z;
                }),
                n.d(e, 'f', function () {
                    return V;
                }),
                n.d(e, 'o', function () {
                    return D;
                }),
                n.d(e, 'z', function () {
                    return B;
                }),
                n.d(e, 'A', function () {
                    return F;
                }),
                n.d(e, 'B', function () {
                    return X;
                }),
                n.d(e, 'p', function () {
                    return K;
                }),
                n.d(e, 'C', function () {
                    return nt;
                });
            var r = n(80),
                c = n(95),
                a = n(96);
            function i() {
                var t = new r.a();
                return (
                    Object(c.a)(document, 'DOMContentLoaded')
                        .pipe(Object(a.a)(document))
                        .subscribe(t),
                    t
                );
            }
            function o(t, e) {
                return (
                    void 0 === e && (e = document), e.querySelector(t) || void 0
                );
            }
            function u(t, e) {
                void 0 === e && (e = document);
                var n = o(t, e);
                if (void 0 === n)
                    throw new ReferenceError(
                        'Missing element: expected "' + t + '" to be present',
                    );
                return n;
            }
            function b() {
                return document.activeElement instanceof HTMLElement
                    ? document.activeElement
                    : void 0;
            }
            function f(t, e) {
                return (
                    void 0 === e && (e = document),
                    Array.from(e.querySelectorAll(t))
                );
            }
            function s(t) {
                return document.createElement(t);
            }
            function O(t, e) {
                t.replaceWith(e);
            }
            var j = n(97),
                l = n(9),
                d = n(94),
                p = n(89);
            function h(t, e) {
                void 0 === e && (e = !0), e ? t.focus() : t.blur();
            }
            function v(t) {
                return Object(j.a)(
                    Object(c.a)(t, 'focus'),
                    Object(c.a)(t, 'blur'),
                ).pipe(
                    Object(l.a)(function (t) {
                        return 'focus' === t.type;
                    }),
                    Object(d.a)(t === b()),
                    Object(p.a)(1),
                );
            }
            function m(t) {
                return {x: t.scrollLeft, y: t.scrollTop};
            }
            function y(t) {
                return Object(j.a)(
                    Object(c.a)(t, 'scroll'),
                    Object(c.a)(window, 'resize'),
                ).pipe(
                    Object(l.a)(function () {
                        return m(t);
                    }),
                    Object(d.a)(m(t)),
                    Object(p.a)(1),
                );
            }
            function g(t) {
                if (!(t instanceof HTMLInputElement))
                    throw new Error('Not implemented');
                t.select();
            }
            var w = n(0),
                $ = n(77),
                x = n(98);
            function k(t) {
                return Object(x.a)(function (e) {
                    new $.a(function (t) {
                        var n = Object(w.h)(t, 1)[0].contentRect;
                        return e({
                            width: Math.round(n.width),
                            height: Math.round(n.height),
                        });
                    }).observe(t);
                }).pipe(
                    Object(d.a)(
                        (function (t) {
                            return {
                                width: t.offsetWidth,
                                height: t.offsetHeight,
                            };
                        })(t),
                    ),
                    Object(p.a)(1),
                );
            }
            var S = n(99),
                C = n(113);
            function A(t) {
                switch (t.tagName) {
                    case 'INPUT':
                    case 'SELECT':
                    case 'TEXTAREA':
                        return !0;
                    default:
                        return t.isContentEditable;
                }
            }
            function T() {
                return Object(c.a)(window, 'keydown').pipe(
                    Object(S.a)(function (t) {
                        return !(t.metaKey || t.ctrlKey);
                    }),
                    Object(l.a)(function (t) {
                        return {
                            type: t.key,
                            claim: function () {
                                t.preventDefault(), t.stopPropagation();
                            },
                        };
                    }),
                    Object(C.a)(),
                );
            }
            var _ = n(100);
            function E(t) {
                location.href = t.href;
            }
            function L(t, e) {
                return (
                    void 0 === e && (e = location),
                    t.host === e.host &&
                        /^(?:\/[\w-]+)*(?:\/?|\.html)$/i.test(t.pathname)
                );
            }
            function M(t, e) {
                return (
                    void 0 === e && (e = location),
                    t.pathname === e.pathname && t.hash.length > 0
                );
            }
            function H() {
                return new _.a(new URL(location.href));
            }
            var R = n(117);
            function P(t, e) {
                return e.location$.pipe(
                    Object(R.a)(1),
                    Object(l.a)(function (e) {
                        var n = e.href;
                        return new URL(t, n).toString().replace(/\/$/, '');
                    }),
                    Object(p.a)(1),
                );
            }
            function U() {
                return location.hash.substring(1);
            }
            function q(t) {
                var e = s('a');
                (e.href = t),
                    e.addEventListener('click', function (t) {
                        return t.stopPropagation();
                    }),
                    e.click();
            }
            function N() {
                return Object(c.a)(window, 'hashchange').pipe(
                    Object(l.a)(U),
                    Object(d.a)(U()),
                    Object(S.a)(function (t) {
                        return t.length > 0;
                    }),
                    Object(C.a)(),
                );
            }
            function z(t) {
                var e = matchMedia(t);
                return Object(x.a)(function (t) {
                    return e.addListener(function () {
                        return t(e.matches);
                    });
                }).pipe(Object(d.a)(e.matches), Object(p.a)(1));
            }
            var I = {
                drawer: u('[data-md-toggle=drawer]'),
                search: u('[data-md-toggle=search]'),
            };
            function V(t) {
                return I[t].checked;
            }
            function D(t, e) {
                I[t].checked !== e && I[t].click();
            }
            function B(t) {
                var e = I[t];
                return Object(c.a)(e, 'change').pipe(
                    Object(l.a)(function () {
                        return e.checked;
                    }),
                    Object(d.a)(e.checked),
                );
            }
            var Y = n(62),
                J = n(90);
            function W() {
                return {
                    x: Math.max(0, pageXOffset),
                    y: Math.max(0, pageYOffset),
                };
            }
            function K(t) {
                var e = t.x,
                    n = t.y;
                window.scrollTo(e || 0, n || 0);
            }
            function Q() {
                return {width: innerWidth, height: innerHeight};
            }
            function F() {
                return Object(Y.a)([
                    Object(j.a)(
                        Object(c.a)(window, 'scroll', {passive: !0}),
                        Object(c.a)(window, 'resize', {passive: !0}),
                    ).pipe(Object(l.a)(W), Object(d.a)(W())),
                    Object(c.a)(window, 'resize', {passive: !0}).pipe(
                        Object(l.a)(Q),
                        Object(d.a)(Q()),
                    ),
                ]).pipe(
                    Object(l.a)(function (t) {
                        var e = Object(w.h)(t, 2);
                        return {offset: e[0], size: e[1]};
                    }),
                    Object(p.a)(1),
                );
            }
            function X(t, e) {
                var n = e.header$,
                    r = e.viewport$,
                    c = r.pipe(Object(J.a)('size')),
                    a = Object(Y.a)([c, n]).pipe(
                        Object(l.a)(function () {
                            return {x: t.offsetLeft, y: t.offsetTop};
                        }),
                    );
                return Object(Y.a)([n, r, a]).pipe(
                    Object(l.a)(function (t) {
                        var e = Object(w.h)(t, 3),
                            n = e[0].height,
                            r = e[1],
                            c = r.offset,
                            a = r.size,
                            i = e[2],
                            o = i.x,
                            u = i.y;
                        return {offset: {x: c.x - o, y: c.y - u + n}, size: a};
                    }),
                    Object(p.a)(1),
                );
            }
            var Z = n(101),
                G = n(102),
                tt = n(82),
                et = n(103);
            function nt(t, e) {
                var n = e.tx$,
                    r = Object(x.a)(function (e) {
                        return t.addEventListener('message', e);
                    }).pipe(Object(Z.a)('data'));
                return n.pipe(
                    Object(G.a)(
                        function () {
                            return r;
                        },
                        {leading: !0, trailing: !0},
                    ),
                    Object(tt.a)(function (e) {
                        return t.postMessage(e);
                    }),
                    Object(et.a)(r),
                    Object(C.a)(),
                );
            }
        },
        ,
        ,
        function (t, e, n) {
            'use strict';
            function r(t) {
                return (
                    'object' == typeof t &&
                    'string' == typeof t.base &&
                    'object' == typeof t.features &&
                    'object' == typeof t.search
                );
            }
            n.d(e, 'd', function () {
                return r;
            }),
                n.d(e, 'b', function () {
                    return b;
                }),
                n.d(e, 'a', function () {
                    return O;
                }),
                n.d(e, 'f', function () {
                    return d;
                }),
                n.d(e, 'g', function () {
                    return p;
                }),
                n.d(e, 'e', function () {
                    return h;
                }),
                n.d(e, 'c', function () {
                    return v;
                });
            var c = n(0),
                a = n(81);
            function i(t) {
                switch (t) {
                    case 'svg':
                    case 'path':
                        return document.createElementNS(
                            'http://www.w3.org/2000/svg',
                            t,
                        );
                    default:
                        return document.createElement(t);
                }
            }
            function o(t, e, n) {
                switch (e) {
                    case 'xmlns':
                        break;
                    case 'viewBox':
                    case 'd':
                        'boolean' != typeof n
                            ? t.setAttributeNS(null, e, n)
                            : n && t.setAttributeNS(null, e, '');
                        break;
                    default:
                        'boolean' != typeof n
                            ? t.setAttribute(e, n)
                            : n && t.setAttribute(e, '');
                }
            }
            function u(t, e) {
                var n, r;
                if ('string' == typeof e || 'number' == typeof e)
                    t.innerHTML += e.toString();
                else if (e instanceof Node) t.appendChild(e);
                else if (Array.isArray(e))
                    try {
                        for (
                            var a = Object(c.k)(e), i = a.next();
                            !i.done;
                            i = a.next()
                        ) {
                            u(t, i.value);
                        }
                    } catch (t) {
                        n = {error: t};
                    } finally {
                        try {
                            i && !i.done && (r = a.return) && r.call(a);
                        } finally {
                            if (n) throw n.error;
                        }
                    }
            }
            function b(t, e) {
                for (var n, r, b, f, s = [], O = 2; O < arguments.length; O++)
                    s[O - 2] = arguments[O];
                var j = i(t);
                if (e)
                    try {
                        for (
                            var l = Object(c.k)(Object(a.a)(e)), d = l.next();
                            !d.done;
                            d = l.next()
                        ) {
                            var p = d.value;
                            o(j, p, e[p]);
                        }
                    } catch (t) {
                        n = {error: t};
                    } finally {
                        try {
                            d && !d.done && (r = l.return) && r.call(l);
                        } finally {
                            if (n) throw n.error;
                        }
                    }
                try {
                    for (
                        var h = Object(c.k)(s), v = h.next();
                        !v.done;
                        v = h.next()
                    ) {
                        var m = v.value;
                        u(j, m);
                    }
                } catch (t) {
                    b = {error: t};
                } finally {
                    try {
                        v && !v.done && (f = h.return) && f.call(h);
                    } finally {
                        if (b) throw b.error;
                    }
                }
                return j;
            }
            var f = n(79),
                s = n(41);
            function O(t, e) {
                return Object(f.a)(function () {
                    var n = sessionStorage.getItem(t);
                    if (n) return Object(s.a)(JSON.parse(n));
                    var r = e();
                    return (
                        r.subscribe(function (e) {
                            try {
                                sessionStorage.setItem(t, JSON.stringify(e));
                            } catch (t) {}
                        }),
                        r
                    );
                });
            }
            var j,
                l = n(1);
            function d(t, e) {
                if (void 0 === j) {
                    var n = Object(l.d)('#__lang');
                    j = JSON.parse(n.textContent);
                }
                if (void 0 === j[t])
                    throw new ReferenceError('Invalid translation: ' + t);
                return void 0 !== e ? j[t].replace('#', e) : j[t];
            }
            function p(t, e) {
                var n = e;
                if (t.length > n) {
                    for (; ' ' !== t[n] && --n > 0; );
                    return t.substring(0, n) + '...';
                }
                return t;
            }
            function h(t) {
                return t > 999
                    ? ((t + 1e-6) / 1e3).toFixed(+((t - 950) % 1e3 > 99)) + 'k'
                    : t.toString();
            }
            function v(t) {
                for (var e = 0, n = 0, r = t.length; n < r; n++)
                    (e = (e << 5) - e + t.charCodeAt(n)), (e |= 0);
                return e;
            }
        },
        ,
        ,
        function (t, e, n) {
            'use strict';
            var r = n(22);
            n.d(e, 'setupComponents', function () {
                return r.a;
            }),
                n.d(e, 'useComponent', function () {
                    return r.b;
                });
            var c = n(74);
            n.d(e, 'mountHeader', function () {
                return c.a;
            });
            var a = n(73);
            n.d(e, 'mountHero', function () {
                return a.a;
            });
            var i = n(72);
            n.d(e, 'mountMain', function () {
                return i.a;
            });
            var o = n(76);
            n.d(e, 'mountNavigation', function () {
                return o.a;
            });
            var u = n(71);
            n.d(e, 'mountSearch', function () {
                return u.a;
            }),
                n.d(e, 'mountSearchQuery', function () {
                    return u.b;
                }),
                n.d(e, 'mountSearchReset', function () {
                    return u.c;
                }),
                n.d(e, 'mountSearchResult', function () {
                    return u.d;
                });
            var b = n(30);
            n.o(b, 'mountTableOfContents') &&
                n.d(e, 'mountTableOfContents', function () {
                    return b.mountTableOfContents;
                }),
                n.o(b, 'mountTabs') &&
                    n.d(e, 'mountTabs', function () {
                        return b.mountTabs;
                    });
            var f = n(75);
            n.d(e, 'mountTabs', function () {
                return f.a;
            });
            var s = n(67);
            n.o(s, 'mountTableOfContents') &&
                n.d(e, 'mountTableOfContents', function () {
                    return s.mountTableOfContents;
                });
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (t, e, n) {
            'use strict';
            n.d(e, 'e', function () {
                return O;
            }),
                n.d(e, 'f', function () {
                    return y;
                }),
                n.d(e, 'g', function () {
                    return R;
                }),
                n.d(e, 'h', function () {
                    return U;
                }),
                n.d(e, 'b', function () {
                    return q.b;
                }),
                n.d(e, 'i', function () {
                    return q.f;
                }),
                n.d(e, 'a', function () {
                    return q.a;
                }),
                n.d(e, 'c', function () {
                    return q.d;
                }),
                n.d(e, 'd', function () {
                    return q.e;
                });
            var r = n(61),
                c = n(105),
                a = n(98),
                i = n(113),
                o = n(82),
                u = n(96),
                b = n(1),
                f = n(31),
                s = n(4);
            function O(t) {
                var e = t.document$,
                    n = t.dialog$;
                if (!r.isSupported()) return c.a;
                e.subscribe(function () {
                    Object(b.e)('pre > code').forEach(function (t, e) {
                        var n = t.parentElement;
                        (n.id = '__code_' + e),
                            n.insertBefore(Object(f.a)(n.id), t);
                    });
                });
                var O = Object(a.a)(function (t) {
                    new r('.md-clipboard').on('success', t);
                }).pipe(Object(i.a)());
                return (
                    O.pipe(
                        Object(o.a)(function (t) {
                            return t.clearSelection();
                        }),
                        Object(u.a)(Object(s.f)('clipboard.copied')),
                    ).subscribe(n),
                    O
                );
            }
            var j = n(27),
                l = n(41),
                d = n(85),
                p = n(35),
                h = n(9),
                v = n(59),
                m = n(114);
            function y(t) {
                var e = (void 0 === t ? {} : t).duration,
                    n = new j.a(),
                    r = Object(b.a)('div');
                return (
                    r.classList.add('md-dialog', 'md-typeset'),
                    n
                        .pipe(
                            Object(p.a)(function (t) {
                                return Object(l.a)(document.body).pipe(
                                    Object(h.a)(function (t) {
                                        return t.appendChild(r);
                                    }),
                                    Object(v.b)(d.a),
                                    Object(m.a)(1),
                                    Object(o.a)(function (e) {
                                        (e.innerHTML = t),
                                            e.setAttribute(
                                                'data-md-state',
                                                'open',
                                            );
                                    }),
                                    Object(m.a)(e || 2e3),
                                    Object(o.a)(function (t) {
                                        return t.removeAttribute(
                                            'data-md-state',
                                        );
                                    }),
                                    Object(m.a)(400),
                                    Object(o.a)(function (t) {
                                        (t.innerHTML = ''), t.remove();
                                    }),
                                );
                            }),
                        )
                        .subscribe(),
                    n
                );
            }
            var g = n(0),
                w = n(95),
                $ = n(97),
                x = n(116),
                k = n(99),
                S = n(48),
                C = n(101),
                A = n(90),
                T = n(106),
                _ = n(107),
                E = n(104),
                L = n(91),
                M = n(108),
                H = n(92);
            function R(t, e) {
                var n = e.document$,
                    r = e.viewport$,
                    a = e.location$;
                'scrollRestoration' in history &&
                    (history.scrollRestoration = 'manual'),
                    Object(w.a)(window, 'beforeunload').subscribe(function () {
                        history.scrollRestoration = 'auto';
                    });
                var o = Object(b.c)('link[rel="shortcut icon"]');
                void 0 !== o && (o.href = o.href);
                var u = Object(w.a)(document.body, 'click').pipe(
                    Object(k.a)(function (t) {
                        return !(t.metaKey || t.ctrlKey);
                    }),
                    Object(p.a)(function (e) {
                        if (e.target instanceof HTMLElement) {
                            var n = e.target.closest('a');
                            if (
                                n &&
                                !n.target &&
                                Object(b.h)(n) &&
                                t.includes(n.href)
                            )
                                return (
                                    Object(b.g)(n) || e.preventDefault(),
                                    Object(l.a)(n)
                                );
                        }
                        return c.a;
                    }),
                    Object(h.a)(function (t) {
                        return {url: new URL(t.href)};
                    }),
                    Object(i.a)(),
                );
                u.subscribe(function () {
                    Object(b.o)('search', !1);
                });
                var f = u.pipe(
                        Object(k.a)(function (t) {
                            var e = t.url;
                            return !Object(b.g)(e);
                        }),
                        Object(i.a)(),
                    ),
                    s = Object(w.a)(window, 'popstate').pipe(
                        Object(k.a)(function (t) {
                            return null !== t.state;
                        }),
                        Object(h.a)(function (t) {
                            return {
                                url: new URL(location.href),
                                offset: t.state,
                            };
                        }),
                        Object(i.a)(),
                    );
                Object($.a)(f, s)
                    .pipe(
                        Object(S.a)(function (t, e) {
                            return t.url.href === e.url.href;
                        }),
                        Object(C.a)('url'),
                    )
                    .subscribe(a);
                var O = a.pipe(
                    Object(A.a)('pathname'),
                    Object(T.a)(1),
                    Object(p.a)(function (t) {
                        return Object(x.a)({
                            url: t.href,
                            responseType: 'text',
                            withCredentials: !0,
                        }).pipe(
                            Object(_.a)(function () {
                                return Object(b.m)(t), c.a;
                            }),
                        );
                    }),
                );
                f.pipe(Object(E.a)(O)).subscribe(function (t) {
                    var e = t.url;
                    history.pushState({}, '', e.toString());
                });
                var j = new DOMParser();
                O.pipe(
                    Object(h.a)(function (t) {
                        var e = t.response;
                        return j.parseFromString(e, 'text/html');
                    }),
                ).subscribe(n);
                var d = Object($.a)(f, s).pipe(Object(E.a)(n));
                d.subscribe(function (t) {
                    var e = t.url,
                        n = t.offset;
                    e.hash && !n
                        ? Object(b.n)(e.hash)
                        : Object(b.p)(n || {y: 0});
                }),
                    d.pipe(Object(L.a)(n)).subscribe(function (t) {
                        var e,
                            n,
                            r = Object(g.h)(t, 2)[1],
                            c = r.title,
                            a = r.head;
                        document.dispatchEvent(
                            new CustomEvent('DOMContentSwitch'),
                        ),
                            (document.title = c);
                        try {
                            for (
                                var i = Object(g.k)([
                                        'link[rel="canonical"]',
                                        'meta[name="author"]',
                                        'meta[name="description"]',
                                    ]),
                                    o = i.next();
                                !o.done;
                                o = i.next()
                            ) {
                                var u = o.value,
                                    f = Object(b.c)(u, a),
                                    s = Object(b.c)(u, document.head);
                                void 0 !== f &&
                                    void 0 !== s &&
                                    Object(b.j)(s, f);
                            }
                        } catch (t) {
                            e = {error: t};
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i);
                            } finally {
                                if (e) throw e.error;
                            }
                        }
                    }),
                    r
                        .pipe(Object(M.a)(250), Object(A.a)('offset'))
                        .subscribe(function (t) {
                            var e = t.offset;
                            history.replaceState(e, '');
                        }),
                    Object($.a)(u, s)
                        .pipe(
                            Object(H.a)(2, 1),
                            Object(k.a)(function (t) {
                                var e = Object(g.h)(t, 2),
                                    n = e[0],
                                    r = e[1];
                                return (
                                    n.url.pathname === r.url.pathname &&
                                    !Object(b.g)(r.url)
                                );
                            }),
                            Object(h.a)(function (t) {
                                return Object(g.h)(t, 2)[1];
                            }),
                        )
                        .subscribe(function (t) {
                            var e = t.offset;
                            Object(b.p)(e || {y: 0});
                        });
            }
            var P = n(7);
            function U() {
                var t = Object(b.u)().pipe(
                    Object(h.a)(function (t) {
                        return Object(g.a)(
                            {mode: Object(b.f)('search') ? 'search' : 'global'},
                            t,
                        );
                    }),
                    Object(k.a)(function (t) {
                        if ('global' === t.mode) {
                            var e = Object(b.b)();
                            if (void 0 !== e) return !Object(b.i)(e);
                        }
                        return !0;
                    }),
                    Object(i.a)(),
                );
                return (
                    t
                        .pipe(
                            Object(k.a)(function (t) {
                                return 'search' === t.mode;
                            }),
                            Object(L.a)(
                                Object(P.useComponent)('search-query'),
                                Object(P.useComponent)('search-result'),
                            ),
                        )
                        .subscribe(function (t) {
                            var e = Object(g.h)(t, 3),
                                n = e[0],
                                r = e[1],
                                c = e[2],
                                a = Object(b.b)();
                            switch (n.type) {
                                case 'Enter':
                                    a === r && n.claim();
                                    break;
                                case 'Escape':
                                case 'Tab':
                                    Object(b.o)('search', !1),
                                        Object(b.k)(r, !1);
                                    break;
                                case 'ArrowUp':
                                case 'ArrowDown':
                                    if (void 0 === a) Object(b.k)(r);
                                    else {
                                        var i = Object(g.i)(
                                                [r],
                                                Object(b.e)('[href]', c),
                                            ),
                                            o = Math.max(
                                                0,
                                                (Math.max(0, i.indexOf(a)) +
                                                    i.length +
                                                    ('ArrowUp' === n.type
                                                        ? -1
                                                        : 1)) %
                                                    i.length,
                                            );
                                        Object(b.k)(i[o]);
                                    }
                                    n.claim();
                                    break;
                                default:
                                    r !== Object(b.b)() && Object(b.k)(r);
                            }
                        }),
                    t
                        .pipe(
                            Object(k.a)(function (t) {
                                return 'global' === t.mode;
                            }),
                            Object(L.a)(Object(P.useComponent)('search-query')),
                        )
                        .subscribe(function (t) {
                            var e = Object(g.h)(t, 2),
                                n = e[0],
                                r = e[1];
                            switch (n.type) {
                                case 'f':
                                case 's':
                                case '/':
                                    Object(b.k)(r), Object(b.l)(r), n.claim();
                                    break;
                                case 'p':
                                case ',':
                                    var c = Object(b.c)('[href][rel=prev]');
                                    void 0 !== c && c.click();
                                    break;
                                case 'n':
                                case '.':
                                    var a = Object(b.c)('[href][rel=next]');
                                    void 0 !== a && a.click();
                            }
                        }),
                    t
                );
            }
            var q = n(46);
        },
        ,
        ,
        ,
        ,
        ,
        ,
        function (t, e, n) {
            'use strict';
            n.d(e, 'a', function () {
                return j;
            }),
                n.d(e, 'b', function () {
                    return l;
                });
            var r,
                c = n(0),
                a = n(41),
                i = n(20),
                o = n(9),
                u = n(83),
                b = n(89),
                f = n(35),
                s = n(48),
                O = n(1);
            function j(t, e) {
                var n = e.document$;
                r = n.pipe(
                    Object(o.a)(function (e) {
                        return t.reduce(function (t, n) {
                            var r,
                                a = Object(O.c)(
                                    '[data-md-component=' + n + ']',
                                    e,
                                );
                            return Object(c.a)(
                                Object(c.a)({}, t),
                                void 0 !== a ? (((r = {})[n] = a), r) : {},
                            );
                        }, {});
                    }),
                    Object(u.a)(function (e, n) {
                        var r, a;
                        try {
                            for (
                                var i = Object(c.k)(t), o = i.next();
                                !o.done;
                                o = i.next()
                            ) {
                                var u = o.value;
                                switch (u) {
                                    case 'announce':
                                    case 'header-title':
                                    case 'container':
                                    case 'skip':
                                        u in e &&
                                            void 0 !== e[u] &&
                                            (Object(O.j)(e[u], n[u]),
                                            (e[u] = n[u]));
                                        break;
                                    default:
                                        void 0 !== n[u]
                                            ? (e[u] = Object(O.c)(
                                                  '[data-md-component=' +
                                                      u +
                                                      ']',
                                              ))
                                            : delete e[u];
                                }
                            }
                        } catch (t) {
                            r = {error: t};
                        } finally {
                            try {
                                o && !o.done && (a = i.return) && a.call(i);
                            } finally {
                                if (r) throw r.error;
                            }
                        }
                        return e;
                    }),
                    Object(b.a)(1),
                );
            }
            function l(t) {
                return r.pipe(
                    Object(f.a)(function (e) {
                        return void 0 !== e[t] ? Object(a.a)(e[t]) : i.a;
                    }),
                    Object(s.a)(),
                );
            }
        },
        ,
        function (t, e, n) {
            'use strict';
            function r(t, e) {
                t.setAttribute('data-md-state', e ? 'blur' : '');
            }
            function c(t) {
                t.removeAttribute('data-md-state');
            }
            function a(t, e) {
                t.classList.toggle('md-nav__link--active', e);
            }
            function i(t) {
                t.classList.remove('md-nav__link--active');
            }
            n.d(e, 'd', function () {
                return r;
            }),
                n.d(e, 'b', function () {
                    return c;
                }),
                n.d(e, 'c', function () {
                    return a;
                }),
                n.d(e, 'a', function () {
                    return i;
                });
        },
        ,
        ,
        ,
        ,
        ,
        function (t, e, n) {
            'use strict';
            var r = n(64);
            n.o(r, 'applySidebar') &&
                n.d(e, 'applySidebar', function () {
                    return r.applySidebar;
                }),
                n.o(r, 'mountTableOfContents') &&
                    n.d(e, 'mountTableOfContents', function () {
                        return r.mountTableOfContents;
                    }),
                n.o(r, 'mountTabs') &&
                    n.d(e, 'mountTabs', function () {
                        return r.mountTabs;
                    }),
                n.o(r, 'watchSidebar') &&
                    n.d(e, 'watchSidebar', function () {
                        return r.watchSidebar;
                    });
        },
        function (t, e, n) {
            'use strict';
            n.d(e, 'a', function () {
                return a;
            }),
                n.d(e, 'b', function () {
                    return j;
                }),
                n.d(e, 'c', function () {
                    return p;
                }),
                n.d(e, 'd', function () {
                    return m;
                });
            var r = n(4),
                c = 'md-clipboard md-icon';
            function a(t) {
                return Object(r.b)(
                    'button',
                    {
                        class: c,
                        title: Object(r.f)('clipboard.copy'),
                        'data-clipboard-target': '#' + t + ' > code',
                    },
                    Object(r.b)(
                        'svg',
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 24 24',
                        },
                        Object(r.b)('path', {
                            d:
                                'M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z',
                        }),
                    ),
                );
            }
            var i = n(0),
                o = 'md-search-result__item',
                u = 'md-search-result__link',
                b =
                    'md-search-result__article md-search-result__article--document',
                f = 'md-search-result__article',
                s = 'md-search-result__title',
                O = 'md-search-result__teaser';
            function j(t) {
                var e = t.article,
                    n = t.sections,
                    c = Object(r.b)(
                        'div',
                        {class: 'md-search-result__icon md-icon'},
                        Object(r.b)(
                            'svg',
                            {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 24 24',
                            },
                            Object(r.b)('path', {
                                d:
                                    'M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H13C12.59,21.75 12.2,21.44 11.86,21.1C11.53,20.77 11.25,20.4 11,20H6V4H13V9H18V10.18C18.71,10.34 19.39,10.61 20,11V8L14,2M20.31,18.9C21.64,16.79 21,14 18.91,12.68C16.8,11.35 14,12 12.69,14.08C11.35,16.19 12,18.97 14.09,20.3C15.55,21.23 17.41,21.23 18.88,20.32L22,23.39L23.39,22L20.31,18.9M16.5,19A2.5,2.5 0 0,1 14,16.5A2.5,2.5 0 0,1 16.5,14A2.5,2.5 0 0,1 19,16.5A2.5,2.5 0 0,1 16.5,19Z',
                            }),
                        ),
                    ),
                    a = Object(i.i)([e], n).map(function (t) {
                        var e = t.location,
                            n = t.title,
                            a = t.text;
                        return Object(r.b)(
                            'a',
                            {href: e, class: u, tabIndex: -1},
                            Object(r.b)(
                                'article',
                                {class: 'parent' in t ? f : b},
                                !('parent' in t) && c,
                                Object(r.b)('h1', {class: s}, n),
                                a.length > 0 &&
                                    Object(r.b)(
                                        'p',
                                        {class: O},
                                        Object(r.g)(a, 320),
                                    ),
                            ),
                        );
                    });
                return Object(r.b)('li', {class: o}, a);
            }
            var l = 'md-source__facts',
                d = 'md-source__fact';
            function p(t) {
                var e = t.map(function (t) {
                    return Object(r.b)('li', {class: d}, t);
                });
                return Object(r.b)('ul', {class: l}, e);
            }
            var h = 'md-typeset__scrollwrap',
                v = 'md-typeset__table';
            function m(t) {
                return Object(r.b)(
                    'div',
                    {class: h},
                    Object(r.b)('div', {class: v}, t),
                );
            }
        },
        function (t, e, n) {
            'use strict';
            function r(t, e) {
                t.style.top = e + 'px';
            }
            function c(t) {
                t.style.top = '';
            }
            function a(t, e) {
                t.style.height = e + 'px';
            }
            function i(t) {
                t.style.height = '';
            }
            n.d(e, 'd', function () {
                return r;
            }),
                n.d(e, 'b', function () {
                    return c;
                }),
                n.d(e, 'c', function () {
                    return a;
                }),
                n.d(e, 'a', function () {
                    return i;
                });
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (t, e, n) {
            'use strict';
            var r = n(69);
            n.o(r, 'applyAnchorList') &&
                n.d(e, 'applyAnchorList', function () {
                    return r.applyAnchorList;
                }),
                n.o(r, 'watchAnchorList') &&
                    n.d(e, 'watchAnchorList', function () {
                        return r.watchAnchorList;
                    });
            var c = n(70);
            n.d(e, 'applyAnchorList', function () {
                return c.a;
            }),
                n.d(e, 'watchAnchorList', function () {
                    return c.b;
                });
            n(24);
        },
        function (t, e, n) {
            'use strict';
            n.d(e, 'b', function () {
                return a;
            }),
                n.d(e, 'f', function () {
                    return y;
                }),
                n.d(e, 'a', function () {
                    return i;
                }),
                n.d(e, 'd', function () {
                    return p;
                }),
                n.d(e, 'c', function () {
                    return h;
                }),
                n.d(e, 'e', function () {
                    return v;
                });
            var r = n(0),
                c = n(78);
            !(function () {
                function t(t) {
                    var e = t.config,
                        n = t.docs,
                        a = t.pipeline,
                        i = t.index;
                    (this.documents = (function (t) {
                        var e,
                            n,
                            a = new Map();
                        try {
                            for (
                                var i = Object(r.k)(t), o = i.next();
                                !o.done;
                                o = i.next()
                            ) {
                                var u = o.value,
                                    b = Object(r.h)(u.location.split('#'), 2),
                                    f = b[0],
                                    s = b[1],
                                    O = u.location,
                                    j = u.title,
                                    l = c(u.text)
                                        .replace(/\s+(?=[,.:;!?])/g, '')
                                        .replace(/\s+/g, ' ');
                                if (s) {
                                    var d = a.get(f);
                                    d.linked
                                        ? a.set(O, {
                                              location: O,
                                              title: j,
                                              text: l,
                                              parent: d,
                                          })
                                        : ((d.title = u.title),
                                          (d.text = l),
                                          (d.linked = !0));
                                } else
                                    a.set(O, {
                                        location: O,
                                        title: j,
                                        text: l,
                                        linked: !1,
                                    });
                            }
                        } catch (t) {
                            e = {error: t};
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i);
                            } finally {
                                if (e) throw e.error;
                            }
                        }
                        return a;
                    })(n)),
                        (this.highlight = (function (t) {
                            var e = new RegExp(t.separator, 'img'),
                                n = function (t, e, n) {
                                    return e + '<em>' + n + '</em>';
                                };
                            return function (c) {
                                c = c.replace(/[\s*+-:~^]+/g, ' ').trim();
                                var a = new RegExp(
                                    '(^|' +
                                        t.separator +
                                        ')(' +
                                        c
                                            .replace(
                                                /[|\\{}()[\]^$+*?.-]/g,
                                                '\\$&',
                                            )
                                            .replace(e, '|') +
                                        ')',
                                    'img',
                                );
                                return function (t) {
                                    return Object(r.a)(Object(r.a)({}, t), {
                                        title: t.title.replace(a, n),
                                        text: t.text.replace(a, n),
                                    });
                                };
                            };
                        })(e)),
                        (this.index =
                            void 0 === i
                                ? lunr(function () {
                                      var t, c, i, o, u;
                                      (a = a || ['trimmer', 'stopWordFilter']),
                                          this.pipeline.reset();
                                      try {
                                          for (
                                              var b = Object(r.k)(a),
                                                  f = b.next();
                                              !f.done;
                                              f = b.next()
                                          ) {
                                              var s = f.value;
                                              this.pipeline.add(lunr[s]);
                                          }
                                      } catch (e) {
                                          t = {error: e};
                                      } finally {
                                          try {
                                              f &&
                                                  !f.done &&
                                                  (c = b.return) &&
                                                  c.call(b);
                                          } finally {
                                              if (t) throw t.error;
                                          }
                                      }
                                      1 === e.lang.length && 'en' !== e.lang[0]
                                          ? this.use(lunr[e.lang[0]])
                                          : e.lang.length > 1 &&
                                            this.use(
                                                (i = lunr).multiLanguage.apply(
                                                    i,
                                                    Object(r.i)(e.lang),
                                                ),
                                            ),
                                          this.field('title', {boost: 1e3}),
                                          this.field('text'),
                                          this.ref('location');
                                      try {
                                          for (
                                              var O = Object(r.k)(n),
                                                  j = O.next();
                                              !j.done;
                                              j = O.next()
                                          ) {
                                              var l = j.value;
                                              this.add(l);
                                          }
                                      } catch (t) {
                                          o = {error: t};
                                      } finally {
                                          try {
                                              j &&
                                                  !j.done &&
                                                  (u = O.return) &&
                                                  u.call(O);
                                          } finally {
                                              if (o) throw o.error;
                                          }
                                      }
                                  })
                                : lunr.Index.load(
                                      'string' == typeof i ? JSON.parse(i) : i,
                                  ));
                }
                t.prototype.query = function (t) {
                    var e = this;
                    if (t)
                        try {
                            var n = this.index
                                    .search(t)
                                    .reduce(function (t, n) {
                                        var c = e.documents.get(n.ref);
                                        if (void 0 !== c)
                                            if ('parent' in c) {
                                                var a = c.parent.location;
                                                t.set(
                                                    a,
                                                    Object(r.i)(
                                                        t.get(a) || [],
                                                        [n],
                                                    ),
                                                );
                                            } else {
                                                a = c.location;
                                                t.set(a, t.get(a) || []);
                                            }
                                        return t;
                                    }, new Map()),
                                c = this.highlight(t);
                            return Object(r.i)(n).map(function (t) {
                                var n = Object(r.h)(t, 2),
                                    a = n[0],
                                    i = n[1];
                                return {
                                    article: c(e.documents.get(a)),
                                    sections: i.map(function (t) {
                                        return c(e.documents.get(t.ref));
                                    }),
                                };
                            });
                        } catch (e) {
                            console.warn(
                                'Invalid query: ' +
                                    t +
                                    ' – see https://bit.ly/2s3ChXG',
                            );
                        }
                    return [];
                };
            })();
            function a(t) {
                return t
                    .replace(/(?:^|\s+)[*+-:^~]+(?=\s+|$)/g, '')
                    .trim()
                    .replace(/\s+|\b$/g, '* ');
            }
            var i,
                o = n(115),
                u = n(27),
                b = n(55),
                f = n(91),
                s = n(9),
                O = n(89),
                j = n(59),
                l = n(1),
                d = n(4);
            function p(t) {
                return t.type === i.READY;
            }
            function h(t) {
                return t.type === i.QUERY;
            }
            function v(t) {
                return t.type === i.RESULT;
            }
            function m(t) {
                var e = t.config,
                    n = t.docs,
                    r = t.index;
                return (
                    1 === e.lang.length &&
                        'en' === e.lang[0] &&
                        (e.lang = [Object(d.f)('search.config.lang')]),
                    '[s-]+' === e.separator &&
                        (e.separator = Object(d.f)('search.config.separator')),
                    {
                        config: e,
                        docs: n,
                        index: r,
                        pipeline: Object(d.f)('search.config.pipeline')
                            .split(/\s*,\s*/)
                            .filter(o.a),
                    }
                );
            }
            function y(t, e) {
                var n = e.index$,
                    c = e.base$,
                    a = new Worker(t),
                    o = new u.a(),
                    d = Object(l.C)(a, {tx$: o}).pipe(
                        Object(f.a)(c),
                        Object(s.a)(function (t) {
                            var e,
                                n,
                                c,
                                a,
                                i = Object(r.h)(t, 2),
                                o = i[0],
                                u = i[1];
                            if (v(o))
                                try {
                                    for (
                                        var b = Object(r.k)(o.data),
                                            f = b.next();
                                        !f.done;
                                        f = b.next()
                                    ) {
                                        var s = f.value,
                                            O = s.article,
                                            j = s.sections;
                                        O.location = u + '/' + O.location;
                                        try {
                                            for (
                                                var l =
                                                        ((c = void 0),
                                                        Object(r.k)(j)),
                                                    d = l.next();
                                                !d.done;
                                                d = l.next()
                                            ) {
                                                var p = d.value;
                                                p.location =
                                                    u + '/' + p.location;
                                            }
                                        } catch (t) {
                                            c = {error: t};
                                        } finally {
                                            try {
                                                d &&
                                                    !d.done &&
                                                    (a = l.return) &&
                                                    a.call(l);
                                            } finally {
                                                if (c) throw c.error;
                                            }
                                        }
                                    }
                                } catch (t) {
                                    e = {error: t};
                                } finally {
                                    try {
                                        f &&
                                            !f.done &&
                                            (n = b.return) &&
                                            n.call(b);
                                    } finally {
                                        if (e) throw e.error;
                                    }
                                }
                            return o;
                        }),
                        Object(O.a)(1),
                    );
                return (
                    n
                        .pipe(
                            Object(s.a)(function (t) {
                                return {type: i.SETUP, data: m(t)};
                            }),
                            Object(j.b)(b.a),
                        )
                        .subscribe(o.next.bind(o)),
                    {tx$: o, rx$: d}
                );
            }
            !(function (t) {
                (t[(t.SETUP = 0)] = 'SETUP'),
                    (t[(t.READY = 1)] = 'READY'),
                    (t[(t.QUERY = 2)] = 'QUERY'),
                    (t[(t.RESULT = 3)] = 'RESULT');
            })(i || (i = {}));
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (t, e, n) {
            'use strict';
            var r = n(65);
            n.o(r, 'applySidebar') &&
                n.d(e, 'applySidebar', function () {
                    return r.applySidebar;
                }),
                n.o(r, 'mountTableOfContents') &&
                    n.d(e, 'mountTableOfContents', function () {
                        return r.mountTableOfContents;
                    }),
                n.o(r, 'mountTabs') &&
                    n.d(e, 'mountTabs', function () {
                        return r.mountTabs;
                    }),
                n.o(r, 'watchSidebar') &&
                    n.d(e, 'watchSidebar', function () {
                        return r.watchSidebar;
                    });
            var c = n(66);
            n.d(e, 'applySidebar', function () {
                return c.a;
            }),
                n.d(e, 'watchSidebar', function () {
                    return c.b;
                });
            n(32);
        },
        function (t, e) {},
        function (t, e, n) {
            'use strict';
            n.d(e, 'b', function () {
                return l;
            }),
                n.d(e, 'a', function () {
                    return d;
                });
            var r = n(0),
                c = n(62),
                a = n(47),
                i = n(85),
                o = n(9),
                u = n(48),
                b = n(59),
                f = n(91),
                s = n(82),
                O = n(84),
                j = n(32);
            function l(t, e) {
                var n = e.main$,
                    a = e.viewport$,
                    i =
                        t.parentElement.offsetTop -
                        t.parentElement.parentElement.offsetTop;
                return Object(c.a)([n, a]).pipe(
                    Object(o.a)(function (t) {
                        var e = Object(r.h)(t, 2),
                            n = e[0],
                            c = n.offset,
                            a = n.height,
                            o = e[1].offset.y;
                        return {
                            height: (a =
                                a + Math.min(i, Math.max(0, o - c)) - i),
                            lock: o >= c + i,
                        };
                    }),
                    Object(u.a)(function (t, e) {
                        return t.height === e.height && t.lock === e.lock;
                    }),
                );
            }
            function d(t, e) {
                var n = e.header$;
                return Object(a.a)(
                    Object(b.b)(i.a),
                    Object(f.a)(n),
                    Object(s.a)(function (e) {
                        var n = Object(r.h)(e, 2),
                            c = n[0],
                            a = c.height,
                            i = c.lock,
                            o = n[1].height;
                        Object(j.c)(t, a),
                            i ? Object(j.d)(t, o) : Object(j.b)(t);
                    }),
                    Object(o.a)(function (t) {
                        return Object(r.h)(t, 1)[0];
                    }),
                    Object(O.a)(function () {
                        Object(j.b)(t), Object(j.a)(t);
                    }),
                );
            }
        },
        function (t, e, n) {
            'use strict';
            var r = n(68);
            n.d(e, 'mountTableOfContents', function () {
                return r.a;
            });
            n(45);
        },
        function (t, e, n) {
            'use strict';
            n.d(e, 'a', function () {
                return O;
            });
            var r = n(0),
                c = n(47),
                a = n(62),
                i = n(41),
                o = n(35),
                u = n(9),
                b = n(1),
                f = n(30),
                s = n(45);
            function O(t) {
                var e = t.header$,
                    n = t.main$,
                    O = t.viewport$,
                    j = t.tablet$;
                return Object(c.a)(
                    Object(o.a)(function (t) {
                        return j.pipe(
                            Object(o.a)(function (c) {
                                if (c) {
                                    var o = Object(b.e)('.md-nav__link', t),
                                        j = Object(f.watchSidebar)(t, {
                                            main$: n,
                                            viewport$: O,
                                        }).pipe(
                                            Object(f.applySidebar)(t, {
                                                header$: e,
                                            }),
                                        ),
                                        l = Object(s.watchAnchorList)(o, {
                                            header$: e,
                                            viewport$: O,
                                        }).pipe(Object(s.applyAnchorList)(o));
                                    return Object(a.a)([j, l]).pipe(
                                        Object(u.a)(function (t) {
                                            var e = Object(r.h)(t, 2);
                                            return {
                                                sidebar: e[0],
                                                anchors: e[1],
                                            };
                                        }),
                                    );
                                }
                                return Object(i.a)({});
                            }),
                        );
                    }),
                );
            }
        },
        function (t, e) {},
        function (t, e, n) {
            'use strict';
            n.d(e, 'b', function () {
                return y;
            }),
                n.d(e, 'a', function () {
                    return g;
                });
            var r = n(0),
                c = n(93),
                a = n(62),
                i = n(47),
                o = n(85),
                u = n(9),
                b = n(90),
                f = n(35),
                s = n(83),
                O = n(48),
                j = n(94),
                l = n(92),
                d = n(59),
                p = n(82),
                h = n(84),
                v = n(1),
                m = n(24);
            function y(t, e) {
                var n,
                    i,
                    o = e.header$,
                    d = e.viewport$,
                    p = new Map();
                try {
                    for (
                        var h = Object(r.k)(t), m = h.next();
                        !m.done;
                        m = h.next()
                    ) {
                        var y = m.value,
                            g = decodeURIComponent(y.hash.substring(1)),
                            w = Object(v.c)('[id="' + g + '"]');
                        void 0 !== w && p.set(y, w);
                    }
                } catch (t) {
                    n = {error: t};
                } finally {
                    try {
                        m && !m.done && (i = h.return) && i.call(h);
                    } finally {
                        if (n) throw n.error;
                    }
                }
                var $ = o.pipe(
                    Object(u.a)(function (t) {
                        return 18 + t.height;
                    }),
                );
                return Object(v.t)(document.body)
                    .pipe(
                        Object(b.a)('height'),
                        Object(u.a)(function () {
                            var t = [];
                            return Object(r.i)(p).reduce(function (e, n) {
                                for (
                                    var a = Object(r.h)(n, 2),
                                        i = a[0],
                                        o = a[1];
                                    t.length;

                                ) {
                                    if (
                                        !(
                                            p.get(t[t.length - 1]).tagName >=
                                            o.tagName
                                        )
                                    )
                                        break;
                                    t.pop();
                                }
                                for (
                                    var u = o.offsetTop;
                                    !u && o.parentElement;

                                )
                                    u = (o = o.parentElement).offsetTop;
                                return e.set(
                                    Object(c.a)((t = Object(r.i)(t, [i]))),
                                    u,
                                );
                            }, new Map());
                        }),
                        Object(f.a)(function (t) {
                            return Object(a.a)([$, d]).pipe(
                                Object(s.a)(
                                    function (t, e) {
                                        for (
                                            var n = Object(r.h)(t, 2),
                                                c = n[0],
                                                a = n[1],
                                                i = Object(r.h)(e, 2),
                                                o = i[0],
                                                u = i[1].offset.y;
                                            a.length;

                                        ) {
                                            if (
                                                !(
                                                    Object(r.h)(a[0], 2)[1] -
                                                        o <
                                                    u
                                                )
                                            )
                                                break;
                                            c = Object(r.i)(c, [a.shift()]);
                                        }
                                        for (; c.length; ) {
                                            if (
                                                !(
                                                    Object(r.h)(
                                                        c[c.length - 1],
                                                        2,
                                                    )[1] -
                                                        o >=
                                                    u
                                                )
                                            )
                                                break;
                                            a = Object(r.i)([c.pop()], a);
                                        }
                                        return [c, a];
                                    },
                                    [[], Object(r.i)(t)],
                                ),
                                Object(O.a)(function (t, e) {
                                    return t[0] === e[0] && t[1] === e[1];
                                }),
                            );
                        }),
                    )
                    .pipe(
                        Object(u.a)(function (t) {
                            var e = Object(r.h)(t, 2),
                                n = e[0],
                                c = e[1];
                            return {
                                prev: n.map(function (t) {
                                    return Object(r.h)(t, 1)[0];
                                }),
                                next: c.map(function (t) {
                                    return Object(r.h)(t, 1)[0];
                                }),
                            };
                        }),
                        Object(j.a)({prev: [], next: []}),
                        Object(l.a)(2, 1),
                        Object(u.a)(function (t) {
                            var e = Object(r.h)(t, 2),
                                n = e[0],
                                c = e[1];
                            return n.prev.length < c.prev.length
                                ? {
                                      prev: c.prev.slice(
                                          Math.max(0, n.prev.length - 1),
                                          c.prev.length,
                                      ),
                                      next: [],
                                  }
                                : {
                                      prev: c.prev.slice(-1),
                                      next: c.next.slice(
                                          0,
                                          c.next.length - n.next.length,
                                      ),
                                  };
                        }),
                    );
            }
            function g(t) {
                return Object(i.a)(
                    Object(d.b)(o.a),
                    Object(p.a)(function (t) {
                        var e,
                            n,
                            c = t.prev,
                            a = t.next;
                        try {
                            for (
                                var i = Object(r.k)(a), o = i.next();
                                !o.done;
                                o = i.next()
                            ) {
                                var u = Object(r.h)(o.value, 1)[0];
                                Object(m.a)(u), Object(m.b)(u);
                            }
                        } catch (t) {
                            e = {error: t};
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i);
                            } finally {
                                if (e) throw e.error;
                            }
                        }
                        c.forEach(function (t, e) {
                            var n = Object(r.h)(t, 1)[0];
                            Object(m.c)(n, e === c.length - 1),
                                Object(m.d)(n, !0);
                        });
                    }),
                    Object(h.a)(function () {
                        var e, n;
                        try {
                            for (
                                var c = Object(r.k)(t), a = c.next();
                                !a.done;
                                a = c.next()
                            ) {
                                var i = a.value;
                                Object(m.a)(i), Object(m.b)(i);
                            }
                        } catch (t) {
                            e = {error: t};
                        } finally {
                            try {
                                a && !a.done && (n = c.return) && n.call(c);
                            } finally {
                                if (e) throw e.error;
                            }
                        }
                    }),
                );
            }
        },
        function (t, e, n) {
            'use strict';
            n.d(e, 'a', function () {
                return l;
            }),
                n.d(e, 'b', function () {
                    return w;
                }),
                n.d(e, 'c', function () {
                    return S;
                }),
                n.d(e, 'd', function () {
                    return q;
                });
            var r = n(0),
                c = n(47),
                a = n(62),
                i = n(35),
                o = n(99),
                u = n(96),
                b = n(94),
                f = n(104),
                s = n(117),
                O = n(9),
                j = n(46);
            function l(t, e) {
                var n = t.rx$,
                    l = t.tx$,
                    d = e.query$,
                    p = e.reset$,
                    h = e.result$;
                return Object(c.a)(
                    Object(i.a)(function () {
                        var t = n.pipe(
                            Object(o.a)(j.d),
                            Object(u.a)('ready'),
                            Object(b.a)('waiting'),
                        );
                        return (
                            l
                                .pipe(
                                    Object(o.a)(j.c),
                                    Object(f.a)(t),
                                    Object(s.a)(1),
                                )
                                .subscribe(l.next.bind(l)),
                            Object(a.a)([t, d, h, p]).pipe(
                                Object(O.a)(function (t) {
                                    var e = Object(r.h)(t, 3);
                                    return {
                                        status: e[0],
                                        query: e[1],
                                        result: e[2],
                                    };
                                }),
                            )
                        );
                    }),
                );
            }
            var d = n(90),
                p = n(1),
                h = n(15),
                v = n(97),
                m = n(95),
                y = n(114),
                g = n(48);
            function w(t, e) {
                var n = t.tx$;
                return (
                    void 0 === e && (e = {}),
                    Object(c.a)(
                        Object(i.a)(function (t) {
                            var c = (function (t, e) {
                                var n =
                                        (void 0 === e ? {} : e).transform ||
                                        h.b,
                                    c = Object(v.a)(
                                        Object(m.a)(t, 'keyup'),
                                        Object(m.a)(t, 'focus').pipe(
                                            Object(y.a)(1),
                                        ),
                                    ).pipe(
                                        Object(O.a)(function () {
                                            return n(t.value);
                                        }),
                                        Object(b.a)(n(t.value)),
                                        Object(g.a)(),
                                    ),
                                    i = Object(p.r)(t);
                                return Object(a.a)([c, i]).pipe(
                                    Object(O.a)(function (t) {
                                        var e = Object(r.h)(t, 2);
                                        return {value: e[0], focus: e[1]};
                                    }),
                                );
                            })(t, e);
                            return (
                                c
                                    .pipe(
                                        Object(d.a)('value'),
                                        Object(O.a)(function (t) {
                                            var e = t.value;
                                            return {type: h.a.QUERY, data: e};
                                        }),
                                    )
                                    .subscribe(n.next.bind(n)),
                                c
                                    .pipe(Object(d.a)('focus'))
                                    .subscribe(function (t) {
                                        var e = t.focus;
                                        e && Object(p.o)('search', e);
                                    }),
                                c
                            );
                        }),
                    )
                );
            }
            var $ = n(103),
                x = n(82),
                k = n(22);
            function S() {
                return Object(c.a)(
                    Object(i.a)(function (t) {
                        return (function (t) {
                            return Object(m.a)(t, 'click').pipe(
                                Object(u.a)(void 0),
                            );
                        })(t).pipe(
                            Object($.a)(Object(k.b)('search-query')),
                            Object(x.a)(p.k),
                            Object(u.a)(void 0),
                        );
                    }),
                    Object(b.a)(void 0),
                );
            }
            var C = n(115),
                A = n(101),
                T = n(85),
                _ = n(91),
                E = n(59),
                L = n(83),
                M = n(84),
                H = n(31),
                R = n(4);
            function P(t, e) {
                t.appendChild(e);
            }
            function U(t, e) {
                var n = e.query$,
                    a = e.ready$,
                    o = e.fetch$,
                    b = Object(p.d)('.md-search-result__list', t),
                    f = Object(p.d)('.md-search-result__meta', t);
                return Object(c.a)(
                    Object(_.a)(n, a),
                    Object(O.a)(function (t) {
                        var e = Object(r.h)(t, 2),
                            n = e[0];
                        return (
                            e[1].value
                                ? (function (t, e) {
                                      switch (e) {
                                          case 0:
                                              t.textContent = Object(R.f)(
                                                  'search.result.none',
                                              );
                                              break;
                                          case 1:
                                              t.textContent = Object(R.f)(
                                                  'search.result.one',
                                              );
                                              break;
                                          default:
                                              t.textContent = Object(R.f)(
                                                  'search.result.other',
                                                  e.toString(),
                                              );
                                      }
                                  })(f, n.length)
                                : (function (t) {
                                      t.textContent = Object(R.f)(
                                          'search.result.placeholder',
                                      );
                                  })(f),
                            n
                        );
                    }),
                    Object(i.a)(function (e) {
                        return o.pipe(
                            Object(E.b)(T.a),
                            Object(L.a)(function (n) {
                                for (
                                    var r = t.parentElement;
                                    n < e.length &&
                                    (P(b, Object(H.b)(e[n++])),
                                    !(r.scrollHeight - r.offsetHeight > 16));

                                );
                                return n;
                            }, 0),
                            Object(u.a)(e),
                            Object(M.a)(function () {
                                !(function (t) {
                                    t.innerHTML = '';
                                })(b);
                            }),
                        );
                    }),
                );
            }
            function q(t, e) {
                var n = t.rx$,
                    r = e.query$;
                return Object(c.a)(
                    Object(i.a)(function (t) {
                        var e = t.parentElement,
                            c = n.pipe(Object(o.a)(h.c), Object(u.a)(!0)),
                            a = Object(p.s)(e).pipe(
                                Object(O.a)(function (t) {
                                    return (
                                        t.y >=
                                        e.scrollHeight - e.offsetHeight - 16
                                    );
                                }),
                                Object(g.a)(),
                                Object(o.a)(C.a),
                            );
                        return n.pipe(
                            Object(o.a)(h.d),
                            Object(A.a)('data'),
                            U(t, {query$: r, ready$: c, fetch$: a}),
                            Object(b.a)([]),
                        );
                    }),
                );
            }
        },
        function (t, e, n) {
            'use strict';
            n.d(e, 'a', function () {
                return m;
            });
            var r = n(27),
                c = n(47),
                a = n(35),
                i = n(90),
                o = n(82),
                u = n(22),
                b = n(0),
                f = n(62),
                s = n(85),
                O = n(101),
                j = n(48),
                l = n(89),
                d = n(9),
                p = n(59),
                h = n(84),
                v = n(1);
            function m(t) {
                var e = t.header$,
                    n = t.viewport$,
                    m = new r.a();
                return (
                    Object(u.b)('header')
                        .pipe(
                            Object(a.a)(function (t) {
                                return m.pipe(
                                    Object(i.a)('active'),
                                    ((e = t),
                                    Object(c.a)(
                                        Object(p.b)(s.a),
                                        Object(o.a)(function (t) {
                                            var n = t.active;
                                            !(function (t, e) {
                                                t.setAttribute(
                                                    'data-md-state',
                                                    e ? 'shadow' : '',
                                                );
                                            })(e, n);
                                        }),
                                        Object(h.a)(function () {
                                            !(function (t) {
                                                t.removeAttribute(
                                                    'data-md-state',
                                                );
                                            })(e);
                                        }),
                                    )),
                                );
                                var e;
                            }),
                        )
                        .subscribe(),
                    Object(c.a)(
                        Object(a.a)(function (t) {
                            return (function (t, e) {
                                var n = e.header$,
                                    r = e.viewport$,
                                    c = n.pipe(
                                        Object(O.a)('height'),
                                        Object(j.a)(),
                                        Object(l.a)(1),
                                    ),
                                    o = c.pipe(
                                        Object(a.a)(function () {
                                            return Object(v.t)(t).pipe(
                                                Object(d.a)(function (e) {
                                                    var n = e.height;
                                                    return {
                                                        top: t.offsetTop,
                                                        bottom: t.offsetTop + n,
                                                    };
                                                }),
                                            );
                                        }),
                                        Object(i.a)('bottom'),
                                        Object(l.a)(1),
                                    );
                                return Object(f.a)([c, o, r]).pipe(
                                    Object(d.a)(function (t) {
                                        var e = Object(b.h)(t, 3),
                                            n = e[0],
                                            r = e[1],
                                            c = r.top,
                                            a = r.bottom,
                                            i = e[2],
                                            o = i.offset.y,
                                            u = i.size.height;
                                        return {
                                            offset: c - n,
                                            height: (u = Math.max(
                                                0,
                                                u -
                                                    Math.max(0, c - o, n) -
                                                    Math.max(0, u + o - a),
                                            )),
                                            active: c - n <= o,
                                        };
                                    }),
                                    Object(j.a)(function (t, e) {
                                        return (
                                            t.offset === e.offset &&
                                            t.height === e.height &&
                                            t.active === e.active
                                        );
                                    }),
                                );
                            })(t, {header$: e, viewport$: n});
                        }),
                        Object(o.a)(function (t) {
                            return m.next(t);
                        }),
                    )
                );
            }
        },
        function (t, e, n) {
            'use strict';
            n.d(e, 'a', function () {
                return O;
            });
            var r = n(47),
                c = n(35),
                a = n(9),
                i = n(90),
                o = n(1),
                u = n(85),
                b = n(59),
                f = n(82),
                s = n(84);
            function O(t) {
                var e = t.header$,
                    n = t.viewport$;
                return Object(r.a)(
                    Object(c.a)(function (t) {
                        return Object(o.B)(t, {header$: e, viewport$: n}).pipe(
                            Object(a.a)(function (t) {
                                return {hidden: t.offset.y >= 20};
                            }),
                            Object(i.a)('hidden'),
                            (function (t) {
                                return Object(r.a)(
                                    Object(b.b)(u.a),
                                    Object(f.a)(function (e) {
                                        var n = e.hidden;
                                        !(function (t, e) {
                                            t.setAttribute(
                                                'data-md-state',
                                                e ? 'hidden' : '',
                                            );
                                        })(t, n);
                                    }),
                                    Object(s.a)(function () {
                                        !(function (t) {
                                            t.removeAttribute('data-md-state');
                                        })(t);
                                    }),
                                );
                            })(t),
                        );
                    }),
                );
            }
        },
        function (t, e, n) {
            'use strict';
            n.d(e, 'a', function () {
                return y;
            });
            var r = n(0),
                c = n(47),
                a = n(62),
                i = n(35),
                o = n(9),
                u = n(99),
                b = n(91),
                f = n(48),
                s = n(94),
                O = n(89),
                j = n(1),
                l = n(22),
                d = n(41),
                p = n(85),
                h = n(59),
                v = n(82),
                m = n(84);
            function y(t) {
                var e = t.document$,
                    n = t.viewport$;
                return Object(c.a)(
                    Object(i.a)(function (t) {
                        var y = (function (t, e) {
                                return e.document$.pipe(
                                    Object(o.a)(function () {
                                        var e = getComputedStyle(t);
                                        return [
                                            'sticky',
                                            '-webkit-sticky',
                                        ].includes(e.position);
                                    }),
                                    Object(f.a)(),
                                    Object(i.a)(function (e) {
                                        return e
                                            ? Object(j.t)(t).pipe(
                                                  Object(o.a)(function (t) {
                                                      return {
                                                          sticky: !0,
                                                          height: t.height,
                                                      };
                                                  }),
                                              )
                                            : Object(d.a)({
                                                  sticky: !1,
                                                  height: 0,
                                              });
                                    }),
                                    Object(O.a)(1),
                                );
                            })(t, {document$: e}),
                            g = Object(l.b)('main').pipe(
                                Object(o.a)(function (t) {
                                    return Object(j.c)(
                                        'h1, h2, h3, h4, h5, h6',
                                        t,
                                    );
                                }),
                                Object(u.a)(function (t) {
                                    return void 0 !== t;
                                }),
                                Object(b.a)(Object(l.b)('header-title')),
                                Object(i.a)(function (t) {
                                    var e = Object(r.h)(t, 2),
                                        a = e[0],
                                        i = e[1];
                                    return Object(j.B)(a, {
                                        header$: y,
                                        viewport$: n,
                                    }).pipe(
                                        Object(o.a)(function (t) {
                                            return t.offset.y >= a.offsetHeight
                                                ? 'page'
                                                : 'site';
                                        }),
                                        Object(f.a)(),
                                        (function (t) {
                                            return Object(c.a)(
                                                Object(h.b)(p.a),
                                                Object(v.a)(function (e) {
                                                    !(function (t, e) {
                                                        t.setAttribute(
                                                            'data-md-state',
                                                            e ? 'active' : '',
                                                        );
                                                    })(t, 'page' === e);
                                                }),
                                                Object(m.a)(function () {
                                                    !(function (t) {
                                                        t.removeAttribute(
                                                            'data-md-state',
                                                        );
                                                    })(t);
                                                }),
                                            );
                                        })(i),
                                    );
                                }),
                                Object(s.a)('site'),
                            );
                        return Object(a.a)([y, g]).pipe(
                            Object(o.a)(function (t) {
                                var e = Object(r.h)(t, 2),
                                    n = e[0],
                                    c = e[1];
                                return Object(r.a)({type: c}, n);
                            }),
                            Object(O.a)(1),
                        );
                    }),
                );
            }
        },
        function (t, e, n) {
            'use strict';
            n.d(e, 'a', function () {
                return j;
            });
            var r = n(47),
                c = n(41),
                a = n(35),
                i = n(9),
                o = n(90),
                u = n(1),
                b = n(85),
                f = n(59),
                s = n(82),
                O = n(84);
            function j(t) {
                var e = t.header$,
                    n = t.viewport$,
                    j = t.screen$;
                return Object(r.a)(
                    Object(a.a)(function (t) {
                        return j.pipe(
                            Object(a.a)(function (a) {
                                return a
                                    ? Object(u.B)(t, {
                                          header$: e,
                                          viewport$: n,
                                      }).pipe(
                                          Object(i.a)(function (t) {
                                              return {hidden: t.offset.y >= 10};
                                          }),
                                          Object(o.a)('hidden'),
                                          (function (t) {
                                              return Object(r.a)(
                                                  Object(f.b)(b.a),
                                                  Object(s.a)(function (e) {
                                                      var n = e.hidden;
                                                      !(function (t, e) {
                                                          t.setAttribute(
                                                              'data-md-state',
                                                              e ? 'hidden' : '',
                                                          );
                                                      })(t, n);
                                                  }),
                                                  Object(O.a)(function () {
                                                      !(function (t) {
                                                          t.removeAttribute(
                                                              'data-md-state',
                                                          );
                                                      })(t);
                                                  }),
                                              );
                                          })(t),
                                      )
                                    : Object(c.a)({hidden: !0});
                            }),
                        );
                    }),
                );
            }
        },
        function (t, e, n) {
            'use strict';
            n.d(e, 'a', function () {
                return u;
            });
            var r = n(47),
                c = n(41),
                a = n(35),
                i = n(9),
                o = n(30);
            function u(t) {
                var e = t.header$,
                    n = t.main$,
                    u = t.viewport$,
                    b = t.screen$;
                return Object(r.a)(
                    Object(a.a)(function (t) {
                        return b.pipe(
                            Object(a.a)(function (r) {
                                return r
                                    ? Object(o.watchSidebar)(t, {
                                          main$: n,
                                          viewport$: u,
                                      }).pipe(
                                          Object(o.applySidebar)(t, {
                                              header$: e,
                                          }),
                                          Object(i.a)(function (t) {
                                              return {sidebar: t};
                                          }),
                                      )
                                    : Object(c.a)({});
                            }),
                        );
                    }),
                );
            }
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (t, e, n) {
            'use strict';
            n.r(e),
                n.d(e, 'setScrollLock', function () {
                    return z;
                }),
                n.d(e, 'resetScrollLock', function () {
                    return I;
                }),
                n.d(e, 'initialize', function () {
                    return V;
                });
            var r = n(0),
                c = n(110),
                a = n(112),
                i = n(111),
                o = n(79),
                u = n(38),
                b = n(41),
                f = n(105),
                s = n(62),
                O = n(85),
                j = n(95),
                l = n(97),
                d = n(116),
                p = n(89),
                h = n(35),
                v = n(101),
                m = n(107),
                y = n(82),
                g = n(114),
                w = n(91),
                $ = n(59),
                x = n(99),
                k = n(9),
                S = n(117),
                C = n(1),
                A = n(7),
                T = n(15),
                _ = n(90);
            var E = n(115),
                L = n(103);
            var M = n(106);
            var H = n(109),
                R = n(96);
            function P() {
                return /(iPad|iPhone|iPod)/.test(navigator.userAgent);
            }
            var U = n(31),
                q = n(4);
            function N(t) {
                switch (
                    Object(r.h)(
                        t.match(/(git(?:hub|lab))/i) || [],
                        1,
                    )[0].toLowerCase()
                ) {
                    case 'github':
                        var e = Object(r.h)(
                            t.match(/^.+github\.com\/([^\/]+)\/?([^\/]+)/i),
                            3,
                        );
                        return (function (t, e) {
                            return Object(d.a)({
                                url:
                                    void 0 !== e
                                        ? 'https://api.github.com/repos/' +
                                          t +
                                          '/' +
                                          e
                                        : 'https://api.github.com/users/' + t,
                                responseType: 'json',
                            }).pipe(
                                Object(x.a)(function (t) {
                                    return 200 === t.status;
                                }),
                                Object(v.a)('response'),
                                Object(h.a)(function (t) {
                                    if (void 0 !== e) {
                                        var n = t.stargazers_count,
                                            r = t.forks_count;
                                        return Object(b.a)([
                                            Object(q.e)(n || 0) + ' Stars',
                                            Object(q.e)(r || 0) + ' Forks',
                                        ]);
                                    }
                                    var c = t.public_repos;
                                    return Object(b.a)([
                                        Object(q.e)(c || 0) + ' Repositories',
                                    ]);
                                }),
                            );
                        })(e[1], e[2]);
                    case 'gitlab':
                        var n = Object(r.h)(
                            t.match(/^.+?([^\/]*gitlab[^\/]+)\/(.+?)\/?$/i),
                            3,
                        );
                        return (function (t, e) {
                            return Object(d.a)({
                                url:
                                    'https://' +
                                    t +
                                    '/api/v4/projects/' +
                                    encodeURIComponent(e),
                                responseType: 'json',
                            }).pipe(
                                Object(x.a)(function (t) {
                                    return 200 === t.status;
                                }),
                                Object(v.a)('response'),
                                Object(k.a)(function (t) {
                                    var e = t.star_count,
                                        n = t.forks_count;
                                    return [
                                        Object(q.e)(e) + ' Stars',
                                        Object(q.e)(n) + ' Forks',
                                    ];
                                }),
                            );
                        })(n[1], n[2]);
                    default:
                        return f.a;
                }
            }
            function z(t, e) {
                t.setAttribute('data-md-state', 'lock'),
                    (t.style.top = '-' + e + 'px');
            }
            function I(t) {
                var e = -1 * parseInt(t.style.top, 10);
                t.removeAttribute('data-md-state'),
                    (t.style.top = ''),
                    e && window.scrollTo(0, e);
            }
            function V(t) {
                if (!Object(q.d)(t))
                    throw new SyntaxError(
                        'Invalid configuration: ' + JSON.stringify(t),
                    );
                var e = Object(C.q)(),
                    n = Object(C.v)(),
                    V = Object(C.w)(t.base, {location$: n}),
                    D = Object(C.x)(),
                    B = Object(C.A)(),
                    Y = Object(C.y)('(min-width: 960px)'),
                    J = Object(C.y)('(min-width: 1220px)');
                Object(A.setupComponents)(
                    [
                        'announce',
                        'container',
                        'header',
                        'header-title',
                        'hero',
                        'main',
                        'navigation',
                        'search',
                        'search-query',
                        'search-reset',
                        'search-result',
                        'skip',
                        'tabs',
                        'toc',
                    ],
                    {document$: e},
                );
                var W = Object(T.h)();
                !(function (t) {
                    var e = t.document$,
                        n = t.viewport$,
                        c = e.pipe(
                            Object(k.a)(function () {
                                return Object(C.e)('pre > code');
                            }),
                        ),
                        a = n.pipe(Object(_.a)('size'));
                    Object(s.a)([c, a]).subscribe(function (t) {
                        var e,
                            n,
                            c = Object(r.h)(t, 1)[0];
                        try {
                            for (
                                var a = Object(r.k)(c), i = a.next();
                                !i.done;
                                i = a.next()
                            ) {
                                var o = i.value;
                                o.scrollWidth > o.clientWidth
                                    ? o.setAttribute('tabindex', '0')
                                    : o.removeAttribute('tabindex');
                            }
                        } catch (t) {
                            e = {error: t};
                        } finally {
                            try {
                                i && !i.done && (n = a.return) && n.call(a);
                            } finally {
                                if (e) throw e.error;
                            }
                        }
                    });
                })({document$: e, viewport$: B}),
                    (function (t) {
                        var e = t.document$,
                            n = t.hash$,
                            c = e.pipe(
                                Object(k.a)(function () {
                                    return Object(C.e)('details');
                                }),
                            );
                        Object(l.a)(
                            Object(C.y)('print').pipe(Object(x.a)(E.a)),
                            Object(j.a)(window, 'beforeprint'),
                        )
                            .pipe(Object(L.a)(c))
                            .subscribe(function (t) {
                                var e, n;
                                try {
                                    for (
                                        var c = Object(r.k)(t), a = c.next();
                                        !a.done;
                                        a = c.next()
                                    ) {
                                        a.value.setAttribute('open', '');
                                    }
                                } catch (t) {
                                    e = {error: t};
                                } finally {
                                    try {
                                        a &&
                                            !a.done &&
                                            (n = c.return) &&
                                            n.call(c);
                                    } finally {
                                        if (e) throw e.error;
                                    }
                                }
                            }),
                            n
                                .pipe(
                                    Object(k.a)(function (t) {
                                        return Object(C.c)('[id="' + t + '"]');
                                    }),
                                    Object(x.a)(function (t) {
                                        return void 0 !== t;
                                    }),
                                    Object(y.a)(function (t) {
                                        var e = t.closest('details');
                                        e &&
                                            !e.open &&
                                            e.setAttribute('open', '');
                                    }),
                                )
                                .subscribe(function (t) {
                                    return t.scrollIntoView();
                                });
                    })({document$: e, hash$: D}),
                    {document$: e}.document$
                        .pipe(
                            Object(M.a)(1),
                            Object(w.a)(Object(A.useComponent)('container')),
                            Object(k.a)(function (t) {
                                var e = Object(r.h)(t, 2)[1];
                                return Object(C.e)('script', e);
                            }),
                        )
                        .subscribe(function (t) {
                            var e, n;
                            try {
                                for (
                                    var c = Object(r.k)(t), a = c.next();
                                    !a.done;
                                    a = c.next()
                                ) {
                                    var i = a.value;
                                    if (
                                        i.src ||
                                        /(^|\/javascript)$/i.test(i.type)
                                    ) {
                                        var o = Object(C.a)('script'),
                                            u = i.src ? 'src' : 'textContent';
                                        (o[u] = i[u]), Object(C.j)(i, o);
                                    }
                                }
                            } catch (t) {
                                e = {error: t};
                            } finally {
                                try {
                                    a && !a.done && (n = c.return) && n.call(c);
                                } finally {
                                    if (e) throw e.error;
                                }
                            }
                        }),
                    (function (t) {
                        t.document$
                            .pipe(
                                Object(k.a)(function () {
                                    return Object(C.d)('.md-source[href]');
                                }),
                                Object(h.a)(function (t) {
                                    var e = t.href;
                                    return Object(q.a)(
                                        '' + Object(q.c)(e),
                                        function () {
                                            return N(e);
                                        },
                                    );
                                }),
                                Object(m.a)(function () {
                                    return f.a;
                                }),
                            )
                            .subscribe(function (t) {
                                var e, n;
                                try {
                                    for (
                                        var c = Object(r.k)(
                                                Object(C.e)(
                                                    '.md-source__repository',
                                                ),
                                            ),
                                            a = c.next();
                                        !a.done;
                                        a = c.next()
                                    ) {
                                        var i = a.value;
                                        i.hasAttribute('data-md-state') ||
                                            (i.setAttribute(
                                                'data-md-state',
                                                'done',
                                            ),
                                            i.appendChild(Object(U.c)(t)));
                                    }
                                } catch (t) {
                                    e = {error: t};
                                } finally {
                                    try {
                                        a &&
                                            !a.done &&
                                            (n = c.return) &&
                                            n.call(c);
                                    } finally {
                                        if (e) throw e.error;
                                    }
                                }
                            });
                    })({document$: e}),
                    (function (t) {
                        var e = t.document$,
                            n = Object(C.a)('table');
                        e.pipe(
                            Object(k.a)(function () {
                                return Object(C.e)('table:not([class])');
                            }),
                        ).subscribe(function (t) {
                            var e, c;
                            try {
                                for (
                                    var a = Object(r.k)(t), i = a.next();
                                    !i.done;
                                    i = a.next()
                                ) {
                                    var o = i.value;
                                    Object(C.j)(o, n),
                                        Object(C.j)(n, Object(U.d)(o));
                                }
                            } catch (t) {
                                e = {error: t};
                            } finally {
                                try {
                                    i && !i.done && (c = a.return) && c.call(a);
                                } finally {
                                    if (e) throw e.error;
                                }
                            }
                        });
                    })({document$: e}),
                    (function (t) {
                        var e = t.document$.pipe(
                            Object(k.a)(function () {
                                return Object(C.e)('[data-md-scrollfix]');
                            }),
                            Object(p.a)(1),
                        );
                        e.subscribe(function (t) {
                            var e, n;
                            try {
                                for (
                                    var c = Object(r.k)(t), a = c.next();
                                    !a.done;
                                    a = c.next()
                                ) {
                                    a.value.removeAttribute(
                                        'data-md-scrollfix',
                                    );
                                }
                            } catch (t) {
                                e = {error: t};
                            } finally {
                                try {
                                    a && !a.done && (n = c.return) && n.call(c);
                                } finally {
                                    if (e) throw e.error;
                                }
                            }
                        }),
                            Object(H.a)(P, e, f.a)
                                .pipe(
                                    Object(h.a)(function (t) {
                                        return l.a.apply(
                                            void 0,
                                            Object(r.i)(
                                                t.map(function (t) {
                                                    return Object(j.a)(
                                                        t,
                                                        'touchstart',
                                                        {passive: !0},
                                                    ).pipe(Object(R.a)(t));
                                                }),
                                            ),
                                        );
                                    }),
                                )
                                .subscribe(function (t) {
                                    var e = t.scrollTop;
                                    0 === e
                                        ? (t.scrollTop = 1)
                                        : e + t.offsetHeight ===
                                              t.scrollHeight &&
                                          (t.scrollTop = e - 1);
                                });
                    })({document$: e});
                var K = Object(T.f)(),
                    Q = Object(T.e)({document$: e, dialog$: K}),
                    F = Object(A.useComponent)('header').pipe(
                        Object(A.mountHeader)({document$: e, viewport$: B}),
                        Object(p.a)(1),
                    ),
                    X = Object(A.useComponent)('main').pipe(
                        Object(A.mountMain)({header$: F, viewport$: B}),
                        Object(p.a)(1),
                    ),
                    Z = Object(A.useComponent)('navigation').pipe(
                        Object(A.mountNavigation)({
                            header$: F,
                            main$: X,
                            viewport$: B,
                            screen$: J,
                        }),
                        Object(p.a)(1),
                    ),
                    G = Object(A.useComponent)('toc').pipe(
                        Object(A.mountTableOfContents)({
                            header$: F,
                            main$: X,
                            viewport$: B,
                            tablet$: Y,
                        }),
                        Object(p.a)(1),
                    ),
                    tt = Object(A.useComponent)('tabs').pipe(
                        Object(A.mountTabs)({
                            header$: F,
                            viewport$: B,
                            screen$: J,
                        }),
                        Object(p.a)(1),
                    ),
                    et = Object(A.useComponent)('hero').pipe(
                        Object(A.mountHero)({header$: F, viewport$: B}),
                        Object(p.a)(1),
                    ),
                    nt = Object(o.a)(function () {
                        var e =
                                t.search && t.search.index
                                    ? t.search.index
                                    : void 0,
                            n =
                                void 0 !== e
                                    ? Object(u.a)(e)
                                    : V.pipe(
                                          Object(h.a)(function (t) {
                                              return Object(d.a)({
                                                  url:
                                                      t +
                                                      '/search/search_index.json',
                                                  responseType: 'json',
                                                  withCredentials: !0,
                                              }).pipe(Object(v.a)('response'));
                                          }),
                                      );
                        return Object(b.a)(
                            Object(T.i)(t.search.worker, {base$: V, index$: n}),
                        );
                    }).pipe(
                        Object(h.a)(function (e) {
                            var n = Object(A.useComponent)('search-query').pipe(
                                    Object(A.mountSearchQuery)(e, {
                                        transform: t.search.transform,
                                    }),
                                    Object(p.a)(1),
                                ),
                                r = Object(A.useComponent)('search-reset').pipe(
                                    Object(A.mountSearchReset)(),
                                    Object(p.a)(1),
                                ),
                                c = Object(A.useComponent)(
                                    'search-result',
                                ).pipe(
                                    Object(A.mountSearchResult)(e, {query$: n}),
                                    Object(p.a)(1),
                                );
                            return Object(A.useComponent)('search').pipe(
                                Object(A.mountSearch)(e, {
                                    query$: n,
                                    reset$: r,
                                    result$: c,
                                }),
                                Object(p.a)(1),
                            );
                        }),
                        Object(m.a)(function () {
                            return (
                                Object(A.useComponent)('search').subscribe(
                                    function (t) {
                                        return (t.hidden = !0);
                                    },
                                ),
                                f.a
                            );
                        }),
                    );
                D.pipe(
                    Object(y.a)(function () {
                        return Object(C.o)('search', !1);
                    }),
                    Object(g.a)(125),
                ).subscribe(function (t) {
                    return Object(C.n)('#' + t);
                }),
                    Object(s.a)([Object(C.z)('search'), Y])
                        .pipe(
                            Object(w.a)(B),
                            Object(h.a)(function (t) {
                                var n = Object(r.h)(t, 2),
                                    c = Object(r.h)(n[0], 2),
                                    a = c[0],
                                    i = c[1],
                                    o = n[1].offset.y,
                                    u = a && !i;
                                return e.pipe(
                                    Object(g.a)(u ? 400 : 100),
                                    Object($.b)(O.a),
                                    Object(y.a)(function (t) {
                                        var e = t.body;
                                        return u ? z(e, o) : I(e);
                                    }),
                                );
                            }),
                        )
                        .subscribe(),
                    Object(j.a)(document.body, 'click')
                        .pipe(
                            Object(x.a)(function (t) {
                                return !(t.metaKey || t.ctrlKey);
                            }),
                            Object(x.a)(function (t) {
                                if (t.target instanceof HTMLElement) {
                                    var e = t.target.closest('a');
                                    if (e && Object(C.h)(e)) return !0;
                                }
                                return !1;
                            }),
                        )
                        .subscribe(function () {
                            Object(C.o)('drawer', !1);
                        }),
                    t.features.includes('instant') &&
                        'file:' !== location.protocol &&
                        V.pipe(
                            Object(h.a)(function (t) {
                                return Object(d.a)({
                                    url: t + '/sitemap.xml',
                                    responseType: 'document',
                                    withCredentials: !0,
                                }).pipe(Object(v.a)('response'));
                            }),
                            Object(w.a)(V),
                            Object(k.a)(function (t) {
                                var e = Object(r.h)(t, 2),
                                    n = e[0],
                                    i = e[1],
                                    o = Object(C.e)('loc', n).map(function (t) {
                                        return t.textContent;
                                    });
                                if (o.length > 1) {
                                    var u = Object(r.h)(
                                            Object(c.a)(
                                                Object(a.a)('length'),
                                                o,
                                            ),
                                            2,
                                        ),
                                        b = u[0],
                                        f = u[1],
                                        s = 0;
                                    if (b === f) s = b.length;
                                    else
                                        for (; b.charAt(s) === f.charAt(s); )
                                            s++;
                                    for (var O = 0; O < o.length; O++)
                                        o[O] = o[O].replace(
                                            b.slice(0, s),
                                            i + '/',
                                        );
                                }
                                return o;
                            }),
                        ).subscribe(function (t) {
                            Object(T.g)(t, {
                                document$: e,
                                location$: n,
                                viewport$: B,
                            });
                        }),
                    W.pipe(
                        Object(x.a)(function (t) {
                            return 'global' === t.mode && 'Tab' === t.type;
                        }),
                        Object(S.a)(1),
                    ).subscribe(function () {
                        var t, e;
                        try {
                            for (
                                var n = Object(r.k)(Object(C.e)('.headerlink')),
                                    c = n.next();
                                !c.done;
                                c = n.next()
                            ) {
                                c.value.style.visibility = 'visible';
                            }
                        } catch (e) {
                            t = {error: e};
                        } finally {
                            try {
                                c && !c.done && (e = n.return) && e.call(n);
                            } finally {
                                if (t) throw t.error;
                            }
                        }
                    });
                var rt = {
                    document$: e,
                    location$: n,
                    viewport$: B,
                    header$: F,
                    hero$: et,
                    main$: X,
                    navigation$: Z,
                    search$: nt,
                    tabs$: tt,
                    toc$: G,
                    clipboard$: Q,
                    keyboard$: W,
                    dialog$: K,
                };
                return (
                    l.a.apply(void 0, Object(r.i)(Object(i.a)(rt))).subscribe(),
                    rt
                );
            }
            document.documentElement.classList.remove('no-js'),
                document.documentElement.classList.add('js'),
                navigator.userAgent.match(/(iPad|iPhone|iPod)/g) &&
                    document.documentElement.classList.add('ios');
        },
    ]),
);
//# sourceMappingURL=bundle.js.map
