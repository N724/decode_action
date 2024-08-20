#2024-08-20 19:57:21
import json 
import os 
import requests 
def get_id(OO00O00OOO0OOOOO0,OOO000OOO00O0O000):
 O000OOO000OOO0000={"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9","Connection":"keep-alive","Content-Length":"45","Content-Type":"application/x-www-form-urlencoded","Host":"mili.shensemiao.com","Referer":"https://servicewechat.com/wxec97c88d99c5d385/1/page-frame.html","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"cross-site","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b19)XWEB/11177","xweb_xhr":"1"}
 OO0O0O00OOOOOO0OO={"v":"1","appid":"4","appsecret":"PHPCMF19F5DF41B263B","":"","api_auth_code":f"{OO00O00OOO0OOOOO0}","api_auth_uid":f"{OOO000OOO00O0O000}","s":"Yhxcx","c":"home","m":"fb_list"}
 O0O0O00OO0OOO0O00='page=1&limit=10&fblx=1&city=&gwfl=-1&search=1'
 O0OOO00OO0OO0OOOO=requests.post('https://mili.shensemiao.com/index.php',headers=O000OOO000OOO0000,params=OO0O0O00OOOOOO0OO,data=O0O0O00OO0OOO0O00)
 if O0OOO00OO0OO0OOOO.status_code==200:
  O0OOO00OO0OO0OOOO=O0OOO00OO0OO0OOOO.json()
  if O0OOO00OO0OO0OOOO['data']['list'][0]['id']:
   return O0OOO00OO0OO0OOOO['data']['list'][0]['id'],O0OOO00OO0OO0OOOO['data']['list'][1]['id']
  else:
   return None 
def browse(O0OO0OOO0OOO0OO0O,O00OO0OO00O0OO0OO,OOO00OOO0O00O000O,t=0):
 OO0000OO000OO0O0O={"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9","Connection":"keep-alive","Content-Length":"43","Content-Type":"application/x-www-form-urlencoded","Host":"mili.shensemiao.com","Referer":"https://servicewechat.com/wxec97c88d99c5d385/1/page-frame.html","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"cross-site","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b19)XWEB/11177","xweb_xhr":"1"}
 OO00OOOO0O000OO00={"v":"1","appid":"4","appsecret":"PHPCMF19F5DF41B263B","":"","api_auth_code":f"{O0OO0OOO0OOO0OO0O}","api_auth_uid":f"{O00OO0OO00O0OO0OO}","s":"member","app":"Yhxcx","c":"qd","m":"sign_in"}
 O0OO00O0000O00OO0=f'id={OOO00OOO0O00O000O}&fblx=1&wcs={t}&theway=signin&search=1'
 O0000OOOO00OO00O0=requests.post('https://mili.shensemiao.com/index.php',headers=OO0000OO000OO0O0O,params=OO00OOOO0O000OO00,data=O0OO00O0000O00OO0)
 if O0000OOOO00OO00O0.status_code==200:
  try:
   O0000OOOO00OO00O0=O0000OOOO00OO00O0.json()
   print(O0000OOOO00OO00O0)
   if 'llurl'in O0000OOOO00OO00O0.get('data',{}):
    O0OO000OO000OOO00=O0000OOOO00OO00O0['data']['llurl']
    OO0O000OO000O0OO0=O0OO000OO000OOO00.split("id=")[-1]
    return OO0O000OO000O0OO0 
   else:
    print(O0000OOOO00OO00O0)
  except Exception as O0000OOOO0OO0OO0O:
   print(O0000OOOO0OO0OO0O)
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
 ck=os.getenv("ddjz")
 if ck:
  if "&"in ck:
   ck=ck.split("&")
  else:
   ck=ck.split(" ")
  for i in ck:
   user,api_auth_code,api_auth_uid=i.split("#")
   print("当前账号{}".format(user))
   print("="*10)
   id=get_id(api_auth_code,api_auth_uid)
   if id:
    browse(api_auth_code,api_auth_uid,id[0])
    browse(api_auth_code,api_auth_uid,id[1],t=1)
   print("="*10)
 else:
  print("变量不存在")
