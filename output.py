#2024-07-13 08:37:21
import requests
import time
import os
import base64
from datetime import datetime
import hashlib
code="洽谈"
ver="1.0"
envname="yuanshen_qiatan"
split_chars=['@','&','\n']
debug=False
debugcookie=""
def env(*args,**kwargs):
 def split_cookies(cookie,split_chars):
  for sep in split_chars:
   if sep in cookie:
    return cookie.split(sep)
  return[cookie]
 def scmain(cookies):
  for i,cookie in enumerate(cookies,1):
   print(f"--------开始第{i}个账号--------")
   main=yuanshen(cookie)
   main.main()
   print(f"--------第{i}个账号执行完毕--------")
 if not os.getenv(envname)and not debug:
  print(f"请先设置环境变量[{envname}]")
  exit()
 cookie=os.getenv(envname,"")
 if debug:
  cookie=debugcookie
 try:
  print(requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text,"\n\n\n")
 except:
  print("网络异常,链接公告服务器失败(gitee)，请检查网络")
  exit()
 cookies=split_cookies(cookie,split_chars)
 account_count=len(cookies)
 print(f"一共获取到{account_count}个账号")
 print(f"=========🔔开始执行[{code}][{ver}]=========\n")
 start_time=time.time()
 if debug:
  scmain(cookies)
 else:
  try:
   scmain(cookies,*args,**kwargs)
  except Exception as e:
   print(f"脚本执行出错: {e}")
 end_time=time.time()
 execution_time=end_time-start_time
 print(f"\n============🔔脚本[{code}]执行结束============")
 print(f"本次脚本总运行时间: [{execution_time:.2f}] 秒")
class yuanshen:
 def __init__(self,cookie)->None:
  cookie=cookie.split("#")
  self.h={"os":"android","appVersionCode":"2","appVersionName":"1.0.1","datetime":"2024-07-12 07:32:02.722","timestamp":"1720740722","nonce":"97d4877b6a40fece19ae9987136af494","sign":"5583a53be346aa13b79d8d32d35689fe0c5c49b0","DeviceId":cookie[1],"Accept":"application/json","Authorization":cookie[0],"Local":"1","Content-Length":"0","Host":"app.chatchaton.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/4.10.0"}
 def gheader(self):
  def b():
   def a(bArr):
    return base64.b64encode(bArr).decode('utf-8')
   bArr=os.urandom(16)
   return a(bArr)
  def generate_sha1(input_string):
   hash_object=hashlib.sha1(input_string.encode())
   hash_hex=hash_object.hexdigest()
   return hash_hex
  str_salt='dcd679c4feb548cf46dc6e87f1eec40e0b7df254da39a3ee5e6b4b0d3255bfef95601890afd80709'
  timetamp=int(time.time())
  self.h["timestamp"]=str(timetamp)
  nonce=b()
  self.h["nonce"]=nonce
  sign=generate_sha1(str_salt+str(timetamp)+nonce)
  self.h["sign"]=sign
  times=datetime.now().strftime('%Y-%m-%d %H:%M:%S.722')
  self.h["datetime"]=times
  print(times)
 def sign(self):
  self.gheader()
  url='https://app.chatchaton.com/api/v2/mining/start'
  r=requests.post(url,headers=self.h).json()
  print("签到结果",r)
 def main(self):
  self.sign()
if __name__=='__main__':
 env()
