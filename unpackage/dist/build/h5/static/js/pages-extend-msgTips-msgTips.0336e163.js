(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-msgTips-msgTips"],{"02bc":function(t,i,n){"use strict";var a={tuiTips:n("112b").default},e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"container"},[0==t.index?n("tui-tips",{ref:"toast"}):t._e(),1==t.index?n("tui-tips",{ref:"toast",attrs:{position:"center"}}):t._e(),2==t.index?n("tui-tips",{ref:"toast",attrs:{position:"bottom"}}):t._e(),n("v-uni-view",{staticClass:"tui-subsection"},[n("v-uni-view",{staticClass:"tui-subsection-item",class:[0==t.index?"tui-active":""],attrs:{"data-index":"0"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchTabs.apply(void 0,arguments)}}},[t._v("顶部提示")]),n("v-uni-view",{staticClass:"tui-subsection-item",class:[1==t.index?"tui-active":""],attrs:{"data-index":"1"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchTabs.apply(void 0,arguments)}}},[t._v("居中提示")]),n("v-uni-view",{staticClass:"tui-subsection-item tui-last-child",class:[2==t.index?"tui-active":""],attrs:{"data-index":"2"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchTabs.apply(void 0,arguments)}}},[t._v("底部提示")])],1),n("v-uni-button",{staticClass:"tui-button-primary tui-button-gray",attrs:{"hover-class":"tui-button-gray_hover","data-index":"0"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showTips.apply(void 0,arguments)}}},[t._v("一般提示")]),n("v-uni-button",{staticClass:"tui-button-primary tui-button-gray",attrs:{"hover-class":"tui-button-gray_hover","data-index":"1"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showTips.apply(void 0,arguments)}}},[t._v("成功提示")]),n("v-uni-button",{staticClass:"tui-button-primary tui-button-gray",attrs:{"hover-class":"tui-button-gray_hover","data-index":"2"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showTips.apply(void 0,arguments)}}},[t._v("警告提示")]),n("v-uni-button",{staticClass:"tui-button-primary tui-button-gray",attrs:{"hover-class":"tui-button-gray_hover","data-index":"3"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showTips.apply(void 0,arguments)}}},[t._v("错误提示")]),n("v-uni-button",{staticClass:"tui-button-primary tui-button-gray",attrs:{"hover-class":"tui-button-gray_hover","data-index":"4"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showTips.apply(void 0,arguments)}}},[t._v("其他提示")]),n("v-uni-button",{staticClass:"tui-button-primary tui-button-gray",attrs:{"hover-class":"tui-button-gray_hover","data-index":"5"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showTips.apply(void 0,arguments)}}},[t._v("长文字消息提示")]),n("v-uni-button",{staticClass:"tui-button-primary tui-button-gray",attrs:{"hover-class":"tui-button-gray_hover","data-index":"6"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showTips.apply(void 0,arguments)}}},[t._v("自定义时间消息提示")])],1)},s=[];n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){return a}))},"0704":function(t,i,n){var a=n("f46a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("7bc8e6d0",a,!0,{sourceMap:!1,shadowMode:!1})},"112b":function(t,i,n){"use strict";n.r(i);var a=n("4f11"),e=n("1f38");for(var s in e)"default"!==s&&function(t){n.d(i,t,(function(){return e[t]}))}(s);n("b3ee");var o,r=n("f0c5"),u=Object(r["a"])(e["default"],a["b"],a["c"],!1,null,"aa799224",null,!1,a["a"],o);i["default"]=u.exports},"1f38":function(t,i,n){"use strict";n.r(i);var a=n("500e"),e=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(i,t,(function(){return a[t]}))}(s);i["default"]=e.a},2950:function(t,i,n){"use strict";n.r(i);var a=n("54a8"),e=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(i,t,(function(){return a[t]}))}(s);i["default"]=e.a},"4f11":function(t,i,n){"use strict";var a,e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return"top"==t.position?[n("v-uni-view",{staticClass:"tui-tips-class tui-toptips",class:["tui-"+t.type,t.show?"tui-top-show":""]},[t._v(t._s(t.msg))])]:[n("v-uni-view",{staticClass:"tui-tips-class tui-toast",class:["center"==t.position?"tui-centertips":"tui-bottomtips",t.show?"tui-toast-show":""]},[n("v-uni-view",{staticClass:"tui-tips-content",class:["tui-"+t.type]},[t._v(t._s(t.msg))])],1)]},s=[];n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){return a}))},"500e":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"tuiTips",props:{position:{type:String,default:"top"}},data:function(){return{timer:null,show:!1,msg:"无法连接到服务器~",type:"translucent"}},methods:{showTips:function(t){var i=this,n=t.type,a=void 0===n?"translucent":n,e=t.duration,s=void 0===e?2e3:e;clearTimeout(this.timer),this.show=!0,this.type=a,this.msg=t.msg,this.timer=setTimeout((function(){i.show=!1,clearTimeout(i.timer),i.timer=null}),s)}}};i.default=a},"54a8":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{basicData:[{type:"translucent",msg:"一般消息提示~"},{type:"green",msg:"成功消息提示~"},{type:"warning",msg:"警告消息提示~"},{type:"danger",msg:"错误消息提示~"},{type:"primary",msg:"其他消息提示~"},{type:"primary",msg:"长文字消息提示，看不完信息？可自定义设置显示时间，建议提示信息不要过长"},{type:"translucent",msg:"4S后关闭提示框",duration:4e3}],index:0}},methods:{showTips:function(t){var i=t.currentTarget.dataset.index,n={msg:this.basicData[i].msg,duration:this.basicData[i].duration||2e3,type:this.basicData[i].type};this.$refs.toast.showTips(n)},switchTabs:function(t){this.index=t.currentTarget.dataset.index}}};i.default=a},9568:function(t,i,n){var a=n("24fb");i=a(!1),i.push([t.i,".container[data-v-3bec00db]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?60?% %?30?% %?100?% %?30?%;box-sizing:border-box}.tui-button-primary[data-v-3bec00db]{margin-bottom:%?40?%}.tui-subsection[data-v-3bec00db]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:%?20?% 0 %?80?% 0;border-radius:%?10?%;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;position:relative;border:%?1?% solid #5677fc}.tui-subsection-item[data-v-3bec00db]{position:relative;z-index:10}.tui-subsection uni-view[data-v-3bec00db]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;text-align:center;padding:%?10?% %?30?%;color:#5677fc;position:relative;border-right:%?1?% solid #5677fc}.tui-last-child[data-v-3bec00db]{border-right:0!important}.tui-subsection .tui-active[data-v-3bec00db]{background-color:#5677fc;color:#fff}",""]),t.exports=i},b3ee:function(t,i,n){"use strict";var a=n("0704"),e=n.n(a);e.a},d11d:function(t,i,n){var a=n("9568");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("4ad099b3",a,!0,{sourceMap:!1,shadowMode:!1})},d176:function(t,i,n){"use strict";n.r(i);var a=n("02bc"),e=n("2950");for(var s in e)"default"!==s&&function(t){n.d(i,t,(function(){return e[t]}))}(s);n("e0dd");var o,r=n("f0c5"),u=Object(r["a"])(e["default"],a["b"],a["c"],!1,null,"3bec00db",null,!1,a["a"],o);i["default"]=u.exports},e0dd:function(t,i,n){"use strict";var a=n("d11d"),e=n.n(a);e.a},f46a:function(t,i,n){var a=n("24fb");i=a(!1),i.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/*顶部消息提醒 start*/.tui-toptips[data-v-aa799224]{width:100%;padding:%?18?% %?30?%;box-sizing:border-box;position:fixed;z-index:9999;color:#fff;font-size:%?30?%;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;word-break:break-all;opacity:0;-webkit-transform:translateZ(0) translateY(-100%);transform:translateZ(0) translateY(-100%);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.tui-top-show[data-v-aa799224]{-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);opacity:1}\n\t/*顶部消息提醒 end*/\n\t/*toast消息提醒 start*/\n\t/*注意问题：\n 1、fixed 元素宽度无法自适应，所以增加了子元素\n 2、fixed 和 display冲突导致动画效果消失，暂时使用visibility替代\n*/.tui-toast[data-v-aa799224]{width:80%;box-sizing:border-box;color:#fff;font-size:%?28?%;position:fixed;visibility:hidden;opacity:0;left:50%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;z-index:9999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-toast-show[data-v-aa799224]{visibility:visible;opacity:1}.tui-tips-content[data-v-aa799224]{word-wrap:break-word;word-break:break-all;border-radius:%?8?%;padding:%?18?% %?30?%}\n\t/*底部消息提醒 start*/.tui-bottomtips[data-v-aa799224]{bottom:%?120?%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n\t/*底部消息提醒 end*/\n\t/*居中消息提醒 start*/.tui-centertips[data-v-aa799224]{top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}\n\t/*居中消息提醒 end*/\n\t/*toast消息提醒 end*/\n\t/*背景颜色 start*/.tui-primary[data-v-aa799224]{background-color:#5677fc}.tui-green[data-v-aa799224]{background-color:#19be6b}.tui-warning[data-v-aa799224]{background-color:#ff7900}.tui-danger[data-v-aa799224]{background-color:#ed3f14}.tui-translucent[data-v-aa799224]{background-color:rgba(0,0,0,.7)}\n\t/*背景颜色 end*/\n\t/*消息提醒 end*/",""]),t.exports=i}}]);