//Sat Jun 29 2024 12:38:22 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios");
function signIn(_0x302a05, _0x4c9627) {
  const _0x1f25d1 = {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Connection": "keep-alive",
      "Content-Type": "application/json",
      "Host": "www.kugua.com",
      "Referer": "https://servicewechat.com/wx1f9fc8e79fcbce16/93/page-frame.html",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b11)XWEB/9185",
      "xweb_xhr": "1"
    },
    _0x21e218 = {
      "type": 1,
      "invite_id": "",
      "code_ticket": "",
      "count": "",
      "token": _0x302a05,
      "appid": "wx1f9fc8e79fcbce16",
      "openid": _0x4c9627
    };
  return axios.post("https://www.kugua.com/wxapp/inflatedv3/popUpRedEnvelopes", _0x21e218, {
    "headers": _0x1f25d1
  }).then(_0x197bc2 => {
    return console.log("签到成功"), console.log(_0x197bc2.data), _0x197bc2.data.data.dialogId;
  }).catch(_0x498753 => {
    console.error("签到失败", _0x498753);
    throw _0x498753;
  });
}
function withdraw(_0x3cb46e, _0x2e8f6f, _0x41b900) {
  const _0x5436d9 = {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Connection": "keep-alive",
      "Content-Type": "application/json",
      "Host": "www.kugua.com",
      "Referer": "https://servicewechat.com/wx1f9fc8e79fcbce16/93/page-frame.html",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309092b) XWEB/8555",
      "xweb_xhr": "1"
    },
    _0x33fce6 = {
      "dialogId": _0x41b900,
      "token": _0x3cb46e,
      "appid": "wx1f9fc8e79fcbce16",
      "openid": _0x2e8f6f
    };
  return axios.post("https://www.kugua.com/wxapp/inflatedv3/receiveRedEnvelopes", _0x33fce6, {
    "headers": _0x5436d9
  }).then(_0x3f2709 => {
    console.log(_0x3f2709.data);
  }).catch(_0x45f625 => {
    console.error("提现失败", _0x45f625);
    throw _0x45f625;
  });
}
function getToken(_0x55a62e) {
  const _0x28fdb6 = {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Connection": "keep-alive",
      "Content-Type": "application/json",
      "Host": "www.kugua.com",
      "Referer": "https://servicewechat.com/wx1f9fc8e79fcbce16/94/page-frame.html",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b11)XWEB/9185",
      "xweb_xhr": "1"
    },
    _0x5c49d2 = {
      "refresh_token": _0x55a62e
    };
  return axios.post("https://www.kugua.com/wxapp/refreshToken", _0x5c49d2, {
    "headers": _0x28fdb6
  }).then(_0x381c1f => {
    return console.log(_0x381c1f.data), _0x381c1f.data.data.token;
  }).catch(_0x34c5eb => {
    console.error("获取token失败", _0x34c5eb);
    throw _0x34c5eb;
  });
}
function printAsciiArt() {
  console.log("// ┏┓   ┏┓");
  console.log("// ┏┛┻━━━┛┻┓");
  console.log("// ┃       ┃");
  console.log("// ┃   ━   ┃");
  console.log("// ┃ ┳┛ ┗┳ ┃");
  console.log("// ┃       ┃");
  console.log("// ┃   ┻   ┃");
  console.log("// ┃       ┃");
  console.log("// ┗━┓   ┏━┛");
  console.log("// ┃   ┃ 分享群：");
  console.log("// ┃   ┃ 780261548");
  console.log("// ┃   ┗━━━┓");
  console.log("// ┃       ┣┓");
  console.log("// ┃       ┏┛");
  console.log("// ┗┓┓┏━┳┓┏┛");
  console.log("// ┃┫┫ ┃┫┫");
  console.log("// ┗┻┛ ┗┻┛");
}
async function main() {
  printAsciiArt();
  const _0x51b435 = process.env.kg;
  if (_0x51b435) {
    const _0x4b9eec = _0x51b435.includes("@") ? _0x51b435.split("@") : _0x51b435.split(" ");
    console.log("共" + _0x4b9eec.length + "个账号");
    for (let _0x1b9748 = 0; _0x1b9748 < _0x4b9eec.length; _0x1b9748++) {
      const [_0x581fd8, _0x230f4d] = _0x4b9eec[_0x1b9748].split("&");
      try {
        const _0x3266d4 = await getToken(_0x581fd8),
          _0x8eba4b = await signIn(_0x3266d4, _0x230f4d);
        await withdraw(_0x3266d4, _0x230f4d, _0x8eba4b);
        await new Promise(_0x223a7f => setTimeout(_0x223a7f, 3000));
      } catch (_0xd894f8) {
        console.error(_0xd894f8);
        continue;
      }
    }
  } else {
    console.log("变量不存在");
  }
}
main();