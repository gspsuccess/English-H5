(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-mall-orderDetail-orderDetail"],{"04a7":function(t,i,e){"use strict";var n={tuiCountdown:e("dc2c").default,tuiListCell:e("6b93").default,tuiButton:e("77b6").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"tui-order-header",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchStatus.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-header-content"},[e("v-uni-view",[e("v-uni-view",{staticClass:"tui-status-text"},[t._v(t._s(t.getStatusText(t.status)))]),e("v-uni-view",{staticClass:"tui-reason"},[e("v-uni-text",{staticClass:"tui-reason-text"},[t._v(t._s(t.getReason(t.status)))]),1===t.status?e("tui-countdown",{attrs:{time:1800,color:"rgba(254,254,254,0.75)",colonColor:"rgba(254,254,254,0.75)",borderColor:"transparent",backgroundColor:"transparent"}}):t._e()],1)],1),e("v-uni-image",{staticClass:"tui-status-img",attrs:{src:t.getImg(t.status),mode:"widthFix"}})],1)],1),e("tui-list-cell",{attrs:{arrow:!0,backgroundColor:"#fefefe"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.logistics.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-flex-box"},[e("v-uni-image",{staticClass:"tui-icon-img",attrs:{src:t.webURL+"img_order_logistics3x.png"}}),e("v-uni-view",{staticClass:"tui-logistics"},[e("v-uni-view",{staticClass:"tui-logistics-text"},[t._v("快递已到收货点，请注意查收哦! 投递员: echo. 联系电话: 17788849992")]),e("v-uni-view",{staticClass:"tui-logistics-time"},[t._v("2019-06-03 12:02")])],1)],1)],1),e("tui-list-cell",{attrs:{unlined:!0,hover:!1}},[e("v-uni-view",{staticClass:"tui-flex-box"},[e("v-uni-image",{staticClass:"tui-icon-img",attrs:{src:t.webURL+"img_order_address3x.png"}}),e("v-uni-view",{staticClass:"tui-addr"},[e("v-uni-view",{staticClass:"tui-addr-userinfo"},[t._v("张一"),e("v-uni-text",{staticClass:"tui-addr-tel"},[t._v("18378849962")])],1),e("v-uni-view",{staticClass:"tui-addr-text"},[t._v("广东省广州市海珠区阅江西路222号鲜卑路16巷吉安花园 2栋106")])],1)],1)],1),e("v-uni-view",{staticClass:"tui-order-item"},[e("tui-list-cell",{attrs:{hover:!1,lineLeft:!1}},[e("v-uni-view",{staticClass:"tui-goods-title"},[t._v("商品信息")])],1),t._l(2,(function(i,n){return[e("tui-list-cell",{key:n+"_0",attrs:{padding:"0"}},[e("v-uni-view",{staticClass:"tui-goods-item"},[e("v-uni-image",{staticClass:"tui-goods-img",attrs:{src:"/static/images/mall/product/"+(n+3)+".jpg"}}),e("v-uni-view",{staticClass:"tui-goods-center"},[e("v-uni-view",{staticClass:"tui-goods-name"},[t._v("欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）")]),e("v-uni-view",{staticClass:"tui-goods-attr"},[t._v("黑色，50ml")])],1),e("v-uni-view",{staticClass:"tui-price-right"},[e("v-uni-view",[t._v("￥298.00")]),e("v-uni-view",[t._v("x2")])],1)],1)],1)]})),e("v-uni-view",{staticClass:"tui-goods-info"},[e("v-uni-view",{staticClass:"tui-price-flex tui-size24"},[e("v-uni-view",[t._v("商品总额")]),e("v-uni-view",[t._v("￥1192.00")])],1),e("v-uni-view",{staticClass:"tui-price-flex  tui-size24"},[e("v-uni-view",[t._v("优惠券")]),e("v-uni-view",[t._v("￥0.00")])],1),e("v-uni-view",{staticClass:"tui-price-flex  tui-size24"},[e("v-uni-view",[t._v("配送费")]),e("v-uni-view",[t._v("￥0.00")])],1),e("v-uni-view",{staticClass:"tui-price-flex tui-size32 tui-pbtm20"},[e("v-uni-view",{staticClass:"tui-flex-shrink"},[t._v("合计")]),e("v-uni-view",{staticClass:"tui-goods-price"},[e("v-uni-view",{staticClass:"tui-size-24"},[t._v("￥")]),e("v-uni-view",{staticClass:"tui-price-large"},[t._v("1192")]),e("v-uni-view",{staticClass:"tui-size-24"},[t._v(".00")])],1)],1),e("v-uni-view",{staticClass:"tui-price-flex tui-size32"},[e("v-uni-view",{staticClass:"tui-flex-shrink"},[t._v("实付款")]),e("v-uni-view",{staticClass:"tui-goods-price tui-primary-color"},[e("v-uni-view",{staticClass:"tui-size-24"},[t._v("￥")]),e("v-uni-view",{staticClass:"tui-price-large"},[t._v("1192")]),e("v-uni-view",{staticClass:"tui-size-24"},[t._v(".00")])],1)],1)],1)],2),e("v-uni-view",{staticClass:"tui-order-info"},[e("tui-list-cell",{attrs:{hover:!1}},[e("v-uni-view",{staticClass:"tui-order-title"},[t._v("订单信息")])],1),e("v-uni-view",{staticClass:"tui-order-content"},[e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("订单号:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("48690010100035")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("物流单号:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("33655511251265578556")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("创建时间:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("2019-05-26 10:36")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("付款时间:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("2019-05-26 10:44")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("发货时间:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("2019-05-27 10:20")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("配送方式:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("包邮")])],1),e("v-uni-view",{staticClass:"tui-order-flex"},[e("v-uni-view",{staticClass:"tui-item-title"},[t._v("订单备注:")]),e("v-uni-view",{staticClass:"tui-item-content"},[t._v("麻烦尽快发货，打包包裹时请多拿几个泡沫放在纸箱盒内，防止摔碎")])],1)],1)],1),e("v-uni-view",{staticClass:"tui-safe-area"}),e("v-uni-view",{staticClass:"tui-tabbar tui-order-btn"},[e("v-uni-view",{staticClass:"tui-btn-mr"},[e("tui-button",{attrs:{type:"black",plain:!0,width:"152rpx",height:"56rpx",size:26,shape:"circle"}},[t._v("删除订单")])],1),e("v-uni-view",{staticClass:"tui-btn-mr"},[e("tui-button",{attrs:{type:"danger",plain:!0,width:"152rpx",height:"56rpx",size:26,shape:"circle"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.btnPay.apply(void 0,arguments)}}},[t._v("立即支付")])],1)],1),e("t-pay-way",{attrs:{show:t.show},on:{close:function(i){arguments[0]=i=t.$handleEvent(i),t.popupClose.apply(void 0,arguments)}}})],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},"0790":function(t,i,e){"use strict";e.r(i);var n=e("0dad"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"07a1":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".tui-countdown-box[data-v-1ca43c2d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-countdown-box[data-v-1ca43c2d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-countdown-item[data-v-1ca43c2d]{border:%?1?% solid;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?2?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.tui-countdown-time[data-v-1ca43c2d]{margin:0;padding:0}.tui-countdown-colon[data-v-1ca43c2d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?5?%}.tui-colon-pad[data-v-1ca43c2d]{padding:0!important}.tui-countdown-scale[data-v-1ca43c2d]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}",""]),t.exports=i},"0dad":function(t,i,e){"use strict";e("a9e3"),e("d3b7"),e("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"tuiCountdown",props:{width:{type:Number,default:25},height:{type:Number,default:25},borderColor:{type:String,default:"#333"},backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:24},color:{type:String,default:"#333"},scale:{type:Boolean,default:!1},colonSize:{type:Number,default:28},colonColor:{type:String,default:"#333"},time:{type:Number,default:0},days:{type:Boolean,default:!1},hours:{type:Boolean,default:!0},minutes:{type:Boolean,default:!0},seconds:{type:Boolean,default:!0},unitEn:{type:Boolean,default:!1},isColon:{type:Boolean,default:!0},returnTime:{type:Boolean,default:!1}},watch:{time:function(t){this.clearTimer(),this.doLoop()}},data:function(){return{countdown:null,d:"0",h:"00",i:"00",s:"00"}},created:function(){this.clearTimer(),this.doLoop()},beforeDestroy:function(){this.clearTimer()},methods:{getWidth:function(t,i){return t>99?i/2*t.toString().length:i},clearTimer:function(){clearInterval(this.countdown),this.countdown=null},endOfTime:function(){this.clearTimer(),this.$emit("end",{})},doLoop:function(){var t=this,i=this.time||0;this.countDown(i),this.countdown=setInterval((function(){i--,i<0?t.endOfTime():(t.countDown(i),t.returnTime&&t.$emit("time",{seconds:i}))}),1e3)},countDown:function(t){var i=0,e=0,n=0,a=0;t>0?(i=this.days?Math.floor(t/86400):0,e=this.hours?Math.floor(t/3600)-24*i:0,n=this.minutes?Math.floor(t/60)-60*e-24*i*60:0,a=Math.floor(t)-24*i*60*60-60*e*60-60*n):this.endOfTime(),e=e<10?"0"+e:e,n=n<10?"0"+n:n,a=a<10?"0"+a:a,this.d=i,this.h=e,this.i=n,this.s=a}}};i.default=n},"0fcf":function(t,i,e){"use strict";var n=e("1a76"),a=e.n(n);a.a},"1a76":function(t,i,e){var n=e("2f37");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("7d63b4b4",n,!0,{sourceMap:!1,shadowMode:!1})},"216b":function(t,i,e){var n=e("07a1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("0d9d0406",n,!0,{sourceMap:!1,shadowMode:!1})},"2f37":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'.container[data-v-94b9670e]{padding-bottom:%?118?%}.tui-order-header[data-v-94b9670e]{width:100%;height:%?160?%;position:relative;background-color:#eb0909}.tui-img-bg[data-v-94b9670e]{width:100%;height:%?160?%}.tui-header-content[data-v-94b9670e]{width:100%;height:%?160?%;position:absolute;z-index:10;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?70?%;box-sizing:border-box}.tui-status-text[data-v-94b9670e]{font-size:%?34?%;line-height:%?34?%;color:#fefefe}.tui-reason[data-v-94b9670e]{font-size:%?24?%;line-height:%?24?%;color:hsla(0,0%,99.6%,.75);padding-top:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-reason-text[data-v-94b9670e]{padding-right:%?12?%}.tui-status-img[data-v-94b9670e]{width:%?80?%;height:%?80?%;display:block}.tui-flex-box[data-v-94b9670e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-icon-img[data-v-94b9670e]{width:%?44?%;height:%?44?%;-webkit-flex-shrink:0;flex-shrink:0}.tui-logistics[data-v-94b9670e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?24?% 0 %?20?%;box-sizing:border-box}.tui-logistics-text[data-v-94b9670e]{font-size:%?26?%;line-height:%?32?%}.tui-logistics-time[data-v-94b9670e]{font-size:%?24?%;line-height:%?24?%;padding-top:%?16?%;color:#666}.tui-addr[data-v-94b9670e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-left:%?20?%;box-sizing:border-box}.tui-addr-userinfo[data-v-94b9670e]{font-size:%?30?%;line-height:%?30?%;font-weight:700}.tui-addr-text[data-v-94b9670e]{font-size:%?24?%;line-height:%?32?%;padding-top:%?16?%}.tui-addr-tel[data-v-94b9670e]{padding-left:%?40?%}.tui-order-item[data-v-94b9670e]{margin-top:%?20?%;border-radius:%?10?%;overflow:hidden}.tui-goods-title[data-v-94b9670e]{width:100%;font-size:%?28?%;line-height:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-goods-item[data-v-94b9670e]{width:100%;padding:%?20?% %?30?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-goods-img[data-v-94b9670e]{width:%?180?%;height:%?180?%;display:block;-webkit-flex-shrink:0;flex-shrink:0}.tui-goods-center[data-v-94b9670e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?20?% %?8?%;box-sizing:border-box}.tui-goods-name[data-v-94b9670e]{max-width:%?310?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:%?26?%;line-height:%?32?%}.tui-goods-attr[data-v-94b9670e]{font-size:%?22?%;color:#888;line-height:%?32?%;padding-top:%?20?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.tui-price-right[data-v-94b9670e]{text-align:right;font-size:%?24?%;color:#888;line-height:%?30?%;padding-top:%?20?%}.tui-color-red[data-v-94b9670e]{color:#e41f19;padding-right:%?30?%}.tui-goods-price[data-v-94b9670e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;font-size:%?24?%}.tui-size-24[data-v-94b9670e]{font-size:%?24?%;line-height:%?24?%}.tui-price-large[data-v-94b9670e]{font-size:%?32?%;line-height:%?30?%}.tui-goods-info[data-v-94b9670e]{width:100%;padding:%?30?%;box-sizing:border-box;background:#fff}.tui-price-flex[data-v-94b9670e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-size24[data-v-94b9670e]{padding-bottom:%?20?%;font-size:%?24?%;line-height:%?24?%;color:#888}.tui-size32[data-v-94b9670e]{font-size:%?32?%;line-height:%?32?%;font-weight:500}.tui-pbtm20[data-v-94b9670e]{padding-bottom:%?20?%}.tui-flex-shrink[data-v-94b9670e]{-webkit-flex-shrink:0;flex-shrink:0}.tui-primary-color[data-v-94b9670e]{color:#eb0909}.tui-order-info[data-v-94b9670e]{margin-top:%?20?%}.tui-order-title[data-v-94b9670e]{position:relative;font-size:%?28?%;line-height:%?28?%;padding-left:%?12?%;box-sizing:border-box}.tui-order-title[data-v-94b9670e]::before{content:"";position:absolute;left:0;top:0;border-left:%?4?% solid #eb0909;height:100%}.tui-order-content[data-v-94b9670e]{width:100%;padding:%?24?% %?30?%;box-sizing:border-box;background:#fff;font-size:%?24?%;line-height:%?30?%}.tui-order-flex[data-v-94b9670e]{display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?18?%}.tui-order-flex[data-v-94b9670e]:first-child{padding-top:0}.tui-item-title[data-v-94b9670e]{width:%?132?%;-webkit-flex-shrink:0;flex-shrink:0}.tui-item-content[data-v-94b9670e]{color:#666;line-height:%?32?%}.tui-safe-area[data-v-94b9670e]{height:%?1?%;padding-bottom:env(safe-area-inset-bottom)}.tui-tabbar[data-v-94b9670e]{width:100%;height:%?98?%;background:#fff;position:fixed;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;font-size:%?26?%;box-shadow:0 0 1px rgba(0,0,0,.3);padding-bottom:env(safe-area-inset-bottom);z-index:996}.tui-btn-mr[data-v-94b9670e]{margin-right:%?30?%}',""]),t.exports=i},"3ff8":function(t,i,e){"use strict";e.r(i);var n=e("04a7"),a=e("bf45");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("0fcf");var s,l=e("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"94b9670e",null,!1,n["a"],s);i["default"]=r.exports},"48a2":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-countdown-box"},[t.days?e("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.backgroundColor,borderColor:t.borderColor,width:t.getWidth(t.d,t.width)+"rpx",height:t.height+"rpx"}},[e("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.d))])],1):t._e(),t.days?e("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.borderColor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"天"))]):t._e(),t.hours?e("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.backgroundColor,borderColor:t.borderColor,width:t.getWidth(t.h,t.width)+"rpx",height:t.height+"rpx"}},[e("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.h))])],1):t._e(),t.hours?e("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.borderColor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"时"))]):t._e(),t.minutes?e("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.backgroundColor,borderColor:t.borderColor,width:t.getWidth(t.i,t.width)+"rpx",height:t.height+"rpx"}},[e("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.i))])],1):t._e(),t.minutes?e("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.borderColor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"分"))]):t._e(),t.seconds?e("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.backgroundColor,borderColor:t.borderColor,width:t.getWidth(t.s,t.width)+"rpx",height:t.height+"rpx"}},[e("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.s))])],1):t._e(),t.seconds&&!t.isColon?e("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.borderColor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.unitEn?"s":"秒"))]):t._e()],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},"969d":function(t,i,e){"use strict";var n=e("216b"),a=e.n(n);a.a},bf45:function(t,i,e){"use strict";e.r(i);var n=e("fac2"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},dc2c:function(t,i,e){"use strict";e.r(i);var n=e("48a2"),a=e("0790");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("969d");var s,l=e("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"1ca43c2d",null,!1,n["a"],s);i["default"]=r.exports},fac2:function(t,i,e){"use strict";var n=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("9cdb")),o={components:{tPayWay:a.default},data:function(){return{webURL:"https://www.thorui.cn/wx/static/images/mall/order/",status:1,show:!1}},methods:{getImg:function(t){return this.webURL+["img_order_payment3x.png","img_order_send3x.png","img_order_received3x.png","img_order_signed3x.png","img_order_closed3x.png"][t-1]},getStatusText:function(t){return["等待您付款","付款成功","待收货","订单已完成","交易关闭"][t-1]},getReason:function(t){return["剩余时间","等待卖家发货","还剩X天XX小时自动确认","","超时未付款，订单自动取消"][t-1]},switchStatus:function(){var t=this.status+1;this.status=t>5?1:t,this.tui.toast("状态切换成功")},logistics:function(){this.tui.href("/pages/extend/timeaxis/timeaxis?page=mall")},btnPay:function(){this.show=!0},popupClose:function(){this.show=!1}}};i.default=o}}]);