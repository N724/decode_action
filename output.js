//Sun Aug 25 2024 08:49:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function hanApiSnow() {
  const _0x3f28a7 = document.createElement("div");
  _0x3f28a7.innerHTML = "<style>#hanApi-Snow{position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 99999;pointer-events: none;}</style><canvas id='hanApi-Snow'></canvas>";
  document.body.appendChild(_0x3f28a7);
  const _0x41cffa = document.createElement("script");
  _0x41cffa.setAttribute("type", "text/javascript");
  _0x41cffa.innerHTML = "!function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};window.requestAnimationFrame=e}(),function(){var e=[],t=document.getElementById(\"hanApi-Snow\"),n=t.getContext(\"2d\"),i=66,a=-100,o=-100;function d(){n.clearRect(0,0,t.width,t.height);for(var h=0;h<i;h++){var m=e[h],w=a,s=o,l=m.x,v=m.y,c=Math.sqrt((l-w)*(l-w)+(v-s)*(v-s));if(c<150){var u=(w-l)/c,f=(s-v)/c,M=150/(c*c)/2;m.velX-=M*u,m.velY-=M*f}else m.velX*=.98,m.velY<=m.speed&&(m.velY=m.speed),m.velX+=Math.cos(m.step+=.05)*m.stepSize;n.fillStyle=\"rgba(255,255,255,\"+m.opacity+\")\",m.y+=m.velY,m.x+=m.velX,(m.y>=t.height||m.y<=0)&&r(m),(m.x>=t.width||m.x<=0)&&r(m),n.beginPath(),n.arc(m.x,m.y,m.size,0,2*Math.PI),n.fill()}requestAnimationFrame(d)}function r(e){e.x=Math.floor(Math.random()*t.width),e.y=0,e.size=3*Math.random()+2,e.speed=1*Math.random()+.2,e.velY=e.speed,e.velX=0,e.opacity=.5*Math.random()+.3}t.width=window.innerWidth,t.height=window.innerHeight,document.addEventListener(\"mousemove\",function(e){a=e.clientX,o=e.clientY}),window.addEventListener(\"resize\",function(){t.width=window.innerWidth,t.height=window.innerHeight}),function(){for(var n=0;n<i;n++){var a=Math.floor(Math.random()*t.width),o=Math.floor(Math.random()*t.height),r=3*Math.random()+2,h=1*Math.random()+.2,m=.5*Math.random()+.3;e.push({speed:h,velY:h,velX:0,x:a,y:o,size:r,stepSize:Math.random()/30*1,step:0,angle:180,opacity:m})}d()}()}();";
  document.body.appendChild(_0x41cffa);
}
if (window.onload) {
  const _hanApiSnow = window.onload;
  window.onload = function () {
    hanApiSnow();
    _hanApiSnow();
  };
} else {
  window.onload = hanApiSnow();
}
if (typeof vhApiConsoleLog != "function") {
  var vhApiConsoleLog = () => {
    console.group("%c 作者信息", "color: #fadfa3; background: #030307; padding:5px");
    console.log("%c 韩小韩博客 Www.Vvhan.Com", "color: #fadfa3; background: #030307; padding:5px");
    console.log("%c 韩小韩API接口 Api.Vvhan.Com", "color: #fadfa3; background: #030307; padding:5px");
    console.log("%c 欢迎前来围观、吐槽、点赞、学习......", "color: #fadfa3; background: #030307; padding:5px");
    console.groupEnd();
    console.group("%c -", "color: #ffffff; background: #6666FF; padding:5px");
    console.log("%c 风是自由的 希望你也是.", "color: #ffffff; background: #6666FF; padding:5px");
    console.groupEnd();
  };
  vhApiConsoleLog();
}