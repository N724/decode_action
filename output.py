#2024-06-29 07:57:48
import json 
import os 
import time 
import brotli 
import requests 
def sgin_in(O00O0O000000O0O00,OO00000O0000O00O0):
 O00O0OOO0O00OO00O={"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9","Connection":"keep-alive","Content-Length":"358","Content-Type":"application/json","Host":"www.kugua.com","Referer":"https://servicewechat.com/wx1f9fc8e79fcbce16/93/page-frame.html","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"cross-site","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b11)XWEB/9185","xweb_xhr":"1"}
 O0O0OOOO0OO00O0O0={"type":1,"invite_id":"","code_ticket":"","count":"","token":f"{O00O0O000000O0O00}","appid":"wx1f9fc8e79fcbce16","openid":f"{OO00000O0000O00O0}"}
 O00OO00OOOOO00O0O=requests.post('https://www.kugua.com/wxapp/inflatedv3/popUpRedEnvelopes',headers=O00O0OOO0O00OO00O,data=json.dumps(O0O0OOOO0OO00O0O0))
 if O00OO00OOOOO00O0O.status_code==200:
  print("签到成功")
  O0O00000OOOO00000=O00OO00OOOOO00O0O.content 
  O0O0OOOOOOOO0O000=json.loads(O0O00000OOOO00000.decode('utf-8'))
  return O0O0OOOOOOOO0O000["data"]["dialogId"]
 else:
  print(O00OO00OOOOO00O0O.text)
def 提现(OO0O0OO0O0OO0OO00,O0OOO0O0O000O000O,O0O00O0O0OO00OO00):
 O0OOO0O0O0OOO0O0O={"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9","Connection":"keep-alive","Content-Length":"324","Content-Type":"application/json","Host":"www.kugua.com","Referer":"https://servicewechat.com/wx1f9fc8e79fcbce16/93/page-frame.html","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"cross-site","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309092b) XWEB/8555","xweb_xhr":"1"}
 O00OOO0OO0OOO0000={"dialogId":int(O0O00O0O0OO00OO00),"token":f"{OO0O0OO0O0OO0OO00}","appid":"wx1f9fc8e79fcbce16","openid":f"{O0OOO0O0O000O000O}"}
 OOO00000OOOO00O0O=requests.post('https://www.kugua.com/wxapp/inflatedv3/receiveRedEnvelopes',headers=O0OOO0O0O0OOO0O0O,data=json.dumps(O00OOO0OO0OOO0000))
 print(OOO00000OOOO00O0O.text)
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
