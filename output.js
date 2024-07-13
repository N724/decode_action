//Sat Jul 13 2024 19:11:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("胖乖生活"),
  ckName = "pgsh_data";
const userCookie = $.toObj($.isNode() ? process.env[ckName] : $.getdata(ckName)) || [];
$.userIdx = 0;
$.userList = [];
$.notifyMsg = [];
$.succCount = 0;
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
async function main() {
  for (let _0x393d20 of $.userList) {
    try {
      await _0x393d20.login();
      const {
        integral: _0x4acc7a
      } = (await _0x393d20.getBalance()) ?? {};
      await _0x393d20.signin();
      if (_0x393d20.ckStatus) {
        let _0x285a69 = await _0x393d20.getTaskList();
        _0x285a69 = _0x285a69.filter(_0x2202f9 => _0x2202f9.completedStatus == 0);
        for (let _0x1e8d62 of _0x285a69) {
          for (let _0x2f4857 = 0; _0x2f4857 < _0x1e8d62?.["dailyTaskLimit"]; _0x2f4857++) {
            $.log("[" + (_0x393d20.userName || _0x393d20.index) + "][INFO] 执行" + _0x1e8d62.title + "任务...");
            $.log("[" + (_0x393d20.userName || _0x393d20.index) + "][INFO] 等待3秒...");
            await $.wait(3000);
            let _0xa120de = await _0x393d20.completed(_0x1e8d62?.["taskCode"]);
            if (!_0xa120de) {
              break;
            }
          }
        }
        for (let _0x54d692 = 1; _0x54d692 <= 8; _0x54d692++) {
          $.log("[" + (_0x393d20.userName || _0x393d20.index) + "][INFO] 执行隐藏广告任务...");
          $.log("[" + (_0x393d20.userName || _0x393d20.index) + "][INFO] 等待3秒...");
          await $.wait(3000);
          let _0x3675d2 = await _0x393d20.completed("15eb1357-b2d9-442f-a19f-dbd9cdc996cb");
          if (!_0x3675d2) {
            break;
          }
        }
        let _0x39fa80 = ["xxWOKgkT5o0GQ79yhJX", "J2wXQrquMbOKQvKguy", "DyzXPW5UPpyymgjDS5", "oJgPBY0cBJn0aPopCR", "Qj8X4QVtwRMdovmzHKn"];
        for (let _0x292fcb of _0x39fa80) {
          let _0x7dc347 = await _0x393d20.rewardIntegral(_0x292fcb);
          if (!_0x7dc347) {
            break;
          }
        }
        let _0x46135d = (await _0x393d20.ladderTaskForDay()) ?? [];
        for (let _0x3978a7 of _0x46135d) {
          await _0x393d20.applyLadderReward(_0x3978a7.rewardCode);
        }
        let {
          taskCode: _0x1173bd,
          taskName: _0x45e1f6
        } = await _0x393d20.queryMarkTaskByStartTime();
        await _0x393d20.doMarkTask(_0x1173bd);
        await _0x393d20.markTaskReward(_0x1173bd);
        await _0x393d20.doApplyTask(_0x1173bd);
        const {
          integral: _0x209533,
          integralAmount: _0x56fca1
        } = (await _0x393d20.getBalance()) ?? {};
        DoubleLog("[" + (_0x393d20.userName || _0x393d20.index) + "] 本次获得" + (_0x209533 - 0 - _0x4acc7a) + "积分, 余额 ¥" + _0x56fca1);
        $.succCount++;
      } else {
        DoubleLog("⛔️ 「" + (_0x393d20.userName ?? "账号" + index) + "」签到失败, 用户需要去登录");
      }
    } catch (_0x5896ea) {
      throw _0x5896ea;
    }
  }
  $.title = "共" + $.userList.length + "个账号,成功" + $.succCount + "个,失败" + ($.userList.length - 0 - $.succCount) + "个";
  await sendMsg($.notifyMsg.join("\n"), {
    $media: $.avatar
  });
}
class UserInfo {
  constructor(_0x2ef0d1) {
    this.index = ++$.userIdx;
    this.token = "892b3156a5ffe5f0c60df3d5738a7661" || _0x2ef0d1.token || _0x2ef0d1;
    this.userId = "" || _0x2ef0d1.userId;
    this.userName = _0x2ef0d1.userName;
    this.avatar = _0x2ef0d1.avatar;
    this.ckStatus = true;
    this.baseUrl = "https://mmembership.lenovo.com.cn";
    this.headers = {
      "User-Agent": "okhttp/3.14.9",
      Accept: "application/json, text/plain, */*",
      Version: "1.52.0",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: this.token,
      channel: "android_app"
    };
    this.fetch = async _0x5d95d => {
      try {
        if (typeof _0x5d95d === "string") {
          _0x5d95d = {
            url: _0x5d95d
          };
        }
        let {
          sign: _0x23a14c,
          timestamp: _0x4e4376
        } = getSign(_0x5d95d.url, this.token);
        this.headers.sign = _0x23a14c;
        this.headers.timestamp = _0x4e4376;
        if (_0x5d95d?.["url"]?.["startsWith"]("/") || _0x5d95d?.["url"]?.["startsWith"](":")) {
          _0x5d95d.url = this.baseUrl + _0x5d95d.url;
        }
        const _0x382fd3 = {
          ..._0x5d95d,
          headers: _0x5d95d.headers || this.headers,
          url: _0x5d95d.url
        };
        const _0x5554e8 = await Request(_0x382fd3);
        debug(_0x5554e8, _0x5d95d?.["url"]?.["replace"](/\/+$/, "")["substring"](_0x5d95d?.["url"]?.["lastIndexOf"]("/") + 1));
        return _0x5554e8;
      } catch (_0x2ca059) {
        this.ckStatus = false;
        $.log("[" + (this.userName || this.index) + "][ERROR] 请求发起失败!" + _0x2ca059 + "\n");
      }
    };
  }
  async login() {
    try {
      const _0x13de71 = {
        unionId: this.userId
      };
      const _0x358f8a = {
        url: "https://userapi.qiekj.com/wechat/unionId/login",
        type: "post",
        body: _0x13de71
      };
      let _0x5ad709 = await this.fetch(_0x358f8a);
      $.log("[" + (this.userName || this.index) + "][INFO] 用户登录: " + _0x5ad709?.["msg"] + "\n");
      this.token = _0x5ad709?.["data"]?.["token"];
    } catch (_0x27d4f2) {
      console.log("❌任务失败！原因为:" + _0x27d4f2);
    }
  }
  async getBalance() {
    try {
      const _0x53ee58 = {
        token: this.token
      };
      const _0x21fc25 = {
        url: "https://userapi.qiekj.com/user/balance",
        type: "post",
        body: _0x53ee58
      };
      let _0x2190e7 = await this.fetch(_0x21fc25);
      return _0x2190e7?.["data"];
    } catch (_0x1c96a5) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x1c96a5 + "\n");
    }
  }
  async signin() {
    try {
      const _0x570157 = {
        url: "https://userapi.qiekj.com/signin/doUserSignIn",
        type: "post",
        body: {}
      };
      _0x570157.body.activityId = "600001";
      _0x570157.body.token = this.token;
      let _0x52efad = await this.fetch(_0x570157);
      if (_0x52efad?.["code"] != 0 && _0x52efad?.["code"] != 33001) {
        throw new Error(_0x52efad?.["msg"] || "用户签到失败!原因未知");
      }
      $.log("[" + (this.userName || this.index) + "][INFO] " + _0x52efad?.["msg"] + "\n");
    } catch (_0x40bc40) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x40bc40 + "\n");
    }
  }
  async getTaskList() {
    try {
      const _0x2c8805 = {
        token: this.token
      };
      const _0x39fa40 = {
        url: "https://userapi.qiekj.com/task/list",
        body: _0x2c8805
      };
      let _0x42838e = await this.fetch(_0x39fa40);
      return _0x42838e?.["data"]?.["items"];
    } catch (_0x1bf427) {
      console.log("❌任务失败！原因为:" + _0x1bf427);
    }
  }
  async completed(_0x419c36) {
    try {
      const _0x53619f = {
        taskCode: _0x419c36,
        token: this.token
      };
      const _0x29130c = {
        url: "https://userapi.qiekj.com/task/completed",
        body: _0x53619f
      };
      let _0x525080 = await this.fetch(_0x29130c);
      $.log("[" + (this.userName || this.index) + "][INFO] 结果: " + _0x525080?.["msg"]);
      return _0x525080?.["data"];
    } catch (_0x3804b2) {
      console.log("❌任务失败！原因为:" + _0x3804b2);
    }
  }
  async ladderTaskForDay() {
    try {
      const _0x39ee70 = {
        token: this.token
      };
      const _0x222a44 = {
        url: "https://userapi.qiekj.com/ladderTask/ladderTaskForDay",
        params: _0x39ee70
      };
      let _0xf40219 = await this.fetch(_0x222a44);
      return _0xf40219?.["data"]?.["ladderRewardList"]?.["filter"](_0x2bc5c4 => _0x2bc5c4.isApplyReward == 1);
    } catch (_0x24ae13) {
      console.log("❌任务失败！原因为:" + _0x24ae13);
    }
  }
  async applyLadderReward(_0x5327af) {
    try {
      const _0x538e0b = {
        rewardCode: _0x5327af,
        token: this.token
      };
      const _0x288506 = {
        url: "https://userapi.qiekj.com/ladderTask/applyLadderReward",
        body: _0x538e0b
      };
      let _0x1eb501 = await this.fetch(_0x288506);
      $.log("[" + (this.userName || this.index) + "][INFO] 领取阶梯奖励: " + _0x1eb501?.["msg"]);
    } catch (_0x5a3bf1) {
      console.log("❌任务失败！原因为:" + _0x5a3bf1);
    }
  }
  async rewardIntegral(_0x3c6e26) {
    try {
      const _0x4ef70c = {
        url: "https://userapi.qiekj.com/integralUmp/rewardIntegral",
        body: "itemCode=" + _0x3c6e26 + "&token=" + this.token
      };
      let _0x456438 = await this.fetch(_0x4ef70c);
      $.log("[" + (this.userName || this.index) + "][INFO] 浏览商品: 积分+" + (_0x456438?.["data"]?.["rewardIntegral"] || 0));
      return _0x456438?.["data"]?.["rewardIntegral"];
    } catch (_0x1868b7) {
      console.log("❌任务失败！原因为:" + _0x1868b7);
    }
  }
  async queryMarkTaskByStartTime() {
    try {
      const _0x524c1c = new Date().toISOString().slice(0, 19).replace("T", " "),
        _0x230952 = {
          startTime: _0x524c1c,
          token: this.token
        };
      const _0x1cf686 = {
        url: "https://userapi.qiekj.com/markActivity/queryMarkTaskByStartTime",
        body: _0x230952,
        type: "post"
      };
      let _0x11c025 = await this.fetch(_0x1cf686);
      $.log("[" + (this.userName || this.index) + "][INFO] 执行" + _0x11c025?.["data"]?.["taskName"]);
      return _0x11c025?.["data"];
    } catch (_0x36bcb2) {
      console.log("❌任务失败！原因为:" + _0x36bcb2);
    }
  }
  async doApplyTask(_0x43574a) {
    try {
      const _0x4893ec = {
        taskCode: _0x43574a,
        token: this.token
      };
      const _0x587799 = {
        url: "https://userapi.qiekj.com/markActivity/doApplyTask",
        body: _0x4893ec,
        type: "post"
      };
      let _0x9a091f = await this.fetch(_0x587799);
      $.log("[" + (this.userName || this.index) + "][INFO] 打卡报名: " + _0x9a091f.msg);
    } catch (_0x5556e5) {
      console.log("❌任务失败！原因为:" + _0x5556e5);
    }
  }
  async doMarkTask(_0x54ffed) {
    try {
      const _0x219f82 = {
        taskCode: _0x54ffed,
        token: this.token
      };
      const _0x3315fc = {
        url: "https://userapi.qiekj.com/markActivity/doMarkTask",
        body: _0x219f82,
        type: "post"
      };
      let _0x1fcc3c = await this.fetch(_0x3315fc);
      $.log("[" + (this.userName || this.index) + "][INFO] 瓜分积分: " + _0x1fcc3c.msg);
      return _0x1fcc3c?.["data"];
    } catch (_0x348373) {
      console.log("❌任务失败！原因为:" + _0x348373);
    }
  }
  async markTaskReward(_0x283b88) {
    try {
      const _0x1a6b4d = {
        taskCode: _0x283b88,
        token: this.token
      };
      const _0x28ea71 = {
        url: "https://userapi.qiekj.com/markActivity/markTaskReward",
        body: _0x1a6b4d,
        type: "post"
      };
      let _0xcc75d1 = await this.fetch(_0x28ea71);
      $.log("[" + (this.userName || this.index) + "][INFO] 瓜分奖励: " + (_0xcc75d1?.["data"] || _0xcc75d1.msg));
      return _0xcc75d1?.["data"];
    } catch (_0x173582) {
      console.log("❌任务失败！原因为:" + _0x173582);
    }
  }
}
async function getCookie() {
  try {
    if ($request && $request.method === "OPTIONS") {
      return;
    }
    const _0x2e0ef1 = $request.body ? $request.body.split("&").reduce((_0x244776, _0x45d05) => {
      var [_0x48cf7e, _0x45d05] = _0x45d05.split("=");
      _0x244776[_0x48cf7e] = _0x45d05;
      return _0x244776;
    }, {}) : {};
    if (!_0x2e0ef1) {
      throw new Error("获取token失败, 参数缺失");
    }
    const _0x27925d = {
      userId: _0x2e0ef1?.["unionId"],
      userName: _0x2e0ef1?.["nickname"]
    };
    const _0x5d1a37 = userCookie.findIndex(_0x25c098 => _0x25c098.userId == _0x27925d.userId);
    userCookie[_0x5d1a37] ? userCookie[_0x5d1a37] = _0x27925d : userCookie.push(_0x27925d);
    $.setjson(userCookie, ckName);
    $.msg($.name, "🎉账号[" + _0x27925d.userName + "]更新token成功!", "");
  } catch (_0x404e3f) {
    throw _0x404e3f;
  }
}
function getSign(_0x980db8, _0x22148e) {
  const _0x1b1e6a = String(Date.now());
  _0x980db8 = _0x3d01d9(_0x980db8);
  const _0x341b40 = "android_app",
    _0x364ccd = "xl8v4s/5qpBLvN+8CzFx7vVjy31NgXXcedU7G0QpOMM=",
    _0x18e496 = "1.52.0",
    _0x4f8ec3 = "appSecret=" + _0x364ccd + "&channel=" + _0x341b40 + "&timestamp=" + _0x1b1e6a + "&token=" + _0x22148e + "&version=" + _0x18e496 + "&" + _0x980db8,
    _0x2e68fd = $.CryptoJS.SHA256(_0x4f8ec3).toString($.CryptoJS.enc.Hex),
    _0x462aee = {
      sign: _0x2e68fd,
      timestamp: _0x1b1e6a
    };
  return _0x462aee;
  function _0x3d01d9(_0x29f0d0) {
    const _0x23c855 = _0x29f0d0.indexOf("https://") + "https://".length;
    const _0x583988 = _0x29f0d0.indexOf("/", _0x23c855);
    return _0x29f0d0.substring(_0x583988);
  }
}
async function loadCryptoJS() {
  let _0x556350 = ($.isNode() ? require("crypto-js") : $.getdata("CryptoJS_code")) || "";
  if ($.isNode()) {
    return _0x556350;
  }
  if (_0x556350 && Object.keys(_0x556350).length) {
    console.log("✅ " + $.name + ": 缓存中存在CryptoJS代码, 跳过下载");
    eval(_0x556350);
    return createCryptoJS();
  }
  console.log("🚀 " + $.name + ": 开始下载CryptoJS代码");
  return new Promise(async _0x11c29 => {
    $.getScript("https://cdn.jsdelivr.net/gh/Sliverkiss/QuantumultX@main/Utils/CryptoJS.min.js").then(_0x4f0fb0 => {
      $.setdata(_0x4f0fb0, "CryptoJS_code");
      eval(_0x4f0fb0);
      const _0x30fb45 = createCryptoJS();
      console.log("✅ CryptoJS加载成功, 请继续");
      _0x11c29(_0x30fb45);
    });
  });
}
!(async () => {
  try {
    typeof $request != "undefined" ? await getCookie() : ($.CryptoJS = await loadCryptoJS(), await checkEnv(), await main());
  } catch (_0x5bdedb) {
    throw _0x5bdedb;
  }
})().catch(_0x1a680a => {
  $.logErr(_0x1a680a);
  $.msg($.name, "⛔️ script run error!", _0x1a680a.message || _0x1a680a);
}).finally(async () => {
  const _0x29ed3e = {
    ok: 1
  };
  $.done(_0x29ed3e);
});