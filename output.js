//Sat May 24 2025 06:33:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("鲸才服务");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function k(P) {
    k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (S) {
      return typeof S;
    } : function (S) {
      return S && "function" == typeof Symbol && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
    };
    return k(P);
  }
  function q(P, Q) {
    var S = "undefined" != typeof Symbol && P[Symbol.iterator] || P["@@iterator"];
    if (!S) {
      if (Array.isArray(P) || (S = function (Z, a0) {
        if (Z) {
          if ("string" == typeof Z) {
            return w(Z, a0);
          }
          var a1 = {}.toString.call(Z).slice(8, -1);
          "Object" === a1 && Z.constructor && (a1 = Z.constructor.name);
          return "Map" === a1 || "Set" === a1 ? Array.from(Z) : "Arguments" === a1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a1) ? w(Z, a0) : void 0;
        }
      }(P)) || Q && P && "number" == typeof P.length) {
        S && (P = S);
        var T = 0,
          U = function () {};
        return {
          s: U,
          n: function () {
            var a0 = {
              done: !0
            };
            return T >= P.length ? a0 : {
              done: !1,
              value: P[T++]
            };
          },
          e: function (a0) {
            throw a0;
          },
          f: U
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var V,
      W = !0,
      X = !1;
    return {
      s: function () {
        S = S.call(P);
      },
      n: function () {
        var a0 = S.next();
        W = a0.done;
        return a0;
      },
      e: function (a0) {
        X = !0;
        V = a0;
      },
      f: function () {
        try {
          W || null == S.return || S.return();
        } finally {
          if (X) {
            throw V;
          }
        }
      }
    };
  }
  function w(P, Q) {
    (null == Q || Q > P.length) && (Q = P.length);
    for (var R = 0, S = Array(Q); R < Q; R++) {
      S[R] = P[R];
    }
    return S;
  }
  function x() {
    'use strict';

    x = function () {
      return U;
    };
    var R,
      U = {},
      V = Object.prototype,
      W = V.hasOwnProperty,
      X = Object.defineProperty || function (ap, aq, ar) {
        ap[aq] = ar.value;
      },
      Y = "function" == typeof Symbol ? Symbol : {},
      Z = Y.iterator || "@@iterator",
      a0 = Y.asyncIterator || "@@asyncIterator",
      a1 = Y.toStringTag || "@@toStringTag";
    function a2(ap, aq, ar) {
      var as = {
        value: ar,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(ap, aq, as);
      return ap[aq];
    }
    try {
      a2({}, "");
    } catch (aq) {
      a2 = function (as, at, au) {
        return as[at] = au;
      };
    }
    function a3(as, at, au, av) {
      var aw = at && at.prototype instanceof aa ? at : aa,
        ax = Object.create(aw.prototype),
        ay = new an(av || []);
      X(ax, "_invoke", {
        value: aj(as, au, ay)
      });
      return ax;
    }
    function a4(as, at, au) {
      try {
        return {
          type: "normal",
          arg: as.call(at, au)
        };
      } catch (ax) {
        var av = {
          type: "throw",
          arg: ax
        };
        return av;
      }
    }
    U.wrap = a3;
    var a5 = "suspendedStart",
      a6 = "suspendedYield",
      a7 = "executing",
      a8 = "completed",
      a9 = {};
    function aa() {}
    function ab() {}
    function ac() {}
    var ad = {};
    a2(ad, Z, function () {
      return this;
    });
    var ae = Object.getPrototypeOf,
      af = ae && ae(ae(ao([])));
    af && af !== V && W.call(af, Z) && (ad = af);
    ac.prototype = aa.prototype = Object.create(ad);
    var ag = ac.prototype;
    function ah(as) {
      ["next", "throw", "return"].forEach(function (au) {
        a2(as, au, function (aw) {
          return this._invoke(au, aw);
        });
      });
    }
    function ai(as, at) {
      function aw(ax, ay, az, aA) {
        var aC = a4(as[ax], as, ay);
        if ("throw" !== aC.type) {
          var aD = aC.arg,
            aE = aD.value;
          return aE && "object" == k(aE) && W.call(aE, "__await") ? at.resolve(aE.__await).then(function (aH) {
            aw("next", aH, az, aA);
          }, function (aH) {
            aw("throw", aH, az, aA);
          }) : at.resolve(aE).then(function (aH) {
            aD.value = aH;
            az(aD);
          }, function (aH) {
            return aw("throw", aH, az, aA);
          });
        }
        aA(aC.arg);
      }
      var av;
      X(this, "_invoke", {
        value: function (ax, ay) {
          function aB() {
            return new at(function (aF, aG) {
              aw(ax, ay, aF, aG);
            });
          }
          return av = av ? av.then(aB, aB) : aB();
        }
      });
    }
    function aj(as, at, au) {
      var aw = a5;
      return function (ax, ay) {
        if (aw === a7) {
          throw Error("Generator is already running");
        }
        if (aw === a8) {
          if ("throw" === ax) {
            throw ay;
          }
          var aA = {
            value: R,
            done: !0
          };
          return aA;
        }
        for (au.method = ax, au.arg = ay;;) {
          var aB = au.delegate;
          if (aB) {
            var aC = ak(aB, au);
            if (aC) {
              if (aC === a9) {
                continue;
              }
              return aC;
            }
          }
          if ("next" === au.method) {
            au.sent = au._sent = au.arg;
          } else {
            if ("throw" === au.method) {
              if (aw === a5) {
                throw aw = a8, au.arg;
              }
              au.dispatchException(au.arg);
            } else {
              "return" === au.method && au.abrupt("return", au.arg);
            }
          }
          aw = a7;
          var aD = a4(as, at, au);
          if ("normal" === aD.type) {
            if (aw = au.done ? a8 : a6, aD.arg === a9) {
              continue;
            }
            var aE = {};
            aE.value = aD.arg;
            aE.done = au.done;
            return aE;
          }
          "throw" === aD.type && (aw = a8, au.method = "throw", au.arg = aD.arg);
        }
      };
    }
    function ak(as, at) {
      var au = at.method,
        av = as.iterator[au];
      if (av === R) {
        at.delegate = null;
        "throw" === au && as.iterator.return && (at.method = "return", at.arg = R, ak(as, at), "throw" === at.method) || "return" !== au && (at.method = "throw", at.arg = new TypeError("The iterator does not provide a '" + au + "' method"));
        return a9;
      }
      var aw = a4(av, as.iterator, at.arg);
      if ("throw" === aw.type) {
        at.method = "throw";
        at.arg = aw.arg;
        at.delegate = null;
        return a9;
      }
      var ax = aw.arg;
      return ax ? ax.done ? (at[as.resultName] = ax.value, at.next = as.nextLoc, "return" !== at.method && (at.method = "next", at.arg = R), at.delegate = null, a9) : ax : (at.method = "throw", at.arg = new TypeError("iterator result is not an object"), at.delegate = null, a9);
    }
    function al(as) {
      var av = {
        tryLoc: as[0]
      };
      var aw = av;
      1 in as && (aw.catchLoc = as[1]);
      2 in as && (aw.finallyLoc = as[2], aw.afterLoc = as[3]);
      this.tryEntries.push(aw);
    }
    function am(as) {
      var av = as.completion || {};
      av.type = "normal";
      delete av.arg;
      as.completion = av;
    }
    function an(as) {
      var at = {
        tryLoc: "root"
      };
      this.tryEntries = [at];
      as.forEach(al, this);
      this.reset(!0);
    }
    function ao(as) {
      if (as || "" === as) {
        var au = as[Z];
        if (au) {
          return au.call(as);
        }
        if ("function" == typeof as.next) {
          return as;
        }
        if (!isNaN(as.length)) {
          var av = -1,
            aw = function az() {
              for (; ++av < as.length;) {
                if (W.call(as, av)) {
                  az.value = as[av];
                  az.done = !1;
                  return az;
                }
              }
              az.value = R;
              az.done = !0;
              return az;
            };
          return aw.next = aw;
        }
      }
      throw new TypeError(k(as) + " is not iterable");
    }
    ab.prototype = ac;
    X(ag, "constructor", {
      value: ac,
      configurable: !0
    });
    X(ac, "constructor", {
      value: ab,
      configurable: !0
    });
    ab.displayName = a2(ac, a1, "GeneratorFunction");
    U.isGeneratorFunction = function (as) {
      var at = "function" == typeof as && as.constructor;
      return !!at && (at === ab || "GeneratorFunction" === (at.displayName || at.name));
    };
    U.mark = function (as) {
      Object.setPrototypeOf ? Object.setPrototypeOf(as, ac) : (as.__proto__ = ac, a2(as, a1, "GeneratorFunction"));
      as.prototype = Object.create(ag);
      return as;
    };
    U.awrap = function (as) {
      var at = {
        __await: as
      };
      return at;
    };
    ah(ai.prototype);
    a2(ai.prototype, a0, function () {
      return this;
    });
    U.AsyncIterator = ai;
    U.async = function (as, at, au, av, aw) {
      void 0 === aw && (aw = Promise);
      var ay = new ai(a3(as, at, au, av), aw);
      return U.isGeneratorFunction(at) ? ay : ay.next().then(function (az) {
        return az.done ? az.value : ay.next();
      });
    };
    ah(ag);
    a2(ag, a1, "Generator");
    a2(ag, Z, function () {
      return this;
    });
    a2(ag, "toString", function () {
      return "[object Generator]";
    });
    U.keys = function (as) {
      var at = Object(as),
        au = [];
      for (var av in at) au.push(av);
      au.reverse();
      return function ax() {
        for (; au.length;) {
          var ay = au.pop();
          if (ay in at) {
            ax.value = ay;
            ax.done = !1;
            return ax;
          }
        }
        ax.done = !0;
        return ax;
      };
    };
    U.values = ao;
    an.prototype = {
      constructor: an,
      reset: function (as) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = R, this.done = !1, this.delegate = null, this.method = "next", this.arg = R, this.tryEntries.forEach(am), !as) {
          for (var at in this) "t" === at.charAt(0) && W.call(this, at) && !isNaN(+at.slice(1)) && (this[at] = R);
        }
      },
      stop: function () {
        this.done = !0;
        var as = this.tryEntries[0].completion;
        if ("throw" === as.type) {
          throw as.arg;
        }
        return this.rval;
      },
      dispatchException: function (as) {
        if (this.done) {
          throw as;
        }
        var au = this;
        function aB(aC, aD) {
          ax.type = "throw";
          ax.arg = as;
          au.next = aC;
          aD && (au.method = "next", au.arg = R);
          return !!aD;
        }
        for (var av = this.tryEntries.length - 1; av >= 0; --av) {
          var aw = this.tryEntries[av],
            ax = aw.completion;
          if ("root" === aw.tryLoc) {
            return aB("end");
          }
          if (aw.tryLoc <= this.prev) {
            var ay = W.call(aw, "catchLoc"),
              az = W.call(aw, "finallyLoc");
            if (ay && az) {
              if (this.prev < aw.catchLoc) {
                return aB(aw.catchLoc, !0);
              }
              if (this.prev < aw.finallyLoc) {
                return aB(aw.finallyLoc);
              }
            } else {
              if (ay) {
                if (this.prev < aw.catchLoc) {
                  return aB(aw.catchLoc, !0);
                }
              } else {
                if (!az) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aw.finallyLoc) {
                  return aB(aw.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (as, at) {
        for (var av = this.tryEntries.length - 1; av >= 0; --av) {
          var aw = this.tryEntries[av];
          if (aw.tryLoc <= this.prev && W.call(aw, "finallyLoc") && this.prev < aw.finallyLoc) {
            var ax = aw;
            break;
          }
        }
        ax && ("break" === as || "continue" === as) && ax.tryLoc <= at && at <= ax.finallyLoc && (ax = null);
        var ay = ax ? ax.completion : {};
        ay.type = as;
        ay.arg = at;
        return ax ? (this.method = "next", this.next = ax.finallyLoc, a9) : this.complete(ay);
      },
      complete: function (as, at) {
        if ("throw" === as.type) {
          throw as.arg;
        }
        "break" === as.type || "continue" === as.type ? this.next = as.arg : "return" === as.type ? (this.rval = this.arg = as.arg, this.method = "return", this.next = "end") : "normal" === as.type && at && (this.next = at);
        return a9;
      },
      finish: function (as) {
        for (var av = this.tryEntries.length - 1; av >= 0; --av) {
          var aw = this.tryEntries[av];
          if (aw.finallyLoc === as) {
            this.complete(aw.completion, aw.afterLoc);
            am(aw);
            return a9;
          }
        }
      },
      catch: function (as) {
        for (var au = this.tryEntries.length - 1; au >= 0; --au) {
          var av = this.tryEntries[au];
          if (av.tryLoc === as) {
            var aw = av.completion;
            if ("throw" === aw.type) {
              var ax = aw.arg;
              am(av);
            }
            return ax;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (as, at, au) {
        this.delegate = {
          iterator: ao(as),
          resultName: at,
          nextLoc: au
        };
        "next" === this.method && (this.arg = R);
        return a9;
      }
    };
    return U;
  }
  function z(P, Q, R, S, T, U, V) {
    try {
      var X = P[U](V),
        Y = X.value;
    } catch (a1) {
      return void R(a1);
    }
    X.done ? Q(Y) : Promise.resolve(Y).then(S, T);
  }
  function A(P) {
    return function () {
      var S = this,
        T = arguments;
      return new Promise(function (U, V) {
        var X = P.apply(S, T);
        function Y(a0) {
          z(X, U, V, Y, Z, "next", a0);
        }
        function Z(a0) {
          z(X, U, V, Y, Z, "throw", a0);
        }
        Y(void 0);
      });
    };
  }
  var B = ($.isNode() ? JSON.parse(process.env.JingCai) : $.getjson("JingCai")) || [],
    C = "",
    D = "",
    E = "";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = A(x().mark(function P() {
      var V, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB;
      return x().wrap(function (aC) {
        for (;;) {
          switch (aC.prev = aC.next) {
            case 0:
              V = q(B);
              aC.prev = 1;
              V.s();
            case 3:
              if ((Z = V.n()).done) {
                aC.next = 66;
                break;
              }
              if (a0 = Z.value, aC.prev = 5, C = a0.memberId, D = a0.cookie, console.log("用户：".concat(C, "开始任务")), C != B[0].memberId) {
                aC.next = 16;
                break;
              }
              aC.next = 12;
              return J("/marketing/data/appletTurntable/isShareStatus.json", {
                platform: 4,
                appletRecommendId: "2513496"
              });
            case 12:
              a8 = aC.sent;
              console.log("助力结果：".concat(null == a8 || null === (a7 = a8.data) || void 0 === a7 ? void 0 : a7.status));
              aC.next = 20;
              break;
            case 16:
              var aD = {};
              aD.platform = 4;
              aD.appletRecommendId = B[0].memberId;
              aC.next = 18;
              return J("/marketing/data/appletTurntable/isShareStatus.json", aD);
            case 18:
              aa = aC.sent;
              console.log("助力结果：".concat(null == aa || null === (a9 = aa.data) || void 0 === a9 ? void 0 : a9.status));
            case 20:
              aC.next = 22;
              return J("/marketing/inner/appletTurntablePrize/getLotteryPrizeInfo.json");
            case 22:
              ab = aC.sent;
              console.log("剩余抽奖次数：".concat(null == ab || null === (a1 = ab.data) || void 0 === a1 ? void 0 : a1.surplusNum));
              ac = 0;
            case 25:
              if (!(ac < (null == ab || null === (ad = ab.data) || void 0 === ad ? void 0 : ad.surplusNum))) {
                aC.next = 33;
                break;
              }
              aC.next = 28;
              return J("/marketing/data/appletTurntableLog/lotteryEntrance.json");
            case 28:
              af = aC.sent;
              null != af && null !== (ae = af.data) && void 0 !== ae && ae.prizeAmount ? 1 == (null == af || null === (ag = af.data) || void 0 === ag ? void 0 : ag.amountType) ? (console.log("抽奖获得微信红包：".concat(null == af || null === (ai = af.data) || void 0 === ai ? void 0 : ai.prizeName, " ").concat(null == af || null === (aj = af.data) || void 0 === aj ? void 0 : aj.prizeAmount, "元")), E += "用户".concat(C, " 抽奖获得微信红包：").concat(null == af || null === (ak = af.data) || void 0 === ak ? void 0 : ak.prizeName, " ").concat(null == af || null === (al = af.data) || void 0 === al ? void 0 : al.prizeAmount, "元\n")) : 2 == (null == af || null === (ah = af.data) || void 0 === ah ? void 0 : ah.amountType) ? (console.log("抽奖获得余额：".concat(null == af || null === (am = af.data) || void 0 === am ? void 0 : am.prizeName, " ").concat(null == af || null === (an = af.data) || void 0 === an ? void 0 : an.prizeAmount, "元")), E += "用户".concat(C, " 抽奖获得余额：").concat(null == af || null === (ao = af.data) || void 0 === ao ? void 0 : ao.prizeName, " ").concat(null == af || null === (ap = af.data) || void 0 === ap ? void 0 : ap.prizeAmount, "元\n")) : console.log(null == af || null === (aq = af.data) || void 0 === aq ? void 0 : aq.prizeName) : console.log(JSON.stringify(af));
            case 30:
              ac++;
              aC.next = 25;
              break;
            case 33:
              aC.next = 35;
              return J("/marketing/data/appletTurntable/getTotalMoney.json");
            case 35:
              if (ar = aC.sent, !((null === (a2 = ar) || void 0 === a2 || null === (a2 = a2.data) || void 0 === a2 ? void 0 : a2.totalMoney) >= 0.5)) {
                aC.next = 45;
                break;
              }
              aC.next = 39;
              return J("/marketing/data/appletTurntable/addReward.json", {
                platform: 4,
                rewardMoney: null === (as = ar) || void 0 === as || null === (as = as.data) || void 0 === as ? void 0 : as.totalMoney
              });
            case 39:
              av = aC.sent;
              console.log("提现到钱包：".concat(null === (at = ar) || void 0 === at || null === (at = at.data) || void 0 === at ? void 0 : at.totalMoney, "元 提现结果：").concat(null == av ? void 0 : av.msg));
              E += "用户".concat(C, " 提现到钱包：").concat(null === (au = ar) || void 0 === au || null === (au = au.data) || void 0 === au ? void 0 : au.totalMoney, "元 提现结果：").concat(null == av ? void 0 : av.msg, "\n");
              aC.next = 44;
              return J("/marketing/data/appletTurntable/getTotalMoney.json");
            case 44:
              ar = aC.sent;
            case 45:
              aC.next = 47;
              return J("/mini/data/resume/getAccountAmount.json");
            case 47:
              if (aw = aC.sent, !((null === (a3 = aw) || void 0 === a3 || null === (a3 = a3.data) || void 0 === a3 ? void 0 : a3.amount) >= 0.5)) {
                aC.next = 57;
                break;
              }
              aC.next = 51;
              return J("/mini/data/resume/cashOut.json", {
                platform: 4,
                resumeAccountId: null === (ax = aw) || void 0 === ax || null === (ax = ax.data) || void 0 === ax ? void 0 : ax.resumeAccountId,
                allAmount: null === (ay = aw) || void 0 === ay || null === (ay = ay.data) || void 0 === ay ? void 0 : ay.amount
              });
            case 51:
              aB = aC.sent;
              console.log("提现到微信：".concat(null === (az = aw) || void 0 === az || null === (az = az.data) || void 0 === az ? void 0 : az.amount, "元 提现结果：").concat(null == aB ? void 0 : aB.msg));
              E += "用户".concat(C, " 提现到微信：").concat(null === (aA = aw) || void 0 === aA || null === (aA = aA.data) || void 0 === aA ? void 0 : aA.amount, "元 提现结果：").concat(null == aB ? void 0 : aB.msg, "\n");
              aC.next = 56;
              return J("/mini/data/resume/getAccountAmount.json");
            case 56:
              aw = aC.sent;
            case 57:
              console.log("余额：".concat(null === (a4 = ar) || void 0 === a4 || null === (a4 = a4.data) || void 0 === a4 ? void 0 : a4.totalMoney, " 钱包：").concat(null === (a5 = aw) || void 0 === a5 || null === (a5 = a5.data) || void 0 === a5 ? void 0 : a5.amount));
              E += "用户".concat(C, " 钱包余额：").concat(null === (a6 = ar) || void 0 === a6 || null === (a6 = a6.data) || void 0 === a6 ? void 0 : a6.totalMoney, "元\n");
              aC.next = 64;
              break;
            case 61:
              aC.prev = 61;
              aC.t0 = aC.catch(5);
              console.log(aC.t0);
            case 64:
              aC.next = 3;
              break;
            case 66:
              aC.next = 71;
              break;
            case 68:
              aC.prev = 68;
              aC.t1 = aC.catch(1);
              V.e(aC.t1);
            case 71:
              aC.prev = 71;
              V.f();
              return aC.finish(71);
            case 74:
              if (!E) {
                aC.next = 77;
                break;
              }
              aC.next = 77;
              return N(E);
            case 77:
            case "end":
              return aC.stop();
          }
        }
      }, P, null, [[1, 68, 71, 74], [5, 61]]);
    }));
    return G.apply(this, arguments);
  }
  function H() {
    return I.apply(this, arguments);
  }
  function I() {
    I = A(x().mark(function Q() {
      var S, T, U, V, W;
      return x().wrap(function (X) {
        for (;;) {
          switch (X.prev = X.next) {
            case 0:
              if (S = $request.headers.cookie || $request.headers.Cookie, T = $.toObj($response.body), S && T) {
                X.next = 4;
                break;
              }
              return X.abrupt("return");
            case 4:
              if (U = T.data.resumeId, V = {
                memberId: U,
                cookie: S
              }, W = B.findIndex(function (Y) {
                return Y.memberId == V.memberId;
              }), -1 === W) {
                X.next = 17;
                break;
              }
              if (B[W].cookie != V.cookie) {
                X.next = 12;
                break;
              }
              return X.abrupt("return");
            case 12:
              B[W].cookie = S;
              console.log(V.cookie);
              $.msg($.name, "🎉用户".concat(V.memberId, "更新token成功!"), "");
            case 15:
              X.next = 20;
              break;
            case 17:
              B.push(V);
              console.log(V.cookie);
              $.msg($.name, "🎉新增用户".concat(V.memberId, "成功!"), "");
            case 20:
              $.setjson(B, "JingCai");
            case 21:
            case "end":
              return X.stop();
          }
        }
      }, Q);
    }));
    return I.apply(this, arguments);
  }
  function J(P) {
    return K.apply(this, arguments);
  }
  function K() {
    K = A(x().mark(function Q(R) {
      var U,
        V = arguments;
      return x().wrap(function (W) {
        for (;;) {
          switch (W.prev = W.next) {
            case 0:
              var Y = {};
              Y.platform = 4;
              U = V.length > 1 && void 0 !== V[1] ? V[1] : Y;
              return W.abrupt("return", new Promise(function (Z) {
                var a0 = {
                  url: "https://gateway.5jingcai.com".concat(R),
                  headers: {
                    "content-type": "application/json;charset=UTF-8",
                    cookie: D,
                    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.56(0x1800383b) NetType/WIFI Language/zh_CN",
                    Referer: "https://servicewechat.com/wxa66427ada336778f/9/page-frame.html"
                  },
                  body: JSON.stringify(U)
                };
                $.post(a0, function () {
                  var a2 = A(x().mark(function a3(a4, a5, a6) {
                    return x().wrap(function (a8) {
                      for (;;) {
                        switch (a8.prev = a8.next) {
                          case 0:
                            if (a8.prev = 0, !a4) {
                              a8.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a4)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a8.next = 9;
                            break;
                          case 6:
                            a8.next = 8;
                            return $.wait(2000);
                          case 8:
                            Z(JSON.parse(a6));
                          case 9:
                            a8.next = 14;
                            break;
                          case 11:
                            a8.prev = 11;
                            a8.t0 = a8.catch(0);
                            $.logErr(a8.t0, a5);
                          case 14:
                            a8.prev = 14;
                            Z();
                            return a8.finish(14);
                          case 17:
                          case "end":
                            return a8.stop();
                        }
                      }
                    }, a3, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a4, a5, a6) {
                    return a2.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return W.stop();
          }
        }
      }, Q);
    }));
    return K.apply(this, arguments);
  }
  function L() {
    return M.apply(this, arguments);
  }
  function M() {
    M = A(x().mark(function Q() {
      return x().wrap(function (S) {
        for (;;) {
          switch (S.prev = S.next) {
            case 0:
              return S.abrupt("return", new Promise(function (T) {
                var V = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(V, function () {
                  var X = A(x().mark(function Y(Z, a0, a1) {
                    return x().wrap(function (a3) {
                      for (;;) {
                        switch (a3.prev = a3.next) {
                          case 0:
                            try {
                              Z ? (console.log("".concat(JSON.stringify(Z))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(a1).notice);
                            } catch (a4) {
                              $.logErr(a4, a0);
                            } finally {
                              T();
                            }
                          case 1:
                          case "end":
                            return a3.stop();
                        }
                      }
                    }, Y);
                  }));
                  return function (Z, a0, a1) {
                    return X.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return S.stop();
          }
        }
      }, Q);
    }));
    return M.apply(this, arguments);
  }
  function N(P) {
    return O.apply(this, arguments);
  }
  function O() {
    O = A(x().mark(function P(Q) {
      return x().wrap(function (R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              if (!$.isNode()) {
                R.next = 5;
                break;
              }
              R.next = 3;
              return notify.sendNotify($.name, Q);
            case 3:
              R.next = 6;
              break;
            case 5:
              $.msg($.name, "", Q);
            case 6:
            case "end":
              return R.stop();
          }
        }
      }, P);
    }));
    return O.apply(this, arguments);
  }
  A(x().mark(function P() {
    return x().wrap(function (R) {
      for (;;) {
        switch (R.prev = R.next) {
          case 0:
            if ("undefined" == typeof $request || "OPTIONS" == $request.method) {
              R.next = 5;
              break;
            }
            R.next = 3;
            return H();
          case 3:
            R.next = 9;
            break;
          case 5:
            R.next = 7;
            return L();
          case 7:
            R.next = 9;
            return F();
          case 9:
          case "end":
            return R.stop();
        }
      }
    }, P);
  }))().catch(function (Q) {
    $.log(Q);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}