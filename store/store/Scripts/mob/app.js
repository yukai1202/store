(function () { function n(n) { function t(t, r, e, u, i, o) { for (; i >= 0 && o > i; i += n) { var a = u ? u[i] : i; e = r(e, t[a], a, t) } return e } return function (r, e, u, i) { e = b(e, i, 4); var o = !k(r) && m.keys(r), a = (o || r).length, c = n > 0 ? 0 : a - 1; return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a) } } function t(n) { return function (t, r, e) { r = x(r, e); for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n) if (r(t[i], i, t)) return i; return -1 } } function r(n, t, r) { return function (e, u, i) { var o = 0, a = O(e); if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1; else if (r && i && a) return i = r(e, u), e[i] === u ? i : -1; if (u !== u) return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1; for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n) if (e[i] === u) return i; return -1 } } function e(n, t) { var r = I.length, e = n.constructor, u = m.isFunction(e) && e.prototype || a, i = "constructor"; for (m.has(n, i) && !m.contains(t, i) && t.push(i) ; r--;) i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i) } var u = this, i = u._, o = Array.prototype, a = Object.prototype, c = Function.prototype, f = o.push, l = o.slice, s = a.toString, p = a.hasOwnProperty, h = Array.isArray, v = Object.keys, g = c.bind, y = Object.create, d = function () { }, m = function (n) { return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n) }; "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3"; var b = function (n, t, r) { if (t === void 0) return n; switch (null == r ? 3 : r) { case 1: return function (r) { return n.call(t, r) }; case 2: return function (r, e) { return n.call(t, r, e) }; case 3: return function (r, e, u) { return n.call(t, r, e, u) }; case 4: return function (r, e, u, i) { return n.call(t, r, e, u, i) } } return function () { return n.apply(t, arguments) } }, x = function (n, t, r) { return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n) }; m.iteratee = function (n, t) { return x(n, t, 1 / 0) }; var _ = function (n, t) { return function (r) { var e = arguments.length; if (2 > e || null == r) return r; for (var u = 1; e > u; u++) for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) { var f = o[c]; t && r[f] !== void 0 || (r[f] = i[f]) } return r } }, j = function (n) { if (!m.isObject(n)) return {}; if (y) return y(n); d.prototype = n; var t = new d; return d.prototype = null, t }, w = function (n) { return function (t) { return null == t ? void 0 : t[n] } }, A = Math.pow(2, 53) - 1, O = w("length"), k = function (n) { var t = O(n); return "number" == typeof t && t >= 0 && A >= t }; m.each = m.forEach = function (n, t, r) { t = b(t, r); var e, u; if (k(n)) for (e = 0, u = n.length; u > e; e++) t(n[e], e, n); else { var i = m.keys(n); for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n) } return n }, m.map = m.collect = function (n, t, r) { t = x(t, r); for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) { var a = e ? e[o] : o; i[o] = t(n[a], a, n) } return i }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function (n, t, r) { var e; return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0 }, m.filter = m.select = function (n, t, r) { var e = []; return t = x(t, r), m.each(n, function (n, r, u) { t(n, r, u) && e.push(n) }), e }, m.reject = function (n, t, r) { return m.filter(n, m.negate(x(t)), r) }, m.every = m.all = function (n, t, r) { t = x(t, r); for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) { var o = e ? e[i] : i; if (!t(n[o], o, n)) return !1 } return !0 }, m.some = m.any = function (n, t, r) { t = x(t, r); for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) { var o = e ? e[i] : i; if (t(n[o], o, n)) return !0 } return !1 }, m.contains = m.includes = m.include = function (n, t, r, e) { return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0 }, m.invoke = function (n, t) { var r = l.call(arguments, 2), e = m.isFunction(t); return m.map(n, function (n) { var u = e ? t : n[t]; return null == u ? u : u.apply(n, r) }) }, m.pluck = function (n, t) { return m.map(n, m.property(t)) }, m.where = function (n, t) { return m.filter(n, m.matcher(t)) }, m.findWhere = function (n, t) { return m.find(n, m.matcher(t)) }, m.max = function (n, t, r) { var e, u, i = -1 / 0, o = -1 / 0; if (null == t && null != n) { n = k(n) ? n : m.values(n); for (var a = 0, c = n.length; c > a; a++) e = n[a], e > i && (i = e) } else t = x(t, r), m.each(n, function (n, r, e) { u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u) }); return i }, m.min = function (n, t, r) { var e, u, i = 1 / 0, o = 1 / 0; if (null == t && null != n) { n = k(n) ? n : m.values(n); for (var a = 0, c = n.length; c > a; a++) e = n[a], i > e && (i = e) } else t = x(t, r), m.each(n, function (n, r, e) { u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u) }); return i }, m.shuffle = function (n) { for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i]; return u }, m.sample = function (n, t, r) { return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t)) }, m.sortBy = function (n, t, r) { return t = x(t, r), m.pluck(m.map(n, function (n, r, e) { return { value: n, index: r, criteria: t(n, r, e) } }).sort(function (n, t) { var r = n.criteria, e = t.criteria; if (r !== e) { if (r > e || r === void 0) return 1; if (e > r || e === void 0) return -1 } return n.index - t.index }), "value") }; var F = function (n) { return function (t, r, e) { var u = {}; return r = x(r, e), m.each(t, function (e, i) { var o = r(e, i, t); n(u, e, o) }), u } }; m.groupBy = F(function (n, t, r) { m.has(n, r) ? n[r].push(t) : n[r] = [t] }), m.indexBy = F(function (n, t, r) { n[r] = t }), m.countBy = F(function (n, t, r) { m.has(n, r) ? n[r]++ : n[r] = 1 }), m.toArray = function (n) { return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : [] }, m.size = function (n) { return null == n ? 0 : k(n) ? n.length : m.keys(n).length }, m.partition = function (n, t, r) { t = x(t, r); var e = [], u = []; return m.each(n, function (n, r, i) { (t(n, r, i) ? e : u).push(n) }), [e, u] }, m.first = m.head = m.take = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t) }, m.initial = function (n, t, r) { return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t))) }, m.last = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t)) }, m.rest = m.tail = m.drop = function (n, t, r) { return l.call(n, null == t || r ? 1 : t) }, m.compact = function (n) { return m.filter(n, m.identity) }; var S = function (n, t, r, e) { for (var u = [], i = 0, o = e || 0, a = O(n) ; a > o; o++) { var c = n[o]; if (k(c) && (m.isArray(c) || m.isArguments(c))) { t || (c = S(c, t, r)); var f = 0, l = c.length; for (u.length += l; l > f;) u[i++] = c[f++] } else r || (u[i++] = c) } return u }; m.flatten = function (n, t) { return S(n, t, !1) }, m.without = function (n) { return m.difference(n, l.call(arguments, 1)) }, m.uniq = m.unique = function (n, t, r, e) { m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e)); for (var u = [], i = [], o = 0, a = O(n) ; a > o; o++) { var c = n[o], f = r ? r(c, o, n) : c; t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c) } return u }, m.union = function () { return m.uniq(S(arguments, !0, !0)) }, m.intersection = function (n) { for (var t = [], r = arguments.length, e = 0, u = O(n) ; u > e; e++) { var i = n[e]; if (!m.contains(t, i)) { for (var o = 1; r > o && m.contains(arguments[o], i) ; o++); o === r && t.push(i) } } return t }, m.difference = function (n) { var t = S(arguments, !0, !0, 1); return m.filter(n, function (n) { return !m.contains(t, n) }) }, m.zip = function () { return m.unzip(arguments) }, m.unzip = function (n) { for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++) r[e] = m.pluck(n, e); return r }, m.object = function (n, t) { for (var r = {}, e = 0, u = O(n) ; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1]; return r }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function (n, t, r, e) { r = x(r, e, 1); for (var u = r(t), i = 0, o = O(n) ; o > i;) { var a = Math.floor((i + o) / 2); r(n[a]) < u ? i = a + 1 : o = a } return i }, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function (n, t, r) { null == t && (t = n || 0, n = 0), r = r || 1; for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n; return u }; var E = function (n, t, r, e, u) { if (!(e instanceof t)) return n.apply(r, u); var i = j(n.prototype), o = n.apply(i, u); return m.isObject(o) ? o : i }; m.bind = function (n, t) { if (g && n.bind === g) return g.apply(n, l.call(arguments, 1)); if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function"); var r = l.call(arguments, 2), e = function () { return E(n, e, t, this, r.concat(l.call(arguments))) }; return e }, m.partial = function (n) { var t = l.call(arguments, 1), r = function () { for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++) i[o] = t[o] === m ? arguments[e++] : t[o]; for (; e < arguments.length;) i.push(arguments[e++]); return E(n, r, this, this, i) }; return r }, m.bindAll = function (n) { var t, r, e = arguments.length; if (1 >= e) throw new Error("bindAll must be passed function names"); for (t = 1; e > t; t++) r = arguments[t], n[r] = m.bind(n[r], n); return n }, m.memoize = function (n, t) { var r = function (e) { var u = r.cache, i = "" + (t ? t.apply(this, arguments) : e); return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i] }; return r.cache = {}, r }, m.delay = function (n, t) { var r = l.call(arguments, 2); return setTimeout(function () { return n.apply(null, r) }, t) }, m.defer = m.partial(m.delay, m, 1), m.throttle = function (n, t, r) { var e, u, i, o = null, a = 0; r || (r = {}); var c = function () { a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null) }; return function () { var f = m.now(); a || r.leading !== !1 || (a = f); var l = t - (f - a); return e = this, u = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i } }, m.debounce = function (n, t, r) { var e, u, i, o, a, c = function () { var f = m.now() - o; t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null))) }; return function () { i = this, u = arguments, o = m.now(); var f = r && !e; return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a } }, m.wrap = function (n, t) { return m.partial(t, n) }, m.negate = function (n) { return function () { return !n.apply(this, arguments) } }, m.compose = function () { var n = arguments, t = n.length - 1; return function () { for (var r = t, e = n[t].apply(this, arguments) ; r--;) e = n[r].call(this, e); return e } }, m.after = function (n, t) { return function () { return --n < 1 ? t.apply(this, arguments) : void 0 } }, m.before = function (n, t) { var r; return function () { return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r } }, m.once = m.partial(m.before, 2); var M = !{ toString: null }.propertyIsEnumerable("toString"), I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]; m.keys = function (n) { if (!m.isObject(n)) return []; if (v) return v(n); var t = []; for (var r in n) m.has(n, r) && t.push(r); return M && e(n, t), t }, m.allKeys = function (n) { if (!m.isObject(n)) return []; var t = []; for (var r in n) t.push(r); return M && e(n, t), t }, m.values = function (n) { for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]]; return e }, m.mapObject = function (n, t, r) { t = x(t, r); for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++) e = u[a], o[e] = t(n[e], e, n); return o }, m.pairs = function (n) { for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]]; return e }, m.invert = function (n) { for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e]; return t }, m.functions = m.methods = function (n) { var t = []; for (var r in n) m.isFunction(n[r]) && t.push(r); return t.sort() }, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function (n, t, r) { t = x(t, r); for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++) if (e = u[i], t(n[e], e, n)) return e }, m.pick = function (n, t, r) { var e, u, i = {}, o = n; if (null == o) return i; m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function (n, t, r) { return t in r }, o = Object(o)); for (var a = 0, c = u.length; c > a; a++) { var f = u[a], l = o[f]; e(l, f, o) && (i[f] = l) } return i }, m.omit = function (n, t, r) { if (m.isFunction(t)) t = m.negate(t); else { var e = m.map(S(arguments, !1, !1, 1), String); t = function (n, t) { return !m.contains(e, t) } } return m.pick(n, t, r) }, m.defaults = _(m.allKeys, !0), m.create = function (n, t) { var r = j(n); return t && m.extendOwn(r, t), r }, m.clone = function (n) { return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n }, m.tap = function (n, t) { return t(n), n }, m.isMatch = function (n, t) { var r = m.keys(t), e = r.length; if (null == n) return !e; for (var u = Object(n), i = 0; e > i; i++) { var o = r[i]; if (t[o] !== u[o] || !(o in u)) return !1 } return !0 }; var N = function (n, t, r, e) { if (n === t) return 0 !== n || 1 / n === 1 / t; if (null == n || null == t) return n === t; n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped); var u = s.call(n); if (u !== s.call(t)) return !1; switch (u) { case "[object RegExp]": case "[object String]": return "" + n == "" + t; case "[object Number]": return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t; case "[object Date]": case "[object Boolean]": return +n === +t } var i = "[object Array]" === u; if (!i) { if ("object" != typeof n || "object" != typeof t) return !1; var o = n.constructor, a = t.constructor; if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1 } r = r || [], e = e || []; for (var c = r.length; c--;) if (r[c] === n) return e[c] === t; if (r.push(n), e.push(t), i) { if (c = n.length, c !== t.length) return !1; for (; c--;) if (!N(n[c], t[c], r, e)) return !1 } else { var f, l = m.keys(n); if (c = l.length, m.keys(t).length !== c) return !1; for (; c--;) if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e)) return !1 } return r.pop(), e.pop(), !0 }; m.isEqual = function (n, t) { return N(n, t) }, m.isEmpty = function (n) { return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length }, m.isElement = function (n) { return !(!n || 1 !== n.nodeType) }, m.isArray = h || function (n) { return "[object Array]" === s.call(n) }, m.isObject = function (n) { var t = typeof n; return "function" === t || "object" === t && !!n }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (n) { m["is" + n] = function (t) { return s.call(t) === "[object " + n + "]" } }), m.isArguments(arguments) || (m.isArguments = function (n) { return m.has(n, "callee") }), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function (n) { return "function" == typeof n || !1 }), m.isFinite = function (n) { return isFinite(n) && !isNaN(parseFloat(n)) }, m.isNaN = function (n) { return m.isNumber(n) && n !== +n }, m.isBoolean = function (n) { return n === !0 || n === !1 || "[object Boolean]" === s.call(n) }, m.isNull = function (n) { return null === n }, m.isUndefined = function (n) { return n === void 0 }, m.has = function (n, t) { return null != n && p.call(n, t) }, m.noConflict = function () { return u._ = i, this }, m.identity = function (n) { return n }, m.constant = function (n) { return function () { return n } }, m.noop = function () { }, m.property = w, m.propertyOf = function (n) { return null == n ? function () { } : function (t) { return n[t] } }, m.matcher = m.matches = function (n) { return n = m.extendOwn({}, n), function (t) { return m.isMatch(t, n) } }, m.times = function (n, t, r) { var e = Array(Math.max(0, n)); t = b(t, r, 1); for (var u = 0; n > u; u++) e[u] = t(u); return e }, m.random = function (n, t) { return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1)) }, m.now = Date.now || function () { return (new Date).getTime() }; var B = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, T = m.invert(B), R = function (n) { var t = function (t) { return n[t] }, r = "(?:" + m.keys(n).join("|") + ")", e = RegExp(r), u = RegExp(r, "g"); return function (n) { return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n } }; m.escape = R(B), m.unescape = R(T), m.result = function (n, t, r) { var e = null == n ? void 0 : n[t]; return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e }; var q = 0; m.uniqueId = function (n) { var t = ++q + ""; return n ? n + t : t }, m.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var K = /(.)^/, z = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, D = /\\|'|\r|\n|\u2028|\u2029/g, L = function (n) { return "\\" + z[n] }; m.template = function (n, t, r) { !t && r && (t = r), t = m.defaults({}, t, m.templateSettings); var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"), u = 0, i = "__p+='"; n.replace(e, function (t, r, e, o, a) { return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n"; try { var o = new Function(t.variable || "obj", "_", i) } catch (a) { throw a.source = i, a } var c = function (n) { return o.call(this, n, m) }, f = t.variable || "obj"; return c.source = "function(" + f + "){\n" + i + "}", c }, m.chain = function (n) { var t = m(n); return t._chain = !0, t }; var P = function (n, t) { return n._chain ? m(t).chain() : t }; m.mixin = function (n) { m.each(m.functions(n), function (t) { var r = m[t] = n[t]; m.prototype[t] = function () { var n = [this._wrapped]; return f.apply(n, arguments), P(this, r.apply(m, n)) } }) }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) { var t = o[n]; m.prototype[n] = function () { var r = this._wrapped; return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r) } }), m.each(["concat", "join", "slice"], function (n) { var t = o[n]; m.prototype[n] = function () { return P(this, t.apply(this._wrapped, arguments)) } }), m.prototype.value = function () { return this._wrapped }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function () { return "" + this._wrapped }, "function" == typeof define && define.amd && define("underscore", [], function () { return m }) }).call(this);
(function (t) { var e = typeof self == "object" && self.self == self && self || typeof global == "object" && global.global == global && global; if (typeof define === "function" && define.amd) { define(["underscore", "jquery", "exports"], function (i, r, n) { e.Backbone = t(e, n, i, r) }) } else if (typeof exports !== "undefined") { var i = require("underscore"), r; try { r = require("jquery") } catch (n) { } t(e, exports, i, r) } else { e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$) } })(function (t, e, i, r) { var n = t.Backbone; var s = Array.prototype.slice; e.VERSION = "1.2.3"; e.$ = r; e.noConflict = function () { t.Backbone = n; return this }; e.emulateHTTP = false; e.emulateJSON = false; var a = function (t, e, r) { switch (t) { case 1: return function () { return i[e](this[r]) }; case 2: return function (t) { return i[e](this[r], t) }; case 3: return function (t, n) { return i[e](this[r], h(t, this), n) }; case 4: return function (t, n, s) { return i[e](this[r], h(t, this), n, s) }; default: return function () { var t = s.call(arguments); t.unshift(this[r]); return i[e].apply(i, t) } } }; var o = function (t, e, r) { i.each(e, function (e, n) { if (i[n]) t.prototype[n] = a(e, n, r) }) }; var h = function (t, e) { if (i.isFunction(t)) return t; if (i.isObject(t) && !e._isModel(t)) return u(t); if (i.isString(t)) return function (e) { return e.get(t) }; return t }; var u = function (t) { var e = i.matches(t); return function (t) { return e(t.attributes) } }; var l = e.Events = {}; var c = /\s+/; var f = function (t, e, r, n, s) { var a = 0, o; if (r && typeof r === "object") { if (n !== void 0 && "context" in s && s.context === void 0) s.context = n; for (o = i.keys(r) ; a < o.length; a++) { e = f(t, e, o[a], r[o[a]], s) } } else if (r && c.test(r)) { for (o = r.split(c) ; a < o.length; a++) { e = t(e, o[a], n, s) } } else { e = t(e, r, n, s) } return e }; l.on = function (t, e, i) { return d(this, t, e, i) }; var d = function (t, e, i, r, n) { t._events = f(v, t._events || {}, e, i, { context: r, ctx: t, listening: n }); if (n) { var s = t._listeners || (t._listeners = {}); s[n.id] = n } return t }; l.listenTo = function (t, e, r) { if (!t) return this; var n = t._listenId || (t._listenId = i.uniqueId("l")); var s = this._listeningTo || (this._listeningTo = {}); var a = s[n]; if (!a) { var o = this._listenId || (this._listenId = i.uniqueId("l")); a = s[n] = { obj: t, objId: n, id: o, listeningTo: s, count: 0 } } d(t, e, r, this, a); return this }; var v = function (t, e, i, r) { if (i) { var n = t[e] || (t[e] = []); var s = r.context, a = r.ctx, o = r.listening; if (o) o.count++; n.push({ callback: i, context: s, ctx: s || a, listening: o }) } return t }; l.off = function (t, e, i) { if (!this._events) return this; this._events = f(g, this._events, t, e, { context: i, listeners: this._listeners }); return this }; l.stopListening = function (t, e, r) { var n = this._listeningTo; if (!n) return this; var s = t ? [t._listenId] : i.keys(n); for (var a = 0; a < s.length; a++) { var o = n[s[a]]; if (!o) break; o.obj.off(e, r, this) } if (i.isEmpty(n)) this._listeningTo = void 0; return this }; var g = function (t, e, r, n) { if (!t) return; var s = 0, a; var o = n.context, h = n.listeners; if (!e && !r && !o) { var u = i.keys(h); for (; s < u.length; s++) { a = h[u[s]]; delete h[a.id]; delete a.listeningTo[a.objId] } return } var l = e ? [e] : i.keys(t); for (; s < l.length; s++) { e = l[s]; var c = t[e]; if (!c) break; var f = []; for (var d = 0; d < c.length; d++) { var v = c[d]; if (r && r !== v.callback && r !== v.callback._callback || o && o !== v.context) { f.push(v) } else { a = v.listening; if (a && --a.count === 0) { delete h[a.id]; delete a.listeningTo[a.objId] } } } if (f.length) { t[e] = f } else { delete t[e] } } if (i.size(t)) return t }; l.once = function (t, e, r) { var n = f(p, {}, t, e, i.bind(this.off, this)); return this.on(n, void 0, r) }; l.listenToOnce = function (t, e, r) { var n = f(p, {}, e, r, i.bind(this.stopListening, this, t)); return this.listenTo(t, n) }; var p = function (t, e, r, n) { if (r) { var s = t[e] = i.once(function () { n(e, s); r.apply(this, arguments) }); s._callback = r } return t }; l.trigger = function (t) { if (!this._events) return this; var e = Math.max(0, arguments.length - 1); var i = Array(e); for (var r = 0; r < e; r++) i[r] = arguments[r + 1]; f(m, this._events, t, void 0, i); return this }; var m = function (t, e, i, r) { if (t) { var n = t[e]; var s = t.all; if (n && s) s = s.slice(); if (n) _(n, r); if (s) _(s, [e].concat(r)) } return t }; var _ = function (t, e) { var i, r = -1, n = t.length, s = e[0], a = e[1], o = e[2]; switch (e.length) { case 0: while (++r < n) (i = t[r]).callback.call(i.ctx); return; case 1: while (++r < n) (i = t[r]).callback.call(i.ctx, s); return; case 2: while (++r < n) (i = t[r]).callback.call(i.ctx, s, a); return; case 3: while (++r < n) (i = t[r]).callback.call(i.ctx, s, a, o); return; default: while (++r < n) (i = t[r]).callback.apply(i.ctx, e); return } }; l.bind = l.on; l.unbind = l.off; i.extend(e, l); var y = e.Model = function (t, e) { var r = t || {}; e || (e = {}); this.cid = i.uniqueId(this.cidPrefix); this.attributes = {}; if (e.collection) this.collection = e.collection; if (e.parse) r = this.parse(r, e) || {}; r = i.defaults({}, r, i.result(this, "defaults")); this.set(r, e); this.changed = {}; this.initialize.apply(this, arguments) }; i.extend(y.prototype, l, { changed: null, validationError: null, idAttribute: "id", cidPrefix: "c", initialize: function () { }, toJSON: function (t) { return i.clone(this.attributes) }, sync: function () { return e.sync.apply(this, arguments) }, get: function (t) { return this.attributes[t] }, escape: function (t) { return i.escape(this.get(t)) }, has: function (t) { return this.get(t) != null }, matches: function (t) { return !!i.iteratee(t, this)(this.attributes) }, set: function (t, e, r) { if (t == null) return this; var n; if (typeof t === "object") { n = t; r = e } else { (n = {})[t] = e } r || (r = {}); if (!this._validate(n, r)) return false; var s = r.unset; var a = r.silent; var o = []; var h = this._changing; this._changing = true; if (!h) { this._previousAttributes = i.clone(this.attributes); this.changed = {} } var u = this.attributes; var l = this.changed; var c = this._previousAttributes; for (var f in n) { e = n[f]; if (!i.isEqual(u[f], e)) o.push(f); if (!i.isEqual(c[f], e)) { l[f] = e } else { delete l[f] } s ? delete u[f] : u[f] = e } this.id = this.get(this.idAttribute); if (!a) { if (o.length) this._pending = r; for (var d = 0; d < o.length; d++) { this.trigger("change:" + o[d], this, u[o[d]], r) } } if (h) return this; if (!a) { while (this._pending) { r = this._pending; this._pending = false; this.trigger("change", this, r) } } this._pending = false; this._changing = false; return this }, unset: function (t, e) { return this.set(t, void 0, i.extend({}, e, { unset: true })) }, clear: function (t) { var e = {}; for (var r in this.attributes) e[r] = void 0; return this.set(e, i.extend({}, t, { unset: true })) }, hasChanged: function (t) { if (t == null) return !i.isEmpty(this.changed); return i.has(this.changed, t) }, changedAttributes: function (t) { if (!t) return this.hasChanged() ? i.clone(this.changed) : false; var e = this._changing ? this._previousAttributes : this.attributes; var r = {}; for (var n in t) { var s = t[n]; if (i.isEqual(e[n], s)) continue; r[n] = s } return i.size(r) ? r : false }, previous: function (t) { if (t == null || !this._previousAttributes) return null; return this._previousAttributes[t] }, previousAttributes: function () { return i.clone(this._previousAttributes) }, fetch: function (t) { t = i.extend({ parse: true }, t); var e = this; var r = t.success; t.success = function (i) { var n = t.parse ? e.parse(i, t) : i; if (!e.set(n, t)) return false; if (r) r.call(t.context, e, i, t); e.trigger("sync", e, i, t) }; z(this, t); return this.sync("read", this, t) }, save: function (t, e, r) { var n; if (t == null || typeof t === "object") { n = t; r = e } else { (n = {})[t] = e } r = i.extend({ validate: true, parse: true }, r); var s = r.wait; if (n && !s) { if (!this.set(n, r)) return false } else { if (!this._validate(n, r)) return false } var a = this; var o = r.success; var h = this.attributes; r.success = function (t) { a.attributes = h; var e = r.parse ? a.parse(t, r) : t; if (s) e = i.extend({}, n, e); if (e && !a.set(e, r)) return false; if (o) o.call(r.context, a, t, r); a.trigger("sync", a, t, r) }; z(this, r); if (n && s) this.attributes = i.extend({}, h, n); var u = this.isNew() ? "create" : r.patch ? "patch" : "update"; if (u === "patch" && !r.attrs) r.attrs = n; var l = this.sync(u, this, r); this.attributes = h; return l }, destroy: function (t) { t = t ? i.clone(t) : {}; var e = this; var r = t.success; var n = t.wait; var s = function () { e.stopListening(); e.trigger("destroy", e, e.collection, t) }; t.success = function (i) { if (n) s(); if (r) r.call(t.context, e, i, t); if (!e.isNew()) e.trigger("sync", e, i, t) }; var a = false; if (this.isNew()) { i.defer(t.success) } else { z(this, t); a = this.sync("delete", this, t) } if (!n) s(); return a }, url: function () { var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || F(); if (this.isNew()) return t; var e = this.get(this.idAttribute); return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e) }, parse: function (t, e) { return t }, clone: function () { return new this.constructor(this.attributes) }, isNew: function () { return !this.has(this.idAttribute) }, isValid: function (t) { return this._validate({}, i.defaults({ validate: true }, t)) }, _validate: function (t, e) { if (!e.validate || !this.validate) return true; t = i.extend({}, this.attributes, t); var r = this.validationError = this.validate(t, e) || null; if (!r) return true; this.trigger("invalid", this, r, i.extend(e, { validationError: r })); return false } }); var b = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 }; o(y, b, "attributes"); var x = e.Collection = function (t, e) { e || (e = {}); if (e.model) this.model = e.model; if (e.comparator !== void 0) this.comparator = e.comparator; this._reset(); this.initialize.apply(this, arguments); if (t) this.reset(t, i.extend({ silent: true }, e)) }; var w = { add: true, remove: true, merge: true }; var E = { add: true, remove: false }; var k = function (t, e, i) { i = Math.min(Math.max(i, 0), t.length); var r = Array(t.length - i); var n = e.length; for (var s = 0; s < r.length; s++) r[s] = t[s + i]; for (s = 0; s < n; s++) t[s + i] = e[s]; for (s = 0; s < r.length; s++) t[s + n + i] = r[s] }; i.extend(x.prototype, l, { model: y, initialize: function () { }, toJSON: function (t) { return this.map(function (e) { return e.toJSON(t) }) }, sync: function () { return e.sync.apply(this, arguments) }, add: function (t, e) { return this.set(t, i.extend({ merge: false }, e, E)) }, remove: function (t, e) { e = i.extend({}, e); var r = !i.isArray(t); t = r ? [t] : i.clone(t); var n = this._removeModels(t, e); if (!e.silent && n) this.trigger("update", this, e); return r ? n[0] : n }, set: function (t, e) { if (t == null) return; e = i.defaults({}, e, w); if (e.parse && !this._isModel(t)) t = this.parse(t, e); var r = !i.isArray(t); t = r ? [t] : t.slice(); var n = e.at; if (n != null) n = +n; if (n < 0) n += this.length + 1; var s = []; var a = []; var o = []; var h = {}; var u = e.add; var l = e.merge; var c = e.remove; var f = false; var d = this.comparator && n == null && e.sort !== false; var v = i.isString(this.comparator) ? this.comparator : null; var g; for (var p = 0; p < t.length; p++) { g = t[p]; var m = this.get(g); if (m) { if (l && g !== m) { var _ = this._isModel(g) ? g.attributes : g; if (e.parse) _ = m.parse(_, e); m.set(_, e); if (d && !f) f = m.hasChanged(v) } if (!h[m.cid]) { h[m.cid] = true; s.push(m) } t[p] = m } else if (u) { g = t[p] = this._prepareModel(g, e); if (g) { a.push(g); this._addReference(g, e); h[g.cid] = true; s.push(g) } } } if (c) { for (p = 0; p < this.length; p++) { g = this.models[p]; if (!h[g.cid]) o.push(g) } if (o.length) this._removeModels(o, e) } var y = false; var b = !d && u && c; if (s.length && b) { y = this.length != s.length || i.some(this.models, function (t, e) { return t !== s[e] }); this.models.length = 0; k(this.models, s, 0); this.length = this.models.length } else if (a.length) { if (d) f = true; k(this.models, a, n == null ? this.length : n); this.length = this.models.length } if (f) this.sort({ silent: true }); if (!e.silent) { for (p = 0; p < a.length; p++) { if (n != null) e.index = n + p; g = a[p]; g.trigger("add", g, this, e) } if (f || y) this.trigger("sort", this, e); if (a.length || o.length) this.trigger("update", this, e) } return r ? t[0] : t }, reset: function (t, e) { e = e ? i.clone(e) : {}; for (var r = 0; r < this.models.length; r++) { this._removeReference(this.models[r], e) } e.previousModels = this.models; this._reset(); t = this.add(t, i.extend({ silent: true }, e)); if (!e.silent) this.trigger("reset", this, e); return t }, push: function (t, e) { return this.add(t, i.extend({ at: this.length }, e)) }, pop: function (t) { var e = this.at(this.length - 1); return this.remove(e, t) }, unshift: function (t, e) { return this.add(t, i.extend({ at: 0 }, e)) }, shift: function (t) { var e = this.at(0); return this.remove(e, t) }, slice: function () { return s.apply(this.models, arguments) }, get: function (t) { if (t == null) return void 0; var e = this.modelId(this._isModel(t) ? t.attributes : t); return this._byId[t] || this._byId[e] || this._byId[t.cid] }, at: function (t) { if (t < 0) t += this.length; return this.models[t] }, where: function (t, e) { return this[e ? "find" : "filter"](t) }, findWhere: function (t) { return this.where(t, true) }, sort: function (t) { var e = this.comparator; if (!e) throw new Error("Cannot sort a set without a comparator"); t || (t = {}); var r = e.length; if (i.isFunction(e)) e = i.bind(e, this); if (r === 1 || i.isString(e)) { this.models = this.sortBy(e) } else { this.models.sort(e) } if (!t.silent) this.trigger("sort", this, t); return this }, pluck: function (t) { return i.invoke(this.models, "get", t) }, fetch: function (t) { t = i.extend({ parse: true }, t); var e = t.success; var r = this; t.success = function (i) { var n = t.reset ? "reset" : "set"; r[n](i, t); if (e) e.call(t.context, r, i, t); r.trigger("sync", r, i, t) }; z(this, t); return this.sync("read", this, t) }, create: function (t, e) { e = e ? i.clone(e) : {}; var r = e.wait; t = this._prepareModel(t, e); if (!t) return false; if (!r) this.add(t, e); var n = this; var s = e.success; e.success = function (t, e, i) { if (r) n.add(t, i); if (s) s.call(i.context, t, e, i) }; t.save(null, e); return t }, parse: function (t, e) { return t }, clone: function () { return new this.constructor(this.models, { model: this.model, comparator: this.comparator }) }, modelId: function (t) { return t[this.model.prototype.idAttribute || "id"] }, _reset: function () { this.length = 0; this.models = []; this._byId = {} }, _prepareModel: function (t, e) { if (this._isModel(t)) { if (!t.collection) t.collection = this; return t } e = e ? i.clone(e) : {}; e.collection = this; var r = new this.model(t, e); if (!r.validationError) return r; this.trigger("invalid", this, r.validationError, e); return false }, _removeModels: function (t, e) { var i = []; for (var r = 0; r < t.length; r++) { var n = this.get(t[r]); if (!n) continue; var s = this.indexOf(n); this.models.splice(s, 1); this.length--; if (!e.silent) { e.index = s; n.trigger("remove", n, this, e) } i.push(n); this._removeReference(n, e) } return i.length ? i : false }, _isModel: function (t) { return t instanceof y }, _addReference: function (t, e) { this._byId[t.cid] = t; var i = this.modelId(t.attributes); if (i != null) this._byId[i] = t; t.on("all", this._onModelEvent, this) }, _removeReference: function (t, e) { delete this._byId[t.cid]; var i = this.modelId(t.attributes); if (i != null) delete this._byId[i]; if (this === t.collection) delete t.collection; t.off("all", this._onModelEvent, this) }, _onModelEvent: function (t, e, i, r) { if ((t === "add" || t === "remove") && i !== this) return; if (t === "destroy") this.remove(e, r); if (t === "change") { var n = this.modelId(e.previousAttributes()); var s = this.modelId(e.attributes); if (n !== s) { if (n != null) delete this._byId[n]; if (s != null) this._byId[s] = e } } this.trigger.apply(this, arguments) } }); var S = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4, foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3, select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3, contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3, head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3, without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3, isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3, sortBy: 3, indexBy: 3 }; o(x, S, "models"); var I = e.View = function (t) { this.cid = i.uniqueId("view"); i.extend(this, i.pick(t, P)); this._ensureElement(); this.initialize.apply(this, arguments) }; var T = /^(\S+)\s*(.*)$/; var P = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"]; i.extend(I.prototype, l, { tagName: "div", $: function (t) { return this.$el.find(t) }, initialize: function () { }, render: function () { return this }, remove: function () { this._removeElement(); this.stopListening(); return this }, _removeElement: function () { this.$el.remove() }, setElement: function (t) { this.undelegateEvents(); this._setElement(t); this.delegateEvents(); return this }, _setElement: function (t) { this.$el = t instanceof e.$ ? t : e.$(t); this.el = this.$el[0] }, delegateEvents: function (t) { t || (t = i.result(this, "events")); if (!t) return this; this.undelegateEvents(); for (var e in t) { var r = t[e]; if (!i.isFunction(r)) r = this[r]; if (!r) continue; var n = e.match(T); this.delegate(n[1], n[2], i.bind(r, this)) } return this }, delegate: function (t, e, i) { this.$el.on(t + ".delegateEvents" + this.cid, e, i); return this }, undelegateEvents: function () { if (this.$el) this.$el.off(".delegateEvents" + this.cid); return this }, undelegate: function (t, e, i) { this.$el.off(t + ".delegateEvents" + this.cid, e, i); return this }, _createElement: function (t) { return document.createElement(t) }, _ensureElement: function () { if (!this.el) { var t = i.extend({}, i.result(this, "attributes")); if (this.id) t.id = i.result(this, "id"); if (this.className) t["class"] = i.result(this, "className"); this.setElement(this._createElement(i.result(this, "tagName"))); this._setAttributes(t) } else { this.setElement(i.result(this, "el")) } }, _setAttributes: function (t) { this.$el.attr(t) } }); e.sync = function (t, r, n) { var s = H[t]; i.defaults(n || (n = {}), { emulateHTTP: e.emulateHTTP, emulateJSON: e.emulateJSON }); var a = { type: s, dataType: "json" }; if (!n.url) { a.url = i.result(r, "url") || F() } if (n.data == null && r && (t === "create" || t === "update" || t === "patch")) { a.contentType = "application/json"; a.data = JSON.stringify(n.attrs || r.toJSON(n)) } if (n.emulateJSON) { a.contentType = "application/x-www-form-urlencoded"; a.data = a.data ? { model: a.data } : {} } if (n.emulateHTTP && (s === "PUT" || s === "DELETE" || s === "PATCH")) { a.type = "POST"; if (n.emulateJSON) a.data._method = s; var o = n.beforeSend; n.beforeSend = function (t) { t.setRequestHeader("X-HTTP-Method-Override", s); if (o) return o.apply(this, arguments) } } if (a.type !== "GET" && !n.emulateJSON) { a.processData = false } var h = n.error; n.error = function (t, e, i) { n.textStatus = e; n.errorThrown = i; if (h) h.call(n.context, t, e, i) }; var u = n.xhr = e.ajax(i.extend(a, n)); r.trigger("request", r, u, n); return u }; var H = { create: "POST", update: "PUT", patch: "PATCH", "delete": "DELETE", read: "GET" }; e.ajax = function () { return e.$.ajax.apply(e.$, arguments) }; var $ = e.Router = function (t) { t || (t = {}); if (t.routes) this.routes = t.routes; this._bindRoutes(); this.initialize.apply(this, arguments) }; var A = /\((.*?)\)/g; var C = /(\(\?)?:\w+/g; var R = /\*\w+/g; var j = /[\-{}\[\]+?.,\\\^$|#\s]/g; i.extend($.prototype, l, { initialize: function () { }, route: function (t, r, n) { if (!i.isRegExp(t)) t = this._routeToRegExp(t); if (i.isFunction(r)) { n = r; r = "" } if (!n) n = this[r]; var s = this; e.history.route(t, function (i) { var a = s._extractParameters(t, i); if (s.execute(n, a, r) !== false) { s.trigger.apply(s, ["route:" + r].concat(a)); s.trigger("route", r, a); e.history.trigger("route", s, r, a) } }); return this }, execute: function (t, e, i) { if (t) t.apply(this, e) }, navigate: function (t, i) { e.history.navigate(t, i); return this }, _bindRoutes: function () { if (!this.routes) return; this.routes = i.result(this, "routes"); var t, e = i.keys(this.routes); while ((t = e.pop()) != null) { this.route(t, this.routes[t]) } }, _routeToRegExp: function (t) { t = t.replace(j, "\\$&").replace(A, "(?:$1)?").replace(C, function (t, e) { return e ? t : "([^/?]+)" }).replace(R, "([^?]*?)"); return new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$") }, _extractParameters: function (t, e) { var r = t.exec(e).slice(1); return i.map(r, function (t, e) { if (e === r.length - 1) return t || null; return t ? decodeURIComponent(t) : null }) } }); var M = e.History = function () { this.handlers = []; this.checkUrl = i.bind(this.checkUrl, this); if (typeof window !== "undefined") { this.location = window.location; this.history = window.history } }; var N = /^[#\/]|\s+$/g; var O = /^\/+|\/+$/g; var U = /#.*$/; M.started = false; i.extend(M.prototype, l, { interval: 50, atRoot: function () { var t = this.location.pathname.replace(/[^\/]$/, "$&/"); return t === this.root && !this.getSearch() }, matchRoot: function () { var t = this.decodeFragment(this.location.pathname); var e = t.slice(0, this.root.length - 1) + "/"; return e === this.root }, decodeFragment: function (t) { return decodeURI(t.replace(/%25/g, "%2525")) }, getSearch: function () { var t = this.location.href.replace(/#.*/, "").match(/\?.+/); return t ? t[0] : "" }, getHash: function (t) { var e = (t || this).location.href.match(/#(.*)$/); return e ? e[1] : "" }, getPath: function () { var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1); return t.charAt(0) === "/" ? t.slice(1) : t }, getFragment: function (t) { if (t == null) { if (this._usePushState || !this._wantsHashChange) { t = this.getPath() } else { t = this.getHash() } } return t.replace(N, "") }, start: function (t) { if (M.started) throw new Error("Backbone.history has already been started"); M.started = true; this.options = i.extend({ root: "/" }, this.options, t); this.root = this.options.root; this._wantsHashChange = this.options.hashChange !== false; this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7); this._useHashChange = this._wantsHashChange && this._hasHashChange; this._wantsPushState = !!this.options.pushState; this._hasPushState = !!(this.history && this.history.pushState); this._usePushState = this._wantsPushState && this._hasPushState; this.fragment = this.getFragment(); this.root = ("/" + this.root + "/").replace(O, "/"); if (this._wantsHashChange && this._wantsPushState) { if (!this._hasPushState && !this.atRoot()) { var e = this.root.slice(0, -1) || "/"; this.location.replace(e + "#" + this.getPath()); return true } else if (this._hasPushState && this.atRoot()) { this.navigate(this.getHash(), { replace: true }) } } if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) { this.iframe = document.createElement("iframe"); this.iframe.src = "javascript:0"; this.iframe.style.display = "none"; this.iframe.tabIndex = -1; var r = document.body; var n = r.insertBefore(this.iframe, r.firstChild).contentWindow; n.document.open(); n.document.close(); n.location.hash = "#" + this.fragment } var s = window.addEventListener || function (t, e) { return attachEvent("on" + t, e) }; if (this._usePushState) { s("popstate", this.checkUrl, false) } else if (this._useHashChange && !this.iframe) { s("hashchange", this.checkUrl, false) } else if (this._wantsHashChange) { this._checkUrlInterval = setInterval(this.checkUrl, this.interval) } if (!this.options.silent) return this.loadUrl() }, stop: function () { var t = window.removeEventListener || function (t, e) { return detachEvent("on" + t, e) }; if (this._usePushState) { t("popstate", this.checkUrl, false) } else if (this._useHashChange && !this.iframe) { t("hashchange", this.checkUrl, false) } if (this.iframe) { document.body.removeChild(this.iframe); this.iframe = null } if (this._checkUrlInterval) clearInterval(this._checkUrlInterval); M.started = false }, route: function (t, e) { this.handlers.unshift({ route: t, callback: e }) }, checkUrl: function (t) { var e = this.getFragment(); if (e === this.fragment && this.iframe) { e = this.getHash(this.iframe.contentWindow) } if (e === this.fragment) return false; if (this.iframe) this.navigate(e); this.loadUrl() }, loadUrl: function (t) { if (!this.matchRoot()) return false; t = this.fragment = this.getFragment(t); return i.some(this.handlers, function (e) { if (e.route.test(t)) { e.callback(t); return true } }) }, navigate: function (t, e) { if (!M.started) return false; if (!e || e === true) e = { trigger: !!e }; t = this.getFragment(t || ""); var i = this.root; if (t === "" || t.charAt(0) === "?") { i = i.slice(0, -1) || "/" } var r = i + t; t = this.decodeFragment(t.replace(U, "")); if (this.fragment === t) return; this.fragment = t; if (this._usePushState) { this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, r) } else if (this._wantsHashChange) { this._updateHash(this.location, t, e.replace); if (this.iframe && t !== this.getHash(this.iframe.contentWindow)) { var n = this.iframe.contentWindow; if (!e.replace) { n.document.open(); n.document.close() } this._updateHash(n.location, t, e.replace) } } else { return this.location.assign(r) } if (e.trigger) return this.loadUrl(t) }, _updateHash: function (t, e, i) { if (i) { var r = t.href.replace(/(javascript:|#).*$/, ""); t.replace(r + "#" + e) } else { t.hash = "#" + e } } }); e.history = new M; var q = function (t, e) { var r = this; var n; if (t && i.has(t, "constructor")) { n = t.constructor } else { n = function () { return r.apply(this, arguments) } } i.extend(n, r, e); var s = function () { this.constructor = n }; s.prototype = r.prototype; n.prototype = new s; if (t) i.extend(n.prototype, t); n.__super__ = r.prototype; return n }; y.extend = x.extend = $.extend = I.extend = M.extend = q; var F = function () { throw new Error('A "url" property or function must be specified') }; var z = function (t, e) { var i = e.error; e.error = function (r) { if (i) i.call(e.context, t, r, e); t.trigger("error", t, r, e) } }; return e });

(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ? 
			'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	// This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();

function IScroll (el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS 

		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

	// Some defaults	
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.1.3',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);

		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
			if ( e.button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this._transitionTime();

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */

		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;
		}

/* REPLACE END: _move */

	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */

		this.scrollerWidth	= this.scroller.offsetWidth;
		this.scrollerHeight	= this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;

		if ( !time || (this.options.useTransition && easing.style) ) {
			this._transitionTimingFunction(easing.style);
			this._transitionTime(time);
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		time = time || 0;

		this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},

	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this.indicators.push( new Indicator(this, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			for ( var i = that.indicators.length; i--; ) {
				fn.call(that.indicators[i]);
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();
		e.stopPropagation();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			that._execEvent('scrollEnd');
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			if (e.deltaMode === 1) {
				wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
				wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
			} else {
				wheelDeltaX = -e.deltaX;
				wheelDeltaY = -e.deltaY;
			}
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this.maxScrollX);
					y = Math.max(-el[i].offsetTop, this.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);

// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));	
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);

(function (root, factory) {
    if (typeof exports === 'object' && typeof require === 'function') {
        module.exports = factory(require("backbone"));
    } else if (typeof define === "function" && define.amd) {

        define(["backbone"], function (Backbone) {

            return factory(Backbone || root.Backbone);
        });
    } else {
        factory(Backbone);
    }
}(this, function (Backbone) {

    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };


    function guid() {
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };

    function isObject(item) {
        return item === Object(item);
    }

    function contains(array, item) {
        var i = array.length;
        while (i--) if (array[i] === item) return true;
        return false;
    }

    function extend(obj, props) {
        for (var key in props) obj[key] = props[key]
        return obj;
    }

    function result(object, property) {
        if (object == null) return void 0;
        var value = object[property];
        return (typeof value === 'function') ? object[property]() : value;
    }

    // Our Store is represented by a single JS object in *localStorage*. Create it
    // with a meaningful name, like the name you'd give a table.
    // window.Store is deprectated, use Backbone.LocalStorage instead
    Backbone.LocalStorage = window.Store = function (name, serializer) {
        if (!this.localStorage) {
            throw "Backbone.localStorage: Environment does not support localStorage."
        }
        this.name = name;
        this.serializer = serializer || {
            serialize: function (item) {
                return isObject(item) ? JSON.stringify(item) : item;
            },
            // fix for "illegal access" error on Android when JSON.parse is passed null
            deserialize: function (data) {
                return data && JSON.parse(data);
            }
        };
        var store = this.localStorage().getItem(this.name);
        this.records = (store && store.split(",")) || [];
    };

    extend(Backbone.LocalStorage.prototype, {

        // Save the current state of the **Store** to *localStorage*.
        save: function () {
            this.localStorage().setItem(this.name, this.records.join(","));
        },

        // Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
        // have an id of it's own.
        create: function (model) {
            if (!model.id && model.id !== 0) {
                model.id = guid();
                model.set(model.idAttribute, model.id);
            }
            this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
            this.records.push(model.id.toString());
            this.save();
            return this.find(model);
        },

        // Update a model by replacing its copy in `this.data`.
        update: function (model) {
            this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
            var modelId = model.id.toString();
            if (!contains(this.records, modelId)) {
                this.records.push(modelId);
                this.save();
            }
            return this.find(model);
        },

        // Retrieve a model from `this.data` by id.
        find: function (model) {
            return this.serializer.deserialize(this.localStorage().getItem(this._itemName(model.id)));
        },

        // Return the array of all models currently in storage.
        findAll: function () {
            var result = [];
            for (var i = 0, id, data; i < this.records.length; i++) {
                id = this.records[i];
                data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
                if (data != null) result.push(data);
            }
            return result;
        },

        // Delete a model from `this.data`, returning it.
        destroy: function (model) {
            this.localStorage().removeItem(this._itemName(model.id));
            var modelId = model.id.toString();
            for (var i = 0, id; i < this.records.length; i++) {
                if (this.records[i] === modelId) {
                    this.records.splice(i, 1);
                }
            }
            this.save();
            return model;
        },

        localStorage: function () {
            return localStorage;
        },

        // Clear localStorage for specific collection.
        _clear: function () {
            var local = this.localStorage(),
              itemRe = new RegExp("^" + this.name + "-");

            // Remove id-tracking item (e.g., "foo").
            local.removeItem(this.name);

            // Match all data items (e.g., "foo-ID") and remove.
            for (var k in local) {
                if (itemRe.test(k)) {
                    local.removeItem(k);
                }
            }

            this.records.length = 0;
        },

        // Size of localStorage.
        _storageSize: function () {
            return this.localStorage().length;
        },

        _itemName: function (id) {
            return this.name + "-" + id;
        }

    });

    Backbone.LocalStorage.sync = window.Store.sync = Backbone.localSync = function (method, model, options) {
        var store = result(model, 'localStorage') || result(model.collection, 'localStorage');

        var resp, errorMessage;
        //If $ is having Deferred - use it.
        var syncDfd = Backbone.$ ?
          (Backbone.$.Deferred && Backbone.$.Deferred()) :
          (Backbone.Deferred && Backbone.Deferred());

        try {

            switch (method) {
                case "read":
                    resp = model.id != undefined ? store.find(model) : store.findAll();
                    break;
                case "create":
                    resp = store.create(model);
                    break;
                case "update":
                    resp = store.update(model);
                    break;
                case "delete":
                    resp = store.destroy(model);
                    break;
            }

        } catch (error) {
            if (error.code === 22 && store._storageSize() === 0)
                errorMessage = "Private browsing is unsupported";
            else
                errorMessage = error.message;
        }

        if (resp) {
            if (options && options.success) {
                if (Backbone.VERSION === "0.9.10") {
                    options.success(model, resp, options);
                } else {
                    options.success(resp);
                }
            }
            if (syncDfd) {
                syncDfd.resolve(resp);
            }

        } else {
            errorMessage = errorMessage ? errorMessage
                                        : "Record Not Found";

            if (options && options.error)
                if (Backbone.VERSION === "0.9.10") {
                    options.error(model, errorMessage, options);
                } else {
                    options.error(errorMessage);
                }

            if (syncDfd)
                syncDfd.reject(errorMessage);
        }

        // add compatibility with $.ajax
        // always execute callback for success and error
        if (options && options.complete) options.complete(resp);

        return syncDfd && syncDfd.promise();
    };

    Backbone.ajaxSync = Backbone.sync;

    Backbone.getSyncMethod = function (model, options) {
        var forceAjaxSync = options && options.ajaxSync;

        if (!forceAjaxSync && (result(model, 'localStorage') || result(model.collection, 'localStorage'))) {
            return Backbone.localSync;
        }

        return Backbone.ajaxSync;
    };

    // Override 'Backbone.sync' to default to localSync,
    // the original 'Backbone.sync' is still available in 'Backbone.ajaxSync'
    Backbone.sync = function (method, model, options) {
        return Backbone.getSyncMethod(model, options).apply(this, [method, model, options]);
    };

    return Backbone.LocalStorage;
}));

$(function () {
    var cateScroll, prodScroll;

    var loaded = function () {
        cateScroll = new IScroll('#wrapper-menu', { useTransition: false });
        prodScroll = new IScroll('#wrapper-prod', { useTransition: false });
    }
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    loaded();


    //$(".menu-items li").each(function () {
    //    $(this).on("click touchend", function (e) {
    //        $(this).addClass("menu-item-active").siblings().removeClass("menu-item-active");
    //    });
    //});

    function Category() {
        this.id = -1;
        this.title = "";
    }

    function Product(_id, _title, _price) {
        this.id = _id;
        this.img = "";
        this.title = _title;
        this.price = _price;
        this.quantity = 1;
    }

    function ShoppingCart() {
        this.products = [];
        this.totalQuantity = 0;
        this.totalCost = 0.0;
    }

    var cart = new ShoppingCart();

    ShoppingCart.prototype.addProduct = function (prod) {
        var indexCart = this.isProductSelected(prod);
        if (indexCart > -1) {
            this.products[indexCart].quantity++;
        } else {
            this.products.push(prod);
        }
        this.updateTotalQuantityAndCost();
    };

    ShoppingCart.prototype.isProductSelected = function (prod) {
        var index = -1;
        $.each(this.products, function (_index, obj) {
            if (obj.id === prod.id) {
                index = _index;
                return false;
            }
        });
        return index;
    };

    ShoppingCart.prototype.updateTotalQuantityAndCost = function () {
        var totalCost = 0.00, totalQuantity = 0;
        $.each(this.products, function (index, obj) {
            totalCost += obj.quantity * obj.price;
            totalQuantity += obj.quantity;
        });

        $(".prod-quantity").text(totalQuantity);
        $(".prod-cost").text(totalCost.toFixed(2));
    };

    ShoppingCart.prototype.updateTotalCost = function () {

    };

    ShoppingCart.prototype.minusProduct = function () {

    };

    ShoppingCart.prototype.removeProduct = function (prod) {
        $.each(this.products, function (index, obj) {
            if (obj.id === prod.id) {
                this.products.splice(index, 1);
                return false;
            }
        });
    };

    

    $(".menu-items").on("click touchend", "li", function (e) {
        $(this).addClass("menu-item-active").siblings().removeClass("menu-item-active");
    });

    $(".product-footer").on("click touchend", ".product-btn-add", function (e) {

        if ($("#animate-dot").is(':animated')) {
            return;
        }
        var offset = $(this).offset();
        var px = offset.left, py = offset.top;

        var targetOffset = $(".prod-quantity").offset();
        var tpx = targetOffset.left, tpy = targetOffset.top;

        if ($("#animate-dot").length > 0) {

        } else {
            var img = $('<img />',
             {
                 id: 'animate-dot',
                 src: 'Content/img/rkoer93r3r_xsmall.png'
             }).appendTo($('body'));

        }
        $('#animate-dot').css({
            'left': px + "px",
            'top': py + 25 + "px"
        }).show();


        $('#animate-dot').animate({
            'left': tpx + "px",
            'top': tpy + "px"
        }, 300, function () {
            $('#animate-dot').hide();

            cart.addProduct(new Product(Math.floor(Math.random()*10), "test title", 12.9));
        });
     
    });
});