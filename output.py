#2024-07-09 11:36:55
import requests
import time
import os
from urllib.parse import urlparse,parse_qs,quote
from concurrent.futures import ThreadPoolExecutor,as_completed
import random
import threading
code="百事通"
ver="1.1"
envname="yuanshen_bst"
split_chars=['@','&','\n']
debug=False
lock=threading.Lock()
def printf(m):
 with lock:
  print(m)
def env(*args,**kwargs):
 def split_cookies(cookie,split_chars):
  for sep in split_chars:
   if sep in cookie:
    return cookie.split(sep)
  return[cookie]
 def scmain(cookies):
  for i,cookie in enumerate(cookies,1):
   printf(f"--------开始第{i}个账号--------")
   main=yuanshen(cookie)
   main.main()
   printf(f"--------第{i}个账号执行完毕--------")
 if not os.getenv(envname)and not debug:
  printf(f"请先设置环境变量[{envname}]")
  exit()
 cookie=os.getenv(envname,"")
 if debug:
  cookie="516f59df-4f5f-4e18-9c71-9de3b36b76d4#滑稽@4f26ce1a-7d5f-404f-9ab2-639b9ba52de1#大滑稽"
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
 if debug and max_threads==1:
  scmain(cookies)
 else:
  try:
   if max_threads!=1:
    print("当前为多线程运行模式")
    with ThreadPoolExecutor(max_workers=max_threads)as executor:
     futures=[]
     for ck in cookies:
      task=yuanshen(ck)
      future=executor.submit(task.main)
      futures.append(future)
      time.sleep(5)
    print("所有任务执行完毕")
   else:
    print("当前为单线程运行模式")
    scmain(cookies,*args,**kwargs)
  except Exception as e:
   print(f"脚本执行出错: {e}")
 end_time=time.time()
 execution_time=end_time-start_time
 print(f"\n============🔔脚本[{code}]执行结束============")
 print(f"本次脚本总运行时间: [{execution_time:.2f}] 秒")
class yuanshen:
 def __init__(self,cookie)->None:
  self.url="ltai.litianwm.com"
  self.token=cookie.split("#")[0]
  self.bz=cookie.split("#")[1]
 def tuisong(self):
  url=f"https://wxpusher.zjiecode.com/api/send/message/?appToken={appToken}&topicId={topicIds}&content=检测文章%0A请在20秒内完成验证!%0A%3Cbody+onload%3D%22window.location.href%3D%27{quote(self.readurl)}%27%22%3E"
  r=requests.get(url).json()
  printf(f"🎉️[{self.bz}]检测文章推送结果{r}")
  return
 def get_maind(self):
  h={"Host":"ltai.litianwm.com","sec-ch-ua":'"Chromium";v="122", "Not(A:Brand";v="24", "Android WebView";v="122"',"accept":"application/json, text/javascript, */*; q=0.01","sec-ch-ua-mobile":"?1","user-agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220067 MMWEBSDK/20240404 MMWEBID/5295 MicroMessenger/8.0.49.2600(0x28003156) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","sec-ch-ua-platform":'"Android"',"origin":"http://ddrfta1717665412.36fg3.org.cn","x-requested-with":"com.tencent.mm","sec-fetch-site":"cross-site","sec-fetch-mode":"cors","sec-fetch-dest":"empty","referer":"http://ddrfta1717665412.36fg3.org.cn/","accept-encoding":"gzip, deflate, br","accept-language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7 "}
  url=f"https://{self.url}/v1/ftd/domain/getHome"
  r=requests.get(url,headers=h).json()
  if r['code']==1:
   j=urlparse(r['data'].replace("\\",""))
   self.maind=f"http://{j.netloc}/"
   printf(f"🎉️[{self.bz}]获取不知道什么域名成功[{self.maind}]")
  else:
   printf(f"[{self.bz}]获取域名失败")
   exit()
 def get_mainr(self):
  url=f"https://{self.url}/v1/selfread.wechat_read/wxReadState"
  r=requests.get(url,headers=self.h).json()
  if r['code']!=1:
   printf(f"🤣[{self.bz}]不允许阅读[{r}]")
   return False
  time.sleep(1)
  url=f"https://{self.url}/v1/selfread.wechat_read/get_read_qrcode?jpurl={quote(self.maind)}"
  r=requests.get(url,headers=self.h).json()
  if r['code']==1:
   self.pdata=r['data']
   data={"image":f"{self.pdata}"}
   r=requests.post(url="http://103.225.198.104:8866/decode_qr",json=data).json()
   if r['status_code']==200:
    url=r['data']
    r2=requests.get(url,headers=self.h)
    if r2.status_code==200:
     printf(f"🎉[{self.bz}]不知道有什么卵用的请求成功")
    else:
     printf(f"🤣[{self.bz}]不知道有什么卵用的请求失败")
     return False
    j=urlparse(r['data'])
    self.doamin=j.netloc
    query_params=parse_qs(j.query)
    self.readkey=query_params.get('k',[None])[0]
    printf(f"🎉[{self.bz}]获取阅读主域名成功[{self.doamin}][{self.readkey}]")
    if self.readkey:
     self.readh={"Host":"ltai.litianwm.com","content-length":"25","sec-ch-ua":'"Chromium";v="122", "Not(A:Brand";v="24", "Android WebView";v="122"',"content-type":"application/json","sec-ch-ua-mobile":"?1","user-agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220067 MMWEBSDK/20240404 MMWEBID/5295 MicroMessenger/8.0.49.2600(0x28003156) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","token":"undefined","sec-ch-ua-platform":'"Android"',"accept":"*/*","origin":f"http://{self.doamin}","x-requested-with":"com.tencent.mm","sec-fetch-site":"cross-site","sec-fetch-mode":"cors","sec-fetch-dest":"empty","referer":f"http://{self.doamin}/","accept-encoding":"gzip, deflate, br","accept-language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
     return True
    else:
     printf(f"❌️[{self.bz}]取初始阅读key失败,可能是接口发生了变化")
     return False
  else:
   printf(f"❌️[{self.bz}]获取阅读域名失败[{r}]")
   return False
 def read(self):
  url=f"https://{self.url}/v1/selfread.wechat_read/getWxArticle"
  data={"key":f"{self.readkey}"}
  r=requests.post(url,headers=self.readh,json=data).json()
  if r['code']==1:
   self.readurl=r['data']['url'].replace("\\","")
   self.urlkey=r['data']['readKey']
   self.urlkey2=r['data']['key']
   now_number=r['data']['self_num']
   all_number=r['data']['total_num']
   printf(f"[{self.bz}]获取文章成功")
   if int(now_number)==1 or int(now_number)==2:
    printf("第一第二篇文章强制送检 如不是第一轮可不阅读")
    self.tuisong()
    time.sleep(10)
  else:
   printf(f"❌️[{self.bz}]获取文章失败[{r}]")
   return False
  time.sleep(random.randint(8,15))
  url=f"https://{self.url}/v1/selfread.wechat_read/completeWxRead"
  data={"cType":"2","cKey":f"{self.urlkey}","key":f"{self.urlkey2}"}
  r=requests.post(url,headers=self.readh,json=data).json()
  if r['code']==1:
   printf(f"🎉[{self.bz}]第[{now_number}/{all_number}]篇文章阅读成功")
   self.readkey=r['data']['key']
   return True
  else:
   printf(f"❌️[{self.bz}]第[{now_number}/{all_number}]篇文章阅读失败[{r['msg']}]")
   return False
 def userinfo(self):
  url=f"https://{self.url}/v1/user_center/amountValue"
  r=requests.get(url,headers=self.h).json()
  if r['code']==1:
   printf(f"🎉[{self.bz}]当前余额[{r['data']['amount']}]")
 def main(self):
  self.get_maind()
  self.h={"Host":"ltai.litianwm.com","sec-ch-ua":'"Chromium";v="122", "Not(A:Brand";v="24", "Android WebView";v="122"',"content-type":"application/json","sec-ch-ua-mobile":"?1","user-agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220067 MMWEBSDK/20240404 MMWEBID/5295 MicroMessenger/8.0.49.2600(0x28003156) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","token":f"{self.token}","sec-ch-ua-platform":'"Android"',"accept":"*/*","origin":f"http://{self.maind}","x-requested-with":"com.tencent.mm","sec-fetch-site":"cross-site","sec-fetch-mode":"cors","sec-fetch-dest":"empty","referer":f"http://{self.maind}/","accept-encoding":"gzip, deflate, br","accept-language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  if self.get_mainr():
   time.sleep(random.randint(1,3))
   while self.read():
    pass
  time.sleep(3)
  printf("=======================")
  self.userinfo()
if __name__=='__main__':
 appToken=""
 topicIds=""
 if not appToken:
  appToken=os.getenv("yuanshen_apptoken")
  if not appToken:
   print("❌你还没有设置推送,请设置环境变量:yuanshen_apptoken")
   exit()
 if not topicIds:
  topicIds=os.getenv("yuanshen_topicid")
  if not topicIds:
   print("❌你还没有设置推送,请设置环境变量:yuanshen_topicid")
   exit()
 env()
