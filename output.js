//Tue Jul 02 2024 12:42:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("霸王茶姬"),
  axios = require("axios"),
  {
    sendNotify
  } = require("./sendNotify");
let notifyStr = "",
  appid = atob("d3hhZmVjNmY4NDIyY2IzNTdi");
(async () => {
  const _0x309bba = process.env.bwcj_ck;
  if (!_0x309bba) {
    logAndNotify("bwcj_ck不存在");
    return;
  }
  let _0x1af3c5 = _0x309bba.replaceAll("&", "\n").split("\n");
  for (let _0xfdb509 = 0; _0xfdb509 < _0x1af3c5.length; _0xfdb509++) {
    const _0x109afd = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x1af3c5[_0xfdb509]);
    if (!_0x109afd.data.status) {
      logAndNotify("账号【" + (_0xfdb509 + 1) + "】 登录失败");
      continue;
    }
    const _0x2a3654 = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userSignStatistics", _0x1af3c5[_0xfdb509], {
      activityId: "947079313798000641",
      appid: appid
    });
    _0x2a3654.data.status && _0x2a3654.data.data.signStatus == 1 && logAndNotify("账号【" + (_0xfdb509 + 1) + "】 签到成功 连续签到" + _0x2a3654.data.data.signDays + "天");
    const _0x1b19be = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x1af3c5[_0xfdb509]);
    _0x1b19be.data.status && logAndNotify("账号【" + (_0xfdb509 + 1) + "】 积分：【" + _0x1b19be.data.data.customerAssertInfo.integral + "】");
    const _0x5889dd = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userReward", _0x1af3c5[_0xfdb509], {
      activityId: "947079313798000641",
      appid: appid,
      pageNo: 1,
      pageSize: 30
    });
    if (_0x5889dd.data.status) {
      const _0x5a30ce = _0x5889dd.data.data.list;
      for (let _0xf631c9 = 0; _0xf631c9 < _0x5a30ce.length; _0xf631c9++) {
        _0x5a30ce[_0xf631c9].rewardType === 1 && logAndNotify("账号【" + (_0xfdb509 + 1) + "】 奖品领取时间【" + _0x5a30ce[_0xf631c9].date + "】【" + _0x5a30ce[_0xf631c9].rewardName + "】");
      }
    }
  }
})().catch(_0x4aea21 => {
  logAndNotify(_0x4aea21);
}).finally(() => {
  sendNotify("一汽大众", notifyStr);
  $.done();
});
function sendPostRequest(_0x4cb83e, _0x354947, _0x198f0e) {
  const _0x57d1ee = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-User-Token": "Rh04KAYDEaKbwudXc4e07Hkxm-dTiq9E8c42AXW4e-VXV7Vw9FPYkL9hHzo3MlD2",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x242df1 = {
      ..._0x57d1ee,
      ...{
        "Qm-User-Token": _0x354947
      }
    },
    _0x378039 = axios.create({
      headers: _0x242df1
    });
  return _0x378039.post(_0x4cb83e, _0x198f0e);
}
function sendGetRequest(_0x1596ac, _0x3e5c76) {
  const _0xb50686 = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-User-Token": "Rh04KAYDEaKbwudXc4e07Hkxm-dTiq9E8c42AXW4e-VXV7Vw9FPYkL9hHzo3MlD2",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x63862a = {
      ..._0xb50686,
      ...{
        "Qm-User-Token": _0x3e5c76
      }
    },
    _0x15e9d0 = axios.create({
      headers: _0x63862a
    });
  return _0x15e9d0.get(_0x1596ac);
}
function logAndNotify(_0x154616) {
  1;
  $.log(_0x154616);
  notifyStr += _0x154616;
  notifyStr += "\n";
}
function Env(_0x1d6a5e, _0x5b6587) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x54035e {
    constructor(_0x18f868) {
      this.env = _0x18f868;
    }
    send(_0x15fef9, _0x36f6db = "GET") {
      _0x15fef9 = "string" == typeof _0x15fef9 ? {
        url: _0x15fef9
      } : _0x15fef9;
      let _0x11594f = this.get;
      "POST" === _0x36f6db && (_0x11594f = this.post);
      return new Promise((_0x28d410, _0x4a109c) => {
        _0x11594f.call(this, _0x15fef9, (_0x476202, _0x17502c, _0x5d5326) => {
          _0x476202 ? _0x4a109c(_0x476202) : _0x28d410(_0x17502c);
        });
      });
    }
    get(_0x2808a5) {
      return this.send.call(this.env, _0x2808a5);
    }
    post(_0x170d7c) {
      return this.send.call(this.env, _0x170d7c, "POST");
    }
  }
  return new class {
    constructor(_0x179107, _0x72b282) {
      this.name = _0x179107;
      this.http = new _0x54035e(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x72b282);
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(_0x3beaff, _0x488738 = null) {
      try {
        return JSON.parse(_0x3beaff);
      } catch {
        return _0x488738;
      }
    }
    toStr(_0x14bee6, _0x4d6217 = null) {
      try {
        return JSON.stringify(_0x14bee6);
      } catch {
        return _0x4d6217;
      }
    }
    getjson(_0x4b5c59, _0x34bbdc) {
      let _0x55600f = _0x34bbdc;
      const _0x1ab430 = this.getdata(_0x4b5c59);
      if (_0x1ab430) {
        try {
          _0x55600f = JSON.parse(this.getdata(_0x4b5c59));
        } catch {}
      }
      return _0x55600f;
    }
    setjson(_0x3d105a, _0x5b01ac) {
      try {
        return this.setdata(JSON.stringify(_0x3d105a), _0x5b01ac);
      } catch {
        return !1;
      }
    }
    getScript(_0x4fd398) {
      return new Promise(_0x2a178d => {
        this.get({
          url: _0x4fd398
        }, (_0x33ce54, _0x14a267, _0x5a22bb) => _0x2a178d(_0x5a22bb));
      });
    }
    runScript(_0x2111a1, _0x513754) {
      return new Promise(_0x59c2b0 => {
        let _0x25606d = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x25606d = _0x25606d ? _0x25606d.replace(/\n/g, "").trim() : _0x25606d;
        let _0x1b9c6c = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x1b9c6c = _0x1b9c6c ? 1 * _0x1b9c6c : 20;
        _0x1b9c6c = _0x513754 && _0x513754.timeout ? _0x513754.timeout : _0x1b9c6c;
        const [_0x5643fd, _0x508217] = _0x25606d.split("@"),
          _0x423c4a = {
            url: "http://" + _0x508217 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x2111a1,
              mock_type: "cron",
              timeout: _0x1b9c6c
            },
            headers: {
              "X-Key": _0x5643fd,
              Accept: "*/*"
            }
          };
        this.post(_0x423c4a, (_0x56e0db, _0x25c454, _0x3bb41a) => _0x59c2b0(_0x3bb41a));
      }).catch(_0x199ef4 => this.logErr(_0x199ef4));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x21bd44 = this.path.resolve(this.dataFile),
          _0x440cc3 = this.path.resolve(process.cwd(), this.dataFile),
          _0x3e084a = this.fs.existsSync(_0x21bd44),
          _0x324c38 = !_0x3e084a && this.fs.existsSync(_0x440cc3);
        if (!_0x3e084a && !_0x324c38) {
          return {};
        }
        {
          const _0xeb0e91 = _0x3e084a ? _0x21bd44 : _0x440cc3;
          try {
            return JSON.parse(this.fs.readFileSync(_0xeb0e91));
          } catch (_0x1e43bc) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x41cda4 = this.path.resolve(this.dataFile),
          _0x27b7c1 = this.path.resolve(process.cwd(), this.dataFile),
          _0x46439a = this.fs.existsSync(_0x41cda4),
          _0x5194b0 = !_0x46439a && this.fs.existsSync(_0x27b7c1),
          _0x2984b0 = JSON.stringify(this.data);
        _0x46439a ? this.fs.writeFileSync(_0x41cda4, _0x2984b0) : _0x5194b0 ? this.fs.writeFileSync(_0x27b7c1, _0x2984b0) : this.fs.writeFileSync(_0x41cda4, _0x2984b0);
      }
    }
    lodash_get(_0x5cf869, _0x4127ce, _0x494402) {
      const _0x2045bf = _0x4127ce.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x5effd6 = _0x5cf869;
      for (const _0x1f13a2 of _0x2045bf) if (_0x5effd6 = Object(_0x5effd6)[_0x1f13a2], void 0 === _0x5effd6) {
        return _0x494402;
      }
      return _0x5effd6;
    }
    lodash_set(_0xa038a9, _0x1c573f, _0x93d63a) {
      return Object(_0xa038a9) !== _0xa038a9 ? _0xa038a9 : (Array.isArray(_0x1c573f) || (_0x1c573f = _0x1c573f.toString().match(/[^.[\]]+/g) || []), _0x1c573f.slice(0, -1).reduce((_0x54f1c6, _0x43528f, _0x3bd89e) => Object(_0x54f1c6[_0x43528f]) === _0x54f1c6[_0x43528f] ? _0x54f1c6[_0x43528f] : _0x54f1c6[_0x43528f] = Math.abs(_0x1c573f[_0x3bd89e + 1]) >> 0 == +_0x1c573f[_0x3bd89e + 1] ? [] : {}, _0xa038a9)[_0x1c573f[_0x1c573f.length - 1]] = _0x93d63a, _0xa038a9);
    }
    getdata(_0x41de1d) {
      let _0x4e73e8 = this.getval(_0x41de1d);
      if (/^@/.test(_0x41de1d)) {
        const [, _0xd1df20, _0x76bcb3] = /^@(.*?)\.(.*?)$/.exec(_0x41de1d),
          _0x4ea6aa = _0xd1df20 ? this.getval(_0xd1df20) : "";
        if (_0x4ea6aa) {
          try {
            const _0x3f3f7f = JSON.parse(_0x4ea6aa);
            _0x4e73e8 = _0x3f3f7f ? this.lodash_get(_0x3f3f7f, _0x76bcb3, "") : _0x4e73e8;
          } catch (_0xcb223e) {
            _0x4e73e8 = "";
          }
        }
      }
      return _0x4e73e8;
    }
    setdata(_0xc4d5b2, _0x46f02b) {
      let _0x478c4f = !1;
      if (/^@/.test(_0x46f02b)) {
        const [, _0x403fd6, _0x3a71bc] = /^@(.*?)\.(.*?)$/.exec(_0x46f02b),
          _0x3ceada = this.getval(_0x403fd6),
          _0x27d171 = _0x403fd6 ? "null" === _0x3ceada ? null : _0x3ceada || "{}" : "{}";
        try {
          const _0x429b37 = JSON.parse(_0x27d171);
          this.lodash_set(_0x429b37, _0x3a71bc, _0xc4d5b2);
          _0x478c4f = this.setval(JSON.stringify(_0x429b37), _0x403fd6);
        } catch (_0x6d205b) {
          const _0x5651f5 = {};
          this.lodash_set(_0x5651f5, _0x3a71bc, _0xc4d5b2);
          _0x478c4f = this.setval(JSON.stringify(_0x5651f5), _0x403fd6);
        }
      } else {
        _0x478c4f = this.setval(_0xc4d5b2, _0x46f02b);
      }
      return _0x478c4f;
    }
    getval(_0x5cde73) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x5cde73) : this.isQuanX() ? $prefs.valueForKey(_0x5cde73) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5cde73]) : this.data && this.data[_0x5cde73] || null;
    }
    setval(_0x52f61f, _0x5952db) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x52f61f, _0x5952db) : this.isQuanX() ? $prefs.setValueForKey(_0x52f61f, _0x5952db) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5952db] = _0x52f61f, this.writedata(), !0) : this.data && this.data[_0x5952db] || null;
    }
    initGotEnv(_0x36def0) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x36def0 && (_0x36def0.headers = _0x36def0.headers ? _0x36def0.headers : {}, void 0 === _0x36def0.headers.Cookie && void 0 === _0x36def0.cookieJar && (_0x36def0.cookieJar = this.ckjar));
    }
    get(_0x54fe95, _0x1c4f11 = () => {}) {
      _0x54fe95.headers && (delete _0x54fe95.headers["Content-Type"], delete _0x54fe95.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x54fe95.headers = _0x54fe95.headers || {}, Object.assign(_0x54fe95.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x54fe95, (_0x44dd2a, _0x43e2d2, _0x467516) => {
        !_0x44dd2a && _0x43e2d2 && (_0x43e2d2.body = _0x467516, _0x43e2d2.statusCode = _0x43e2d2.status);
        _0x1c4f11(_0x44dd2a, _0x43e2d2, _0x467516);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x54fe95.opts = _0x54fe95.opts || {}, Object.assign(_0x54fe95.opts, {
        hints: !1
      })), $task.fetch(_0x54fe95).then(_0x5300d8 => {
        const {
          statusCode: _0x5ebf8e,
          statusCode: _0x4b6d09,
          headers: _0x4a09b3,
          body: _0x5da2b9
        } = _0x5300d8;
        _0x1c4f11(null, {
          status: _0x5ebf8e,
          statusCode: _0x4b6d09,
          headers: _0x4a09b3,
          body: _0x5da2b9
        }, _0x5da2b9);
      }, _0xa5d552 => _0x1c4f11(_0xa5d552))) : this.isNode() && (this.initGotEnv(_0x54fe95), this.got(_0x54fe95).on("redirect", (_0x485b35, _0x23032d) => {
        try {
          if (_0x485b35.headers["set-cookie"]) {
            const _0x222e8e = _0x485b35.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x222e8e && this.ckjar.setCookieSync(_0x222e8e, null);
            _0x23032d.cookieJar = this.ckjar;
          }
        } catch (_0xb4b4e1) {
          this.logErr(_0xb4b4e1);
        }
      }).then(_0x186f25 => {
        const {
          statusCode: _0x43f72c,
          statusCode: _0x1e3d1f,
          headers: _0x59363a,
          body: _0x5bd4b8
        } = _0x186f25;
        _0x1c4f11(null, {
          status: _0x43f72c,
          statusCode: _0x1e3d1f,
          headers: _0x59363a,
          body: _0x5bd4b8
        }, _0x5bd4b8);
      }, _0x3e73cb => {
        const {
          message: _0x21d6bc,
          response: _0x30f876
        } = _0x3e73cb;
        _0x1c4f11(_0x21d6bc, _0x30f876, _0x30f876 && _0x30f876.body);
      }));
    }
    post(_0x17888b, _0x2ff1c3 = () => {}) {
      if (_0x17888b.body && _0x17888b.headers && !_0x17888b.headers["Content-Type"] && (_0x17888b.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x17888b.headers && delete _0x17888b.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x17888b.headers = _0x17888b.headers || {}, Object.assign(_0x17888b.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x17888b, (_0x177c98, _0x3abd7f, _0x4f0f45) => {
          !_0x177c98 && _0x3abd7f && (_0x3abd7f.body = _0x4f0f45, _0x3abd7f.statusCode = _0x3abd7f.status);
          _0x2ff1c3(_0x177c98, _0x3abd7f, _0x4f0f45);
        });
      } else {
        if (this.isQuanX()) {
          _0x17888b.method = "POST";
          this.isNeedRewrite && (_0x17888b.opts = _0x17888b.opts || {}, Object.assign(_0x17888b.opts, {
            hints: !1
          }));
          $task.fetch(_0x17888b).then(_0x1fcbf5 => {
            const {
              statusCode: _0x2cfc5f,
              statusCode: _0x1e6b3e,
              headers: _0x371b72,
              body: _0x8ae28b
            } = _0x1fcbf5;
            _0x2ff1c3(null, {
              status: _0x2cfc5f,
              statusCode: _0x1e6b3e,
              headers: _0x371b72,
              body: _0x8ae28b
            }, _0x8ae28b);
          }, _0x51f4e3 => _0x2ff1c3(_0x51f4e3));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x17888b);
            const {
              url: _0x492c06,
              ..._0x36cc6b
            } = _0x17888b;
            this.got.post(_0x492c06, _0x36cc6b).then(_0x50eef1 => {
              const {
                statusCode: _0x5b8e11,
                statusCode: _0x1f2f10,
                headers: _0x173040,
                body: _0xb8b54f
              } = _0x50eef1;
              _0x2ff1c3(null, {
                status: _0x5b8e11,
                statusCode: _0x1f2f10,
                headers: _0x173040,
                body: _0xb8b54f
              }, _0xb8b54f);
            }, _0xc58a6d => {
              const {
                message: _0x407bc1,
                response: _0x3879e2
              } = _0xc58a6d;
              _0x2ff1c3(_0x407bc1, _0x3879e2, _0x3879e2 && _0x3879e2.body);
            });
          }
        }
      }
    }
    time(_0x363359, _0x44195e = null) {
      const _0x28da71 = _0x44195e ? new Date(_0x44195e) : new Date();
      let _0x2aae2c = {
        "M+": _0x28da71.getMonth() + 1,
        "d+": _0x28da71.getDate(),
        "H+": _0x28da71.getHours(),
        "m+": _0x28da71.getMinutes(),
        "s+": _0x28da71.getSeconds(),
        "q+": Math.floor((_0x28da71.getMonth() + 3) / 3),
        S: _0x28da71.getMilliseconds()
      };
      /(y+)/.test(_0x363359) && (_0x363359 = _0x363359.replace(RegExp.$1, (_0x28da71.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x1d3f6b in _0x2aae2c) new RegExp("(" + _0x1d3f6b + ")").test(_0x363359) && (_0x363359 = _0x363359.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2aae2c[_0x1d3f6b] : ("00" + _0x2aae2c[_0x1d3f6b]).substr(("" + _0x2aae2c[_0x1d3f6b]).length)));
      return _0x363359;
    }
    msg(_0x3192ab = _0x1d6a5e, _0xb2947d = "", _0x513500 = "", _0x334a81) {
      const _0x10cfec = _0x103bc0 => {
        if (!_0x103bc0) {
          return _0x103bc0;
        }
        if ("string" == typeof _0x103bc0) {
          return this.isLoon() ? _0x103bc0 : this.isQuanX() ? {
            "open-url": _0x103bc0
          } : this.isSurge() ? {
            url: _0x103bc0
          } : void 0;
        }
        if ("object" == typeof _0x103bc0) {
          if (this.isLoon()) {
            let _0x4cd63f = _0x103bc0.openUrl || _0x103bc0.url || _0x103bc0["open-url"],
              _0x384084 = _0x103bc0.mediaUrl || _0x103bc0["media-url"];
            return {
              openUrl: _0x4cd63f,
              mediaUrl: _0x384084
            };
          }
          if (this.isQuanX()) {
            let _0x1fa2bd = _0x103bc0["open-url"] || _0x103bc0.url || _0x103bc0.openUrl,
              _0x5c8f44 = _0x103bc0["media-url"] || _0x103bc0.mediaUrl;
            return {
              "open-url": _0x1fa2bd,
              "media-url": _0x5c8f44
            };
          }
          if (this.isSurge()) {
            let _0x343b3b = _0x103bc0.url || _0x103bc0.openUrl || _0x103bc0["open-url"];
            return {
              url: _0x343b3b
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x3192ab, _0xb2947d, _0x513500, _0x10cfec(_0x334a81)) : this.isQuanX() && $notify(_0x3192ab, _0xb2947d, _0x513500, _0x10cfec(_0x334a81))), !this.isMuteLog) {
        let _0x126a45 = ["", "==============📣系统通知📣=============="];
        _0x126a45.push(_0x3192ab);
        _0xb2947d && _0x126a45.push(_0xb2947d);
        _0x513500 && _0x126a45.push(_0x513500);
        console.log(_0x126a45.join("\n"));
        this.logs = this.logs.concat(_0x126a45);
      }
    }
    log(..._0x695f41) {
      _0x695f41.length > 0 && (this.logs = [...this.logs, ..._0x695f41]);
      console.log(_0x695f41.join(this.logSeparator));
    }
    logErr(_0x587d91, _0x464ceb) {
      const _0x2c5ba1 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x2c5ba1 ? this.log("", "❗️" + this.name + ", 错误!", _0x587d91.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x587d91);
    }
    wait(_0x8e56b1) {
      return new Promise(_0x469e67 => setTimeout(_0x469e67, _0x8e56b1));
    }
    done(_0x396041 = {}) {
      const _0xe35698 = new Date().getTime(),
        _0x10d015 = (_0xe35698 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x10d015 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x396041);
    }
  }(_0x1d6a5e, _0x5b6587);
}