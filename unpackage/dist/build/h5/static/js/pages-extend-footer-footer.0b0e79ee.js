(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-footer-footer"],{"009b":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiFooter",props:{navigate:{type:Array,default:function(){return[]}},copyright:{type:String,default:"All Rights Reserved."},color:{type:String,default:"#A7A7A7"},size:{type:Number,default:24},backgroundColor:{type:String,default:"transparent"},fixed:{type:Boolean,default:!0}},methods:{}};e.default=i},"0f84":function(t,e,a){var i=a("5b11");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("3552f23f",i,!0,{sourceMap:!1,shadowMode:!1})},"235b":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{navigate:[{url:"/pages/tabbar/index/index",type:"switchTab",text:"ThorUI首页"}],navigate2:[{url:"/pages/tabbar/index/index",type:"switchTab",text:"返回首页",color:"#5677fc"},{url:"/pages/tabbar/my/my",type:"switchTab",text:"个人中心",color:"#5677fc",size:30}],navigate3:[{url:"/pages/tabbar/index/index",type:"switchTab",text:"返回首页"},{url:"/pages/tabbar/my/my",type:"switchTab",text:"个人中心"},{url:"/pages/common/about/about",type:"navigate",text:"Thor UI"}],copyright:" Copyright © 2014-2019 Thor UI."}},methods:{}};e.default=i},"3b96":function(t,e,a){var i=a("4119");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("127ccd83",i,!0,{sourceMap:!1,shadowMode:!1})},4119:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".container[data-v-2e252940]{padding:%?20?% 0 %?120?% 0;box-sizing:border-box}.header[data-v-2e252940]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-2e252940]{font-size:%?36?%;color:#333;font-weight:700}.sub-title[data-v-2e252940]{font-size:%?28?%;color:#7a7a7a;padding-top:%?18?%}.tui-custom[data-v-2e252940]{margin-top:%?30?%}",""]),t.exports=e},"5b11":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tui-footer[data-v-100a5282]{width:100%;overflow:hidden;padding:%?30?% %?24?%;box-sizing:border-box}.tui-fixed[data-v-100a5282]{position:fixed;z-index:9999;bottom:0;left:0}.tui-footer-link[data-v-100a5282]{color:#596d96;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.tui-link[data-v-100a5282]{position:relative;padding:0 %?18?%;line-height:1}.tui-link[data-v-100a5282]::before{content:" ";position:absolute;right:0;top:0;width:1px;bottom:0;border-right:1px solid #d3d3d3;-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.tui-link[data-v-100a5282]:last-child::before{border-right:0!important}.tui-link-hover[data-v-100a5282]{opacity:.5}.tui-footer-copyright[data-v-100a5282]{font-size:%?24?%;color:#a7a7a7;line-height:1;text-align:center;padding-top:%?16?%;padding-bottom:env(safe-area-inset-bottom)}',""]),t.exports=e},"5c25":function(t,e,a){"use strict";var i=a("0f84"),o=a.n(i);o.a},"5da9":function(t,e,a){"use strict";a.r(e);var i=a("009b"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},68128:function(t,e,a){"use strict";a.r(e);var i=a("9940"),o=a("5da9");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("5c25");var n,s=a("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"100a5282",null,!1,i["a"],n);e["default"]=u.exports},9940:function(t,e,a){"use strict";var i,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tui-footer-class tui-footer",class:[t.fixed?"tui-fixed":""],style:{backgroundColor:t.backgroundColor}},[t.navigate.length>0?a("v-uni-view",{staticClass:"tui-footer-link"},[t._l(t.navigate,(function(e,i){return[a("v-uni-navigator",{key:i+"_0",staticClass:"tui-link",style:{color:e.color||"#596d96",fontSize:(e.size||28)+"rpx"},attrs:{"hover-class":"tui-link-hover","hover-stop-propagation":!0,"open-type":e.type,url:e.url,target:e.target,delta:e.delta,"app-id":e.appid,path:e.path,"extra-data":e.extradata,bindsuccess:e.bindsuccess,bindfail:e.bindfail}},[t._v(t._s(e.text))])]}))],2):t._e(),a("v-uni-view",{staticClass:"tui-footer-copyright",style:{color:t.color,fontSize:t.size+"rpx"}},[t._v(t._s(t.copyright))])],1)},r=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}))},"9ecd":function(t,e,a){"use strict";a.r(e);var i=a("235b"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},adf3:function(t,e,a){"use strict";a.r(e);var i=a("ce48"),o=a("9ecd");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("ecb5");var n,s=a("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"2e252940",null,!1,i["a"],n);e["default"]=u.exports},ce48:function(t,e,a){"use strict";var i={tuiFooter:a("68128").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"title"},[t._v("Footer")]),a("v-uni-view",{staticClass:"sub-title"},[t._v("页脚")])],1),a("tui-footer",{attrs:{fixed:!1,copyright:t.copyright}}),a("tui-footer",{attrs:{fixed:!1,copyright:t.copyright,navigate:t.navigate,"tui-footer-class":"tui-custom"}}),a("tui-footer",{attrs:{fixed:!1,copyright:t.copyright,navigate:t.navigate2,"tui-footer-class":"tui-custom"}}),a("tui-footer",{attrs:{fixed:!1,copyright:t.copyright,navigate:t.navigate3,"tui-footer-class":"tui-custom"}}),a("tui-footer",{attrs:{copyright:"Copyright © 2020 ThorUI All Rights Reserved.",navigate:t.navigate,backgroundColor:"#fafafa"}})],1)},r=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}))},ecb5:function(t,e,a){"use strict";var i=a("3b96"),o=a.n(i);o.a}}]);