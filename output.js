//Thu Aug 01 2024 16:10:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "交汇点新闻";
VALY = ["jhdck"];
LOGS = 0;
CK = "";
var userList = [];
usid = 0;
class Bar {
  constructor(_0x5fd93c) {
    this.phone = _0x5fd93c.split("#")[0];
    this.password = _0x5fd93c.split("#")[1];
    this.log = true;
  }
  async login() {
    let _0x19e344 = await task("post", "https://japi.xhby.net/v4/api/login?mobile=" + this.phone + "&password=" + this.password, {});
    (_0x19e344.code = 200) ? (this.name = _0x19e344.data.user_info.nickName, this.token = _0x19e344.data.token.token, this.score = _0x19e344.data.user_info.scoreNow, this.log = true, console.log("【" + this.name + " 】登陆成功，现有积分【" + this.score + "】")) : this.log = false;
  }
  async invite() {}
  async tasklist() {
    let _0x2f0078 = await task("get", "https://japi.xhby.net/v4/api/have_signin?token=" + this.token, {});
    if (_0x2f0078.code == 200) {
      _0x2f0078.data.sign == 1 && console.log("【" + this.name + "】签到成功，请勿重复运行脚本");
      if (_0x2f0078.data.praise_count < _0x2f0078.data.praise_times) {
        for (let _0x314dde = _0x2f0078.data.praise_count; _0x314dde < _0x2f0078.data.praise_times; _0x314dde++) {
          await this.praise();
          await wait(10000);
        }
      } else {
        console.log("【" + this.name + "】点赞任务已完成，请勿重复运行脚本");
      }
      if (_0x2f0078.data.share_count < _0x2f0078.data.share_times) {
        for (let _0x107b20 = _0x2f0078.data.share_count; _0x107b20 < _0x2f0078.data.share_times; _0x107b20++) {
          await this.share();
          await wait(10000);
        }
      } else {
        console.log("【" + this.name + "】分享任务已完成，请勿重复运行脚本");
      }
    } else {
      console.log("【" + this.name + "】未成功获取到任务列表，请检查变量");
    }
  }
  async praise() {
    let _0x126f49 = await task("post", "https://japi.xhby.net/v4/api/praise/ONcb68dR4FMxAiK0?type=1&praise=1&token=" + this.token, {});
    _0x126f49.code == 200 ? console.log("【" + this.name + "】点赞成功") : console.log("【" + this.name + "】点赞 " + _0x126f49.msg);
  }
  async discuss() {
    let _0x5b47f2 = RT(2000, 57239375),
      _0x1f490e = await task("post", "https://japi.xhby.net/v4/api/article/LoEvrEeJDJ6gVzcI/comments?location=&content=" + _0x5b47f2 + "%E6%AF%8F%E6%AC%A1%E6%9D%A5%E4%BA%A4%E6%B1%87%E7%82%B9%E6%96%B0%E9%97%BB%E9%83%BD%E4%BC%9A%E6%9C%89%E6%96%B0%E7%9F%A5%E8%AF%86" + _0x5b47f2 + "&token=" + this.token + "&latitude=&longitude=", {});
    _0x1f490e.code == 400 ? console.log("【" + this.name + "】评论成功") : console.log("【" + this.name + "】评论 " + _0x1f490e.msg);
  }
  async share() {
    let _0x22f623 = await task("post", "https://japi.xhby.net/v4/api/share_score?id=LoEvrEeJDJ6gVzcI&shareOS=android&token=" + this.token, {});
    _0x22f623.code == 200 ? console.log("【" + this.name + "】分享成功") : console.log("【" + this.name + "】分享 " + _0x22f623.msg);
  }
}
!(async () => {
  console.log("蛋炒饭美食交流群：https://t.me/+xjTie4yvzm83OTI9");
  console.log(NAME);
  checkEnv();
  for (let _0x2f7ae2 of userList) {
    await _0x2f7ae2.login();
  }
  let _0x1b211b = userList.filter(_0x47de0f => _0x47de0f.log == true);
  if (_0x1b211b.length == 0) {
    console.log(NAME + " 您的cookie已失效");
    return;
  }
  for (let _0x1ab1a2 of _0x1b211b) {
    await _0x1ab1a2.invite();
    await _0x1ab1a2.tasklist();
  }
})().catch(_0x8b1829 => {
  console.log(_0x8b1829);
}).finally(() => {});
function RT(_0x5847d5, _0x47edee) {
  return Math.round(Math.random() * (_0x47edee - _0x5847d5) + _0x5847d5);
}
function times(_0x425f16) {
  if (_0x425f16 == 10) {
    let _0x1a8545 = Math.round(new Date().getTime() / 1000).toString();
    return _0x1a8545;
  } else {
    let _0x3649cb = new Date().getTime();
    return _0x3649cb;
  }
}
async function task(_0x44e3fc, _0x20fce6, _0x192505, _0x3c80d0) {
  _0x44e3fc == "delete" ? _0x44e3fc = _0x44e3fc.toUpperCase() : _0x44e3fc = _0x44e3fc;
  const _0x336057 = require("request");
  _0x44e3fc == "post" && (delete _0x192505["content-type"], delete _0x192505["Content-type"], delete _0x192505["content-Type"], safeGet(_0x3c80d0) ? _0x192505["Content-Type"] = "application/json;charset=UTF-8" : _0x192505["Content-Type"] = "application/x-www-form-urlencoded", _0x3c80d0 && (_0x192505["Content-Length"] = lengthInUtf8Bytes(_0x3c80d0)));
  _0x192505.Host = _0x20fce6.replace("//", "/").split("/")[1];
  if (_0x44e3fc.indexOf("T") < 0) {
    var _0x136c96 = {
      url: _0x20fce6,
      headers: _0x192505,
      body: _0x3c80d0
    };
  } else {
    var _0x136c96 = {
      url: _0x20fce6,
      headers: _0x192505,
      form: JSON.parse(_0x3c80d0)
    };
  }
  return new Promise(async _0x246b38 => {
    _0x336057[_0x44e3fc.toLowerCase()](_0x136c96, (_0x2bff0a, _0x19cf40, _0x2c4d11) => {
      try {
        LOGS == 1 && (console.log("==================请求=================="), console.log(_0x136c96), console.log("==================返回=================="), console.log(JSON.parse(_0x2c4d11)));
      } catch (_0x345d42) {} finally {
        !_0x2bff0a ? safeGet(_0x2c4d11) ? _0x2c4d11 = JSON.parse(_0x2c4d11) : _0x2c4d11 = _0x2c4d11 : _0x2c4d11 = _0x20fce6 + "   API请求失败，请检查网络重试\n" + _0x2bff0a;
        return _0x246b38(_0x2c4d11);
      }
    });
  });
}
function SJS(_0x7ecf8b) {
  _0x7ecf8b = _0x7ecf8b || 32;
  var _0x5dd92b = "1234567890",
    _0x5b985e = _0x5dd92b.length,
    _0x5dad5c = "";
  for (i = 0; i < _0x7ecf8b; i++) {
    _0x5dad5c += _0x5dd92b.charAt(Math.floor(Math.random() * _0x5b985e));
  }
  return _0x5dad5c;
}
function SJSxx(_0x445f02) {
  _0x445f02 = _0x445f02 || 32;
  var _0x13ab22 = "abcdefghijklmnopqrstuvwxyz1234567890",
    _0x1c7554 = _0x13ab22.length,
    _0x4c7666 = "";
  for (i = 0; i < _0x445f02; i++) {
    _0x4c7666 += _0x13ab22.charAt(Math.floor(Math.random() * _0x1c7554));
  }
  return _0x4c7666;
}
function safeGet(_0x15291c) {
  try {
    if (typeof JSON.parse(_0x15291c) == "object") {
      return true;
    }
  } catch (_0x30f747) {
    return false;
  }
}
function lengthInUtf8Bytes(_0x17a3dc) {
  let _0xf3a27a = encodeURIComponent(_0x17a3dc).match(/%[89ABab]/g);
  return _0x17a3dc.length + (_0xf3a27a ? _0xf3a27a.length : 0);
}
async function checkEnv() {
  let _0x36d557 = process.env[VALY] || CK,
    _0x1007a0 = 0;
  if (_0x36d557) {
    for (let _0x5850f0 of _0x36d557.split("\n").filter(_0x1b7426 => !!_0x1b7426)) {
      userList.push(new Bar(_0x5850f0));
    }
    _0x1007a0 = userList.length;
  } else {
    console.log("\n【" + NAME + "】：未填写变量: " + VALY);
  }
  console.log("共找到" + _0x1007a0 + "个账号");
  return userList;
}
function wait(_0x43c459) {
  return new Promise(_0x397e02 => setTimeout(_0x397e02, _0x43c459));
}
function stringToBase64(_0x293184) {
  var _0x1db11b = Buffer.from(_0x293184).toString("base64");
  return _0x1db11b;
}
function EncryptCrypto(_0x138c3f, _0x8753bf, _0x8774cb, _0x59d344, _0x1e2e38, _0x21fa53) {
  const _0x18dfcf = require("crypto-js"),
    _0x58f2b2 = _0x18dfcf.enc.Utf8.parse(_0x59d344),
    _0x8b4448 = _0x18dfcf.enc.Utf8.parse(_0x21fa53),
    _0xc5ba74 = _0x18dfcf.enc.Utf8.parse(_0x1e2e38),
    _0x2b3690 = _0x18dfcf[_0x138c3f].encrypt(_0x58f2b2, _0xc5ba74, {
      iv: _0x8b4448,
      mode: _0x18dfcf.mode[_0x8753bf],
      padding: _0x18dfcf.pad[_0x8774cb]
    });
  return _0x2b3690.toString();
}
function DecryptCrypto(_0xb741b1, _0x1a7d42, _0x2fdef6, _0x5e8570, _0xffe602, _0x21a87b) {
  const _0xbd39d1 = require("crypto-js"),
    _0x11ebbc = _0xbd39d1.enc.Utf8.parse(_0x21a87b),
    _0x1d68af = _0xbd39d1.enc.Utf8.parse(_0xffe602),
    _0x3b5a84 = _0xbd39d1[_0xb741b1].decrypt(_0x5e8570, _0x1d68af, {
      iv: _0x11ebbc,
      mode: _0xbd39d1.mode[_0x1a7d42],
      padding: _0xbd39d1.pad[_0x2fdef6]
    });
  return _0x3b5a84.toString(_0xbd39d1.enc.Utf8);
}
function RSA(_0x363828, _0x70ca3d) {
  const _0x3d3dd2 = require("node-rsa");
  let _0x26303f = new _0x3d3dd2("-----BEGIN PUBLIC KEY-----\n" + _0x70ca3d + "\n-----END PUBLIC KEY-----");
  _0x26303f.setOptions({
    encryptionScheme: "pkcs1"
  });
  return _0x26303f.encrypt(_0x363828, "base64", "utf8");
}
function SHA1_Encrypt(_0x57476a) {
  return CryptoJS.SHA1(_0x57476a).toString();
}
function SHA256(_0x4f3fe4) {
  const _0x1dd64e = 8,
    _0x10751a = 0;
  function _0xf9e88b(_0x2f6ffc, _0x4881ab) {
    const _0x53e39d = (65535 & _0x2f6ffc) + (65535 & _0x4881ab);
    return (_0x2f6ffc >> 16) + (_0x4881ab >> 16) + (_0x53e39d >> 16) << 16 | 65535 & _0x53e39d;
  }
  function _0x1224f6(_0x45414d, _0x20172f) {
    return _0x45414d >>> _0x20172f | _0x45414d << 32 - _0x20172f;
  }
  function _0x433b30(_0x208875, _0x35ba33) {
    return _0x208875 >>> _0x35ba33;
  }
  function _0x14204c(_0x3089c0, _0x57c897, _0x309e22) {
    return _0x3089c0 & _0x57c897 ^ ~_0x3089c0 & _0x309e22;
  }
  function _0xe84c28(_0x15f8f0, _0x135cd2, _0x1ac33d) {
    return _0x15f8f0 & _0x135cd2 ^ _0x15f8f0 & _0x1ac33d ^ _0x135cd2 & _0x1ac33d;
  }
  function _0x2d171b(_0x390c10) {
    return _0x1224f6(_0x390c10, 2) ^ _0x1224f6(_0x390c10, 13) ^ _0x1224f6(_0x390c10, 22);
  }
  function _0x56a13e(_0x292991) {
    return _0x1224f6(_0x292991, 6) ^ _0x1224f6(_0x292991, 11) ^ _0x1224f6(_0x292991, 25);
  }
  function _0x852477(_0x7dac0) {
    return _0x1224f6(_0x7dac0, 7) ^ _0x1224f6(_0x7dac0, 18) ^ _0x433b30(_0x7dac0, 3);
  }
  return function (_0x5314df) {
    const _0x8903f0 = _0x10751a ? "0123456789ABCDEF" : "0123456789abcdef";
    let _0x1fe0e1 = "";
    for (let _0x4a976b = 0; _0x4a976b < 4 * _0x5314df.length; _0x4a976b++) {
      _0x1fe0e1 += _0x8903f0.charAt(_0x5314df[_0x4a976b >> 2] >> 8 * (3 - _0x4a976b % 4) + 4 & 15) + _0x8903f0.charAt(_0x5314df[_0x4a976b >> 2] >> 8 * (3 - _0x4a976b % 4) & 15);
    }
    return _0x1fe0e1;
  }(function (_0x53aebc, _0x8a0480) {
    const _0x3f3f2d = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      _0x176d5a = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
      _0x24d580 = new Array(64);
    let _0x34e693, _0x57101b, _0x1c0e04, _0x174386, _0x4ce561, _0xa76b9c, _0x42e8a5, _0x57eba2, _0x48302f, _0x2f6784, _0x5565a2, _0x1eecef;
    for (_0x53aebc[_0x8a0480 >> 5] |= 128 << 24 - _0x8a0480 % 32, _0x53aebc[15 + (_0x8a0480 + 64 >> 9 << 4)] = _0x8a0480, _0x48302f = 0; _0x48302f < _0x53aebc.length; _0x48302f += 16) {
      for (_0x34e693 = _0x176d5a[0], _0x57101b = _0x176d5a[1], _0x1c0e04 = _0x176d5a[2], _0x174386 = _0x176d5a[3], _0x4ce561 = _0x176d5a[4], _0xa76b9c = _0x176d5a[5], _0x42e8a5 = _0x176d5a[6], _0x57eba2 = _0x176d5a[7], _0x2f6784 = 0; _0x2f6784 < 64; _0x2f6784++) {
        _0x24d580[_0x2f6784] = _0x2f6784 < 16 ? _0x53aebc[_0x2f6784 + _0x48302f] : _0xf9e88b(_0xf9e88b(_0xf9e88b(_0x1224f6(_0x55b05e = _0x24d580[_0x2f6784 - 2], 17) ^ _0x1224f6(_0x55b05e, 19) ^ _0x433b30(_0x55b05e, 10), _0x24d580[_0x2f6784 - 7]), _0x852477(_0x24d580[_0x2f6784 - 15])), _0x24d580[_0x2f6784 - 16]);
        _0x5565a2 = _0xf9e88b(_0xf9e88b(_0xf9e88b(_0xf9e88b(_0x57eba2, _0x56a13e(_0x4ce561)), _0x14204c(_0x4ce561, _0xa76b9c, _0x42e8a5)), _0x3f3f2d[_0x2f6784]), _0x24d580[_0x2f6784]);
        _0x1eecef = _0xf9e88b(_0x2d171b(_0x34e693), _0xe84c28(_0x34e693, _0x57101b, _0x1c0e04));
        _0x57eba2 = _0x42e8a5;
        _0x42e8a5 = _0xa76b9c;
        _0xa76b9c = _0x4ce561;
        _0x4ce561 = _0xf9e88b(_0x174386, _0x5565a2);
        _0x174386 = _0x1c0e04;
        _0x1c0e04 = _0x57101b;
        _0x57101b = _0x34e693;
        _0x34e693 = _0xf9e88b(_0x5565a2, _0x1eecef);
      }
      _0x176d5a[0] = _0xf9e88b(_0x34e693, _0x176d5a[0]);
      _0x176d5a[1] = _0xf9e88b(_0x57101b, _0x176d5a[1]);
      _0x176d5a[2] = _0xf9e88b(_0x1c0e04, _0x176d5a[2]);
      _0x176d5a[3] = _0xf9e88b(_0x174386, _0x176d5a[3]);
      _0x176d5a[4] = _0xf9e88b(_0x4ce561, _0x176d5a[4]);
      _0x176d5a[5] = _0xf9e88b(_0xa76b9c, _0x176d5a[5]);
      _0x176d5a[6] = _0xf9e88b(_0x42e8a5, _0x176d5a[6]);
      _0x176d5a[7] = _0xf9e88b(_0x57eba2, _0x176d5a[7]);
    }
    var _0x55b05e;
    return _0x176d5a;
  }(function (_0x19d3a3) {
    const _0x46483f = [],
      _0x5db920 = (1 << _0x1dd64e) - 1;
    for (let _0x197e85 = 0; _0x197e85 < _0x19d3a3.length * _0x1dd64e; _0x197e85 += _0x1dd64e) {
      _0x46483f[_0x197e85 >> 5] |= (_0x19d3a3.charCodeAt(_0x197e85 / _0x1dd64e) & _0x5db920) << 24 - _0x197e85 % 32;
    }
    return _0x46483f;
  }(_0x4f3fe4 = function (_0x1b45ac) {
    _0x1b45ac = _0x1b45ac.replace(/\r\n/g, "\n");
    let _0x17a67f = "";
    for (let _0x38fddf = 0; _0x38fddf < _0x1b45ac.length; _0x38fddf++) {
      const _0x2303a1 = _0x1b45ac.charCodeAt(_0x38fddf);
      _0x2303a1 < 128 ? _0x17a67f += String.fromCharCode(_0x2303a1) : _0x2303a1 > 127 && _0x2303a1 < 2048 ? (_0x17a67f += String.fromCharCode(_0x2303a1 >> 6 | 192), _0x17a67f += String.fromCharCode(63 & _0x2303a1 | 128)) : (_0x17a67f += String.fromCharCode(_0x2303a1 >> 12 | 224), _0x17a67f += String.fromCharCode(_0x2303a1 >> 6 & 63 | 128), _0x17a67f += String.fromCharCode(63 & _0x2303a1 | 128));
    }
    return _0x17a67f;
  }(_0x4f3fe4)), _0x4f3fe4.length * _0x1dd64e));
}
function MD5Encrypt(_0x49f87b) {
  function _0x3cd185(_0x31156a, _0x4a05dd) {
    return _0x31156a << _0x4a05dd | _0x31156a >>> 32 - _0x4a05dd;
  }
  function _0x31a272(_0x18b1d9, _0x3f5533) {
    var _0x332072, _0x32d961, _0x32e826, _0x551363, _0x1221aa;
    _0x32e826 = 2147483648 & _0x18b1d9;
    _0x551363 = 2147483648 & _0x3f5533;
    _0x332072 = 1073741824 & _0x18b1d9;
    _0x32d961 = 1073741824 & _0x3f5533;
    _0x1221aa = (1073741823 & _0x18b1d9) + (1073741823 & _0x3f5533);
    return _0x332072 & _0x32d961 ? 2147483648 ^ _0x1221aa ^ _0x32e826 ^ _0x551363 : _0x332072 | _0x32d961 ? 1073741824 & _0x1221aa ? 3221225472 ^ _0x1221aa ^ _0x32e826 ^ _0x551363 : 1073741824 ^ _0x1221aa ^ _0x32e826 ^ _0x551363 : _0x1221aa ^ _0x32e826 ^ _0x551363;
  }
  function _0x2de2f8(_0x19a8a0, _0x2b41a8, _0x1e431d, _0x30d8b5, _0x5658ee, _0x2201a9, _0x590478) {
    var _0x43cdf9, _0x495efa;
    _0x19a8a0 = _0x31a272(_0x19a8a0, _0x31a272(_0x31a272((_0x43cdf9 = _0x2b41a8) & (_0x495efa = _0x1e431d) | ~_0x43cdf9 & _0x30d8b5, _0x5658ee), _0x590478));
    return _0x31a272(_0x3cd185(_0x19a8a0, _0x2201a9), _0x2b41a8);
  }
  function _0x58fdfa(_0x5c473f, _0x457b1e, _0x57b544, _0x4ad7f7, _0x44de1e, _0x4546c9, _0x33a967) {
    var _0xdf7bb4, _0x159d6d, _0x98ebf9;
    _0x5c473f = _0x31a272(_0x5c473f, _0x31a272(_0x31a272((_0xdf7bb4 = _0x457b1e, _0x159d6d = _0x57b544, _0xdf7bb4 & (_0x98ebf9 = _0x4ad7f7) | _0x159d6d & ~_0x98ebf9), _0x44de1e), _0x33a967));
    return _0x31a272(_0x3cd185(_0x5c473f, _0x4546c9), _0x457b1e);
  }
  function _0x4e5586(_0x496639, _0x263d09, _0x39e85f, _0x5a3342, _0x2d028a, _0x144b43, _0x226468) {
    var _0x23d0e2, _0x346e91;
    _0x496639 = _0x31a272(_0x496639, _0x31a272(_0x31a272((_0x23d0e2 = _0x263d09) ^ (_0x346e91 = _0x39e85f) ^ _0x5a3342, _0x2d028a), _0x226468));
    return _0x31a272(_0x3cd185(_0x496639, _0x144b43), _0x263d09);
  }
  function _0x54f6f2(_0x345208, _0x2004d5, _0x64791, _0x5803a8, _0x54e27a, _0x411229, _0x58230f) {
    var _0x44089c, _0x4faef2;
    _0x345208 = _0x31a272(_0x345208, _0x31a272(_0x31a272((_0x44089c = _0x2004d5, (_0x4faef2 = _0x64791) ^ (_0x44089c | ~_0x5803a8)), _0x54e27a), _0x58230f));
    return _0x31a272(_0x3cd185(_0x345208, _0x411229), _0x2004d5);
  }
  function _0x1daca9(_0x47e601) {
    var _0x64e678,
      _0x24e981 = "",
      _0x3c7c25 = "";
    for (_0x64e678 = 0; 3 >= _0x64e678; _0x64e678++) {
      _0x24e981 += (_0x3c7c25 = "0" + (_0x47e601 >>> 8 * _0x64e678 & 255).toString(16)).substr(_0x3c7c25.length - 2, 2);
    }
    return _0x24e981;
  }
  var _0x474e56,
    _0x452bd4,
    _0x4e74c1,
    _0x43e8be,
    _0x51c3ec,
    _0x6cd1a1,
    _0x45f5e1,
    _0x583d56,
    _0xe65716,
    _0x48e584 = [];
  for (_0x48e584 = function (_0x40b873) {
    for (var _0x5280e3, _0x5544d7 = _0x40b873.length, _0x66630f = _0x5544d7 + 8, _0x229184 = 16 * ((_0x66630f - _0x66630f % 64) / 64 + 1), _0x2cbc39 = Array(_0x229184 - 1), _0x1df7bb = 0, _0x5b1625 = 0; _0x5544d7 > _0x5b1625;) {
      _0x5280e3 = (_0x5b1625 - _0x5b1625 % 4) / 4;
      _0x1df7bb = _0x5b1625 % 4 * 8;
      _0x2cbc39[_0x5280e3] = _0x2cbc39[_0x5280e3] | _0x40b873.charCodeAt(_0x5b1625) << _0x1df7bb;
      _0x5b1625++;
    }
    _0x5280e3 = (_0x5b1625 - _0x5b1625 % 4) / 4;
    _0x1df7bb = _0x5b1625 % 4 * 8;
    _0x2cbc39[_0x5280e3] = _0x2cbc39[_0x5280e3] | 128 << _0x1df7bb;
    _0x2cbc39[_0x229184 - 2] = _0x5544d7 << 3;
    _0x2cbc39[_0x229184 - 1] = _0x5544d7 >>> 29;
    return _0x2cbc39;
  }(_0x49f87b = function (_0x43582f) {
    _0x43582f = _0x43582f.replace(/\r\n/g, "\n");
    for (var _0x356654 = "", _0x1b7624 = 0; _0x1b7624 < _0x43582f.length; _0x1b7624++) {
      var _0x42afba = _0x43582f.charCodeAt(_0x1b7624);
      128 > _0x42afba ? _0x356654 += String.fromCharCode(_0x42afba) : _0x42afba > 127 && 2048 > _0x42afba ? (_0x356654 += String.fromCharCode(_0x42afba >> 6 | 192), _0x356654 += String.fromCharCode(63 & _0x42afba | 128)) : (_0x356654 += String.fromCharCode(_0x42afba >> 12 | 224), _0x356654 += String.fromCharCode(_0x42afba >> 6 & 63 | 128), _0x356654 += String.fromCharCode(63 & _0x42afba | 128));
    }
    return _0x356654;
  }(_0x49f87b)), _0x6cd1a1 = 1732584193, _0x45f5e1 = 4023233417, _0x583d56 = 2562383102, _0xe65716 = 271733878, _0x474e56 = 0; _0x474e56 < _0x48e584.length; _0x474e56 += 16) {
    _0x452bd4 = _0x6cd1a1;
    _0x4e74c1 = _0x45f5e1;
    _0x43e8be = _0x583d56;
    _0x51c3ec = _0xe65716;
    _0x6cd1a1 = _0x2de2f8(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 0], 7, 3614090360);
    _0xe65716 = _0x2de2f8(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 1], 12, 3905402710);
    _0x583d56 = _0x2de2f8(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 2], 17, 606105819);
    _0x45f5e1 = _0x2de2f8(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 3], 22, 3250441966);
    _0x6cd1a1 = _0x2de2f8(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 4], 7, 4118548399);
    _0xe65716 = _0x2de2f8(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 5], 12, 1200080426);
    _0x583d56 = _0x2de2f8(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 6], 17, 2821735955);
    _0x45f5e1 = _0x2de2f8(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 7], 22, 4249261313);
    _0x6cd1a1 = _0x2de2f8(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 8], 7, 1770035416);
    _0xe65716 = _0x2de2f8(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 9], 12, 2336552879);
    _0x583d56 = _0x2de2f8(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 10], 17, 4294925233);
    _0x45f5e1 = _0x2de2f8(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 11], 22, 2304563134);
    _0x6cd1a1 = _0x2de2f8(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 12], 7, 1804603682);
    _0xe65716 = _0x2de2f8(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 13], 12, 4254626195);
    _0x583d56 = _0x2de2f8(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 14], 17, 2792965006);
    _0x45f5e1 = _0x2de2f8(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 15], 22, 1236535329);
    _0x6cd1a1 = _0x58fdfa(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 1], 5, 4129170786);
    _0xe65716 = _0x58fdfa(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 6], 9, 3225465664);
    _0x583d56 = _0x58fdfa(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 11], 14, 643717713);
    _0x45f5e1 = _0x58fdfa(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 0], 20, 3921069994);
    _0x6cd1a1 = _0x58fdfa(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 5], 5, 3593408605);
    _0xe65716 = _0x58fdfa(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 10], 9, 38016083);
    _0x583d56 = _0x58fdfa(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 15], 14, 3634488961);
    _0x45f5e1 = _0x58fdfa(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 4], 20, 3889429448);
    _0x6cd1a1 = _0x58fdfa(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 9], 5, 568446438);
    _0xe65716 = _0x58fdfa(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 14], 9, 3275163606);
    _0x583d56 = _0x58fdfa(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 3], 14, 4107603335);
    _0x45f5e1 = _0x58fdfa(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 8], 20, 1163531501);
    _0x6cd1a1 = _0x58fdfa(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 13], 5, 2850285829);
    _0xe65716 = _0x58fdfa(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 2], 9, 4243563512);
    _0x583d56 = _0x58fdfa(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 7], 14, 1735328473);
    _0x45f5e1 = _0x58fdfa(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 12], 20, 2368359562);
    _0x6cd1a1 = _0x4e5586(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 5], 4, 4294588738);
    _0xe65716 = _0x4e5586(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 8], 11, 2272392833);
    _0x583d56 = _0x4e5586(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 11], 16, 1839030562);
    _0x45f5e1 = _0x4e5586(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 14], 23, 4259657740);
    _0x6cd1a1 = _0x4e5586(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 1], 4, 2763975236);
    _0xe65716 = _0x4e5586(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 4], 11, 1272893353);
    _0x583d56 = _0x4e5586(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 7], 16, 4139469664);
    _0x45f5e1 = _0x4e5586(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 10], 23, 3200236656);
    _0x6cd1a1 = _0x4e5586(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 13], 4, 681279174);
    _0xe65716 = _0x4e5586(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 0], 11, 3936430074);
    _0x583d56 = _0x4e5586(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 3], 16, 3572445317);
    _0x45f5e1 = _0x4e5586(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 6], 23, 76029189);
    _0x6cd1a1 = _0x4e5586(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 9], 4, 3654602809);
    _0xe65716 = _0x4e5586(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 12], 11, 3873151461);
    _0x583d56 = _0x4e5586(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 15], 16, 530742520);
    _0x45f5e1 = _0x4e5586(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 2], 23, 3299628645);
    _0x6cd1a1 = _0x54f6f2(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 0], 6, 4096336452);
    _0xe65716 = _0x54f6f2(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 7], 10, 1126891415);
    _0x583d56 = _0x54f6f2(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 14], 15, 2878612391);
    _0x45f5e1 = _0x54f6f2(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 5], 21, 4237533241);
    _0x6cd1a1 = _0x54f6f2(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 12], 6, 1700485571);
    _0xe65716 = _0x54f6f2(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 3], 10, 2399980690);
    _0x583d56 = _0x54f6f2(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 10], 15, 4293915773);
    _0x45f5e1 = _0x54f6f2(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 1], 21, 2240044497);
    _0x6cd1a1 = _0x54f6f2(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 8], 6, 1873313359);
    _0xe65716 = _0x54f6f2(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 15], 10, 4264355552);
    _0x583d56 = _0x54f6f2(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 6], 15, 2734768916);
    _0x45f5e1 = _0x54f6f2(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 13], 21, 1309151649);
    _0x6cd1a1 = _0x54f6f2(_0x6cd1a1, _0x45f5e1, _0x583d56, _0xe65716, _0x48e584[_0x474e56 + 4], 6, 4149444226);
    _0xe65716 = _0x54f6f2(_0xe65716, _0x6cd1a1, _0x45f5e1, _0x583d56, _0x48e584[_0x474e56 + 11], 10, 3174756917);
    _0x583d56 = _0x54f6f2(_0x583d56, _0xe65716, _0x6cd1a1, _0x45f5e1, _0x48e584[_0x474e56 + 2], 15, 718787259);
    _0x45f5e1 = _0x54f6f2(_0x45f5e1, _0x583d56, _0xe65716, _0x6cd1a1, _0x48e584[_0x474e56 + 9], 21, 3951481745);
    _0x6cd1a1 = _0x31a272(_0x6cd1a1, _0x452bd4);
    _0x45f5e1 = _0x31a272(_0x45f5e1, _0x4e74c1);
    _0x583d56 = _0x31a272(_0x583d56, _0x43e8be);
    _0xe65716 = _0x31a272(_0xe65716, _0x51c3ec);
  }
  return (_0x1daca9(_0x6cd1a1) + _0x1daca9(_0x45f5e1) + _0x1daca9(_0x583d56) + _0x1daca9(_0xe65716)).toLowerCase();
}