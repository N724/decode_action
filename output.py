#2024-07-02 06:04:29
import requests,os,random
import json
import time
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad,unpad
import hashlib
import base64
def version():
 txt=requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text
 print(txt)
class EasyAES:
 ALGORITHM=AES.MODE_CBC
 DEFAULT_IV=bytes([0]*16)
 TRANSFORMATION="AES/CBC/PKCS5Padding"
 def __init__(self,key_str,key_length=128,iv_str=None):
  if key_length==256:
   key=hashlib.sha256(key_str.encode()).digest()
  else:
   key=hashlib.md5(key_str.encode()).digest()
  if iv_str:
   iv=hashlib.md5(iv_str.encode()).digest()
  else:
   iv=EasyAES.DEFAULT_IV
  self.cipher=AES.new(key,EasyAES.ALGORITHM,iv)
 def encrypt(self,plaintext):
  ciphertext=self.cipher.encrypt(pad(plaintext.encode(),AES.block_size))
  return base64.b64encode(ciphertext).decode()
 def decrypt(self,ciphertext):
  ciphertext=base64.b64decode(ciphertext.encode())
  plaintext=self.cipher.decrypt(ciphertext)
  return unpad(plaintext,AES.block_size).decode()
 @staticmethod
 def encrypt_string(plaintext):
  aes=EasyAES("secret1234567890",128,"################")
  return aes.encrypt(plaintext)
 @staticmethod
 def decrypt_string(ciphertext):
  aes=EasyAES("secret1234567890",128,"################")
  return aes.decrypt(ciphertext)
 def get_length(data):
  return len(data)
 def get_timestamp():
  return int(time.time())
 def get_ciphertext(timestamp,ciphertext):
  decrypt=EasyAES("ljj08829%&.$&..#%",256,"carp").decrypt(ciphertext)
  encrypt=EasyAES(timestamp,256,"carp").encrypt(decrypt)
  return encrypt
class yuanshen:
 def __init__(self,cookie):
  self.url="https://api.app.sp800.vip"
  self.cookie=cookie.split("#")[0]
  self.device_id=cookie.split("#")[1]
  self.headers={'token':f'{self.cookie}','Host':'api.app.sp800.vip','Connection':'Keep-Alive','Accept-Encoding':'gzip','User-Agent':'okhttp/3.12.0'}
 def box(self):
  r=requests.get(f'{self.url}/api/User/openBox',headers=self.headers).json()
  if r['code']==1:
   print(f"🎉️{r['msg']}获得金币:{r['data']['integral']},看视频金币:{r['data']['surf_ads_integral']}")
  else:
   print(r['msg'])
   return True
  timestamp=f'{EasyAES.get_timestamp()}'
  data={'timestamp':timestamp,'device_id':f'{self.device_id}'}
  r=requests.post(f'{self.url}/api/User/getSurfAds',headers=self.headers,data=data).json()
  if "ok" in r["msg"]:
   signid=r["data"]["signId"]
   ciphertext=r["data"]["ciphertext"]
   ciphertext=EasyAES.get_ciphertext(timestamp,ciphertext)
   data={'signId':signid,'ciphertext':ciphertext}
   time.sleep(random.randint(40,50))
   r=requests.post(f'{self.url}/api/User/setSurfAds',headers=self.headers,data=data).json()
   print("🎉️看视频结果:",r["msg"])
   time.sleep(random.randint(80,200))
  else:
   print("看视频失败:",r["msg"])
   return True
 def video(self):
  timestamp=f'{EasyAES.get_timestamp()}'
  data={'timestamp':timestamp,'device_id':f'{self.device_id}'}
  r=requests.post(f'{self.url}/api/Redpacket/getRedpacket',headers=self.headers,data=data).json()
  if r['code']==1:
   signid=r["data"]["signId"]
   ciphertext=r["data"]["ciphertext"]
   ciphertext=EasyAES.get_ciphertext(timestamp,ciphertext)
   data={'signId':signid,'ciphertext':ciphertext}
   print(f"🎉️转圈圈可领取红包:[{r['data']['score']}]")
   time.sleep(random.randint(20,30))
   r=requests.post(f'{self.url}/api/Redpacket/open',headers=self.headers,data=data).json()
   if r['code']==1:
    print(f"🎉️领取转圈圈红包结果:[{r['msg']}]")
   else:
    print(f"领取转圈圈红包失败:[{r['msg']}]")
    return True
   time.sleep(random.randint(40,160))
  else:
   print("获取转圈圈信息失败:",r["msg"])
   return True
 def sign(self):
  r=requests.post(f'{self.url}/api/User/sign_v2',headers=self.headers).json()
  if r['code']==1:
   print(f"🎉️签到成功！获得金币{r['data']['integral']}")
  else:
   print(f"❌️签到失败！{r['msg']}")
 def userinfo(self):
  r=requests.get(f'{self.url}/api/User/myuserinfo',headers=self.headers).json()
  print(f"🎉️当前账号剩余金币：{r['data']['score']}\n🎉️剩余余额:{r['data']['money']}\n")
 def main(self):
  self.sign()
  while True:
   if self.box():
    break
  while True:
   if self.video():
    break
  self.userinfo()
if __name__=='__main__':
 version()
 cookie=''
 if not cookie:
  cookie=os.getenv("yuanshen_ljj")
  if not cookie:
   print("请设置环境变量:yuanshen_ljj")
   exit()
 cookies=cookie.split("@")
 print(f"一共获取到{len(cookies)}个账号")
 i=1
 for cookie in cookies:
  print(f"\n--------开始第{i}个账号--------")
  main=yuanshen(cookie)
  main.main()
  print(f"--------第{i}个账号执行完毕--------")
  i+=1
