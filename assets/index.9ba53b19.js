import{d as l,r as d,b as o,o as i,e as p}from"./index.658c9db5.js";const _=l({__name:"index",setup(v){const u=d([{title:"\u8D2D\u7269",start:"2023-03-01 10:00:00",end:"2023-03-02 12:00:00",editable:!0},{title:"\u5B66\u4E60",start:"2023-03-04 08:00:00",end:"2023-03-05 16:00:00"}]),s=e=>{const t={start:`${e.dateStr} 12:00:00`,end:`${e.dateStr} 13:00:00`,title:"\u5403\u996D"};u.value.push(t)},a=e=>{const t=document.createElement("div"),n=e.timeText.split("-");let r=n[0].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6",""),c=n[1].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6","");return t.innerHTML=`
    <img src="src/assets/vue.svg" style="width:20px;height:20px;">
    <div>\u5F00\u59CB\u65F6\u95F4: ${r}</div>
    <div>\u7ED3\u675F\u65F6\u95F4: ${c}</div>
    <div>\u6807\u9898: ${e.event._def.title}</div>
  `,{domNodes:[t]}};return(e,t)=>{const n=o("m-calendar");return i(),p(n,{events:u.value,displayEventEnd:"",eventContent:a,onDateClick:s},null,8,["events"])}}});export{_ as default};
