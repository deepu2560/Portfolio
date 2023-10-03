function Qd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const l = Object.getOwnPropertyDescriptor(r, i);
          l &&
            Object.defineProperty(
              e,
              i,
              l.get ? l : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
var Kd =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function cu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var du = { exports: {} },
  Bi = {},
  fu = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Er = Symbol.for("react.element"),
  Jd = Symbol.for("react.portal"),
  Zd = Symbol.for("react.fragment"),
  qd = Symbol.for("react.strict_mode"),
  ef = Symbol.for("react.profiler"),
  tf = Symbol.for("react.provider"),
  nf = Symbol.for("react.context"),
  rf = Symbol.for("react.forward_ref"),
  lf = Symbol.for("react.suspense"),
  sf = Symbol.for("react.memo"),
  of = Symbol.for("react.lazy"),
  Ho = Symbol.iterator;
function af(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ho && e[Ho]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hu = Object.assign,
  mu = {};
function Pn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mu),
    (this.updater = n || pu);
}
Pn.prototype.isReactComponent = {};
Pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vu() {}
vu.prototype = Pn.prototype;
function Fs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mu),
    (this.updater = n || pu);
}
var $s = (Fs.prototype = new vu());
$s.constructor = Fs;
hu($s, Pn.prototype);
$s.isPureReactComponent = !0;
var Uo = Array.isArray,
  gu = Object.prototype.hasOwnProperty,
  Vs = { current: null },
  yu = { key: !0, ref: !0, __self: !0, __source: !0 };
function wu(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      gu.call(t, r) && !yu.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var a = Array(o), c = 0; c < o; c++) a[c] = arguments[c + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
  return {
    $$typeof: Er,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: Vs.current,
  };
}
function uf(e, t) {
  return {
    $$typeof: Er,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Er;
}
function cf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wo = /\/+/g;
function ll(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? cf("" + e.key)
    : t.toString(36);
}
function Kr(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Er:
          case Jd:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + ll(s, 0) : r),
      Uo(i)
        ? ((n = ""),
          e != null && (n = e.replace(Wo, "$&/") + "/"),
          Kr(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Hs(i) &&
            (i = uf(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Wo, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Uo(e)))
    for (var o = 0; o < e.length; o++) {
      l = e[o];
      var a = r + ll(l, o);
      s += Kr(l, t, n, a, i);
    }
  else if (((a = af(e)), typeof a == "function"))
    for (e = a.call(e), o = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + ll(l, o++)), (s += Kr(l, t, n, a, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function Nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Kr(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function df(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ve = { current: null },
  Jr = { transition: null },
  ff = {
    ReactCurrentDispatcher: ve,
    ReactCurrentBatchConfig: Jr,
    ReactCurrentOwner: Vs,
  };
A.Children = {
  map: Nr,
  forEach: function (e, t, n) {
    Nr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
A.Component = Pn;
A.Fragment = Zd;
A.Profiler = ef;
A.PureComponent = Fs;
A.StrictMode = qd;
A.Suspense = lf;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ff;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = hu({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = Vs.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (a in t)
      gu.call(t, a) &&
        !yu.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var c = 0; c < a; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: Er, type: e.type, key: i, ref: l, props: r, _owner: s };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: nf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: tf, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = wu;
A.createFactory = function (e) {
  var t = wu.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: rf, render: e };
};
A.isValidElement = Hs;
A.lazy = function (e) {
  return { $$typeof: of, _payload: { _status: -1, _result: e }, _init: df };
};
A.memo = function (e, t) {
  return { $$typeof: sf, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = Jr.transition;
  Jr.transition = {};
  try {
    e();
  } finally {
    Jr.transition = t;
  }
};
A.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
A.useCallback = function (e, t) {
  return ve.current.useCallback(e, t);
};
A.useContext = function (e) {
  return ve.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return ve.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return ve.current.useEffect(e, t);
};
A.useId = function () {
  return ve.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return ve.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return ve.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return ve.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return ve.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return ve.current.useRef(e);
};
A.useState = function (e) {
  return ve.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return ve.current.useTransition();
};
A.version = "18.2.0";
fu.exports = A;
var M = fu.exports;
const J = cu(M),
  pf = Qd({ __proto__: null, default: J }, [M]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hf = M,
  mf = Symbol.for("react.element"),
  vf = Symbol.for("react.fragment"),
  gf = Object.prototype.hasOwnProperty,
  yf = hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wf = { key: !0, ref: !0, __self: !0, __source: !0 };
function xu(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) gf.call(t, r) && !wf.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: mf,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: yf.current,
  };
}
Bi.Fragment = vf;
Bi.jsx = xu;
Bi.jsxs = xu;
du.exports = Bi;
var p = du.exports,
  Fl = {},
  Su = { exports: {} },
  Me = {},
  Eu = { exports: {} },
  Cu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, O) {
    var R = z.length;
    z.push(O);
    e: for (; 0 < R; ) {
      var W = (R - 1) >>> 1,
        ee = z[W];
      if (0 < i(ee, O)) (z[W] = O), (z[R] = ee), (R = W);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var O = z[0],
      R = z.pop();
    if (R !== O) {
      z[0] = R;
      e: for (var W = 0, ee = z.length, qt = ee >>> 1; W < qt; ) {
        var It = 2 * (W + 1) - 1,
          il = z[It],
          bt = It + 1,
          _r = z[bt];
        if (0 > i(il, R))
          bt < ee && 0 > i(_r, il)
            ? ((z[W] = _r), (z[bt] = R), (W = bt))
            : ((z[W] = il), (z[It] = R), (W = It));
        else if (bt < ee && 0 > i(_r, R)) (z[W] = _r), (z[bt] = R), (W = bt);
        else break e;
      }
    }
    return O;
  }
  function i(z, O) {
    var R = z.sortIndex - O.sortIndex;
    return R !== 0 ? R : z.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      o = s.now();
    e.unstable_now = function () {
      return s.now() - o;
    };
  }
  var a = [],
    c = [],
    h = 1,
    m = null,
    v = 3,
    g = !1,
    x = !1,
    w = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(z) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) r(c);
      else if (O.startTime <= z)
        r(c), (O.sortIndex = O.expirationTime), t(a, O);
      else break;
      O = n(c);
    }
  }
  function y(z) {
    if (((w = !1), d(z), !x))
      if (n(a) !== null) (x = !0), pe(C);
      else {
        var O = n(c);
        O !== null && zt(y, O.startTime - z);
      }
  }
  function C(z, O) {
    (x = !1), w && ((w = !1), f(E), (E = -1)), (g = !0);
    var R = v;
    try {
      for (
        d(O), m = n(a);
        m !== null && (!(m.expirationTime > O) || (z && !P()));

      ) {
        var W = m.callback;
        if (typeof W == "function") {
          (m.callback = null), (v = m.priorityLevel);
          var ee = W(m.expirationTime <= O);
          (O = e.unstable_now()),
            typeof ee == "function" ? (m.callback = ee) : m === n(a) && r(a),
            d(O);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var qt = !0;
      else {
        var It = n(c);
        It !== null && zt(y, It.startTime - O), (qt = !1);
      }
      return qt;
    } finally {
      (m = null), (v = R), (g = !1);
    }
  }
  var j = !1,
    T = null,
    E = -1,
    k = 5,
    _ = -1;
  function P() {
    return !(e.unstable_now() - _ < k);
  }
  function N() {
    if (T !== null) {
      var z = e.unstable_now();
      _ = z;
      var O = !0;
      try {
        O = T(!0, z);
      } finally {
        O ? I() : ((j = !1), (T = null));
      }
    } else j = !1;
  }
  var I;
  if (typeof u == "function")
    I = function () {
      u(N);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      $ = D.port2;
    (D.port1.onmessage = N),
      (I = function () {
        $.postMessage(null);
      });
  } else
    I = function () {
      S(N, 0);
    };
  function pe(z) {
    (T = z), j || ((j = !0), I());
  }
  function zt(z, O) {
    E = S(function () {
      z(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || g || ((x = !0), pe(C));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (k = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (z) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = v;
      }
      var R = v;
      v = O;
      try {
        return z();
      } finally {
        v = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, O) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var R = v;
      v = z;
      try {
        return O();
      } finally {
        v = R;
      }
    }),
    (e.unstable_scheduleCallback = function (z, O, R) {
      var W = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? W + R : W))
          : (R = W),
        z)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = R + ee),
        (z = {
          id: h++,
          callback: O,
          priorityLevel: z,
          startTime: R,
          expirationTime: ee,
          sortIndex: -1,
        }),
        R > W
          ? ((z.sortIndex = R),
            t(c, z),
            n(a) === null &&
              z === n(c) &&
              (w ? (f(E), (E = -1)) : (w = !0), zt(y, R - W)))
          : ((z.sortIndex = ee), t(a, z), x || g || ((x = !0), pe(C))),
        z
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (z) {
      var O = v;
      return function () {
        var R = v;
        v = O;
        try {
          return z.apply(this, arguments);
        } finally {
          v = R;
        }
      };
    });
})(Cu);
Eu.exports = Cu;
var xf = Eu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ku = M,
  Pe = xf;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Tu = new Set(),
  ir = {};
function Kt(e, t) {
  xn(e, t), xn(e + "Capture", t);
}
function xn(e, t) {
  for (ir[e] = t, e = 0; e < t.length; e++) Tu.add(t[e]);
}
var rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $l = Object.prototype.hasOwnProperty,
  Sf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Go = {},
  Yo = {};
function Ef(e) {
  return $l.call(Yo, e)
    ? !0
    : $l.call(Go, e)
    ? !1
    : Sf.test(e)
    ? (Yo[e] = !0)
    : ((Go[e] = !0), !1);
}
function Cf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function kf(e, t, n, r) {
  if (t === null || typeof t > "u" || Cf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ge(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Us = /[\-:]([a-z])/g;
function Ws(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Us, Ws);
    ae[t] = new ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Us, Ws);
    ae[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Us, Ws);
  ae[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gs(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (kf(t, n, i, r) && (n = null),
    r || i === null
      ? Ef(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = ku.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zr = Symbol.for("react.element"),
  tn = Symbol.for("react.portal"),
  nn = Symbol.for("react.fragment"),
  Ys = Symbol.for("react.strict_mode"),
  Vl = Symbol.for("react.profiler"),
  ju = Symbol.for("react.provider"),
  Pu = Symbol.for("react.context"),
  Xs = Symbol.for("react.forward_ref"),
  Hl = Symbol.for("react.suspense"),
  Ul = Symbol.for("react.suspense_list"),
  Qs = Symbol.for("react.memo"),
  ut = Symbol.for("react.lazy"),
  Mu = Symbol.for("react.offscreen"),
  Xo = Symbol.iterator;
function In(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xo && e[Xo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  sl;
function Un(e) {
  if (sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      sl = (t && t[1]) || "";
    }
  return (
    `
` +
    sl +
    e
  );
}
var ol = !1;
function al(e, t) {
  if (!e || ol) return "";
  ol = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          o = l.length - 1;
        1 <= s && 0 <= o && i[s] !== l[o];

      )
        o--;
      for (; 1 <= s && 0 <= o; s--, o--)
        if (i[s] !== l[o]) {
          if (s !== 1 || o !== 1)
            do
              if ((s--, o--, 0 > o || i[s] !== l[o])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= o);
          break;
        }
    }
  } finally {
    (ol = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Un(e) : "";
}
function Tf(e) {
  switch (e.tag) {
    case 5:
      return Un(e.type);
    case 16:
      return Un("Lazy");
    case 13:
      return Un("Suspense");
    case 19:
      return Un("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = al(e.type, !1)), e;
    case 11:
      return (e = al(e.type.render, !1)), e;
    case 1:
      return (e = al(e.type, !0)), e;
    default:
      return "";
  }
}
function Wl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nn:
      return "Fragment";
    case tn:
      return "Portal";
    case Vl:
      return "Profiler";
    case Ys:
      return "StrictMode";
    case Hl:
      return "Suspense";
    case Ul:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Pu:
        return (e.displayName || "Context") + ".Consumer";
      case ju:
        return (e._context.displayName || "Context") + ".Provider";
      case Xs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Qs:
        return (
          (t = e.displayName || null), t !== null ? t : Wl(e.type) || "Memo"
        );
      case ut:
        (t = e._payload), (e = e._init);
        try {
          return Wl(e(t));
        } catch {}
    }
  return null;
}
function jf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Wl(t);
    case 8:
      return t === Ys ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function jt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Lu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Pf(e) {
  var t = Lu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ir(e) {
  e._valueTracker || (e._valueTracker = Pf(e));
}
function _u(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Lu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ui(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gl(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = jt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Nu(e, t) {
  (t = t.checked), t != null && Gs(e, "checked", t, !1);
}
function Yl(e, t) {
  Nu(e, t);
  var n = jt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Xl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xl(e, t.type, jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ko(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Xl(e, t, n) {
  (t !== "number" || ui(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Wn = Array.isArray;
function hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + jt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ql(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Jo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Wn(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: jt(n) };
}
function zu(e, t) {
  var n = jt(t.value),
    r = jt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Zo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Iu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Kl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Iu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var br,
  bu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        br = br || document.createElement("div"),
          br.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = br.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Mf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xn).forEach(function (e) {
  Mf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xn[t] = Xn[e]);
  });
});
function Ou(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Xn.hasOwnProperty(e) && Xn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ru(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ou(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Lf = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Jl(e, t) {
  if (t) {
    if (Lf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Zl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ql = null;
function Ks(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var es = null,
  mn = null,
  vn = null;
function qo(e) {
  if ((e = Tr(e))) {
    if (typeof es != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Ui(t)), es(e.stateNode, e.type, t));
  }
}
function Du(e) {
  mn ? (vn ? vn.push(e) : (vn = [e])) : (mn = e);
}
function Au() {
  if (mn) {
    var e = mn,
      t = vn;
    if (((vn = mn = null), qo(e), t)) for (e = 0; e < t.length; e++) qo(t[e]);
  }
}
function Bu(e, t) {
  return e(t);
}
function Fu() {}
var ul = !1;
function $u(e, t, n) {
  if (ul) return e(t, n);
  ul = !0;
  try {
    return Bu(e, t, n);
  } finally {
    (ul = !1), (mn !== null || vn !== null) && (Fu(), Au());
  }
}
function sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ui(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var ts = !1;
if (rt)
  try {
    var bn = {};
    Object.defineProperty(bn, "passive", {
      get: function () {
        ts = !0;
      },
    }),
      window.addEventListener("test", bn, bn),
      window.removeEventListener("test", bn, bn);
  } catch {
    ts = !1;
  }
function _f(e, t, n, r, i, l, s, o, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Qn = !1,
  ci = null,
  di = !1,
  ns = null,
  Nf = {
    onError: function (e) {
      (Qn = !0), (ci = e);
    },
  };
function zf(e, t, n, r, i, l, s, o, a) {
  (Qn = !1), (ci = null), _f.apply(Nf, arguments);
}
function If(e, t, n, r, i, l, s, o, a) {
  if ((zf.apply(this, arguments), Qn)) {
    if (Qn) {
      var c = ci;
      (Qn = !1), (ci = null);
    } else throw Error(L(198));
    di || ((di = !0), (ns = c));
  }
}
function Jt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ea(e) {
  if (Jt(e) !== e) throw Error(L(188));
}
function bf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Jt(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return ea(i), e;
        if (l === r) return ea(i), t;
        l = l.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, o = i.child; o; ) {
        if (o === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (o === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = l.child; o; ) {
          if (o === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (o === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Hu(e) {
  return (e = bf(e)), e !== null ? Uu(e) : null;
}
function Uu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Uu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wu = Pe.unstable_scheduleCallback,
  ta = Pe.unstable_cancelCallback,
  Of = Pe.unstable_shouldYield,
  Rf = Pe.unstable_requestPaint,
  Z = Pe.unstable_now,
  Df = Pe.unstable_getCurrentPriorityLevel,
  Js = Pe.unstable_ImmediatePriority,
  Gu = Pe.unstable_UserBlockingPriority,
  fi = Pe.unstable_NormalPriority,
  Af = Pe.unstable_LowPriority,
  Yu = Pe.unstable_IdlePriority,
  Fi = null,
  Xe = null;
function Bf(e) {
  if (Xe && typeof Xe.onCommitFiberRoot == "function")
    try {
      Xe.onCommitFiberRoot(Fi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $e = Math.clz32 ? Math.clz32 : Vf,
  Ff = Math.log,
  $f = Math.LN2;
function Vf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ff(e) / $f) | 0)) | 0;
}
var Or = 64,
  Rr = 4194304;
function Gn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function pi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var o = s & ~i;
    o !== 0 ? (r = Gn(o)) : ((l &= s), l !== 0 && (r = Gn(l)));
  } else (s = n & ~i), s !== 0 ? (r = Gn(s)) : l !== 0 && (r = Gn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $e(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Hf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Uf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - $e(l),
      o = 1 << s,
      a = i[s];
    a === -1
      ? (!(o & n) || o & r) && (i[s] = Hf(o, t))
      : a <= t && (e.expiredLanes |= o),
      (l &= ~o);
  }
}
function rs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xu() {
  var e = Or;
  return (Or <<= 1), !(Or & 4194240) && (Or = 64), e;
}
function cl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $e(t)),
    (e[t] = n);
}
function Wf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - $e(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Zs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $e(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var F = 0;
function Qu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ku,
  qs,
  Ju,
  Zu,
  qu,
  is = !1,
  Dr = [],
  gt = null,
  yt = null,
  wt = null,
  or = new Map(),
  ar = new Map(),
  dt = [],
  Gf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function na(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gt = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      wt = null;
      break;
    case "pointerover":
    case "pointerout":
      or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ar.delete(t.pointerId);
  }
}
function On(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = Tr(t)), t !== null && qs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Yf(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (gt = On(gt, e, t, n, r, i)), !0;
    case "dragenter":
      return (yt = On(yt, e, t, n, r, i)), !0;
    case "mouseover":
      return (wt = On(wt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return or.set(l, On(or.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), ar.set(l, On(ar.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ec(e) {
  var t = At(e.target);
  if (t !== null) {
    var n = Jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vu(n)), t !== null)) {
          (e.blockedOn = t),
            qu(e.priority, function () {
              Ju(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ls(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ql = r), n.target.dispatchEvent(r), (ql = null);
    } else return (t = Tr(n)), t !== null && qs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ra(e, t, n) {
  Zr(e) && n.delete(t);
}
function Xf() {
  (is = !1),
    gt !== null && Zr(gt) && (gt = null),
    yt !== null && Zr(yt) && (yt = null),
    wt !== null && Zr(wt) && (wt = null),
    or.forEach(ra),
    ar.forEach(ra);
}
function Rn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    is ||
      ((is = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, Xf)));
}
function ur(e) {
  function t(i) {
    return Rn(i, e);
  }
  if (0 < Dr.length) {
    Rn(Dr[0], e);
    for (var n = 1; n < Dr.length; n++) {
      var r = Dr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    gt !== null && Rn(gt, e),
      yt !== null && Rn(yt, e),
      wt !== null && Rn(wt, e),
      or.forEach(t),
      ar.forEach(t),
      n = 0;
    n < dt.length;
    n++
  )
    (r = dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dt.length && ((n = dt[0]), n.blockedOn === null); )
    ec(n), n.blockedOn === null && dt.shift();
}
var gn = ot.ReactCurrentBatchConfig,
  hi = !0;
function Qf(e, t, n, r) {
  var i = F,
    l = gn.transition;
  gn.transition = null;
  try {
    (F = 1), eo(e, t, n, r);
  } finally {
    (F = i), (gn.transition = l);
  }
}
function Kf(e, t, n, r) {
  var i = F,
    l = gn.transition;
  gn.transition = null;
  try {
    (F = 4), eo(e, t, n, r);
  } finally {
    (F = i), (gn.transition = l);
  }
}
function eo(e, t, n, r) {
  if (hi) {
    var i = ls(e, t, n, r);
    if (i === null) xl(e, t, r, mi, n), na(e, r);
    else if (Yf(i, e, t, n, r)) r.stopPropagation();
    else if ((na(e, r), t & 4 && -1 < Gf.indexOf(e))) {
      for (; i !== null; ) {
        var l = Tr(i);
        if (
          (l !== null && Ku(l),
          (l = ls(e, t, n, r)),
          l === null && xl(e, t, r, mi, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else xl(e, t, r, null, n);
  }
}
var mi = null;
function ls(e, t, n, r) {
  if (((mi = null), (e = Ks(r)), (e = At(e)), e !== null))
    if (((t = Jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (mi = e), null;
}
function tc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Df()) {
        case Js:
          return 1;
        case Gu:
          return 4;
        case fi:
        case Af:
          return 16;
        case Yu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pt = null,
  to = null,
  qr = null;
function nc() {
  if (qr) return qr;
  var e,
    t = to,
    n = t.length,
    r,
    i = "value" in pt ? pt.value : pt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (qr = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ei(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ar() {
  return !0;
}
function ia() {
  return !1;
}
function Le(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(l) : l[o]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ar
        : ia),
      (this.isPropagationStopped = ia),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ar));
      },
      persist: function () {},
      isPersistent: Ar,
    }),
    t
  );
}
var Mn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  no = Le(Mn),
  kr = Q({}, Mn, { view: 0, detail: 0 }),
  Jf = Le(kr),
  dl,
  fl,
  Dn,
  $i = Q({}, kr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ro,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Dn &&
            (Dn && e.type === "mousemove"
              ? ((dl = e.screenX - Dn.screenX), (fl = e.screenY - Dn.screenY))
              : (fl = dl = 0),
            (Dn = e)),
          dl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fl;
    },
  }),
  la = Le($i),
  Zf = Q({}, $i, { dataTransfer: 0 }),
  qf = Le(Zf),
  ep = Q({}, kr, { relatedTarget: 0 }),
  pl = Le(ep),
  tp = Q({}, Mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  np = Le(tp),
  rp = Q({}, Mn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ip = Le(rp),
  lp = Q({}, Mn, { data: 0 }),
  sa = Le(lp),
  sp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  op = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ap = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function up(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ap[e]) ? !!t[e] : !1;
}
function ro() {
  return up;
}
var cp = Q({}, kr, {
    key: function (e) {
      if (e.key) {
        var t = sp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ei(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? op[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ro,
    charCode: function (e) {
      return e.type === "keypress" ? ei(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ei(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  dp = Le(cp),
  fp = Q({}, $i, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  oa = Le(fp),
  pp = Q({}, kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ro,
  }),
  hp = Le(pp),
  mp = Q({}, Mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vp = Le(mp),
  gp = Q({}, $i, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yp = Le(gp),
  wp = [9, 13, 27, 32],
  io = rt && "CompositionEvent" in window,
  Kn = null;
rt && "documentMode" in document && (Kn = document.documentMode);
var xp = rt && "TextEvent" in window && !Kn,
  rc = rt && (!io || (Kn && 8 < Kn && 11 >= Kn)),
  aa = String.fromCharCode(32),
  ua = !1;
function ic(e, t) {
  switch (e) {
    case "keyup":
      return wp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function lc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var rn = !1;
function Sp(e, t) {
  switch (e) {
    case "compositionend":
      return lc(t);
    case "keypress":
      return t.which !== 32 ? null : ((ua = !0), aa);
    case "textInput":
      return (e = t.data), e === aa && ua ? null : e;
    default:
      return null;
  }
}
function Ep(e, t) {
  if (rn)
    return e === "compositionend" || (!io && ic(e, t))
      ? ((e = nc()), (qr = to = pt = null), (rn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return rc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ca(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cp[e.type] : t === "textarea";
}
function sc(e, t, n, r) {
  Du(r),
    (t = vi(t, "onChange")),
    0 < t.length &&
      ((n = new no("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Jn = null,
  cr = null;
function kp(e) {
  gc(e, 0);
}
function Vi(e) {
  var t = on(e);
  if (_u(t)) return e;
}
function Tp(e, t) {
  if (e === "change") return t;
}
var oc = !1;
if (rt) {
  var hl;
  if (rt) {
    var ml = "oninput" in document;
    if (!ml) {
      var da = document.createElement("div");
      da.setAttribute("oninput", "return;"),
        (ml = typeof da.oninput == "function");
    }
    hl = ml;
  } else hl = !1;
  oc = hl && (!document.documentMode || 9 < document.documentMode);
}
function fa() {
  Jn && (Jn.detachEvent("onpropertychange", ac), (cr = Jn = null));
}
function ac(e) {
  if (e.propertyName === "value" && Vi(cr)) {
    var t = [];
    sc(t, cr, e, Ks(e)), $u(kp, t);
  }
}
function jp(e, t, n) {
  e === "focusin"
    ? (fa(), (Jn = t), (cr = n), Jn.attachEvent("onpropertychange", ac))
    : e === "focusout" && fa();
}
function Pp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vi(cr);
}
function Mp(e, t) {
  if (e === "click") return Vi(t);
}
function Lp(e, t) {
  if (e === "input" || e === "change") return Vi(t);
}
function _p(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : _p;
function dr(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!$l.call(t, i) || !He(e[i], t[i])) return !1;
  }
  return !0;
}
function pa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ha(e, t) {
  var n = pa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = pa(n);
  }
}
function uc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? uc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function cc() {
  for (var e = window, t = ui(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ui(e.document);
  }
  return t;
}
function lo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Np(e) {
  var t = cc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    uc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && lo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = ha(n, l));
        var s = ha(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var zp = rt && "documentMode" in document && 11 >= document.documentMode,
  ln = null,
  ss = null,
  Zn = null,
  os = !1;
function ma(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  os ||
    ln == null ||
    ln !== ui(r) ||
    ((r = ln),
    "selectionStart" in r && lo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Zn && dr(Zn, r)) ||
      ((Zn = r),
      (r = vi(ss, "onSelect")),
      0 < r.length &&
        ((t = new no("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ln))));
}
function Br(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var sn = {
    animationend: Br("Animation", "AnimationEnd"),
    animationiteration: Br("Animation", "AnimationIteration"),
    animationstart: Br("Animation", "AnimationStart"),
    transitionend: Br("Transition", "TransitionEnd"),
  },
  vl = {},
  dc = {};
rt &&
  ((dc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete sn.animationend.animation,
    delete sn.animationiteration.animation,
    delete sn.animationstart.animation),
  "TransitionEvent" in window || delete sn.transitionend.transition);
function Hi(e) {
  if (vl[e]) return vl[e];
  if (!sn[e]) return e;
  var t = sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in dc) return (vl[e] = t[n]);
  return e;
}
var fc = Hi("animationend"),
  pc = Hi("animationiteration"),
  hc = Hi("animationstart"),
  mc = Hi("transitionend"),
  vc = new Map(),
  va =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Mt(e, t) {
  vc.set(e, t), Kt(t, [e]);
}
for (var gl = 0; gl < va.length; gl++) {
  var yl = va[gl],
    Ip = yl.toLowerCase(),
    bp = yl[0].toUpperCase() + yl.slice(1);
  Mt(Ip, "on" + bp);
}
Mt(fc, "onAnimationEnd");
Mt(pc, "onAnimationIteration");
Mt(hc, "onAnimationStart");
Mt("dblclick", "onDoubleClick");
Mt("focusin", "onFocus");
Mt("focusout", "onBlur");
Mt(mc, "onTransitionEnd");
xn("onMouseEnter", ["mouseout", "mouseover"]);
xn("onMouseLeave", ["mouseout", "mouseover"]);
xn("onPointerEnter", ["pointerout", "pointerover"]);
xn("onPointerLeave", ["pointerout", "pointerover"]);
Kt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Kt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Kt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Kt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Yn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Op = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));
function ga(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), If(r, t, void 0, e), (e.currentTarget = null);
}
function gc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var o = r[s],
            a = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), a !== l && i.isPropagationStopped())) break e;
          ga(i, o, c), (l = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((o = r[s]),
            (a = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            a !== l && i.isPropagationStopped())
          )
            break e;
          ga(i, o, c), (l = a);
        }
    }
  }
  if (di) throw ((e = ns), (di = !1), (ns = null), e);
}
function H(e, t) {
  var n = t[fs];
  n === void 0 && (n = t[fs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (yc(t, e, 2, !1), n.add(r));
}
function wl(e, t, n) {
  var r = 0;
  t && (r |= 4), yc(n, e, r, t);
}
var Fr = "_reactListening" + Math.random().toString(36).slice(2);
function fr(e) {
  if (!e[Fr]) {
    (e[Fr] = !0),
      Tu.forEach(function (n) {
        n !== "selectionchange" && (Op.has(n) || wl(n, !1, e), wl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fr] || ((t[Fr] = !0), wl("selectionchange", !1, t));
  }
}
function yc(e, t, n, r) {
  switch (tc(t)) {
    case 1:
      var i = Qf;
      break;
    case 4:
      i = Kf;
      break;
    default:
      i = eo;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ts ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function xl(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var o = r.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; o !== null; ) {
          if (((s = At(o)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = l = s;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  $u(function () {
    var c = l,
      h = Ks(n),
      m = [];
    e: {
      var v = vc.get(e);
      if (v !== void 0) {
        var g = no,
          x = e;
        switch (e) {
          case "keypress":
            if (ei(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = dp;
            break;
          case "focusin":
            (x = "focus"), (g = pl);
            break;
          case "focusout":
            (x = "blur"), (g = pl);
            break;
          case "beforeblur":
          case "afterblur":
            g = pl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = la;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = qf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = hp;
            break;
          case fc:
          case pc:
          case hc:
            g = np;
            break;
          case mc:
            g = vp;
            break;
          case "scroll":
            g = Jf;
            break;
          case "wheel":
            g = yp;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ip;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = oa;
        }
        var w = (t & 4) !== 0,
          S = !w && e === "scroll",
          f = w ? (v !== null ? v + "Capture" : null) : v;
        w = [];
        for (var u = c, d; u !== null; ) {
          d = u;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = sr(u, f)), y != null && w.push(pr(u, y, d)))),
            S)
          )
            break;
          u = u.return;
        }
        0 < w.length &&
          ((v = new g(v, x, null, n, h)), m.push({ event: v, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          v &&
            n !== ql &&
            (x = n.relatedTarget || n.fromElement) &&
            (At(x) || x[it]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            h.window === h
              ? h
              : (v = h.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          g
            ? ((x = n.relatedTarget || n.toElement),
              (g = c),
              (x = x ? At(x) : null),
              x !== null &&
                ((S = Jt(x)), x !== S || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((g = null), (x = c)),
          g !== x)
        ) {
          if (
            ((w = la),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = oa),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (u = "pointer")),
            (S = g == null ? v : on(g)),
            (d = x == null ? v : on(x)),
            (v = new w(y, u + "leave", g, n, h)),
            (v.target = S),
            (v.relatedTarget = d),
            (y = null),
            At(h) === c &&
              ((w = new w(f, u + "enter", x, n, h)),
              (w.target = d),
              (w.relatedTarget = S),
              (y = w)),
            (S = y),
            g && x)
          )
            t: {
              for (w = g, f = x, u = 0, d = w; d; d = en(d)) u++;
              for (d = 0, y = f; y; y = en(y)) d++;
              for (; 0 < u - d; ) (w = en(w)), u--;
              for (; 0 < d - u; ) (f = en(f)), d--;
              for (; u--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = en(w)), (f = en(f));
              }
              w = null;
            }
          else w = null;
          g !== null && ya(m, v, g, w, !1),
            x !== null && S !== null && ya(m, S, x, w, !0);
        }
      }
      e: {
        if (
          ((v = c ? on(c) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === "select" || (g === "input" && v.type === "file"))
        )
          var C = Tp;
        else if (ca(v))
          if (oc) C = Lp;
          else {
            C = Pp;
            var j = jp;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (C = Mp);
        if (C && (C = C(e, c))) {
          sc(m, C, n, h);
          break e;
        }
        j && j(e, v, c),
          e === "focusout" &&
            (j = v._wrapperState) &&
            j.controlled &&
            v.type === "number" &&
            Xl(v, "number", v.value);
      }
      switch (((j = c ? on(c) : window), e)) {
        case "focusin":
          (ca(j) || j.contentEditable === "true") &&
            ((ln = j), (ss = c), (Zn = null));
          break;
        case "focusout":
          Zn = ss = ln = null;
          break;
        case "mousedown":
          os = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (os = !1), ma(m, n, h);
          break;
        case "selectionchange":
          if (zp) break;
        case "keydown":
        case "keyup":
          ma(m, n, h);
      }
      var T;
      if (io)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        rn
          ? ic(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (rc &&
          n.locale !== "ko" &&
          (rn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && rn && (T = nc())
            : ((pt = h),
              (to = "value" in pt ? pt.value : pt.textContent),
              (rn = !0))),
        (j = vi(c, E)),
        0 < j.length &&
          ((E = new sa(E, e, null, n, h)),
          m.push({ event: E, listeners: j }),
          T ? (E.data = T) : ((T = lc(n)), T !== null && (E.data = T)))),
        (T = xp ? Sp(e, n) : Ep(e, n)) &&
          ((c = vi(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new sa("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = T)));
    }
    gc(m, t);
  });
}
function pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = sr(e, n)),
      l != null && r.unshift(pr(e, l, i)),
      (l = sr(e, t)),
      l != null && r.push(pr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function en(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ya(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var o = n,
      a = o.alternate,
      c = o.stateNode;
    if (a !== null && a === r) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      i
        ? ((a = sr(n, l)), a != null && s.unshift(pr(n, a, o)))
        : i || ((a = sr(n, l)), a != null && s.push(pr(n, a, o)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Rp = /\r\n?/g,
  Dp = /\u0000|\uFFFD/g;
function wa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Rp,
      `
`,
    )
    .replace(Dp, "");
}
function $r(e, t, n) {
  if (((t = wa(t)), wa(e) !== t && n)) throw Error(L(425));
}
function gi() {}
var as = null,
  us = null;
function cs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ds = typeof setTimeout == "function" ? setTimeout : void 0,
  Ap = typeof clearTimeout == "function" ? clearTimeout : void 0,
  xa = typeof Promise == "function" ? Promise : void 0,
  Bp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof xa < "u"
      ? function (e) {
          return xa.resolve(null).then(e).catch(Fp);
        }
      : ds;
function Fp(e) {
  setTimeout(function () {
    throw e;
  });
}
function Sl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ur(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ur(t);
}
function xt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Sa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ln = Math.random().toString(36).slice(2),
  Ge = "__reactFiber$" + Ln,
  hr = "__reactProps$" + Ln,
  it = "__reactContainer$" + Ln,
  fs = "__reactEvents$" + Ln,
  $p = "__reactListeners$" + Ln,
  Vp = "__reactHandles$" + Ln;
function At(e) {
  var t = e[Ge];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[it] || n[Ge])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Sa(e); e !== null; ) {
          if ((n = e[Ge])) return n;
          e = Sa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Tr(e) {
  return (
    (e = e[Ge] || e[it]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function on(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Ui(e) {
  return e[hr] || null;
}
var ps = [],
  an = -1;
function Lt(e) {
  return { current: e };
}
function U(e) {
  0 > an || ((e.current = ps[an]), (ps[an] = null), an--);
}
function V(e, t) {
  an++, (ps[an] = e.current), (e.current = t);
}
var Pt = {},
  fe = Lt(Pt),
  xe = Lt(!1),
  Ut = Pt;
function Sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Se(e) {
  return (e = e.childContextTypes), e != null;
}
function yi() {
  U(xe), U(fe);
}
function Ea(e, t, n) {
  if (fe.current !== Pt) throw Error(L(168));
  V(fe, t), V(xe, n);
}
function wc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, jf(e) || "Unknown", i));
  return Q({}, n, r);
}
function wi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pt),
    (Ut = fe.current),
    V(fe, e),
    V(xe, xe.current),
    !0
  );
}
function Ca(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = wc(e, t, Ut)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(xe),
      U(fe),
      V(fe, e))
    : U(xe),
    V(xe, n);
}
var qe = null,
  Wi = !1,
  El = !1;
function xc(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
function Hp(e) {
  (Wi = !0), xc(e);
}
function _t() {
  if (!El && qe !== null) {
    El = !0;
    var e = 0,
      t = F;
    try {
      var n = qe;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qe = null), (Wi = !1);
    } catch (i) {
      throw (qe !== null && (qe = qe.slice(e + 1)), Wu(Js, _t), i);
    } finally {
      (F = t), (El = !1);
    }
  }
  return null;
}
var un = [],
  cn = 0,
  xi = null,
  Si = 0,
  Ne = [],
  ze = 0,
  Wt = null,
  et = 1,
  tt = "";
function Ot(e, t) {
  (un[cn++] = Si), (un[cn++] = xi), (xi = e), (Si = t);
}
function Sc(e, t, n) {
  (Ne[ze++] = et), (Ne[ze++] = tt), (Ne[ze++] = Wt), (Wt = e);
  var r = et;
  e = tt;
  var i = 32 - $e(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - $e(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (et = (1 << (32 - $e(t) + i)) | (n << i) | r),
      (tt = l + e);
  } else (et = (1 << l) | (n << i) | r), (tt = e);
}
function so(e) {
  e.return !== null && (Ot(e, 1), Sc(e, 1, 0));
}
function oo(e) {
  for (; e === xi; )
    (xi = un[--cn]), (un[cn] = null), (Si = un[--cn]), (un[cn] = null);
  for (; e === Wt; )
    (Wt = Ne[--ze]),
      (Ne[ze] = null),
      (tt = Ne[--ze]),
      (Ne[ze] = null),
      (et = Ne[--ze]),
      (Ne[ze] = null);
}
var je = null,
  Te = null,
  G = !1,
  Fe = null;
function Ec(e, t) {
  var n = Ie(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ka(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Te = xt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Te = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Wt !== null ? { id: et, overflow: tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Te = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function hs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ms(e) {
  if (G) {
    var t = Te;
    if (t) {
      var n = t;
      if (!ka(e, t)) {
        if (hs(e)) throw Error(L(418));
        t = xt(n.nextSibling);
        var r = je;
        t && ka(e, t)
          ? Ec(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (je = e));
      }
    } else {
      if (hs(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (je = e);
    }
  }
}
function Ta(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function Vr(e) {
  if (e !== je) return !1;
  if (!G) return Ta(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !cs(e.type, e.memoizedProps))),
    t && (t = Te))
  ) {
    if (hs(e)) throw (Cc(), Error(L(418)));
    for (; t; ) Ec(e, t), (t = xt(t.nextSibling));
  }
  if ((Ta(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Te = xt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Te = null;
    }
  } else Te = je ? xt(e.stateNode.nextSibling) : null;
  return !0;
}
function Cc() {
  for (var e = Te; e; ) e = xt(e.nextSibling);
}
function En() {
  (Te = je = null), (G = !1);
}
function ao(e) {
  Fe === null ? (Fe = [e]) : Fe.push(e);
}
var Up = ot.ReactCurrentBatchConfig;
function Ae(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ei = Lt(null),
  Ci = null,
  dn = null,
  uo = null;
function co() {
  uo = dn = Ci = null;
}
function fo(e) {
  var t = Ei.current;
  U(Ei), (e._currentValue = t);
}
function vs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function yn(e, t) {
  (Ci = e),
    (uo = dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (we = !0), (e.firstContext = null));
}
function Oe(e) {
  var t = e._currentValue;
  if (uo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dn === null)) {
      if (Ci === null) throw Error(L(308));
      (dn = e), (Ci.dependencies = { lanes: 0, firstContext: e });
    } else dn = dn.next = e;
  return t;
}
var Bt = null;
function po(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function kc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), po(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    lt(e, r)
  );
}
function lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ct = !1;
function ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Tc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function St(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      lt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), po(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    lt(e, n)
  );
}
function ti(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zs(e, n);
  }
}
function ja(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ki(e, t, n, r) {
  var i = e.updateQueue;
  ct = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var a = o,
      c = a.next;
    (a.next = null), s === null ? (l = c) : (s.next = c), (s = a);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (o = h.lastBaseUpdate),
      o !== s &&
        (o === null ? (h.firstBaseUpdate = c) : (o.next = c),
        (h.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var m = i.baseState;
    (s = 0), (h = c = a = null), (o = l);
    do {
      var v = o.lane,
        g = o.eventTime;
      if ((r & v) === v) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var x = e,
            w = o;
          switch (((v = t), (g = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                m = x.call(g, m, v);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (v = typeof x == "function" ? x.call(g, m, v) : x),
                v == null)
              )
                break e;
              m = Q({}, m, v);
              break e;
            case 2:
              ct = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [o]) : v.push(o));
      } else
        (g = {
          eventTime: g,
          lane: v,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          h === null ? ((c = h = g), (a = m)) : (h = h.next = g),
          (s |= v);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (v = o),
          (o = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (a = m),
      (i.baseState = a),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (Yt |= s), (e.lanes = s), (e.memoizedState = m);
  }
}
function Pa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var jc = new ku.Component().refs;
function gs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Gi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Ct(e),
      l = nt(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = St(e, l, i)),
      t !== null && (Ve(t, e, i, r), ti(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Ct(e),
      l = nt(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = St(e, l, i)),
      t !== null && (Ve(t, e, i, r), ti(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Ct(e),
      i = nt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = St(e, i, r)),
      t !== null && (Ve(t, e, r, n), ti(t, e, r));
  },
};
function Ma(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !dr(n, r) || !dr(i, l)
      : !0
  );
}
function Pc(e, t, n) {
  var r = !1,
    i = Pt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Oe(l))
      : ((i = Se(t) ? Ut : fe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Sn(e, i) : Pt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Gi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function La(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Gi.enqueueReplaceState(t, t.state, null);
}
function ys(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = jc), ho(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = Oe(l))
    : ((l = Se(t) ? Ut : fe.current), (i.context = Sn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (gs(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Gi.enqueueReplaceState(i, i.state, null),
      ki(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function An(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var o = i.refs;
            o === jc && (o = i.refs = {}),
              s === null ? delete o[l] : (o[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Hr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function _a(e) {
  var t = e._init;
  return t(e._payload);
}
function Mc(e) {
  function t(f, u) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [u]), (f.flags |= 16)) : d.push(u);
    }
  }
  function n(f, u) {
    if (!e) return null;
    for (; u !== null; ) t(f, u), (u = u.sibling);
    return null;
  }
  function r(f, u) {
    for (f = new Map(); u !== null; )
      u.key !== null ? f.set(u.key, u) : f.set(u.index, u), (u = u.sibling);
    return f;
  }
  function i(f, u) {
    return (f = kt(f, u)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, u, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < u ? ((f.flags |= 2), u) : d)
            : ((f.flags |= 2), u))
        : ((f.flags |= 1048576), u)
    );
  }
  function s(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, u, d, y) {
    return u === null || u.tag !== 6
      ? ((u = Ll(d, f.mode, y)), (u.return = f), u)
      : ((u = i(u, d)), (u.return = f), u);
  }
  function a(f, u, d, y) {
    var C = d.type;
    return C === nn
      ? h(f, u, d.props.children, y, d.key)
      : u !== null &&
        (u.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === ut &&
            _a(C) === u.type))
      ? ((y = i(u, d.props)), (y.ref = An(f, u, d)), (y.return = f), y)
      : ((y = oi(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = An(f, u, d)),
        (y.return = f),
        y);
  }
  function c(f, u, d, y) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== d.containerInfo ||
      u.stateNode.implementation !== d.implementation
      ? ((u = _l(d, f.mode, y)), (u.return = f), u)
      : ((u = i(u, d.children || [])), (u.return = f), u);
  }
  function h(f, u, d, y, C) {
    return u === null || u.tag !== 7
      ? ((u = Vt(d, f.mode, y, C)), (u.return = f), u)
      : ((u = i(u, d)), (u.return = f), u);
  }
  function m(f, u, d) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = Ll("" + u, f.mode, d)), (u.return = f), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case zr:
          return (
            (d = oi(u.type, u.key, u.props, null, f.mode, d)),
            (d.ref = An(f, null, u)),
            (d.return = f),
            d
          );
        case tn:
          return (u = _l(u, f.mode, d)), (u.return = f), u;
        case ut:
          var y = u._init;
          return m(f, y(u._payload), d);
      }
      if (Wn(u) || In(u))
        return (u = Vt(u, f.mode, d, null)), (u.return = f), u;
      Hr(f, u);
    }
    return null;
  }
  function v(f, u, d, y) {
    var C = u !== null ? u.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : o(f, u, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case zr:
          return d.key === C ? a(f, u, d, y) : null;
        case tn:
          return d.key === C ? c(f, u, d, y) : null;
        case ut:
          return (C = d._init), v(f, u, C(d._payload), y);
      }
      if (Wn(d) || In(d)) return C !== null ? null : h(f, u, d, y, null);
      Hr(f, d);
    }
    return null;
  }
  function g(f, u, d, y, C) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), o(u, f, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case zr:
          return (f = f.get(y.key === null ? d : y.key) || null), a(u, f, y, C);
        case tn:
          return (f = f.get(y.key === null ? d : y.key) || null), c(u, f, y, C);
        case ut:
          var j = y._init;
          return g(f, u, d, j(y._payload), C);
      }
      if (Wn(y) || In(y)) return (f = f.get(d) || null), h(u, f, y, C, null);
      Hr(u, y);
    }
    return null;
  }
  function x(f, u, d, y) {
    for (
      var C = null, j = null, T = u, E = (u = 0), k = null;
      T !== null && E < d.length;
      E++
    ) {
      T.index > E ? ((k = T), (T = null)) : (k = T.sibling);
      var _ = v(f, T, d[E], y);
      if (_ === null) {
        T === null && (T = k);
        break;
      }
      e && T && _.alternate === null && t(f, T),
        (u = l(_, u, E)),
        j === null ? (C = _) : (j.sibling = _),
        (j = _),
        (T = k);
    }
    if (E === d.length) return n(f, T), G && Ot(f, E), C;
    if (T === null) {
      for (; E < d.length; E++)
        (T = m(f, d[E], y)),
          T !== null &&
            ((u = l(T, u, E)), j === null ? (C = T) : (j.sibling = T), (j = T));
      return G && Ot(f, E), C;
    }
    for (T = r(f, T); E < d.length; E++)
      (k = g(T, f, E, d[E], y)),
        k !== null &&
          (e && k.alternate !== null && T.delete(k.key === null ? E : k.key),
          (u = l(k, u, E)),
          j === null ? (C = k) : (j.sibling = k),
          (j = k));
    return (
      e &&
        T.forEach(function (P) {
          return t(f, P);
        }),
      G && Ot(f, E),
      C
    );
  }
  function w(f, u, d, y) {
    var C = In(d);
    if (typeof C != "function") throw Error(L(150));
    if (((d = C.call(d)), d == null)) throw Error(L(151));
    for (
      var j = (C = null), T = u, E = (u = 0), k = null, _ = d.next();
      T !== null && !_.done;
      E++, _ = d.next()
    ) {
      T.index > E ? ((k = T), (T = null)) : (k = T.sibling);
      var P = v(f, T, _.value, y);
      if (P === null) {
        T === null && (T = k);
        break;
      }
      e && T && P.alternate === null && t(f, T),
        (u = l(P, u, E)),
        j === null ? (C = P) : (j.sibling = P),
        (j = P),
        (T = k);
    }
    if (_.done) return n(f, T), G && Ot(f, E), C;
    if (T === null) {
      for (; !_.done; E++, _ = d.next())
        (_ = m(f, _.value, y)),
          _ !== null &&
            ((u = l(_, u, E)), j === null ? (C = _) : (j.sibling = _), (j = _));
      return G && Ot(f, E), C;
    }
    for (T = r(f, T); !_.done; E++, _ = d.next())
      (_ = g(T, f, E, _.value, y)),
        _ !== null &&
          (e && _.alternate !== null && T.delete(_.key === null ? E : _.key),
          (u = l(_, u, E)),
          j === null ? (C = _) : (j.sibling = _),
          (j = _));
    return (
      e &&
        T.forEach(function (N) {
          return t(f, N);
        }),
      G && Ot(f, E),
      C
    );
  }
  function S(f, u, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === nn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case zr:
          e: {
            for (var C = d.key, j = u; j !== null; ) {
              if (j.key === C) {
                if (((C = d.type), C === nn)) {
                  if (j.tag === 7) {
                    n(f, j.sibling),
                      (u = i(j, d.props.children)),
                      (u.return = f),
                      (f = u);
                    break e;
                  }
                } else if (
                  j.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === ut &&
                    _a(C) === j.type)
                ) {
                  n(f, j.sibling),
                    (u = i(j, d.props)),
                    (u.ref = An(f, j, d)),
                    (u.return = f),
                    (f = u);
                  break e;
                }
                n(f, j);
                break;
              } else t(f, j);
              j = j.sibling;
            }
            d.type === nn
              ? ((u = Vt(d.props.children, f.mode, y, d.key)),
                (u.return = f),
                (f = u))
              : ((y = oi(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = An(f, u, d)),
                (y.return = f),
                (f = y));
          }
          return s(f);
        case tn:
          e: {
            for (j = d.key; u !== null; ) {
              if (u.key === j)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === d.containerInfo &&
                  u.stateNode.implementation === d.implementation
                ) {
                  n(f, u.sibling),
                    (u = i(u, d.children || [])),
                    (u.return = f),
                    (f = u);
                  break e;
                } else {
                  n(f, u);
                  break;
                }
              else t(f, u);
              u = u.sibling;
            }
            (u = _l(d, f.mode, y)), (u.return = f), (f = u);
          }
          return s(f);
        case ut:
          return (j = d._init), S(f, u, j(d._payload), y);
      }
      if (Wn(d)) return x(f, u, d, y);
      if (In(d)) return w(f, u, d, y);
      Hr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        u !== null && u.tag === 6
          ? (n(f, u.sibling), (u = i(u, d)), (u.return = f), (f = u))
          : (n(f, u), (u = Ll(d, f.mode, y)), (u.return = f), (f = u)),
        s(f))
      : n(f, u);
  }
  return S;
}
var Cn = Mc(!0),
  Lc = Mc(!1),
  jr = {},
  Qe = Lt(jr),
  mr = Lt(jr),
  vr = Lt(jr);
function Ft(e) {
  if (e === jr) throw Error(L(174));
  return e;
}
function mo(e, t) {
  switch ((V(vr, t), V(mr, e), V(Qe, jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Kl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Kl(t, e));
  }
  U(Qe), V(Qe, t);
}
function kn() {
  U(Qe), U(mr), U(vr);
}
function _c(e) {
  Ft(vr.current);
  var t = Ft(Qe.current),
    n = Kl(t, e.type);
  t !== n && (V(mr, e), V(Qe, n));
}
function vo(e) {
  mr.current === e && (U(Qe), U(mr));
}
var Y = Lt(0);
function Ti(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Cl = [];
function go() {
  for (var e = 0; e < Cl.length; e++)
    Cl[e]._workInProgressVersionPrimary = null;
  Cl.length = 0;
}
var ni = ot.ReactCurrentDispatcher,
  kl = ot.ReactCurrentBatchConfig,
  Gt = 0,
  X = null,
  ne = null,
  ie = null,
  ji = !1,
  qn = !1,
  gr = 0,
  Wp = 0;
function ue() {
  throw Error(L(321));
}
function yo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function wo(e, t, n, r, i, l) {
  if (
    ((Gt = l),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ni.current = e === null || e.memoizedState === null ? Qp : Kp),
    (e = n(r, i)),
    qn)
  ) {
    l = 0;
    do {
      if (((qn = !1), (gr = 0), 25 <= l)) throw Error(L(301));
      (l += 1),
        (ie = ne = null),
        (t.updateQueue = null),
        (ni.current = Jp),
        (e = n(r, i));
    } while (qn);
  }
  if (
    ((ni.current = Pi),
    (t = ne !== null && ne.next !== null),
    (Gt = 0),
    (ie = ne = X = null),
    (ji = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function xo() {
  var e = gr !== 0;
  return (gr = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ie === null ? (X.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function Re() {
  if (ne === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = ie === null ? X.memoizedState : ie.next;
  if (t !== null) (ie = t), (ne = e);
  else {
    if (e === null) throw Error(L(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      ie === null ? (X.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function yr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Tl(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = ne,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var o = (s = null),
      a = null,
      c = l;
    do {
      var h = c.lane;
      if ((Gt & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((o = a = m), (s = r)) : (a = a.next = m),
          (X.lanes |= h),
          (Yt |= h);
      }
      c = c.next;
    } while (c !== null && c !== l);
    a === null ? (s = r) : (a.next = o),
      He(r, t.memoizedState) || (we = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (X.lanes |= l), (Yt |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function jl(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    He(l, t.memoizedState) || (we = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Nc() {}
function zc(e, t) {
  var n = X,
    r = Re(),
    i = t(),
    l = !He(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (we = !0)),
    (r = r.queue),
    So(Oc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wr(9, bc.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(L(349));
    Gt & 30 || Ic(n, t, i);
  }
  return i;
}
function Ic(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function bc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Rc(t) && Dc(e);
}
function Oc(e, t, n) {
  return n(function () {
    Rc(t) && Dc(e);
  });
}
function Rc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function Dc(e) {
  var t = lt(e, 1);
  t !== null && Ve(t, e, 1, -1);
}
function Na(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xp.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function wr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ac() {
  return Re().memoizedState;
}
function ri(e, t, n, r) {
  var i = We();
  (X.flags |= e),
    (i.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yi(e, t, n, r) {
  var i = Re();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ne !== null) {
    var s = ne.memoizedState;
    if (((l = s.destroy), r !== null && yo(r, s.deps))) {
      i.memoizedState = wr(t, n, l, r);
      return;
    }
  }
  (X.flags |= e), (i.memoizedState = wr(1 | t, n, l, r));
}
function za(e, t) {
  return ri(8390656, 8, e, t);
}
function So(e, t) {
  return Yi(2048, 8, e, t);
}
function Bc(e, t) {
  return Yi(4, 2, e, t);
}
function Fc(e, t) {
  return Yi(4, 4, e, t);
}
function $c(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Vc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Yi(4, 4, $c.bind(null, t, e), n)
  );
}
function Eo() {}
function Hc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Uc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wc(e, t, n) {
  return Gt & 21
    ? (He(n, t) || ((n = Xu()), (X.lanes |= n), (Yt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = n));
}
function Gp(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = kl.transition;
  kl.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (kl.transition = r);
  }
}
function Gc() {
  return Re().memoizedState;
}
function Yp(e, t, n) {
  var r = Ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yc(e))
  )
    Xc(t, n);
  else if (((n = kc(e, t, n, r)), n !== null)) {
    var i = me();
    Ve(n, e, r, i), Qc(n, t, r);
  }
}
function Xp(e, t, n) {
  var r = Ct(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yc(e)) Xc(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          o = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), He(o, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), po(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = kc(e, t, i, r)),
      n !== null && ((i = me()), Ve(n, e, r, i), Qc(n, t, r));
  }
}
function Yc(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Xc(e, t) {
  qn = ji = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Qc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zs(e, n);
  }
}
var Pi = {
    readContext: Oe,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  Qp = {
    readContext: Oe,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Oe,
    useEffect: za,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ri(4194308, 4, $c.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ri(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ri(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Yp.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Na,
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = Na(!1),
        t = e[0];
      return (e = Gp.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        i = We();
      if (G) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(L(349));
        Gt & 30 || Ic(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        za(Oc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        wr(9, bc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = le.identifierPrefix;
      if (G) {
        var n = tt,
          r = et;
        (n = (r & ~(1 << (32 - $e(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = gr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Wp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Kp = {
    readContext: Oe,
    useCallback: Hc,
    useContext: Oe,
    useEffect: So,
    useImperativeHandle: Vc,
    useInsertionEffect: Bc,
    useLayoutEffect: Fc,
    useMemo: Uc,
    useReducer: Tl,
    useRef: Ac,
    useState: function () {
      return Tl(yr);
    },
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      var t = Re();
      return Wc(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Tl(yr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Nc,
    useSyncExternalStore: zc,
    useId: Gc,
    unstable_isNewReconciler: !1,
  },
  Jp = {
    readContext: Oe,
    useCallback: Hc,
    useContext: Oe,
    useEffect: So,
    useImperativeHandle: Vc,
    useInsertionEffect: Bc,
    useLayoutEffect: Fc,
    useMemo: Uc,
    useReducer: jl,
    useRef: Ac,
    useState: function () {
      return jl(yr);
    },
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      var t = Re();
      return ne === null ? (t.memoizedState = e) : Wc(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(yr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Nc,
    useSyncExternalStore: zc,
    useId: Gc,
    unstable_isNewReconciler: !1,
  };
function Tn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Tf(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Pl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ws(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zp = typeof WeakMap == "function" ? WeakMap : Map;
function Kc(e, t, n) {
  (n = nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Li || ((Li = !0), (Ls = r)), ws(e, t);
    }),
    n
  );
}
function Jc(e, t, n) {
  (n = nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ws(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ws(e, t),
          typeof r != "function" &&
            (Et === null ? (Et = new Set([this])) : Et.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Ia(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zp();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = fh.bind(null, e, t, n)), t.then(e, e));
}
function ba(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Oa(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = nt(-1, 1)), (t.tag = 2), St(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qp = ot.ReactCurrentOwner,
  we = !1;
function he(e, t, n, r) {
  t.child = e === null ? Lc(t, null, n, r) : Cn(t, e.child, n, r);
}
function Ra(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    yn(t, i),
    (r = wo(e, t, n, r, l, i)),
    (n = xo()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        st(e, t, i))
      : (G && n && so(t), (t.flags |= 1), he(e, t, r, i), t.child)
  );
}
function Da(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !_o(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Zc(e, t, l, r, i))
      : ((e = oi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : dr), n(s, r) && e.ref === t.ref)
    )
      return st(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = kt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Zc(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (dr(l, r) && e.ref === t.ref)
      if (((we = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (we = !0);
      else return (t.lanes = e.lanes), st(e, t, i);
  }
  return xs(e, t, n, r, i);
}
function qc(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(pn, Ce),
        (Ce |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(pn, Ce),
          (Ce |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        V(pn, Ce),
        (Ce |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(pn, Ce),
      (Ce |= r);
  return he(e, t, i, n), t.child;
}
function ed(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function xs(e, t, n, r, i) {
  var l = Se(n) ? Ut : fe.current;
  return (
    (l = Sn(t, l)),
    yn(t, i),
    (n = wo(e, t, n, r, l, i)),
    (r = xo()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        st(e, t, i))
      : (G && r && so(t), (t.flags |= 1), he(e, t, n, i), t.child)
  );
}
function Aa(e, t, n, r, i) {
  if (Se(n)) {
    var l = !0;
    wi(t);
  } else l = !1;
  if ((yn(t, i), t.stateNode === null))
    ii(e, t), Pc(t, n, r), ys(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      o = t.memoizedProps;
    s.props = o;
    var a = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Oe(c))
      : ((c = Se(n) ? Ut : fe.current), (c = Sn(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== r || a !== c) && La(t, s, r, c)),
      (ct = !1);
    var v = t.memoizedState;
    (s.state = v),
      ki(t, r, s, i),
      (a = t.memoizedState),
      o !== r || v !== a || xe.current || ct
        ? (typeof h == "function" && (gs(t, n, h, r), (a = t.memoizedState)),
          (o = ct || Ma(t, n, o, r, v, a, c))
            ? (m ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = c),
          (r = o))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Tc(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : Ae(t.type, o)),
      (s.props = c),
      (m = t.pendingProps),
      (v = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Oe(a))
        : ((a = Se(n) ? Ut : fe.current), (a = Sn(t, a)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== m || v !== a) && La(t, s, r, a)),
      (ct = !1),
      (v = t.memoizedState),
      (s.state = v),
      ki(t, r, s, i);
    var x = t.memoizedState;
    o !== m || v !== x || xe.current || ct
      ? (typeof g == "function" && (gs(t, n, g, r), (x = t.memoizedState)),
        (c = ct || Ma(t, n, c, r, v, x, a) || !1)
          ? (h ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, x, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, x, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (o === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = a),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (o === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ss(e, t, n, r, l, i);
}
function Ss(e, t, n, r, i, l) {
  ed(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Ca(t, n, !1), st(e, t, l);
  (r = t.stateNode), (qp.current = t);
  var o =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Cn(t, e.child, null, l)), (t.child = Cn(t, null, o, l)))
      : he(e, t, o, l),
    (t.memoizedState = r.state),
    i && Ca(t, n, !0),
    t.child
  );
}
function td(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ea(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ea(e, t.context, !1),
    mo(e, t.containerInfo);
}
function Ba(e, t, n, r, i) {
  return En(), ao(i), (t.flags |= 256), he(e, t, n, r), t.child;
}
var Es = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nd(e, t, n) {
  var r = t.pendingProps,
    i = Y.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    o;
  if (
    ((o = s) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    V(Y, i & 1),
    e === null)
  )
    return (
      ms(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = Ki(s, r, 0, null)),
              (e = Vt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Cs(n)),
              (t.memoizedState = Es),
              e)
            : Co(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return eh(e, t, s, r, o, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (o = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = kt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (l = kt(o, l)) : ((l = Vt(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Cs(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Es),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = kt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Co(e, t) {
  return (
    (t = Ki({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ur(e, t, n, r) {
  return (
    r !== null && ao(r),
    Cn(t, e.child, null, n),
    (e = Co(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function eh(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Pl(Error(L(422)))), Ur(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = Ki({ mode: "visible", children: r.children }, i, 0, null)),
        (l = Vt(l, i, s, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Cn(t, e.child, null, s),
        (t.child.memoizedState = Cs(s)),
        (t.memoizedState = Es),
        l);
  if (!(t.mode & 1)) return Ur(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (l = Error(L(419))), (r = Pl(l, r, void 0)), Ur(e, t, s, r);
  }
  if (((o = (s & e.childLanes) !== 0), we || o)) {
    if (((r = le), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), lt(e, i), Ve(r, e, i, -1));
    }
    return Lo(), (r = Pl(Error(L(421)))), Ur(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ph.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Te = xt(i.nextSibling)),
      (je = t),
      (G = !0),
      (Fe = null),
      e !== null &&
        ((Ne[ze++] = et),
        (Ne[ze++] = tt),
        (Ne[ze++] = Wt),
        (et = e.id),
        (tt = e.overflow),
        (Wt = t)),
      (t = Co(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Fa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vs(e.return, t, n);
}
function Ml(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function rd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((he(e, t, r.children, n), (r = Y.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fa(e, n, t);
        else if (e.tag === 19) Fa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ti(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ml(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ti(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ml(t, !0, n, null, l);
        break;
      case "together":
        Ml(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ii(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function st(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = kt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function th(e, t, n) {
  switch (t.tag) {
    case 3:
      td(t), En();
      break;
    case 5:
      _c(t);
      break;
    case 1:
      Se(t.type) && wi(t);
      break;
    case 4:
      mo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      V(Ei, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? nd(e, t, n)
          : (V(Y, Y.current & 1),
            (e = st(e, t, n)),
            e !== null ? e.sibling : null);
      V(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return rd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        V(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), qc(e, t, n);
  }
  return st(e, t, n);
}
var id, ks, ld, sd;
id = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ks = function () {};
ld = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ft(Qe.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Gl(e, i)), (r = Gl(e, r)), (l = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = Ql(e, i)), (r = Ql(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = gi);
    }
    Jl(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var o = i[c];
          for (s in o) o.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ir.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((o = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && a !== o && (a != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (s in o)
              !o.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                o[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (l || (l = []), l.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (l = l || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (ir.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && H("scroll", e),
                  l || o === a || (l = []))
                : (l = l || []).push(c, a));
    }
    n && (l = l || []).push("style", n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
sd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bn(e, t) {
  if (!G)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function nh(e, t, n) {
  var r = t.pendingProps;
  switch ((oo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ce(t), null;
    case 1:
      return Se(t.type) && yi(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        kn(),
        U(xe),
        U(fe),
        go(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Fe !== null && (zs(Fe), (Fe = null)))),
        ks(e, t),
        ce(t),
        null
      );
    case 5:
      vo(t);
      var i = Ft(vr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ld(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return ce(t), null;
        }
        if (((e = Ft(Qe.current)), Vr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ge] = t), (r[hr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Yn.length; i++) H(Yn[i], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              Qo(r, l), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              Jo(r, l), H("invalid", r);
          }
          Jl(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var o = l[s];
              s === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (l.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, o, e),
                    (i = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (l.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, o, e),
                    (i = ["children", "" + o]))
                : ir.hasOwnProperty(s) &&
                  o != null &&
                  s === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              Ir(r), Ko(r, l, !0);
              break;
            case "textarea":
              Ir(r), Zo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = gi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Iu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ge] = t),
            (e[hr] = r),
            id(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Zl(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Yn.length; i++) H(Yn[i], e);
                i = r;
                break;
              case "source":
                H("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (i = r);
                break;
              case "details":
                H("toggle", e), (i = r);
                break;
              case "input":
                Qo(e, r), (i = Gl(e, r)), H("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                Jo(e, r), (i = Ql(e, r)), H("invalid", e);
                break;
              default:
                i = r;
            }
            Jl(n, i), (o = i);
            for (l in o)
              if (o.hasOwnProperty(l)) {
                var a = o[l];
                l === "style"
                  ? Ru(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && bu(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && lr(e, a)
                    : typeof a == "number" && lr(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (ir.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && H("scroll", e)
                      : a != null && Gs(e, l, a, s));
              }
            switch (n) {
              case "input":
                Ir(e), Ko(e, r, !1);
                break;
              case "textarea":
                Ir(e), Zo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + jt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? hn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      hn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = gi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) sd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Ft(vr.current)), Ft(Qe.current), Vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ge] = t),
            (l = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                $r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ge] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        (U(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Te !== null && t.mode & 1 && !(t.flags & 128))
          Cc(), En(), (t.flags |= 98560), (l = !1);
        else if (((l = Vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(L(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(L(317));
            l[Ge] = t;
          } else
            En(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (l = !1);
        } else Fe !== null && (zs(Fe), (Fe = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? re === 0 && (re = 3) : Lo())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        kn(), ks(e, t), e === null && fr(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return fo(t.type._context), ce(t), null;
    case 17:
      return Se(t.type) && yi(), ce(t), null;
    case 19:
      if ((U(Y), (l = t.memoizedState), l === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) Bn(l, !1);
        else {
          if (re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ti(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Bn(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return V(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Z() > jn &&
            ((t.flags |= 128), (r = !0), Bn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ti(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !G)
            )
              return ce(t), null;
          } else
            2 * Z() - l.renderingStartTime > jn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Z()),
          (t.sibling = null),
          (n = Y.current),
          V(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        Mo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ce & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function rh(e, t) {
  switch ((oo(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && yi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        kn(),
        U(xe),
        U(fe),
        go(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return vo(t), null;
    case 13:
      if ((U(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(L(340));
        En();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(Y), null;
    case 4:
      return kn(), null;
    case 10:
      return fo(t.type._context), null;
    case 22:
    case 23:
      return Mo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wr = !1,
  de = !1,
  ih = typeof WeakSet == "function" ? WeakSet : Set,
  b = null;
function fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function Ts(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var $a = !1;
function lh(e, t) {
  if (((as = hi), (e = cc()), lo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            o = -1,
            a = -1,
            c = 0,
            h = 0,
            m = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              m !== n || (i !== 0 && m.nodeType !== 3) || (o = s + i),
                m !== l || (r !== 0 && m.nodeType !== 3) || (a = s + r),
                m.nodeType === 3 && (s += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (v = m), (m = g);
            for (;;) {
              if (m === e) break t;
              if (
                (v === n && ++c === i && (o = s),
                v === l && ++h === r && (a = s),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = v), (v = m.parentNode);
            }
            m = g;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (us = { focusedElem: e, selectionRange: n }, hi = !1, b = t; b !== null; )
    if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (b = e);
    else
      for (; b !== null; ) {
        t = b;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    S = x.memoizedState,
                    f = t.stateNode,
                    u = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ae(t.type, w),
                      S,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (y) {
          K(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (b = e);
          break;
        }
        b = t.return;
      }
  return (x = $a), ($a = !1), x;
}
function er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && Ts(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Xi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function js(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function od(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), od(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ge], delete t[hr], delete t[fs], delete t[$p], delete t[Vp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ad(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Va(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ad(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ps(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = gi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ps(e, t, n), e = e.sibling; e !== null; ) Ps(e, t, n), (e = e.sibling);
}
function Ms(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ms(e, t, n), e = e.sibling; e !== null; ) Ms(e, t, n), (e = e.sibling);
}
var se = null,
  Be = !1;
function at(e, t, n) {
  for (n = n.child; n !== null; ) ud(e, t, n), (n = n.sibling);
}
function ud(e, t, n) {
  if (Xe && typeof Xe.onCommitFiberUnmount == "function")
    try {
      Xe.onCommitFiberUnmount(Fi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      de || fn(n, t);
    case 6:
      var r = se,
        i = Be;
      (se = null),
        at(e, t, n),
        (se = r),
        (Be = i),
        se !== null &&
          (Be
            ? ((e = se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null &&
        (Be
          ? ((e = se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Sl(e.parentNode, n)
              : e.nodeType === 1 && Sl(e, n),
            ur(e))
          : Sl(se, n.stateNode));
      break;
    case 4:
      (r = se),
        (i = Be),
        (se = n.stateNode.containerInfo),
        (Be = !0),
        at(e, t, n),
        (se = r),
        (Be = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !de &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && Ts(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      at(e, t, n);
      break;
    case 1:
      if (
        !de &&
        (fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          K(n, t, o);
        }
      at(e, t, n);
      break;
    case 21:
      at(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((de = (r = de) || n.memoizedState !== null), at(e, t, n), (de = r))
        : at(e, t, n);
      break;
    default:
      at(e, t, n);
  }
}
function Ha(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ih()),
      t.forEach(function (r) {
        var i = hh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          o = s;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (se = o.stateNode), (Be = !1);
              break e;
            case 3:
              (se = o.stateNode.containerInfo), (Be = !0);
              break e;
            case 4:
              (se = o.stateNode.containerInfo), (Be = !0);
              break e;
          }
          o = o.return;
        }
        if (se === null) throw Error(L(160));
        ud(l, s, i), (se = null), (Be = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (c) {
        K(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cd(t, e), (t = t.sibling);
}
function cd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((De(t, e), Ue(e), r & 4)) {
        try {
          er(3, e, e.return), Xi(3, e);
        } catch (w) {
          K(e, e.return, w);
        }
        try {
          er(5, e, e.return);
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 1:
      De(t, e), Ue(e), r & 512 && n !== null && fn(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        Ue(e),
        r & 512 && n !== null && fn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          lr(i, "");
        } catch (w) {
          K(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            o === "input" && l.type === "radio" && l.name != null && Nu(i, l),
              Zl(o, s);
            var c = Zl(o, l);
            for (s = 0; s < a.length; s += 2) {
              var h = a[s],
                m = a[s + 1];
              h === "style"
                ? Ru(i, m)
                : h === "dangerouslySetInnerHTML"
                ? bu(i, m)
                : h === "children"
                ? lr(i, m)
                : Gs(i, h, m, c);
            }
            switch (o) {
              case "input":
                Yl(i, l);
                break;
              case "textarea":
                zu(i, l);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var g = l.value;
                g != null
                  ? hn(i, !!l.multiple, g, !1)
                  : v !== !!l.multiple &&
                    (l.defaultValue != null
                      ? hn(i, !!l.multiple, l.defaultValue, !0)
                      : hn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[hr] = l;
          } catch (w) {
            K(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((De(t, e), Ue(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ur(t.containerInfo);
        } catch (w) {
          K(e, e.return, w);
        }
      break;
    case 4:
      De(t, e), Ue(e);
      break;
    case 13:
      De(t, e),
        Ue(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (jo = Z())),
        r & 4 && Ha(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((de = (c = de) || h), De(t, e), (de = c)) : De(t, e),
        Ue(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (b = e, h = e.child; h !== null; ) {
            for (m = b = h; b !== null; ) {
              switch (((v = b), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  er(4, v, v.return);
                  break;
                case 1:
                  fn(v, v.return);
                  var x = v.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      K(r, n, w);
                    }
                  }
                  break;
                case 5:
                  fn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Wa(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (b = g)) : Wa(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (i = m.stateNode),
                  c
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((o = m.stateNode),
                      (a = m.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (o.style.display = Ou("display", s)));
              } catch (w) {
                K(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (w) {
                K(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      De(t, e), Ue(e), r & 4 && Ha(e);
      break;
    case 21:
      break;
    default:
      De(t, e), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ad(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (lr(i, ""), (r.flags &= -33));
          var l = Va(e);
          Ms(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            o = Va(e);
          Ps(e, o, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      K(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sh(e, t, n) {
  (b = e), dd(e);
}
function dd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; b !== null; ) {
    var i = b,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Wr;
      if (!s) {
        var o = i.alternate,
          a = (o !== null && o.memoizedState !== null) || de;
        o = Wr;
        var c = de;
        if (((Wr = s), (de = a) && !c))
          for (b = i; b !== null; )
            (s = b),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Ga(i)
                : a !== null
                ? ((a.return = s), (b = a))
                : Ga(i);
        for (; l !== null; ) (b = l), dd(l), (l = l.sibling);
        (b = i), (Wr = o), (de = c);
      }
      Ua(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (b = l)) : Ua(e);
  }
}
function Ua(e) {
  for (; b !== null; ) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || Xi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !de)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ae(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && Pa(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Pa(t, s, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && ur(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        de || (t.flags & 512 && js(t));
      } catch (v) {
        K(t, t.return, v);
      }
    }
    if (t === e) {
      b = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function Wa(e) {
  for (; b !== null; ) {
    var t = b;
    if (t === e) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function Ga(e) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xi(4, t);
          } catch (a) {
            K(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              K(t, i, a);
            }
          }
          var l = t.return;
          try {
            js(t);
          } catch (a) {
            K(t, l, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            js(t);
          } catch (a) {
            K(t, s, a);
          }
      }
    } catch (a) {
      K(t, t.return, a);
    }
    if (t === e) {
      b = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (b = o);
      break;
    }
    b = t.return;
  }
}
var oh = Math.ceil,
  Mi = ot.ReactCurrentDispatcher,
  ko = ot.ReactCurrentOwner,
  be = ot.ReactCurrentBatchConfig,
  B = 0,
  le = null,
  te = null,
  oe = 0,
  Ce = 0,
  pn = Lt(0),
  re = 0,
  xr = null,
  Yt = 0,
  Qi = 0,
  To = 0,
  tr = null,
  ye = null,
  jo = 0,
  jn = 1 / 0,
  Ze = null,
  Li = !1,
  Ls = null,
  Et = null,
  Gr = !1,
  ht = null,
  _i = 0,
  nr = 0,
  _s = null,
  li = -1,
  si = 0;
function me() {
  return B & 6 ? Z() : li !== -1 ? li : (li = Z());
}
function Ct(e) {
  return e.mode & 1
    ? B & 2 && oe !== 0
      ? oe & -oe
      : Up.transition !== null
      ? (si === 0 && (si = Xu()), si)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tc(e.type))),
        e)
    : 1;
}
function Ve(e, t, n, r) {
  if (50 < nr) throw ((nr = 0), (_s = null), Error(L(185)));
  Cr(e, n, r),
    (!(B & 2) || e !== le) &&
      (e === le && (!(B & 2) && (Qi |= n), re === 4 && ft(e, oe)),
      Ee(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((jn = Z() + 500), Wi && _t()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Uf(e, t);
  var r = pi(e, e === le ? oe : 0);
  if (r === 0)
    n !== null && ta(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ta(n), t === 1))
      e.tag === 0 ? Hp(Ya.bind(null, e)) : xc(Ya.bind(null, e)),
        Bp(function () {
          !(B & 6) && _t();
        }),
        (n = null);
    else {
      switch (Qu(r)) {
        case 1:
          n = Js;
          break;
        case 4:
          n = Gu;
          break;
        case 16:
          n = fi;
          break;
        case 536870912:
          n = Yu;
          break;
        default:
          n = fi;
      }
      n = wd(n, fd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function fd(e, t) {
  if (((li = -1), (si = 0), B & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (wn() && e.callbackNode !== n) return null;
  var r = pi(e, e === le ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ni(e, r);
  else {
    t = r;
    var i = B;
    B |= 2;
    var l = hd();
    (le !== e || oe !== t) && ((Ze = null), (jn = Z() + 500), $t(e, t));
    do
      try {
        ch();
        break;
      } catch (o) {
        pd(e, o);
      }
    while (1);
    co(),
      (Mi.current = l),
      (B = i),
      te !== null ? (t = 0) : ((le = null), (oe = 0), (t = re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = rs(e)), i !== 0 && ((r = i), (t = Ns(e, i)))), t === 1)
    )
      throw ((n = xr), $t(e, 0), ft(e, r), Ee(e, Z()), n);
    if (t === 6) ft(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !ah(i) &&
          ((t = Ni(e, r)),
          t === 2 && ((l = rs(e)), l !== 0 && ((r = l), (t = Ns(e, l)))),
          t === 1))
      )
        throw ((n = xr), $t(e, 0), ft(e, r), Ee(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Rt(e, ye, Ze);
          break;
        case 3:
          if (
            (ft(e, r), (r & 130023424) === r && ((t = jo + 500 - Z()), 10 < t))
          ) {
            if (pi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ds(Rt.bind(null, e, ye, Ze), t);
            break;
          }
          Rt(e, ye, Ze);
          break;
        case 4:
          if ((ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - $e(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * oh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ds(Rt.bind(null, e, ye, Ze), r);
            break;
          }
          Rt(e, ye, Ze);
          break;
        case 5:
          Rt(e, ye, Ze);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Ee(e, Z()), e.callbackNode === n ? fd.bind(null, e) : null;
}
function Ns(e, t) {
  var n = tr;
  return (
    e.current.memoizedState.isDehydrated && ($t(e, t).flags |= 256),
    (e = Ni(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && zs(t)),
    e
  );
}
function zs(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function ah(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!He(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ft(e, t) {
  for (
    t &= ~To,
      t &= ~Qi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $e(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ya(e) {
  if (B & 6) throw Error(L(327));
  wn();
  var t = pi(e, 0);
  if (!(t & 1)) return Ee(e, Z()), null;
  var n = Ni(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = rs(e);
    r !== 0 && ((t = r), (n = Ns(e, r)));
  }
  if (n === 1) throw ((n = xr), $t(e, 0), ft(e, t), Ee(e, Z()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rt(e, ye, Ze),
    Ee(e, Z()),
    null
  );
}
function Po(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((jn = Z() + 500), Wi && _t());
  }
}
function Xt(e) {
  ht !== null && ht.tag === 0 && !(B & 6) && wn();
  var t = B;
  B |= 1;
  var n = be.transition,
    r = F;
  try {
    if (((be.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (be.transition = n), (B = t), !(B & 6) && _t();
  }
}
function Mo() {
  (Ce = pn.current), U(pn);
}
function $t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ap(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((oo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && yi();
          break;
        case 3:
          kn(), U(xe), U(fe), go();
          break;
        case 5:
          vo(r);
          break;
        case 4:
          kn();
          break;
        case 13:
          U(Y);
          break;
        case 19:
          U(Y);
          break;
        case 10:
          fo(r.type._context);
          break;
        case 22:
        case 23:
          Mo();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (te = e = kt(e.current, null)),
    (oe = Ce = t),
    (re = 0),
    (xr = null),
    (To = Qi = Yt = 0),
    (ye = tr = null),
    Bt !== null)
  ) {
    for (t = 0; t < Bt.length; t++)
      if (((n = Bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Bt = null;
  }
  return e;
}
function pd(e, t) {
  do {
    var n = te;
    try {
      if ((co(), (ni.current = Pi), ji)) {
        for (var r = X.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ji = !1;
      }
      if (
        ((Gt = 0),
        (ie = ne = X = null),
        (qn = !1),
        (gr = 0),
        (ko.current = null),
        n === null || n.return === null)
      ) {
        (re = 1), (xr = t), (te = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          o = n,
          a = t;
        if (
          ((t = oe),
          (o.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            h = o,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = h.alternate;
            v
              ? ((h.updateQueue = v.updateQueue),
                (h.memoizedState = v.memoizedState),
                (h.lanes = v.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = ba(s);
          if (g !== null) {
            (g.flags &= -257),
              Oa(g, s, o, l, t),
              g.mode & 1 && Ia(l, c, t),
              (t = g),
              (a = c);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ia(l, c, t), Lo();
              break e;
            }
            a = Error(L(426));
          }
        } else if (G && o.mode & 1) {
          var S = ba(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Oa(S, s, o, l, t),
              ao(Tn(a, o));
            break e;
          }
        }
        (l = a = Tn(a, o)),
          re !== 4 && (re = 2),
          tr === null ? (tr = [l]) : tr.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = Kc(l, a, t);
              ja(l, f);
              break e;
            case 1:
              o = a;
              var u = l.type,
                d = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Et === null || !Et.has(d))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var y = Jc(l, o, t);
                ja(l, y);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      vd(n);
    } catch (C) {
      (t = C), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function hd() {
  var e = Mi.current;
  return (Mi.current = Pi), e === null ? Pi : e;
}
function Lo() {
  (re === 0 || re === 3 || re === 2) && (re = 4),
    le === null || (!(Yt & 268435455) && !(Qi & 268435455)) || ft(le, oe);
}
function Ni(e, t) {
  var n = B;
  B |= 2;
  var r = hd();
  (le !== e || oe !== t) && ((Ze = null), $t(e, t));
  do
    try {
      uh();
      break;
    } catch (i) {
      pd(e, i);
    }
  while (1);
  if ((co(), (B = n), (Mi.current = r), te !== null)) throw Error(L(261));
  return (le = null), (oe = 0), re;
}
function uh() {
  for (; te !== null; ) md(te);
}
function ch() {
  for (; te !== null && !Of(); ) md(te);
}
function md(e) {
  var t = yd(e.alternate, e, Ce);
  (e.memoizedProps = e.pendingProps),
    t === null ? vd(e) : (te = t),
    (ko.current = null);
}
function vd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = rh(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (re = 6), (te = null);
        return;
      }
    } else if (((n = nh(n, t, Ce)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Rt(e, t, n) {
  var r = F,
    i = be.transition;
  try {
    (be.transition = null), (F = 1), dh(e, t, n, r);
  } finally {
    (be.transition = i), (F = r);
  }
  return null;
}
function dh(e, t, n, r) {
  do wn();
  while (ht !== null);
  if (B & 6) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Wf(e, l),
    e === le && ((te = le = null), (oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Gr ||
      ((Gr = !0),
      wd(fi, function () {
        return wn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = be.transition), (be.transition = null);
    var s = F;
    F = 1;
    var o = B;
    (B |= 4),
      (ko.current = null),
      lh(e, n),
      cd(n, e),
      Np(us),
      (hi = !!as),
      (us = as = null),
      (e.current = n),
      sh(n),
      Rf(),
      (B = o),
      (F = s),
      (be.transition = l);
  } else e.current = n;
  if (
    (Gr && ((Gr = !1), (ht = e), (_i = i)),
    (l = e.pendingLanes),
    l === 0 && (Et = null),
    Bf(n.stateNode),
    Ee(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Li) throw ((Li = !1), (e = Ls), (Ls = null), e);
  return (
    _i & 1 && e.tag !== 0 && wn(),
    (l = e.pendingLanes),
    l & 1 ? (e === _s ? nr++ : ((nr = 0), (_s = e))) : (nr = 0),
    _t(),
    null
  );
}
function wn() {
  if (ht !== null) {
    var e = Qu(_i),
      t = be.transition,
      n = F;
    try {
      if (((be.transition = null), (F = 16 > e ? 16 : e), ht === null))
        var r = !1;
      else {
        if (((e = ht), (ht = null), (_i = 0), B & 6)) throw Error(L(331));
        var i = B;
        for (B |= 4, b = e.current; b !== null; ) {
          var l = b,
            s = l.child;
          if (b.flags & 16) {
            var o = l.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var c = o[a];
                for (b = c; b !== null; ) {
                  var h = b;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      er(8, h, l);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (b = m);
                  else
                    for (; b !== null; ) {
                      h = b;
                      var v = h.sibling,
                        g = h.return;
                      if ((od(h), h === c)) {
                        b = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = g), (b = v);
                        break;
                      }
                      b = g;
                    }
                }
              }
              var x = l.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var S = w.sibling;
                    (w.sibling = null), (w = S);
                  } while (w !== null);
                }
              }
              b = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (b = s);
          else
            e: for (; b !== null; ) {
              if (((l = b), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    er(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (b = f);
                break e;
              }
              b = l.return;
            }
        }
        var u = e.current;
        for (b = u; b !== null; ) {
          s = b;
          var d = s.child;
          if (s.subtreeFlags & 2064 && d !== null) (d.return = s), (b = d);
          else
            e: for (s = u; b !== null; ) {
              if (((o = b), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi(9, o);
                  }
                } catch (C) {
                  K(o, o.return, C);
                }
              if (o === s) {
                b = null;
                break e;
              }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (b = y);
                break e;
              }
              b = o.return;
            }
        }
        if (
          ((B = i), _t(), Xe && typeof Xe.onPostCommitFiberRoot == "function")
        )
          try {
            Xe.onPostCommitFiberRoot(Fi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (be.transition = t);
    }
  }
  return !1;
}
function Xa(e, t, n) {
  (t = Tn(n, t)),
    (t = Kc(e, t, 1)),
    (e = St(e, t, 1)),
    (t = me()),
    e !== null && (Cr(e, 1, t), Ee(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) Xa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Et === null || !Et.has(r)))
        ) {
          (e = Tn(n, e)),
            (e = Jc(t, e, 1)),
            (t = St(t, e, 1)),
            (e = me()),
            t !== null && (Cr(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (oe & n) === n &&
      (re === 4 || (re === 3 && (oe & 130023424) === oe && 500 > Z() - jo)
        ? $t(e, 0)
        : (To |= n)),
    Ee(e, t);
}
function gd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Rr), (Rr <<= 1), !(Rr & 130023424) && (Rr = 4194304))
      : (t = 1));
  var n = me();
  (e = lt(e, t)), e !== null && (Cr(e, t, n), Ee(e, n));
}
function ph(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gd(e, n);
}
function hh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), gd(e, n);
}
var yd;
yd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) we = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (we = !1), th(e, t, n);
      we = !!(e.flags & 131072);
    }
  else (we = !1), G && t.flags & 1048576 && Sc(t, Si, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ii(e, t), (e = t.pendingProps);
      var i = Sn(t, fe.current);
      yn(t, n), (i = wo(null, t, r, e, i, n));
      var l = xo();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(r) ? ((l = !0), wi(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ho(t),
            (i.updater = Gi),
            (t.stateNode = i),
            (i._reactInternals = t),
            ys(t, r, e, n),
            (t = Ss(null, t, r, !0, l, n)))
          : ((t.tag = 0), G && l && so(t), he(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ii(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = vh(r)),
          (e = Ae(r, e)),
          i)
        ) {
          case 0:
            t = xs(null, t, r, e, n);
            break e;
          case 1:
            t = Aa(null, t, r, e, n);
            break e;
          case 11:
            t = Ra(null, t, r, e, n);
            break e;
          case 14:
            t = Da(null, t, r, Ae(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        xs(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        Aa(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((td(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          Tc(e, t),
          ki(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = Tn(Error(L(423)), t)), (t = Ba(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Tn(Error(L(424)), t)), (t = Ba(e, t, r, n, i));
            break e;
          } else
            for (
              Te = xt(t.stateNode.containerInfo.firstChild),
                je = t,
                G = !0,
                Fe = null,
                n = Lc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((En(), r === i)) {
            t = st(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _c(t),
        e === null && ms(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        cs(r, i) ? (s = null) : l !== null && cs(r, l) && (t.flags |= 32),
        ed(e, t),
        he(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ms(t), null;
    case 13:
      return nd(e, t, n);
    case 4:
      return (
        mo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cn(t, null, r, n)) : he(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        Ra(e, t, r, i, n)
      );
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          V(Ei, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (He(l.value, s)) {
            if (l.children === i.children && !xe.current) {
              t = st(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var o = l.dependencies;
              if (o !== null) {
                s = l.child;
                for (var a = o.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = nt(-1, n & -n)), (a.tag = 2);
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (c.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      vs(l.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(L(341));
                (s.lanes |= n),
                  (o = s.alternate),
                  o !== null && (o.lanes |= n),
                  vs(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        he(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        yn(t, n),
        (i = Oe(i)),
        (r = r(i)),
        (t.flags |= 1),
        he(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ae(r, t.pendingProps)),
        (i = Ae(r.type, i)),
        Da(e, t, r, i, n)
      );
    case 15:
      return Zc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        ii(e, t),
        (t.tag = 1),
        Se(r) ? ((e = !0), wi(t)) : (e = !1),
        yn(t, n),
        Pc(t, r, i),
        ys(t, r, i, n),
        Ss(null, t, r, !0, e, n)
      );
    case 19:
      return rd(e, t, n);
    case 22:
      return qc(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function wd(e, t) {
  return Wu(e, t);
}
function mh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ie(e, t, n, r) {
  return new mh(e, t, n, r);
}
function _o(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vh(e) {
  if (typeof e == "function") return _o(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xs)) return 11;
    if (e === Qs) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function oi(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) _o(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case nn:
        return Vt(n.children, i, l, t);
      case Ys:
        (s = 8), (i |= 8);
        break;
      case Vl:
        return (
          (e = Ie(12, n, t, i | 2)), (e.elementType = Vl), (e.lanes = l), e
        );
      case Hl:
        return (e = Ie(13, n, t, i)), (e.elementType = Hl), (e.lanes = l), e;
      case Ul:
        return (e = Ie(19, n, t, i)), (e.elementType = Ul), (e.lanes = l), e;
      case Mu:
        return Ki(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ju:
              s = 10;
              break e;
            case Pu:
              s = 9;
              break e;
            case Xs:
              s = 11;
              break e;
            case Qs:
              s = 14;
              break e;
            case ut:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ie(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Vt(e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e;
}
function Ki(e, t, n, r) {
  return (
    (e = Ie(22, e, r, t)),
    (e.elementType = Mu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ll(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function _l(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gh(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = cl(0)),
    (this.expirationTimes = cl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function No(e, t, n, r, i, l, s, o, a) {
  return (
    (e = new gh(e, t, n, o, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ie(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ho(l),
    e
  );
}
function yh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xd(e) {
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (Jt(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Se(n)) return wc(e, n, t);
  }
  return t;
}
function Sd(e, t, n, r, i, l, s, o, a) {
  return (
    (e = No(n, r, !0, e, i, l, s, o, a)),
    (e.context = xd(null)),
    (n = e.current),
    (r = me()),
    (i = Ct(n)),
    (l = nt(r, i)),
    (l.callback = t ?? null),
    St(n, l, i),
    (e.current.lanes = i),
    Cr(e, i, r),
    Ee(e, r),
    e
  );
}
function Ji(e, t, n, r) {
  var i = t.current,
    l = me(),
    s = Ct(i);
  return (
    (n = xd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nt(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = St(i, t, s)),
    e !== null && (Ve(e, i, s, l), ti(e, i, s)),
    s
  );
}
function zi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zo(e, t) {
  Qa(e, t), (e = e.alternate) && Qa(e, t);
}
function wh() {
  return null;
}
var Ed =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Io(e) {
  this._internalRoot = e;
}
Zi.prototype.render = Io.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Ji(e, t, null, null);
};
Zi.prototype.unmount = Io.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xt(function () {
      Ji(null, e, null, null);
    }),
      (t[it] = null);
  }
};
function Zi(e) {
  this._internalRoot = e;
}
Zi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dt.length && t !== 0 && t < dt[n].priority; n++);
    dt.splice(n, 0, e), n === 0 && ec(e);
  }
};
function bo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ka() {}
function xh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var c = zi(s);
        l.call(c);
      };
    }
    var s = Sd(t, r, e, 0, null, !1, !1, "", Ka);
    return (
      (e._reactRootContainer = s),
      (e[it] = s.current),
      fr(e.nodeType === 8 ? e.parentNode : e),
      Xt(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var c = zi(a);
      o.call(c);
    };
  }
  var a = No(e, 0, !1, null, null, !1, !1, "", Ka);
  return (
    (e._reactRootContainer = a),
    (e[it] = a.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    Xt(function () {
      Ji(t, a, n, r);
    }),
    a
  );
}
function el(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var a = zi(s);
        o.call(a);
      };
    }
    Ji(t, s, e, i);
  } else s = xh(n, t, e, i, r);
  return zi(s);
}
Ku = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes);
        n !== 0 &&
          (Zs(t, n | 1), Ee(t, Z()), !(B & 6) && ((jn = Z() + 500), _t()));
      }
      break;
    case 13:
      Xt(function () {
        var r = lt(e, 1);
        if (r !== null) {
          var i = me();
          Ve(r, e, 1, i);
        }
      }),
        zo(e, 1);
  }
};
qs = function (e) {
  if (e.tag === 13) {
    var t = lt(e, 134217728);
    if (t !== null) {
      var n = me();
      Ve(t, e, 134217728, n);
    }
    zo(e, 134217728);
  }
};
Ju = function (e) {
  if (e.tag === 13) {
    var t = Ct(e),
      n = lt(e, t);
    if (n !== null) {
      var r = me();
      Ve(n, e, t, r);
    }
    zo(e, t);
  }
};
Zu = function () {
  return F;
};
qu = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
es = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Yl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ui(r);
            if (!i) throw Error(L(90));
            _u(r), Yl(r, i);
          }
        }
      }
      break;
    case "textarea":
      zu(e, n);
      break;
    case "select":
      (t = n.value), t != null && hn(e, !!n.multiple, t, !1);
  }
};
Bu = Po;
Fu = Xt;
var Sh = { usingClientEntryPoint: !1, Events: [Tr, on, Ui, Du, Au, Po] },
  Fn = {
    findFiberByHostInstance: At,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Eh = {
    bundleType: Fn.bundleType,
    version: Fn.version,
    rendererPackageName: Fn.rendererPackageName,
    rendererConfig: Fn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Hu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fn.findFiberByHostInstance || wh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yr.isDisabled && Yr.supportsFiber)
    try {
      (Fi = Yr.inject(Eh)), (Xe = Yr);
    } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sh;
Me.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bo(t)) throw Error(L(200));
  return yh(e, t, null, n);
};
Me.createRoot = function (e, t) {
  if (!bo(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = Ed;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = No(e, 1, !1, null, null, n, !1, r, i)),
    (e[it] = t.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    new Io(t)
  );
};
Me.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Hu(t)), (e = e === null ? null : e.stateNode), e;
};
Me.flushSync = function (e) {
  return Xt(e);
};
Me.hydrate = function (e, t, n) {
  if (!qi(t)) throw Error(L(200));
  return el(null, e, t, !0, n);
};
Me.hydrateRoot = function (e, t, n) {
  if (!bo(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    s = Ed;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Sd(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[it] = t.current),
    fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Zi(t);
};
Me.render = function (e, t, n) {
  if (!qi(t)) throw Error(L(200));
  return el(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function (e) {
  if (!qi(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Xt(function () {
        el(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[it] = null);
        });
      }),
      !0)
    : !1;
};
Me.unstable_batchedUpdates = Po;
Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!qi(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return el(e, t, n, !1, r);
};
Me.version = "18.2.0-next-9e3b772b8-20220608";
function Cd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cd);
    } catch (e) {
      console.error(e);
    }
}
Cd(), (Su.exports = Me);
var Ch = Su.exports,
  Ja = Ch;
(Fl.createRoot = Ja.createRoot), (Fl.hydrateRoot = Ja.hydrateRoot);
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Sr() {
  return (
    (Sr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Sr.apply(this, arguments)
  );
}
var mt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(mt || (mt = {}));
const Za = "popstate";
function kh(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: l, search: s, hash: o } = r.location;
    return Is(
      "",
      { pathname: l, search: s, hash: o },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ii(i);
  }
  return jh(t, n, null, e);
}
function q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Oo(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Th() {
  return Math.random().toString(36).substr(2, 8);
}
function qa(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Is(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Sr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? _n(t) : t,
      { state: n, key: (t && t.key) || r || Th() },
    )
  );
}
function Ii(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function _n(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function jh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: l = !1 } = r,
    s = i.history,
    o = mt.Pop,
    a = null,
    c = h();
  c == null && ((c = 0), s.replaceState(Sr({}, s.state, { idx: c }), ""));
  function h() {
    return (s.state || { idx: null }).idx;
  }
  function m() {
    o = mt.Pop;
    let S = h(),
      f = S == null ? null : S - c;
    (c = S), a && a({ action: o, location: w.location, delta: f });
  }
  function v(S, f) {
    o = mt.Push;
    let u = Is(w.location, S, f);
    n && n(u, S), (c = h() + 1);
    let d = qa(u, c),
      y = w.createHref(u);
    try {
      s.pushState(d, "", y);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(y);
    }
    l && a && a({ action: o, location: w.location, delta: 1 });
  }
  function g(S, f) {
    o = mt.Replace;
    let u = Is(w.location, S, f);
    n && n(u, S), (c = h());
    let d = qa(u, c),
      y = w.createHref(u);
    s.replaceState(d, "", y),
      l && a && a({ action: o, location: w.location, delta: 0 });
  }
  function x(S) {
    let f = i.location.origin !== "null" ? i.location.origin : i.location.href,
      u = typeof S == "string" ? S : Ii(S);
    return (
      q(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          u,
      ),
      new URL(u, f)
    );
  }
  let w = {
    get action() {
      return o;
    },
    get location() {
      return e(i, s);
    },
    listen(S) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Za, m),
        (a = S),
        () => {
          i.removeEventListener(Za, m), (a = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: x,
    encodeLocation(S) {
      let f = x(S);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: v,
    replace: g,
    go(S) {
      return s.go(S);
    },
  };
  return w;
}
var eu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(eu || (eu = {}));
function Ph(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? _n(t) : t,
    i = Ro(r.pathname || "/", n);
  if (i == null) return null;
  let l = kd(e);
  Mh(l);
  let s = null;
  for (let o = 0; s == null && o < l.length; ++o) s = Dh(l[o], Fh(i));
  return s;
}
function kd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (l, s, o) => {
    let a = {
      relativePath: o === void 0 ? l.path || "" : o,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: s,
      route: l,
    };
    a.relativePath.startsWith("/") &&
      (q(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let c = Tt([r, a.relativePath]),
      h = n.concat(a);
    l.children &&
      l.children.length > 0 &&
      (q(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      kd(l.children, t, h, c)),
      !(l.path == null && !l.index) &&
        t.push({ path: c, score: Oh(c, l.index), routesMeta: h });
  };
  return (
    e.forEach((l, s) => {
      var o;
      if (l.path === "" || !((o = l.path) != null && o.includes("?"))) i(l, s);
      else for (let a of Td(l.path)) i(l, s, a);
    }),
    t
  );
}
function Td(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [l, ""] : [l];
  let s = Td(r.join("/")),
    o = [];
  return (
    o.push(...s.map((a) => (a === "" ? l : [l, a].join("/")))),
    i && o.push(...s),
    o.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Mh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Rh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Lh = /^:\w+$/,
  _h = 3,
  Nh = 2,
  zh = 1,
  Ih = 10,
  bh = -2,
  tu = (e) => e === "*";
function Oh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(tu) && (r += bh),
    t && (r += Nh),
    n
      .filter((i) => !tu(i))
      .reduce((i, l) => i + (Lh.test(l) ? _h : l === "" ? zh : Ih), r)
  );
}
function Rh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Dh(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    l = [];
  for (let s = 0; s < n.length; ++s) {
    let o = n[s],
      a = s === n.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      h = Ah(
        { path: o.relativePath, caseSensitive: o.caseSensitive, end: a },
        c,
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let m = o.route;
    l.push({
      params: r,
      pathname: Tt([i, h.pathname]),
      pathnameBase: Uh(Tt([i, h.pathnameBase])),
      route: m,
    }),
      h.pathnameBase !== "/" && (i = Tt([i, h.pathnameBase]));
  }
  return l;
}
function Ah(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Bh(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let l = i[0],
    s = l.replace(/(.)\/+$/, "$1"),
    o = i.slice(1);
  return {
    params: r.reduce((c, h, m) => {
      if (h === "*") {
        let v = o[m] || "";
        s = l.slice(0, l.length - v.length).replace(/(.)\/+$/, "$1");
      }
      return (c[h] = $h(o[m] || "", h)), c;
    }, {}),
    pathname: l,
    pathnameBase: s,
    pattern: e,
  };
}
function Bh(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Oo(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (s, o) => (r.push(o), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Fh(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Oo(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function $h(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Oo(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function Ro(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Vh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? _n(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Hh(n, t)) : t,
    search: Wh(r),
    hash: Gh(i),
  };
}
function Hh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Nl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Do(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Ao(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = _n(e))
    : ((i = Sr({}, e)),
      q(
        !i.pathname || !i.pathname.includes("?"),
        Nl("?", "pathname", "search", i),
      ),
      q(
        !i.pathname || !i.pathname.includes("#"),
        Nl("#", "pathname", "hash", i),
      ),
      q(!i.search || !i.search.includes("#"), Nl("#", "search", "hash", i)));
  let l = e === "" || i.pathname === "",
    s = l ? "/" : i.pathname,
    o;
  if (r || s == null) o = n;
  else {
    let m = t.length - 1;
    if (s.startsWith("..")) {
      let v = s.split("/");
      for (; v[0] === ".."; ) v.shift(), (m -= 1);
      i.pathname = v.join("/");
    }
    o = m >= 0 ? t[m] : "/";
  }
  let a = Vh(i, o),
    c = s && s !== "/" && s.endsWith("/"),
    h = (l || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (c || h) && (a.pathname += "/"), a;
}
const Tt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Uh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Wh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Gh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Yh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const jd = ["post", "put", "patch", "delete"];
new Set(jd);
const Xh = ["get", ...jd];
new Set(Xh);
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bi() {
  return (
    (bi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bi.apply(this, arguments)
  );
}
const Bo = M.createContext(null),
  Qh = M.createContext(null),
  Nn = M.createContext(null),
  tl = M.createContext(null),
  Nt = M.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Pd = M.createContext(null);
function Kh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  zn() || q(!1);
  let { basename: r, navigator: i } = M.useContext(Nn),
    { hash: l, pathname: s, search: o } = Ld(e, { relative: n }),
    a = s;
  return (
    r !== "/" && (a = s === "/" ? r : Tt([r, s])),
    i.createHref({ pathname: a, search: o, hash: l })
  );
}
function zn() {
  return M.useContext(tl) != null;
}
function Pr() {
  return zn() || q(!1), M.useContext(tl).location;
}
function Md(e) {
  M.useContext(Nn).static || M.useLayoutEffect(e);
}
function Fo() {
  let { isDataRoute: e } = M.useContext(Nt);
  return e ? u0() : Jh();
}
function Jh() {
  zn() || q(!1);
  let e = M.useContext(Bo),
    { basename: t, navigator: n } = M.useContext(Nn),
    { matches: r } = M.useContext(Nt),
    { pathname: i } = Pr(),
    l = JSON.stringify(Do(r).map((a) => a.pathnameBase)),
    s = M.useRef(!1);
  return (
    Md(() => {
      s.current = !0;
    }),
    M.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let h = Ao(a, JSON.parse(l), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : Tt([t, h.pathname])),
          (c.replace ? n.replace : n.push)(h, c.state, c);
      },
      [t, n, l, i, e],
    )
  );
}
function Ld(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = M.useContext(Nt),
    { pathname: i } = Pr(),
    l = JSON.stringify(Do(r).map((s) => s.pathnameBase));
  return M.useMemo(() => Ao(e, JSON.parse(l), i, n === "path"), [e, l, i, n]);
}
function Zh(e, t) {
  return qh(e, t);
}
function qh(e, t, n) {
  zn() || q(!1);
  let { navigator: r } = M.useContext(Nn),
    { matches: i } = M.useContext(Nt),
    l = i[i.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let o = l ? l.pathnameBase : "/";
  l && l.route;
  let a = Pr(),
    c;
  if (t) {
    var h;
    let w = typeof t == "string" ? _n(t) : t;
    o === "/" || ((h = w.pathname) != null && h.startsWith(o)) || q(!1),
      (c = w);
  } else c = a;
  let m = c.pathname || "/",
    v = o === "/" ? m : m.slice(o.length) || "/",
    g = Ph(e, { pathname: v }),
    x = i0(
      g &&
        g.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, s, w.params),
            pathname: Tt([
              o,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? o
                : Tt([
                    o,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
    );
  return t && x
    ? M.createElement(
        tl.Provider,
        {
          value: {
            location: bi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: mt.Pop,
          },
        },
        x,
      )
    : x;
}
function e0() {
  let e = a0(),
    t = Yh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    l = null;
  return M.createElement(
    M.Fragment,
    null,
    M.createElement("h2", null, "Unexpected Application Error!"),
    M.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? M.createElement("pre", { style: i }, n) : null,
    l,
  );
}
const t0 = M.createElement(e0, null);
class n0 extends M.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? M.createElement(
          Nt.Provider,
          { value: this.props.routeContext },
          M.createElement(Pd.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function r0(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = M.useContext(Bo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    M.createElement(Nt.Provider, { value: t }, r)
  );
}
function i0(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let l = e,
    s = (r = n) == null ? void 0 : r.errors;
  if (s != null) {
    let o = l.findIndex(
      (a) => a.route.id && (s == null ? void 0 : s[a.route.id]),
    );
    o >= 0 || q(!1), (l = l.slice(0, Math.min(l.length, o + 1)));
  }
  return l.reduceRight((o, a, c) => {
    let h = a.route.id ? (s == null ? void 0 : s[a.route.id]) : null,
      m = null;
    n && (m = a.route.errorElement || t0);
    let v = t.concat(l.slice(0, c + 1)),
      g = () => {
        let x;
        return (
          h
            ? (x = m)
            : a.route.Component
            ? (x = M.createElement(a.route.Component, null))
            : a.route.element
            ? (x = a.route.element)
            : (x = o),
          M.createElement(r0, {
            match: a,
            routeContext: { outlet: o, matches: v, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || c === 0)
      ? M.createElement(n0, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: h,
          children: g(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var _d = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(_d || {}),
  Oi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Oi || {});
function l0(e) {
  let t = M.useContext(Bo);
  return t || q(!1), t;
}
function s0(e) {
  let t = M.useContext(Qh);
  return t || q(!1), t;
}
function o0(e) {
  let t = M.useContext(Nt);
  return t || q(!1), t;
}
function Nd(e) {
  let t = o0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || q(!1), n.route.id;
}
function a0() {
  var e;
  let t = M.useContext(Pd),
    n = s0(Oi.UseRouteError),
    r = Nd(Oi.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function u0() {
  let { router: e } = l0(_d.UseNavigateStable),
    t = Nd(Oi.UseNavigateStable),
    n = M.useRef(!1);
  return (
    Md(() => {
      n.current = !0;
    }),
    M.useCallback(
      function (i, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, bi({ fromRouteId: t }, l)));
      },
      [e, t],
    )
  );
}
function c0(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  zn() || q(!1);
  let { matches: l } = M.useContext(Nt),
    { pathname: s } = Pr(),
    o = Fo(),
    a = Ao(
      t,
      Do(l).map((h) => h.pathnameBase),
      s,
      i === "path",
    ),
    c = JSON.stringify(a);
  return (
    M.useEffect(
      () => o(JSON.parse(c), { replace: n, state: r, relative: i }),
      [o, c, i, n, r],
    ),
    null
  );
}
function Dt(e) {
  q(!1);
}
function d0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = mt.Pop,
    navigator: l,
    static: s = !1,
  } = e;
  zn() && q(!1);
  let o = t.replace(/^\/*/, "/"),
    a = M.useMemo(() => ({ basename: o, navigator: l, static: s }), [o, l, s]);
  typeof r == "string" && (r = _n(r));
  let {
      pathname: c = "/",
      search: h = "",
      hash: m = "",
      state: v = null,
      key: g = "default",
    } = r,
    x = M.useMemo(() => {
      let w = Ro(c, o);
      return w == null
        ? null
        : {
            location: { pathname: w, search: h, hash: m, state: v, key: g },
            navigationType: i,
          };
    }, [o, c, h, m, v, g, i]);
  return x == null
    ? null
    : M.createElement(
        Nn.Provider,
        { value: a },
        M.createElement(tl.Provider, { children: n, value: x }),
      );
}
function f0(e) {
  let { children: t, location: n } = e;
  return Zh(bs(t), n);
}
new Promise(() => {});
function bs(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    M.Children.forEach(e, (r, i) => {
      if (!M.isValidElement(r)) return;
      let l = [...t, i];
      if (r.type === M.Fragment) {
        n.push.apply(n, bs(r.props.children, l));
        return;
      }
      r.type !== Dt && q(!1), !r.props.index || !r.props.children || q(!1);
      let s = {
        id: r.props.id || l.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = bs(r.props.children, l)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Os() {
  return (
    (Os = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Os.apply(this, arguments)
  );
}
function p0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    l;
  for (l = 0; l < r.length; l++)
    (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function h0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function m0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !h0(e);
}
const v0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  g0 = "startTransition",
  nu = pf[g0];
function y0(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    l = M.useRef();
  l.current == null && (l.current = kh({ window: i, v5Compat: !0 }));
  let s = l.current,
    [o, a] = M.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = r || {},
    h = M.useCallback(
      (m) => {
        c && nu ? nu(() => a(m)) : a(m);
      },
      [a, c],
    );
  return (
    M.useLayoutEffect(() => s.listen(h), [s, h]),
    M.createElement(d0, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: s,
    })
  );
}
const w0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  x0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $n = M.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: l,
        replace: s,
        state: o,
        target: a,
        to: c,
        preventScrollReset: h,
      } = t,
      m = p0(t, v0),
      { basename: v } = M.useContext(Nn),
      g,
      x = !1;
    if (typeof c == "string" && x0.test(c) && ((g = c), w0))
      try {
        let u = new URL(window.location.href),
          d = c.startsWith("//") ? new URL(u.protocol + c) : new URL(c),
          y = Ro(d.pathname, v);
        d.origin === u.origin && y != null
          ? (c = y + d.search + d.hash)
          : (x = !0);
      } catch {}
    let w = Kh(c, { relative: i }),
      S = S0(c, {
        replace: s,
        state: o,
        target: a,
        preventScrollReset: h,
        relative: i,
      });
    function f(u) {
      r && r(u), u.defaultPrevented || S(u);
    }
    return M.createElement(
      "a",
      Os({}, m, { href: g || w, onClick: x || l ? r : f, ref: n, target: a }),
    );
  });
var ru;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(ru || (ru = {}));
var iu;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(iu || (iu = {}));
function S0(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: l,
      relative: s,
    } = t === void 0 ? {} : t,
    o = Fo(),
    a = Pr(),
    c = Ld(e, { relative: s });
  return M.useCallback(
    (h) => {
      if (m0(h, n)) {
        h.preventDefault();
        let m = r !== void 0 ? r : Ii(a) === Ii(c);
        o(e, { replace: m, state: i, preventScrollReset: l, relative: s });
      }
    },
    [a, o, c, r, i, n, e, l, s],
  );
}
function E0() {
  var e = document.getElementById("myTopnav");
  e.className === "topnav"
    ? (e.className += " responsive")
    : (e.className = "topnav");
}
function C0() {
  const e = Fo();
  return p.jsxs("div", {
    className: "topnav",
    id: "myTopnav",
    children: [
      p.jsx("p", {
        className: "active",
        onClick: () => e("/"),
        children: "Deepanshu Gulia",
      }),
      p.jsxs("div", {
        children: [
          p.jsx($n, { to: "/", children: "Home" }),
          p.jsx($n, { to: "/skills", children: "Skills" }),
          p.jsx($n, { to: "/projects", children: "Projects" }),
          p.jsx($n, { to: "/experience", children: "Work" }),
          p.jsx($n, { to: "/contact", children: "Contact" }),
          p.jsx("a", {
            href: "#",
            className: "icon ",
            onClick: E0,
            children: p.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "30",
              height: "30",
              fill: "currentColor",
              className: "bi bi-list",
              viewBox: "0 0 16 16",
              children: p.jsx("path", {
                fillRule: "evenodd",
                d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
const zd = [
  {
    head: "Frontend",
    data: [
      { name: "HTML", image: "html.webp" },
      { name: "CSS", image: "css.webp" },
      { name: "React.js", image: "reactjs.webp" },
      { name: "Redux", image: "redux.webp" },
      { name: "Electron.js", image: "electronjs.webp" },
      { name: "React Native", image: "reactjs.webp" },
      { name: "Bootstrap", image: "bootstrap.webp" },
      { name: "Material UI", image: "material-ui.webp" },
    ],
  },
  {
    head: "Backend",
    data: [
      { name: "Node.js", image: "nodejs.webp" },
      { name: "Express.js", image: "expressjs.webp" },
      { name: "bcryptjs", image: "bcrypt.webp" },
      { name: "jsonwebtoken", image: "jsonwebtoken.webp" },
    ],
  },
  {
    head: "Database",
    data: [
      { name: "MongoDB", image: "mongodb.webp" },
      { name: "MySQL", image: "mysql.webp" },
    ],
  },
  {
    head: "Languages",
    data: [
      { name: "Javascript", image: "javascript.webp" },
      { name: "Typescript", image: "typescript.webp" },
      { name: "Python", image: "python.webp" },
    ],
  },
  {
    head: "Familiar",
    data: [
      { name: "Three.js", image: "three-js.webp" },
      { name: "Next.js", image: "next-js.webp" },
      { name: "Flask", image: "flask.webp" },
      { name: "Numpy", image: "numpy.webp" },
      { name: "Pandas", image: "pandas.webp" },
      { name: "Figma", image: "figma.webp" },
    ],
  },
  {
    head: "Other",
    data: [
      { name: "Netlify", image: "netlify.webp" },
      { name: "Vercel", image: "Vercel.webp" },
      { name: "Vite", image: "vitejs.webp" },
      { name: "Webpack", image: "webpack.webp" },
      { name: "Git", image: "git.webp" },
      { name: "NPM", image: "npm.webp" },
    ],
  },
];
function k0() {
  return p.jsx("div", {
    className: "portfolio-skills-section-container",
    children: zd.map((e) =>
      p.jsxs(
        "div",
        {
          children: [
            p.jsx("p", { children: e.head }),
            e.data.map((t) =>
              p.jsxs(
                "span",
                {
                  children: [
                    p.jsx("img", {
                      alt: t.name,
                      src: `/Images/skills/${t.image}`,
                    }),
                    p.jsx("p", { children: t.name }),
                  ],
                },
                t.name,
              ),
            ),
          ],
        },
        e.head,
      ),
    ),
  });
}
function lu(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function $o(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : lu(t[n]) &&
          lu(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          $o(e[n], t[n]);
    });
}
const Id = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Zt() {
  const e = typeof document < "u" ? document : {};
  return $o(e, Id), e;
}
const T0 = {
  document: Id,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function _e() {
  const e = typeof window < "u" ? window : {};
  return $o(e, T0), e;
}
function j0(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Rs(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function Ri() {
  return Date.now();
}
function P0(e) {
  const t = _e();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function M0(e, t) {
  t === void 0 && (t = "x");
  const n = _e();
  let r, i, l;
  const s = P0(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((o) => o.replace(",", "."))
            .join(", ")),
        (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((l =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = l.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = l.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = l.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Xr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function L0(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function ke() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !L0(r)) {
      const i = Object.keys(Object(r)).filter((l) => t.indexOf(l) < 0);
      for (let l = 0, s = i.length; l < s; l += 1) {
        const o = i[l],
          a = Object.getOwnPropertyDescriptor(r, o);
        a !== void 0 &&
          a.enumerable &&
          (Xr(e[o]) && Xr(r[o])
            ? r[o].__swiper__
              ? (e[o] = r[o])
              : ke(e[o], r[o])
            : !Xr(e[o]) && Xr(r[o])
            ? ((e[o] = {}), r[o].__swiper__ ? (e[o] = r[o]) : ke(e[o], r[o]))
            : (e[o] = r[o]));
      }
    }
  }
  return e;
}
function Qr(e, t, n) {
  e.style.setProperty(t, n);
}
function bd(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = _e(),
    l = -t.translate;
  let s = null,
    o;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const c = n > l ? "next" : "prev",
    h = (v, g) => (c === "next" && v >= g) || (c === "prev" && v <= g),
    m = () => {
      (o = new Date().getTime()), s === null && (s = o);
      const v = Math.max(Math.min((o - s) / a, 1), 0),
        g = 0.5 - Math.cos(v * Math.PI) / 2;
      let x = l + g * (n - l);
      if ((h(x, n) && (x = n), t.wrapperEl.scrollTo({ [r]: x }), h(x, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: x });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(m);
    };
  m();
}
function Ye(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function Od(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
}
function _0(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function N0(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function vt(e, t) {
  return _e().getComputedStyle(e, null).getPropertyValue(t);
}
function Di(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Rd(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Ds(e, t, n) {
  const r = _e();
  return n
    ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-right" : "margin-top"),
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"),
        )
    : e.offsetWidth;
}
let zl;
function z0() {
  const e = _e(),
    t = Zt();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Dd() {
  return zl || (zl = z0()), zl;
}
let Il;
function I0(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Dd(),
    r = _e(),
    i = r.navigator.platform,
    l = t || r.navigator.userAgent,
    s = { ios: !1, android: !1 },
    o = r.screen.width,
    a = r.screen.height,
    c = l.match(/(Android);?[\s\/]+([\d.]+)?/);
  let h = l.match(/(iPad).*OS\s([\d_]+)/);
  const m = l.match(/(iPod)(.*OS\s([\d_]+))?/),
    v = !h && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    g = i === "Win32";
  let x = i === "MacIntel";
  const w = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !h &&
      x &&
      n.touch &&
      w.indexOf(`${o}x${a}`) >= 0 &&
      ((h = l.match(/(Version)\/([\d.]+)/)),
      h || (h = [0, 1, "13_0_0"]),
      (x = !1)),
    c && !g && ((s.os = "android"), (s.android = !0)),
    (h || v || m) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function b0(e) {
  return e === void 0 && (e = {}), Il || (Il = I0(e)), Il;
}
let bl;
function O0() {
  const e = _e();
  let t = !1;
  function n() {
    const r = e.navigator.userAgent.toLowerCase();
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    );
  }
  if (n()) {
    const r = String(e.navigator.userAgent);
    if (r.includes("Version/")) {
      const [i, l] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((s) => Number(s));
      t = i < 16 || (i === 16 && l < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
  };
}
function R0() {
  return bl || (bl = O0()), bl;
}
function D0(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = _e();
  let l = null,
    s = null;
  const o = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((l = new ResizeObserver((m) => {
          s = i.requestAnimationFrame(() => {
            const { width: v, height: g } = t;
            let x = v,
              w = g;
            m.forEach((S) => {
              let { contentBoxSize: f, contentRect: u, target: d } = S;
              (d && d !== t.el) ||
                ((x = u ? u.width : (f[0] || f).inlineSize),
                (w = u ? u.height : (f[0] || f).blockSize));
            }),
              (x !== v || w !== g) && o();
          });
        })),
        l.observe(t.el));
    },
    c = () => {
      s && i.cancelAnimationFrame(s),
        l && l.unobserve && t.el && (l.unobserve(t.el), (l = null));
    },
    h = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", h);
  }),
    n("destroy", () => {
      c(),
        i.removeEventListener("resize", o),
        i.removeEventListener("orientationchange", h);
    });
}
function A0(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = [],
    s = _e(),
    o = function (h, m) {
      m === void 0 && (m = {});
      const v = s.MutationObserver || s.WebkitMutationObserver,
        g = new v((x) => {
          if (t.__preventObserver__) return;
          if (x.length === 1) {
            i("observerUpdate", x[0]);
            return;
          }
          const w = function () {
            i("observerUpdate", x[0]);
          };
          s.requestAnimationFrame
            ? s.requestAnimationFrame(w)
            : s.setTimeout(w, 0);
        });
      g.observe(h, {
        attributes: typeof m.attributes > "u" ? !0 : m.attributes,
        childList: typeof m.childList > "u" ? !0 : m.childList,
        characterData: typeof m.characterData > "u" ? !0 : m.characterData,
      }),
        l.push(g);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const h = Rd(t.hostEl);
          for (let m = 0; m < h.length; m += 1) o(h[m]);
        }
        o(t.hostEl, { childList: t.params.observeSlideChildren }),
          o(t.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      l.forEach((h) => {
        h.disconnect();
      }),
        l.splice(0, l.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", a),
    r("destroy", c);
}
var B0 = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((l) => {
        r.eventsListeners[l] || (r.eventsListeners[l] = []),
          r.eventsListeners[l][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var l = arguments.length, s = new Array(l), o = 0; o < l; o++)
        s[o] = arguments[o];
      t.apply(r, s);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, l) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(l, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++)
      l[s] = arguments[s];
    return (
      typeof l[0] == "string" || Array.isArray(l[0])
        ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
        : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(r, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((c) => {
              c.apply(r, n);
            });
      }),
      e
    );
  },
};
function F0() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(vt(r, "padding-left") || 0, 10) -
        parseInt(vt(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(vt(r, "padding-top") || 0, 10) -
        parseInt(vt(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function $0() {
  const e = this;
  function t(P) {
    return e.isHorizontal()
      ? P
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[P];
  }
  function n(P, N) {
    return parseFloat(P.getPropertyValue(t(N)) || 0);
  }
  const r = e.params,
    { wrapperEl: i, slidesEl: l, size: s, rtlTranslate: o, wrongRTL: a } = e,
    c = e.virtual && r.virtual.enabled,
    h = c ? e.virtual.slides.length : e.slides.length,
    m = Ye(l, `.${e.params.slideClass}, swiper-slide`),
    v = c ? e.virtual.slides.length : m.length;
  let g = [];
  const x = [],
    w = [];
  let S = r.slidesOffsetBefore;
  typeof S == "function" && (S = r.slidesOffsetBefore.call(e));
  let f = r.slidesOffsetAfter;
  typeof f == "function" && (f = r.slidesOffsetAfter.call(e));
  const u = e.snapGrid.length,
    d = e.slidesGrid.length;
  let y = r.spaceBetween,
    C = -S,
    j = 0,
    T = 0;
  if (typeof s > "u") return;
  typeof y == "string" && y.indexOf("%") >= 0
    ? (y = (parseFloat(y.replace("%", "")) / 100) * s)
    : typeof y == "string" && (y = parseFloat(y)),
    (e.virtualSize = -y),
    m.forEach((P) => {
      o ? (P.style.marginLeft = "") : (P.style.marginRight = ""),
        (P.style.marginBottom = ""),
        (P.style.marginTop = "");
    }),
    r.centeredSlides &&
      r.cssMode &&
      (Qr(i, "--swiper-centered-offset-before", ""),
      Qr(i, "--swiper-centered-offset-after", ""));
  const E = r.grid && r.grid.rows > 1 && e.grid;
  E && e.grid.initSlides(v);
  let k;
  const _ =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (P) => typeof r.breakpoints[P].slidesPerView < "u",
    ).length > 0;
  for (let P = 0; P < v; P += 1) {
    k = 0;
    let N;
    if (
      (m[P] && (N = m[P]),
      E && e.grid.updateSlide(P, N, v, t),
      !(m[P] && vt(N, "display") === "none"))
    ) {
      if (r.slidesPerView === "auto") {
        _ && (m[P].style[t("width")] = "");
        const I = getComputedStyle(N),
          D = N.style.transform,
          $ = N.style.webkitTransform;
        if (
          (D && (N.style.transform = "none"),
          $ && (N.style.webkitTransform = "none"),
          r.roundLengths)
        )
          k = e.isHorizontal() ? Ds(N, "width", !0) : Ds(N, "height", !0);
        else {
          const pe = n(I, "width"),
            zt = n(I, "padding-left"),
            z = n(I, "padding-right"),
            O = n(I, "margin-left"),
            R = n(I, "margin-right"),
            W = I.getPropertyValue("box-sizing");
          if (W && W === "border-box") k = pe + O + R;
          else {
            const { clientWidth: ee, offsetWidth: qt } = N;
            k = pe + zt + z + O + R + (qt - ee);
          }
        }
        D && (N.style.transform = D),
          $ && (N.style.webkitTransform = $),
          r.roundLengths && (k = Math.floor(k));
      } else
        (k = (s - (r.slidesPerView - 1) * y) / r.slidesPerView),
          r.roundLengths && (k = Math.floor(k)),
          m[P] && (m[P].style[t("width")] = `${k}px`);
      m[P] && (m[P].swiperSlideSize = k),
        w.push(k),
        r.centeredSlides
          ? ((C = C + k / 2 + j / 2 + y),
            j === 0 && P !== 0 && (C = C - s / 2 - y),
            P === 0 && (C = C - s / 2 - y),
            Math.abs(C) < 1 / 1e3 && (C = 0),
            r.roundLengths && (C = Math.floor(C)),
            T % r.slidesPerGroup === 0 && g.push(C),
            x.push(C))
          : (r.roundLengths && (C = Math.floor(C)),
            (T - Math.min(e.params.slidesPerGroupSkip, T)) %
              e.params.slidesPerGroup ===
              0 && g.push(C),
            x.push(C),
            (C = C + k + y)),
        (e.virtualSize += k + y),
        (j = k),
        (T += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + f),
    o &&
      a &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      (i.style.width = `${e.virtualSize + y}px`),
    r.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + y}px`),
    E && e.grid.updateWrapperSize(k, g, t),
    !r.centeredSlides)
  ) {
    const P = [];
    for (let N = 0; N < g.length; N += 1) {
      let I = g[N];
      r.roundLengths && (I = Math.floor(I)),
        g[N] <= e.virtualSize - s && P.push(I);
    }
    (g = P),
      Math.floor(e.virtualSize - s) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(e.virtualSize - s);
  }
  if (c && r.loop) {
    const P = w[0] + y;
    if (r.slidesPerGroup > 1) {
      const N = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup,
        ),
        I = P * r.slidesPerGroup;
      for (let D = 0; D < N; D += 1) g.push(g[g.length - 1] + I);
    }
    for (let N = 0; N < e.virtual.slidesBefore + e.virtual.slidesAfter; N += 1)
      r.slidesPerGroup === 1 && g.push(g[g.length - 1] + P),
        x.push(x[x.length - 1] + P),
        (e.virtualSize += P);
  }
  if ((g.length === 0 && (g = [0]), y !== 0)) {
    const P = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
    m.filter((N, I) =>
      !r.cssMode || r.loop ? !0 : I !== m.length - 1,
    ).forEach((N) => {
      N.style[P] = `${y}px`;
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let P = 0;
    w.forEach((I) => {
      P += I + (y || 0);
    }),
      (P -= y);
    const N = P - s;
    g = g.map((I) => (I <= 0 ? -S : I > N ? N + f : I));
  }
  if (r.centerInsufficientSlides) {
    let P = 0;
    if (
      (w.forEach((N) => {
        P += N + (y || 0);
      }),
      (P -= y),
      P < s)
    ) {
      const N = (s - P) / 2;
      g.forEach((I, D) => {
        g[D] = I - N;
      }),
        x.forEach((I, D) => {
          x[D] = I + N;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: m,
      snapGrid: g,
      slidesGrid: x,
      slidesSizesGrid: w,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    Qr(i, "--swiper-centered-offset-before", `${-g[0]}px`),
      Qr(
        i,
        "--swiper-centered-offset-after",
        `${e.size / 2 - w[w.length - 1] / 2}px`,
      );
    const P = -e.snapGrid[0],
      N = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((I) => I + P)),
      (e.slidesGrid = e.slidesGrid.map((I) => I + N));
  }
  if (
    (v !== h && e.emit("slidesLengthChange"),
    g.length !== u &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    x.length !== d && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !c && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const P = `${r.containerModifierClass}backface-hidden`,
      N = e.el.classList.contains(P);
    v <= r.maxBackfaceHiddenSlides
      ? N || e.el.classList.add(P)
      : N && e.el.classList.remove(P);
  }
}
function V0(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    l;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (o) => (r ? t.slides[t.getSlideIndexByData(o)] : t.slides[o]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((o) => {
        n.push(o);
      });
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const o = t.activeIndex + l;
        if (o > t.slides.length && !r) break;
        n.push(s(o));
      }
  else n.push(s(t.activeIndex));
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < "u") {
      const o = n[l].offsetHeight;
      i = o > i ? o : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function H0() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function U0(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: l } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e),
    r.forEach((a) => {
      a.classList.remove(n.slideVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let o = n.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0
    ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
    : typeof o == "string" && (o = parseFloat(o));
  for (let a = 0; a < r.length; a += 1) {
    const c = r[a];
    let h = c.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (h -= r[0].swiperSlideOffset);
    const m =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - h) /
        (c.swiperSlideSize + o),
      v =
        (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - h) /
        (c.swiperSlideSize + o),
      g = -(s - h),
      x = g + t.slidesSizesGrid[a];
    ((g >= 0 && g < t.size - 1) ||
      (x > 1 && x <= t.size) ||
      (g <= 0 && x >= t.size)) &&
      (t.visibleSlides.push(c),
      t.visibleSlidesIndexes.push(a),
      r[a].classList.add(n.slideVisibleClass)),
      (c.progress = i ? -m : m),
      (c.originalProgress = i ? -v : v);
  }
}
function W0(e) {
  const t = this;
  if (typeof e > "u") {
    const h = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * h) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: l, isEnd: s, progressLoop: o } = t;
  const a = l,
    c = s;
  if (r === 0) (i = 0), (l = !0), (s = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const h = Math.abs(e - t.minTranslate()) < 1,
      m = Math.abs(e - t.maxTranslate()) < 1;
    (l = h || i <= 0), (s = m || i >= 1), h && (i = 0), m && (i = 1);
  }
  if (n.loop) {
    const h = t.getSlideIndexByData(0),
      m = t.getSlideIndexByData(t.slides.length - 1),
      v = t.slidesGrid[h],
      g = t.slidesGrid[m],
      x = t.slidesGrid[t.slidesGrid.length - 1],
      w = Math.abs(e);
    w >= v ? (o = (w - v) / x) : (o = (w + x - g) / x), o > 1 && (o -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: o, isBeginning: l, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !a && t.emit("reachBeginning toEdge"),
    s && !c && t.emit("reachEnd toEdge"),
    ((a && !l) || (c && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function G0() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    l = e.virtual && n.virtual.enabled,
    s = (a) => Ye(r, `.${n.slideClass}${a}, swiper-slide${a}`)[0];
  t.forEach((a) => {
    a.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
  });
  let o;
  if (l)
    if (n.loop) {
      let a = i - e.virtual.slidesBefore;
      a < 0 && (a = e.virtual.slides.length + a),
        a >= e.virtual.slides.length && (a -= e.virtual.slides.length),
        (o = s(`[data-swiper-slide-index="${a}"]`));
    } else o = s(`[data-swiper-slide-index="${i}"]`);
  else o = t[i];
  if (o) {
    o.classList.add(n.slideActiveClass);
    let a = N0(o, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !a && (a = t[0]), a && a.classList.add(n.slideNextClass);
    let c = _0(o, `.${n.slideClass}, swiper-slide`)[0];
    n.loop && !c === 0 && (c = t[t.length - 1]),
      c && c.classList.add(n.slidePrevClass);
  }
  e.emitSlidesClasses();
}
const ai = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Ol = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  As = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const s = i,
        o = [s - t];
      o.push(...Array.from({ length: t }).map((a, c) => s + r + c)),
        e.slides.forEach((a, c) => {
          o.includes(a.column) && Ol(e, c);
        });
      return;
    }
    const l = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let s = i - t; s <= l + t; s += 1) {
        const o = ((s % n) + n) % n;
        (o < i || o > l) && Ol(e, o);
      }
    else
      for (let s = Math.max(i - t, 0); s <= Math.min(l + t, n - 1); s += 1)
        s !== i && (s > l || s < i) && Ol(e, s);
  };
function Y0(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let l = 0; l < t.length; l += 1)
    typeof t[l + 1] < "u"
      ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
        ? (i = l)
        : r >= t[l] && r < t[l + 1] && (i = l + 1)
      : r >= t[l] && (i = l);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function X0(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: l, realIndex: s, snapIndex: o } = t;
  let a = e,
    c;
  const h = (v) => {
    let g = v - t.virtual.slidesBefore;
    return (
      g < 0 && (g = t.virtual.slides.length + g),
      g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
      g
    );
  };
  if ((typeof a > "u" && (a = Y0(t)), r.indexOf(n) >= 0)) c = r.indexOf(n);
  else {
    const v = Math.min(i.slidesPerGroupSkip, a);
    c = v + Math.floor((a - v) / i.slidesPerGroup);
  }
  if ((c >= r.length && (c = r.length - 1), a === l)) {
    c !== o && ((t.snapIndex = c), t.emit("snapIndexChange")),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = h(a));
    return;
  }
  let m;
  t.virtual && i.virtual.enabled && i.loop
    ? (m = h(a))
    : t.slides[a]
    ? (m = parseInt(
        t.slides[a].getAttribute("data-swiper-slide-index") || a,
        10,
      ))
    : (m = a),
    Object.assign(t, {
      previousSnapIndex: o,
      snapIndex: c,
      previousRealIndex: s,
      realIndex: m,
      previousIndex: l,
      activeIndex: a,
    }),
    t.initialized && As(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (s !== m && t.emit("realIndexChange"), t.emit("slideChange"));
}
function Q0(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((o) => {
      !i && o.matches && o.matches(`.${r.slideClass}, swiper-slide`) && (i = o);
    });
  let l = !1,
    s;
  if (i) {
    for (let o = 0; o < n.slides.length; o += 1)
      if (n.slides[o] === i) {
        (l = !0), (s = o);
        break;
      }
  }
  if (i && l)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (n.clickedIndex = s);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var K0 = {
  updateSize: F0,
  updateSlides: $0,
  updateAutoHeight: V0,
  updateSlidesOffset: H0,
  updateSlidesProgress: U0,
  updateProgress: W0,
  updateSlidesClasses: G0,
  updateActiveIndex: X0,
  updateClickedSlide: Q0,
};
function J0(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = M0(l, e);
  return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function Z0(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: l, progress: s } = n;
  let o = 0,
    a = 0;
  const c = 0;
  n.isHorizontal() ? (o = r ? -e : e) : (a = e),
    i.roundLengths && ((o = Math.floor(o)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? o : a),
    i.cssMode
      ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -o
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (o -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (l.style.transform = `translate3d(${o}px, ${a}px, ${c}px)`));
  let h;
  const m = n.maxTranslate() - n.minTranslate();
  m === 0 ? (h = 0) : (h = (e - n.minTranslate()) / m),
    h !== s && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function q0() {
  return -this.snapGrid[0];
}
function e1() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function t1(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const l = this,
    { params: s, wrapperEl: o } = l;
  if (l.animating && s.preventInteractionOnTransition) return !1;
  const a = l.minTranslate(),
    c = l.maxTranslate();
  let h;
  if (
    (r && e > a ? (h = a) : r && e < c ? (h = c) : (h = e),
    l.updateProgress(h),
    s.cssMode)
  ) {
    const m = l.isHorizontal();
    if (t === 0) o[m ? "scrollLeft" : "scrollTop"] = -h;
    else {
      if (!l.support.smoothScroll)
        return (
          bd({ swiper: l, targetPosition: -h, side: m ? "left" : "top" }), !0
        );
      o.scrollTo({ [m ? "left" : "top"]: -h, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(h),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(h),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (v) {
              !l ||
                l.destroyed ||
                (v.target === this &&
                  (l.wrapperEl.removeEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd,
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  n && l.emit("transitionEnd")));
            }),
          l.wrapperEl.addEventListener(
            "transitionend",
            l.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var n1 = {
  getTranslate: J0,
  setTranslate: Z0,
  minTranslate: q0,
  maxTranslate: e1,
  translateTo: t1,
};
function r1(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Ad(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: l, previousIndex: s } = t;
  let o = r;
  if (
    (o || (l > s ? (o = "next") : l < s ? (o = "prev") : (o = "reset")),
    t.emit(`transition${i}`),
    n && l !== s)
  ) {
    if (o === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      o === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function i1(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Ad({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function l1(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Ad({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var s1 = { setTransition: r1, transitionStart: i1, transitionEnd: l1 };
function o1(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const l = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: o,
    snapGrid: a,
    slidesGrid: c,
    previousIndex: h,
    activeIndex: m,
    rtlTranslate: v,
    wrapperEl: g,
    enabled: x,
  } = l;
  if ((l.animating && o.preventInteractionOnTransition) || (!x && !r && !i))
    return !1;
  const w = Math.min(l.params.slidesPerGroupSkip, s);
  let S = w + Math.floor((s - w) / l.params.slidesPerGroup);
  S >= a.length && (S = a.length - 1);
  const f = -a[S];
  if (o.normalizeSlideIndex)
    for (let d = 0; d < c.length; d += 1) {
      const y = -Math.floor(f * 100),
        C = Math.floor(c[d] * 100),
        j = Math.floor(c[d + 1] * 100);
      typeof c[d + 1] < "u"
        ? y >= C && y < j - (j - C) / 2
          ? (s = d)
          : y >= C && y < j && (s = d + 1)
        : y >= C && (s = d);
    }
  if (
    l.initialized &&
    s !== m &&
    ((!l.allowSlideNext &&
      (v
        ? f > l.translate && f > l.minTranslate()
        : f < l.translate && f < l.minTranslate())) ||
      (!l.allowSlidePrev &&
        f > l.translate &&
        f > l.maxTranslate() &&
        (m || 0) !== s))
  )
    return !1;
  s !== (h || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(f);
  let u;
  if (
    (s > m ? (u = "next") : s < m ? (u = "prev") : (u = "reset"),
    (v && -f === l.translate) || (!v && f === l.translate))
  )
    return (
      l.updateActiveIndex(s),
      o.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      o.effect !== "slide" && l.setTranslate(f),
      u !== "reset" && (l.transitionStart(n, u), l.transitionEnd(n, u)),
      !1
    );
  if (o.cssMode) {
    const d = l.isHorizontal(),
      y = v ? f : -f;
    if (t === 0) {
      const C = l.virtual && l.params.virtual.enabled;
      C &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        C && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
          ? ((l._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              g[d ? "scrollLeft" : "scrollTop"] = y;
            }))
          : (g[d ? "scrollLeft" : "scrollTop"] = y),
        C &&
          requestAnimationFrame(() => {
            (l.wrapperEl.style.scrollSnapType = ""), (l._immediateVirtual = !1);
          });
    } else {
      if (!l.support.smoothScroll)
        return (
          bd({ swiper: l, targetPosition: y, side: d ? "left" : "top" }), !0
        );
      g.scrollTo({ [d ? "left" : "top"]: y, behavior: "smooth" });
    }
    return !0;
  }
  return (
    l.setTransition(t),
    l.setTranslate(f),
    l.updateActiveIndex(s),
    l.updateSlidesClasses(),
    l.emit("beforeTransitionStart", t, r),
    l.transitionStart(n, u),
    t === 0
      ? l.transitionEnd(n, u)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (y) {
            !l ||
              l.destroyed ||
              (y.target === this &&
                (l.wrapperEl.removeEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd,
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, u)));
          }),
        l.wrapperEl.addEventListener(
          "transitionend",
          l.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function a1(e, t, n, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let l = e;
  return (
    i.params.loop &&
      (i.virtual && i.params.virtual.enabled
        ? (l = l + i.virtual.slidesBefore)
        : (l = i.getSlideIndexByData(l))),
    i.slideTo(l, t, n, r)
  );
}
function u1(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: l, animating: s } = r;
  if (!i) return r;
  let o = l.slidesPerGroup;
  l.slidesPerView === "auto" &&
    l.slidesPerGroup === 1 &&
    l.slidesPerGroupAuto &&
    (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const a = r.activeIndex < l.slidesPerGroupSkip ? 1 : o,
    c = r.virtual && l.virtual.enabled;
  if (l.loop) {
    if (s && !c && l.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && l.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + a, e, t, n);
        }),
        !0
      );
  }
  return l.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + a, e, t, n);
}
function c1(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: l,
      slidesGrid: s,
      rtlTranslate: o,
      enabled: a,
      animating: c,
    } = r;
  if (!a) return r;
  const h = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !h && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const m = o ? r.translate : -r.translate;
  function v(f) {
    return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f);
  }
  const g = v(m),
    x = l.map((f) => v(f));
  let w = l[x.indexOf(g) - 1];
  if (typeof w > "u" && i.cssMode) {
    let f;
    l.forEach((u, d) => {
      g >= u && (f = d);
    }),
      typeof f < "u" && (w = l[f > 0 ? f - 1 : f]);
  }
  let S = 0;
  if (
    (typeof w < "u" &&
      ((S = s.indexOf(w)),
      S < 0 && (S = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((S = S - r.slidesPerViewDynamic("previous", !0) + 1),
        (S = Math.max(S, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const f =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(f, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(S, e, t, n);
      }),
      !0
    );
  return r.slideTo(S, e, t, n);
}
function d1(e, t, n) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function f1(e, t, n, r) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    r === void 0 && (r = 0.5);
  const i = this;
  let l = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, l),
    o = s + Math.floor((l - s) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[o]) {
    const c = i.snapGrid[o],
      h = i.snapGrid[o + 1];
    a - c > (h - c) * r && (l += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[o - 1],
      h = i.snapGrid[o];
    a - c <= (h - c) * r && (l -= i.params.slidesPerGroup);
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  );
}
function p1() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    l;
  const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Ye(n, `${s}[data-swiper-slide-index="${l}"]`)[0],
            )),
            Rs(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            Ye(n, `${s}[data-swiper-slide-index="${l}"]`)[0],
          )),
          Rs(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var h1 = {
  slideTo: o1,
  slideToLoop: a1,
  slideNext: u1,
  slidePrev: c1,
  slideReset: d1,
  slideToClosest: f1,
  slideToClickedSlide: p1,
};
function m1(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  Ye(r, `.${n.slideClass}, swiper-slide`).forEach((l, s) => {
    l.setAttribute("data-swiper-slide-index", s);
  }),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides ? void 0 : "next",
    });
}
function v1(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: l,
    byController: s,
    byMousewheel: o,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: h,
    allowSlideNext: m,
    slidesEl: v,
    params: g,
  } = a;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && g.virtual.enabled)
  ) {
    n &&
      (!g.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : g.centeredSlides && a.snapIndex < g.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = h),
      (a.allowSlideNext = m),
      a.emit("loopFix");
    return;
  }
  const x =
    g.slidesPerView === "auto"
      ? a.slidesPerViewDynamic()
      : Math.ceil(parseFloat(g.slidesPerView, 10));
  let w = g.loopedSlides || x;
  w % g.slidesPerGroup !== 0 &&
    (w += g.slidesPerGroup - (w % g.slidesPerGroup)),
    (a.loopedSlides = w);
  const S = [],
    f = [];
  let u = a.activeIndex;
  typeof l > "u"
    ? (l = a.getSlideIndex(
        a.slides.filter((T) => T.classList.contains(g.slideActiveClass))[0],
      ))
    : (u = l);
  const d = r === "next" || !r,
    y = r === "prev" || !r;
  let C = 0,
    j = 0;
  if (l < w) {
    C = Math.max(w - l, g.slidesPerGroup);
    for (let T = 0; T < w - l; T += 1) {
      const E = T - Math.floor(T / c.length) * c.length;
      S.push(c.length - E - 1);
    }
  } else if (l > a.slides.length - w * 2) {
    j = Math.max(l - (a.slides.length - w * 2), g.slidesPerGroup);
    for (let T = 0; T < j; T += 1) {
      const E = T - Math.floor(T / c.length) * c.length;
      f.push(E);
    }
  }
  if (
    (y &&
      S.forEach((T) => {
        (a.slides[T].swiperLoopMoveDOM = !0),
          v.prepend(a.slides[T]),
          (a.slides[T].swiperLoopMoveDOM = !1);
      }),
    d &&
      f.forEach((T) => {
        (a.slides[T].swiperLoopMoveDOM = !0),
          v.append(a.slides[T]),
          (a.slides[T].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    g.slidesPerView === "auto" && a.updateSlides(),
    g.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (S.length > 0 && y)
      if (typeof t > "u") {
        const T = a.slidesGrid[u],
          k = a.slidesGrid[u + C] - T;
        o
          ? a.setTranslate(a.translate - k)
          : (a.slideTo(u + C, 0, !1, !0),
            i &&
              ((a.touches[a.isHorizontal() ? "startX" : "startY"] += k),
              (a.touchEventsData.currentTranslate = a.translate)));
      } else
        i &&
          (a.slideToLoop(t, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate));
    else if (f.length > 0 && d)
      if (typeof t > "u") {
        const T = a.slidesGrid[u],
          k = a.slidesGrid[u - j] - T;
        o
          ? a.setTranslate(a.translate - k)
          : (a.slideTo(u - j, 0, !1, !0),
            i &&
              ((a.touches[a.isHorizontal() ? "startX" : "startY"] += k),
              (a.touchEventsData.currentTranslate = a.translate)));
      } else a.slideToLoop(t, 0, !1, !0);
  }
  if (
    ((a.allowSlidePrev = h),
    (a.allowSlideNext = m),
    a.controller && a.controller.control && !s)
  ) {
    const T = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: l,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((E) => {
          !E.destroyed &&
            E.params.loop &&
            E.loopFix({
              ...T,
              slideTo: E.params.slidesPerView === g.slidesPerView ? n : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...T,
          slideTo:
            a.controller.control.params.slidesPerView === g.slidesPerView
              ? n
              : !1,
        });
  }
  a.emit("loopFix");
}
function g1() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const l =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[l] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var y1 = { loopCreate: m1, loopFix: v1, loopDestroy: g1 };
function w1(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function x1() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var S1 = { setGrabCursor: w1, unsetGrabCursor: x1 };
function E1(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Zt() || r === _e()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function C1(e) {
  const t = this,
    n = Zt(),
    r = _e(),
    i = t.touchEventsData;
  i.evCache.push(e);
  const { params: l, touches: s, enabled: o } = t;
  if (
    !o ||
    (!l.simulateTouch && e.pointerType === "mouse") ||
    (t.animating && l.preventInteractionOnTransition)
  )
    return;
  !t.animating && l.cssMode && l.loop && t.loopFix();
  let a = e;
  a.originalEvent && (a = a.originalEvent);
  let c = a.target;
  if (
    (l.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(c)) ||
    ("which" in a && a.which === 3) ||
    ("button" in a && a.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const h = !!l.noSwipingClass && l.noSwipingClass !== "",
    m = e.composedPath ? e.composedPath() : e.path;
  h && a.target && a.target.shadowRoot && m && (c = m[0]);
  const v = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    g = !!(a.target && a.target.shadowRoot);
  if (l.noSwiping && (g ? E1(v, c) : c.closest(v))) {
    t.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !c.closest(l.swipeHandler)) return;
  (s.currentX = a.pageX), (s.currentY = a.pageY);
  const x = s.currentX,
    w = s.currentY,
    S = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
    f = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
  if (S && (x <= f || x >= r.innerWidth - f))
    if (S === "prevent") e.preventDefault();
    else return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (s.startX = x),
    (s.startY = w),
    (i.touchStartTime = Ri()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1);
  let u = !0;
  c.matches(i.focusableElements) &&
    ((u = !1), c.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== c &&
      n.activeElement.blur();
  const d = u && t.allowTouchMove && l.touchStartPreventDefault;
  (l.touchStartForcePreventDefault || d) &&
    !c.isContentEditable &&
    a.preventDefault(),
    l.freeMode &&
      l.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", a);
}
function k1(e) {
  const t = Zt(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: l, rtlTranslate: s, enabled: o } = n;
  if (!o || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if ((a.originalEvent && (a = a.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const c = r.evCache.findIndex((T) => T.pointerId === a.pointerId);
  c >= 0 && (r.evCache[c] = a);
  const h = r.evCache.length > 1 ? r.evCache[0] : a,
    m = h.pageX,
    v = h.pageY;
  if (a.preventedByNestedSwiper) {
    (l.startX = m), (l.startY = v);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, {
          startX: m,
          startY: v,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: m,
          currentY: v,
        }),
        (r.touchStartTime = Ri()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (v < l.startY && n.translate <= n.maxTranslate()) ||
        (v > l.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (m < l.startX && n.translate <= n.maxTranslate()) ||
      (m > l.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks && n.emit("touchMove", a),
    a.targetTouches && a.targetTouches.length > 1)
  )
    return;
  (l.currentX = m), (l.currentY = v);
  const g = l.currentX - l.startX,
    x = l.currentY - l.startY;
  if (n.params.threshold && Math.sqrt(g ** 2 + x ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let T;
    (n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : g * g + x * x >= 25 &&
        ((T = (Math.atan2(Math.abs(x), Math.abs(g)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? T > i.touchAngle
          : 90 - T > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", a),
    typeof r.startMoving > "u" &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        r.evCache.length > 1))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let w = n.isHorizontal() ? g : x,
    S = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
  i.oneWayMovement &&
    ((w = Math.abs(w) * (s ? 1 : -1)), (S = Math.abs(S) * (s ? 1 : -1))),
    (l.diff = w),
    (w *= i.touchRatio),
    s && ((w = -w), (S = -S));
  const f = n.touchesDirection;
  (n.swipeDirection = w > 0 ? "prev" : "next"),
    (n.touchesDirection = S > 0 ? "prev" : "next");
  const u = n.params.loop && !i.cssMode,
    d =
      (n.swipeDirection === "next" && n.allowSlideNext) ||
      (n.swipeDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (u && d && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const T = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      n.wrapperEl.dispatchEvent(T);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let y;
  r.isMoved &&
    f !== n.touchesDirection &&
    u &&
    d &&
    Math.abs(w) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (y = !0)),
    n.emit("sliderMove", a),
    (r.isMoved = !0),
    (r.currentTranslate = w + r.startTranslate);
  let C = !0,
    j = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (j = 0),
    w > 0
      ? (u &&
          d &&
          !y &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((C = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + w) ** j)))
      : w < 0 &&
        (u &&
          d &&
          !y &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((C = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - w) ** j))),
    C && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(w) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function T1(e) {
  const t = this,
    n = t.touchEventsData,
    r = n.evCache.findIndex((d) => d.pointerId === e.pointerId);
  if (
    (r >= 0 && n.evCache.splice(r, 1),
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      e.type,
    ) &&
      !(
        ["pointercancel", "contextmenu"].includes(e.type) &&
        (t.browser.isSafari || t.browser.isWebView)
      ))
  )
    return;
  const {
    params: i,
    touches: l,
    rtlTranslate: s,
    slidesGrid: o,
    enabled: a,
  } = t;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let c = e;
  if (
    (c.originalEvent && (c = c.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", c),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const h = Ri(),
    m = h - n.touchStartTime;
  if (t.allowClick) {
    const d = c.path || (c.composedPath && c.composedPath());
    t.updateClickedSlide((d && d[0]) || c.target, d),
      t.emit("tap click", c),
      m < 300 &&
        h - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", c);
  }
  if (
    ((n.lastClickTime = Ri()),
    Rs(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      l.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let v;
  if (
    (i.followFinger
      ? (v = s ? t.translate : -t.translate)
      : (v = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  let g = 0,
    x = t.slidesSizesGrid[0];
  for (
    let d = 0;
    d < o.length;
    d += d < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const y = d < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof o[d + y] < "u"
      ? v >= o[d] && v < o[d + y] && ((g = d), (x = o[d + y] - o[d]))
      : v >= o[d] && ((g = d), (x = o[o.length - 1] - o[o.length - 2]));
  }
  let w = null,
    S = null;
  i.rewind &&
    (t.isBeginning
      ? (S =
          i.virtual && i.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (w = 0));
  const f = (v - o[g]) / x,
    u = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (m > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (f >= i.longSwipesRatio
        ? t.slideTo(i.rewind && t.isEnd ? w : g + u)
        : t.slideTo(g)),
      t.swipeDirection === "prev" &&
        (f > 1 - i.longSwipesRatio
          ? t.slideTo(g + u)
          : S !== null && f < 0 && Math.abs(f) > i.longSwipesRatio
          ? t.slideTo(S)
          : t.slideTo(g));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
      ? c.target === t.navigation.nextEl
        ? t.slideTo(g + u)
        : t.slideTo(g)
      : (t.swipeDirection === "next" && t.slideTo(w !== null ? w : g + u),
        t.swipeDirection === "prev" && t.slideTo(S !== null ? S : g));
  }
}
function su() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
    s = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const o = s && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !o
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !s
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function j1(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function P1() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const l = e.maxTranslate() - e.minTranslate();
  l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function M1(e) {
  const t = this;
  ai(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
let ou = !1;
function L1() {}
const Bd = (e, t) => {
  const n = Zt(),
    { params: r, el: i, wrapperEl: l, device: s } = e,
    o = !!r.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    c = t;
  i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    r.cssMode && l[a]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[c](
          s.ios || s.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          su,
          !0,
        )
      : e[c]("observerUpdate", su, !0),
    i[a]("load", e.onLoad, { capture: !0 });
};
function _1() {
  const e = this,
    t = Zt(),
    { params: n } = e;
  (e.onTouchStart = C1.bind(e)),
    (e.onTouchMove = k1.bind(e)),
    (e.onTouchEnd = T1.bind(e)),
    n.cssMode && (e.onScroll = P1.bind(e)),
    (e.onClick = j1.bind(e)),
    (e.onLoad = M1.bind(e)),
    ou || (t.addEventListener("touchstart", L1), (ou = !0)),
    Bd(e, "on");
}
function N1() {
  Bd(this, "off");
}
var z1 = { attachEvents: _1, detachEvents: N1 };
const au = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function I1() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    l = r.breakpoints;
  if (!l || (l && Object.keys(l).length === 0)) return;
  const s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
  if (!s || e.currentBreakpoint === s) return;
  const a = (s in l ? l[s] : void 0) || e.originalParams,
    c = au(e, r),
    h = au(e, a),
    m = r.enabled;
  c && !h
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !c &&
      h &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((f) => {
      if (typeof a[f] > "u") return;
      const u = r[f] && r[f].enabled,
        d = a[f] && a[f].enabled;
      u && !d && e[f].disable(), !u && d && e[f].enable();
    });
  const v = a.direction && a.direction !== r.direction,
    g = r.loop && (a.slidesPerView !== r.slidesPerView || v),
    x = r.loop;
  v && n && e.changeDirection(), ke(e.params, a);
  const w = e.params.enabled,
    S = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    m && !w ? e.disable() : !m && w && e.enable(),
    (e.currentBreakpoint = s),
    e.emit("_beforeBreakpoint", a),
    n &&
      (g
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !x && S
        ? (e.loopCreate(t), e.updateSlides())
        : x && !S && e.loopDestroy()),
    e.emit("breakpoint", a);
}
function b1(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = _e(),
    l = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const a = parseFloat(o.substr(1));
        return { value: l * a, point: o };
      }
      return { value: o, point: o };
    });
  s.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
  for (let o = 0; o < s.length; o += 1) {
    const { point: a, value: c } = s[o];
    t === "window"
      ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = a)
      : c <= n.clientWidth && (r = a);
  }
  return r || "max";
}
var O1 = { setBreakpoint: I1, getBreakpoint: b1 };
function R1(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function D1() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: l } = e,
    s = R1(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: l.android },
        { ios: l.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    );
  t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function A1() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n), e.emitContainerClasses();
}
var B1 = { addClasses: D1, removeClasses: A1 };
function F1() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > l;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var $1 = { checkOverflow: F1 },
  Bs = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function V1(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      l = r[i];
    if (typeof l != "object" || l === null) {
      ke(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in l))
    ) {
      ke(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      ke(t, r);
  };
}
const Rl = {
    eventsEmitter: B0,
    update: K0,
    translate: n1,
    transition: s1,
    slide: h1,
    loop: y1,
    grabCursor: S1,
    events: z1,
    breakpoints: O1,
    checkOverflow: $1,
    classes: B1,
  },
  Dl = {};
let Vo = class Je {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++)
      i[l] = arguments[l];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = ke({}, n)),
      t && !n.el && (n.el = t);
    const s = Zt();
    if (
      n.el &&
      typeof n.el == "string" &&
      s.querySelectorAll(n.el).length > 1
    ) {
      const h = [];
      return (
        s.querySelectorAll(n.el).forEach((m) => {
          const v = ke({}, n, { el: m });
          h.push(new Je(v));
        }),
        h
      );
    }
    const o = this;
    (o.__swiper__ = !0),
      (o.support = Dd()),
      (o.device = b0({ userAgent: n.userAgent })),
      (o.browser = R0()),
      (o.eventsListeners = {}),
      (o.eventsAnyListeners = []),
      (o.modules = [...o.__modules__]),
      n.modules && Array.isArray(n.modules) && o.modules.push(...n.modules);
    const a = {};
    o.modules.forEach((h) => {
      h({
        params: n,
        swiper: o,
        extendParams: V1(n, a),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o),
      });
    });
    const c = ke({}, Bs, a);
    return (
      (o.params = ke({}, c, Dl, n)),
      (o.originalParams = ke({}, o.params)),
      (o.passedParams = ke({}, n)),
      o.params &&
        o.params.on &&
        Object.keys(o.params.on).forEach((h) => {
          o.on(h, o.params.on[h]);
        }),
      o.params && o.params.onAny && o.onAny(o.params.onAny),
      Object.assign(o, {
        enabled: o.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return o.params.direction === "horizontal";
        },
        isVertical() {
          return o.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      o.emit("_swiper"),
      o.params.init && o.init(),
      o
    );
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = Ye(n, `.${r.slideClass}, swiper-slide`),
      l = Di(i[0]);
    return Di(t) - l;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t,
      )[0],
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = Ye(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0,
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: l,
        slidesGrid: s,
        slidesSizesGrid: o,
        size: a,
        activeIndex: c,
      } = r;
    let h = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let m = l[c] ? l[c].swiperSlideSize : 0,
        v;
      for (let g = c + 1; g < l.length; g += 1)
        l[g] &&
          !v &&
          ((m += l[g].swiperSlideSize), (h += 1), m > a && (v = !0));
      for (let g = c - 1; g >= 0; g -= 1)
        l[g] &&
          !v &&
          ((m += l[g].swiperSlideSize), (h += 1), m > a && (v = !0));
    } else if (t === "current")
      for (let m = c + 1; m < l.length; m += 1)
        (n ? s[m] + o[m] - s[c] < a : s[m] - s[c] < a) && (h += 1);
    else for (let m = c - 1; m >= 0; m -= 1) s[c] - s[m] < a && (h += 1);
    return h;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
        s.complete && ai(t, s);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        o = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let l;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        l = t.slideTo(s.length - 1, 0, !1, !0);
      } else l = t.slideTo(t.activeIndex, 0, !1, !0);
      l || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((l) => {
          t === "vertical" ? (l.style.width = "") : (l.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s = (() =>
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : Ye(r, i())[0])();
    return (
      !s &&
        n.params.createElements &&
        ((s = Od("div", n.params.wrapperClass)),
        r.append(s),
        Ye(r, `.${n.params.slideClass}`).forEach((o) => {
          s.append(o);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: s,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || vt(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || vt(r, "direction") === "rtl"),
        wrongRTL: vt(s, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((l) => {
        l.complete
          ? ai(n, l)
          : l.addEventListener("load", (s) => {
              ai(n, s.target);
            });
      }),
      As(n),
      (n.initialized = !0),
      As(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: l, wrapperEl: s, slides: o } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          l.removeAttribute("style"),
          s.removeAttribute("style"),
          o &&
            o.length &&
            o.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass,
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((a) => {
          r.off(a);
        }),
        t !== !1 && ((r.el.swiper = null), j0(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    ke(Dl, t);
  }
  static get extendedDefaults() {
    return Dl;
  }
  static get defaults() {
    return Bs;
  }
  static installModule(t) {
    Je.prototype.__modules__ || (Je.prototype.__modules__ = []);
    const n = Je.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Je.installModule(n)), Je)
      : (Je.installModule(t), Je);
  }
};
Object.keys(Rl).forEach((e) => {
  Object.keys(Rl[e]).forEach((t) => {
    Vo.prototype[t] = Rl[e][t];
  });
});
Vo.use([D0, A0]);
const Fd = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Qt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function Ht(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Qt(t[r]) && Qt(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Ht(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function $d(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function Vd(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Hd(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Ud(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function H1(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function U1(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: l,
    prevEl: s,
    scrollbarEl: o,
    paginationEl: a,
  } = e;
  const c = i.filter(
      (k) => k !== "children" && k !== "direction" && k !== "wrapperClass",
    ),
    {
      params: h,
      pagination: m,
      navigation: v,
      scrollbar: g,
      virtual: x,
      thumbs: w,
    } = t;
  let S, f, u, d, y, C, j, T;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    h.thumbs &&
    !h.thumbs.swiper &&
    (S = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      h.controller &&
      !h.controller.control &&
      (f = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || a) &&
      (h.pagination || h.pagination === !1) &&
      m &&
      !m.el &&
      (u = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || o) &&
      (h.scrollbar || h.scrollbar === !1) &&
      g &&
      !g.el &&
      (d = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || s) &&
      (r.navigation.nextEl || l) &&
      (h.navigation || h.navigation === !1) &&
      v &&
      !v.prevEl &&
      !v.nextEl &&
      (y = !0);
  const E = (k) => {
    t[k] &&
      (t[k].destroy(),
      k === "navigation"
        ? (t.isElement && (t[k].prevEl.remove(), t[k].nextEl.remove()),
          (h[k].prevEl = void 0),
          (h[k].nextEl = void 0),
          (t[k].prevEl = void 0),
          (t[k].nextEl = void 0))
        : (t.isElement && t[k].el.remove(),
          (h[k].el = void 0),
          (t[k].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (h.loop && !r.loop ? (C = !0) : !h.loop && r.loop ? (j = !0) : (T = !0)),
    c.forEach((k) => {
      if (Qt(h[k]) && Qt(r[k]))
        Ht(h[k], r[k]),
          (k === "navigation" || k === "pagination" || k === "scrollbar") &&
            "enabled" in r[k] &&
            !r[k].enabled &&
            E(k);
      else {
        const _ = r[k];
        (_ === !0 || _ === !1) &&
        (k === "navigation" || k === "pagination" || k === "scrollbar")
          ? _ === !1 && E(k)
          : (h[k] = r[k]);
      }
    }),
    c.includes("controller") &&
      !f &&
      t.controller &&
      t.controller.control &&
      h.controller &&
      h.controller.control &&
      (t.controller.control = h.controller.control),
    i.includes("children") &&
      n &&
      x &&
      h.virtual.enabled &&
      ((x.slides = n), x.update(!0)),
    i.includes("children") && n && h.loop && (T = !0),
    S && w.init() && w.update(!0),
    f && (t.controller.control = h.controller.control),
    u &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (h.pagination.el = a),
      m.init(),
      m.render(),
      m.update()),
    d &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-scrollbar"),
        o.part.add("scrollbar"),
        t.el.appendChild(o)),
      o && (h.scrollbar.el = o),
      g.init(),
      g.updateSize(),
      g.setTranslate()),
    y &&
      (t.isElement &&
        ((!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-next"),
          (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
          l.part.add("button-next"),
          t.el.appendChild(l)),
        (!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-prev"),
          (s.innerHTML = t.hostEl.constructor.prevButtonSvg),
          s.part.add("button-prev"),
          t.el.appendChild(s))),
      l && (h.navigation.nextEl = l),
      s && (h.navigation.prevEl = s),
      v.init(),
      v.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (C || T) && t.loopDestroy(),
    (j || T) && t.loopCreate(),
    t.update();
}
function W1(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  Ht(n, Bs), (n._emitClasses = !0), (n.init = !1);
  const l = {},
    s = Fd.map((a) => a.replace(/_/, "")),
    o = Object.assign({}, e);
  return (
    Object.keys(o).forEach((a) => {
      typeof e[a] > "u" ||
        (s.indexOf(a) >= 0
          ? Qt(e[a])
            ? ((n[a] = {}), (i[a] = {}), Ht(n[a], e[a]), Ht(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
          ? t
            ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (l[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: l, events: r }
  );
}
function G1(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: l,
    scrollbarEl: s,
    swiper: o,
  } = e;
  $d(t) &&
    r &&
    i &&
    ((o.params.navigation.nextEl = r),
    (o.originalParams.navigation.nextEl = r),
    (o.params.navigation.prevEl = i),
    (o.originalParams.navigation.prevEl = i)),
    Vd(t) &&
      l &&
      ((o.params.pagination.el = l), (o.originalParams.pagination.el = l)),
    Hd(t) &&
      s &&
      ((o.params.scrollbar.el = s), (o.originalParams.scrollbar.el = s)),
    o.init(n);
}
function Y1(e, t, n, r, i) {
  const l = [];
  if (!t) return l;
  const s = (a) => {
    l.indexOf(a) < 0 && l.push(a);
  };
  if (n && r) {
    const a = r.map(i),
      c = n.map(i);
    a.join("") !== c.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    Fd.filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (Qt(e[a]) && Qt(t[a])) {
            const c = Object.keys(e[a]),
              h = Object.keys(t[a]);
            c.length !== h.length
              ? s(a)
              : (c.forEach((m) => {
                  e[a][m] !== t[a][m] && s(a);
                }),
                h.forEach((m) => {
                  e[a][m] !== t[a][m] && s(a);
                }));
          } else e[a] !== t[a] && s(a);
      }),
    l
  );
}
const X1 = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Ai() {
  return (
    (Ai = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ai.apply(this, arguments)
  );
}
function Wd(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function Gd(e) {
  const t = [];
  return (
    J.Children.toArray(e).forEach((n) => {
      Wd(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Gd(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function Q1(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    J.Children.toArray(e).forEach((r) => {
      if (Wd(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = Gd(r.props.children);
        i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function K1(e, t, n) {
  if (!n) return null;
  const r = (h) => {
      let m = h;
      return (
        h < 0 ? (m = t.length + h) : m >= t.length && (m = m - t.length), m
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: l, to: s } = n,
    o = e.params.loop ? -t.length : 0,
    a = e.params.loop ? t.length * 2 : t.length,
    c = [];
  for (let h = o; h < a; h += 1) h >= l && h <= s && c.push(t[r(h)]);
  return c.map((h, m) =>
    J.cloneElement(h, { swiper: e, style: i, key: `slide-${m}` }),
  );
}
function rr(e, t) {
  return typeof window > "u" ? M.useEffect(e, t) : M.useLayoutEffect(e, t);
}
const uu = M.createContext(null),
  J1 = M.createContext(null),
  Mr = M.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: l,
        onSwiper: s,
        ...o
      } = e === void 0 ? {} : e,
      a = !1;
    const [c, h] = M.useState("swiper"),
      [m, v] = M.useState(null),
      [g, x] = M.useState(!1),
      w = M.useRef(!1),
      S = M.useRef(null),
      f = M.useRef(null),
      u = M.useRef(null),
      d = M.useRef(null),
      y = M.useRef(null),
      C = M.useRef(null),
      j = M.useRef(null),
      T = M.useRef(null),
      { params: E, passedParams: k, rest: _, events: P } = W1(o),
      { slides: N, slots: I } = Q1(l),
      D = () => {
        x(!g);
      };
    Object.assign(E.on, {
      _containerClasses(O, R) {
        h(R);
      },
    });
    const $ = () => {
      Object.assign(E.on, P), (a = !0);
      const O = { ...E };
      if (
        (delete O.wrapperClass,
        (f.current = new Vo(O)),
        f.current.virtual && f.current.params.virtual.enabled)
      ) {
        f.current.virtual.slides = N;
        const R = {
          cache: !1,
          slides: N,
          renderExternal: v,
          renderExternalUpdate: !1,
        };
        Ht(f.current.params.virtual, R),
          Ht(f.current.originalParams.virtual, R);
      }
    };
    S.current || $(), f.current && f.current.on("_beforeBreakpoint", D);
    const pe = () => {
        a ||
          !P ||
          !f.current ||
          Object.keys(P).forEach((O) => {
            f.current.on(O, P[O]);
          });
      },
      zt = () => {
        !P ||
          !f.current ||
          Object.keys(P).forEach((O) => {
            f.current.off(O, P[O]);
          });
      };
    M.useEffect(() => () => {
      f.current && f.current.off("_beforeBreakpoint", D);
    }),
      M.useEffect(() => {
        !w.current &&
          f.current &&
          (f.current.emitSlidesClasses(), (w.current = !0));
      }),
      rr(() => {
        if ((t && (t.current = S.current), !!S.current))
          return (
            f.current.destroyed && $(),
            G1(
              {
                el: S.current,
                nextEl: y.current,
                prevEl: C.current,
                paginationEl: j.current,
                scrollbarEl: T.current,
                swiper: f.current,
              },
              E,
            ),
            s && s(f.current),
            () => {
              f.current && !f.current.destroyed && f.current.destroy(!0, !1);
            }
          );
      }, []),
      rr(() => {
        pe();
        const O = Y1(k, u.current, N, d.current, (R) => R.key);
        return (
          (u.current = k),
          (d.current = N),
          O.length &&
            f.current &&
            !f.current.destroyed &&
            U1({
              swiper: f.current,
              slides: N,
              passedParams: k,
              changedParams: O,
              nextEl: y.current,
              prevEl: C.current,
              scrollbarEl: T.current,
              paginationEl: j.current,
            }),
          () => {
            zt();
          }
        );
      }),
      rr(() => {
        X1(f.current);
      }, [m]);
    function z() {
      return E.virtual
        ? K1(f.current, N, m)
        : N.map((O, R) =>
            J.cloneElement(O, { swiper: f.current, swiperSlideIndex: R }),
          );
    }
    return J.createElement(
      r,
      Ai({ ref: S, className: Ud(`${c}${n ? ` ${n}` : ""}`) }, _),
      J.createElement(
        J1.Provider,
        { value: f.current },
        I["container-start"],
        J.createElement(
          i,
          { className: H1(E.wrapperClass) },
          I["wrapper-start"],
          z(),
          I["wrapper-end"],
        ),
        $d(E) &&
          J.createElement(
            J.Fragment,
            null,
            J.createElement("div", { ref: C, className: "swiper-button-prev" }),
            J.createElement("div", { ref: y, className: "swiper-button-next" }),
          ),
        Hd(E) &&
          J.createElement("div", { ref: T, className: "swiper-scrollbar" }),
        Vd(E) &&
          J.createElement("div", { ref: j, className: "swiper-pagination" }),
        I["container-end"],
      ),
    );
  });
Mr.displayName = "Swiper";
const Lr = M.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: l,
    zoom: s,
    lazy: o,
    virtualIndex: a,
    swiperSlideIndex: c,
    ...h
  } = e === void 0 ? {} : e;
  const m = M.useRef(null),
    [v, g] = M.useState("swiper-slide"),
    [x, w] = M.useState(!1);
  function S(y, C, j) {
    C === m.current && g(j);
  }
  rr(() => {
    if (
      (typeof c < "u" && (m.current.swiperSlideIndex = c),
      t && (t.current = m.current),
      !(!m.current || !l))
    ) {
      if (l.destroyed) {
        v !== "swiper-slide" && g("swiper-slide");
        return;
      }
      return (
        l.on("_slideClass", S),
        () => {
          l && l.off("_slideClass", S);
        }
      );
    }
  }),
    rr(() => {
      l && m.current && !l.destroyed && g(l.getSlideClasses(m.current));
    }, [l]);
  const f = {
      isActive: v.indexOf("swiper-slide-active") >= 0,
      isVisible: v.indexOf("swiper-slide-visible") >= 0,
      isPrev: v.indexOf("swiper-slide-prev") >= 0,
      isNext: v.indexOf("swiper-slide-next") >= 0,
    },
    u = () => (typeof r == "function" ? r(f) : r),
    d = () => {
      w(!0);
    };
  return J.createElement(
    n,
    Ai(
      {
        ref: m,
        className: Ud(`${v}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: d,
      },
      h,
    ),
    s &&
      J.createElement(
        uu.Provider,
        { value: f },
        J.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof s == "number" ? s : void 0,
          },
          u(),
          o &&
            !x &&
            J.createElement("div", { className: "swiper-lazy-preloader" }),
        ),
      ),
    !s &&
      J.createElement(
        uu.Provider,
        { value: f },
        u(),
        o &&
          !x &&
          J.createElement("div", { className: "swiper-lazy-preloader" }),
      ),
  );
});
Lr.displayName = "SwiperSlide";
function Yd(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let l = Ye(e.el, `.${r[i]}`)[0];
          l || ((l = Od("div", r[i])), (l.className = r[i]), e.el.append(l)),
            (n[i] = l),
            (t[i] = l);
        }
      }),
    n
  );
}
function nl(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  const l = (w) => (Array.isArray(w) ? w : [w]).filter((S) => !!S);
  function s(w) {
    let S;
    return w &&
      typeof w == "string" &&
      t.isElement &&
      ((S = t.el.querySelector(w)), S)
      ? S
      : (w &&
          (typeof w == "string" && (S = [...document.querySelectorAll(w)]),
          t.params.uniqueNavElements &&
            typeof w == "string" &&
            S.length > 1 &&
            t.el.querySelectorAll(w).length === 1 &&
            (S = t.el.querySelector(w))),
        w && !S ? w : S);
  }
  function o(w, S) {
    const f = t.params.navigation;
    (w = l(w)),
      w.forEach((u) => {
        u &&
          (u.classList[S ? "add" : "remove"](...f.disabledClass.split(" ")),
          u.tagName === "BUTTON" && (u.disabled = S),
          t.params.watchOverflow &&
            t.enabled &&
            u.classList[t.isLocked ? "add" : "remove"](f.lockClass));
      });
  }
  function a() {
    const { nextEl: w, prevEl: S } = t.navigation;
    if (t.params.loop) {
      o(S, !1), o(w, !1);
      return;
    }
    o(S, t.isBeginning && !t.params.rewind), o(w, t.isEnd && !t.params.rewind);
  }
  function c(w) {
    w.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function h(w) {
    w.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"));
  }
  function m() {
    const w = t.params.navigation;
    if (
      ((t.params.navigation = Yd(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(w.nextEl || w.prevEl))
    )
      return;
    let S = s(w.nextEl),
      f = s(w.prevEl);
    Object.assign(t.navigation, { nextEl: S, prevEl: f }),
      (S = l(S)),
      (f = l(f));
    const u = (d, y) => {
      d && d.addEventListener("click", y === "next" ? h : c),
        !t.enabled && d && d.classList.add(...w.lockClass.split(" "));
    };
    S.forEach((d) => u(d, "next")), f.forEach((d) => u(d, "prev"));
  }
  function v() {
    let { nextEl: w, prevEl: S } = t.navigation;
    (w = l(w)), (S = l(S));
    const f = (u, d) => {
      u.removeEventListener("click", d === "next" ? h : c),
        u.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    w.forEach((u) => f(u, "next")), S.forEach((u) => f(u, "prev"));
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? x() : (m(), a());
  }),
    r("toEdge fromEdge lock unlock", () => {
      a();
    }),
    r("destroy", () => {
      v();
    }),
    r("enable disable", () => {
      let { nextEl: w, prevEl: S } = t.navigation;
      if (((w = l(w)), (S = l(S)), t.enabled)) {
        a();
        return;
      }
      [...w, ...S]
        .filter((f) => !!f)
        .forEach((f) => f.classList.add(t.params.navigation.lockClass));
    }),
    r("click", (w, S) => {
      let { nextEl: f, prevEl: u } = t.navigation;
      (f = l(f)), (u = l(u));
      const d = S.target;
      if (t.params.navigation.hideOnClick && !u.includes(d) && !f.includes(d)) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === d || t.pagination.el.contains(d))
        )
          return;
        let y;
        f.length
          ? (y = f[0].classList.contains(t.params.navigation.hiddenClass))
          : u.length &&
            (y = u[0].classList.contains(t.params.navigation.hiddenClass)),
          i(y === !0 ? "navigationShow" : "navigationHide"),
          [...f, ...u]
            .filter((C) => !!C)
            .forEach((C) =>
              C.classList.toggle(t.params.navigation.hiddenClass),
            );
      }
    });
  const g = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        m(),
        a();
    },
    x = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        v();
    };
  Object.assign(t.navigation, {
    enable: g,
    disable: x,
    update: a,
    init: m,
    destroy: v,
  });
}
function Vn(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function rl(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const l = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (u) => u,
      formatFractionTotal: (u) => u,
      bulletClass: `${l}-bullet`,
      bulletActiveClass: `${l}-bullet-active`,
      modifierClass: `${l}-`,
      currentClass: `${l}-current`,
      totalClass: `${l}-total`,
      hiddenClass: `${l}-hidden`,
      progressbarFillClass: `${l}-progressbar-fill`,
      progressbarOppositeClass: `${l}-progressbar-opposite`,
      clickableClass: `${l}-clickable`,
      lockClass: `${l}-lock`,
      horizontalClass: `${l}-horizontal`,
      verticalClass: `${l}-vertical`,
      paginationDisabledClass: `${l}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let s,
    o = 0;
  const a = (u) => (Array.isArray(u) ? u : [u]).filter((d) => !!d);
  function c() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function h(u, d) {
    const { bulletActiveClass: y } = t.params.pagination;
    u &&
      ((u = u[`${d === "prev" ? "previous" : "next"}ElementSibling`]),
      u &&
        (u.classList.add(`${y}-${d}`),
        (u = u[`${d === "prev" ? "previous" : "next"}ElementSibling`]),
        u && u.classList.add(`${y}-${d}-${d}`)));
  }
  function m(u) {
    const d = u.target.closest(Vn(t.params.pagination.bulletClass));
    if (!d) return;
    u.preventDefault();
    const y = Di(d) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === y) return;
      const C = t.realIndex,
        j = t.getSlideIndexByData(y),
        T = t.getSlideIndexByData(t.realIndex),
        E = (k) => {
          const _ = t.activeIndex;
          t.loopFix({ direction: k, activeSlideIndex: j, slideTo: !1 });
          const P = t.activeIndex;
          _ === P && t.slideToLoop(C, 0, !1, !0);
        };
      if (j > t.slides.length - t.loopedSlides) E(j > T ? "next" : "prev");
      else if (t.params.centeredSlides) {
        const k =
          t.params.slidesPerView === "auto"
            ? t.slidesPerViewDynamic()
            : Math.ceil(parseFloat(t.params.slidesPerView, 10));
        j < Math.floor(k / 2) && E("prev");
      }
      t.slideToLoop(y);
    } else t.slideTo(y);
  }
  function v() {
    const u = t.rtl,
      d = t.params.pagination;
    if (c()) return;
    let y = t.pagination.el;
    y = a(y);
    let C, j;
    const T =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      E = t.params.loop
        ? Math.ceil(T / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((j = t.previousRealIndex || 0),
          (C =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((C = t.snapIndex), (j = t.previousSnapIndex))
        : ((j = t.previousIndex || 0), (C = t.activeIndex || 0)),
      d.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const k = t.pagination.bullets;
      let _, P, N;
      if (
        (d.dynamicBullets &&
          ((s = Ds(k[0], t.isHorizontal() ? "width" : "height", !0)),
          y.forEach((I) => {
            I.style[t.isHorizontal() ? "width" : "height"] = `${
              s * (d.dynamicMainBullets + 4)
            }px`;
          }),
          d.dynamicMainBullets > 1 &&
            j !== void 0 &&
            ((o += C - (j || 0)),
            o > d.dynamicMainBullets - 1
              ? (o = d.dynamicMainBullets - 1)
              : o < 0 && (o = 0)),
          (_ = Math.max(C - o, 0)),
          (P = _ + (Math.min(k.length, d.dynamicMainBullets) - 1)),
          (N = (P + _) / 2)),
        k.forEach((I) => {
          const D = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              ($) => `${d.bulletActiveClass}${$}`,
            ),
          ]
            .map(($) =>
              typeof $ == "string" && $.includes(" ") ? $.split(" ") : $,
            )
            .flat();
          I.classList.remove(...D);
        }),
        y.length > 1)
      )
        k.forEach((I) => {
          const D = Di(I);
          D === C
            ? I.classList.add(...d.bulletActiveClass.split(" "))
            : t.isElement && I.setAttribute("part", "bullet"),
            d.dynamicBullets &&
              (D >= _ &&
                D <= P &&
                I.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),
              D === _ && h(I, "prev"),
              D === P && h(I, "next"));
        });
      else {
        const I = k[C];
        if (
          (I && I.classList.add(...d.bulletActiveClass.split(" ")),
          t.isElement &&
            k.forEach((D, $) => {
              D.setAttribute("part", $ === C ? "bullet-active" : "bullet");
            }),
          d.dynamicBullets)
        ) {
          const D = k[_],
            $ = k[P];
          for (let pe = _; pe <= P; pe += 1)
            k[pe] &&
              k[pe].classList.add(...`${d.bulletActiveClass}-main`.split(" "));
          h(D, "prev"), h($, "next");
        }
      }
      if (d.dynamicBullets) {
        const I = Math.min(k.length, d.dynamicMainBullets + 4),
          D = (s * I - s) / 2 - N * s,
          $ = u ? "right" : "left";
        k.forEach((pe) => {
          pe.style[t.isHorizontal() ? $ : "top"] = `${D}px`;
        });
      }
    }
    y.forEach((k, _) => {
      if (
        (d.type === "fraction" &&
          (k.querySelectorAll(Vn(d.currentClass)).forEach((P) => {
            P.textContent = d.formatFractionCurrent(C + 1);
          }),
          k.querySelectorAll(Vn(d.totalClass)).forEach((P) => {
            P.textContent = d.formatFractionTotal(E);
          })),
        d.type === "progressbar")
      ) {
        let P;
        d.progressbarOpposite
          ? (P = t.isHorizontal() ? "vertical" : "horizontal")
          : (P = t.isHorizontal() ? "horizontal" : "vertical");
        const N = (C + 1) / E;
        let I = 1,
          D = 1;
        P === "horizontal" ? (I = N) : (D = N),
          k.querySelectorAll(Vn(d.progressbarFillClass)).forEach(($) => {
            ($.style.transform = `translate3d(0,0,0) scaleX(${I}) scaleY(${D})`),
              ($.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      d.type === "custom" && d.renderCustom
        ? ((k.innerHTML = d.renderCustom(t, C + 1, E)),
          _ === 0 && i("paginationRender", k))
        : (_ === 0 && i("paginationRender", k), i("paginationUpdate", k)),
        t.params.watchOverflow &&
          t.enabled &&
          k.classList[t.isLocked ? "add" : "remove"](d.lockClass);
    });
  }
  function g() {
    const u = t.params.pagination;
    if (c()) return;
    const d =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.slides.length;
    let y = t.pagination.el;
    y = a(y);
    let C = "";
    if (u.type === "bullets") {
      let j = t.params.loop
        ? Math.ceil(d / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && j > d && (j = d);
      for (let T = 0; T < j; T += 1)
        u.renderBullet
          ? (C += u.renderBullet.call(t, T, u.bulletClass))
          : (C += `<${u.bulletElement} ${
              t.isElement ? 'part="bullet"' : ""
            } class="${u.bulletClass}"></${u.bulletElement}>`);
    }
    u.type === "fraction" &&
      (u.renderFraction
        ? (C = u.renderFraction.call(t, u.currentClass, u.totalClass))
        : (C = `<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`)),
      u.type === "progressbar" &&
        (u.renderProgressbar
          ? (C = u.renderProgressbar.call(t, u.progressbarFillClass))
          : (C = `<span class="${u.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      y.forEach((j) => {
        u.type !== "custom" && (j.innerHTML = C || ""),
          u.type === "bullets" &&
            t.pagination.bullets.push(...j.querySelectorAll(Vn(u.bulletClass)));
      }),
      u.type !== "custom" && i("paginationRender", y[0]);
  }
  function x() {
    t.params.pagination = Yd(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" },
    );
    const u = t.params.pagination;
    if (!u.el) return;
    let d;
    typeof u.el == "string" && t.isElement && (d = t.el.querySelector(u.el)),
      !d &&
        typeof u.el == "string" &&
        (d = [...document.querySelectorAll(u.el)]),
      d || (d = u.el),
      !(!d || d.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof u.el == "string" &&
          Array.isArray(d) &&
          d.length > 1 &&
          ((d = [...t.el.querySelectorAll(u.el)]),
          d.length > 1 &&
            (d = d.filter((y) => Rd(y, ".swiper")[0] === t.el)[0])),
        Array.isArray(d) && d.length === 1 && (d = d[0]),
        Object.assign(t.pagination, { el: d }),
        (d = a(d)),
        d.forEach((y) => {
          u.type === "bullets" &&
            u.clickable &&
            y.classList.add(...(u.clickableClass || "").split(" ")),
            y.classList.add(u.modifierClass + u.type),
            y.classList.add(
              t.isHorizontal() ? u.horizontalClass : u.verticalClass,
            ),
            u.type === "bullets" &&
              u.dynamicBullets &&
              (y.classList.add(`${u.modifierClass}${u.type}-dynamic`),
              (o = 0),
              u.dynamicMainBullets < 1 && (u.dynamicMainBullets = 1)),
            u.type === "progressbar" &&
              u.progressbarOpposite &&
              y.classList.add(u.progressbarOppositeClass),
            u.clickable && y.addEventListener("click", m),
            t.enabled || y.classList.add(u.lockClass);
        }));
  }
  function w() {
    const u = t.params.pagination;
    if (c()) return;
    let d = t.pagination.el;
    d &&
      ((d = a(d)),
      d.forEach((y) => {
        y.classList.remove(u.hiddenClass),
          y.classList.remove(u.modifierClass + u.type),
          y.classList.remove(
            t.isHorizontal() ? u.horizontalClass : u.verticalClass,
          ),
          u.clickable &&
            (y.classList.remove(...(u.clickableClass || "").split(" ")),
            y.removeEventListener("click", m));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((y) =>
          y.classList.remove(...u.bulletActiveClass.split(" ")),
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const u = t.params.pagination;
    let { el: d } = t.pagination;
    (d = a(d)),
      d.forEach((y) => {
        y.classList.remove(u.horizontalClass, u.verticalClass),
          y.classList.add(
            t.isHorizontal() ? u.horizontalClass : u.verticalClass,
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? f() : (x(), g(), v());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && v();
    }),
    r("snapIndexChange", () => {
      v();
    }),
    r("snapGridLengthChange", () => {
      g(), v();
    }),
    r("destroy", () => {
      w();
    }),
    r("enable disable", () => {
      let { el: u } = t.pagination;
      u &&
        ((u = a(u)),
        u.forEach((d) =>
          d.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass,
          ),
        ));
    }),
    r("lock unlock", () => {
      v();
    }),
    r("click", (u, d) => {
      const y = d.target,
        C = a(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        C &&
        C.length > 0 &&
        !y.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && y === t.navigation.nextEl) ||
            (t.navigation.prevEl && y === t.navigation.prevEl))
        )
          return;
        const j = C[0].classList.contains(t.params.pagination.hiddenClass);
        i(j === !0 ? "paginationShow" : "paginationHide"),
          C.forEach((T) => T.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const S = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: u } = t.pagination;
      u &&
        ((u = a(u)),
        u.forEach((d) =>
          d.classList.remove(t.params.pagination.paginationDisabledClass),
        )),
        x(),
        g(),
        v();
    },
    f = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: u } = t.pagination;
      u &&
        ((u = a(u)),
        u.forEach((d) =>
          d.classList.add(t.params.pagination.paginationDisabledClass),
        )),
        w();
    };
  Object.assign(t.pagination, {
    enable: S,
    disable: f,
    render: g,
    update: v,
    init: x,
    destroy: w,
  });
}
const Ke = [
  {
    id: "project-forestessentialindia",
    name: "Forest Essential India Clone",
    discription:
      "In this project, we made a clone of forestessentialindia.com. We made a 90%-95% clone of the official website. We made a fully dynamic website in which you can go over through all projects, you can sign in and signup, and much more.",
    tech: "HTML, CSS, Javascript, node.js",
    features: [
      "Dynamic navbar and footer",
      "Bespoke services and About us page",
      "Dynamic Cart and Wishlist page",
      "Payment and Gateway",
    ],
    color: "#590d22",
    bgcolor: "#ff758f",
    image: "forestessentialindia.webp",
    deploy: "https://forestessentialindiaclone.netlify.app/",
    github: "https://github.com/Deepu2560/forestessentialsindia",
  },
  {
    id: "project-nike-html",
    name: "Nike Clone",
    discription:
      "In this project, we made a clone of Nike.com. On our website, you get an overview page of every single category and on that page, you get the option to move for shoes or clothes of that category. On our website, you get a dynamic payment and gateway page too.",
    tech: "HTML, CSS, Javascript, Node.js, ES6 (advanse js), Import and export (advance js)",
    features: [
      "Dynamic Sign/Signin Page",
      "Dynamic Filter and Sort features",
      "Sneakers Page",
    ],
    color: "#ff7b00",
    bgcolor: "#ffea00",
    image: "nike.webp",
    deploy: "https://nikemasaischoolclone.netlify.app/",
    github: "https://github.com/Deepu2560/Nike",
  },
  {
    id: "project-netflix",
    name: "Netflix Clone",
    discription:
      "In this project, we used react, javascript, scss framework to build; this website. We made this clone 1 week and in our team we are 5 members. You can only watch trailers of movies in this clone.",
    tech: "REACT, MONGODB, SASS, NodeJS, Express",
    features: [
      "Dynamic Modern design Signup/Signup Page",
      "90% clone of original Netflix",
      "Web application made by use of react",
      "Dynamic database made by mongodb, express and heroku",
    ],
    color: "#583101",
    bgcolor: "#e7bc91",
    image: "netflix.webp",
    deploy: "https://netflix-clone-eight-psi.vercel.app/",
    github: "https://github.com/Deepu2560/Netflix",
  },
  {
    id: "project-hire-a-cook",
    name: "Hire A Cook",
    discription:
      "This is a unique website. We in a team made this website start from scratch. This is for masai school hackathon project. In this website you can book a cook on subscription bases and you have to also give information about for how many cook have to make food and in many times a day.",
    tech: "React, Redux, Material UI, Express, MongoDB, Node.js, Javascript, HTML, CSS, Socket.io",
    features: [
      "dynamic Signin/Signup page",
      "fully dynamic interface",
      "User friendly",
      "Dynamic product page",
    ],
    color: "#1b4332",
    bgcolor: "#95d5b2",
    image: "hireAcook.webp",
    deploy: "https://hirecook.vercel.app/",
    github: "https://github.com/Deepu2560/Hire-A-Cook",
  },
  {
    id: "project-text-to-speech",
    name: "Text To Speech",
    discription:
      "This is a solo project. In this project text will be converted text to speech. I made this project with use of HTML, CSS and javascript. You can also reset speech and text my pausing and then clicking reset button or by refreshing page.",
    tech: "HTML, CSS, Javascript, Vercel",
    features: [
      "Dynamic modern UI",
      "Text to speech",
      "Speech voice according to device",
    ],
    color: "#023e8a",
    bgcolor: "#82c0cc",
    image: "textToSpeech.webp",
    deploy: "https://deepu2560-text-to-speech.vercel.app/",
    github: "https://github.com/Deepu2560/text-to-speech",
  },
  {
    id: "project-todo-app",
    name: "Todo App",
    discription:
      "This website is a todo web application. In this application you can add task as pending then change status to doing then done and then you can delete. This web application have signin and signup feature too.",
    tech: "React, React-Redux, Express, MongoDB, Node.js, Javascript, HTML, CSS, Heroku, Vercel",
    features: [
      "dynamic modern style navbar",
      "Modern style home page",
      "pending, doing and done section layout",
      "full-stack web app",
    ],
    color: "#03045e",
    bgcolor: "#48cae4",
    image: "todoApp.webp",
    deploy: "https://deepu2560-todo-app.vercel.app/",
    github: "https://github.com/Deepu2560/TODO-list",
  },
  {
    id: "project-movie-app",
    name: "Movie App",
    discription:
      "In this web application you can search for any movie you want. After search you will see alot of results when you click anyone of the reasult you will see details of that movie. Currently you will see name of the movie, overview, budget, release date. This is just to demo project.",
    tech: "HTML, CSS, Javascript, Nodejs, Reactjs, Axios, Vercel",
    features: [
      "Modern search UI",
      "Modern use of react components",
      "Direct movie search option",
    ],
    color: "#800f2f",
    bgcolor: "#ffb3c1",
    image: "movie.webp",
    deploy: "https://deepu2560-movie-app.vercel.app/",
    github: "https://github.com/Deepu2560/movie-app",
  },
  {
    id: "project-stopwatch",
    name: "Stopwatch App",
    discription:
      "In this project you will see two react component, one is clock which shows you current time in you location and another one is a stop watch which you can start , stop and restart timer of stopwatch.",
    tech: "Reactjs, HTML, CSS, Javascript, Nodejs, Vercel",
    features: [
      "Attractive UI",
      "Real time watch",
      "Can start, stop and reset stopwatch",
    ],
    color: "#333533",
    bgcolor: "#d3d3d3",
    image: "stopwatch.webp",
    deploy: "https://deepu2560-stopwatch.vercel.app/",
    github: "https://github.com/Deepu2560/stopwatch",
  },
  {
    id: "project-word-game",
    name: "Word Game",
    discription:
      "This is a solo project. This is simple word puzzle game, in which you have to guess the word correct before the timer ends.",
    tech: "HTML, CSS, Javascript, Vercel",
    features: [
      "Scramble word game",
      "Guess word in limited timing",
      "Challenges to improve problem solving skill",
    ],
    color: "#621708",
    bgcolor: "#f3dfc1",
    image: "wordGame.webp",
    deploy: "https://deepu2560-word-game.vercel.app/",
    github: "https://github.com/Deepu2560/text-to-speech",
  },
  {
    id: "project-word-count",
    name: "Word Counter",
    discription:
      "This web app you can count words in you speech, essay, mail, etc. Just paste your paragraph in this app and you will able see word and characters.",
    tech: "HTML, CSS, Javascript, Reactjs, Vercel",
    features: [
      "word count in paragraph",
      "Character count in paragraph",
      "Responsive Design",
    ],
    color: "#006466",
    bgcolor: "#dde5b6",
    image: "wordCount.webp",
    deploy: "https://deepu2560-word-count.vercel.app/",
    github: "https://github.com/Deepu2560/word-counter",
  },
];
function Z1() {
  const [e, t] = M.useState(0);
  return p.jsxs("div", {
    className: "projects-section-container",
    children: [
      p.jsxs("div", {
        className: "projects-section-details-container",
        children: [
          p.jsxs("div", {
            className: "projects-section-details-info",
            children: [
              p.jsx("p", { children: Ke[e].discription }),
              p.jsxs("p", {
                children: [
                  p.jsx("strong", { children: "Tech Stack :- " }),
                  Ke[e].tech,
                ],
              }),
              p.jsx("ul", {
                children: Ke[e].features.map((n, r) =>
                  p.jsx("li", { children: n }, r),
                ),
              }),
              Ke[e].deploy
                ? p.jsx("span", {
                    onClick: () => window.open(Ke[e].deploy, "_blank"),
                    children: p.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "2vw",
                      height: "2vw",
                      fill: "currentColor",
                      className: "bi bi-browser-chrome",
                      viewBox: "0 0 16 16",
                      children: p.jsx("path", {
                        fillRule: "evenodd",
                        d: "M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                      }),
                    }),
                  })
                : null,
              Ke[e].github
                ? p.jsx("span", {
                    onClick: () => window.open(Ke[e].github, "_blank"),
                    children: p.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "2vw",
                      height: "2vw",
                      fill: "currentColor",
                      className: "bi bi-github",
                      viewBox: "0 0 16 16",
                      children: p.jsx("path", {
                        d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                      }),
                    }),
                  })
                : null,
            ],
          }),
          p.jsx("div", {
            className: "projects-section-details-image",
            children: p.jsx("img", {
              src: `/Images/projects/${Ke[e].image}`,
              alt: "",
            }),
          }),
        ],
      }),
      p.jsx("div", {
        className: "projects-section-slider-container",
        children: p.jsx(Mr, {
          slidesPerView: 4,
          spaceBetween: 30,
          centeredSlides: !0,
          pagination: { clickable: !0 },
          navigation: !0,
          modules: [rl, nl],
          className: "mySwiper",
          onSlideChange: (n) => {
            console.log(n.activeIndex), t(() => n.activeIndex);
          },
          children: Ke.map((n) =>
            p.jsx(
              Lr,
              {
                style: {
                  backgroundColor: n.bgcolor
                    ? n.bgcolor
                    : `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${
                        Math.random() * 100
                      })`,
                  color: n.color ? n.color : "white",
                },
                children: p.jsx("h2", { children: n.name }),
              },
              n.id,
            ),
          ),
        }),
      }),
    ],
  });
}
function q1(e) {
  emailjs
    .send("service_etln6xr", "template_i36wqwc", e, "6fUMBIehdik3EJyew")
    .then(
      function (t) {
        console.log("SUCCESS!", t.status, t.text);
      },
      function (t) {
        console.log("FAILED...", t);
      },
    );
}
function em() {
  return p.jsxs("div", {
    className: "portfolio-contact-section-container",
    children: [
      p.jsxs("div", {
        className: "portfolio-contact-section-info",
        children: [
          p.jsx("h2", { children: "Get In Touch" }),
          p.jsx("span", {
            children: p.jsx("img", {
              alt: "Deepanshu Gulia Avatar",
              src: "/Images/personal/avatar.webp",
            }),
          }),
          p.jsxs("div", {
            children: [
              p.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1.5vw",
                height: "1.5vw",
                fill: "currentColor",
                className: "bi bi-envelope-at",
                viewBox: "0 0 16 16",
                children: [
                  p.jsx("path", {
                    d: "M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z",
                  }),
                  p.jsx("path", {
                    d: "M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z",
                  }),
                ],
              }),
              p.jsx("p", { children: "deepanshugulia04@gmail.com" }),
            ],
          }),
          p.jsxs("div", {
            children: [
              p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1.5vw",
                height: "1.5vw",
                fill: "currentColor",
                className: "bi bi-house-door",
                viewBox: "0 0 16 16",
                children: p.jsx("path", {
                  d: "M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z",
                }),
              }),
              p.jsx("p", { children: "Najafgarh, New Delhi - 110043" }),
            ],
          }),
          p.jsxs("div", {
            children: [
              p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "2.5vw",
                height: "2.5vw",
                fill: "currentColor",
                className: "bi bi-github",
                viewBox: "0 0 16 16",
                onClick: () =>
                  window.open("https://github.com/deepu2560", "_blank"),
                children: p.jsx("path", {
                  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                }),
              }),
              p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "2.5vw",
                height: "2.5vw",
                fill: "currentColor",
                className: "bi bi-linkedin",
                viewBox: "0 0 16 16",
                onClick: () =>
                  window.open(
                    "https://www.linkedin.com/in/deepanshu-gulia/",
                    "_blank",
                  ),
                children: p.jsx("path", {
                  d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
                }),
              }),
              p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "2.5vw",
                height: "2.5vw",
                fill: "currentColor",
                className: "bi bi-instagram",
                viewBox: "0 0 16 16",
                onClick: () =>
                  window.open(
                    "https://www.instagram.com/deep.coding/",
                    "_blank",
                  ),
                children: p.jsx("path", {
                  d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
                }),
              }),
            ],
          }),
        ],
      }),
      p.jsxs("form", {
        className: "portfolio-contact-section-form",
        onSubmit: (e) => {
          e.preventDefault(),
            q1({
              user_name: e.target[0].value,
              user_email: e.target[1].value,
              user_message: e.target[2].value,
            });
        },
        children: [
          p.jsx("h2", { children: "Contact Form" }),
          p.jsx("p", {
            children:
              "You can send your message in contact form and I will answer your message as soon as I can.",
          }),
          p.jsx("input", {
            type: "text",
            name: "name",
            placeholder: "Enter your Name here ...",
          }),
          p.jsxs("span", {
            children: [
              p.jsx("input", {
                type: "email",
                name: "email",
                placeholder: "Enter your email-id here...",
              }),
              p.jsx("p", { children: "@" }),
            ],
          }),
          p.jsx("textarea", {
            name: "message",
            rows: 5,
            placeholder: "Enter your message here (min 100 words) ...",
          }),
          p.jsx("button", { children: "Send message" }),
        ],
      }),
    ],
  });
}
const Al = {
  stats: { live: 8, practice: 30, period: 10 },
  data: [
    {
      role: "Full-Stack Develoepr",
      name: "Anzo Controls Technologies",
      duration: "May, 2023 - Present",
      location: "Gurugram, Haryana",
      res: [
        "Created software for scara robot, big scara robot and delta robot.",
        "Designed software UI.",
        "Made software fully responsive till a tablet resolution screen.",
        "Worked with team to add features and look of the UI.",
      ],
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Reactjs",
        "Reactjs-Redux",
        "Electronjs",
        "Roslibjs",
        "Web Socket",
        "Nodejs",
        "Express",
        "MongoDB",
        "React-Native",
      ],
    },
    {
      role: "Full-Stack Develoepr",
      name: "Bottom Funnel Technologies",
      duration: "October, 2022 - May, 2023",
      location: "Jaipur, Rajasthan",
      res: [
        "Worked with React.js, HTML, CSS, Bootstrap, and JavaScript to develop web pages for Bottom Funnel.",
        "Collaborated with a design lead to iterate on various web pages, ensuring they meet the required specifications.",
        "Participated in changing the website framework from React.js to Next.js, contributing to a successful transition.",
        "Focused on improving website loading speed, leading to a 20% improvement in performance.",
      ],
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Material UI",
        "Reactjs",
        "React-Redux",
        "Nextjs",
        "Nodejs",
        "Expressjs",
        "MongoDB",
      ],
    },
    {
      role: "Backend Develoepr",
      name: "TravelFlap",
      duration: "October, 2022 - May, 2023",
      location: "Jaipur, Rajasthan",
      res: [
        "Developed and integrated third-party APIs for TravelFlap website using nodejs, expressjs, and MongoDB.",
        "Created custom APIs with an emphasis on security and reliability, ensuring they meet industry standards.",
        "Collaborated with the team to optimize the performance of the entire API, implementing necessary changes to improve efficiency.",
        "Maintained a strong focus on meeting project timelines and goals, delivering exceptional results under tight deadlines.",
      ],
      skills: ["Javascript", "Nodejs", "Expressjs", "MongoDB"],
    },
  ],
};
function tm() {
  const e = new Date().getFullYear() - new Date("11-10-2022").getFullYear();
  return p.jsxs("div", {
    className: "portfolio-work-container",
    children: [
      p.jsxs("div", {
        className: "portfolio-work-stats",
        children: [
          p.jsxs("div", {
            children: [
              p.jsxs("span", {
                children: [
                  p.jsx("h4", { children: "Live Projects" }),
                  p.jsxs("p", {
                    children: [
                      p.jsx("span", { children: Al.stats.live }),
                      "+ projects",
                    ],
                  }),
                ],
              }),
              p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                className: "bi bi-kanban-fill",
                viewBox: "0 0 16 16",
                style: { backgroundColor: "aqua" },
                children: p.jsx("path", {
                  d: "M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",
                }),
              }),
            ],
          }),
          p.jsxs("div", {
            children: [
              p.jsxs("span", {
                children: [
                  p.jsx("h4", { children: "Total Projects" }),
                  p.jsxs("p", {
                    children: [
                      p.jsx("span", { children: Al.stats.practice }),
                      "+ projects",
                    ],
                  }),
                ],
              }),
              p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                className: "bi bi-reception-4",
                viewBox: "0 0 16 16",
                style: { backgroundColor: "blanchedalmond" },
                children: p.jsx("path", {
                  d: "M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z",
                }),
              }),
            ],
          }),
          p.jsxs("div", {
            children: [
              p.jsxs("span", {
                children: [
                  p.jsx("h4", { children: "Total Experience" }),
                  p.jsxs("p", {
                    children: [
                      p.jsx("span", { children: e }),
                      " ",
                      e > 1 ? "years" : "year",
                    ],
                  }),
                ],
              }),
              p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                className: "bi bi-hourglass-split",
                viewBox: "0 0 16 16",
                style: { backgroundColor: "greenyellow" },
                children: p.jsx("path", {
                  d: "M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z",
                }),
              }),
            ],
          }),
        ],
      }),
      p.jsx("div", {
        className: "portfolio-work-brief",
        children: p.jsx(Mr, {
          pagination: { type: "progressbar", clickable: !0 },
          navigation: !0,
          modules: [rl, nl],
          className: "mySwiper",
          children: Al.data.map((t) =>
            p.jsx(
              Lr,
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: p.jsxs("div", {
                  className: "portfolio-work-cards-container",
                  children: [
                    p.jsx("h2", { children: t.role }),
                    p.jsxs("span", {
                      children: [
                        p.jsx("h3", { children: t.name }),
                        p.jsx("p", { children: t.duration }),
                      ],
                    }),
                    p.jsx("p", { children: t.location }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("h3", { children: "Responsibilites :-" }),
                        p.jsx("ul", {
                          children: t.res.map((n) =>
                            p.jsx("li", { children: n }, n),
                          ),
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("h3", { children: "Skills :-" }),
                        p.jsx("p", { children: t.skills.join(" , ") }),
                      ],
                    }),
                  ],
                }),
              },
              t.name,
            ),
          ),
        }),
      }),
    ],
  });
}
function nm() {
  return p.jsxs("div", {
    id: "space",
    children: [
      p.jsx("div", { className: "stars" }),
      p.jsx("div", { className: "stars" }),
      p.jsx("div", { className: "stars" }),
      p.jsx("div", { className: "stars" }),
      p.jsx("div", { className: "stars" }),
    ],
  });
}
function rm() {
  return p.jsxs("div", {
    className: "portfolio-about-container",
    children: [
      p.jsxs("div", {
        className: "portfolio-about-main",
        children: [
          p.jsx("div", {
            className: "glitch-wrapper",
            children: p.jsx("div", {
              className: "glitch",
              "data-text": "Deepanshu Gulia",
              children: "Deepanshu Gulia",
            }),
          }),
          p.jsx("p", {
            children:
              "With a creative and innovative mindset, I am a MERN developer who thrives on solving complex problems. My motivation and dedication drive me to provide my best work and take on new challenges. With a strong foundation in HTML, CSS, JavaScript, Node.js, MongoDB, Express, React, and experience in making websites responsive using bootstrap and media-query, I am constantly looking to expand my knowledge and abilities. Additionally, I enjoy reading, swimming, playing games and thrive in a team-oriented environment.",
          }),
          p.jsx("a", {
            href: "/Deepanshu_resume.pdf",
            download: !0,
            target: "_blank",
            rel: "noreferrer",
            children: "Resume",
          }),
        ],
      }),
      p.jsxs("div", {
        className: "portfolio-about-photo",
        children: [
          p.jsx("img", {
            src: "/Images/personal/my-photo.webp",
            alt: "Deepanshu Gulia",
          }),
          p.jsx("div", {}),
        ],
      }),
      p.jsxs("div", {
        className: "portfolio-about-social",
        children: [
          p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            className: "bi bi-circle-fill",
            style: { width: "30%" },
            viewBox: "0 0 16 16",
            children: p.jsx("circle", { cx: "8", cy: "8", r: "8" }),
          }),
          p.jsx("span", {}),
          p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            className: "bi bi-github",
            viewBox: "0 0 16 16",
            onClick: () =>
              window.open("https://github.com/deepu2560", "_blank"),
            children: p.jsx("path", {
              d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
            }),
          }),
          p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            className: "bi bi-linkedin",
            viewBox: "0 0 16 16",
            onClick: () =>
              window.open(
                "https://www.linkedin.com/in/deepanshu-gulia/",
                "_blank",
              ),
            children: p.jsx("path", {
              d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
            }),
          }),
          p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            className: "bi bi-instagram",
            viewBox: "0 0 16 16",
            onClick: () =>
              window.open("https://www.instagram.com/deep.coding/", "_blank"),
            children: p.jsx("path", {
              d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
            }),
          }),
          p.jsx("span", {}),
          p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            className: "bi bi-circle-fill",
            style: { width: "30%" },
            viewBox: "0 0 16 16",
            children: p.jsx("circle", { cx: "8", cy: "8", r: "8" }),
          }),
        ],
      }),
    ],
  });
}
function im() {
  return p.jsxs("div", {
    className: "portfolio-home-container",
    children: [
      p.jsx("div", { children: p.jsx(nm, {}) }),
      p.jsx("div", { children: p.jsx(rm, {}) }),
    ],
  });
}
function lm(e) {
  emailjs
    .send("service_etln6xr", "template_i36wqwc", e, "6fUMBIehdik3EJyew")
    .then(
      function (t) {
        console.log("SUCCESS!", t.status, t.text);
      },
      function (t) {
        console.log("FAILED...", t);
      },
    );
}
function sm() {
  return p.jsxs("div", {
    className: "mobile-contact-container",
    id: "contact",
    children: [
      p.jsx("h2", { children: "My Contact" }),
      p.jsxs("div", {
        className: "mobile-contact-section-container",
        children: [
          p.jsxs("div", {
            className: "mobile-contact-section-info",
            children: [
              p.jsx("h2", { children: "Get In Touch" }),
              p.jsx("span", {
                children: p.jsx("img", {
                  alt: "Deepanshu Gulia Avatar",
                  src: "/Images/personal/avatar.webp",
                }),
              }),
              p.jsxs("div", {
                children: [
                  p.jsxs("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "6vw",
                    height: "6vw",
                    fill: "currentColor",
                    className: "bi bi-envelope-at",
                    viewBox: "0 0 16 16",
                    children: [
                      p.jsx("path", {
                        d: "M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z",
                      }),
                      p.jsx("path", {
                        d: "M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z",
                      }),
                    ],
                  }),
                  p.jsx("p", { children: "deepanshugulia04@gmail.com" }),
                ],
              }),
              p.jsxs("div", {
                children: [
                  p.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "6vw",
                    height: "6vw",
                    fill: "currentColor",
                    className: "bi bi-house-door",
                    viewBox: "0 0 16 16",
                    children: p.jsx("path", {
                      d: "M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z",
                    }),
                  }),
                  p.jsx("p", { children: "Najafgarh, New Delhi - 110043" }),
                ],
              }),
              p.jsxs("div", {
                children: [
                  p.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "7vw",
                    height: "7vw",
                    fill: "currentColor",
                    className: "bi bi-github",
                    viewBox: "0 0 16 16",
                    onClick: () =>
                      window.open("https://github.com/deepu2560", "_blank"),
                    children: p.jsx("path", {
                      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                    }),
                  }),
                  p.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "7vw",
                    height: "7vw",
                    fill: "currentColor",
                    className: "bi bi-linkedin",
                    viewBox: "0 0 16 16",
                    onClick: () =>
                      window.open(
                        "https://www.linkedin.com/in/deepanshu-gulia/",
                        "_blank",
                      ),
                    children: p.jsx("path", {
                      d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
                    }),
                  }),
                  p.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "7vw",
                    height: "7vw",
                    fill: "currentColor",
                    className: "bi bi-instagram",
                    viewBox: "0 0 16 16",
                    onClick: () =>
                      window.open(
                        "https://www.instagram.com/deep.coding/",
                        "_blank",
                      ),
                    children: p.jsx("path", {
                      d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
                    }),
                  }),
                ],
              }),
            ],
          }),
          p.jsxs("form", {
            className: "mobile-contact-section-form",
            onSubmit: (e) => {
              e.preventDefault(),
                lm({
                  user_name: e.target[0].value,
                  user_email: e.target[1].value,
                  user_message: e.target[2].value,
                });
            },
            children: [
              p.jsx("h2", { children: "Contact Form" }),
              p.jsx("p", {
                children:
                  "You can send your message in contact form and I will answer your message as soon as I can.",
              }),
              p.jsx("input", {
                type: "text",
                name: "name",
                placeholder: "Enter your Name here ...",
              }),
              p.jsxs("span", {
                children: [
                  p.jsx("input", {
                    type: "email",
                    name: "email",
                    placeholder: "Enter your email-id here...",
                  }),
                  p.jsx("p", { children: "@" }),
                ],
              }),
              p.jsx("textarea", {
                name: "message",
                rows: 5,
                placeholder: "Enter your message here (min 100 words) ...",
              }),
              p.jsx("button", { children: "Send message" }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Bl = {
  stats: { live: 8, practice: 30, period: 10 },
  data: [
    {
      role: "Full-Stack Develoepr",
      name: "Anzo Controls Technologies",
      duration: "May, 2023 - Present",
      location: "Gurugram, Haryana",
      res: [
        "Created software for scara robot, big scara robot and delta robot.",
        "Designed software UI.",
        "Made software fully responsive till a tablet resolution screen.",
        "Worked with team to add features and look of the UI.",
      ],
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Reactjs",
        "Reactjs-Redux",
        "Electronjs",
        "Roslibjs",
        "Web Socket",
        "Nodejs",
        "Express",
        "MongoDB",
        "React-Native",
      ],
    },
    {
      role: "Full-Stack Develoepr",
      name: "Bottom Funnel Technologies",
      duration: "October, 2022 - May, 2023",
      location: "Jaipur, Rajasthan",
      res: [
        "Worked with React.js, HTML, CSS, Bootstrap, and JavaScript to develop web pages for Bottom Funnel.",
        "Collaborated with a design lead to iterate on various web pages, ensuring they meet the required specifications.",
        "Participated in changing the website framework from React.js to Next.js, contributing to a successful transition.",
        "Focused on improving website loading speed, leading to a 20% improvement in performance.",
      ],
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Material UI",
        "Reactjs",
        "React-Redux",
        "Nextjs",
        "Nodejs",
        "Expressjs",
        "MongoDB",
      ],
    },
    {
      role: "Backend Develoepr",
      name: "TravelFlap",
      duration: "October, 2022 - May, 2023",
      location: "Jaipur, Rajasthan",
      res: [
        "Developed and integrated third-party APIs for TravelFlap website using nodejs, expressjs, and MongoDB.",
        "Created custom APIs with an emphasis on security and reliability, ensuring they meet industry standards.",
        "Collaborated with the team to optimize the performance of the entire API, implementing necessary changes to improve efficiency.",
        "Maintained a strong focus on meeting project timelines and goals, delivering exceptional results under tight deadlines.",
      ],
      skills: ["Javascript", "Nodejs", "Expressjs", "MongoDB"],
    },
  ],
};
function om() {
  const e = new Date().getFullYear() - new Date("11-10-2022").getFullYear();
  return p.jsxs("div", {
    className: "mobile-work-container",
    id: "experience",
    children: [
      p.jsx("h2", { children: "My Experience" }),
      p.jsxs("div", {
        className: "mobile-work-stats",
        children: [
          p.jsxs("div", {
            children: [
              p.jsxs("span", {
                children: [
                  p.jsx("h4", { children: "Live Projects" }),
                  p.jsxs("p", {
                    children: [
                      p.jsx("span", { children: Bl.stats.live }),
                      " projects",
                    ],
                  }),
                ],
              }),
              p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                className: "bi bi-kanban-fill",
                viewBox: "0 0 16 16",
                style: { backgroundColor: "aqua" },
                children: p.jsx("path", {
                  d: "M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",
                }),
              }),
            ],
          }),
          p.jsxs("div", {
            children: [
              p.jsxs("span", {
                children: [
                  p.jsx("h4", { children: "Total Projects" }),
                  p.jsxs("p", {
                    children: [
                      p.jsx("span", { children: Bl.stats.practice }),
                      "+ projects",
                    ],
                  }),
                ],
              }),
              p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                className: "bi bi-reception-4",
                viewBox: "0 0 16 16",
                style: { backgroundColor: "blanchedalmond" },
                children: p.jsx("path", {
                  d: "M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z",
                }),
              }),
            ],
          }),
          p.jsxs("div", {
            children: [
              p.jsxs("span", {
                children: [
                  p.jsx("h4", { children: "Total Experience" }),
                  p.jsxs("p", {
                    children: [
                      p.jsx("span", { children: e }),
                      " ",
                      e > 1 ? "years" : "year",
                    ],
                  }),
                ],
              }),
              p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                className: "bi bi-hourglass-split",
                viewBox: "0 0 16 16",
                style: { backgroundColor: "greenyellow" },
                children: p.jsx("path", {
                  d: "M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z",
                }),
              }),
            ],
          }),
        ],
      }),
      p.jsx("div", {
        className: "mobile-work-brief",
        children: p.jsx(Mr, {
          pagination: { type: "progressbar", clickable: !0 },
          navigation: !0,
          modules: [rl, nl],
          className: "mySwiper",
          children: Bl.data.map((t) =>
            p.jsx(
              Lr,
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: p.jsxs("div", {
                  className: "mobile-work-cards-container",
                  children: [
                    p.jsx("h2", { children: t.role }),
                    p.jsxs("span", {
                      children: [
                        p.jsx("h3", { children: t.name }),
                        p.jsx("p", { children: t.duration }),
                      ],
                    }),
                    p.jsx("p", { children: t.location }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("h3", { children: "Responsibilites" }),
                        p.jsx("ul", {
                          children: t.res.map((n) =>
                            p.jsx("li", { children: n }, n),
                          ),
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("h3", { children: "Skills:-" }),
                        p.jsx("p", { children: t.skills.join(" , ") }),
                      ],
                    }),
                  ],
                }),
              },
              t.name,
            ),
          ),
        }),
      }),
    ],
  });
}
function am() {
  return p.jsxs("div", {
    className: "mobile-about-container",
    children: [
      p.jsxs("h2", {
        children: [p.jsx("span", { children: "It's " }), " Deepanshu Gulia"],
      }),
      p.jsx("p", {
        children:
          "With a creative and innovative mindset, I am a MERN developer who thrives on solving complex problems. My motivation and dedication drive me to provide my best work and take on new challenges. With a strong foundation in HTML, CSS, JavaScript, Node.js, MongoDB, Express, React, and experience in making websites responsive using bootstrap and media-query, I am constantly looking to expand my knowledge and abilities. Additionally, I enjoy reading, swimming, playing games and thrive in a team-oriented environment.",
      }),
      p.jsx("a", {
        href: "/Deepanshu_resume.pdf",
        download: !0,
        target: "_blank",
        rel: "noreferrer",
        children: "Resume",
      }),
    ],
  });
}
function um() {
  return p.jsxs("div", {
    className: "mobile-header-container",
    id: "home",
    children: [
      p.jsx("span", {
        className: "mobile-header-my-photo",
        children: p.jsx("img", {
          src: "/Images/personal/my-photo.webp",
          alt: "deepanshu gulia",
        }),
      }),
      p.jsx("h1", { children: "Deepanshu Gulia" }),
      p.jsx("span", {
        className: "mobile-header-background",
        children: p.jsx("img", {
          src: "/Images/personal/mobile-header.webp",
          alt: "binary background",
        }),
      }),
    ],
  });
}
function cm() {
  return p.jsxs("div", {
    className: "mobile-skills-container",
    id: "skills",
    children: [
      p.jsx("h2", { children: "My Skills" }),
      p.jsx("div", {
        className: "mobile-skills-cards-main",
        children: zd.map((e) =>
          p.jsxs(
            "div",
            {
              children: [
                p.jsx("p", { children: e.head }),
                e.data.map((t) =>
                  p.jsxs(
                    "span",
                    {
                      children: [
                        p.jsx("img", {
                          alt: t.name,
                          src: `/Images/skills/${t.image}`,
                        }),
                        p.jsx("p", { children: t.name }),
                      ],
                    },
                    t.name,
                  ),
                ),
              ],
            },
            e.head,
          ),
        ),
      }),
    ],
  });
}
const dm = [
  {
    id: "project-forestessentialindia",
    name: "Forest Essential India Clone",
    discription:
      "In this project, we made a clone of forestessentialindia.com. We made a 90%-95% clone of the official website. We made a fully dynamic website in which you can go over through all projects, you can sign in and signup, and much more.",
    tech: "HTML, CSS, Javascript, node.js",
    features: [
      "Dynamic navbar and footer",
      "Bespoke services and About us page",
      "Dynamic Cart and Wishlist page",
      "Payment and Gateway",
    ],
    color: "#590d22",
    bgcolor: "#ff758f",
    image: "forestessentialindia.webp",
    deploy: "https://forestessentialindiaclone.netlify.app/",
    github: "https://github.com/Deepu2560/forestessentialsindia",
  },
  {
    id: "project-nike-html",
    name: "Nike Clone",
    discription:
      "In this project, we made a clone of Nike.com. On our website, you get an overview page of every single category and on that page, you get the option to move for shoes or clothes of that category. On our website, you get a dynamic payment and gateway page too.",
    tech: "HTML, CSS, Javascript, Node.js, ES6 (advanse js), Import and export (advance js)",
    features: [
      "Dynamic Sign/Signin Page",
      "Dynamic Filter and Sort features",
      "Sneakers Page",
    ],
    color: "#ff7b00",
    bgcolor: "#ffea00",
    image: "nike.webp",
    deploy: "https://nikemasaischoolclone.netlify.app/",
    github: "https://github.com/Deepu2560/Nike",
  },
  {
    id: "project-netflix",
    name: "Netflix Clone",
    discription:
      "In this project, we used react, javascript, scss framework to build; this website. We made this clone 1 week and in our team we are 5 members. You can only watch trailers of movies in this clone.",
    tech: "REACT, MONGODB, SASS, NodeJS, Express",
    features: [
      "Dynamic Modern design Signup/Signup Page",
      "90% clone of original Netflix",
      "Web application made by use of react",
      "Dynamic database made by mongodb, express and heroku",
    ],
    color: "#583101",
    bgcolor: "#e7bc91",
    image: "netflix.webp",
    deploy: "https://netflix-clone-eight-psi.vercel.app/",
    github: "https://github.com/Deepu2560/Netflix",
  },
  {
    id: "project-hire-a-cook",
    name: "Hire A Cook",
    discription:
      "This is a unique website. We in a team made this website start from scratch. This is for masai school hackathon project. In this website you can book a cook on subscription bases and you have to also give information about for how many cook have to make food and in many times a day.",
    tech: "React, Redux, Material UI, Express, MongoDB, Node.js, Javascript, HTML, CSS, Socket.io",
    features: [
      "dynamic Signin/Signup page",
      "fully dynamic interface",
      "User friendly",
      "Dynamic product page",
    ],
    color: "#1b4332",
    bgcolor: "#95d5b2",
    image: "hireAcook.webp",
    deploy: "https://hirecook.vercel.app/",
    github: "https://github.com/Deepu2560/Hire-A-Cook",
  },
  {
    id: "project-text-to-speech",
    name: "Text To Speech",
    discription:
      "This is a solo project. In this project text will be converted text to speech. I made this project with use of HTML, CSS and javascript. You can also reset speech and text my pausing and then clicking reset button or by refreshing page.",
    tech: "HTML, CSS, Javascript, Vercel",
    features: [
      "Dynamic modern UI",
      "Text to speech",
      "Speech voice according to device",
    ],
    color: "#023e8a",
    bgcolor: "#82c0cc",
    image: "textToSpeech.webp",
    deploy: "https://deepu2560-text-to-speech.vercel.app/",
    github: "https://github.com/Deepu2560/text-to-speech",
  },
  {
    id: "project-todo-app",
    name: "Todo App",
    discription:
      "This website is a todo web application. In this application you can add task as pending then change status to doing then done and then you can delete. This web application have signin and signup feature too.",
    tech: "React, React-Redux, Express, MongoDB, Node.js, Javascript, HTML, CSS, Heroku, Vercel",
    features: [
      "dynamic modern style navbar",
      "Modern style home page",
      "pending, doing and done section layout",
      "full-stack web app",
    ],
    color: "#03045e",
    bgcolor: "#48cae4",
    image: "todoApp.webp",
    deploy: "https://deepu2560-todo-app.vercel.app/",
    github: "https://github.com/Deepu2560/TODO-list",
  },
  {
    id: "project-movie-app",
    name: "Movie App",
    discription:
      "In this web application you can search for any movie you want. After search you will see alot of results when you click anyone of the reasult you will see details of that movie. Currently you will see name of the movie, overview, budget, release date. This is just to demo project.",
    tech: "HTML, CSS, Javascript, Nodejs, Reactjs, Axios, Vercel",
    features: [
      "Modern search UI",
      "Modern use of react components",
      "Direct movie search option",
    ],
    color: "#800f2f",
    bgcolor: "#ffb3c1",
    image: "movie.webp",
    deploy: "https://deepu2560-movie-app.vercel.app/",
    github: "https://github.com/Deepu2560/movie-app",
  },
  {
    id: "project-stopwatch",
    name: "Stopwatch App",
    discription:
      "In this project you will see two react component, one is clock which shows you current time in you location and another one is a stop watch which you can start , stop and restart timer of stopwatch.",
    tech: "Reactjs, HTML, CSS, Javascript, Nodejs, Vercel",
    features: [
      "Attractive UI",
      "Real time watch",
      "Can start, stop and reset stopwatch",
    ],
    color: "#333533",
    bgcolor: "#d3d3d3",
    image: "stopwatch.webp",
    deploy: "https://deepu2560-stopwatch.vercel.app/",
    github: "https://github.com/Deepu2560/stopwatch",
  },
  {
    id: "project-word-game",
    name: "Word Game",
    discription:
      "This is a solo project. This is simple word puzzle game, in which you have to guess the word correct before the timer ends.",
    tech: "HTML, CSS, Javascript, Vercel",
    features: [
      "Scramble word game",
      "Guess word in limited timing",
      "Challenges to improve problem solving skill",
    ],
    color: "#621708",
    bgcolor: "#f3dfc1",
    image: "wordGame.webp",
    deploy: "https://deepu2560-word-game.vercel.app/",
    github: "https://github.com/Deepu2560/text-to-speech",
  },
  {
    id: "project-word-count",
    name: "Word Counter",
    discription:
      "This web app you can count words in you speech, essay, mail, etc. Just paste your paragraph in this app and you will able see word and characters.",
    tech: "HTML, CSS, Javascript, Reactjs, Vercel",
    features: [
      "word count in paragraph",
      "Character count in paragraph",
      "Responsive Design",
    ],
    color: "#006466",
    bgcolor: "#dde5b6",
    image: "wordCount.webp",
    deploy: "https://deepu2560-word-count.vercel.app/",
    github: "https://github.com/Deepu2560/word-counter",
  },
];
function fm() {
  return p.jsxs("div", {
    className: "mobile-projects-container",
    id: "projects",
    children: [
      p.jsx("h2", { children: "My Projects" }),
      p.jsx("div", {
        className: "mobile-projects-brief",
        children: p.jsx(Mr, {
          pagination: { type: "progressbar", clickable: !0 },
          navigation: !0,
          modules: [rl, nl],
          className: "mySwiper",
          children: dm.map((e) =>
            p.jsx(
              Lr,
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: p.jsxs("div", {
                  className: "mobile-projects-cards-container",
                  children: [
                    p.jsx("div", {
                      className: "mobile-projects-cards-image",
                      children: p.jsx("img", {
                        src: `/Images/projects/${e.image}`,
                        alt: e.name,
                      }),
                    }),
                    p.jsx("span", {
                      children: p.jsx("p", { children: e.discription }),
                    }),
                    p.jsxs("p", {
                      children: [
                        p.jsx("strong", { children: "Tech Stack :- " }),
                        e.tech,
                      ],
                    }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("h3", { children: "Features" }),
                        p.jsx("ul", {
                          children: e.features.map((t, n) =>
                            p.jsx("li", { children: t }, n),
                          ),
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "mobile-projects-cards-links",
                      children: [
                        e.deploy
                          ? p.jsx("span", {
                              onClick: () => window.open(e.deploy, "_blank"),
                              children: p.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "5vw",
                                height: "5vw",
                                fill: "currentColor",
                                className: "bi bi-browser-chrome",
                                viewBox: "0 0 16 16",
                                children: p.jsx("path", {
                                  fillRule: "evenodd",
                                  d: "M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                                }),
                              }),
                            })
                          : null,
                        e.github
                          ? p.jsx("span", {
                              onClick: () => window.open(e.github, "_blank"),
                              children: p.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "5vw",
                                height: "5vw",
                                fill: "currentColor",
                                className: "bi bi-github",
                                viewBox: "0 0 16 16",
                                children: p.jsx("path", {
                                  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                                }),
                              }),
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              },
              e.id,
            ),
          ),
        }),
      }),
    ],
  });
}
var Xd = { exports: {} };
(function (e, t) {
  (function (r, i) {
    e.exports = i(M);
  })(typeof self < "u" ? self : Kd, function (n) {
    return (function (r) {
      var i = {};
      function l(s) {
        if (i[s]) return i[s].exports;
        var o = (i[s] = { i: s, l: !1, exports: {} });
        return r[s].call(o.exports, o, o.exports, l), (o.l = !0), o.exports;
      }
      return (
        (l.m = r),
        (l.c = i),
        (l.d = function (s, o, a) {
          l.o(s, o) ||
            Object.defineProperty(s, o, {
              configurable: !1,
              enumerable: !0,
              get: a,
            });
        }),
        (l.n = function (s) {
          var o =
            s && s.__esModule
              ? function () {
                  return s.default;
                }
              : function () {
                  return s;
                };
          return l.d(o, "a", o), o;
        }),
        (l.o = function (s, o) {
          return Object.prototype.hasOwnProperty.call(s, o);
        }),
        (l.p = ""),
        l((l.s = 0))
      );
    })([
      function (r, i, l) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        var s = l(1),
          o = a(s);
        function a(c) {
          return c && c.__esModule ? c : { default: c };
        }
        i.default = o.default;
      },
      function (r, i, l) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        var s =
            Object.assign ||
            function (S) {
              for (var f = 1; f < arguments.length; f++) {
                var u = arguments[f];
                for (var d in u)
                  Object.prototype.hasOwnProperty.call(u, d) && (S[d] = u[d]);
              }
              return S;
            },
          o = (function () {
            function S(f, u) {
              for (var d = 0; d < u.length; d++) {
                var y = u[d];
                (y.enumerable = y.enumerable || !1),
                  (y.configurable = !0),
                  "value" in y && (y.writable = !0),
                  Object.defineProperty(f, y.key, y);
              }
            }
            return function (f, u, d) {
              return u && S(f.prototype, u), d && S(f, d), f;
            };
          })(),
          a = l(2),
          c = h(a);
        function h(S) {
          return S && S.__esModule ? S : { default: S };
        }
        function m(S, f) {
          var u = {};
          for (var d in S)
            f.indexOf(d) >= 0 ||
              (Object.prototype.hasOwnProperty.call(S, d) && (u[d] = S[d]));
          return u;
        }
        function v(S, f) {
          if (!(S instanceof f))
            throw new TypeError("Cannot call a class as a function");
        }
        function g(S, f) {
          if (!S)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return f && (typeof f == "object" || typeof f == "function") ? f : S;
        }
        function x(S, f) {
          if (typeof f != "function" && f !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof f,
            );
          (S.prototype = Object.create(f && f.prototype, {
            constructor: {
              value: S,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            f &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(S, f)
                : (S.__proto__ = f));
        }
        var w = (function (S) {
          x(f, S);
          function f(u) {
            v(this, f);
            var d = g(
              this,
              (f.__proto__ || Object.getPrototypeOf(f)).call(this, u),
            );
            return (d.smoothScroll = d.smoothScroll.bind(d)), d;
          }
          return (
            o(f, [
              {
                key: "componentDidMount",
                value: function () {
                  l(3).polyfill();
                },
              },
              {
                key: "smoothScroll",
                value: function (d) {
                  var y = this;
                  d.preventDefault();
                  var C = function () {
                    return 0;
                  };
                  typeof this.props.offset < "u" &&
                    (this.props.offset &&
                    this.props.offset.constructor &&
                    this.props.offset.apply
                      ? (C = this.props.offset)
                      : (C = function () {
                          return parseInt(y.props.offset);
                        }));
                  var j = d.currentTarget.getAttribute("href").slice(1),
                    T = document.getElementById(j),
                    E = T.getBoundingClientRect().top + window.pageYOffset;
                  window.scroll({ top: E - C(), behavior: "smooth" }),
                    this.props.onClick && this.props.onClick(d);
                },
              },
              {
                key: "render",
                value: function () {
                  var d = this.props;
                  d.offset;
                  var y = m(d, ["offset"]);
                  return c.default.createElement(
                    "a",
                    s({}, y, { onClick: this.smoothScroll }),
                  );
                },
              },
            ]),
            f
          );
        })(a.Component);
        i.default = w;
      },
      function (r, i) {
        r.exports = n;
      },
      function (r, i, l) {
        (function () {
          function s() {
            var o = window,
              a = document;
            if (
              "scrollBehavior" in a.documentElement.style &&
              o.__forceSmoothScrollPolyfill__ !== !0
            )
              return;
            var c = o.HTMLElement || o.Element,
              h = 468,
              m = {
                scroll: o.scroll || o.scrollTo,
                scrollBy: o.scrollBy,
                elementScroll: c.prototype.scroll || w,
                scrollIntoView: c.prototype.scrollIntoView,
              },
              v =
                o.performance && o.performance.now
                  ? o.performance.now.bind(o.performance)
                  : Date.now;
            function g(E) {
              var k = ["MSIE ", "Trident/", "Edge/"];
              return new RegExp(k.join("|")).test(E);
            }
            var x = g(o.navigator.userAgent) ? 1 : 0;
            function w(E, k) {
              (this.scrollLeft = E), (this.scrollTop = k);
            }
            function S(E) {
              return 0.5 * (1 - Math.cos(Math.PI * E));
            }
            function f(E) {
              if (
                E === null ||
                typeof E != "object" ||
                E.behavior === void 0 ||
                E.behavior === "auto" ||
                E.behavior === "instant"
              )
                return !0;
              if (typeof E == "object" && E.behavior === "smooth") return !1;
              throw new TypeError(
                "behavior member of ScrollOptions " +
                  E.behavior +
                  " is not a valid value for enumeration ScrollBehavior.",
              );
            }
            function u(E, k) {
              if (k === "Y") return E.clientHeight + x < E.scrollHeight;
              if (k === "X") return E.clientWidth + x < E.scrollWidth;
            }
            function d(E, k) {
              var _ = o.getComputedStyle(E, null)["overflow" + k];
              return _ === "auto" || _ === "scroll";
            }
            function y(E) {
              var k = u(E, "Y") && d(E, "Y"),
                _ = u(E, "X") && d(E, "X");
              return k || _;
            }
            function C(E) {
              var k;
              do (E = E.parentNode), (k = E === a.body);
              while (k === !1 && y(E) === !1);
              return (k = null), E;
            }
            function j(E) {
              var k = v(),
                _,
                P,
                N,
                I = (k - E.startTime) / h;
              (I = I > 1 ? 1 : I),
                (_ = S(I)),
                (P = E.startX + (E.x - E.startX) * _),
                (N = E.startY + (E.y - E.startY) * _),
                E.method.call(E.scrollable, P, N),
                (P !== E.x || N !== E.y) &&
                  o.requestAnimationFrame(j.bind(o, E));
            }
            function T(E, k, _) {
              var P,
                N,
                I,
                D,
                $ = v();
              E === a.body
                ? ((P = o),
                  (N = o.scrollX || o.pageXOffset),
                  (I = o.scrollY || o.pageYOffset),
                  (D = m.scroll))
                : ((P = E), (N = E.scrollLeft), (I = E.scrollTop), (D = w)),
                j({
                  scrollable: P,
                  method: D,
                  startTime: $,
                  startX: N,
                  startY: I,
                  x: k,
                  y: _,
                });
            }
            (o.scroll = o.scrollTo =
              function () {
                if (arguments[0] !== void 0) {
                  if (f(arguments[0]) === !0) {
                    m.scroll.call(
                      o,
                      arguments[0].left !== void 0
                        ? arguments[0].left
                        : typeof arguments[0] != "object"
                        ? arguments[0]
                        : o.scrollX || o.pageXOffset,
                      arguments[0].top !== void 0
                        ? arguments[0].top
                        : arguments[1] !== void 0
                        ? arguments[1]
                        : o.scrollY || o.pageYOffset,
                    );
                    return;
                  }
                  T.call(
                    o,
                    a.body,
                    arguments[0].left !== void 0
                      ? ~~arguments[0].left
                      : o.scrollX || o.pageXOffset,
                    arguments[0].top !== void 0
                      ? ~~arguments[0].top
                      : o.scrollY || o.pageYOffset,
                  );
                }
              }),
              (o.scrollBy = function () {
                if (arguments[0] !== void 0) {
                  if (f(arguments[0])) {
                    m.scrollBy.call(
                      o,
                      arguments[0].left !== void 0
                        ? arguments[0].left
                        : typeof arguments[0] != "object"
                        ? arguments[0]
                        : 0,
                      arguments[0].top !== void 0
                        ? arguments[0].top
                        : arguments[1] !== void 0
                        ? arguments[1]
                        : 0,
                    );
                    return;
                  }
                  T.call(
                    o,
                    a.body,
                    ~~arguments[0].left + (o.scrollX || o.pageXOffset),
                    ~~arguments[0].top + (o.scrollY || o.pageYOffset),
                  );
                }
              }),
              (c.prototype.scroll = c.prototype.scrollTo =
                function () {
                  if (arguments[0] !== void 0) {
                    if (f(arguments[0]) === !0) {
                      if (
                        typeof arguments[0] == "number" &&
                        arguments[1] === void 0
                      )
                        throw new SyntaxError("Value could not be converted");
                      m.elementScroll.call(
                        this,
                        arguments[0].left !== void 0
                          ? ~~arguments[0].left
                          : typeof arguments[0] != "object"
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        arguments[0].top !== void 0
                          ? ~~arguments[0].top
                          : arguments[1] !== void 0
                          ? ~~arguments[1]
                          : this.scrollTop,
                      );
                      return;
                    }
                    var E = arguments[0].left,
                      k = arguments[0].top;
                    T.call(
                      this,
                      this,
                      typeof E > "u" ? this.scrollLeft : ~~E,
                      typeof k > "u" ? this.scrollTop : ~~k,
                    );
                  }
                }),
              (c.prototype.scrollBy = function () {
                if (arguments[0] !== void 0) {
                  if (f(arguments[0]) === !0) {
                    m.elementScroll.call(
                      this,
                      arguments[0].left !== void 0
                        ? ~~arguments[0].left + this.scrollLeft
                        : ~~arguments[0] + this.scrollLeft,
                      arguments[0].top !== void 0
                        ? ~~arguments[0].top + this.scrollTop
                        : ~~arguments[1] + this.scrollTop,
                    );
                    return;
                  }
                  this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior,
                  });
                }
              }),
              (c.prototype.scrollIntoView = function () {
                if (f(arguments[0]) === !0) {
                  m.scrollIntoView.call(
                    this,
                    arguments[0] === void 0 ? !0 : arguments[0],
                  );
                  return;
                }
                var E = C(this),
                  k = E.getBoundingClientRect(),
                  _ = this.getBoundingClientRect();
                E !== a.body
                  ? (T.call(
                      this,
                      E,
                      E.scrollLeft + _.left - k.left,
                      E.scrollTop + _.top - k.top,
                    ),
                    o.getComputedStyle(E).position !== "fixed" &&
                      o.scrollBy({
                        left: k.left,
                        top: k.top,
                        behavior: "smooth",
                      }))
                  : o.scrollBy({
                      left: _.left,
                      top: _.top,
                      behavior: "smooth",
                    });
              });
          }
          r.exports = { polyfill: s };
        })();
      },
    ]);
  });
})(Xd);
var pm = Xd.exports;
const Hn = cu(pm);
function hm() {
  return p.jsxs("div", {
    className: "mobile-navbar-container",
    children: [
      p.jsx(Hn, {
        href: "#home",
        children: p.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "6vw",
          height: "6vw",
          fill: "currentColor",
          className: "bi bi-house",
          viewBox: "0 0 16 16",
          children: p.jsx("path", {
            d: "M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z",
          }),
        }),
      }),
      p.jsx(Hn, {
        href: "#skills",
        children: p.jsxs("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "6vw",
          height: "6vw",
          fill: "currentColor",
          className: "bi bi-award",
          viewBox: "0 0 16 16",
          children: [
            p.jsx("path", {
              d: "M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z",
            }),
            p.jsx("path", {
              d: "M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z",
            }),
          ],
        }),
      }),
      p.jsx(Hn, {
        href: "#projects",
        children: p.jsxs("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "6vw",
          height: "6vw",
          fill: "currentColor",
          className: "bi bi-rocket-takeoff",
          viewBox: "0 0 16 16",
          children: [
            p.jsx("path", {
              d: "M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z",
            }),
            p.jsx("path", {
              d: "M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z",
            }),
            p.jsx("path", {
              d: "M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z",
            }),
          ],
        }),
      }),
      p.jsx(Hn, {
        href: "#experience",
        children: p.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "6vw",
          height: "6vw",
          fill: "currentColor",
          className: "bi bi-briefcase",
          viewBox: "0 0 16 16",
          children: p.jsx("path", {
            d: "M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z",
          }),
        }),
      }),
      p.jsx(Hn, {
        href: "#contact",
        children: p.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "6vw",
          height: "6vw",
          fill: "currentColor",
          className: "bi bi-telephone",
          viewBox: "0 0 16 16",
          children: p.jsx("path", {
            d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z",
          }),
        }),
      }),
    ],
  });
}
function mm() {
  return p.jsxs("div", {
    className: "mobile-device-home",
    children: [
      p.jsx(hm, {}),
      p.jsx(um, {}),
      p.jsx(am, {}),
      p.jsx(cm, {}),
      p.jsx(om, {}),
      p.jsx(fm, {}),
      p.jsx(sm, {}),
    ],
  });
}
function vm() {
  const [e, t] = M.useState(navigator.onLine),
    [n, r] = M.useState(navigator.userAgent),
    [i, l] = M.useState(screen.orientation.angle),
    [s, o] = M.useState(!0);
  return (
    M.useEffect(() => {
      setInterval(() => {
        t(navigator.onLine),
          r(navigator.userAgent),
          l(screen.orientation.angle);
      }, 1e3);
    }, []),
    e
      ? /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n)
        ? p.jsx(mm, {})
        : p.jsxs("div", {
            className: "App",
            children: [
              i == 0 && /ipad/i.test(n) && s
                ? p.jsx("div", {
                    className: "tablet-better-performance-alert",
                    children: p.jsxs("div", {
                      children: [
                        p.jsx("h2", {
                          children: "For better performance rotate your screen",
                        }),
                        p.jsx("button", {
                          onClick: () => o(!1),
                          children: "Close",
                        }),
                      ],
                    }),
                  })
                : null,
              p.jsx(C0, {}),
              p.jsxs(f0, {
                children: [
                  p.jsx(Dt, { path: "/*", element: p.jsx(c0, { to: "/" }) }),
                  p.jsx(Dt, { path: "/", element: p.jsx(im, {}) }),
                  p.jsx(Dt, { path: "/skills", element: p.jsx(k0, {}) }),
                  p.jsx(Dt, { path: "/contact", element: p.jsx(em, {}) }),
                  p.jsx(Dt, { path: "/projects", element: p.jsx(Z1, {}) }),
                  p.jsx(Dt, { path: "/experience", element: p.jsx(tm, {}) }),
                ],
              }),
            ],
          })
      : p.jsxs("div", {
          className: "offline-page-wrapper",
          children: [
            p.jsx("h1", { children: "OFFLINE" }),
            p.jsx("h4", { children: "Please check your internet connection" }),
            p.jsx("button", {
              onClick: () => window.location.reload(),
              children: "RETRY",
            }),
          ],
        })
  );
}
Fl.createRoot(document.getElementById("root")).render(
  p.jsx(J.StrictMode, { children: p.jsx(y0, { children: p.jsx(vm, {}) }) }),
);
