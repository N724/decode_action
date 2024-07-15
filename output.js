//Mon Jul 15 2024 13:19:37 GMT+0000 (Coordinated Universal Time)
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
  const _0xb35265 = process.env.bwcj_ck;
  if (!_0xb35265) {
    logAndNotify("bwcj_ck不存在");
    return;
  }
  let _0x33d0a4 = _0xb35265.replaceAll("&", "\n").split("\n");
  for (let _0x4e749c = 0; _0x4e749c < _0x33d0a4.length; _0x4e749c++) {
    const _0x2798a1 = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x33d0a4[_0x4e749c]);
    if (!_0x2798a1.data.status) {
      logAndNotify("账号【" + (_0x4e749c + 1) + "】 登录失败");
      continue;
    }
    const _0x1fa2fe = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userSignStatistics", _0x33d0a4[_0x4e749c], {
      activityId: "947079313798000641",
      appid: appid
    });
    _0x1fa2fe.data.status && _0x1fa2fe.data.data.signStatus == 1 && logAndNotify("账号【" + (_0x4e749c + 1) + "】 签到成功 连续签到" + _0x1fa2fe.data.data.signDays + "天");
    const _0x543c42 = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x33d0a4[_0x4e749c]);
    _0x543c42.data.status && logAndNotify("账号【" + (_0x4e749c + 1) + "】 积分：【" + _0x543c42.data.data.customerAssertInfo.integral + "】");
    const _0x5c1623 = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userReward", _0x33d0a4[_0x4e749c], {
      activityId: "947079313798000641",
      appid: appid,
      pageNo: 1,
      pageSize: 30
    });
    if (_0x5c1623.data.status) {
      const _0x588666 = _0x5c1623.data.data.list;
      for (let _0x221065 = 0; _0x221065 < _0x588666.length; _0x221065++) {
        if (_0x588666[_0x221065].rewardType === 1) {
          logAndNotify("账号【" + (_0x4e749c + 1) + "】 奖品领取时间【" + _0x588666[_0x221065].date + "】【" + _0x588666[_0x221065].rewardName + "】");
        }
      }
    }
  }
})().catch(_0x22ec54 => {
  logAndNotify(_0x22ec54);
}).finally(() => {
  sendNotify("霸王茶姬", notifyStr);
  $.done();
});
function sendPostRequest(_0x150285, _0xfc9d81, _0x2ffb00) {
  const _0xa30832 = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-User-Token": "Rh04KAYDEaKbwudXc4e07Hkxm-dTiq9E8c42AXW4e-VXV7Vw9FPYkL9hHzo3MlD2",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x4765bf = {
      ..._0xa30832,
      ...{
        "Qm-User-Token": _0xfc9d81
      }
    },
    _0x454c83 = axios.create({
      headers: _0x4765bf
    });
  return _0x454c83.post(_0x150285, _0x2ffb00);
}
function sendGetRequest(_0x13f8c9, _0x3a307c) {
  const _0x3cbc1b = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-User-Token": "Rh04KAYDEaKbwudXc4e07Hkxm-dTiq9E8c42AXW4e-VXV7Vw9FPYkL9hHzo3MlD2",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x55cb7c = {
      ..._0x3cbc1b,
      ...{
        "Qm-User-Token": _0x3a307c
      }
    },
    _0x9c161a = axios.create({
      headers: _0x55cb7c
    });
  return _0x9c161a.get(_0x13f8c9);
}
function logAndNotify(_0x1f1a77) {
  1;
  $.log(_0x1f1a77);
  notifyStr += _0x1f1a77;
  notifyStr += "\n";
}
function Env(_0x24ed95, _0x137fa0) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x1ee030 {
    constructor(_0x4788ef) {
      this.env = _0x4788ef;
    }
    send(_0x5e19e0, _0x1ed01c = "GET") {
      _0x5e19e0 = "string" == typeof _0x5e19e0 ? {
        url: _0x5e19e0
      } : _0x5e19e0;
      let _0xbf6c7a = this.get;
      "POST" === _0x1ed01c && (_0xbf6c7a = this.post);
      return new Promise((_0x525604, _0x278d36) => {
        _0xbf6c7a.call(this, _0x5e19e0, (_0xd87fa4, _0x166ff7, _0x18eb1b) => {
          _0xd87fa4 ? _0x278d36(_0xd87fa4) : _0x525604(_0x166ff7);
        });
      });
    }
    get(_0x1bf50b) {
      return this.send.call(this.env, _0x1bf50b);
    }
    post(_0x4a4361) {
      return this.send.call(this.env, _0x4a4361, "POST");
    }
  }
  return new class {
    constructor(_0x26e104, _0x1146aa) {
      this.name = _0x26e104;
      this.http = new _0x1ee030(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x1146aa);
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
    toObj(_0x1a06f1, _0x335510 = null) {
      try {
        return JSON.parse(_0x1a06f1);
      } catch {
        return _0x335510;
      }
    }
    toStr(_0x17a0d4, _0x4e4002 = null) {
      try {
        return JSON.stringify(_0x17a0d4);
      } catch {
        return _0x4e4002;
      }
    }
    getjson(_0x403310, _0x1fea44) {
      let _0x15748c = _0x1fea44;
      const _0x55a34b = this.getdata(_0x403310);
      if (_0x55a34b) {
        try {
          _0x15748c = JSON.parse(this.getdata(_0x403310));
        } catch {}
      }
      return _0x15748c;
    }
    setjson(_0x4468e2, _0x2cc7fd) {
      try {
        return this.setdata(JSON.stringify(_0x4468e2), _0x2cc7fd);
      } catch {
        return !1;
      }
    }
    getScript(_0x5f43b4) {
      return new Promise(_0x3d893e => {
        this.get({
          url: _0x5f43b4
        }, (_0x3b4819, _0x48c283, _0x28513e) => _0x3d893e(_0x28513e));
      });
    }
    runScript(_0x5ac4ff, _0x46b5c5) {
      return new Promise(_0x494079 => {
        let _0x461f10 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x461f10 = _0x461f10 ? _0x461f10.replace(/\n/g, "").trim() : _0x461f10;
        let _0x144f05 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x144f05 = _0x144f05 ? 1 * _0x144f05 : 20;
        _0x144f05 = _0x46b5c5 && _0x46b5c5.timeout ? _0x46b5c5.timeout : _0x144f05;
        const [_0x417f97, _0x535837] = _0x461f10.split("@"),
          _0x51c554 = {
            url: "http://" + _0x535837 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x5ac4ff,
              mock_type: "cron",
              timeout: _0x144f05
            },
            headers: {
              "X-Key": _0x417f97,
              Accept: "*/*"
            }
          };
        this.post(_0x51c554, (_0x44633f, _0x2a05ab, _0x6b77a) => _0x494079(_0x6b77a));
      }).catch(_0x4d4b71 => this.logErr(_0x4d4b71));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4ecdbe = this.path.resolve(this.dataFile),
          _0x1da211 = this.path.resolve(process.cwd(), this.dataFile),
          _0x447472 = this.fs.existsSync(_0x4ecdbe),
          _0x14df6d = !_0x447472 && this.fs.existsSync(_0x1da211);
        if (!_0x447472 && !_0x14df6d) {
          return {};
        }
        {
          const _0x83173f = _0x447472 ? _0x4ecdbe : _0x1da211;
          try {
            return JSON.parse(this.fs.readFileSync(_0x83173f));
          } catch (_0x183846) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x533020 = this.path.resolve(this.dataFile),
          _0x1d0b73 = this.path.resolve(process.cwd(), this.dataFile),
          _0x54d8a9 = this.fs.existsSync(_0x533020),
          _0x2be56c = !_0x54d8a9 && this.fs.existsSync(_0x1d0b73),
          _0x199c33 = JSON.stringify(this.data);
        _0x54d8a9 ? this.fs.writeFileSync(_0x533020, _0x199c33) : _0x2be56c ? this.fs.writeFileSync(_0x1d0b73, _0x199c33) : this.fs.writeFileSync(_0x533020, _0x199c33);
      }
    }
    lodash_get(_0xf6899c, _0x34fd3d, _0xcb5326) {
      const _0x390740 = _0x34fd3d.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0xb03d92 = _0xf6899c;
      for (const _0x15319d of _0x390740) if (_0xb03d92 = Object(_0xb03d92)[_0x15319d], void 0 === _0xb03d92) {
        return _0xcb5326;
      }
      return _0xb03d92;
    }
    lodash_set(_0x49207c, _0x37ec1e, _0x2ea293) {
      return Object(_0x49207c) !== _0x49207c ? _0x49207c : (Array.isArray(_0x37ec1e) || (_0x37ec1e = _0x37ec1e.toString().match(/[^.[\]]+/g) || []), _0x37ec1e.slice(0, -1).reduce((_0x7e435a, _0xcd47f2, _0x2fb099) => Object(_0x7e435a[_0xcd47f2]) === _0x7e435a[_0xcd47f2] ? _0x7e435a[_0xcd47f2] : _0x7e435a[_0xcd47f2] = Math.abs(_0x37ec1e[_0x2fb099 + 1]) >> 0 == +_0x37ec1e[_0x2fb099 + 1] ? [] : {}, _0x49207c)[_0x37ec1e[_0x37ec1e.length - 1]] = _0x2ea293, _0x49207c);
    }
    getdata(_0x46d71d) {
      let _0xbfa7ec = this.getval(_0x46d71d);
      if (/^@/.test(_0x46d71d)) {
        const [, _0x1bdef7, _0x21039a] = /^@(.*?)\.(.*?)$/.exec(_0x46d71d),
          _0x4eea61 = _0x1bdef7 ? this.getval(_0x1bdef7) : "";
        if (_0x4eea61) {
          try {
            const _0x55c66d = JSON.parse(_0x4eea61);
            _0xbfa7ec = _0x55c66d ? this.lodash_get(_0x55c66d, _0x21039a, "") : _0xbfa7ec;
          } catch (_0x4af86b) {
            _0xbfa7ec = "";
          }
        }
      }
      return _0xbfa7ec;
    }
    setdata(_0x5b60ca, _0x1dc3be) {
      let _0x5ed8ff = !1;
      if (/^@/.test(_0x1dc3be)) {
        const [, _0x3ee13c, _0x232963] = /^@(.*?)\.(.*?)$/.exec(_0x1dc3be),
          _0x564086 = this.getval(_0x3ee13c),
          _0x426f8d = _0x3ee13c ? "null" === _0x564086 ? null : _0x564086 || "{}" : "{}";
        try {
          const _0x414273 = JSON.parse(_0x426f8d);
          this.lodash_set(_0x414273, _0x232963, _0x5b60ca);
          _0x5ed8ff = this.setval(JSON.stringify(_0x414273), _0x3ee13c);
        } catch (_0xda6aa4) {
          const _0x994f8f = {};
          this.lodash_set(_0x994f8f, _0x232963, _0x5b60ca);
          _0x5ed8ff = this.setval(JSON.stringify(_0x994f8f), _0x3ee13c);
        }
      } else {
        _0x5ed8ff = this.setval(_0x5b60ca, _0x1dc3be);
      }
      return _0x5ed8ff;
    }
    getval(_0x322f79) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x322f79) : this.isQuanX() ? $prefs.valueForKey(_0x322f79) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x322f79]) : this.data && this.data[_0x322f79] || null;
    }
    setval(_0x1c68ad, _0x586f51) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x1c68ad, _0x586f51) : this.isQuanX() ? $prefs.setValueForKey(_0x1c68ad, _0x586f51) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x586f51] = _0x1c68ad, this.writedata(), !0) : this.data && this.data[_0x586f51] || null;
    }
    initGotEnv(_0x5de586) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x5de586 && (_0x5de586.headers = _0x5de586.headers ? _0x5de586.headers : {}, void 0 === _0x5de586.headers.Cookie && void 0 === _0x5de586.cookieJar && (_0x5de586.cookieJar = this.ckjar));
    }
    get(_0x2b40eb, _0x3ed36b = () => {}) {
      _0x2b40eb.headers && (delete _0x2b40eb.headers["Content-Type"], delete _0x2b40eb.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x2b40eb.headers = _0x2b40eb.headers || {}, Object.assign(_0x2b40eb.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x2b40eb, (_0x126a2c, _0x12cc18, _0x1900d9) => {
        !_0x126a2c && _0x12cc18 && (_0x12cc18.body = _0x1900d9, _0x12cc18.statusCode = _0x12cc18.status);
        _0x3ed36b(_0x126a2c, _0x12cc18, _0x1900d9);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x2b40eb.opts = _0x2b40eb.opts || {}, Object.assign(_0x2b40eb.opts, {
        hints: !1
      })), $task.fetch(_0x2b40eb).then(_0x27598d => {
        const {
          statusCode: _0x20ee64,
          statusCode: _0x20d28f,
          headers: _0x15c586,
          body: _0x1747a0
        } = _0x27598d;
        _0x3ed36b(null, {
          status: _0x20ee64,
          statusCode: _0x20d28f,
          headers: _0x15c586,
          body: _0x1747a0
        }, _0x1747a0);
      }, _0x99f466 => _0x3ed36b(_0x99f466))) : this.isNode() && (this.initGotEnv(_0x2b40eb), this.got(_0x2b40eb).on("redirect", (_0x473e68, _0x770ae0) => {
        try {
          if (_0x473e68.headers["set-cookie"]) {
            const _0x12b842 = _0x473e68.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x12b842 && this.ckjar.setCookieSync(_0x12b842, null);
            _0x770ae0.cookieJar = this.ckjar;
          }
        } catch (_0x440ff) {
          this.logErr(_0x440ff);
        }
      }).then(_0x2dab59 => {
        const {
          statusCode: _0x477621,
          statusCode: _0x580b48,
          headers: _0xac3677,
          body: _0xa48eb9
        } = _0x2dab59;
        _0x3ed36b(null, {
          status: _0x477621,
          statusCode: _0x580b48,
          headers: _0xac3677,
          body: _0xa48eb9
        }, _0xa48eb9);
      }, _0x300a49 => {
        const {
          message: _0x222e98,
          response: _0xd839c1
        } = _0x300a49;
        _0x3ed36b(_0x222e98, _0xd839c1, _0xd839c1 && _0xd839c1.body);
      }));
    }
    post(_0x56c4d2, _0x2da278 = () => {}) {
      if (_0x56c4d2.body && _0x56c4d2.headers && !_0x56c4d2.headers["Content-Type"] && (_0x56c4d2.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x56c4d2.headers && delete _0x56c4d2.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x56c4d2.headers = _0x56c4d2.headers || {}, Object.assign(_0x56c4d2.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x56c4d2, (_0x24696e, _0x264700, _0x1cb59f) => {
          !_0x24696e && _0x264700 && (_0x264700.body = _0x1cb59f, _0x264700.statusCode = _0x264700.status);
          _0x2da278(_0x24696e, _0x264700, _0x1cb59f);
        });
      } else {
        if (this.isQuanX()) {
          _0x56c4d2.method = "POST";
          this.isNeedRewrite && (_0x56c4d2.opts = _0x56c4d2.opts || {}, Object.assign(_0x56c4d2.opts, {
            hints: !1
          }));
          $task.fetch(_0x56c4d2).then(_0x5a312c => {
            const {
              statusCode: _0x5eb618,
              statusCode: _0x420b98,
              headers: _0x2ef289,
              body: _0x443c79
            } = _0x5a312c;
            _0x2da278(null, {
              status: _0x5eb618,
              statusCode: _0x420b98,
              headers: _0x2ef289,
              body: _0x443c79
            }, _0x443c79);
          }, _0x16f7cb => _0x2da278(_0x16f7cb));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x56c4d2);
            const {
              url: _0x43d95b,
              ..._0x2d3d4a
            } = _0x56c4d2;
            this.got.post(_0x43d95b, _0x2d3d4a).then(_0x281e22 => {
              const {
                statusCode: _0x3970c1,
                statusCode: _0x4db662,
                headers: _0x13ba47,
                body: _0x5f0a47
              } = _0x281e22;
              _0x2da278(null, {
                status: _0x3970c1,
                statusCode: _0x4db662,
                headers: _0x13ba47,
                body: _0x5f0a47
              }, _0x5f0a47);
            }, _0x3af971 => {
              const {
                message: _0x5f8b7b,
                response: _0x144024
              } = _0x3af971;
              _0x2da278(_0x5f8b7b, _0x144024, _0x144024 && _0x144024.body);
            });
          }
        }
      }
    }
    time(_0x50d01f, _0x5df9ec = null) {
      const _0x38df3d = _0x5df9ec ? new Date(_0x5df9ec) : new Date();
      let _0x36c799 = {
        "M+": _0x38df3d.getMonth() + 1,
        "d+": _0x38df3d.getDate(),
        "H+": _0x38df3d.getHours(),
        "m+": _0x38df3d.getMinutes(),
        "s+": _0x38df3d.getSeconds(),
        "q+": Math.floor((_0x38df3d.getMonth() + 3) / 3),
        S: _0x38df3d.getMilliseconds()
      };
      /(y+)/.test(_0x50d01f) && (_0x50d01f = _0x50d01f.replace(RegExp.$1, (_0x38df3d.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x81a092 in _0x36c799) new RegExp("(" + _0x81a092 + ")").test(_0x50d01f) && (_0x50d01f = _0x50d01f.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x36c799[_0x81a092] : ("00" + _0x36c799[_0x81a092]).substr(("" + _0x36c799[_0x81a092]).length)));
      return _0x50d01f;
    }
    msg(_0x3f6ddc = _0x24ed95, _0x2a1e32 = "", _0x38681e = "", _0x5b1bdb) {
      const _0x48e55b = _0x665bce => {
        if (!_0x665bce) {
          return _0x665bce;
        }
        if ("string" == typeof _0x665bce) {
          return this.isLoon() ? _0x665bce : this.isQuanX() ? {
            "open-url": _0x665bce
          } : this.isSurge() ? {
            url: _0x665bce
          } : void 0;
        }
        if ("object" == typeof _0x665bce) {
          if (this.isLoon()) {
            let _0x13d8bc = _0x665bce.openUrl || _0x665bce.url || _0x665bce["open-url"],
              _0x1e4b94 = _0x665bce.mediaUrl || _0x665bce["media-url"];
            return {
              openUrl: _0x13d8bc,
              mediaUrl: _0x1e4b94
            };
          }
          if (this.isQuanX()) {
            let _0x17b9b3 = _0x665bce["open-url"] || _0x665bce.url || _0x665bce.openUrl,
              _0x97ceaf = _0x665bce["media-url"] || _0x665bce.mediaUrl;
            return {
              "open-url": _0x17b9b3,
              "media-url": _0x97ceaf
            };
          }
          if (this.isSurge()) {
            let _0x4b41b8 = _0x665bce.url || _0x665bce.openUrl || _0x665bce["open-url"];
            return {
              url: _0x4b41b8
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x3f6ddc, _0x2a1e32, _0x38681e, _0x48e55b(_0x5b1bdb)) : this.isQuanX() && $notify(_0x3f6ddc, _0x2a1e32, _0x38681e, _0x48e55b(_0x5b1bdb))), !this.isMuteLog) {
        let _0x49ac73 = ["", "==============📣系统通知📣=============="];
        _0x49ac73.push(_0x3f6ddc);
        _0x2a1e32 && _0x49ac73.push(_0x2a1e32);
        _0x38681e && _0x49ac73.push(_0x38681e);
        console.log(_0x49ac73.join("\n"));
        this.logs = this.logs.concat(_0x49ac73);
      }
    }
    log(..._0x4adda5) {
      _0x4adda5.length > 0 && (this.logs = [...this.logs, ..._0x4adda5]);
      console.log(_0x4adda5.join(this.logSeparator));
    }
    logErr(_0x41a6e6, _0x2ad362) {
      const _0x277dbd = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x277dbd ? this.log("", "❗️" + this.name + ", 错误!", _0x41a6e6.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x41a6e6);
    }
    wait(_0x596113) {
      return new Promise(_0x1aefa6 => setTimeout(_0x1aefa6, _0x596113));
    }
    done(_0x525254 = {}) {
      const _0x3fe8b8 = new Date().getTime(),
        _0x1cb701 = (_0x3fe8b8 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x1cb701 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x525254);
    }
  }(_0x24ed95, _0x137fa0);
}