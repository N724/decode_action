//Mon Aug 19 2024 06:50:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("霸王茶姬"),
  axios = require("axios"),
  {
    sendNotify
  } = require("./sendNotify"),
  SyncRequest = require("sync-request");
let notifyStr = "",
  appid = atob("d3hhZmVjNmY4NDIyY2IzNTdi");
(async () => {
  checkVersion("bwcj.js", "e4db4737fad68454ed124e2c350f4380");
  const _0x587d1f = process.env.bwcj_ck;
  if (!_0x587d1f) {
    logAndNotify("bwcj_ck不存在");
    return;
  }
  let _0x303038 = _0x587d1f.replaceAll("&", "\n").split("\n");
  for (let _0x59c522 = 0; _0x59c522 < _0x303038.length; _0x59c522++) {
    const _0x213f36 = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x303038[_0x59c522]);
    if (!_0x213f36.data.status) {
      logAndNotify("账号【" + (_0x59c522 + 1) + "】 登录失败☹");
      continue;
    }
    const _0x3b90a0 = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userSignStatistics", _0x303038[_0x59c522], {
      activityId: "947079313798000641",
      appid: appid
    });
    _0x3b90a0.data.status && _0x3b90a0.data.data.signStatus == 1 && logAndNotify("账号【" + (_0x59c522 + 1) + "】 签到成功 连续签到" + _0x3b90a0.data.data.signDays + "天");
    const _0x19c5f6 = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x303038[_0x59c522]);
    if (_0x19c5f6.data.status) {
      logAndNotify("账号【" + (_0x59c522 + 1) + "】 积分：【" + _0x19c5f6.data.data.customerAssertInfo.integral + "】");
    }
    const _0x5ee1a2 = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userReward", _0x303038[_0x59c522], {
      activityId: "947079313798000641",
      appid: appid,
      pageNo: 1,
      pageSize: 30
    });
    if (_0x5ee1a2.data.status) {
      const _0x2b847c = _0x5ee1a2.data.data.list;
      for (let _0x20e3a6 = 0; _0x20e3a6 < _0x2b847c.length; _0x20e3a6++) {
        if (_0x2b847c[_0x20e3a6].rewardType === 1) {
          logAndNotify("账号【" + (_0x59c522 + 1) + "】 奖品领取时间【" + _0x2b847c[_0x20e3a6].date + "】【" + _0x2b847c[_0x20e3a6].rewardName + "】");
        }
      }
    }
  }
})().catch(_0x1fbd71 => {
  logAndNotify(_0x1fbd71);
}).finally(() => {
  sendNotify("霸王茶姬", notifyStr);
  $.done();
});
function sendPostRequest(_0x311e4e, _0x58b781, _0x3bbd4f) {
  const _0x1068a8 = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-User-Token": "Rh04KAYDEaKbwudXc4e07Hkxm-dTiq9E8c42AXW4e-VXV7Vw9FPYkL9hHzo3MlD2",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x2c7851 = {
      ..._0x1068a8,
      ...{
        "Qm-User-Token": _0x58b781
      }
    },
    _0x1099c7 = axios.create({
      headers: _0x2c7851
    });
  return _0x1099c7.post(_0x311e4e, _0x3bbd4f);
}
function sendGetRequest(_0x2db2b4, _0x12fcb2) {
  const _0xb56da8 = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-User-Token": "Rh04KAYDEaKbwudXc4e07Hkxm-dTiq9E8c42AXW4e-VXV7Vw9FPYkL9hHzo3MlD2",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x59e1bd = {
      ..._0xb56da8,
      ...{
        "Qm-User-Token": _0x12fcb2
      }
    },
    _0x283c78 = axios.create({
      headers: _0x59e1bd
    });
  return _0x283c78.get(_0x2db2b4);
}
function logAndNotify(_0x158dc7) {
  1;
  $.log(_0x158dc7);
  notifyStr += _0x158dc7;
  notifyStr += "\n";
}
function Env(_0x2e48cb, _0x1bbaed) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x521dfa {
    constructor(_0x547449) {
      this.env = _0x547449;
    }
    send(_0x427c4d, _0x4e6890 = "GET") {
      _0x427c4d = "string" == typeof _0x427c4d ? {
        url: _0x427c4d
      } : _0x427c4d;
      let _0x1b6d89 = this.get;
      "POST" === _0x4e6890 && (_0x1b6d89 = this.post);
      return new Promise((_0x4c8689, _0xdb09fc) => {
        _0x1b6d89.call(this, _0x427c4d, (_0x5aeb9f, _0xb105da, _0x456dac) => {
          _0x5aeb9f ? _0xdb09fc(_0x5aeb9f) : _0x4c8689(_0xb105da);
        });
      });
    }
    get(_0x435554) {
      return this.send.call(this.env, _0x435554);
    }
    post(_0x3dc3bd) {
      return this.send.call(this.env, _0x3dc3bd, "POST");
    }
  }
  return new class {
    constructor(_0x2a6b29, _0x1f3b4c) {
      this.name = _0x2a6b29;
      this.http = new _0x521dfa(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x1f3b4c);
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
    toObj(_0xd5213a, _0x55f078 = null) {
      try {
        return JSON.parse(_0xd5213a);
      } catch {
        return _0x55f078;
      }
    }
    toStr(_0x23635a, _0x4d1af8 = null) {
      try {
        return JSON.stringify(_0x23635a);
      } catch {
        return _0x4d1af8;
      }
    }
    getjson(_0x46ff94, _0x1b7ebe) {
      let _0x4a7fc5 = _0x1b7ebe;
      const _0x130d6e = this.getdata(_0x46ff94);
      if (_0x130d6e) {
        try {
          _0x4a7fc5 = JSON.parse(this.getdata(_0x46ff94));
        } catch {}
      }
      return _0x4a7fc5;
    }
    setjson(_0x5bbcaf, _0x170ee4) {
      try {
        return this.setdata(JSON.stringify(_0x5bbcaf), _0x170ee4);
      } catch {
        return !1;
      }
    }
    getScript(_0x31f19e) {
      return new Promise(_0x22e562 => {
        this.get({
          url: _0x31f19e
        }, (_0x277cc5, _0x11bfe8, _0x4d4e8c) => _0x22e562(_0x4d4e8c));
      });
    }
    runScript(_0x167dbc, _0x2c2c0c) {
      return new Promise(_0x2a5912 => {
        let _0x5f4f1b = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5f4f1b = _0x5f4f1b ? _0x5f4f1b.replace(/\n/g, "").trim() : _0x5f4f1b;
        let _0x19fb5e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x19fb5e = _0x19fb5e ? 1 * _0x19fb5e : 20;
        _0x19fb5e = _0x2c2c0c && _0x2c2c0c.timeout ? _0x2c2c0c.timeout : _0x19fb5e;
        const [_0x56e463, _0x218e34] = _0x5f4f1b.split("@"),
          _0xfe1480 = {
            url: "http://" + _0x218e34 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x167dbc,
              mock_type: "cron",
              timeout: _0x19fb5e
            },
            headers: {
              "X-Key": _0x56e463,
              Accept: "*/*"
            }
          };
        this.post(_0xfe1480, (_0x3222b6, _0x145a8c, _0x2b29cd) => _0x2a5912(_0x2b29cd));
      }).catch(_0x519cc0 => this.logErr(_0x519cc0));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xd188a = this.path.resolve(this.dataFile),
          _0x2f7ddd = this.path.resolve(process.cwd(), this.dataFile),
          _0x52b3f4 = this.fs.existsSync(_0xd188a),
          _0x1e08f7 = !_0x52b3f4 && this.fs.existsSync(_0x2f7ddd);
        if (!_0x52b3f4 && !_0x1e08f7) {
          return {};
        }
        {
          const _0x5c1c1b = _0x52b3f4 ? _0xd188a : _0x2f7ddd;
          try {
            return JSON.parse(this.fs.readFileSync(_0x5c1c1b));
          } catch (_0xff87b8) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x23bcb9 = this.path.resolve(this.dataFile),
          _0x352d29 = this.path.resolve(process.cwd(), this.dataFile),
          _0x85b637 = this.fs.existsSync(_0x23bcb9),
          _0x40c839 = !_0x85b637 && this.fs.existsSync(_0x352d29),
          _0x67510a = JSON.stringify(this.data);
        _0x85b637 ? this.fs.writeFileSync(_0x23bcb9, _0x67510a) : _0x40c839 ? this.fs.writeFileSync(_0x352d29, _0x67510a) : this.fs.writeFileSync(_0x23bcb9, _0x67510a);
      }
    }
    lodash_get(_0x50b293, _0x5dc49d, _0x57105b) {
      const _0x4baac4 = _0x5dc49d.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3a8cc1 = _0x50b293;
      for (const _0x3a7656 of _0x4baac4) if (_0x3a8cc1 = Object(_0x3a8cc1)[_0x3a7656], void 0 === _0x3a8cc1) {
        return _0x57105b;
      }
      return _0x3a8cc1;
    }
    lodash_set(_0x3fb660, _0x38cb14, _0x549943) {
      return Object(_0x3fb660) !== _0x3fb660 ? _0x3fb660 : (Array.isArray(_0x38cb14) || (_0x38cb14 = _0x38cb14.toString().match(/[^.[\]]+/g) || []), _0x38cb14.slice(0, -1).reduce((_0x92962, _0x5cdd2e, _0x1e7c0b) => Object(_0x92962[_0x5cdd2e]) === _0x92962[_0x5cdd2e] ? _0x92962[_0x5cdd2e] : _0x92962[_0x5cdd2e] = Math.abs(_0x38cb14[_0x1e7c0b + 1]) >> 0 == +_0x38cb14[_0x1e7c0b + 1] ? [] : {}, _0x3fb660)[_0x38cb14[_0x38cb14.length - 1]] = _0x549943, _0x3fb660);
    }
    getdata(_0x21174f) {
      let _0x298298 = this.getval(_0x21174f);
      if (/^@/.test(_0x21174f)) {
        const [, _0x42592e, _0xb8181] = /^@(.*?)\.(.*?)$/.exec(_0x21174f),
          _0x774f6 = _0x42592e ? this.getval(_0x42592e) : "";
        if (_0x774f6) {
          try {
            const _0x5ef359 = JSON.parse(_0x774f6);
            _0x298298 = _0x5ef359 ? this.lodash_get(_0x5ef359, _0xb8181, "") : _0x298298;
          } catch (_0x1e3bf0) {
            _0x298298 = "";
          }
        }
      }
      return _0x298298;
    }
    setdata(_0x1e29ed, _0x42c466) {
      let _0x48d4fc = !1;
      if (/^@/.test(_0x42c466)) {
        const [, _0x5194ad, _0x165ceb] = /^@(.*?)\.(.*?)$/.exec(_0x42c466),
          _0x33d26e = this.getval(_0x5194ad),
          _0x4099c7 = _0x5194ad ? "null" === _0x33d26e ? null : _0x33d26e || "{}" : "{}";
        try {
          const _0xe682b2 = JSON.parse(_0x4099c7);
          this.lodash_set(_0xe682b2, _0x165ceb, _0x1e29ed);
          _0x48d4fc = this.setval(JSON.stringify(_0xe682b2), _0x5194ad);
        } catch (_0x464b7c) {
          const _0x2afbbf = {};
          this.lodash_set(_0x2afbbf, _0x165ceb, _0x1e29ed);
          _0x48d4fc = this.setval(JSON.stringify(_0x2afbbf), _0x5194ad);
        }
      } else {
        _0x48d4fc = this.setval(_0x1e29ed, _0x42c466);
      }
      return _0x48d4fc;
    }
    getval(_0x2fa525) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x2fa525) : this.isQuanX() ? $prefs.valueForKey(_0x2fa525) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2fa525]) : this.data && this.data[_0x2fa525] || null;
    }
    setval(_0x4aca6f, _0x35db7e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x4aca6f, _0x35db7e) : this.isQuanX() ? $prefs.setValueForKey(_0x4aca6f, _0x35db7e) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x35db7e] = _0x4aca6f, this.writedata(), !0) : this.data && this.data[_0x35db7e] || null;
    }
    initGotEnv(_0x1628e4) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x1628e4 && (_0x1628e4.headers = _0x1628e4.headers ? _0x1628e4.headers : {}, void 0 === _0x1628e4.headers.Cookie && void 0 === _0x1628e4.cookieJar && (_0x1628e4.cookieJar = this.ckjar));
    }
    get(_0x9272ed, _0x1ba601 = () => {}) {
      _0x9272ed.headers && (delete _0x9272ed.headers["Content-Type"], delete _0x9272ed.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x9272ed.headers = _0x9272ed.headers || {}, Object.assign(_0x9272ed.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x9272ed, (_0xe002c8, _0x132f63, _0x5a4270) => {
        !_0xe002c8 && _0x132f63 && (_0x132f63.body = _0x5a4270, _0x132f63.statusCode = _0x132f63.status);
        _0x1ba601(_0xe002c8, _0x132f63, _0x5a4270);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x9272ed.opts = _0x9272ed.opts || {}, Object.assign(_0x9272ed.opts, {
        hints: !1
      })), $task.fetch(_0x9272ed).then(_0x285048 => {
        const {
          statusCode: _0xafb6ac,
          statusCode: _0xa90683,
          headers: _0x1b3d79,
          body: _0x4eb4cb
        } = _0x285048;
        _0x1ba601(null, {
          status: _0xafb6ac,
          statusCode: _0xa90683,
          headers: _0x1b3d79,
          body: _0x4eb4cb
        }, _0x4eb4cb);
      }, _0x179735 => _0x1ba601(_0x179735))) : this.isNode() && (this.initGotEnv(_0x9272ed), this.got(_0x9272ed).on("redirect", (_0x418944, _0x5b350f) => {
        try {
          if (_0x418944.headers["set-cookie"]) {
            const _0x5e9771 = _0x418944.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x5e9771 && this.ckjar.setCookieSync(_0x5e9771, null);
            _0x5b350f.cookieJar = this.ckjar;
          }
        } catch (_0x2c02ca) {
          this.logErr(_0x2c02ca);
        }
      }).then(_0x137d8d => {
        const {
          statusCode: _0x4becf2,
          statusCode: _0x164e0e,
          headers: _0x40117a,
          body: _0x482f46
        } = _0x137d8d;
        _0x1ba601(null, {
          status: _0x4becf2,
          statusCode: _0x164e0e,
          headers: _0x40117a,
          body: _0x482f46
        }, _0x482f46);
      }, _0x40318a => {
        const {
          message: _0x89fc65,
          response: _0x3f8e4e
        } = _0x40318a;
        _0x1ba601(_0x89fc65, _0x3f8e4e, _0x3f8e4e && _0x3f8e4e.body);
      }));
    }
    post(_0x31a5b3, _0x5d591a = () => {}) {
      if (_0x31a5b3.body && _0x31a5b3.headers && !_0x31a5b3.headers["Content-Type"] && (_0x31a5b3.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x31a5b3.headers && delete _0x31a5b3.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x31a5b3.headers = _0x31a5b3.headers || {}, Object.assign(_0x31a5b3.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x31a5b3, (_0x4876bd, _0x1e0794, _0x3515c7) => {
          !_0x4876bd && _0x1e0794 && (_0x1e0794.body = _0x3515c7, _0x1e0794.statusCode = _0x1e0794.status);
          _0x5d591a(_0x4876bd, _0x1e0794, _0x3515c7);
        });
      } else {
        if (this.isQuanX()) {
          _0x31a5b3.method = "POST";
          this.isNeedRewrite && (_0x31a5b3.opts = _0x31a5b3.opts || {}, Object.assign(_0x31a5b3.opts, {
            hints: !1
          }));
          $task.fetch(_0x31a5b3).then(_0x432bc9 => {
            const {
              statusCode: _0x33cb85,
              statusCode: _0x2b224c,
              headers: _0x1f1dda,
              body: _0xc7edc8
            } = _0x432bc9;
            _0x5d591a(null, {
              status: _0x33cb85,
              statusCode: _0x2b224c,
              headers: _0x1f1dda,
              body: _0xc7edc8
            }, _0xc7edc8);
          }, _0x593fef => _0x5d591a(_0x593fef));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x31a5b3);
            const {
              url: _0xd41ba9,
              ..._0x15632f
            } = _0x31a5b3;
            this.got.post(_0xd41ba9, _0x15632f).then(_0x5bf70b => {
              const {
                statusCode: _0x38ab03,
                statusCode: _0x27c3b6,
                headers: _0x56c633,
                body: _0x1fe1bd
              } = _0x5bf70b;
              _0x5d591a(null, {
                status: _0x38ab03,
                statusCode: _0x27c3b6,
                headers: _0x56c633,
                body: _0x1fe1bd
              }, _0x1fe1bd);
            }, _0x20bb5e => {
              const {
                message: _0x7c624d,
                response: _0xe6ef25
              } = _0x20bb5e;
              _0x5d591a(_0x7c624d, _0xe6ef25, _0xe6ef25 && _0xe6ef25.body);
            });
          }
        }
      }
    }
    time(_0xcb22bf, _0x56b969 = null) {
      const _0x391057 = _0x56b969 ? new Date(_0x56b969) : new Date();
      let _0x2a5db5 = {
        "M+": _0x391057.getMonth() + 1,
        "d+": _0x391057.getDate(),
        "H+": _0x391057.getHours(),
        "m+": _0x391057.getMinutes(),
        "s+": _0x391057.getSeconds(),
        "q+": Math.floor((_0x391057.getMonth() + 3) / 3),
        S: _0x391057.getMilliseconds()
      };
      /(y+)/.test(_0xcb22bf) && (_0xcb22bf = _0xcb22bf.replace(RegExp.$1, (_0x391057.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x46a104 in _0x2a5db5) new RegExp("(" + _0x46a104 + ")").test(_0xcb22bf) && (_0xcb22bf = _0xcb22bf.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2a5db5[_0x46a104] : ("00" + _0x2a5db5[_0x46a104]).substr(("" + _0x2a5db5[_0x46a104]).length)));
      return _0xcb22bf;
    }
    msg(_0x241813 = _0x2e48cb, _0x5a9d92 = "", _0x4afe2b = "", _0x310a82) {
      const _0x1924e8 = _0x42d332 => {
        if (!_0x42d332) {
          return _0x42d332;
        }
        if ("string" == typeof _0x42d332) {
          return this.isLoon() ? _0x42d332 : this.isQuanX() ? {
            "open-url": _0x42d332
          } : this.isSurge() ? {
            url: _0x42d332
          } : void 0;
        }
        if ("object" == typeof _0x42d332) {
          if (this.isLoon()) {
            let _0x5c49bb = _0x42d332.openUrl || _0x42d332.url || _0x42d332["open-url"],
              _0x558fc5 = _0x42d332.mediaUrl || _0x42d332["media-url"];
            return {
              openUrl: _0x5c49bb,
              mediaUrl: _0x558fc5
            };
          }
          if (this.isQuanX()) {
            let _0x5e84e1 = _0x42d332["open-url"] || _0x42d332.url || _0x42d332.openUrl,
              _0x2153f8 = _0x42d332["media-url"] || _0x42d332.mediaUrl;
            return {
              "open-url": _0x5e84e1,
              "media-url": _0x2153f8
            };
          }
          if (this.isSurge()) {
            let _0x15f200 = _0x42d332.url || _0x42d332.openUrl || _0x42d332["open-url"];
            return {
              url: _0x15f200
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x241813, _0x5a9d92, _0x4afe2b, _0x1924e8(_0x310a82)) : this.isQuanX() && $notify(_0x241813, _0x5a9d92, _0x4afe2b, _0x1924e8(_0x310a82))), !this.isMuteLog) {
        let _0x1d05b1 = ["", "==============📣系统通知📣=============="];
        _0x1d05b1.push(_0x241813);
        _0x5a9d92 && _0x1d05b1.push(_0x5a9d92);
        _0x4afe2b && _0x1d05b1.push(_0x4afe2b);
        console.log(_0x1d05b1.join("\n"));
        this.logs = this.logs.concat(_0x1d05b1);
      }
    }
    log(..._0x3293a0) {
      _0x3293a0.length > 0 && (this.logs = [...this.logs, ..._0x3293a0]);
      console.log(_0x3293a0.join(this.logSeparator));
    }
    logErr(_0x44bd83, _0x4e9f57) {
      const _0x3ce9e2 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x3ce9e2 ? this.log("", "❗️" + this.name + ", 错误!", _0x44bd83.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x44bd83);
    }
    wait(_0x55e8be) {
      return new Promise(_0x35be89 => setTimeout(_0x35be89, _0x55e8be));
    }
    done(_0xe73668 = {}) {
      const _0x48d1c2 = new Date().getTime(),
        _0x357f86 = (_0x48d1c2 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x357f86 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0xe73668);
    }
  }(_0x2e48cb, _0x1bbaed);
}
function checkVersion(_0x57f56e, _0x416ead) {
  try {
    logAndNotify("文件md5：" + _0x416ead);
    const _0x245b9d = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0x57f56e + "&fileMd5=" + _0x416ead),
      _0x565998 = JSON.parse(_0x245b9d.getBody("utf8"));
    if (_0x565998.code === 301) {
      process.exit(0);
    } else {
      logAndNotify(_0x565998.data);
    }
  } catch (_0x84e416) {
    logAndNotify("版本检查失败:", _0x84e416);
  }
}