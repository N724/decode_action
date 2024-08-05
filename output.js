//Mon Aug 05 2024 09:53:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  checkCk,
  validateCarmeWithType,
  getUserInfo,
  tryCatchPromise,
  couponNotify,
  getCookies,
  checkCarmeCount,
  wait,
  getCookieMap,
  randomString
} = require("./common.js");
const _0xb9d6d = require("request");
const _0x6ad5ea = require("moment");
const _0x249702 = process.env.ELE_CARME;
const _0x23ac39 = 18;
const _0x1116aa = process.env.HOST || "http://local.94wan.fun:9999";
function _0x25c114(_0x2a456d, _0x1a1a36, _0x597501, _0x382dcd, _0x32b5e3, _0x26d737, _0x4f9be1) {
  const _0x4da18e = {
    data: _0x2a456d,
    api: _0x1a1a36,
    pageId: decodeURIComponent(_0x597501),
    uid: _0x32b5e3,
    deviceId: _0x26d737,
    utdid: _0x4f9be1
  };
  if (_0x382dcd) {
    _0x4da18e.sid = _0x382dcd;
  }
  const _0x116918 = {
    method: "POST",
    headers: {},
    url: _0x1116aa + "/api/getXSign",
    body: JSON.stringify(_0x4da18e)
  };
  _0x116918.headers["content-type"] = "application/json";
  return tryCatchPromise(_0x15923c => {
    _0xb9d6d(_0x116918, async (_0x799f73, _0x950549, _0x15c335) => {
      if (!_0x799f73 && _0x950549.statusCode === 200) {
        try {
          const _0x47ed43 = JSON.parse(_0x15c335);
          _0x15923c(_0x47ed43);
        } catch (_0x2a2cfe) {
          console.log(_0x2a2cfe);
          _0x15923c(null);
        }
      } else {
        _0x15923c(null);
      }
    });
  });
}
async function _0x9c1466(_0x5a182f, _0x299604) {
  let _0x38e6de = getCookieMap(_0x5a182f);
  let _0xe8e811 = _0x38e6de.get("deviceId") || randomString(44);
  let _0x297941 = _0x38e6de.get("utdid") || randomString(24);
  let _0xb00e2 = _0x38e6de.get("USERID");
  let _0x24905d = _0x38e6de.get("umt");
  let _0x44e68e = "{\"condition\":\"\",\"cityCode\":\"330100\",\"latitude\":\"30.178378857672215\",\"tabCode\":\"HONG_BAO\",\"userId\":\"" + _0xb00e2 + "\",\"longitude\":\"120.21993197500706\",\"sourceFrom\":\"ELEME_APP\",\"userGeoHash\":\"wtm7xtv3z3wd\"}";
  let _0x28ded6 = "mtop.alsc.personal.querypasslist4native";
  let _0x43c7bd = "https%3A%2F%2Fr.ele.me%2Fmagic-cube%2F%3FnavType%3D3%26spm%3Da13.b_activity_kb_m71293.0.0%23%2Fgame";
  let _0x4e1e2a = _0x38e6de.get("cookie2");
  let _0x54e7fd = _0x38e6de.get("unb");
  let _0x2ec472 = await _0x25c114(_0x44e68e, _0x28ded6, _0x43c7bd, _0x4e1e2a, _0x54e7fd, _0xe8e811, _0x297941);
  if (!_0x2ec472) {
    console.log("查询抢券结果异常，请到 app 中查看");
    return;
  }
  let _0x33b5e5 = encodeURIComponent(_0x2ec472["x-sgext"]);
  let _0x2faa14 = encodeURIComponent(_0x2ec472["x-sign"]);
  _0x24905d = encodeURIComponent(_0x2ec472["x-umt"]);
  let _0x3a446e = encodeURIComponent(_0x2ec472["x-mini-wua"]);
  let _0x53de2e = _0x2ec472["x-t"];
  let _0x31a1d2 = encodeURIComponent(_0x2ec472.wua);
  const _0x159ff8 = {
    "x-sgext": _0x33b5e5,
    "x-sign": _0x2faa14,
    "x-devid": _0xe8e811,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": _0x3a446e,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x53de2e,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": _0x24905d,
    "x-utdid": encodeURIComponent(_0x297941),
    "x-appkey": "24895413",
    "x-page-url": _0x43c7bd,
    Host: "guide-acs.m.taobao.com",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B13%3BGoogle%3BPixel+4+XL%29",
    "x-sid": _0x4e1e2a,
    "x-uid": _0x54e7fd,
    Cookie: _0x5a182f
  };
  let _0x54207e = "https://guide-acs.m.taobao.com/gw/mtop.alsc.personal.querypasslist4native/1.0/?data=" + encodeURIComponent(_0x44e68e) + "&type=originaljson&wua=" + _0x31a1d2;
  const _0x1d60a7 = {
    method: "POST",
    url: _0x54207e,
    headers: _0x159ff8,
    body: _0x44e68e
  };
  return tryCatchPromise(_0x20a079 => {
    _0xb9d6d(_0x1d60a7, async (_0x122744, _0x1380b6, _0x5f4039) => {
      if (!_0x122744 && _0x1380b6.statusCode === 200) {
        try {
          const _0x254791 = JSON.parse(_0x5f4039);
          if (_0x254791.data.data) {
            let _0x1929aa = _0x254791.data.data.vouchers_list_component.fields.items;
            if (_0x1929aa) {
              let _0x38e1f7 = _0x6ad5ea(new Date().getTime());
              let _0x508c2d = _0x38e1f7.startOf("day").valueOf();
              let _0x248c75 = _0x1929aa.filter(_0x396fcd => {
                return _0x396fcd.fields.benefitType === "ELE_COMMODITY_HB" && _0x396fcd.fields.thresholdText === "无门槛";
              });
              let _0x7f7602 = _0x248c75.filter(_0x37573a => {
                return _0x37573a.fields.gmtCreate >= _0x508c2d / 1000 + "";
              });
              if (_0x7f7602.length < 1) {
                console.log("今日未获得无门槛优惠券");
              } else {
                for (let _0x20b6ea = 0; _0x20b6ea < _0x7f7602.length; _0x20b6ea++) {
                  let _0x37dfa4 = _0x7f7602[_0x20b6ea];
                  console.log("今日获取无门槛优惠券为：", _0x37dfa4.fields.title);
                  await couponNotify(_0x5a182f, "###抢券成功推送\n手机号：" + _0x299604 + "\n抢券成功" + _0x37dfa4.fields.title);
                }
              }
            } else {
              console.log("查询抢券结果异常，请到 app 中查看");
            }
          } else {
            console.log("查询抢券结果异常，请到 app 中查看");
          }
        } catch (_0x2d2496) {
          console.log("查询抢券结果异常，请到 app 中查看");
        }
        _0x20a079();
      } else {
        console.log("查询抢券结果异常，请到 app 中查看");
        _0x20a079();
      }
    });
  });
}
async function _0x3ba28e() {
  await validateCarmeWithType(_0x249702, 1);
  const _0x12b711 = getCookies("elmqqck");
  for (let _0x5a8d4d = 0; _0x5a8d4d < _0x12b711.length; _0x5a8d4d++) {
    let _0x221e0d = _0x12b711[_0x5a8d4d];
    _0x221e0d = await checkCk(_0x221e0d, _0x5a8d4d);
    if (!_0x221e0d) {
      continue;
    }
    let _0x119d15 = await getUserInfo(_0x221e0d);
    if (!_0x119d15.username) {
      console.log("第", _0x5a8d4d + 1, "账号失效！请重新登录！！！😭");
    }
    const _0x195356 = _0x119d15.user_id;
    let _0x1b78eb = _0x119d15.mobile;
    await checkCarmeCount(_0x249702, _0x195356, _0x23ac39);
    console.log("\n****** #" + (_0x5a8d4d + 1), _0x1b78eb, "*********");
    console.log("账号的 id 为", _0x195356);
    await _0x9c1466(_0x221e0d, _0x1b78eb);
    console.log("防止挤爆了，延时 10 秒");
    await wait(10);
  }
  process.exit(0);
}
_0x3ba28e();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
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
        s.call(this, t, (t, s, r) => {
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
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
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
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
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
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
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
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
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
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
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
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}