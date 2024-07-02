//Tue Jul 02 2024 12:13:49 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("海底捞"),
  axios = require("axios"),
  {
    sendNotify
  } = require("./sendNotify");
let notifyStr = "";
(async () => {
  const _0x1660ec = process.env.hdl_ck;
  if (!_0x1660ec) {
    logAndNotify("请设置 hdl_ck");
    return;
  }
  let _0x4ba349 = _0x1660ec.split("\n");
  for (let _0x2539ab = 0; _0x2539ab < _0x4ba349.length; _0x2539ab++) {
    let _0x422ad1 = _0x4ba349[_0x2539ab].split("#")[0],
      _0xfc713e = _0x4ba349[_0x2539ab].split("#")[1];
    const _0x4e2067 = await sendPostRequest("https://superapp-public.kiwa-tech.com/api/gateway/login/center/login/wechatLogin", undefined, {
      type: 1,
      country: "CN",
      codeType: 1,
      business: "登录",
      terminal: "会员小程序",
      openId: "" + _0x422ad1,
      uid: "" + _0xfc713e
    });
    if (_0x4e2067.data.code !== 100000) {
      logAndNotify("账号【" + (_0x2539ab + 1) + "】已失效");
      continue;
    }
    logAndNotify("账号【" + (_0x2539ab + 1) + "】【" + _0x4e2067.data.data.mobile + "】 登录成功");
    const _0x35d245 = _0x4e2067.data.data,
      _0x129083 = await sendPostRequest("https://superapp-public.kiwa-tech.com/activity/wxapp/signin/query", _0x35d245.token, {});
    logAndNotify("账号【" + (_0x2539ab + 1) + "】活动名称【" + _0x129083.data.data.activityName + "】");
    if (_0x129083.data.data.signinOr === 0) {
      const _0x1664e8 = await sendPostRequest("https://superapp-public.kiwa-tech.com/activity/wxapp/signin/signin", _0x35d245.token, {
        signinSource: "MiniApp"
      });
      if (_0x1664e8.data.code === "ok") {
        const _0xd3dcae = _0x1664e8.data.data.signinQueryDetailList;
        if (_0xd3dcae.length === 0) {
          logAndNotify("账号【" + (_0x2539ab + 1) + "】签到失败 signinList.length === 0");
          continue;
        }
        const _0x2ca62a = _0xd3dcae[0];
        logAndNotify("账号【" + (_0x2539ab + 1) + "】签到成功 碎片+【" + _0x2ca62a.fragment + "】 额外奖励+【" + _0x2ca62a.fragmentSeries + "】 菜品【" + _0x2ca62a.dishes + "】");
      }
    } else {
      logAndNotify("账号【" + (_0x2539ab + 1) + "】已签到过了");
    }
    const _0x28e3e0 = await sendPostRequest("https://superapp-public.kiwa-tech.com/activity/wxapp/signin/queryFragment", _0x35d245.token, {});
    logAndNotify("账号【" + (_0x2539ab + 1) + "】碎片【" + _0x28e3e0.data.data.total + "】 活动结束时间【" + _0x28e3e0.data.data.expireDate + "】");
  }
})().catch(_0x5ca4fe => {
  logAndNotify(_0x5ca4fe);
}).finally(() => {
  sendNotify("海底捞", notifyStr);
  $.done();
});
function logAndNotify(_0x1da56b) {
  $.log(_0x1da56b);
  notifyStr += _0x1da56b;
  notifyStr += "\n";
}
var headersTemp = {
  "content-type": "application/json",
  appId: 15,
  appVersion: "3.79.0",
  "Accept-Encoding": "gzip,compress,br,deflate",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003130) NetType/WIFI Language/zh_CN",
  Referer: "https://servicewechat.com/wx1ddeb67115f30d1a/138/page-frame.html"
};
function sendPostRequest(_0x42172a, _0x42651c, _0xc405cf) {
  let _0x134855 = {};
  if (_0x42651c) {
    _0x134855 = {
      ...headersTemp,
      ...{
        _HAIDILAO_APP_TOKEN: "" + _0x42651c
      }
    };
  } else {
    _0x134855 = headersTemp;
  }
  const _0x4c0f76 = axios.create({
    headers: _0x134855
  });
  return _0x4c0f76.post(_0x42172a, _0xc405cf);
}
function Env(_0x378d6d, _0x438a0d) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x505fbc {
    constructor(_0x3cabba) {
      this.env = _0x3cabba;
    }
    send(_0xda4a38, _0x2ba11b = "GET") {
      _0xda4a38 = "string" == typeof _0xda4a38 ? {
        url: _0xda4a38
      } : _0xda4a38;
      let _0x423e46 = this.get;
      "POST" === _0x2ba11b && (_0x423e46 = this.post);
      return new Promise((_0x136299, _0x3c99c4) => {
        _0x423e46.call(this, _0xda4a38, (_0xe9403b, _0x488631, _0x4ffcf8) => {
          _0xe9403b ? _0x3c99c4(_0xe9403b) : _0x136299(_0x488631);
        });
      });
    }
    get(_0x271db8) {
      return this.send.call(this.env, _0x271db8);
    }
    post(_0x22b35) {
      return this.send.call(this.env, _0x22b35, "POST");
    }
  }
  return new class {
    constructor(_0x144ddf, _0x358f6b) {
      this.name = _0x144ddf;
      this.http = new _0x505fbc(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x358f6b);
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
    toObj(_0x4f8483, _0x1105f6 = null) {
      try {
        return JSON.parse(_0x4f8483);
      } catch {
        return _0x1105f6;
      }
    }
    toStr(_0x44674a, _0x16592f = null) {
      try {
        return JSON.stringify(_0x44674a);
      } catch {
        return _0x16592f;
      }
    }
    getjson(_0x33ae6f, _0x3d0c40) {
      let _0x43c06b = _0x3d0c40;
      const _0x57c916 = this.getdata(_0x33ae6f);
      if (_0x57c916) {
        try {
          _0x43c06b = JSON.parse(this.getdata(_0x33ae6f));
        } catch {}
      }
      return _0x43c06b;
    }
    setjson(_0x45f632, _0x14eb0e) {
      try {
        return this.setdata(JSON.stringify(_0x45f632), _0x14eb0e);
      } catch {
        return !1;
      }
    }
    getScript(_0x147461) {
      return new Promise(_0x469704 => {
        this.get({
          url: _0x147461
        }, (_0x19c362, _0x53a9e0, _0x1f5d7a) => _0x469704(_0x1f5d7a));
      });
    }
    runScript(_0x386cff, _0x56655c) {
      return new Promise(_0x5801bf => {
        let _0x38dd7a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x38dd7a = _0x38dd7a ? _0x38dd7a.replace(/\n/g, "").trim() : _0x38dd7a;
        let _0x5a1def = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x5a1def = _0x5a1def ? 1 * _0x5a1def : 20;
        _0x5a1def = _0x56655c && _0x56655c.timeout ? _0x56655c.timeout : _0x5a1def;
        const [_0x4fa0b3, _0x24c1df] = _0x38dd7a.split("@"),
          _0x58bf2c = {
            url: "http://" + _0x24c1df + "/v1/scripting/evaluate",
            body: {
              script_text: _0x386cff,
              mock_type: "cron",
              timeout: _0x5a1def
            },
            headers: {
              "X-Key": _0x4fa0b3,
              Accept: "*/*"
            }
          };
        this.post(_0x58bf2c, (_0x52b48e, _0x2fe134, _0x2f41be) => _0x5801bf(_0x2f41be));
      }).catch(_0x3e684f => this.logErr(_0x3e684f));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x515892 = this.path.resolve(this.dataFile),
          _0x43ec2b = this.path.resolve(process.cwd(), this.dataFile),
          _0x274de8 = this.fs.existsSync(_0x515892),
          _0x457a86 = !_0x274de8 && this.fs.existsSync(_0x43ec2b);
        if (!_0x274de8 && !_0x457a86) {
          return {};
        }
        {
          const _0xc3c46 = _0x274de8 ? _0x515892 : _0x43ec2b;
          try {
            return JSON.parse(this.fs.readFileSync(_0xc3c46));
          } catch (_0x128523) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x387bc2 = this.path.resolve(this.dataFile),
          _0x4ff237 = this.path.resolve(process.cwd(), this.dataFile),
          _0x397744 = this.fs.existsSync(_0x387bc2),
          _0x11f41d = !_0x397744 && this.fs.existsSync(_0x4ff237),
          _0x11628c = JSON.stringify(this.data);
        _0x397744 ? this.fs.writeFileSync(_0x387bc2, _0x11628c) : _0x11f41d ? this.fs.writeFileSync(_0x4ff237, _0x11628c) : this.fs.writeFileSync(_0x387bc2, _0x11628c);
      }
    }
    lodash_get(_0x781b0c, _0xddda51, _0x27a81f) {
      const _0x2c3794 = _0xddda51.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0xad59cd = _0x781b0c;
      for (const _0x354548 of _0x2c3794) if (_0xad59cd = Object(_0xad59cd)[_0x354548], void 0 === _0xad59cd) {
        return _0x27a81f;
      }
      return _0xad59cd;
    }
    lodash_set(_0x139a6c, _0x35d603, _0x1dcfb3) {
      return Object(_0x139a6c) !== _0x139a6c ? _0x139a6c : (Array.isArray(_0x35d603) || (_0x35d603 = _0x35d603.toString().match(/[^.[\]]+/g) || []), _0x35d603.slice(0, -1).reduce((_0x32172e, _0x300f6d, _0x422f9c) => Object(_0x32172e[_0x300f6d]) === _0x32172e[_0x300f6d] ? _0x32172e[_0x300f6d] : _0x32172e[_0x300f6d] = Math.abs(_0x35d603[_0x422f9c + 1]) >> 0 == +_0x35d603[_0x422f9c + 1] ? [] : {}, _0x139a6c)[_0x35d603[_0x35d603.length - 1]] = _0x1dcfb3, _0x139a6c);
    }
    getdata(_0x1cbe7d) {
      let _0x2a6f45 = this.getval(_0x1cbe7d);
      if (/^@/.test(_0x1cbe7d)) {
        const [, _0x47a52f, _0x341627] = /^@(.*?)\.(.*?)$/.exec(_0x1cbe7d),
          _0x1f140e = _0x47a52f ? this.getval(_0x47a52f) : "";
        if (_0x1f140e) {
          try {
            const _0x17e13a = JSON.parse(_0x1f140e);
            _0x2a6f45 = _0x17e13a ? this.lodash_get(_0x17e13a, _0x341627, "") : _0x2a6f45;
          } catch (_0x5c8216) {
            _0x2a6f45 = "";
          }
        }
      }
      return _0x2a6f45;
    }
    setdata(_0x56cb01, _0x8e431c) {
      let _0x842ca7 = !1;
      if (/^@/.test(_0x8e431c)) {
        const [, _0x15d981, _0x2873b0] = /^@(.*?)\.(.*?)$/.exec(_0x8e431c),
          _0xb2de83 = this.getval(_0x15d981),
          _0x46a0d0 = _0x15d981 ? "null" === _0xb2de83 ? null : _0xb2de83 || "{}" : "{}";
        try {
          const _0x1eb200 = JSON.parse(_0x46a0d0);
          this.lodash_set(_0x1eb200, _0x2873b0, _0x56cb01);
          _0x842ca7 = this.setval(JSON.stringify(_0x1eb200), _0x15d981);
        } catch (_0x1b4a55) {
          const _0x15052c = {};
          this.lodash_set(_0x15052c, _0x2873b0, _0x56cb01);
          _0x842ca7 = this.setval(JSON.stringify(_0x15052c), _0x15d981);
        }
      } else {
        _0x842ca7 = this.setval(_0x56cb01, _0x8e431c);
      }
      return _0x842ca7;
    }
    getval(_0x4c4d37) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4c4d37) : this.isQuanX() ? $prefs.valueForKey(_0x4c4d37) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4c4d37]) : this.data && this.data[_0x4c4d37] || null;
    }
    setval(_0x26790e, _0x161567) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x26790e, _0x161567) : this.isQuanX() ? $prefs.setValueForKey(_0x26790e, _0x161567) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x161567] = _0x26790e, this.writedata(), !0) : this.data && this.data[_0x161567] || null;
    }
    initGotEnv(_0x3b5edf) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x3b5edf && (_0x3b5edf.headers = _0x3b5edf.headers ? _0x3b5edf.headers : {}, void 0 === _0x3b5edf.headers.Cookie && void 0 === _0x3b5edf.cookieJar && (_0x3b5edf.cookieJar = this.ckjar));
    }
    get(_0x4b5a59, _0x531f7f = () => {}) {
      _0x4b5a59.headers && (delete _0x4b5a59.headers["Content-Type"], delete _0x4b5a59.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x4b5a59.headers = _0x4b5a59.headers || {}, Object.assign(_0x4b5a59.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x4b5a59, (_0x3ae4c2, _0x147513, _0x8d3434) => {
        !_0x3ae4c2 && _0x147513 && (_0x147513.body = _0x8d3434, _0x147513.statusCode = _0x147513.status);
        _0x531f7f(_0x3ae4c2, _0x147513, _0x8d3434);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x4b5a59.opts = _0x4b5a59.opts || {}, Object.assign(_0x4b5a59.opts, {
        hints: !1
      })), $task.fetch(_0x4b5a59).then(_0x3169a6 => {
        const {
          statusCode: _0x581980,
          statusCode: _0x147fee,
          headers: _0x43f42f,
          body: _0x5cd885
        } = _0x3169a6;
        _0x531f7f(null, {
          status: _0x581980,
          statusCode: _0x147fee,
          headers: _0x43f42f,
          body: _0x5cd885
        }, _0x5cd885);
      }, _0x2fd8d2 => _0x531f7f(_0x2fd8d2))) : this.isNode() && (this.initGotEnv(_0x4b5a59), this.got(_0x4b5a59).on("redirect", (_0x27436a, _0x52cb15) => {
        try {
          if (_0x27436a.headers["set-cookie"]) {
            const _0x44cba0 = _0x27436a.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x44cba0 && this.ckjar.setCookieSync(_0x44cba0, null);
            _0x52cb15.cookieJar = this.ckjar;
          }
        } catch (_0x5cd93e) {
          this.logErr(_0x5cd93e);
        }
      }).then(_0x2dded1 => {
        const {
          statusCode: _0x255957,
          statusCode: _0x24e9de,
          headers: _0x14ae75,
          body: _0x175b96
        } = _0x2dded1;
        _0x531f7f(null, {
          status: _0x255957,
          statusCode: _0x24e9de,
          headers: _0x14ae75,
          body: _0x175b96
        }, _0x175b96);
      }, _0x2f3eef => {
        const {
          message: _0x6d2ea8,
          response: _0x7c4a4f
        } = _0x2f3eef;
        _0x531f7f(_0x6d2ea8, _0x7c4a4f, _0x7c4a4f && _0x7c4a4f.body);
      }));
    }
    post(_0x554d6b, _0x284b8b = () => {}) {
      if (_0x554d6b.body && _0x554d6b.headers && !_0x554d6b.headers["Content-Type"] && (_0x554d6b.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x554d6b.headers && delete _0x554d6b.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x554d6b.headers = _0x554d6b.headers || {}, Object.assign(_0x554d6b.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x554d6b, (_0x596241, _0x53362b, _0xabbb4a) => {
          !_0x596241 && _0x53362b && (_0x53362b.body = _0xabbb4a, _0x53362b.statusCode = _0x53362b.status);
          _0x284b8b(_0x596241, _0x53362b, _0xabbb4a);
        });
      } else {
        if (this.isQuanX()) {
          _0x554d6b.method = "POST";
          this.isNeedRewrite && (_0x554d6b.opts = _0x554d6b.opts || {}, Object.assign(_0x554d6b.opts, {
            hints: !1
          }));
          $task.fetch(_0x554d6b).then(_0x48540f => {
            const {
              statusCode: _0x58f2c8,
              statusCode: _0x2e9962,
              headers: _0x2e2a0d,
              body: _0x5be742
            } = _0x48540f;
            _0x284b8b(null, {
              status: _0x58f2c8,
              statusCode: _0x2e9962,
              headers: _0x2e2a0d,
              body: _0x5be742
            }, _0x5be742);
          }, _0x314ef9 => _0x284b8b(_0x314ef9));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x554d6b);
            const {
              url: _0x1c717a,
              ..._0x25bb88
            } = _0x554d6b;
            this.got.post(_0x1c717a, _0x25bb88).then(_0x1a42d8 => {
              const {
                statusCode: _0x17ec2f,
                statusCode: _0xd843b4,
                headers: _0x4565a5,
                body: _0x31d78d
              } = _0x1a42d8;
              _0x284b8b(null, {
                status: _0x17ec2f,
                statusCode: _0xd843b4,
                headers: _0x4565a5,
                body: _0x31d78d
              }, _0x31d78d);
            }, _0xa32232 => {
              const {
                message: _0x4b52ea,
                response: _0xf992e3
              } = _0xa32232;
              _0x284b8b(_0x4b52ea, _0xf992e3, _0xf992e3 && _0xf992e3.body);
            });
          }
        }
      }
    }
    time(_0x47d187, _0x3278b8 = null) {
      const _0x3f5234 = _0x3278b8 ? new Date(_0x3278b8) : new Date();
      let _0x5101fe = {
        "M+": _0x3f5234.getMonth() + 1,
        "d+": _0x3f5234.getDate(),
        "H+": _0x3f5234.getHours(),
        "m+": _0x3f5234.getMinutes(),
        "s+": _0x3f5234.getSeconds(),
        "q+": Math.floor((_0x3f5234.getMonth() + 3) / 3),
        S: _0x3f5234.getMilliseconds()
      };
      /(y+)/.test(_0x47d187) && (_0x47d187 = _0x47d187.replace(RegExp.$1, (_0x3f5234.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x274520 in _0x5101fe) new RegExp("(" + _0x274520 + ")").test(_0x47d187) && (_0x47d187 = _0x47d187.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5101fe[_0x274520] : ("00" + _0x5101fe[_0x274520]).substr(("" + _0x5101fe[_0x274520]).length)));
      return _0x47d187;
    }
    msg(_0x4e6d14 = _0x378d6d, _0x10c950 = "", _0x1f95fd = "", _0x4e3c7d) {
      const _0x704a06 = _0x507852 => {
        if (!_0x507852) {
          return _0x507852;
        }
        if ("string" == typeof _0x507852) {
          return this.isLoon() ? _0x507852 : this.isQuanX() ? {
            "open-url": _0x507852
          } : this.isSurge() ? {
            url: _0x507852
          } : void 0;
        }
        if ("object" == typeof _0x507852) {
          if (this.isLoon()) {
            let _0x13792b = _0x507852.openUrl || _0x507852.url || _0x507852["open-url"],
              _0x55ab81 = _0x507852.mediaUrl || _0x507852["media-url"];
            return {
              openUrl: _0x13792b,
              mediaUrl: _0x55ab81
            };
          }
          if (this.isQuanX()) {
            let _0x2f7e0d = _0x507852["open-url"] || _0x507852.url || _0x507852.openUrl,
              _0x5ebcf9 = _0x507852["media-url"] || _0x507852.mediaUrl;
            return {
              "open-url": _0x2f7e0d,
              "media-url": _0x5ebcf9
            };
          }
          if (this.isSurge()) {
            let _0x461ee9 = _0x507852.url || _0x507852.openUrl || _0x507852["open-url"];
            return {
              url: _0x461ee9
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4e6d14, _0x10c950, _0x1f95fd, _0x704a06(_0x4e3c7d)) : this.isQuanX() && $notify(_0x4e6d14, _0x10c950, _0x1f95fd, _0x704a06(_0x4e3c7d))), !this.isMuteLog) {
        let _0x51fff1 = ["", "==============📣系统通知📣=============="];
        _0x51fff1.push(_0x4e6d14);
        _0x10c950 && _0x51fff1.push(_0x10c950);
        _0x1f95fd && _0x51fff1.push(_0x1f95fd);
        console.log(_0x51fff1.join("\n"));
        this.logs = this.logs.concat(_0x51fff1);
      }
    }
    log(..._0xdfd5e0) {
      _0xdfd5e0.length > 0 && (this.logs = [...this.logs, ..._0xdfd5e0]);
      console.log(_0xdfd5e0.join(this.logSeparator));
    }
    logErr(_0x56e952, _0x417261) {
      const _0x546a1c = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x546a1c ? this.log("", "❗️" + this.name + ", 错误!", _0x56e952.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x56e952);
    }
    wait(_0x1176ec) {
      return new Promise(_0x393807 => setTimeout(_0x393807, _0x1176ec));
    }
    done(_0x1ce0a6 = {}) {
      const _0x55449b = new Date().getTime(),
        _0x26640b = (_0x55449b - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x26640b + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x1ce0a6);
    }
  }(_0x378d6d, _0x438a0d);
}