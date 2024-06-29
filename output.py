#2024-06-29 08:12:48
import json 
import os 
import time 
import requests 
def sgin_in(OOOOOO00OOOOO0O0O,O0OOO0OO000O000OO):
 OO00O0O0OO00OOOOO={"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9","Connection":"keep-alive","Content-Length":"358","Content-Type":"application/json","Host":"www.kugua.com","Referer":"https://servicewechat.com/wx1f9fc8e79fcbce16/93/page-frame.html","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"cross-site","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b11)XWEB/9185","xweb_xhr":"1"}
 O0O00O0O000O0O00O={"type":1,"invite_id":"","code_ticket":"","count":"","token":f"{OOOOOO00OOOOO0O0O}","appid":"wx1f9fc8e79fcbce16","openid":f"{O0OOO0OO000O000OO}"}
 O0000O00000OOOOOO=requests.post('https://www.kugua.com/wxapp/inflatedv3/popUpRedEnvelopes',headers=OO00O0O0OO00OOOOO,data=json.dumps(O0O00O0O000O0O00O))
 if O0000O00000OOOOOO.status_code==200:
  print("签到成功")
  O0OOOOO00O0O000OO=O0000O00000OOOOOO.content 
  print(O0OOOOO00O0O000OO.decode("utf-8"))
  O00OO0O000OO00O00=json.loads(O0OOOOO00O0O000OO.decode('utf-8'))
  return O00OO0O000OO00O00["data"]["dialogId"]
 else:
  print(O0000O00000OOOOOO.text)
def 提现(OO00000O0O000OO0O,O00OO0O00O000O0OO,OOO00OO0O0O0OOOO0):
 O0O0OOO0OO000OOOO={"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9","Connection":"keep-alive","Content-Length":"324","Content-Type":"application/json","Host":"www.kugua.com","Referer":"https://servicewechat.com/wx1f9fc8e79fcbce16/93/page-frame.html","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"cross-site","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309092b) XWEB/8555","xweb_xhr":"1"}
 O0OOO0O00O00O0OOO={"dialogId":int(OOO00OO0O0O0OOOO0),"token":f"{OO00000O0O000OO0O}","appid":"wx1f9fc8e79fcbce16","openid":f"{O00OO0O00O000O0OO}"}
 O00OOOOO00000000O=requests.post('https://www.kugua.com/wxapp/inflatedv3/receiveRedEnvelopes',headers=O0O0OOO0OO000OOOO,data=json.dumps(O0OOO0O00O00O0OOO))
 print(O00OOOOO00000000O.text)
def print_ascii_art():
 print("// ┏┓   ┏┓")
 print("// ┏┛┻━━━┛┻┓")
 print("// ┃       ┃")
 print("// ┃   ━   ┃")
 print("// ┃ ┳┛ ┗┳ ┃")
 print("// ┃       ┃")
 print("// ┃   ┻   ┃")
 print("// ┃       ┃")
 print("// ┗━┓   ┏━┛")
 print("// ┃   ┃ 分享群：")
 print("// ┃   ┃ 780261548")
 print("// ┃   ┗━━━┓")
 print("// ┃       ┣┓")
 print("// ┃       ┏┛")
 print("// ┗┓┓┏━┳┓┏┛")
 print("// ┃┫┫ ┃┫┫")
 print("// ┗┻┛ ┗┻┛")
if __name__=='__main__':
 print_ascii_art()
 cookie_list=os.getenv('kg')
 if cookie_list:
  if "@"in cookie_list:
   cookie_list=cookie_list.split('@')
  else:
   cookie_list=cookie_list.split(' ')
  print(f"共{len(cookie_list)}个账号")
  a=0 
  for i in cookie_list:
   a+=1 
   print(f"当前为{a}个账号")
   token,openid=i.split('&')
   dialogId=sgin_in(token,openid)
   time.sleep(3)
   提现(token,openid,dialogId)
 else:
  print("变量不存在")
