(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-formValidation-formValidation"],{"07f5":function(t,e,i){"use strict";var a={tuiListCell:i("6b93").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)},reset:function(e){arguments[0]=e=t.$handleEvent(e),t.formReset.apply(void 0,arguments)}}},[i("tui-list-cell",{attrs:{hover:!1}},[i("v-uni-view",{staticClass:"tui-line-cell"},[i("v-uni-view",{staticClass:"tui-title"},[t._v("姓名")]),i("v-uni-input",{staticClass:"tui-input",attrs:{"placeholder-class":"tui-phcolor",name:"name",placeholder:"请输入姓名",maxlength:"50",type:"text"}}),i("v-uni-radio-group",{staticClass:"radio-group",attrs:{name:"sex"}},[i("v-uni-label",{staticClass:"tui-radio"},[i("v-uni-radio",{attrs:{value:"1",color:"#5677fc"}}),t._v("男")],1),i("v-uni-label",{staticClass:"tui-radio"},[i("v-uni-radio",{attrs:{value:"2",color:"#5677fc"}}),t._v("女")],1)],1)],1)],1),i("tui-list-cell",{attrs:{hover:!1}},[i("v-uni-view",{staticClass:"tui-line-cell"},[i("v-uni-view",{staticClass:"tui-title"},[t._v("年龄")]),i("v-uni-input",{staticClass:"tui-input",attrs:{"placeholder-class":"tui-phcolor",name:"age",placeholder:"请输入年龄",maxlength:"50",type:"number"}})],1)],1),i("tui-list-cell",{attrs:{hover:!1}},[i("v-uni-view",{staticClass:"tui-line-cell"},[i("v-uni-view",{staticClass:"tui-title"},[t._v("手机号")]),i("v-uni-input",{staticClass:"tui-input",attrs:{"placeholder-class":"tui-phcolor",name:"mobile",placeholder:"请输入手机号",maxlength:"50",type:"text"}})],1)],1),i("tui-list-cell",{attrs:{hover:!1}},[i("v-uni-view",{staticClass:"tui-line-cell"},[i("v-uni-view",{staticClass:"tui-title"},[t._v("邮箱")]),i("v-uni-input",{staticClass:"tui-input",attrs:{"placeholder-class":"tui-phcolor",name:"email",placeholder:"请输入邮箱",maxlength:"50",type:"text"}})],1)],1),i("tui-list-cell",{attrs:{hover:!1}},[i("v-uni-view",{staticClass:"tui-line-cell"},[i("v-uni-view",{staticClass:"tui-title"},[t._v("身份证")]),i("v-uni-input",{staticClass:"tui-input",attrs:{"placeholder-class":"tui-phcolor",name:"idcard",placeholder:"请输入身份证号码",maxlength:"50",type:"text"}})],1)],1),i("tui-list-cell",{attrs:{hover:!1}},[i("v-uni-view",{staticClass:"tui-line-cell"},[i("v-uni-view",{staticClass:"tui-title"},[t._v("密码")]),i("v-uni-input",{staticClass:"tui-input",attrs:{"placeholder-class":"tui-phcolor",name:"pwd",placeholder:"请输入密码",maxlength:"50",type:"text"}})],1)],1),i("tui-list-cell",{attrs:{hover:!1}},[i("v-uni-view",{staticClass:"tui-line-cell"},[i("v-uni-view",{staticClass:"tui-title"},[t._v("确认密码")]),i("v-uni-input",{staticClass:"tui-input",attrs:{"placeholder-class":"tui-phcolor",name:"pwd2",placeholder:"请输入确认密码",maxlength:"50",type:"text"}})],1)],1),i("tui-list-cell",{attrs:{hover:!1}},[i("v-uni-view",{staticClass:"tui-line-cell"},[i("v-uni-view",{staticClass:"tui-title"},[t._v("区间")]),i("v-uni-input",{staticClass:"tui-input",attrs:{"placeholder-class":"tui-phcolor",name:"range",placeholder:"请输入3-20之间的数",maxlength:"50",type:"number"}})],1)],1),i("tui-list-cell",{attrs:{hover:!1,unlined:!0}},[i("v-uni-view",{staticClass:"tui-line-cell"},[i("v-uni-view",{staticClass:"tui-title"},[t._v("金额")]),i("v-uni-input",{staticClass:"tui-input",attrs:{"placeholder-class":"tui-phcolor",name:"amount",placeholder:"请输入金额,允许保留两位小数",maxlength:"50",type:"digit"}})],1)],1),i("v-uni-view",{staticClass:"tui-tips"},[t._v("更多验证请参考文档")]),i("v-uni-view",{staticClass:"tui-btn-box"},[i("v-uni-button",{staticClass:"tui-button-primary",attrs:{"hover-class":"tui-button-hover",formType:"submit",type:"primary"}},[t._v("Submit")]),i("v-uni-button",{staticClass:"tui-button-primary tui-button-gray",attrs:{"hover-class":"tui-button-gray_hover",formType:"reset"}},[t._v("Reset")])],1)],1)],1)},n=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},1286:function(t,e,i){"use strict";i.r(e);var a=i("07f5"),r=i("a8bd");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("9ad0");var l,o=i("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"d11d35aa",null,!1,a["a"],l);e["default"]=s.exports},2482:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("5316"),r={data:function(){return{}},methods:{formSubmit:function(t){var e=[{name:"name",rule:["required","isChinese","minLength:2","maxLength:6"],msg:["请输入姓名","姓名必须全部为中文","姓名必须2个或以上字符","姓名不能超过6个字符"]},{name:"sex",rule:["required"],msg:["请选择性别"]},{name:"age",rule:["required","isNum","range:[0,150]"],msg:["请输入年龄","请输入正确的年龄","请输入正确的年龄范围：0-150"]},{name:"mobile",rule:["required","isMobile"],msg:["请输入手机号","请输入正确的手机号"]},{name:"email",rule:["required","isEmail"],msg:["请输入邮箱","请输入正确的邮箱"]},{name:"idcard",rule:["required","isIdCard"],msg:["请输入身份证号码","请输入正确的身份证号码"]},{name:"pwd",rule:["required","isEnAndNo"],msg:["请输入密码","密码为8~20位数字和字母组合"]},{name:"pwd2",rule:["required","isSame:pwd"],msg:["请输入确认密码","两次输入的密码不一致"]},{name:"range",rule:["required","range:[3,20]"],msg:["请输入区间数字","请输入3-20之间的数字"]},{name:"amount",rule:["required","isAmount"],msg:["请输入金额","请输入正确的金额，允许保留两位小数"]}],i=t.detail.value,r=a.validation(i,e);r?uni.showToast({title:r,icon:"none"}):uni.showToast({title:"验证通过!",icon:"none"})},formReset:function(e){t.log("清空数据")}}};e.default=r}).call(this,i("5a52")["default"])},"26c6":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".container[data-v-d11d35aa]{padding:%?20?% 0 %?50?% 0}.tui-line-cell[data-v-d11d35aa]{width:100%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-title[data-v-d11d35aa]{line-height:%?32?%;min-width:%?120?%;-webkit-flex-shrink:0;flex-shrink:0}.tui-input[data-v-d11d35aa]{font-size:%?32?%;color:#333;padding-left:%?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:visible}.radio-group[data-v-d11d35aa]{margin-left:auto;-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:100% center;transform-origin:100% center;-webkit-flex-shrink:0;flex-shrink:0}.tui-radio[data-v-d11d35aa]{display:inline-block;padding-left:%?28?%;font-size:%?36?%;vertical-align:middle}.tui-btn-box[data-v-d11d35aa]{padding:%?40?% %?50?%;box-sizing:border-box}.tui-button-gray[data-v-d11d35aa]{margin-top:%?30?%}.tui-tips[data-v-d11d35aa]{padding:%?30?%;color:#999;font-size:%?24?%}",""]),t.exports=e},"39c1":function(t,e,i){"use strict";var a=i("41fe"),r=i.n(a);r.a},"41fe":function(t,e,i){var a=i("a053");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("500be44f",a,!0,{sourceMap:!1,shadowMode:!1})},5316:function(t,e,i){i("c975"),i("a9e3"),i("d3b7"),i("acd8"),i("ac1f"),i("25f0"),i("1276");var a=i("7a12"),r={validation:function(t,e){var i,n=a(e);try{for(n.s();!(i=n.n()).done;){var l=i.value,o=l.name,s=l.rule,u=l.msg;if(o&&s&&0!==s.length&&u&&0!==u.length)for(var c=0,d=s.length;c<d;c++){var f=s[c],v=u[c];if(f&&v&&(~s.indexOf("required")||0!==t[o].toString().length)){var p=null;if(~f.indexOf(":")){var m=f.split(":");f=m[0],p=m[1]}var b=!1;switch(f){case"required":b=r._isNullOrEmpty(t[o]);break;case"isMobile":b=!r._isMobile(t[o]);break;case"isEmail":b=!r._isEmail(t[o]);break;case"isCarNo":b=!r._isCarNo(t[o]);break;case"isIdCard":b=!r._isIdCard(t[o]);break;case"isAmount":b=!r._isAmount(t[o]);break;case"isNum":b=!r._isNum(t[o]);break;case"isChinese":b=!r._isChinese(t[o]);break;case"isEnglish":b=!r._isEnglish(t[o]);break;case"isEnAndNo":b=!r._isEnAndNo(t[o]);break;case"isEnOrNo":b=!r._isEnOrNo(t[o]);break;case"isSpecial":b=r._isSpecial(t[o]);break;case"isEmoji":b=r._isEmoji(t[o]);break;case"isDate":b=!r._isDate(t[o]);break;case"isUrl":b=!r._isUrl(t[o]);break;case"isSame":b=!r._isSame(t[o],t[p]);break;case"range":var h=null;try{if(h=JSON.parse(p),h.length<=1)throw new Error("range值传入有误！")}catch(g){return"range值传入有误！"}b=!r._isRange(t[o],h[0],h[1]);break;case"minLength":b=!r._minLength(t[o],p);break;case"maxLength":b=!r._maxLength(t[o],p);break;default:break}if(b)return v}}}}catch(w){n.e(w)}finally{n.f()}return""},_isNullOrEmpty:function(t){return null===t||""===t||void 0===t},_isMobile:function(t){return/^(?:13\d|14\d|15\d|16\d|17\d|18\d|19\d)\d{5}(\d{3}|\*{3})$/.test(t)},_isEmail:function(t){return/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(t)},_isCarNo:function(t){var e=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/,i=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;return 7===t.length?i.test(t):8===t.length&&e.test(t)},_isIdCard:function(t){var e=t;if(15==e.length)return this.__isValidityBrithBy15IdCard;if(18==e.length){var i=e.split("");return!(!this.__isValidityBrithBy18IdCard(e)||!this.__isTrueValidateCodeBy18IdCard(i))}return!1},__isTrueValidateCodeBy18IdCard:function(t){var e=0,i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],a=[1,0,10,9,8,7,6,5,4,3,2];"x"==t[17].toLowerCase()&&(t[17]=10);for(var r=0;r<17;r++)e+=i[r]*t[r];var n=e%11;return t[17]==a[n]},__isValidityBrithBy18IdCard:function(t){var e=t.substring(6,10),i=t.substring(10,12),a=t.substring(12,14),r=new Date(e,parseFloat(i)-1,parseFloat(a));return r.getFullYear()==parseFloat(e)&&r.getMonth()==parseFloat(i)-1&&r.getDate()==parseFloat(a)},__isValidityBrithBy15IdCard:function(t){var e=t.substring(6,8),i=t.substring(8,10),a=t.substring(10,12),r=new Date(e,parseFloat(i)-1,parseFloat(a));return r.getYear()==parseFloat(e)&&r.getMonth()==parseFloat(i)-1&&r.getDate()==parseFloat(a)},_isAmount:function(t){return/^([0-9]*[.]?[0-9])[0-9]{0,1}$/.test(t)},_isNum:function(t){return/^[0-9]+$/.test(t)},_isChinese:function(t){var e=/.*[\u4e00-\u9fa5]+.*$/;return""!==t&&e.test(t)&&!r._isSpecial(t)&&!r._isEmoji(t)},_isEnglish:function(t){return/^[a-zA-Z]*$/.test(t)},_isEnAndNo:function(t){return/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(t)},_isEnOrNo:function(t){var e=/.*[\u4e00-\u9fa5]+.*$/,i=!0;return(e.test(t)||r._isSpecial(t)||r._isEmoji(t))&&(i=!1),i},_isSpecial:function(t){var e=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,i=/[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;return!(!e.test(t)&&!i.test(t))},_isEmoji:function(t){return/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g.test(t)},_isDate:function(t){var e=/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;return e.test(t)},_isUrl:function(t){return/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(t)},_isSame:function(t,e){return t===e},_isRange:function(t,e,i){return!e&&0!=e&&!i&&0!=i||(e||0==e?i||0==i?t>=e&&t<=i:t>=e:t<=i)},_minLength:function(t,e){return t.length>=Number(e)},_maxLength:function(t,e){return t.length<=Number(e)}};t.exports={validation:r.validation}},"53ae":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiListCell",props:{arrow:{type:Boolean,default:!1},arrowColor:{type:String,default:""},hover:{type:Boolean,default:!0},unlined:{type:Boolean,default:!1},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#333"},radius:{type:Boolean,default:!1},arrowRight:{type:Boolean,default:!0},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};e.default=a},"578b":function(t,e,i){"use strict";var a,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-list-class tui-list-cell",class:[t.arrow?"tui-cell-arrow":"",t.arrow&&t.arrowRight?"":"tui-arrow-right",t.unlined?"tui-cell-unlined":"",t.lineLeft?"tui-line-left":"",t.lineRight?"tui-line-right":"",t.arrow&&t.arrowColor?"tui-arrow-"+t.arrowColor:"",t.radius?"tui-radius":""],style:{backgroundColor:t.backgroundColor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},n=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"63a5":function(t,e,i){"use strict";i.r(e);var a=i("53ae"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"6abd":function(t,e,i){i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3");var a=i("e6f9");function r(t,e){if(t){if("string"===typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}t.exports=r},"6b93":function(t,e,i){"use strict";i.r(e);var a=i("578b"),r=i("63a5");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("39c1");var l,o=i("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"1409a240",null,!1,a["a"],l);e["default"]=s.exports},"7a12":function(t,e,i){i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");var a=i("6abd");function r(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=a(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,l=!0,o=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){o=!0,n=t},f:function(){try{l||null==r["return"]||r["return"]()}finally{if(o)throw n}}}}t.exports=r},"9ad0":function(t,e,i){"use strict";var a=i("c482"),r=i.n(a);r.a},a053:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.tui-list-cell[data-v-1409a240]{position:relative;width:100%;box-sizing:border-box}.tui-radius[data-v-1409a240]{border-radius:%?6?%;overflow:hidden}.tui-cell-hover[data-v-1409a240]{background-color:#f1f1f1!important}.tui-list-cell[data-v-1409a240]::after{content:"";position:absolute;border-bottom:1px solid #eaeef1;-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0}.tui-line-left[data-v-1409a240]::after{left:%?30?%!important}.tui-line-right[data-v-1409a240]::after{right:%?30?%!important}.tui-cell-unlined[data-v-1409a240]::after{border-bottom:0!important}.tui-cell-arrow[data-v-1409a240]::before{content:" ";height:10px;width:10px;border-width:2px 2px 0 0;border-color:silver;border-style:solid;-webkit-transform:matrix(.5,.5,-.5,.5,0,0);transform:matrix(.5,.5,-.5,.5,0,0);position:absolute;top:50%;margin-top:-6px;right:%?30?%}.tui-arrow-right[data-v-1409a240]::before{right:0!important}.tui-arrow-gray[data-v-1409a240]::before{border-color:#666!important}.tui-arrow-white[data-v-1409a240]::before{border-color:#fff!important}.tui-arrow-warning[data-v-1409a240]::before{border-color:#ff7900!important}.tui-arrow-success[data-v-1409a240]::before{border-color:#19be6b!important}.tui-arrow-danger[data-v-1409a240]::before{border-color:#eb0909!important}',""]),t.exports=e},a8bd:function(t,e,i){"use strict";i.r(e);var a=i("2482"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},c482:function(t,e,i){var a=i("26c6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("7f6e8388",a,!0,{sourceMap:!1,shadowMode:!1})},e6f9:function(t,e){function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}t.exports=i}}]);