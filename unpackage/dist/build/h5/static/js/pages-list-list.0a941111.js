(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-list-list"],{"0b8c":function(t,e,i){"use strict";var a=i("9fff"),r=i.n(a);r.a},"2a0b":function(t,e,i){"use strict";var a,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-card-class tui-card",class:[t.full?"tui-card-full":"",t.border?"tui-card-border":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)},longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.longTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"tui-card-header",class:{"tui-header-line":t.header.line},style:{background:t.header.bgcolor||"#fff"}},[i("v-uni-view",{staticClass:"tui-header-left"},[t.image.url?i("v-uni-image",{staticClass:"tui-header-thumb",class:{"tui-thumb-circle":t.image.circle},style:{height:(t.image.height||60)+"rpx",width:(t.image.width||60)+"rpx"},attrs:{src:t.image.url,mode:"widthFix"}}):t._e(),t.title.text?i("v-uni-text",{staticClass:"tui-header-title",style:{fontSize:(t.title.size||30)+"rpx",color:t.title.color||"#7A7A7A"}},[t._v(t._s(t.title.text))]):t._e()],1),t.tag.text?i("v-uni-view",{staticClass:"tui-header-right",style:{fontSize:(t.tag.size||24)+"rpx",color:t.tag.color||"#b2b2b2"}},[t._v(t._s(t.tag.text))]):t._e()],1),i("v-uni-view",{staticClass:"tui-card-body"},[t._t("body")],2),i("v-uni-view",{staticClass:"tui-card-footer"},[t._t("footer")],2)],1)},n=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"327f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.tui-card[data-v-57868fc6]{margin:0 %?30?%;font-size:%?28?%;background-color:#fff;border-radius:%?10?%;box-shadow:0 0 %?10?% #eee;box-sizing:border-box;overflow:hidden}.tui-card-full[data-v-57868fc6]{margin:0!important;border-radius:0!important}.tui-card-full[data-v-57868fc6]::after{border-radius:0!important}.tui-card-border[data-v-57868fc6]{position:relative;box-shadow:none!important}.tui-card-border[data-v-57868fc6]::after{content:" ";position:absolute;height:200%;width:200%;border:1px solid #ddd;transform-origin:0 0;-webkit-transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);left:0;top:0;border-radius:%?20?%;box-sizing:border-box;pointer-events:none}.tui-card-header[data-v-57868fc6]{width:100%;padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;box-sizing:border-box;overflow:hidden;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%}.tui-card-header[data-v-57868fc6]::after{content:"";position:absolute;border-bottom:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5);transform:scaleY(.5);bottom:0;right:0;left:0;pointer-events:none}.tui-header-line[data-v-57868fc6]::after{border-bottom:0!important}.tui-header-thumb[data-v-57868fc6]{height:%?60?%;width:%?60?%;vertical-align:middle;margin-right:%?20?%;border-radius:%?6?%}.tui-thumb-circle[data-v-57868fc6]{border-radius:50%!important}.tui-header-title[data-v-57868fc6]{display:inline-block;font-size:%?30?%;color:#7a7a7a;vertical-align:middle;max-width:%?460?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tui-header-right[data-v-57868fc6]{font-size:%?24?%;color:#b2b2b2}.tui-card-body[data-v-57868fc6]{font-size:%?32?%;color:#262b3a;box-sizing:border-box}.tui-card-footer[data-v-57868fc6]{font-size:%?28?%;color:#596d96;border-bottom-left-radius:%?10?%;border-bottom-right-radius:%?10?%;box-sizing:border-box}',""]),t.exports=e},"42ac":function(t,e,i){"use strict";var a=i("4fff"),r=i.n(a);r.a},"444d":function(t,e,i){"use strict";i.r(e);var a=i("6bb2"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"47d1":function(t,e,i){"use strict";var a={tuiCard:i("ae4f").default,tuiIcon:i("eb34").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[t._l(t.cards,(function(e,a){return[i("tui-card",{key:a+"_0",attrs:{title:e.title,tag:e.tag,header:e.header},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.detail(e.id)}},scopedSlots:t._u([{key:"body",fn:function(){return[i("v-uni-view",{staticClass:"tui-article"},[i("v-uni-image",{staticClass:"tui-article-img",attrs:{src:e.banner.url}})],1)]},proxy:!0},{key:"footer",fn:function(){return[i("v-uni-view",{staticClass:"tui-default tui-flex"},[i("v-uni-text",[t._v("￥"+t._s(e.price)+"元")]),i("tui-icon",{staticClass:"tui-right",attrs:{name:"arrowright",size:20,color:"#ccc"}})],1)]},proxy:!0}],null,!0)})]}))],2)},n=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"4fff":function(t,e,i){var a=i("327f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("7f842a36",a,!0,{sourceMap:!1,shadowMode:!1})},"54f8":function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return r}));i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");var a=i("dde1");function r(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(a["a"])(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,o=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,n=t},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(c)throw n}}}}},"6bb2":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiCard",props:{full:{type:Boolean,default:!1},image:{type:Object,default:function(){return{url:"",height:60,width:60,circle:!1}}},title:{type:Object,default:function(){return{text:"",size:30,color:"#7A7A7A"}}},tag:{type:Object,default:function(){return{text:"",size:24,color:"#b2b2b2"}}},header:{type:Object,default:function(){return{bgcolor:"#fff",line:!1}}},border:{type:Boolean,default:!1},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})},longTap:function(){this.$emit("longclick",{index:this.index})}}};e.default=a},"7cbb":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-2f964345]{background:#f0f0f0}.container[data-v-2f964345]{padding-bottom:env(safe-area-inset-bottom)}.tui-card[data-v-2f964345]{margin:%?30?% %?30?% %?10?% %?30?%}.tui-card[data-v-2f964345]:last-child{margin-bottom:%?40?%}.tui-title[data-v-2f964345]{width:100%;padding:%?70?% %?30?% %?30?% %?30?%;box-sizing:border-box;font-size:%?30?%;line-height:%?30?%;color:#666}.tui-default[data-v-2f964345]{padding:%?20?% %?30?%}.tui-default uni-text[data-v-2f964345]{color:#f60;font-weight:700}.tui-article[data-v-2f964345]{position:relative}.tui-article-img[data-v-2f964345]{width:100%;height:%?300?%;display:block}.tui-flex[data-v-2f964345]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-mr[data-v-2f964345]{margin-right:%?20?%}.tui-content[data-v-2f964345]{padding:%?0?% %?30?% %?20?% %?120?%;box-sizing:border-box;font-size:%?34?%;font-weight:400;color:#333}body.?%PAGE?%[data-v-2f964345]{background:#f0f0f0}",""]),t.exports=e},9391:function(t,e,i){"use strict";i.r(e);var a=i("ffed"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"9fff":function(t,e,i){var a=i("7cbb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("d8e3eeba",a,!0,{sourceMap:!1,shadowMode:!1})},ae4f:function(t,e,i){"use strict";i.r(e);var a=i("2a0b"),r=i("444d");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("42ac");var o,c=i("f0c5"),d=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"57868fc6",null,!1,a["a"],o);e["default"]=d.exports},dc74:function(t,e,i){"use strict";i.r(e);var a=i("47d1"),r=i("9391");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("0b8c");var o,c=i("f0c5"),d=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"2f964345",null,!1,a["a"],o);e["default"]=d.exports},ffed:function(t,e,i){"use strict";(function(t){var a=i("ee27");i("4d63"),i("ac1f"),i("25f0"),i("466d"),i("5319"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(i("54f8")),n=function(){return"micromessenger"===String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i))},o={onLoad:function(e){var i=this;this.getUrlCode("token")&&uni.setStorageSync("thorui_token","Bearer "+this.getUrlCode("token"));var a=uni.getStorageSync("thorui_token");a?this.tui.request("/productlist?url=https://wechat.chinanets.cn","GET").then((function(t){1===t.code&&(uni.setStorageSync("products",t.results),i.cards=i.formatProducts(t.results))})).then((function(e){t.log(e)})):this.getCode()},data:function(){return{cards:[]}},methods:{formatProducts:function(t){var e,i=[],a=(0,r.default)(t);try{for(a.s();!(e=a.n()).done;){var n=e.value;i.push({id:n.id,banner:{url:"https://chinanets.cn/media"+n.image.split("all_media")[1]},title:{text:n.name},price:n.trueprice,header:{line:!0,bgcolor:"#fafafa"}})}}catch(o){a.e(o)}finally{a.f()}return i},getCode:function(){if(n()){var t="wxab7a67328ad3052d",e="https://chinanets.cn/productlist?url=abc";window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+t+"&redirect_uri="+encodeURIComponent(e)+"&response_type=code&scope=snsapi_base&state=1#wechat_redirect"}else this.tui.toast("请在微信端打开页面")},getUrlCode:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null},detail:function(t){this.tui.href("/pages/product/product?id="+t)}}};e.default=o}).call(this,i("5a52")["default"])}}]);