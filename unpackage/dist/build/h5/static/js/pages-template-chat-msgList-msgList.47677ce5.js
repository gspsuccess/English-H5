(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-chat-msgList-msgList"],{"2e8d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{current:0,tabbar:[{icon:"community",text:"消息",size:24},{icon:"people",text:"联系人",size:24},{icon:"explore",text:"发现",size:24}],msgList:[{nickname:"波动星球",pic:"avatar_1",msg:"兰家双臂初长成！",msgNum:2,time:"10:22",level:1},{nickname:"Thorui看点",pic:"avatar_2",msg:"thorui商城模板即将上线，功能完善中！",msgNum:2,time:"13:27",level:3},{nickname:"技术交流群",pic:"4",msg:"[图片]",msgNum:18,time:"12:27",level:1},{nickname:"技术交流2群",pic:"2",msg:"[视频]",msgNum:98,time:"10:27",level:2},{nickname:"陈永华",pic:"avatar_1",msg:"对方已同意你的好友请求",msgNum:2,time:"10:27",level:1},{nickname:"尚高旭",pic:"avatar_2",msg:"晚上一起吃个饭！",msgNum:0,time:"10:27",level:1},{nickname:"张新旺",pic:"avatar_1",msg:"[图片]",msgNum:0,time:"10:27",level:1},{nickname:"曾少敏",pic:"3",msg:"对方已同意你的好友请求对方已同意你的好友请求",msgNum:0,time:"10:27",level:1},{nickname:"波动星球",pic:"avatar_1",msg:"兰家双臂初长成！",msgNum:2,time:"10:22",level:1},{nickname:"Thorui看点",pic:"avatar_2",msg:"thorui商城模板即将上线，功能完善中！",msgNum:2,time:"13:27",level:3},{nickname:"技术交流群",pic:"4",msg:"[图片]",msgNum:18,time:"12:27",level:1},{nickname:"技术交流2群",pic:"2",msg:"[视频]",msgNum:98,time:"10:27",level:2},{nickname:"陈永华",pic:"avatar_1",msg:"对方已同意你的好友请求",msgNum:2,time:"10:27",level:1}]}},methods:{tabbarSwitch:function(t){var e=t.currentTarget.dataset.index;this.current=e,0!=e&&(1==e?uni.navigateTo({url:"../friendList/friendList"}):this.tui.toast("功能开发中~"))},search:function(){uni.navigateTo({url:"../../news/search/search"})},detail:function(){uni.navigateTo({url:"../chat/chat"})}},onPullDownRefresh:function(){uni.stopPullDownRefresh()}};e.default=a},"39c1":function(t,e,i){"use strict";var a=i("41fe"),n=i.n(a);n.a},"3ff0d":function(t,e,i){"use strict";var a=i("d50c"),n=i.n(a);n.a},"41fe":function(t,e,i){var a=i("a053");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("500be44f",a,!0,{sourceMap:!1,shadowMode:!1})},"427b":function(t,e,i){"use strict";i.r(e);var a=i("9913"),n=i("d002");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("3ff0d");var o,l=i("f0c5"),c=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"378670fa",null,!1,a["a"],o);e["default"]=c.exports},"53ae":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiListCell",props:{arrow:{type:Boolean,default:!1},arrowColor:{type:String,default:""},hover:{type:Boolean,default:!0},unlined:{type:Boolean,default:!1},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#333"},radius:{type:Boolean,default:!1},arrowRight:{type:Boolean,default:!0},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};e.default=a},"578b":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-list-class tui-list-cell",class:[t.arrow?"tui-cell-arrow":"",t.arrow&&t.arrowRight?"":"tui-arrow-right",t.unlined?"tui-cell-unlined":"",t.lineLeft?"tui-line-left":"",t.lineRight?"tui-line-right":"",t.arrow&&t.arrowColor?"tui-arrow-"+t.arrowColor:"",t.radius?"tui-radius":""],style:{backgroundColor:t.backgroundColor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},"63a5":function(t,e,i){"use strict";i.r(e);var a=i("53ae"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"6b93":function(t,e,i){"use strict";i.r(e);var a=i("578b"),n=i("63a5");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("39c1");var o,l=i("f0c5"),c=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"1409a240",null,!1,a["a"],o);e["default"]=c.exports},"74ab":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:[t.dot?"tui-badge-dot":"tui-badge","tui-"+t.type,t.dot?"":"tui-badge-scale"],style:{top:t.top,right:t.right,position:t.absolute?"absolute":"static",transform:t.getStyle,margin:t.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},"7e6f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* color start*/.tui-primary[data-v-393ad790]{background-color:#5677fc;color:#fff}.tui-danger[data-v-393ad790]{background-color:#ed3f14;color:#fff}.tui-red[data-v-393ad790]{background-color:#f74d54;color:#fff}.tui-warning[data-v-393ad790]{background-color:#ff7900;color:#fff}.tui-green[data-v-393ad790]{background-color:#19be6b;color:#fff}.tui-white[data-v-393ad790]{background-color:#fff;color:#333}.tui-white_red[data-v-393ad790]{background-color:#fff;color:#f74d54}.tui-white_primary[data-v-393ad790]{background-color:#fff;color:#5677fc}.tui-white_green[data-v-393ad790]{background-color:#fff;color:#19be6b}.tui-white_warning[data-v-393ad790]{background-color:#fff;color:#ff7900}.tui-black[data-v-393ad790]{background-color:#000;color:#fff}.tui-gray[data-v-393ad790]{background-color:#ededed;color:#999}\n\n/* color end*/\n\n/* badge start*/.tui-badge-dot[data-v-393ad790]{height:8px;width:8px;border-radius:50%}.tui-badge[data-v-393ad790]{font-size:%?24?%;line-height:%?24?%;height:%?36?%;min-width:%?36?%;padding:0 %?10?%;box-sizing:border-box;border-radius:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:10}.tui-badge-scale[data-v-393ad790]{-webkit-transform-origin:center center;transform-origin:center center}\n\n/* badge end*/",""]),t.exports=e},9913:function(t,e,i){"use strict";var a={tuiIcon:i("31cc").default,tuiListCell:i("6b93").default,tuiBadge:i("e0ab").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"tui-tabbar"},[t._l(t.tabbar,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"tui-tabbar-item",class:[t.current==a?"tui-item-active":""],attrs:{"data-index":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabbarSwitch.apply(void 0,arguments)}}},[i("tui-icon",{class:[0==a?"tui-ptop-4":""],attrs:{name:t.current==a?e.icon+"-fill":e.icon,color:t.current==a?"#00C0FB":"#666",size:e.size}}),i("v-uni-view",{staticClass:"tui-scale"},[t._v(t._s(e.text))])],1)]}))],2),i("v-uni-view",{staticClass:"tui-searchbox"},[i("v-uni-view",{staticClass:"tui-search-input",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[i("v-uni-icon",{attrs:{type:"search",size:"15",color:"#999"}}),i("v-uni-text",{staticClass:"tui-search-text"},[t._v("搜索")])],1)],1),t._l(t.msgList,(function(e,a){return[i("tui-list-cell",{key:a+"_0",attrs:{unlined:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.detail.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"tui-chat-item"},[i("v-uni-view",{staticClass:"tui-msg-box"},[i("v-uni-image",{staticClass:"tui-msg-pic",attrs:{src:"/static/images/news/"+e.pic+".jpg",mode:"widthFix"}}),i("v-uni-view",{staticClass:"tui-msg-item"},[i("v-uni-view",{staticClass:"tui-msg-name"},[t._v(t._s(e.nickname))]),i("v-uni-view",{staticClass:"tui-msg-content"},[t._v(t._s(e.msg))])],1)],1),i("v-uni-view",{staticClass:"tui-msg-right",class:[3==e.level?"tui-right-dot":""]},[i("v-uni-view",{staticClass:"tui-msg-time"},[t._v(t._s(e.time))]),e.msgNum>0?i("tui-badge",{attrs:{type:2==e.level?"gray":"danger",dot:3==e.level}},[t._v(t._s(3!=e.level?e.msgNum:""))]):t._e()],1)],1)],1)]})),i("v-uni-view",{staticClass:"tui-safearea-bottom"})],2)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},a053:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.tui-list-cell[data-v-1409a240]{position:relative;width:100%;box-sizing:border-box}.tui-radius[data-v-1409a240]{border-radius:%?6?%;overflow:hidden}.tui-cell-hover[data-v-1409a240]{background-color:#f1f1f1!important}.tui-list-cell[data-v-1409a240]::after{content:"";position:absolute;border-bottom:1px solid #eaeef1;-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0}.tui-line-left[data-v-1409a240]::after{left:%?30?%!important}.tui-line-right[data-v-1409a240]::after{right:%?30?%!important}.tui-cell-unlined[data-v-1409a240]::after{border-bottom:0!important}.tui-cell-arrow[data-v-1409a240]::before{content:" ";height:10px;width:10px;border-width:2px 2px 0 0;border-color:silver;border-style:solid;-webkit-transform:matrix(.5,.5,-.5,.5,0,0);transform:matrix(.5,.5,-.5,.5,0,0);position:absolute;top:50%;margin-top:-6px;right:%?30?%}.tui-arrow-right[data-v-1409a240]::before{right:0!important}.tui-arrow-gray[data-v-1409a240]::before{border-color:#666!important}.tui-arrow-white[data-v-1409a240]::before{border-color:#fff!important}.tui-arrow-warning[data-v-1409a240]::before{border-color:#ff7900!important}.tui-arrow-success[data-v-1409a240]::before{border-color:#19be6b!important}.tui-arrow-danger[data-v-1409a240]::before{border-color:#eb0909!important}',""]),t.exports=e},a4e9:function(t,e,i){"use strict";i("99af"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiBadge",props:{type:{type:String,default:"primary"},dot:{type:Boolean,default:!1},margin:{type:String,default:"0"},absolute:{type:Boolean,default:!1},top:{type:String,default:"-8rpx"},right:{type:String,default:"0"},scaleRatio:{type:Number,default:1},translateX:{type:String,default:"0"}},computed:{getStyle:function(){return"scale(".concat(this.scaleRatio,") translateX(").concat(this.translateX,")")}},methods:{handleClick:function(){this.$emit("click",{})}}};e.default=a},b221:function(t,e,i){"use strict";i.r(e);var a=i("a4e9"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},be30:function(t,e,i){"use strict";var a=i("d3bf"),n=i.n(a);n.a},d002:function(t,e,i){"use strict";i.r(e);var a=i("2e8d"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},d3bf:function(t,e,i){var a=i("7e6f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4f971f86",a,!0,{sourceMap:!1,shadowMode:!1})},d50c:function(t,e,i){var a=i("e5c4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("59d12e06",a,!0,{sourceMap:!1,shadowMode:!1})},e0ab:function(t,e,i){"use strict";i.r(e);var a=i("74ab"),n=i("b221");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("be30");var o,l=i("f0c5"),c=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"393ad790",null,!1,a["a"],o);e["default"]=c.exports},e5c4:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.container[data-v-378670fa]{padding-bottom:%?100?%}\n\n/*tabbar*/.tui-tabbar[data-v-378670fa]{width:100%;position:fixed;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;z-index:99999;background-color:#fff;height:%?100?%;left:0;bottom:0;padding-bottom:env(safe-area-inset-bottom)}.tui-safearea-bottom[data-v-378670fa]{width:100%;height:env(safe-area-inset-bottom)}.tui-tabbar[data-v-378670fa]::before{content:"";width:100%;border-top:%?1?% solid #d2d2d2;position:absolute;top:0;left:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-tabbar-item[data-v-378670fa]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:25%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?24?%;color:#666;height:%?80?%}.tui-ptop-4[data-v-378670fa]{padding-top:%?4?%}.tui-scale[data-v-378670fa]{font-weight:700;-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center 100%;transform-origin:center 100%;line-height:%?30?%}.tui-item-active[data-v-378670fa]{color:#00c0fb!important}\n\n/*tabbar*/\n\n/*searchbox*/.tui-searchbox[data-v-378670fa]{width:100%;height:%?100?%;padding:0 %?30?%;box-sizing:border-box;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative}.tui-search-input[data-v-378670fa]{width:100%;height:%?72?%;background:#fafafa;border-radius:%?36?%;font-size:%?30?%;color:#a8abb8;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-search-text[data-v-378670fa]{padding-left:%?16?%}\n\n/*searchbox*/.tui-chat-item[data-v-378670fa]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-msg-box[data-v-378670fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-msg-pic[data-v-378670fa]{width:%?100?%;height:%?100?%;border-radius:50%;display:block;margin-right:%?24?%}.tui-msg-item[data-v-378670fa]{max-width:%?500?%;min-height:%?80?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-msg-name[data-v-378670fa]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?34?%;line-height:1;color:#262b3a}.tui-msg-content[data-v-378670fa]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?28?%;line-height:1;color:#9397a4}.tui-msg-right[data-v-378670fa]{max-width:%?120?%;height:%?88?%;margin-left:auto;text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.tui-msg-right.tui-right-dot[data-v-378670fa]{height:%?76?%;padding-bottom:%?10?%}.tui-msg-time[data-v-378670fa]{width:100%;font-size:%?24?%;line-height:%?24?%;color:#9397a4}',""]),t.exports=e}}]);