(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-swipeAction-swipeAction"],{"23bc":function(t,i,e){var n=e("f47b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("06ad5bea",n,!0,{sourceMap:!1,shadowMode:!1})},"27b2":function(t,i,e){var n=e("dc94");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("8087495c",n,!0,{sourceMap:!1,shadowMode:!1})},"366f":function(t,i,e){"use strict";e("4160"),e("a9e3"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"tuiSwipeAction",props:{actions:{type:Array,default:function(){return[]}},closable:{type:Boolean,default:!0},showMask:{type:Boolean,default:!0},operateWidth:{type:Number,default:80},params:{type:Object,default:function(){return{}}},forbid:{type:Boolean,default:!1},open:{type:Boolean,default:!1}},watch:{actions:function(t,i){this.updateButtonSize()},open:function(t){this.manualSwitch(t)}},data:function(){return{tStart:{pageX:0,pageY:0},limitMove:0,position:{pageX:0,pageY:0},isShowBtn:!1}},mounted:function(){this.updateButtonSize()},methods:{swipeDirection:function(t,i,e,n){return Math.abs(t-i)>=Math.abs(e-n)?t-i>0?"Left":"Right":e-n>0?"Up":"Down"},loop:function(){},updateButtonSize:function(){var t=this.actions;if(t.length>0){uni.createSelectorQuery().in(this);var i=0;t.forEach((function(t){i+=t.width||0})),this.limitMove=i}else this.limitMove=this.operateWidth},handlerTouchstart:function(t){if(!this.forbid){var i=t.touches?t.touches[0]:{},e=this.tStart;if(i)for(var n in e)i[n]&&(e[n]=i[n])}},swipper:function(t){var i=this.tStart,e={pageX:t.pageX-i.pageX,pageY:t.pageY-i.pageY};this.limitMove<Math.abs(e.pageX)&&(e.pageX=-this.limitMove),this.position=e},handlerTouchmove:function(t){if(!this.forbid){var i=this.tStart,e=t.touches?t.touches[0]:{};if(e){var n=this.swipeDirection(i.pageX,e.pageX,i.pageY,e.pageY);"Left"===n&&Math.abs(this.position.pageX)!==this.limitMove&&this.swipper(e)}}},handlerTouchend:function(t){if(!this.forbid){var i=this.tStart,e=t.changedTouches?t.changedTouches[0]:{};if(e){var n=this.swipeDirection(i.pageX,e.pageX,i.pageY,e.pageY),o={pageX:e.pageX-i.pageX,pageY:e.pageY-i.pageY};Math.abs(o.pageX)>=40&&"Left"===n?(o.pageX=o.pageX<0?-this.limitMove:this.limitMove,this.isShowBtn=!0):o.pageX=0,this.position=o}}},handlerButton:function(t){this.closable&&this.closeButtonGroup();var i=t.currentTarget.dataset;this.$emit("click",{index:Number(i.index),item:this.params})},closeButtonGroup:function(){this.position={pageX:0,pageY:0},this.isShowBtn=!1},handlerParentButton:function(t){this.closable&&this.closeButtonGroup()},manualSwitch:function(t){var i=0;if(t)if(0===this.actions.length)i=this.operateWidth;else{var e=0;this.actions.forEach((function(t){e+=t.width})),i=e}this.position={pageX:-i,pageY:0}},px:function(t){return uni.upx2px(t)+"px"}}};i.default=n},4452:function(t,i,e){"use strict";var n=e("27b2"),o=e.n(n);o.a},"489c":function(t,i,e){"use strict";e.r(i);var n=e("a7e6"),o=e("7fd2");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("9062");var s,c=e("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"b34e7742",null,!1,n["a"],s);i["default"]=u.exports},"7fd2":function(t,i,e){"use strict";e.r(i);var n=e("366f"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},9062:function(t,i,e){"use strict";var n=e("23bc"),o=e.n(n);o.a},a7e6:function(t,i,e){"use strict";var n,o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-swipeout-wrap"},[e("v-uni-view",{staticClass:"tui-swipeout-item",class:[t.isShowBtn?"swipe-action-show":""],style:{transform:"translate("+t.position.pageX+"px,0)"},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerTouchstart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerTouchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerTouchend.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-swipeout-content"},[t._t("content")],2),t.actions.length>0?e("v-uni-view",{staticClass:"tui-swipeout-button-right-group",on:{touchend:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.loop.apply(void 0,arguments)}}},t._l(t.actions,(function(i,n){return e("v-uni-view",{key:n,staticClass:"tui-swipeout-button-right-item",style:{backgroundColor:i.background||"#f7f7f7",color:i.color,width:i.width+"px"},attrs:{"data-index":n},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton.apply(void 0,arguments)}}},[i.icon?e("v-uni-image",{style:{width:t.px(i.imgWidth),height:t.px(i.imgHeight)},attrs:{src:i.icon}}):t._e(),e("v-uni-text",{style:{fontSize:t.px(i.fontsize)}},[t._v(t._s(i.name))])],1)})),1):t._e(),0===t.actions.length?e("v-uni-view",{staticClass:"tui-swipeout-button-right-group",style:{width:t.operateWidth+"px",right:"-"+t.operateWidth+"px"},on:{touchend:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.loop.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerParentButton.apply(void 0,arguments)}}},[t._t("button")],2):t._e()],1),t.isShowBtn&&t.showMask?e("v-uni-view",{staticClass:"swipe-action_mask",on:{touchstart:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.closeButtonGroup.apply(void 0,arguments)},click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.closeButtonGroup.apply(void 0,arguments)}}}):t._e()],1)},a=[];e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))},c2f5:function(t,i,e){"use strict";var n={tuiSwipeAction:e("489c").default,tuiIcon:e("31cc").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"title"},[t._v("滑动菜单")]),e("v-uni-view",{staticClass:"sub-title"},[t._v("swipeAction滑动菜单：actions长度为0时，插槽可直接传入操作菜单按钮。")])],1),e("v-uni-view",{staticClass:"tui-title"},[t._v("基本使用")]),e("tui-swipe-action",{attrs:{actions:t.actions},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-list-item"},[t._v("基本使用")])]},proxy:!0}])}),e("v-uni-view",{staticClass:"tui-title"},[t._v("点击按钮时不关闭")]),e("tui-swipe-action",{attrs:{actions:t.actions2,closable:!1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-list-item"},[t._v("点击按钮时不关闭")])]},proxy:!0}])}),e("v-uni-view",{staticClass:"tui-title"},[t._v("禁止滑动展示")]),e("tui-swipe-action",{attrs:{actions:t.actions2,closable:!1,forbid:!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-list-item"},[t._v("禁止滑动展示")])]},proxy:!0}])}),e("v-uni-view",{staticClass:"tui-title"},[t._v("使用变量控制开关"),e("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#19be6b"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.switchChange.apply(void 0,arguments)}}})],1),e("tui-swipe-action",{attrs:{actions:t.actions2,open:t.open},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-list-item"},[t._v("使用变量控制开关")])]},proxy:!0}])}),e("v-uni-view",{staticClass:"tui-title"},[t._v("可同时打开多行菜单")]),e("tui-swipe-action",{attrs:{actions:t.actions2,showMask:!1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-list-item"},[t._v("打开关闭互不影响")])]},proxy:!0}])}),e("tui-swipe-action",{attrs:{actions:t.actions2,showMask:!1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-list-item"},[t._v("打开关闭互不影响")])]},proxy:!0}])}),e("tui-swipe-action",{attrs:{actions:t.actions2,showMask:!1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handlerButton2.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-list-item"},[t._v("打开关闭互不影响")])]},proxy:!0}])}),e("v-uni-view",{staticClass:"tui-title"},[t._v("自定义操作菜单")]),e("tui-swipe-action",{attrs:{operateWidth:140},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-list-item"},[t._v("自定义操作菜单，不传actions")])]},proxy:!0},{key:"button",fn:function(){return[e("v-uni-view",{staticClass:"tui-custom-btn_box"},[e("v-uni-view",{staticClass:"tui-custom-btn tui-custom-mr",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.customBtn(0)}}},[e("tui-icon",{attrs:{name:"star",color:"#333",size:20}})],1),e("v-uni-view",{staticClass:"tui-custom-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.customBtn(1)}}},[e("tui-icon",{attrs:{name:"delete",color:"#333",size:18}})],1)],1)]},proxy:!0}])})],1)},a=[];e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))},dc94:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".container[data-v-a4dc7a0e]{padding-bottom:%?120?%}.header[data-v-a4dc7a0e]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-a4dc7a0e]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-a4dc7a0e]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-list-item[data-v-a4dc7a0e]{padding:%?40?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:item;-webkit-align-items:item;align-items:item}.tui-title[data-v-a4dc7a0e]{width:100%;padding:%?50?% %?30?% %?30?%;box-sizing:border-box;font-size:%?32?%;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-switch[data-v-a4dc7a0e]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:100% center;transform-origin:100% center}.tui-custom-btn_box[data-v-a4dc7a0e]{width:140px;height:100%;padding:0 %?20?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#fafafa}.tui-custom-btn[data-v-a4dc7a0e]{width:%?100?%;height:%?100?%;border-radius:50%;background-color:#fff;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-shrink:0;flex-shrink:0}.tui-custom-mr[data-v-a4dc7a0e]{margin-right:%?20?%}",""]),t.exports=i},e126:function(t,i,e){"use strict";e.r(i);var n=e("f21f"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},f21f:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{actions:[{name:"删除",color:"#fff",fontsize:30,width:70,background:"#FD3B31"},{name:"修改",color:"#fff",fontsize:30,width:70,background:"#5677fc"},{name:"收藏",width:70,fontsize:30,color:"#fff",background:"#C8C7CD"}],actions2:[{name:"普通",color:"#fff",fontsize:30,width:70,background:"#C8C7CD"},{name:"警示",color:"#fff",fontsize:30,width:70,background:"#FD3B31"}],open:!1}},methods:{handlerButton:function(t){var i=t.index,e=(t.item,["删除","修改","收藏"][i]);this.tui.toast("您点击了【"+e+"】按钮")},handlerButton2:function(t){var i=t.index+1;this.tui.toast("您点击了按钮"+i)},customBtn:function(t){t+=1,this.tui.toast("您点击了按钮"+t)},switchChange:function(t){this.open=t.target.value}}};i.default=n},f47b:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".tui-swipeout-wrap[data-v-b34e7742]{background-color:#fff;position:relative;overflow:hidden}.swipe-action-show[data-v-b34e7742]{position:relative;z-index:998}.tui-swipeout-item[data-v-b34e7742]{width:100%;\n\t/* padding: 15px 20px; */box-sizing:border-box;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;font-size:14px}.tui-swipeout-content[data-v-b34e7742]{white-space:nowrap;overflow:hidden}.tui-swipeout-button-right-group[data-v-b34e7742]{position:absolute;right:-100%;top:0;height:100%;z-index:1;width:100%}.tui-swipeout-button-right-item[data-v-b34e7742]{height:100%;float:left;white-space:nowrap;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.swipe-action_mask[data-v-b34e7742]{display:block;opacity:0;position:fixed;z-index:997;top:0;left:0;width:100%;height:100%}",""]),t.exports=i},fc7d:function(t,i,e){"use strict";e.r(i);var n=e("c2f5"),o=e("e126");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("4452");var s,c=e("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"a4dc7a0e",null,!1,n["a"],s);i["default"]=u.exports}}]);