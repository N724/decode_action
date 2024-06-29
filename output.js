//Sat Jun 29 2024 11:17:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/**
*@file       腾讯视频
*@desp       本脚本仅适用于腾讯视频及体育会员每日签到，仅测试Quantumult X、青龙（只支持单账号）
*@env        txspCookie、txspRefreshCookie、txspRefreshBody、dayOfGetMonthTicket、isSkipTxspCheckIn、isLottery
*@author     WowYiJiu
*@updated    2024-6-14
*@version    v1.0.3
*@link       https://raw.githubusercontent.com/WowYiJiu/Personal/main/Script/tenvideo.js

🌟 环境变量说明
txspCookie：腾讯视频app的Cookie
txspRefreshCookie、txspRefreshBody：腾讯视频网页NewRefresh接口中的数据，用来刷新Cookie中的vqq_vusession
dayOfGetMonthTicket：每月几号领取每月球票，默认为每月1号
isSkipTxspCheckIn：值域[true, false] 默认为false表示正常进行腾讯视频会员签到，用于特殊情况下（账号需要获取短信验证码或者需要过滑块验证码）时开启
isLottery: 值域[true, false] 默认为false表示不抽奖，抽抽乐于2024年2月29日10点下线，建议不开启，反正也抽不到
❗ 本脚本只能给腾讯视频正常账号签到，如有验证请设置isSkipTxspCheckIn为true，直到手动签到无验证为止
❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖

详细功能：
🔵 腾讯视频会员签到领V力值
🔵 腾讯体育会员签到领热爱值
🔵 腾讯体育领取每日球票
🔵 腾讯体育领取每月球票

📌 获取Cookie：（重写需要获取3个值：txspCookie、txspRefreshCookie、txspRefreshBody)
- 进入腾讯视频app，点击右下角我的，点击头像下的视频VIP进入会员中心看到系统消息提示获取txspCookie成功即可
- 浏览器进入腾讯视频网页版，登录后切换成桌面版，刷新网页看到系统消息提示获取txspRefreshCookie、txspRefreshBody成功即可
- 获取Cookie后, 请将Cookie脚本禁用并移除主机名，以免产生不必要的MITM

💬 BoxJs订阅：https://raw.githubusercontent.com/WowYiJiu/Personal/main/WowYiJiu.box.json

⚙ 配置 (Quantumult X)
[MITM]
hostname = vip.video.qq.com, pbaccess.video.qq.com

[rewrite_local]
https://vip.video.qq.com/rpc/trpc.new_task_system.task_system.TaskSystem/ReadTaskList? url script-request-header https://raw.githubusercontent.com/WowYiJiu/Personal/main/Script/tenvideo.js
https://pbaccess.video.qq.com/trpc.videosearch.hot_rank.HotRankServantHttp/HotRankHttp url script-request-header https://raw.githubusercontent.com/WowYiJiu/Personal/main/Script/tenvideo.js
https://pbaccess.video.qq.com/trpc.video_account_login.web_login_trpc.WebLoginTrpc/NewRefresh url script-request-body https://raw.githubusercontent.com/WowYiJiu/Personal/main/Script/tenvideo.js

[rewrite_remote]
https://raw.githubusercontent.com/WowYiJiu/Personal/main/rewrite/get_tenvideo_cookie.conf, tag=腾讯视频, update-interval=172800, opt-parser=false, enabled=false

[task_local]
5 7 * * * https://raw.githubusercontent.com/WowYiJiu/Personal/main/Script/tenvideo.js, tag=腾讯视频, img-url=https://github.com/WowYiJiu/Personal/blob/main/icon/Color/tenvideo.png?raw=true, enabled=true
*/
const $ = new Env("\u817E\u8BAF\u89C6\u9891");
let txspCookie = ($.isNode() ? process.env.txspCookie : $.getdata("txspCookie")) || "";
let txspRefreshCookie = ($.isNode() ? process.env.txspRefreshCookie : $.getdata("txspRefreshCookie")) || "";
let txspRefreshBody = ($.isNode() ? process.env.txspRefreshBody : $.getdata("txspRefreshBody")) || "";
let dayOfGetMonthTicket = ($.isNode() ? process.env.dayOfGetMonthTicket : $.getdata("dayOfGetMonthTicket")) || 1;
let isSkipTxspCheckIn = $.isNode() ? process.env.isSkipTxspCheckIn : $.getdata("isSkipTxspCheckIn") !== undefined && $.getdata("isSkipTxspCheckIn") !== "" ? JSON.parse($.getdata("isSkipTxspCheckIn")) : false;
let isLottery = $.isNode() ? process.env.isLottery : $.getdata("isLottery") !== undefined && $.getdata("isLottery") !== "" ? JSON.parse($.getdata("isLottery")) : false;
const Notify = 1; //0为关闭通知,1为打开通知,默认为1
const notify = $.isNode() ? require("./sendNotify") : "";
let currentVersion = "v1.0.3",
  latestVersion = "";
let nickname = "";
let isTxspVip = false,
  isTxspSvip = false,
  isTxSportsVip = false,
  isTxSportsSvip = false;
let endTime = "",
  svipEndTime = "",
  txSportsEndTime = "",
  txSportsSvipEndTime = "";
let level = "",
  txSportsLevel = "";
let score = "",
  txSportsScore = "";
let month_received_score = "",
  month_limit = "";
let isTxspCheckIn = "",
  isTxSportsCheckIn = "";
let originalInfo = $.info;
let originalWarn = $.warn;
let originalError = $.error;
let message = "";
$.desc = "", $.taskInfo = "";
$.info = function (message) {
  originalInfo.call($, message);
  $.desc += message + "\n";
};
$.warn = function (message) {
  originalWarn.call($, message);
  $.desc += message + "\n";
};
$.error = function (message) {
  originalError.call($, message);
  $.desc += message + "\n";
};
if (isGetCookie = typeof $request !== `undefined`) {
  getCookie();
  $.done();
} else if (!$.isNode() && !txspCookie) {
  $.msg($.name, "\u60A8\u672A\u83B7\u53D6\u817E\u8BAF\u89C6\u9891Cookie", "\u70B9\u51FB\u6B64\u6761\u8DF3\u8F6C\u5230\u817E\u8BAF\u89C6\u9891\u83B7\u53D6Cookie", {
    "open-url": "tenvideo://",
    "media-url": "https://raw.githubusercontent.com/WowYiJiu/Personal/main/icon/videoqq.png"
  });
  $.done();
} else {
  !(async () => {
    $.log(`                               _  _ _         `);
    $.log(`  __      _______      ___   _(_)(_|_)_   _   `);
    $.log(`  \\ \\ /\\ / / _ \\ \\ /\\ / / | | | || | | | | |  `);
    $.log(`   \\ \V  \V / (_) \\ \V  \V /| |_| | || | | |_| |  `);
    $.log(`    \\_/\\_/ \\___/ \\_/\\_/  \\__, |_|/ |_|\\__,_|  `);
    $.log(`                         |___/ |__/           `);
    await getNotice();
    await getVersion();
    $.log(`\n当前版本：${currentVersion}  最新版本：${latestVersion}\n`);
    $.version = `\n当前版本：${currentVersion}  最新版本：${latestVersion}\n`;
    if (!txspCookie) {
      $.warn(`未填写txspCookie环境变量`);
      return;
    }
    $.info("---- \u5F00\u59CB \u5237\u65B0vusession ----");
    await refresh_vusession();
    $.info(`--------- 结束 ---------\n`);
    $.info(`用户昵称：${nickname}`);
    await getVipInfo();
    if (isTxspVip) {
      $.info(`---- 腾讯视频VIP信息 ----`);
      if (isTxspSvip) {
        $.info(`当前是腾讯视频SVIP`);
      } else {
        $.info(`当前是腾讯视频VIP`);
      }
      $.info(`当前等级：${level}`);
      $.info(`当前成长：${score}`);
      if (isTxspSvip) {
        $.info(`SVIP到期时间：${svipEndTime}`);
      }
      $.info(`VIP到期时间：${endTime}`);
      $.info(`--------- 结束 ---------\n`);
    }
    if (isTxSportsVip) {
      $.info(`--- 腾讯体育VIP信息 ---`);
      if (isTxSportsSvip) {
        $.info(`当前是腾讯体育超级VIP`);
      } else {
        $.info(`当前是腾讯体育VIP`);
      }
      $.info(`当前等级：${txSportsLevel}`);
      $.info(`当前成长：${txSportsScore}`);
      if (isTxSportsSvip) {
        $.info(`SVIP到期时间：${txSportsSvipEndTime}`);
      }
      $.info(`VIP到期时间：${txSportsEndTime}`);
      $.info(`--------- 结束 ---------\n`);
    }
    if (isTxspVip) {
      $.info(`---- 开始 腾讯视频签到 ----`);
      if (isSkipTxspCheckIn) {
        $.info(`当前设置为不进行腾讯视频签到，跳过`);
      } else {
        await readTxspTaskList();
        await waitRandom(1000, 2000);
        if (month_received_score === month_limit) {
          $.info(`本月活跃任务已满${month_limit}V力值，下个月再来哦`);
        } else if (isTxspCheckIn) {
          $.info(`今天已签到, 明日再来吧`);
        } else {
          await txspCheckIn();
          await waitRandom(1000, 2000);
        }
      }
      $.info(`--------- 结束 ---------\n`);
    }
    if (isTxSportsVip) {
      $.info(`---- 开始 腾讯体育签到 ----`);
      await readTxSportsTaskList();
      await waitRandom(1000, 2000);
      if (isTxSportsCheckIn) {
        $.info(`今天已签到, 明日再来吧`);
      } else {
        await txSportsCheckIn();
        await waitRandom(1000, 2000);
      }
      $.info(`--------- 结束 ---------\n`);
      $.info(`---- 开始 领取每日球票 ----`);
      await getDayTicket();
      await waitRandom(1000, 2000);
      $.info(`--------- 结束 ---------\n`);
      $.info(`---- 开始 领取每月球票 ----`);
      var today = new Date();
      var date = today.getDate();
      if (date !== dayOfGetMonthTicket) {
        $.info(`目标日期：${dayOfGetMonthTicket}号`);
        $.info(`今天是${date}号`);
        $.info(`跳过`);
      } else {
        $.info(`目标日期：${dayOfGetMonthTicket}号`);
        $.info(`今天是${date}号`);
        await getMonthTicket();
      }
      $.info(`--------- 结束 ---------\n`);
      if (isLottery) {
        $.info(`---- 开始 抽抽乐 ----`);
        await lottery();
        await waitRandom(1000, 2000);
        $.info(`--------- 结束 ---------`);
      }
    }
    await SendMsg();
  })().catch(e => $.error(e)).finally(() => $.done());
}
async function refresh_vusession() {
  return new Promise(resolve => {
    let opt = {
      url: `https://pbaccess.video.qq.com/trpc.video_account_login.web_login_trpc.WebLoginTrpc/NewRefresh`,
      headers: {
        cookie: txspRefreshCookie,
        origin: "https://v.qq.com",
        referer: "https://v.qq.com/",
        "Content-Type": "application/json"
      },
      body: txspRefreshBody
    };
    $.post(opt, async (error, resp, data) => {
      if (safeGet(data)) {
        var obj = JSON.parse(data);
        if (obj.data.errcode === 0) {
          let vqq_vusession = obj.data.vusession;
          nickname = decodeURIComponent(obj.data.nick);
          if (txspCookie.match(/main_login=([^;]*)/)[1] === "qq") {
            txspCookie = txspCookie.replace(/(vqq_vusession=)[^;]*/, `$1${vqq_vusession}`);
          } else if (txspCookie.match(/main_login=([^;]*)/)[1] === "wx") {
            txspCookie = txspCookie.replace(/(vusession=)[^;]*/, `$1${vusession}`);
          }
          $.info("\u5237\u65B0vusession\u6210\u529F");
        } else {
          $.warn("\u5237\u65B0vusession\u5931\u8D25");
        }
        resolve();
      }
    });
  });
}
async function getVipInfo() {
  return new Promise((resolve, reject) => {
    let opt = {
      url: `https://vip.video.qq.com/rpc/trpc.query_vipinfo.vipinfo.QueryVipInfo/GetVipUserInfoH5`,
      headers: {
        cookie: txspCookie,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "geticon": 1,
        "viptype": "svip|sports|nfl",
        "platform": 5
      })
    };
    $.post(opt, async (error, resp, data) => {
      try {
        if (safeGet(data)) {
          var obj = JSON.parse(data);
          if (!obj.servicetype) {
            throw new Error(`Cookie已失效`);
          } else {
            if (obj.vip === 1) {
              isTxspVip = true;
              endTime = obj.endTime;
              level = obj.level;
              score = obj.score;
            }
            if (obj.svip_info.vip === 1) {
              isTxspSvip = true;
              svipEndTime = obj.svip_info.endTime;
            }
            if (obj.sports.vip.vip === 1) {
              isTxSportsVip = true;
              txSportsEndTime = obj.sports.vip.endTime;
              txSportsLevel = obj.sports.vip.level;
              txSportsScore = obj.sports.vip.score;
            }
            if (obj.sports.svip.vip === 1) {
              isTxSportsSvip = true;
              txSportsSvipEndTime = obj.sports.svip.endTime;
            }
          }
          resolve();
        }
      } catch (e) {
        $.error(e);
        reject(`该账号本次跳过执行\n`);
      }
    });
  });
}

/**
 * 获取腾讯视频任务列表
 * @async
 * @function readTxspTaskList
 * @returns
 */
async function readTxspTaskList() {
  return new Promise(resolve => {
    let opt = {
      url: `https://vip.video.qq.com/rpc/trpc.new_task_system.task_system.TaskSystem/ReadTaskList?rpc_data={"business_id":"1","platform":5}`,
      headers: {
        Referer: "https://film.video.qq.com/x/grade/?ptag=user.apho&ovscroll=0&hidetitlebar=1&aid=V0$$1:0$2:7$3:8.11.01.25068$4:0$8:4&isDarkMode=1&uiType=REGULAR",
        Cookie: txspCookie
      }
    };
    $.get(opt, async (error, resp, data) => {
      try {
        if (safeGet(data)) {
          var obj = JSON.parse(data);
          var code = obj.ret;
          let task_maintitle = "";
          if (code === 0) {
            month_received_score = obj.limit_info.month_received_score;
            month_limit = obj.limit_info.month_limit;
            let taskList = obj.task_list;
            let txspCheckInTask = taskList && taskList.find(task => task.task_maintitle === "VIP\u4F1A\u5458\u6BCF\u65E5\u7B7E\u5230");
            isTxspCheckIn = txspCheckInTask.task_status;
          } else {
            $.warn(`获取腾讯视频任务列表失败，异常详细信息如下\n${data}`);
          }
          resolve();
        }
      } catch (e) {
        $.error(e);
      }
    });
  });
}

/**
 * 腾讯视频签到领取V力值
 * @async
 * @function txspCheckIn
 * @returns
 */
async function txspCheckIn() {
  return new Promise((resolve, reject) => {
    let opt = {
      url: `https://vip.video.qq.com/rpc/trpc.new_task_system.task_system.TaskSystem/CheckIn?rpc_data={}`,
      headers: {
        Referer: "https://film.video.qq.com/x/grade/?ptag=user.apho&ovscroll=0&hidetitlebar=1&aid=V0$$1:0$2:7$3:8.11.01.25068$4:0$8:4&isDarkMode=1&uiType=REGULAR",
        Cookie: txspCookie
      }
    };
    $.get(opt, async (error, resp, data) => {
      var obj = JSON.parse(data);
      var code = obj.ret;
      if (code === 0 && obj.check_in_score != undefined) {
        $.info(`签到成功：获得${obj.check_in_score}V力值`);
        $.taskInfo = `签到成功：获得${obj.check_in_score}V力值\n`;
      } else if (code === -2002) {
        $.info(`今天已签到, 明日再来吧`);
        $.taskInfo = `今天已签到, 明日再来吧\n`;
      } else {
        $.warn(`签到失败，异常详细信息如下\n${data}`);
        $.taskInfo = `签到失败, 异常详细信息请查看日志\n`;
      }
      resolve();
    });
  });
}

/**
 * 获取腾讯体育任务列表
 * @async
 * @function readTxSportsTaskList
 * @returns
 */
async function readTxSportsTaskList() {
  return new Promise(resolve => {
    let opt = {
      url: `https://vip.video.qq.com/rpc/trpc.new_task_system.task_system.TaskSystem/ReadTaskList?rpc_data={"business_id":3,"channel_id":4,"platform":5}`,
      headers: {
        Referer: "https://film.video.qq.com/x/sports-grade/?ovscroll=0&hidetitlebar=1&immersive=1",
        Cookie: txspCookie
      }
    };
    $.get(opt, async (error, resp, data) => {
      try {
        if (safeGet(data)) {
          var obj = JSON.parse(data);
          var code = obj.ret;
          let task_maintitle = "";
          if (code === 0) {
            let taskList = obj.task_list;
            let txSportsCheckInTasks = taskList && taskList.find(task => task.task_maintitle === "\u6BCF\u65E5\u7B7E\u5230");
            isTxSportsCheckIn = txSportsCheckInTasks.task_status;
          } else {
            $.warn(`获取腾讯视频任务列表失败，异常详细信息如下\n${data}`);
          }
          resolve();
        }
      } catch (e) {
        $.error(e);
      }
    });
  });
}

/**
 * 腾讯体育签到领取热爱值
 * @async
 * @function txSportsCheckIn
 * @returns
 */
async function txSportsCheckIn() {
  return new Promise((resolve, reject) => {
    let opt = {
      url: `https://vip.video.qq.com/rpc/trpc.new_task_system.task_system.TaskSystem/CheckIn?rpc_data={"task_id":8006}`,
      headers: {
        Referer: "https://film.video.qq.com/x/sports-grade/?ovscroll=0&hidetitlebar=1&immersive=1",
        Cookie: txspCookie
      }
    };
    $.get(opt, async (error, resp, data) => {
      var obj = JSON.parse(data);
      var code = obj.ret;
      if (code === 0 && obj.check_in_score != undefined) {
        $.info(`签到成功：获得${obj.check_in_score}热爱值`);
        $.taskInfo += `签到成功：获得${obj.check_in_score}热爱值\n`;
      } else if (code === -2002) {
        $.info(`今天已签到, 明日再来吧`);
        $.taskInfo += `今天已签到, 明日再来吧\n`;
      } else {
        $.warn(`签到失败，异常详细信息如下\n${data}`);
        $.taskInfo += `签到失败, 异常详细信息请查看日志\n`;
      }
      resolve();
    });
  });
}

/**
 * 领取每日球票
 * @async
 * @function getDayTicket
 * @returns
 */
async function getDayTicket() {
  return new Promise((resolve, reject) => {
    let opt = {
      url: "https://activity.video.qq.com/fcgi-bin/asyn_activity?otype=xjson&act_id=118561&module_id=158089&type=90&option=5",
      headers: {
        Origin: "https://film.video.qq.com",
        Referer: "https://film.video.qq.com/x/sports-vip-channel/?from=tab",
        Cookie: txspCookie
      }
    };
    $.get(opt, async (error, resp, data) => {
      try {
        var obj = JSON.parse(data);
        var code = obj.ret;
        if (code === 0) {
          $.info(`领取每日球票成功`);
          $.taskInfo += `领取每日球票成功\n`;
        } else if (code === -2021) {
          $.info(`每日球票已领取, 明日再来吧`);
          $.taskInfo += `每日球票已领取, 明日再来吧\n`;
        } else {
          $.warn(`领取每日球票失败，异常详细信息如下\n${data}`);
          $.taskInfo += `领取每日球票失败，异常详细信息请查看日志\n`;
        }
      } catch (e) {
        $.error(e);
      } finally {
        resolve();
      }
    });
  });
}

/**
 * 领取每月球票
 * @async
 * @function getMonthTicket
 * @returns
 */
async function getMonthTicket() {
  return new Promise((resolve, reject) => {
    let opt = {
      url: "https://activity.video.qq.com/fcgi-bin/asyn_activity?otype=xjson&act_id=118561&module_id=165163&type=100160&option=100",
      headers: {
        Origin: "https://film.video.qq.com",
        Referer: "https://film.video.qq.com/x/sports-vip-channel/?from=tab",
        Cookie: txspCookie
      }
    };
    $.get(opt, async (error, resp, data) => {
      try {
        var obj = JSON.parse(data);
        var code = obj.ret;
        if (code === 0) {
          $.info(`领取每月球票成功`);
          $.taskInfo += `领取每月球票成功\n`;
        } else if (code === -903) {
          $.info(`每月球票已领取，下个月再来哦`);
          $.taskInfo += `每月球票已领取，下个月再来哦\n`;
        } else {
          $.warn(`领取每月球票失败，异常详细信息如下\n${data}`);
          $.taskInfo += `领取每月球票失败，异常详细信息请查看日志\n`;
        }
      } catch (e) {
        $.error(e);
      } finally {
        resolve();
      }
    });
  });
}

/**
 * 抽抽乐 2024年2月29日10点下线
 * @async
 * @function lottery()
 * @returns
 */
async function lottery() {
  return new Promise((resolve, reject) => {
    let opt = {
      url: "https://activity.video.qq.com/fcgi-bin/asyn_activity?otype=xjson&act_id=118561&module_id=158090&type=100143&option=100",
      headers: {
        Origin: "https://film.video.qq.com",
        Referer: "https://film.video.qq.com/x/sports-vip-channel/?from=tab",
        Cookie: txspCookie
      }
    };
    $.get(opt, async (error, resp, data) => {
      try {
        var obj = JSON.parse(data);
        var code = obj.ret;
        if (code === 0) {
          $.info(`抽奖成功: ${obj.lotter_ext}`);
        } else if (code === -904) {
          $.info(`今天已抽奖, 明日再来吧`);
        } else {
          $.warn(`抽奖失败，异常详细信息如下\n${data}`);
        }
      } catch (e) {
        $.error(e);
      } finally {
        resolve();
      }
    });
  });
}
function getCookie() {
  if ($request && $request.method != `OPTIONS` && $request.url.match(/\/rpc\/trpc\.new_task_system\.task_system\.TaskSystem\/ReadTaskList/)) {
    let txsp = $request.headers["Cookie"] || $request.headers["cookie"];
    if (txsp) {
      if (typeof txspCookie === "undefined" || txspCookie && txspCookie.length === 0) {
        $.setdata(txsp, "txspCookie");
        $.log(`Cookie: ${txsp}`);
        $.msg($.name, "\uD83C\uDF89 Cookie\u5199\u5165\u6210\u529F", "\u4E0D\u7528\u8BF7\u81EA\u884C\u5173\u95ED\u91CD\u5199!");
      } else if (txsp !== txspCookie) {
        $.setdata(txsp, "txspCookie");
        $.log(`Cookie: ${txsp}`);
        $.msg($.name, "\uD83C\uDF89 Cookie\u66F4\u65B0\u6210\u529F", "\u4E0D\u7528\u8BF7\u81EA\u884C\u5173\u95ED\u91CD\u5199!");
      } else {
        $.msg($.name, "\u26A0\uFE0F Cookie\u672A\u53D8\u52A8 \u8DF3\u8FC7\u66F4\u65B0", "\u4E0D\u7528\u8BF7\u81EA\u884C\u5173\u95ED\u91CD\u5199!");
      }
    } else {
      $.msg($.name, "\u26A0\uFE0F Cookie\u672A\u627E\u5230", "\u4E0D\u7528\u8BF7\u81EA\u884C\u5173\u95ED\u91CD\u5199!");
    }
  }
  if ($request && $request.method != `OPTIONS` && $request.url.match(/\/trpc\.videosearch\.hot_rank\.HotRankServantHttp\/HotRankHttp/)) {
    let refreshCookie = $request.headers["Cookie"] || $request.headers["cookie"];
    if (refreshCookie) {
      if (typeof txspRefreshCookie === "undefined" || txspRefreshCookie && txspRefreshCookie.length === 0) {
        $.setdata(refreshCookie, "txspRefreshCookie");
        $.log(`Cookie: ${refreshCookie}`);
        $.msg($.name, "\uD83C\uDF89 refreshCookie\u5199\u5165\u6210\u529F", "\u4E0D\u7528\u8BF7\u81EA\u884C\u5173\u95ED\u91CD\u5199!");
      } else if (refreshCookie !== txspRefreshCookie) {
        $.setdata(refreshCookie, "txspRefreshCookie");
        $.log(`Cookie: ${refreshCookie}`);
        $.msg($.name, "\uD83C\uDF89 refreshCookie\u66F4\u65B0\u6210\u529F", "\u4E0D\u7528\u8BF7\u81EA\u884C\u5173\u95ED\u91CD\u5199!");
      } else {
        $.msg($.name, "\u26A0\uFE0F refreshCookie\u672A\u53D8\u52A8 \u8DF3\u8FC7\u66F4\u65B0", "\u4E0D\u7528\u8BF7\u81EA\u884C\u5173\u95ED\u91CD\u5199!");
      }
    } else {
      $.msg($.name, "\u26A0\uFE0F refreshCookie\u672A\u627E\u5230", "\u4E0D\u7528\u8BF7\u81EA\u884C\u5173\u95ED\u91CD\u5199!");
    }
  }
  if ($request && $request.method != `OPTIONS` && $request.url.match(/\/trpc\.video_account_login\.web_login_trpc\.WebLoginTrpc\/NewRefresh/)) {
    let refreshBody = $request.body;
    if (refreshBody) {
      if (typeof txspRefreshBody === "undefined" || txspRefreshBody && txspRefreshBody.length === 0) {
        $.setdata(refreshBody, "txspRefreshBody");
        $.log(`refreshBody: ${refreshBody}`);
        $.msg($.name, "\uD83C\uDF89 refreshBody\u5199\u5165\u6210\u529F", "\u4E0D\u7528\u8BF7\u81EA\u884C\u5173\u95ED\u91CD\u5199!");
      } else if (refreshBody !== txspRefreshBody) {
        $.setdata(refreshBody, "txspRefreshBody");
        $.log(`refreshBody: ${refreshBody}`);
        $.msg($.name, "\uD83C\uDF89 refreshBody\u66F4\u65B0\u6210\u529F", "\u4E0D\u7528\u8BF7\u81EA\u884C\u5173\u95ED\u91CD\u5199!");
      } else {
        $.msg($.name, "\u26A0\uFE0F refreshBody\u672A\u53D8\u52A8 \u8DF3\u8FC7\u66F4\u65B0", "\u4E0D\u7528\u8BF7\u81EA\u884C\u5173\u95ED\u91CD\u5199!");
      }
    }
  }
}
async function getNotice() {
  return new Promise(resolve => {
    let opt = {
      url: "https://github.wowyijiu.today/https://raw.githubusercontent.com/WowYiJiu/Personal/main/WowYiJiu.json",
      timeout: 10000
    };
    $.get(opt, async (error, resp, data) => {
      try {
        if (error) {
          $.error("\uD83D\uDC7E \u83B7\u53D6\u514D\u8D23\u58F0\u660E\u5931\u8D25");
          resolve();
        } else {
          if (data) {
            var obj = JSON.parse(data);
            $.log(obj.notice);
            resolve();
          }
        }
      } catch (e) {
        $.error(e);
        resolve();
      }
    });
  });
}
async function getVersion() {
  const timeoutMs = 10000;
  const opt = {
    url: "https://github.wowyijiu.today/https://raw.githubusercontent.com/WowYiJiu/Personal/main/Script/tenvideo.js",
    timeout: timeoutMs
  };
  const data = await new Promise(resolve => {
    $.get(opt, (error, resp, data) => {
      if (error) {
        resolve("undefined");
      } else {
        resolve(data);
      }
    });
  });
  const versionInfo = data.match(/@version\s+(v\d+\.\d+\.\d+)/);
  if (versionInfo) {
    latestVersion = versionInfo[1];
  } else {
    latestVersion = "undefined";
  }
  return latestVersion;
}
async function SendMsg() {
  if (Notify > 0) {
    if ($.isNode()) {
      await notify.sendNotify($.name, `${$.version}\n\n${$.desc}`);
    } else {
      $.msg($.name, "", `${$.version}\n${$.taskInfo}`);
    }
  } else {
    $.msg($.name, "", `${$.version}\n${$.taskInfo}`);
  }
}
async function waitRandom(min, max) {
  var time = getRandomInt(min, max);
  await $.wait(time);
}

// 随机生成整数
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 提取Cookie的指定字段
function extractValues(str, keys) {
  let results = keys.map(key => str.split("; ").find(s => s.startsWith(key + "=")));
  return results.join(";");
}

// 判断时间戳是不是今天
function isToday(timestamp) {
  let date = new Date(timestamp);
  let today = new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
}
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    $.error(e);
    $.error(`腾讯视频访问数据为空，请检查Cookie是否有效`);
    return false;
  }
}

// prettier-ignore
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
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
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
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      }, this.logLevelPrefixs = {
        debug: " DEBUG",
        info: " INFO",
        warn: " WARN",
        error: " ERROR"
      }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
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
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
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
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20, o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) return s;
      return o;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s), t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) try {
          const t = JSON.parse(o);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t), s = this.setval(JSON.stringify(r), i);
        }
      } else s = this.setval(t, e);
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
          return this.data = this.loaddata(), this.data[t];
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
          return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      return e = e.substring(0, e.length - 1), e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
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
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) t = i;else if (i.startsWith("data:")) {
                      const [t] = i.split(";"),
                        [, o] = i.split(",");
                      e = o, s = t.replace("data:", "");
                    } else {
                      e = i, s = (t => {
                        const e = {
                          JVBERi0: "application/pdf",
                          R0lGODdh: "image/gif",
                          R0lGODlh: "image/gif",
                          iVBORw0KGgo: "image/png",
                          "/9j/": "image/jpg"
                        };
                        for (var s in e) if (0 === t.indexOf(s)) return e[s];
                        return null;
                      })(i);
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  return Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  }), r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  return i?.startsWith("http") && (r = i), r && Object.assign(s, {
                    mediaUrl: r
                  }), console.log(JSON.stringify(s)), s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i), a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  return n && Object.assign(o, {
                    "update-pasteboard": n
                  }), console.log(JSON.stringify(o)), o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(e, s, i, r(o));
          break;
        case "Quantumult X":
          $notify(e, s, i, r(o));
          break;
        case "Node.js":
          break;
      }
      if (!this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`[${this.time("HH:mm:ss")}${this.logLevelPrefixs.debug}] ${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`[${this.time("HH:mm:ss")}${this.logLevelPrefixs.info}] ${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`[${this.time("HH:mm:ss")}${this.logLevelPrefixs.warn}] ${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`[${this.time("HH:mm:ss")}${this.logLevelPrefixs.error}] ${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
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