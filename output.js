//Tue Jul 02 2024 04:23:43 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x38dcd2 = "中青极速版文章视频",
  _0x4b30b7 = _0x30951f(_0x38dcd2);
let _0xe67ba4,
  _0x340bfa = (_0x4b30b7.isNode() ? process.env.zqkdFastCookie : _0x4b30b7.getdata("zqkdFastCookie")) || "",
  _0x2d357b = [],
  _0x2a0adb = 0,
  _0xccba01 = 0,
  _0xaf665 = [],
  _0x4909b9 = 0,
  _0x3e4e56 = 0,
  _0x339ba2 = 1453,
  _0x4a3794 = "jdvylqcGGHHJZrfw",
  _0x12f42e = 1,
  _0x28d03f = 0,
  _0x2eda7d = "zqkdFast_read",
  _0x102803 = "secret",
  _0x10bfcb = "https://leafxcy.coding.net/p/validcode/d/validCode/git/raw/master/code.json",
  _0x3bbc63 = "https://127.0.0.1/",
  _0x2eb5e8 = {};
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x22000c();
  } else {
    await _0x58c546();
    if (_0x28d03f == false) {
      return;
    }
    await _0x168e51();
    _0x4a3794 += _0x2eb5e8[_0x102803];
    if (!(await _0x25eb82())) {
      return;
    }
    console.log("====================\n");
    for (_0x2a0adb = 0; _0x2a0adb < _0xccba01; _0x2a0adb++) {
      await _0x16c8a8(_0x2a0adb, _0x339ba2, _0x3e4e56);
      await _0x16c8a8(_0x2a0adb, _0x3e4e56, _0x339ba2);
    }
    for (let _0x40773a = 0; _0x40773a < _0x4909b9; _0x40773a++) {
      console.log("\n第" + (_0x40773a + 1) + "轮阅读");
      for (_0x2a0adb = 0; _0x2a0adb < _0xccba01; _0x2a0adb++) {
        _0x40773a < _0xaf665[_0x2a0adb].length && (_0x37495b(_0x2a0adb, _0x40773a), await _0x4b30b7.wait(200));
      }
      for (_0x2a0adb = 0; _0x2a0adb < _0xccba01; _0x2a0adb++) {
        _0x40773a < _0xaf665[_0x2a0adb].length && (_0x1599ec(_0x2a0adb, _0x40773a), await _0x4b30b7.wait(200));
      }
      await _0x4b30b7.wait(Math.floor(Math.random() * 5000) + _0x2eb5e8.waitTime);
    }
  }
})().catch(_0x13c023 => _0x4b30b7.logErr(_0x13c023)).finally(() => _0x4b30b7.done());
async function _0x25eb82() {
  if (_0x340bfa) {
    _0x2d357b = _0x340bfa.split("@");
    _0xccba01 = _0x2d357b.length;
  } else {
    console.log("未找到zqkdFastCookie");
    return false;
  }
  for (let _0x2dca9f in _0x2d357b) _0xaf665.push([]);
  console.log("共找到" + _0xccba01 + "个CK");
  return true;
}
async function _0x22000c() {
  if ($request.url.indexOf("FastApi/NewTaskSimple/getTaskList") > -1) {
    console.log($request.url);
    let _0x3ee791 = $request.url.match(/uid=(\w+)/)[1],
      _0x4a0554 = $request.url.match(/token=([\w\%]+)/)[1],
      _0x41ecb6 = $request.url.match(/token_id=(\w+)/)[1],
      _0x560775 = "uid=" + _0x3ee791 + "&token=" + _0x4a0554 + "&token_id=" + _0x41ecb6,
      _0x563868 = "uid=" + _0x3ee791;
    _0x340bfa ? _0x340bfa.indexOf(_0x563868) == -1 ? (_0x340bfa = _0x340bfa + "@" + _0x560775, _0x4b30b7.setdata(_0x340bfa, "zqkdFastCookie"), ckList = _0x340bfa.split("@"), _0x4b30b7.msg(_0x38dcd2 + (" 获取第" + ckList.length + "个zqkdFastCookie成功: " + _0x560775))) : console.log(_0x38dcd2 + (" 找到重复的cookie: " + _0x560775)) : (_0x4b30b7.setdata(_0x560775, "zqkdFastCookie"), _0x4b30b7.msg(_0x38dcd2 + (" 获取第1个zqkdFastCookie成功: " + _0x560775)));
  }
}
async function _0x58c546() {
  let _0x216f5c = _0x3ca02b();
  const _0x2e2985 = {
    url: _0x10bfcb,
    headers: ""
  };
  await _0x19fdea(_0x2e2985, _0x216f5c);
  let _0x466d7c = _0xe67ba4;
  if (!_0x466d7c) {
    return;
  }
  if (_0x466d7c[_0x2eda7d]) {
    let _0x1eb2f7 = _0x466d7c[_0x2eda7d];
    _0x1eb2f7.status == 0 ? _0x12f42e >= _0x1eb2f7.version ? (_0x28d03f = true, _0x4a3794 += "0o2", _0x3bbc63 = "https://leafxcy.coding.net/p/validcode/d/validCode/git/raw/master/task.json", console.log(_0x1eb2f7.msg[_0x1eb2f7.status]), console.log(_0x1eb2f7.updateMsg)) : console.log(_0x1eb2f7.versionMsg) : console.log(_0x1eb2f7.msg[_0x1eb2f7.status]);
  } else {
    console.log(_0x466d7c.errorMsg);
  }
}
async function _0x168e51() {
  let _0x567cbe = _0x3ca02b(),
    _0x6392a0 = "";
  const _0x50b512 = {
    url: _0x3bbc63,
    headers: ""
  };
  await _0x19fdea(_0x50b512, _0x567cbe);
  let _0x2230e7 = _0xe67ba4;
  if (!_0x2230e7) {
    return _0x6392a0;
  }
  for (let _0x480bd9 in _0x2230e7[_0x2eda7d]) {
    _0x2eb5e8[_0x480bd9] = _0x2230e7[_0x2eda7d][_0x480bd9];
  }
  return _0x6392a0;
}
function _0x270a75(_0xc2a016) {
  let _0x3f34a8 = _0xc2a016.split("&"),
    _0x5a11aa = {};
  for (let _0x4ec857 of _0x3f34a8) {
    let _0x55125e = _0x4ec857.split("=");
    _0x5a11aa[_0x55125e[0]] = _0x55125e[1];
  }
  let _0x362c6f = "";
  for (let _0x3d53f4 of Object.keys(_0x5a11aa).sort()) {
    _0x3d53f4 != "token" && _0x3d53f4 != "sign" && (_0x362c6f += _0x3d53f4 + "=" + _0x5a11aa[_0x3d53f4]);
  }
  _0x362c6f += _0x4a3794;
  return _0x216013(_0x362c6f);
}
async function _0x16c8a8(_0x5b6f1e, _0x2474c9, _0x23f7c3) {
  let _0x472733 = _0x3ca02b(),
    _0x54ab26 = _0x2d357b[_0x5b6f1e],
    _0x42b9e2 = _0x54ab26.match(/uid=(\w+)/)[1],
    _0x191125 = _0x2eb5e8.ListArts + ("?catid=" + _0x2474c9 + "&video_catid=" + _0x23f7c3 + "&op=0&behot_time=0&&app_version=2.5.5&" + _0x54ab26),
    _0x5693d9 = _0x446d86(_0x191125);
  await _0x19fdea(_0x5693d9, _0x472733);
  let _0x3625e1 = _0xe67ba4;
  if (!_0x3625e1) {
    return;
  }
  let _0x51552e = _0x2474c9 == 1453 ? "视频" : "文章";
  if (_0x3625e1.error_code == 0) {
    for (let _0x13ec94 of _0x3625e1.items) {
      _0xaf665[_0x5b6f1e].push(_0x13ec94.signature);
    }
    _0x4909b9 = _0x1dbf9a(_0x4909b9, _0xaf665[_0x5b6f1e].length);
    console.log("用户" + (_0x5b6f1e + 1) + "[" + _0x42b9e2 + "]找到" + _0x3625e1.items.length + _0x51552e);
  } else {
    console.log("用户" + (_0x5b6f1e + 1) + "[" + _0x42b9e2 + "]获取" + _0x51552e + "列表失败：" + _0x3625e1.message);
  }
}
async function _0x37495b(_0x5473b5, _0xde74c7) {
  let _0x2b4cd5 = _0x3ca02b(),
    _0xa860af = _0x2d357b[_0x5473b5],
    _0x4b26f5 = _0xa860af.match(/uid=(\w+)/)[1],
    _0x22299f = _0xaf665[_0x5473b5][_0xde74c7],
    _0x2db98d = _0x2eb5e8.ReadArts + ("?signature=" + _0x22299f + "&source=articleDetail&" + _0xa860af + "&app_version=2.5.5&channel=c6001&device_model=OPPOR9tm&device_brand=OPPO&resolution=1080*1920&os_version=22&is_wxaccount=1&active_channel=c6001&access=wifi"),
    _0x1a674e = _0x446d86(_0x2db98d);
  await _0x19fdea(_0x1a674e, _0x2b4cd5);
  let _0x5816ca = _0xe67ba4;
  if (!_0x5816ca) {
    return;
  }
  _0x5816ca.error_code == 0 ? console.log("用户" + (_0x5473b5 + 1) + "[" + _0x4b26f5 + "]开始看文章视频：" + _0x5816ca.items.title) : console.log("用户" + (_0x5473b5 + 1) + "[" + _0x4b26f5 + "]看文章视频失败：" + _0x5816ca.message);
}
async function _0x1599ec(_0x522934, _0x4982b1) {
  let _0x1f882a = _0x3ca02b(),
    _0x98ae87 = _0xaf665[_0x522934][_0x4982b1],
    _0x2eca63 = _0x2d357b[_0x522934],
    _0x3f1957 = _0x2eca63.match(/uid=(\w+)/)[1],
    _0x12525c = "signature=" + _0x98ae87 + "&app_version=2.5.5",
    _0x1337ce = _0x270a75(_0x12525c),
    _0x18df6d = _0x2eb5e8.CompleteArts + ("?signature=" + _0x98ae87 + "&app_version=2.5.5&sign=" + _0x1337ce),
    _0x2d0f52 = _0x446d86(_0x18df6d);
  await _0x19fdea(_0x2d0f52, _0x1f882a);
  let _0x48b1a3 = _0xe67ba4;
  if (!_0x48b1a3) {
    return;
  }
  _0x48b1a3.error_code == 0 ? console.log("用户" + (_0x522934 + 1) + "[" + _0x3f1957 + "]看文章视频获得" + _0x48b1a3.items.read_score + "青豆") : console.log("用户" + (_0x522934 + 1) + "[" + _0x3f1957 + "]获得文章视频奖励失败：" + _0x48b1a3.message);
}
function _0x52bc9b(_0x14ad08, _0x1d1602) {
  const _0x27a7d5 = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 hap/1.0.8.1/oppo com.nearme.instant.platform/4.2.1 com.youth.kandianquickapp/2.5.5 ({\"packageName\":\"com.oppo.launcher\",\"type\":\"shortcut\",\"extra\":{\"original\":{\"packageName\":\"com.oppo.market\",\"type\":\"sdk\",\"extra\":{}},\"scene\":\"api\"}})",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    Host: "user.youth.cn",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  const _0x3e8305 = {
    url: _0x14ad08,
    headers: _0x27a7d5,
    body: _0x1d1602
  };
  return _0x3e8305;
}
function _0x446d86(_0x9d8001) {
  const _0x2f681f = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 hap/1.0.8.1/oppo com.nearme.instant.platform/4.2.1 com.youth.kandianquickapp/2.5.5 ({\"packageName\":\"com.oppo.launcher\",\"type\":\"shortcut\",\"extra\":{\"original\":{\"packageName\":\"com.oppo.market\",\"type\":\"sdk\",\"extra\":{}},\"scene\":\"api\"}})",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    Host: "user.youth.cn",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  const _0x4e2009 = {
    url: _0x9d8001,
    headers: _0x2f681f
  };
  return _0x4e2009;
}
async function _0x3ff455(_0x47d273, _0x8575bc) {
  _0xe67ba4 = null;
  return new Promise(_0x1e3308 => {
    _0x4b30b7.post(_0x47d273, async (_0xdc3dbb, _0x2c123a, _0x541f08) => {
      try {
        if (_0xdc3dbb) {
          console.log(_0x8575bc + ": post请求失败");
          console.log(JSON.stringify(_0xdc3dbb));
          _0x4b30b7.logErr(_0xdc3dbb);
        } else {
          if (_0x32ef85(_0x541f08)) {
            _0xe67ba4 = JSON.parse(_0x541f08);
          }
        }
      } catch (_0x54111e) {
        _0x4b30b7.logErr(_0x54111e, _0x2c123a);
      } finally {
        _0x1e3308();
      }
    });
  });
}
async function _0x19fdea(_0x346530, _0x2c5f1d) {
  _0xe67ba4 = null;
  return new Promise(_0x30055e => {
    _0x4b30b7.get(_0x346530, async (_0x376e2a, _0x363eca, _0x210a88) => {
      try {
        if (_0x376e2a) {
          console.log(_0x2c5f1d + ": get请求失败");
          console.log(JSON.stringify(_0x376e2a));
          _0x4b30b7.logErr(_0x376e2a);
        } else {
          if (_0x32ef85(_0x210a88, _0x2c5f1d)) {
            _0xe67ba4 = JSON.parse(_0x210a88);
          }
        }
      } catch (_0x205b63) {
        _0x4b30b7.logErr(_0x205b63, _0x363eca);
      } finally {
        _0x30055e();
      }
    });
  });
}
function _0x32ef85(_0x1d1a93, _0x2fba57) {
  try {
    if (typeof JSON.parse(_0x1d1a93) == "object") {
      return true;
    } else {
      console.log("Function " + _0x2fba57 + ": 未知错误");
      console.log(_0x1d1a93);
    }
  } catch (_0x50a69d) {
    console.log(_0x1d1a93);
    console.log(_0x50a69d);
    console.log("Function " + _0x2fba57 + ": 服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x3ca02b() {
  return new Error().stack.split("\n")[2].trim().split(" ")[1];
}
function _0x18e973(_0x3ed20b, _0x2bb981) {
  return _0x3ed20b < _0x2bb981 ? _0x3ed20b : _0x2bb981;
}
function _0x1dbf9a(_0x141387, _0x46e4e8) {
  return _0x141387 < _0x46e4e8 ? _0x46e4e8 : _0x141387;
}
function _0x31180d(_0x4a7b9b = 12) {
  let _0x1e5ca7 = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
    _0x4b45f8 = _0x1e5ca7.length,
    _0x481c23 = "";
  for (i = 0; i < _0x4a7b9b; i++) {
    _0x481c23 += _0x1e5ca7.charAt(Math.floor(Math.random() * _0x4b45f8));
  }
  return _0x481c23;
}
function _0x216013(_0x416c31) {
  function _0x2a5125(_0x5c5468, _0x354dff) {
    return _0x5c5468 << _0x354dff | _0x5c5468 >>> 32 - _0x354dff;
  }
  function _0x26accb(_0x5eff87, _0x5576d1) {
    var _0x5e3683, _0x511e30, _0x59d5a6, _0xf634a9, _0xe0e23c;
    _0x59d5a6 = 2147483648 & _0x5eff87;
    _0xf634a9 = 2147483648 & _0x5576d1;
    _0x5e3683 = 1073741824 & _0x5eff87;
    _0x511e30 = 1073741824 & _0x5576d1;
    _0xe0e23c = (1073741823 & _0x5eff87) + (1073741823 & _0x5576d1);
    return _0x5e3683 & _0x511e30 ? 2147483648 ^ _0xe0e23c ^ _0x59d5a6 ^ _0xf634a9 : _0x5e3683 | _0x511e30 ? 1073741824 & _0xe0e23c ? 3221225472 ^ _0xe0e23c ^ _0x59d5a6 ^ _0xf634a9 : 1073741824 ^ _0xe0e23c ^ _0x59d5a6 ^ _0xf634a9 : _0xe0e23c ^ _0x59d5a6 ^ _0xf634a9;
  }
  function _0x4f2a34(_0x12e936, _0x16beb6, _0x1ce31f) {
    return _0x12e936 & _0x16beb6 | ~_0x12e936 & _0x1ce31f;
  }
  function _0x5f2b16(_0x41a76c, _0x55f2f0, _0x57b445) {
    return _0x41a76c & _0x57b445 | _0x55f2f0 & ~_0x57b445;
  }
  function _0x2ffd83(_0x29a48b, _0x4dce11, _0x1cdcd8) {
    return _0x29a48b ^ _0x4dce11 ^ _0x1cdcd8;
  }
  function _0x4c054d(_0x4e3aae, _0x3aefbb, _0x129bf2) {
    return _0x3aefbb ^ (_0x4e3aae | ~_0x129bf2);
  }
  function _0x292cc3(_0x22b832, _0x5aa4f8, _0x5c41b5, _0x1c5314, _0xa5255a, _0x47e2d6, _0xccc224) {
    _0x22b832 = _0x26accb(_0x22b832, _0x26accb(_0x26accb(_0x4f2a34(_0x5aa4f8, _0x5c41b5, _0x1c5314), _0xa5255a), _0xccc224));
    return _0x26accb(_0x2a5125(_0x22b832, _0x47e2d6), _0x5aa4f8);
  }
  function _0x126312(_0x3b85a6, _0x4574f1, _0x9ab269, _0x3c68ff, _0x56b955, _0x2f9892, _0x225814) {
    _0x3b85a6 = _0x26accb(_0x3b85a6, _0x26accb(_0x26accb(_0x5f2b16(_0x4574f1, _0x9ab269, _0x3c68ff), _0x56b955), _0x225814));
    return _0x26accb(_0x2a5125(_0x3b85a6, _0x2f9892), _0x4574f1);
  }
  function _0x1c1af9(_0x3fd576, _0x559dce, _0x1d36d4, _0x24a05b, _0x45b7ee, _0x2d5884, _0x3ce9e9) {
    _0x3fd576 = _0x26accb(_0x3fd576, _0x26accb(_0x26accb(_0x2ffd83(_0x559dce, _0x1d36d4, _0x24a05b), _0x45b7ee), _0x3ce9e9));
    return _0x26accb(_0x2a5125(_0x3fd576, _0x2d5884), _0x559dce);
  }
  function _0x4eeeb7(_0x4c89bc, _0x14aaf5, _0x40281a, _0x4d8e68, _0xe8fa92, _0x4b8410, _0x237ef6) {
    _0x4c89bc = _0x26accb(_0x4c89bc, _0x26accb(_0x26accb(_0x4c054d(_0x14aaf5, _0x40281a, _0x4d8e68), _0xe8fa92), _0x237ef6));
    return _0x26accb(_0x2a5125(_0x4c89bc, _0x4b8410), _0x14aaf5);
  }
  function _0x26a6f6(_0x2f259e) {
    for (var _0x183c15, _0x50f1e5 = _0x2f259e.length, _0x26858e = _0x50f1e5 + 8, _0x121746 = (_0x26858e - _0x26858e % 64) / 64, _0x5dc522 = 16 * (_0x121746 + 1), _0x329a3a = new Array(_0x5dc522 - 1), _0x453b50 = 0, _0x5240ee = 0; _0x50f1e5 > _0x5240ee;) {
      _0x183c15 = (_0x5240ee - _0x5240ee % 4) / 4;
      _0x453b50 = _0x5240ee % 4 * 8;
      _0x329a3a[_0x183c15] = _0x329a3a[_0x183c15] | _0x2f259e.charCodeAt(_0x5240ee) << _0x453b50;
      _0x5240ee++;
    }
    _0x183c15 = (_0x5240ee - _0x5240ee % 4) / 4;
    _0x453b50 = _0x5240ee % 4 * 8;
    _0x329a3a[_0x183c15] = _0x329a3a[_0x183c15] | 128 << _0x453b50;
    _0x329a3a[_0x5dc522 - 2] = _0x50f1e5 << 3;
    _0x329a3a[_0x5dc522 - 1] = _0x50f1e5 >>> 29;
    return _0x329a3a;
  }
  function _0x103f28(_0x2ca2ce) {
    var _0x16d566,
      _0x294aaf,
      _0x3b0664 = "",
      _0x15e84c = "";
    for (_0x294aaf = 0; 3 >= _0x294aaf; _0x294aaf++) {
      _0x16d566 = _0x2ca2ce >>> 8 * _0x294aaf & 255;
      _0x15e84c = "0" + _0x16d566.toString(16);
      _0x3b0664 += _0x15e84c.substr(_0x15e84c.length - 2, 2);
    }
    return _0x3b0664;
  }
  function _0x4cfee9(_0x2b29a8) {
    _0x2b29a8 = _0x2b29a8.replace(/\r\n/g, "\n");
    for (var _0x427a35 = "", _0x1ccb5f = 0; _0x1ccb5f < _0x2b29a8.length; _0x1ccb5f++) {
      var _0x515737 = _0x2b29a8.charCodeAt(_0x1ccb5f);
      128 > _0x515737 ? _0x427a35 += String.fromCharCode(_0x515737) : _0x515737 > 127 && 2048 > _0x515737 ? (_0x427a35 += String.fromCharCode(_0x515737 >> 6 | 192), _0x427a35 += String.fromCharCode(63 & _0x515737 | 128)) : (_0x427a35 += String.fromCharCode(_0x515737 >> 12 | 224), _0x427a35 += String.fromCharCode(_0x515737 >> 6 & 63 | 128), _0x427a35 += String.fromCharCode(63 & _0x515737 | 128));
    }
    return _0x427a35;
  }
  var _0x2d500d,
    _0x90e9ef,
    _0x4037ef,
    _0x4e74f3,
    _0x33fc3d,
    _0x47f36e,
    _0x2843fe,
    _0x303592,
    _0x419dc0,
    _0x4b418d = [],
    _0x5e2289 = 7,
    _0x68b990 = 12,
    _0x11cc33 = 17,
    _0x108eca = 22,
    _0x1ddbc6 = 5,
    _0x3b32a4 = 9,
    _0x46858c = 14,
    _0x45638b = 20,
    _0x58fb11 = 4,
    _0x5e2ff5 = 11,
    _0xbfe497 = 16,
    _0x15142a = 23,
    _0x1e7bb4 = 6,
    _0x35cc5d = 10,
    _0x556d84 = 15,
    _0x37121f = 21;
  for (_0x416c31 = _0x4cfee9(_0x416c31), _0x4b418d = _0x26a6f6(_0x416c31), _0x47f36e = 1732584193, _0x2843fe = 4023233417, _0x303592 = 2562383102, _0x419dc0 = 271733878, _0x2d500d = 0; _0x2d500d < _0x4b418d.length; _0x2d500d += 16) {
    _0x90e9ef = _0x47f36e;
    _0x4037ef = _0x2843fe;
    _0x4e74f3 = _0x303592;
    _0x33fc3d = _0x419dc0;
    _0x47f36e = _0x292cc3(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 0], _0x5e2289, 3614090360);
    _0x419dc0 = _0x292cc3(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 1], _0x68b990, 3905402710);
    _0x303592 = _0x292cc3(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 2], _0x11cc33, 606105819);
    _0x2843fe = _0x292cc3(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 3], _0x108eca, 3250441966);
    _0x47f36e = _0x292cc3(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 4], _0x5e2289, 4118548399);
    _0x419dc0 = _0x292cc3(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 5], _0x68b990, 1200080426);
    _0x303592 = _0x292cc3(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 6], _0x11cc33, 2821735955);
    _0x2843fe = _0x292cc3(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 7], _0x108eca, 4249261313);
    _0x47f36e = _0x292cc3(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 8], _0x5e2289, 1770035416);
    _0x419dc0 = _0x292cc3(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 9], _0x68b990, 2336552879);
    _0x303592 = _0x292cc3(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 10], _0x11cc33, 4294925233);
    _0x2843fe = _0x292cc3(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 11], _0x108eca, 2304563134);
    _0x47f36e = _0x292cc3(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 12], _0x5e2289, 1804603682);
    _0x419dc0 = _0x292cc3(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 13], _0x68b990, 4254626195);
    _0x303592 = _0x292cc3(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 14], _0x11cc33, 2792965006);
    _0x2843fe = _0x292cc3(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 15], _0x108eca, 1236535329);
    _0x47f36e = _0x126312(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 1], _0x1ddbc6, 4129170786);
    _0x419dc0 = _0x126312(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 6], _0x3b32a4, 3225465664);
    _0x303592 = _0x126312(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 11], _0x46858c, 643717713);
    _0x2843fe = _0x126312(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 0], _0x45638b, 3921069994);
    _0x47f36e = _0x126312(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 5], _0x1ddbc6, 3593408605);
    _0x419dc0 = _0x126312(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 10], _0x3b32a4, 38016083);
    _0x303592 = _0x126312(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 15], _0x46858c, 3634488961);
    _0x2843fe = _0x126312(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 4], _0x45638b, 3889429448);
    _0x47f36e = _0x126312(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 9], _0x1ddbc6, 568446438);
    _0x419dc0 = _0x126312(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 14], _0x3b32a4, 3275163606);
    _0x303592 = _0x126312(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 3], _0x46858c, 4107603335);
    _0x2843fe = _0x126312(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 8], _0x45638b, 1163531501);
    _0x47f36e = _0x126312(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 13], _0x1ddbc6, 2850285829);
    _0x419dc0 = _0x126312(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 2], _0x3b32a4, 4243563512);
    _0x303592 = _0x126312(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 7], _0x46858c, 1735328473);
    _0x2843fe = _0x126312(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 12], _0x45638b, 2368359562);
    _0x47f36e = _0x1c1af9(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 5], _0x58fb11, 4294588738);
    _0x419dc0 = _0x1c1af9(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 8], _0x5e2ff5, 2272392833);
    _0x303592 = _0x1c1af9(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 11], _0xbfe497, 1839030562);
    _0x2843fe = _0x1c1af9(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 14], _0x15142a, 4259657740);
    _0x47f36e = _0x1c1af9(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 1], _0x58fb11, 2763975236);
    _0x419dc0 = _0x1c1af9(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 4], _0x5e2ff5, 1272893353);
    _0x303592 = _0x1c1af9(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 7], _0xbfe497, 4139469664);
    _0x2843fe = _0x1c1af9(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 10], _0x15142a, 3200236656);
    _0x47f36e = _0x1c1af9(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 13], _0x58fb11, 681279174);
    _0x419dc0 = _0x1c1af9(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 0], _0x5e2ff5, 3936430074);
    _0x303592 = _0x1c1af9(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 3], _0xbfe497, 3572445317);
    _0x2843fe = _0x1c1af9(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 6], _0x15142a, 76029189);
    _0x47f36e = _0x1c1af9(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 9], _0x58fb11, 3654602809);
    _0x419dc0 = _0x1c1af9(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 12], _0x5e2ff5, 3873151461);
    _0x303592 = _0x1c1af9(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 15], _0xbfe497, 530742520);
    _0x2843fe = _0x1c1af9(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 2], _0x15142a, 3299628645);
    _0x47f36e = _0x4eeeb7(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 0], _0x1e7bb4, 4096336452);
    _0x419dc0 = _0x4eeeb7(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 7], _0x35cc5d, 1126891415);
    _0x303592 = _0x4eeeb7(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 14], _0x556d84, 2878612391);
    _0x2843fe = _0x4eeeb7(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 5], _0x37121f, 4237533241);
    _0x47f36e = _0x4eeeb7(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 12], _0x1e7bb4, 1700485571);
    _0x419dc0 = _0x4eeeb7(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 3], _0x35cc5d, 2399980690);
    _0x303592 = _0x4eeeb7(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 10], _0x556d84, 4293915773);
    _0x2843fe = _0x4eeeb7(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 1], _0x37121f, 2240044497);
    _0x47f36e = _0x4eeeb7(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 8], _0x1e7bb4, 1873313359);
    _0x419dc0 = _0x4eeeb7(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 15], _0x35cc5d, 4264355552);
    _0x303592 = _0x4eeeb7(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 6], _0x556d84, 2734768916);
    _0x2843fe = _0x4eeeb7(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 13], _0x37121f, 1309151649);
    _0x47f36e = _0x4eeeb7(_0x47f36e, _0x2843fe, _0x303592, _0x419dc0, _0x4b418d[_0x2d500d + 4], _0x1e7bb4, 4149444226);
    _0x419dc0 = _0x4eeeb7(_0x419dc0, _0x47f36e, _0x2843fe, _0x303592, _0x4b418d[_0x2d500d + 11], _0x35cc5d, 3174756917);
    _0x303592 = _0x4eeeb7(_0x303592, _0x419dc0, _0x47f36e, _0x2843fe, _0x4b418d[_0x2d500d + 2], _0x556d84, 718787259);
    _0x2843fe = _0x4eeeb7(_0x2843fe, _0x303592, _0x419dc0, _0x47f36e, _0x4b418d[_0x2d500d + 9], _0x37121f, 3951481745);
    _0x47f36e = _0x26accb(_0x47f36e, _0x90e9ef);
    _0x2843fe = _0x26accb(_0x2843fe, _0x4037ef);
    _0x303592 = _0x26accb(_0x303592, _0x4e74f3);
    _0x419dc0 = _0x26accb(_0x419dc0, _0x33fc3d);
  }
  var _0x2df1cd = _0x103f28(_0x47f36e) + _0x103f28(_0x2843fe) + _0x103f28(_0x303592) + _0x103f28(_0x419dc0);
  return _0x2df1cd.toLowerCase();
}
function _0x30951f(_0x2b77a3, _0x373b2e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x3c8f47 {
    constructor(_0x35c06d) {
      this.env = _0x35c06d;
    }
    send(_0xb00eff, _0x41dbc9 = "GET") {
      _0xb00eff = "string" == typeof _0xb00eff ? {
        url: _0xb00eff
      } : _0xb00eff;
      let _0x152013 = this.get;
      "POST" === _0x41dbc9 && (_0x152013 = this.post);
      return new Promise((_0x5938e4, _0x2a0692) => {
        _0x152013.call(this, _0xb00eff, (_0x1d7bd9, _0x387aa9, _0x3e38bd) => {
          _0x1d7bd9 ? _0x2a0692(_0x1d7bd9) : _0x5938e4(_0x387aa9);
        });
      });
    }
    get(_0x44e565) {
      return this.send.call(this.env, _0x44e565);
    }
    post(_0x47e943) {
      return this.send.call(this.env, _0x47e943, "POST");
    }
  }
  return new class {
    constructor(_0x22666a, _0x55cc1c) {
      this.name = _0x22666a;
      this.http = new _0x3c8f47(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x55cc1c);
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
    toObj(_0x4252b1, _0x38df8a = null) {
      try {
        return JSON.parse(_0x4252b1);
      } catch {
        return _0x38df8a;
      }
    }
    toStr(_0x24cb0a, _0x199761 = null) {
      try {
        return JSON.stringify(_0x24cb0a);
      } catch {
        return _0x199761;
      }
    }
    getjson(_0xbb4c87, _0x3c4aba) {
      let _0x972dfb = _0x3c4aba;
      const _0x24a178 = this.getdata(_0xbb4c87);
      if (_0x24a178) {
        try {
          _0x972dfb = JSON.parse(this.getdata(_0xbb4c87));
        } catch {}
      }
      return _0x972dfb;
    }
    setjson(_0x308f43, _0x288c28) {
      try {
        return this.setdata(JSON.stringify(_0x308f43), _0x288c28);
      } catch {
        return !1;
      }
    }
    getScript(_0x1ca92c) {
      return new Promise(_0x53a02b => {
        const _0x5566ad = {
          url: _0x1ca92c
        };
        this.get(_0x5566ad, (_0xeda09f, _0x4175df, _0x1e2f9f) => _0x53a02b(_0x1e2f9f));
      });
    }
    runScript(_0x431ad9, _0x507588) {
      return new Promise(_0x19546f => {
        let _0x2befe9 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x2befe9 = _0x2befe9 ? _0x2befe9.replace(/\n/g, "").trim() : _0x2befe9;
        let _0x56191b = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x56191b = _0x56191b ? 1 * _0x56191b : 20;
        _0x56191b = _0x507588 && _0x507588.timeout ? _0x507588.timeout : _0x56191b;
        const _0x4aab61 = {
          script_text: _0x431ad9,
          mock_type: "cron",
          timeout: _0x56191b
        };
        const [_0x64d28a, _0x3f69dd] = _0x2befe9.split("@"),
          _0x54193e = {
            url: "http://" + _0x3f69dd + "/v1/scripting/evaluate",
            body: _0x4aab61,
            headers: {
              "X-Key": _0x64d28a,
              Accept: "*/*"
            }
          };
        this.post(_0x54193e, (_0x43a820, _0x416d6e, _0x483961) => _0x19546f(_0x483961));
      }).catch(_0x986a38 => this.logErr(_0x986a38));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1fef4c = this.path.resolve(this.dataFile),
          _0x5dc9a1 = this.path.resolve(process.cwd(), this.dataFile),
          _0x36aa68 = this.fs.existsSync(_0x1fef4c),
          _0x5958ee = !_0x36aa68 && this.fs.existsSync(_0x5dc9a1);
        if (!_0x36aa68 && !_0x5958ee) {
          return {};
        }
        {
          const _0x4ec8f4 = _0x36aa68 ? _0x1fef4c : _0x5dc9a1;
          try {
            return JSON.parse(this.fs.readFileSync(_0x4ec8f4));
          } catch (_0x2f933e) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4f9730 = this.path.resolve(this.dataFile),
          _0x485590 = this.path.resolve(process.cwd(), this.dataFile),
          _0x410c73 = this.fs.existsSync(_0x4f9730),
          _0xbe71b7 = !_0x410c73 && this.fs.existsSync(_0x485590),
          _0x420083 = JSON.stringify(this.data);
        _0x410c73 ? this.fs.writeFileSync(_0x4f9730, _0x420083) : _0xbe71b7 ? this.fs.writeFileSync(_0x485590, _0x420083) : this.fs.writeFileSync(_0x4f9730, _0x420083);
      }
    }
    lodash_get(_0x3dfdd5, _0x17e0ee, _0x209eea) {
      const _0x5c7e42 = _0x17e0ee.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3d00e3 = _0x3dfdd5;
      for (const _0x8e73c3 of _0x5c7e42) if (_0x3d00e3 = Object(_0x3d00e3)[_0x8e73c3], void 0 === _0x3d00e3) {
        return _0x209eea;
      }
      return _0x3d00e3;
    }
    lodash_set(_0x351069, _0x291bae, _0x3b43f1) {
      return Object(_0x351069) !== _0x351069 ? _0x351069 : (Array.isArray(_0x291bae) || (_0x291bae = _0x291bae.toString().match(/[^.[\]]+/g) || []), _0x291bae.slice(0, -1).reduce((_0x484a0a, _0x59b357, _0x10a7b9) => Object(_0x484a0a[_0x59b357]) === _0x484a0a[_0x59b357] ? _0x484a0a[_0x59b357] : _0x484a0a[_0x59b357] = Math.abs(_0x291bae[_0x10a7b9 + 1]) >> 0 == +_0x291bae[_0x10a7b9 + 1] ? [] : {}, _0x351069)[_0x291bae[_0x291bae.length - 1]] = _0x3b43f1, _0x351069);
    }
    getdata(_0x2379fa) {
      let _0x1542f1 = this.getval(_0x2379fa);
      if (/^@/.test(_0x2379fa)) {
        const [, _0x23d78c, _0x5427f8] = /^@(.*?)\.(.*?)$/.exec(_0x2379fa),
          _0x22a3a6 = _0x23d78c ? this.getval(_0x23d78c) : "";
        if (_0x22a3a6) {
          try {
            const _0xb15fc6 = JSON.parse(_0x22a3a6);
            _0x1542f1 = _0xb15fc6 ? this.lodash_get(_0xb15fc6, _0x5427f8, "") : _0x1542f1;
          } catch (_0x302f4b) {
            _0x1542f1 = "";
          }
        }
      }
      return _0x1542f1;
    }
    setdata(_0x206f99, _0x50ad55) {
      let _0x36cdde = !1;
      if (/^@/.test(_0x50ad55)) {
        const [, _0x16ab6f, _0xab198d] = /^@(.*?)\.(.*?)$/.exec(_0x50ad55),
          _0x52f231 = this.getval(_0x16ab6f),
          _0x3cfbbb = _0x16ab6f ? "null" === _0x52f231 ? null : _0x52f231 || "{}" : "{}";
        try {
          const _0x2d3dae = JSON.parse(_0x3cfbbb);
          this.lodash_set(_0x2d3dae, _0xab198d, _0x206f99);
          _0x36cdde = this.setval(JSON.stringify(_0x2d3dae), _0x16ab6f);
        } catch (_0x25b884) {
          const _0x212bc7 = {};
          this.lodash_set(_0x212bc7, _0xab198d, _0x206f99);
          _0x36cdde = this.setval(JSON.stringify(_0x212bc7), _0x16ab6f);
        }
      } else {
        _0x36cdde = this.setval(_0x206f99, _0x50ad55);
      }
      return _0x36cdde;
    }
    getval(_0x34cd81) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x34cd81) : this.isQuanX() ? $prefs.valueForKey(_0x34cd81) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x34cd81]) : this.data && this.data[_0x34cd81] || null;
    }
    setval(_0x30d00b, _0x467879) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x30d00b, _0x467879) : this.isQuanX() ? $prefs.setValueForKey(_0x30d00b, _0x467879) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x467879] = _0x30d00b, this.writedata(), !0) : this.data && this.data[_0x467879] || null;
    }
    initGotEnv(_0x184da1) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x184da1 && (_0x184da1.headers = _0x184da1.headers ? _0x184da1.headers : {}, void 0 === _0x184da1.headers.Cookie && void 0 === _0x184da1.cookieJar && (_0x184da1.cookieJar = this.ckjar));
    }
    get(_0x532d73, _0x291133 = () => {}) {
      const _0x273b23 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x6b5969 = {
        hints: !1
      };
      _0x532d73.headers && (delete _0x532d73.headers["Content-Type"], delete _0x532d73.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x532d73.headers = _0x532d73.headers || {}, Object.assign(_0x532d73.headers, _0x273b23)), $httpClient.get(_0x532d73, (_0x34e1ab, _0x192662, _0x1090bb) => {
        !_0x34e1ab && _0x192662 && (_0x192662.body = _0x1090bb, _0x192662.statusCode = _0x192662.status);
        _0x291133(_0x34e1ab, _0x192662, _0x1090bb);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x532d73.opts = _0x532d73.opts || {}, Object.assign(_0x532d73.opts, _0x6b5969)), $task.fetch(_0x532d73).then(_0x4c3500 => {
        const {
            statusCode: _0x389c77,
            statusCode: _0x3bce27,
            headers: _0x2e4064,
            body: _0x4659b0
          } = _0x4c3500,
          _0x37af4b = {
            status: _0x389c77,
            statusCode: _0x3bce27,
            headers: _0x2e4064,
            body: _0x4659b0
          };
        _0x291133(null, _0x37af4b, _0x4659b0);
      }, _0x139d66 => _0x291133(_0x139d66))) : this.isNode() && (this.initGotEnv(_0x532d73), this.got(_0x532d73).on("redirect", (_0x454902, _0x51cbdd) => {
        try {
          if (_0x454902.headers["set-cookie"]) {
            const _0x15c7e9 = _0x454902.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(_0x15c7e9, null);
            _0x51cbdd.cookieJar = this.ckjar;
          }
        } catch (_0x51472e) {
          this.logErr(_0x51472e);
        }
      }).then(_0x26c4ab => {
        const {
            statusCode: _0x1afb9b,
            statusCode: _0x3600e4,
            headers: _0x5b51cb,
            body: _0x2b2da0
          } = _0x26c4ab,
          _0x5e62c4 = {
            status: _0x1afb9b,
            statusCode: _0x3600e4,
            headers: _0x5b51cb,
            body: _0x2b2da0
          };
        _0x291133(null, _0x5e62c4, _0x2b2da0);
      }, _0x696842 => {
        const {
          message: _0x17f326,
          response: _0x2ab6b9
        } = _0x696842;
        _0x291133(_0x17f326, _0x2ab6b9, _0x2ab6b9 && _0x2ab6b9.body);
      }));
    }
    post(_0xda8820, _0x499b31 = () => {}) {
      const _0x4a2cab = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x47ac4f = {
        hints: !1
      };
      if (_0xda8820.body && _0xda8820.headers && !_0xda8820.headers["Content-Type"] && (_0xda8820.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0xda8820.headers && delete _0xda8820.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0xda8820.headers = _0xda8820.headers || {}, Object.assign(_0xda8820.headers, _0x4a2cab));
        $httpClient.post(_0xda8820, (_0x254eca, _0x100d12, _0x4dfe90) => {
          !_0x254eca && _0x100d12 && (_0x100d12.body = _0x4dfe90, _0x100d12.statusCode = _0x100d12.status);
          _0x499b31(_0x254eca, _0x100d12, _0x4dfe90);
        });
      } else {
        if (this.isQuanX()) {
          _0xda8820.method = "POST";
          this.isNeedRewrite && (_0xda8820.opts = _0xda8820.opts || {}, Object.assign(_0xda8820.opts, _0x47ac4f));
          $task.fetch(_0xda8820).then(_0x36921d => {
            const {
                statusCode: _0x570993,
                statusCode: _0x761dfb,
                headers: _0x1d67cd,
                body: _0x577af7
              } = _0x36921d,
              _0x28ce40 = {
                status: _0x570993,
                statusCode: _0x761dfb,
                headers: _0x1d67cd,
                body: _0x577af7
              };
            _0x499b31(null, _0x28ce40, _0x577af7);
          }, _0x225afe => _0x499b31(_0x225afe));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xda8820);
            const {
              url: _0x3c3ab0,
              ..._0x387c34
            } = _0xda8820;
            this.got.post(_0x3c3ab0, _0x387c34).then(_0x1af456 => {
              const {
                  statusCode: _0x4027ad,
                  statusCode: _0x16b569,
                  headers: _0x75c409,
                  body: _0x5bf035
                } = _0x1af456,
                _0xee945c = {
                  status: _0x4027ad,
                  statusCode: _0x16b569,
                  headers: _0x75c409,
                  body: _0x5bf035
                };
              _0x499b31(null, _0xee945c, _0x5bf035);
            }, _0x54a1aa => {
              const {
                message: _0x48b9fd,
                response: _0x34470e
              } = _0x54a1aa;
              _0x499b31(_0x48b9fd, _0x34470e, _0x34470e && _0x34470e.body);
            });
          }
        }
      }
    }
    time(_0x48846b) {
      let _0x25e087 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x48846b) && (_0x48846b = _0x48846b.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x16290a in _0x25e087) new RegExp("(" + _0x16290a + ")").test(_0x48846b) && (_0x48846b = _0x48846b.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x25e087[_0x16290a] : ("00" + _0x25e087[_0x16290a]).substr(("" + _0x25e087[_0x16290a]).length)));
      return _0x48846b;
    }
    msg(_0x1a2ff2 = _0x2b77a3, _0x5c8d95 = "", _0x31b5d0 = "", _0x3fc72f) {
      const _0x48e996 = _0x3b04c8 => {
        if (!_0x3b04c8) {
          return _0x3b04c8;
        }
        if ("string" == typeof _0x3b04c8) {
          return this.isLoon() ? _0x3b04c8 : this.isQuanX() ? {
            "open-url": _0x3b04c8
          } : this.isSurge() ? {
            url: _0x3b04c8
          } : void 0;
        }
        if ("object" == typeof _0x3b04c8) {
          if (this.isLoon()) {
            let _0x242894 = _0x3b04c8.openUrl || _0x3b04c8.url || _0x3b04c8["open-url"],
              _0x3f5f4 = _0x3b04c8.mediaUrl || _0x3b04c8["media-url"];
            const _0x104c49 = {
              openUrl: _0x242894,
              mediaUrl: _0x3f5f4
            };
            return _0x104c49;
          }
          if (this.isQuanX()) {
            let _0x261dea = _0x3b04c8["open-url"] || _0x3b04c8.url || _0x3b04c8.openUrl,
              _0x5909f7 = _0x3b04c8["media-url"] || _0x3b04c8.mediaUrl;
            const _0x2539df = {
              "open-url": _0x261dea,
              "media-url": _0x5909f7
            };
            return _0x2539df;
          }
          if (this.isSurge()) {
            let _0x547597 = _0x3b04c8.url || _0x3b04c8.openUrl || _0x3b04c8["open-url"];
            const _0x2ffb9e = {
              url: _0x547597
            };
            return _0x2ffb9e;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1a2ff2, _0x5c8d95, _0x31b5d0, _0x48e996(_0x3fc72f)) : this.isQuanX() && $notify(_0x1a2ff2, _0x5c8d95, _0x31b5d0, _0x48e996(_0x3fc72f)));
      let _0x138cc6 = ["", "==============📣系统通知📣=============="];
      _0x138cc6.push(_0x1a2ff2);
      _0x5c8d95 && _0x138cc6.push(_0x5c8d95);
      _0x31b5d0 && _0x138cc6.push(_0x31b5d0);
      console.log(_0x138cc6.join("\n"));
      this.logs = this.logs.concat(_0x138cc6);
    }
    log(..._0x8257ec) {
      _0x8257ec.length > 0 && (this.logs = [...this.logs, ..._0x8257ec]);
      console.log(_0x8257ec.join(this.logSeparator));
    }
    logErr(_0x15ef13, _0x2c61b0) {
      const _0x458761 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x458761 ? this.log("", "❗️" + this.name + ", 错误!", _0x15ef13.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x15ef13);
    }
    wait(_0x3d1412) {
      return new Promise(_0x4d16e5 => setTimeout(_0x4d16e5, _0x3d1412));
    }
    done(_0x5c2b66 = {}) {
      const _0x4c5ff8 = new Date().getTime(),
        _0x3ab7ac = (_0x4c5ff8 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x3ab7ac + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x5c2b66);
    }
  }(_0x2b77a3, _0x373b2e);
}