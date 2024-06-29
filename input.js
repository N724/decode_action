//Sat Jun 29 2024 10:47:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("晓晓优选"),
  ckName = "xxyx_data";
$.appid = "";
const Notify = 1,
  notify = $.isNode() ? require("./sendNotify") : "";
let envSplitor = ["@"];
var userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "";
let userList = [],
  userIdx = 0,
  userCount = 0;
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.notifyList = [];
$.notifyMsg = [];
$.codeServer = ($.isNode() ? process.env.codeServer_address : $.getdata("@codeServer.address")) || "";
$.codeOpen = ($.isNode() ? process.env.codeServer_open : $.getdata("@codeServer.open")) || "false";
$.wxCode = $.codeOpen != "false" && $.codeServer && $.appid;
async function main() {
  try {
    await getNotice();
    $.log("\n================== 任务 ==================\n");
    for (let _0x23c860 of userList) {
      console.log("🔷账号" + _0x23c860.index + " >> Start work");
      console.log("随机延迟" + _0x23c860.getRandomTime() + "ms");
      let _0x1638c2 = await _0x23c860.getUserEnergy();
      if (_0x23c860.ckStatus) {
        await _0x23c860.signin();
        let _0x18f577 = await _0x23c860.getTaskList();
        _0x18f577 = _0x18f577.filter(_0x518878 => _0x518878.isCompleted == 0);
        for (let _0x58cec7 of _0x18f577) {
          for (let _0x358941 = 0; _0x358941 < _0x58cec7?.["dailyCount"]; _0x358941++) {
            await _0x23c860.completeTask(_0x58cec7?.["taskId"]);
            $.log(_0x58cec7?.["taskName"] + ":调用成功!");
          }
        }
        let _0x3029a8 = await _0x23c860.getUserEnergy(),
          _0x4a2821 = await _0x23c860.getUserInfo();
        $.title = "「" + _0x4a2821?.["nick"] + "」本次运行共获得" + (_0x3029a8 - _0x1638c2) + "能量";
        _0x18f577 = await _0x23c860.getTaskList();
        _0x18f577.map(_0x5e1dff => DoubleLog(_0x5e1dff.taskName + ":" + (_0x5e1dff.isCompleted == 1 ? "已完成" : "未完成")));
      } else {
        $.notifyMsg.push("❌账号" + _0x23c860.index + " >> Check ck error!");
      }
      $.notifyList.push({
        id: _0x23c860.index,
        avatar: _0x23c860.avatar,
        message: $.notifyMsg
      });
      $.notifyMsg = [];
    }
  } catch (_0x5db4b7) {
    $.log("❌main run error => " + _0x5db4b7);
  }
}
class UserInfo {
  constructor(_0x27213e) {
    this.index = ++userIdx;
    this.token = _0x27213e.token || _0x27213e;
    this.userId = _0x27213e.userId;
    this.userName = _0x27213e.userName;
    this.avatar = _0x27213e.avatar;
    this.ckStatus = true;
    this.host = "https://xxyx-client-api.xiaoxiaoyouxuan.com";
    this.baseUrl = "";
    this.headers = {
      "xx-platform": "ios",
      Host: "xxyx-client-api.xiaoxiaoyouxuan.com",
      "User-Agent": "XiaoXiaoYouXuan/20127 CFNetwork/1331.0.7 Darwin/21.4.0",
      "xx-version": "20127",
      "xx-token": this.token
    };
    this.getRandomTime = () => randomInt(1000, 3000);
    this.fetch = async _0xda01b7 => {
      try {
        if (typeof _0xda01b7 === "string") {
          _0xda01b7 = {
            url: _0xda01b7
          };
        }
        if (_0xda01b7?.["url"]["startsWith"]("/")) {
          _0xda01b7.url = this.host + _0xda01b7.url;
        }
        const _0x18874b = {
          ..._0xda01b7,
          headers: _0xda01b7.headers || this.headers,
          url: _0xda01b7.url || this.baseUrl
        };
        const _0x15b9df = await Request(_0x18874b);
        debug(_0x15b9df, _0xda01b7?.["url"]?.["replace"](/\/+$/, "")["substring"](_0xda01b7?.["url"]?.["lastIndexOf"]("/") + 1));
        if (_0x15b9df?.["code"] == 401) {
          throw new Error("用户需要去登录");
        }
        return _0x15b9df;
      } catch (_0x11c343) {
        this.ckStatus = false;
        $.log("❌请求发起失败！" + _0x11c343);
      }
    };
  }
  async signin() {
    try {
      const _0x516f33 = {
        url: "/client/energy/mall/signIn",
        dataType: "json",
        body: "{\"platform\":\"ios\"}"
      };
      return await this.fetch(_0x516f33);
    } catch (_0x49c2bc) {
      console.log("❌任务失败！原因为:" + _0x49c2bc);
    }
  }
  async getTaskList() {
    try {
      let _0x31825b = await this.fetch("/client/energy/mall/getTaskList?platform=ios"),
        _0xdfac7a = _0x31825b?.["data"]["filter"](_0x763ea1 => _0x763ea1.taskName.match(/每日签到|分享海报|观看视频/));
      return _0xdfac7a;
    } catch (_0x37dd6b) {
      console.log("❌任务失败！原因为:" + _0x37dd6b);
    }
  }
  async completeTask(_0x204464) {
    try {
      const _0x5bdae6 = {
        url: "/client/energy/mall/completeTask/" + _0x204464,
        dataType: "json",
        body: "{\"taskId\":" + _0x204464 + ",\"platform\":\"ios\"}"
      };
      return await this.fetch(_0x5bdae6);
    } catch (_0x464519) {
      console.log("❌任务失败！原因为:" + _0x464519);
    }
  }
  async getUserEnergy() {
    try {
      let _0x5c9714 = await this.fetch("/client/energy/mall/getUserEnergy?platform=ios");
      return _0x5c9714?.["data"]?.["energy"];
    } catch (_0x1cf0fa) {
      console.log("❌任务失败！原因为:" + _0x1cf0fa);
    }
  }
  async getUserInfo() {
    try {
      let _0x15e6ea = await this.fetch("/my?platform=ios");
      this.avatar = _0x15e6ea?.["data"]?.["avatar"];
      return _0x15e6ea?.["data"];
    } catch (_0x51a20b) {
      console.log("❌任务失败！原因为:" + _0x51a20b);
    }
  }
}
async function getCookie() {
  if ($request && $request.method === "OPTIONS") {
    return;
  }
  const _0x5b67b3 = ObjectKeys2LowerCase($request.headers),
    _0x1c475c = $.toObj($response.body);
  if (!(_0x1c475c && _0x5b67b3["xx-token"])) {
    $.msg($.name, "❌获取token失败!", "");
    return;
  }
  const {
      avatar: _0x4ab600,
      nick: _0x49cd14,
      mobile: _0x2b4b0a
    } = _0x1c475c?.["data"],
    _0x4b0a6f = {
      userId: _0x2b4b0a,
      avatar: _0x4ab600,
      token: _0x5b67b3["xx-token"],
      userName: _0x49cd14
    };
  userCookie = userCookie ? JSON.parse(userCookie) : [];
  const _0x10b511 = userCookie.findIndex(_0x10639c => _0x10639c.userId == _0x4b0a6f.userId);
  userCookie[_0x10b511] ? userCookie[_0x10b511] = _0x4b0a6f : userCookie.push(_0x4b0a6f);
  $.setjson(userCookie, ckName);
  $.msg($.name, "🎉" + _0x4b0a6f.userName + "更新token成功!", "");
}
async function loadModule() {
  try {
    $.SakuraUtils = await loadSakuraUtils();
    return $.SakuraUtils ? true : false;
  } catch (_0x4d390c) {
    throw new Error("❌loadModule run error => " + _0x4d390c);
  }
}
async function getWxToken(_0x411665) {
  try {
    const _0x479aed = {
      url: "https://ulp.michelin.com.cn/bff/wechat/login/" + _0x411665,
      dataType: "json",
      headers: {}
    };
    _0x479aed.headers.Host = "ulp.michelin.com.cn";
    _0x479aed.headers["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f37) NetType/WIFI Language/zh_CN";
    _0x479aed.headers.Referer = "https://servicewechat.com/wx14413dafd16b9540/130/page-frame.html";
    let _0x5e71ff = await Request(_0x479aed),
      _0x43b567 = "Bearer " + _0x5e71ff?.["data"]?.["token"]?.["access_token"];
    return _0x43b567;
  } catch (_0x27cb3a) {
    $.log("❌getWxToken run error => " + _0x27cb3a);
  }
}
async function checkCodeServer() {
  try {
    $.codeFuc = ($.isNode() ? process.env.codeServer_fun : $.getdata("@codeServer.fun")) || "";
    let _0x23abfc = $.codeFuc ? (eval($.codeFuc), await WxCode($.appid)) : (await Request({
      url: $.codeServer + "/?wxappid=" + $.appid
    }))?.["split"]("|") || [];
    _0x23abfc = _0x23abfc.filter(_0x1cb843 => _0x1cb843.toString().length === 32);
    debug(_0x23abfc);
    !_0x23abfc.length ? $.log("❌获取code授权失败！请检查服务器运行是否正常 => 尝试读取数据持久化 ") : $.log("✅获取code授权成功！当前code数量为" + _0x23abfc.length);
    let _0x56a112 = await Promise.all(_0x23abfc.map(async _0x30c29c => {
      const _0x18dbf4 = await getWxToken(_0x30c29c),
        _0x555604 = {
          token: _0x18dbf4
        };
      return _0x555604;
    }));
    _0x56a112 = _0x56a112.filter(_0x22693b => Object.keys(_0x22693b).length !== 0);
    return _0x56a112;
  } catch (_0x2b3eb0) {
    $.log("❌checkCodeServer run error => " + _0x2b3eb0);
  }
}
async function checkEnv() {
  try {
    let _0x554a64 = [];
    if ($.wxCode) {
      _0x554a64 = (await checkCodeServer()) || [];
    } else {
      if (!userCookie || !userCookie.length) {
        console.log("未找到CK");
        return;
      }
    }
    if (!_0x554a64.length) {
      const _0x4a6818 = envSplitor.find(_0x4965cc => userCookie.includes(_0x4965cc)) || envSplitor[0];
      userCookie = $.toObj(userCookie) || userCookie.split(_0x4a6818);
      _0x554a64 = userCookie;
    }
    userList.push(..._0x554a64.map(_0x34ed4a => new UserInfo(_0x34ed4a)).filter(Boolean));
    userCount = userList.length;
    console.log("共找到" + userCount + "个账号");
    return true;
  } catch (_0x5b0d10) {
    throw new Error("❌checkEnv run error => " + _0x5b0d10);
  }
}
async function Request(_0x2880b1) {
  if (typeof _0x2880b1 === "string") {
    _0x2880b1 = {
      url: _0x2880b1
    };
  }
  try {
    if (!_0x2880b1?.["url"]) {
      throw new Error("[发送请求] 缺少 url 参数");
    }
    let {
      url: _0x237507,
      type: _0x8108ca,
      headers = {},
      body: _0x21041c,
      params: _0x50c5e8,
      dataType = "form",
      deviceType = "mobile",
      responseType = "data"
    } = _0x2880b1;
    const _0x21b121 = _0x8108ca ? _0x8108ca?.["toLowerCase"]() : "body" in _0x2880b1 ? "post" : "get",
      _0x5925b3 = _0x237507.concat(_0x21b121 === "post" ? "?" + $.SakuraUtils.JsonToUrl(_0x50c5e8) : ""),
      _0x98c3b = _0x2880b1.timeout ? $.isSurge() ? _0x2880b1.timeout / 1000 : _0x2880b1.timeout : 10000;
    headers["User-Agent"] ||= headers["User-Agent"] = deviceType === "pc" ? "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299" : "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1";
    if (dataType === "json") {
      headers["Content-Type"] = "application/json;charset=UTF-8";
    }
    const _0xc76f78 = _0x21b121 === "post" && _0x21041c ? _0x2880b1.dataType === "form" && typeof _0x21041c === "object" ? $.SakuraUtils.JsonToUrl(_0x21041c) : _0x21041c : "",
      _0x189fa9 = {
        body: _0xc76f78
      };
    const _0x586edb = {
        url: _0x5925b3,
        headers: headers,
        ...(_0x21b121 === "post" && _0x189fa9),
        ...(_0x21b121 === "get" && _0x50c5e8 && {
          params: _0x50c5e8
        })
      },
      _0x27a0d4 = $.http[_0x21b121.toLowerCase()](_0x586edb).then(_0x2a3e1c => responseType == "data" ? $.toObj(_0x2a3e1c.body) || _0x2a3e1c.body : $.toObj(_0x2a3e1c) || _0x2a3e1c).catch(_0x44392d => $.log("❌请求发起失败！原因为：" + _0x44392d));
    return Promise.race([new Promise((_0x170069, _0x43b96c) => setTimeout(() => _0x43b96c("当前请求已超时"), _0x98c3b)), _0x27a0d4]);
  } catch (_0x156381) {
    console.log("❌请求发起失败！原因为：" + _0x156381);
  }
}
function randomInt(_0x4dcd69, _0x163edf) {
  return Math.round(Math.random() * (_0x163edf - _0x4dcd69) + _0x4dcd69);
}
function DoubleLog(_0xb69351) {
  if (_0xb69351 && $.isNode()) {
    console.log("" + _0xb69351);
    $.notifyMsg.push("" + _0xb69351);
  } else {
    _0xb69351 && (console.log("" + _0xb69351), $.notifyMsg.push("" + _0xb69351));
  }
}
function debug(_0x104fda, _0x44284c = "debug") {
  $.is_debug === "true" && ($.log("\n-----------" + _0x44284c + "------------\n"), $.log(typeof _0x104fda == "string" ? _0x104fda : $.toStr(_0x104fda) || "debug error => t=" + _0x104fda), $.log("\n-----------" + _0x44284c + "------------\n"));
}
function getQueries(_0xbe7974) {
  const [, _0x53e657] = _0xbe7974.split("?");
  return _0x53e657 ? _0x53e657.split("&").reduce((_0x3ef4c8, _0x51b591) => {
    var [_0x33468f, _0x51b591] = _0x51b591.split("=");
    _0x3ef4c8[_0x33468f] = _0x51b591;
    return _0x3ef4c8;
  }, {}) : {};
}
async function getNotice() {
  const _0x513c13 = ["https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/notice.json", "https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/tip.json"];
  try {
    const _0x4d2c38 = await Promise.all(_0x513c13.map(_0x4e76eb => Request(_0x4e76eb)));
    _0x4d2c38.map(_0x51aab7 => console.log(_0x51aab7?.["notice"] || "获取通知失败"));
  } catch (_0x202dbb) {
    console.log("❌获取通知时发生错误：" + _0x202dbb);
  }
}
async function SendMsgList(_0x423525) {
  await Promise.allSettled(_0x423525?.["map"](_0x2fd74c => SendMsg(_0x2fd74c.message.join("\n"), _0x2fd74c.avatar)));
}
async function SendMsg(_0x37ebab, _0x2866c7) {
  const _0x1e6a2f = {
    "media-url": _0x2866c7
  };
  _0x37ebab && (0 < Notify ? $.isNode() ? await notify.sendNotify($.name, _0x37ebab) : $.msg($.name, $.title || "", _0x37ebab, _0x1e6a2f) : console.log(_0x37ebab));
}
function ObjectKeys2LowerCase(_0x4fbf9e) {
  _0x4fbf9e = Object.fromEntries(Object.entries(_0x4fbf9e).map(([_0x2c57ed, _0x19f062]) => [_0x2c57ed.toLowerCase(), _0x19f062]));
  return new Proxy(_0x4fbf9e, {
    get: function (_0x4685dc, _0x2dff8b, _0x7d4971) {
      return Reflect.get(_0x4685dc, _0x2dff8b.toLowerCase(), _0x7d4971);
    },
    set: function (_0x3cdaf3, _0x5d8de2, _0x1380cf, _0x562eba) {
      return Reflect.set(_0x3cdaf3, _0x5d8de2.toLowerCase(), _0x1380cf, _0x562eba);
    }
  });
}
async function loadSakuraUtils() {
  let _0x5970f4 = ($.isNode() ? process.env.SakuraUtil_code : $.getdata("SakuraUtil_code")) || "";
  if (_0x5970f4 && Object.keys(_0x5970f4).length) {
    console.log("✅" + $.name + ":缓存中存在SakuraUtil代码,跳过下载");
    eval(_0x5970f4);
    return creatUtils();
  }
  console.log("🚀" + $.name + ":开始下载SakuraUtil代码");
  return new Promise(async _0x52bc58 => {
    $.getScript("https://cdn.jsdelivr.net/gh/Sliverkiss/QuantumultX@main/Utils/SakuraUtil.js").then(_0x31adee => {
      $.setdata(_0x31adee, "SakuraUtil_code");
      eval(_0x31adee);
      const _0x4ade8f = creatUtils();
      console.log("✅SakuraUtil加载成功,请继续");
      _0x52bc58(_0x4ade8f);
    });
  });
}
!(async () => {
  if (typeof $request != "undefined") {
    await getCookie();
  } else {
    if (!(await loadModule())) {
      throw new Error("❌加载模块失败，请检查模块路径是否正常");
    }
    if (!(await checkEnv())) {
      throw new Error("❌未检测到ck，请添加环境变量");
    }
    if (userList.length > 0) {
      await main();
    }
  }
})().catch(_0x2cf5aa => $.notifyMsg.push(_0x2cf5aa.message || _0x2cf5aa)).finally(async () => {
  await SendMsgList($.notifyList);
  const _0x24ee5a = {
    ok: 1
  };
  $.done(_0x24ee5a);
});
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
      return new Promise((e, a) => {
        s.call(this, t, (t, s, r) => {
          t ? a(t) : e(s);
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
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const a = this.getdata(t);
      if (a) {
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
        }, (t, s, a) => e(a));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        a = a ? a.replace(/\n/g, "").trim() : a;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [i, o] = a.split("@"),
          n = {
            url: `http://${o}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": i,
              Accept: "*/*"
            },
            timeout: r
          };
        this.post(n, (t, e, a) => s(a));
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
          a = !s && this.fs.existsSync(e);
        if (!s && !a) {
          return {};
        }
        {
          const a = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(a));
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
          a = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const a = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of a) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, a, "") : e;
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
        const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e),
          i = this.getval(a),
          o = a ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), a);
        } catch (e) {
          const i = {};
          this.lodash_set(i, r, t);
          s = this.setval(JSON.stringify(i), a);
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
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
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
                statusCode: a,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = s.decode(o, this.encoding);
            e(null, {
              status: a,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: a,
              response: r
            } = t;
            e(a, r, r && s.decode(r.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
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
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: r,
            ...i
          } = t;
          this.got[s](r, i).then(t => {
            const {
                statusCode: s,
                statusCode: r,
                headers: i,
                rawBody: o
              } = t,
              n = a.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: r
            } = t;
            e(s, r, r && a.decode(r.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let a = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let a = t[s];
        null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", a = "", r) {
      const i = t => {
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
                  let e = t.url || t.openUrl || t["open-url"];
                  return {
                    url: e
                  };
                }
              case "Loon":
                {
                  let e = t.openUrl || t.url || t["open-url"],
                    s = t.mediaUrl || t["media-url"];
                  return {
                    openUrl: e,
                    mediaUrl: s
                  };
                }
              case "Quantumult X":
                {
                  let e = t["open-url"] || t.url || t.openUrl,
                    s = t["media-url"] || t.mediaUrl,
                    a = t["update-pasteboard"] || t.updatePasteboard;
                  return {
                    "open-url": e,
                    "media-url": s,
                    "update-pasteboard": a
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
            $notification.post(e, s, a, i(r));
            break;
          case "Quantumult X":
            $notify(e, s, a, i(r));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        a && t.push(a);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) {
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
