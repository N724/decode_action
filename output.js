//Mon Jul 01 2024 10:11:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("哈罗单车奖励金签到"),
  ckName = "hldc_data",
  Notify = 1,
  notify = $.isNode() ? require("./sendNotify") : "";
let envSplitor = ["@"],
  userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "",
  userList = [],
  userIdx = 0,
  userCount = 0;
$.notifyMsg = [];
$.barkKey = ($.isNode() ? process.env.bark_key : $.getdata("bark_key")) || "";
async function main() {
  console.log("\n================== 任务 ==================\n");
  let _0x203c61 = [];
  for (let _0x15a7e5 of userList) {
    _0x15a7e5.ckStatus ? (console.log("🔷账号" + _0x15a7e5.index + " >> Start work"), console.log("随机延迟" + _0x15a7e5.getRandomTime() + "ms"), _0x203c61.push(await _0x15a7e5.signin()), await $.wait(_0x15a7e5.getRandomTime()), _0x203c61.push(await _0x15a7e5.point()), await $.wait(_0x15a7e5.getRandomTime())) : $.notifyMsg.push("❌账号" + _0x15a7e5.index + " >> Check ck error!");
  }
  await Promise.all(_0x203c61);
}
class UserInfo {
  constructor(_0x277e99) {
    this.index = ++userIdx;
    this.token = _0x277e99;
    this.ckStatus = true;
  }
  getRandomTime() {
    return randomInt(3000, 5000);
  }
  async signin() {
    try {
      const _0x150637 = {
        url: "https://api.hellobike.com/api?common.welfare.signAndRecommend",
        headers: {
          Accept: "application/json, text/plain, */*",
          Origin: "https://m.hellobike.com",
          Connection: "keep-alive",
          "Content-Type": "application/json",
          Referer: "https://m.hellobike.com/AppPlatformH5/latest/pr_index_bounty.html",
          Host: "api.hellobike.com",
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18H17 Ariver/1.0.15  NebulaSDK; app=easybike; version=6.48.0 WK RVKType(1) NebulaX/1.0.0",
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip, deflate, br",
          requestId: " "
        },
        body: "{\"from\":\"h5\",\"systemCode\":61,\"platform\":4,\"version\":\"6.48.0\",\"action\":\"common.welfare.signAndRecommend\",\"token\":\"" + this.token + "\"}"
      };
      let _0x109a0e = await httpRequest(_0x150637);
      console.log(_0x109a0e);
      _0x109a0e?.["code"] == 0 ? _0x109a0e?.["data"]?.["doSignThisTime"] ? this.signMsg = "签到成功，获得" + _0x109a0e?.["data"]?.["bountyCountToday"] + "奖励金" : this.signMsg = "今日已签到" : console.log(_0x109a0e);
    } catch (_0x378724) {
      console.log(_0x378724);
    }
  }
  async point() {
    try {
      const _0x65a427 = {
        url: "https://api.hellobike.com/api?user.taurus.pointInfo",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18H17 Ariver/1.0.15  NebulaSDK; app=easybike; version=6.48.0 WK RVKType(1) NebulaX/1.0.0"
        },
        body: "{\"from\":\"h5\",\"systemCode\":61,\"platform\":4,\"version\":\"6.48.0\",\"action\":\"user.taurus.pointInfo\",\"token\":\"" + this.token + "\",\"pointType\":1}"
      };
      let _0x5eb081 = await httpRequest(_0x65a427);
      console.log(_0x5eb081);
      _0x5eb081?.["code"] == 0 ? DoubleLog("【账号" + this.index + "】" + this.signMsg + ",当前" + _0x5eb081?.["data"]?.["points"] + "奖励金") : DoubleLog(_0x5eb081.msg);
    } catch (_0x2de63c) {
      console.log(_0x2de63c);
    }
  }
}
async function getCookie() {
  if ($request && $request.method != "OPTIONS") {
    const _0x27788b = $request.body,
      _0x3ad7ac = JSON.parse(_0x27788b),
      _0x4f032a = _0x3ad7ac.token;
    _0x4f032a ? ($.setdata(_0x4f032a, ckName), $.msg($.name, "", "获取签到Cookie成功🎉")) : $.msg($.name, "", "错误获取签到Cookie失败");
  }
}
!(async () => {
  if (typeof $request != "undefined") {
    await getCookie();
    return;
  }
  if (!(await checkEnv())) {
    throw new Error("❌未检测到ck，请添加环境变量");
  }
  userList.length > 0 && (await main());
  $.barkKey && (await BarkNotify($, $.barkKey, $.name, $.notifyMsg.join("\n")));
})().catch(_0x4fe373 => $.notifyMsg.push(_0x4fe373.message || _0x4fe373)).finally(async () => {
  await SendMsg($.notifyMsg.join("\n"));
  $.done();
});
function DoubleLog(_0x83e1) {
  $.isNode() ? _0x83e1 && (console.log("" + _0x83e1), $.notifyMsg.push("" + _0x83e1)) : (console.log("" + _0x83e1), $.notifyMsg.push("" + _0x83e1));
}
function toParams(_0x2d4751) {
  var _0x3681d8 = Object.keys(_0x2d4751).map(function (_0x27d870) {
    return encodeURIComponent(_0x27d870) + "=" + encodeURIComponent(_0x2d4751[_0x27d870]);
  }).join("&");
  return _0x3681d8;
}
async function checkEnv() {
  if (userCookie) {
    let _0x155006 = envSplitor[0];
    for (let _0x19341b of envSplitor) if (userCookie.indexOf(_0x19341b) > -1) {
      _0x155006 = _0x19341b;
      break;
    }
    for (let _0x1ae5ea of userCookie.split(_0x155006)) _0x1ae5ea && userList.push(new UserInfo(_0x1ae5ea));
    userCount = userList.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + userCount + "个账号");
  return true;
}
function randomInt(_0x14fc19, _0x50e585) {
  return Math.round(Math.random() * (_0x50e585 - _0x14fc19) + _0x14fc19);
}
async function SendMsg(_0x3f9692) {
  if (!_0x3f9692) {
    return;
  }
  Notify > 0 ? $.isNode() ? await notify.sendNotify($.name, _0x3f9692) : $.msg($.name, "", _0x3f9692) : console.log(_0x3f9692);
}
function httpRequest(_0x22d2e9, _0xb5ef7) {
  typeof _0xb5ef7 === "undefined" ? "body" in _0x22d2e9 ? _0xb5ef7 = "post" : _0xb5ef7 = "get" : _0xb5ef7 = _0xb5ef7;
  return new Promise(_0x5f393f => {
    $[_0xb5ef7](_0x22d2e9, (_0x2871ff, _0x3fed97, _0x3ae4e6) => {
      try {
        _0x2871ff ? (console.log(_0xb5ef7 + "请求失败"), $.logErr(_0x2871ff)) : _0x3ae4e6 ? (typeof JSON.parse(_0x3ae4e6) == "object" ? _0x3ae4e6 = JSON.parse(_0x3ae4e6) : _0x3ae4e6 = _0x3ae4e6, _0x5f393f(_0x3ae4e6)) : console.log("请求api返回数据为空，请检查自身原因");
      } catch (_0x1b518a) {
        $.logErr(_0x1b518a, _0x3fed97);
      } finally {
        _0x5f393f();
      }
    });
  });
}
async function BarkNotify(_0x1e45ec, _0x446d5e, _0x306804, _0x26b754) {
  for (let _0x19f5b2 = 0; _0x19f5b2 < 3; _0x19f5b2++) {
    console.log("🔷Bark notify >> Start push (" + (_0x19f5b2 + 1) + ")");
    const _0x115fa1 = await new Promise(_0x21a6ce => {
      _0x1e45ec.post({
        url: "https://api.day.app/push",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: _0x306804,
          body: _0x26b754,
          device_key: _0x446d5e,
          ext_params: {
            group: _0x306804
          }
        })
      }, (_0x510961, _0x27a9d9, _0xed34df) => _0x27a9d9 && _0x27a9d9.status == 200 ? _0x21a6ce(1) : _0x21a6ce(_0xed34df || _0x510961));
    });
    if (_0x115fa1 === 1) {
      console.log("✅Push success!");
      break;
    } else {
      console.log("❌Push failed! >> " + (_0x115fa1.message || _0x115fa1));
    }
  }
}
function Env(_0x1547fb, _0x107d1c) {
  class _0x375319 {
    constructor(_0x2ea1cb) {
      this.env = _0x2ea1cb;
    }
    send(_0x1eaf2b, _0x1bc082 = "GET") {
      _0x1eaf2b = "string" == typeof _0x1eaf2b ? {
        url: _0x1eaf2b
      } : _0x1eaf2b;
      let _0x4cedae = this.get;
      "POST" === _0x1bc082 && (_0x4cedae = this.post);
      return new Promise((_0x39de60, _0x291dc9) => {
        _0x4cedae.call(this, _0x1eaf2b, (_0x123d55, _0x3917cd, _0x2fc6a2) => {
          _0x123d55 ? _0x291dc9(_0x123d55) : _0x39de60(_0x3917cd);
        });
      });
    }
    get(_0x4af186) {
      return this.send.call(this.env, _0x4af186);
    }
    post(_0x42f4b8) {
      return this.send.call(this.env, _0x42f4b8, "POST");
    }
  }
  return new class {
    constructor(_0x3910fe, _0x3b1a72) {
      this.name = _0x3910fe;
      this.http = new _0x375319(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3b1a72);
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(_0x2af6e3, _0x486746 = null) {
      try {
        return JSON.parse(_0x2af6e3);
      } catch {
        return _0x486746;
      }
    }
    toStr(_0x5f24e8, _0xdc2f20 = null) {
      try {
        return JSON.stringify(_0x5f24e8);
      } catch {
        return _0xdc2f20;
      }
    }
    getjson(_0x6a3a03, _0x93c791) {
      let _0x559129 = _0x93c791;
      const _0x2db892 = this.getdata(_0x6a3a03);
      if (_0x2db892) {
        try {
          _0x559129 = JSON.parse(this.getdata(_0x6a3a03));
        } catch {}
      }
      return _0x559129;
    }
    setjson(_0x1ed2ee, _0x4b47b5) {
      try {
        return this.setdata(JSON.stringify(_0x1ed2ee), _0x4b47b5);
      } catch {
        return !1;
      }
    }
    getScript(_0x57e96a) {
      return new Promise(_0x5c5fe2 => {
        this.get({
          url: _0x57e96a
        }, (_0x35efe7, _0xe16e17, _0x435fd0) => _0x5c5fe2(_0x435fd0));
      });
    }
    runScript(_0x1acb2c, _0x566f4f) {
      return new Promise(_0xe1e6fe => {
        let _0x1831ca = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x1831ca = _0x1831ca ? _0x1831ca.replace(/\n/g, "").trim() : _0x1831ca;
        let _0x246ef3 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x246ef3 = _0x246ef3 ? 1 * _0x246ef3 : 20;
        _0x246ef3 = _0x566f4f && _0x566f4f.timeout ? _0x566f4f.timeout : _0x246ef3;
        const [_0x49661d, _0x2cfe69] = _0x1831ca.split("@"),
          _0x135304 = {
            url: "http://" + _0x2cfe69 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x1acb2c,
              mock_type: "cron",
              timeout: _0x246ef3
            },
            headers: {
              "X-Key": _0x49661d,
              Accept: "*/*"
            },
            timeout: _0x246ef3
          };
        this.post(_0x135304, (_0x303985, _0x239b74, _0x49ec18) => _0xe1e6fe(_0x49ec18));
      }).catch(_0x2b9d4b => this.logErr(_0x2b9d4b));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4fe7c0 = this.path.resolve(this.dataFile),
          _0x24cf3d = this.path.resolve(process.cwd(), this.dataFile),
          _0x13a0fa = this.fs.existsSync(_0x4fe7c0),
          _0x76afa6 = !_0x13a0fa && this.fs.existsSync(_0x24cf3d);
        if (!_0x13a0fa && !_0x76afa6) {
          return {};
        }
        {
          const _0x1d45bd = _0x13a0fa ? _0x4fe7c0 : _0x24cf3d;
          try {
            return JSON.parse(this.fs.readFileSync(_0x1d45bd));
          } catch (_0x105b8d) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x49f720 = this.path.resolve(this.dataFile),
          _0x28cd58 = this.path.resolve(process.cwd(), this.dataFile),
          _0x195df1 = this.fs.existsSync(_0x49f720),
          _0x17fbbf = !_0x195df1 && this.fs.existsSync(_0x28cd58),
          _0x1031f6 = JSON.stringify(this.data);
        _0x195df1 ? this.fs.writeFileSync(_0x49f720, _0x1031f6) : _0x17fbbf ? this.fs.writeFileSync(_0x28cd58, _0x1031f6) : this.fs.writeFileSync(_0x49f720, _0x1031f6);
      }
    }
    lodash_get(_0x2f7e12, _0x726920, _0x46a0e3) {
      const _0x20a162 = _0x726920.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3d71cc = _0x2f7e12;
      for (const _0x35a12d of _0x20a162) if (_0x3d71cc = Object(_0x3d71cc)[_0x35a12d], void 0 === _0x3d71cc) {
        return _0x46a0e3;
      }
      return _0x3d71cc;
    }
    lodash_set(_0x3a1c57, _0x9846fd, _0x533e82) {
      return Object(_0x3a1c57) !== _0x3a1c57 ? _0x3a1c57 : (Array.isArray(_0x9846fd) || (_0x9846fd = _0x9846fd.toString().match(/[^.[\]]+/g) || []), _0x9846fd.slice(0, -1).reduce((_0x4a20db, _0x5a6458, _0x10739b) => Object(_0x4a20db[_0x5a6458]) === _0x4a20db[_0x5a6458] ? _0x4a20db[_0x5a6458] : _0x4a20db[_0x5a6458] = Math.abs(_0x9846fd[_0x10739b + 1]) >> 0 == +_0x9846fd[_0x10739b + 1] ? [] : {}, _0x3a1c57)[_0x9846fd[_0x9846fd.length - 1]] = _0x533e82, _0x3a1c57);
    }
    getdata(_0x5ed0fc) {
      let _0x34b5df = this.getval(_0x5ed0fc);
      if (/^@/.test(_0x5ed0fc)) {
        const [, _0x51641f, _0xa7a98] = /^@(.*?)\.(.*?)$/.exec(_0x5ed0fc),
          _0x331337 = _0x51641f ? this.getval(_0x51641f) : "";
        if (_0x331337) {
          try {
            const _0x3c16e3 = JSON.parse(_0x331337);
            _0x34b5df = _0x3c16e3 ? this.lodash_get(_0x3c16e3, _0xa7a98, "") : _0x34b5df;
          } catch (_0x8a9087) {
            _0x34b5df = "";
          }
        }
      }
      return _0x34b5df;
    }
    setdata(_0x503010, _0x1b2835) {
      let _0x2e30ca = !1;
      if (/^@/.test(_0x1b2835)) {
        const [, _0x3abbbf, _0x4ed276] = /^@(.*?)\.(.*?)$/.exec(_0x1b2835),
          _0x473531 = this.getval(_0x3abbbf),
          _0x2d7515 = _0x3abbbf ? "null" === _0x473531 ? null : _0x473531 || "{}" : "{}";
        try {
          const _0x62d642 = JSON.parse(_0x2d7515);
          this.lodash_set(_0x62d642, _0x4ed276, _0x503010);
          _0x2e30ca = this.setval(JSON.stringify(_0x62d642), _0x3abbbf);
        } catch (_0x3a1ed2) {
          const _0x256154 = {};
          this.lodash_set(_0x256154, _0x4ed276, _0x503010);
          _0x2e30ca = this.setval(JSON.stringify(_0x256154), _0x3abbbf);
        }
      } else {
        _0x2e30ca = this.setval(_0x503010, _0x1b2835);
      }
      return _0x2e30ca;
    }
    getval(_0x495166) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x495166);
        case "Quantumult X":
          return $prefs.valueForKey(_0x495166);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x495166];
        default:
          return this.data && this.data[_0x495166] || null;
      }
    }
    setval(_0x230f14, _0x1d6df4) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x230f14, _0x1d6df4);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x230f14, _0x1d6df4);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x1d6df4] = _0x230f14;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[_0x1d6df4] || null;
      }
    }
    initGotEnv(_0x158cb0) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x158cb0 && (_0x158cb0.headers = _0x158cb0.headers ? _0x158cb0.headers : {}, void 0 === _0x158cb0.headers.Cookie && void 0 === _0x158cb0.cookieJar && (_0x158cb0.cookieJar = this.ckjar));
    }
    get(_0x15d374, _0x1aa1c1 = () => {}) {
      switch (_0x15d374.headers && (delete _0x15d374.headers["Content-Type"], delete _0x15d374.headers["Content-Length"], delete _0x15d374.headers["content-type"], delete _0x15d374.headers["content-length"]), _0x15d374.params && (_0x15d374.url += "?" + this.queryStr(_0x15d374.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x15d374.headers = _0x15d374.headers || {}, Object.assign(_0x15d374.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(_0x15d374, (_0x3a4396, _0x55d4b6, _0x50299e) => {
            !_0x3a4396 && _0x55d4b6 && (_0x55d4b6.body = _0x50299e, _0x55d4b6.statusCode = _0x55d4b6.status ? _0x55d4b6.status : _0x55d4b6.statusCode, _0x55d4b6.status = _0x55d4b6.statusCode);
            _0x1aa1c1(_0x3a4396, _0x55d4b6, _0x50299e);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x15d374.opts = _0x15d374.opts || {}, Object.assign(_0x15d374.opts, {
            hints: !1
          }));
          $task.fetch(_0x15d374).then(_0x466912 => {
            const {
              statusCode: _0x26aa26,
              statusCode: _0x123638,
              headers: _0x2506f8,
              body: _0x13e54c,
              bodyBytes: _0x8745a5
            } = _0x466912;
            _0x1aa1c1(null, {
              status: _0x26aa26,
              statusCode: _0x123638,
              headers: _0x2506f8,
              body: _0x13e54c,
              bodyBytes: _0x8745a5
            }, _0x13e54c, _0x8745a5);
          }, _0x330839 => _0x1aa1c1(_0x330839 && _0x330839.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x24ef99 = require("iconv-lite");
          this.initGotEnv(_0x15d374);
          this.got(_0x15d374).on("redirect", (_0x525717, _0x3753c1) => {
            try {
              if (_0x525717.headers["set-cookie"]) {
                const _0xa3088c = _0x525717.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0xa3088c && this.ckjar.setCookieSync(_0xa3088c, null);
                _0x3753c1.cookieJar = this.ckjar;
              }
            } catch (_0x14feb3) {
              this.logErr(_0x14feb3);
            }
          }).then(_0x50a0f4 => {
            const {
                statusCode: _0x2553c8,
                statusCode: _0x234dbc,
                headers: _0x3cb9db,
                rawBody: _0x368806
              } = _0x50a0f4,
              _0x42c969 = _0x24ef99.decode(_0x368806, this.encoding);
            _0x1aa1c1(null, {
              status: _0x2553c8,
              statusCode: _0x234dbc,
              headers: _0x3cb9db,
              rawBody: _0x368806,
              body: _0x42c969
            }, _0x42c969);
          }, _0x6d5094 => {
            const {
              message: _0x414ac8,
              response: _0x4010a4
            } = _0x6d5094;
            _0x1aa1c1(_0x414ac8, _0x4010a4, _0x4010a4 && _0x24ef99.decode(_0x4010a4.rawBody, this.encoding));
          });
      }
    }
    post(_0x241631, _0x4ff475 = () => {}) {
      const _0x1dd6f3 = _0x241631.method ? _0x241631.method.toLocaleLowerCase() : "post";
      switch (_0x241631.body && _0x241631.headers && !_0x241631.headers["Content-Type"] && !_0x241631.headers["content-type"] && (_0x241631.headers["content-type"] = "application/x-www-form-urlencoded"), _0x241631.headers && (delete _0x241631.headers["Content-Length"], delete _0x241631.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x241631.headers = _0x241631.headers || {}, Object.assign(_0x241631.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[_0x1dd6f3](_0x241631, (_0x2327e5, _0xe23201, _0x29ff7d) => {
            !_0x2327e5 && _0xe23201 && (_0xe23201.body = _0x29ff7d, _0xe23201.statusCode = _0xe23201.status ? _0xe23201.status : _0xe23201.statusCode, _0xe23201.status = _0xe23201.statusCode);
            _0x4ff475(_0x2327e5, _0xe23201, _0x29ff7d);
          });
          break;
        case "Quantumult X":
          _0x241631.method = _0x1dd6f3;
          this.isNeedRewrite && (_0x241631.opts = _0x241631.opts || {}, Object.assign(_0x241631.opts, {
            hints: !1
          }));
          $task.fetch(_0x241631).then(_0x4da9b9 => {
            const {
              statusCode: _0x4af484,
              statusCode: _0x11c297,
              headers: _0xfbf7cf,
              body: _0x1b7927,
              bodyBytes: _0x3187d
            } = _0x4da9b9;
            _0x4ff475(null, {
              status: _0x4af484,
              statusCode: _0x11c297,
              headers: _0xfbf7cf,
              body: _0x1b7927,
              bodyBytes: _0x3187d
            }, _0x1b7927, _0x3187d);
          }, _0x320c92 => _0x4ff475(_0x320c92 && _0x320c92.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x56b283 = require("iconv-lite");
          this.initGotEnv(_0x241631);
          const {
            url: _0x4135b2,
            ..._0x394c83
          } = _0x241631;
          this.got[_0x1dd6f3](_0x4135b2, _0x394c83).then(_0x4bb113 => {
            const {
                statusCode: _0x1317eb,
                statusCode: _0xa90fdd,
                headers: _0x2a2f5f,
                rawBody: _0xf0081c
              } = _0x4bb113,
              _0x4ca7e2 = _0x56b283.decode(_0xf0081c, this.encoding);
            _0x4ff475(null, {
              status: _0x1317eb,
              statusCode: _0xa90fdd,
              headers: _0x2a2f5f,
              rawBody: _0xf0081c,
              body: _0x4ca7e2
            }, _0x4ca7e2);
          }, _0x405fb9 => {
            const {
              message: _0x45c532,
              response: _0x11a675
            } = _0x405fb9;
            _0x4ff475(_0x45c532, _0x11a675, _0x11a675 && _0x56b283.decode(_0x11a675.rawBody, this.encoding));
          });
      }
    }
    time(_0x2305f9, _0x4802b9 = null) {
      const _0x4654f1 = _0x4802b9 ? new Date(_0x4802b9) : new Date();
      let _0x2876a5 = {
        "M+": _0x4654f1.getMonth() + 1,
        "d+": _0x4654f1.getDate(),
        "H+": _0x4654f1.getHours(),
        "m+": _0x4654f1.getMinutes(),
        "s+": _0x4654f1.getSeconds(),
        "q+": Math.floor((_0x4654f1.getMonth() + 3) / 3),
        S: _0x4654f1.getMilliseconds()
      };
      /(y+)/.test(_0x2305f9) && (_0x2305f9 = _0x2305f9.replace(RegExp.$1, (_0x4654f1.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x6db11d in _0x2876a5) new RegExp("(" + _0x6db11d + ")").test(_0x2305f9) && (_0x2305f9 = _0x2305f9.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2876a5[_0x6db11d] : ("00" + _0x2876a5[_0x6db11d]).substr(("" + _0x2876a5[_0x6db11d]).length)));
      return _0x2305f9;
    }
    queryStr(_0x4d7102) {
      let _0x511fac = "";
      for (const _0x3316d5 in _0x4d7102) {
        let _0x4654dd = _0x4d7102[_0x3316d5];
        null != _0x4654dd && "" !== _0x4654dd && ("object" == typeof _0x4654dd && (_0x4654dd = JSON.stringify(_0x4654dd)), _0x511fac += _0x3316d5 + "=" + _0x4654dd + "&");
      }
      _0x511fac = _0x511fac.substring(0, _0x511fac.length - 1);
      return _0x511fac;
    }
    msg(_0x3927cb = _0x1547fb, _0xee21e5 = "", _0x3967c8 = "", _0x357a3e) {
      const _0x15675a = _0x1cb529 => {
        switch (typeof _0x1cb529) {
          case void 0:
            return _0x1cb529;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: _0x1cb529
                };
              case "Loon":
              case "Shadowrocket":
                return _0x1cb529;
              case "Quantumult X":
                return {
                  "open-url": _0x1cb529
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
                  let _0x6b4f1e = _0x1cb529.url || _0x1cb529.openUrl || _0x1cb529["open-url"];
                  return {
                    url: _0x6b4f1e
                  };
                }
              case "Loon":
                {
                  let _0x370111 = _0x1cb529.openUrl || _0x1cb529.url || _0x1cb529["open-url"],
                    _0x38672b = _0x1cb529.mediaUrl || _0x1cb529["media-url"];
                  return {
                    openUrl: _0x370111,
                    mediaUrl: _0x38672b
                  };
                }
              case "Quantumult X":
                {
                  let _0x481317 = _0x1cb529["open-url"] || _0x1cb529.url || _0x1cb529.openUrl,
                    _0xd1d810 = _0x1cb529["media-url"] || _0x1cb529.mediaUrl,
                    _0x4ab99f = _0x1cb529["update-pasteboard"] || _0x1cb529.updatePasteboard;
                  return {
                    "open-url": _0x481317,
                    "media-url": _0xd1d810,
                    "update-pasteboard": _0x4ab99f
                  };
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
            $notification.post(_0x3927cb, _0xee21e5, _0x3967c8, _0x15675a(_0x357a3e));
            break;
          case "Quantumult X":
            $notify(_0x3927cb, _0xee21e5, _0x3967c8, _0x15675a(_0x357a3e));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let _0x3fe18c = ["", "==============📣系统通知📣=============="];
        _0x3fe18c.push(_0x3927cb);
        _0xee21e5 && _0x3fe18c.push(_0xee21e5);
        _0x3967c8 && _0x3fe18c.push(_0x3967c8);
        console.log(_0x3fe18c.join("\n"));
        this.logs = this.logs.concat(_0x3fe18c);
      }
    }
    log(..._0x267192) {
      _0x267192.length > 0 && (this.logs = [...this.logs, ..._0x267192]);
      console.log(_0x267192.join(this.logSeparator));
    }
    logErr(_0x5abec8, _0x3d7b39) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x5abec8);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x5abec8.stack);
      }
    }
    wait(_0x5e889d) {
      return new Promise(_0x1a9696 => setTimeout(_0x1a9696, _0x5e889d));
    }
    done(_0x3a48a1 = {}) {
      const _0x4ea963 = new Date().getTime(),
        _0x473bc3 = (_0x4ea963 - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x473bc3 + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x3a48a1);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x1547fb, _0x107d1c);
}