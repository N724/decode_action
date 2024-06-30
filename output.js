//Sun Jun 30 2024 14:08:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function Ii1Il1II() {
  function il1lIIli(iill111l, lil1llil) {
    this.pin = iill111l;
    this.key = lil1llil;
  }
  let I11Ili11 = [];
  let llI11ll = ["qq", "tg", "wx"];
  llI11ll.forEach(iliI11I => {
    let IllIlii1 = "pin" + iliI11I.toUpperCase();
    bucketKeys(IllIlii1).forEach(ililIIi1 => {
      let lIlIiI11 = new il1lIIli(ililIIi1, null);
      lIlIiI11.ImType = iliI11I;
      lIlIiI11.ImId = bucketGet(IllIlii1, ililIIi1);
      try {
        lIlIiI11.key = JSON.parse(bucketGet("jdNotify", ililIIi1)).PtKey;
      } catch (IlIIiIII) {}
      I11Ili11.push(lIlIiI11);
    });
  });
  I11Ili11 = I11Ili11.filter(Ii1IIi1 => GetUserID() == Ii1IIi1.ImId);
  if (I11Ili11.length > 0) {
    let ll1iliii = [];
    I11Ili11.forEach(iiiIIIiI => {
      let lIIliIi1 = liIlII1l("pt_key=" + iiiIIIiI.key + ";pt_pin=" + iiiIIIiI.pin + ";");
      if (ll1iliii.length == 0) {
        ll1iliii = lIIliIi1;
      } else {
        for (let iiIiI1iI in lIIliIi1) {
          ll1iliii[iiIiI1iI][0] += lIIliIi1[iiIiI1iI][0];
          ll1iliii[iiIiI1iI][1] += lIIliIi1[iiIiI1iI][1];
        }
      }
      sendImage("https://quickchart.io/chart/render/zm-65f02754-25d6-42e0-a38c-cbb591c5fa4c?title=" + encodeURIComponent("【" + decodeURIComponent(iiiIIIiI.pin) + "】") + "&data1=" + encodeURIComponent(Iiiilii1(lIIliIi1, i1Iii1il => i1Iii1il[0]).join(",")) + "&data2=" + encodeURIComponent(Iiiilii1(lIIliIi1, ill1I1lI => ill1I1lI[1]).join(",")) + "&labels=" + encodeURIComponent(Object.keys(lIIliIi1).map(lil1IliI => lil1IliI.substring(5)).join(",")));
    });
    if (I11Ili11.length > 1) {
      sendImage("https://quickchart.io/chart/render/zm-65f02754-25d6-42e0-a38c-cbb591c5fa4c?title=" + encodeURIComponent("【所有账号】") + "&data1=" + encodeURIComponent(Iiiilii1(ll1iliii, I1liI1lI => I1liI1lI[0]).join(",")) + "&data2=" + encodeURIComponent(Iiiilii1(ll1iliii, lllIII1 => lllIII1[1]).join(",")) + "&labels=" + encodeURIComponent(Object.keys(ll1iliii).map(liliIii1 => liliIii1.substring(5)).join(",")));
    }
  } else {
    sendText("无对应账号");
  }
}
function Iiiilii1(i1Ii1II1, l1iIiiI1) {
  let li1l11Ii = [];
  for (let lIIiIi11 in i1Ii1II1) {
    li1l11Ii.push(l1iIiiI1(i1Ii1II1[lIIiIi11]));
  }
  return li1l11Ii;
}
function liIlII1l(lII1IIII) {
  let llili = IIiI1lil(6);
  let i111IIlI = Object.keys(llili);
  let lllIlill = 1;
  while (true) {
    let Iiii1iii = iiil1liI(lII1IIII, lllIlill++);
    if (!Iiii1iii || Iiii1iii.code != 0) {
      break;
    }
    let lllllili = Iiii1iii.detailList;
    if (lllllili && lllllili.length > 0) {
      for (let I11liIi1 of lllllili) {
        let iIlillil = I11liIi1.date.split(" ");
        if (i111IIlI.indexOf(iIlillil[0]) > -1) {
          let lilIliii = parseInt(I11liIi1.amount);
          if (lilIliii < 0) {
            llili[iIlillil[0]][1] -= lilIliii;
          } else {
            llili[iIlillil[0]][0] += lilIliii;
          }
        } else {
          return llili;
        }
      }
    }
  }
  return llili;
}
function iiil1liI(l1Ili11I, l1lilli1) {
  let iiIl1lil = {
    "method": "post",
    "url": "https://api.m.jd.com/client.action?functionId=getJingBeanBalanceDetail",
    "body": "body={\"pageSize\": \"20\", \"page\": \"" + l1lilli1 + "\"}&appid=ld",
    "json": true,
    "headers": {
      "X-Requested-With": "XMLHttpRequest",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded;",
      "Origin": "https://bean.m.jd.com",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15",
      "Cookie": l1Ili11I,
      "Host": "bean.m.jd.com",
      "Referer": "https://bean.m.jd.com/beanDetail/index.action?resourceValue=bean",
      "Accept": "application/json, text/javascript, */*; q=0.01"
    }
  };
  return request(iiIl1lil);
}
function IIiI1lil(iliIil1l) {
  let iiliiII = {};
  let III1 = iliIil1l;
  do {
    const iIl1Iii1 = new Date();
    const iIIlIl11 = iIl1Iii1.getFullYear();
    const I1l11ll1 = iIl1Iii1.getTime() - 1000 * 60 * 60 * 24 * III1;
    iIl1Iii1.setTime(I1l11ll1);
    let iI1I1li1 = iIl1Iii1.getMonth() + 1;
    iI1I1li1 = iI1I1li1 >= 10 ? iI1I1li1 : "0" + iI1I1li1;
    let i1Iiil1l = iIl1Iii1.getDate();
    i1Iiil1l = i1Iiil1l >= 10 ? i1Iiil1l : "0" + i1Iiil1l;
    iiliiII[iIIlIl11 + "-" + iI1I1li1 + "-" + i1Iiil1l] = [0, 0];
    III1--;
  } while (III1 >= 0);
  return iiliiII;
}
Ii1Il1II();
iｉl = "jsjiami.com.v6";