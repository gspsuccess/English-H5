(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-news-commentReply-commentReply"],{1261:function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-nomore-class tui-loadmore-none"},[i("v-uni-view",{class:[t.isDot?"tui-nomore-dot":"tui-nomore"]},[i("v-uni-view",{class:[t.isDot?"tui-dot-text":"tui-nomore-text"],style:{backgroundColor:t.backgroundColor}},[t._v(t._s(t.isDot?t.dotText:t.text))])],1)],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"1bd6":function(t,e,i){var a=i("7a30");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("25a04758",a,!0,{sourceMap:!1,shadowMode:!1})},"1c73":function(t,e,i){"use strict";i.r(e);var a=i("a0fa"),o=i("55b5");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("d5bd");var r,l=i("f0c5"),s=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,"504f0031",null,!1,a["a"],r);e["default"]=s.exports},"39c1":function(t,e,i){"use strict";var a=i("41fe"),o=i.n(a);o.a},"41fe":function(t,e,i){var a=i("a053");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("500be44f",a,!0,{sourceMap:!1,shadowMode:!1})},"53ae":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiListCell",props:{arrow:{type:Boolean,default:!1},arrowColor:{type:String,default:""},hover:{type:Boolean,default:!0},unlined:{type:Boolean,default:!1},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#333"},radius:{type:Boolean,default:!1},arrowRight:{type:Boolean,default:!0},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};e.default=a},"55b5":function(t,e,i){"use strict";i.r(e);var a=i("5744"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},5744:function(t,e,i){"use strict";i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{fabulous:173,isFabulous:!1,replyList:[{avatar:"avatar_1.jpg",nickname:"月牙",fabulous:2,content:"力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。",reply:[],time:"昨天 21:09"},{avatar:"list_2.jpg",nickname:"拜仁慕尼黑",fabulous:2,content:"说实话，武汉重庆还真的是一家，但是比赛还是要分出个胜负来的，我卓尔球迷肯定是要为我武汉加油了，按照目前两队现在这个状态来看武汉重庆应该是五五开，所以我想说武汉加油！卓尔加油！",reply:[{nickname:"月牙",content:"力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。"}],time:"昨天 21:09"},{avatar:"avatar_2.jpg",nickname:"thorui",fabulous:0,content:"小克鲁伊夫带的球队征服了中超球迷，李铁也带队冲超成功，现在风头正劲，究竟鹿死谁手，谁更胜一筹，期待精彩的比赛",reply:[],time:"昨天 17:30"}],pageIndex:1,loadding:!1,pullUpOn:!0}},methods:{btnFabulous:function(){this.fabulous=this.isFabulous?173:174,this.isFabulous=!this.isFabulous},cmtFabulous:function(t){var e=t.currentTarget.id,i=this.replyList[e],a=this.replyList[e].isFabulous,o=this.replyList[e].fabulous,n=a?o-1:o+1;this.$set(i,"fabulous",n),this.$set(i,"isFabulous",!a)},btnCmt:function(){uni.navigateTo({url:"../comment/comment"})}},onPullDownRefresh:function(){this.pageIndex=1,this.pullUpOn=!0,this.loadding=!1,setTimeout((function(){uni.stopPullDownRefresh()}),200)},onReachBottom:function(){if(this.pullUpOn)if(this.loadding=!0,3==this.pageIndex)this.loadding=!1,this.pullUpOn=!1;else{var t=JSON.parse(JSON.stringify(this.replyList));this.replyList=this.replyList.concat(t),this.pageIndex=this.pageIndex+1,this.loadding=!1}}};e.default=a},"578b":function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-list-class tui-list-cell",class:[t.arrow?"tui-cell-arrow":"",t.arrow&&t.arrowRight?"":"tui-arrow-right",t.unlined?"tui-cell-unlined":"",t.lineLeft?"tui-line-left":"",t.lineRight?"tui-line-right":"",t.arrow&&t.arrowColor?"tui-arrow-"+t.arrowColor:"",t.radius?"tui-radius":""],style:{backgroundColor:t.backgroundColor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"5bf1":function(t,e,i){"use strict";var a=i("7c45"),o=i.n(a);o.a},"63a5":function(t,e,i){"use strict";i.r(e);var a=i("53ae"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},"6b93":function(t,e,i){"use strict";i.r(e);var a=i("578b"),o=i("63a5");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("39c1");var r,l=i("f0c5"),s=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,"1409a240",null,!1,a["a"],r);e["default"]=s.exports},"747f":function(t,e,i){"use strict";i.r(e);var a=i("c77d"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},7666:function(t,e,i){var a=i("f7e0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("5f6a7cb0",a,!0,{sourceMap:!1,shadowMode:!1})},"7a30":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".tui-loadmore[data-v-537a2e05]{width:48%;margin:1.5em auto;line-height:1.5em;font-size:%?24?%;text-align:center}.tui-loading-1[data-v-537a2e05]{margin:0 5px;width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:a-data-v-537a2e05 1s steps(12) infinite;animation:a-data-v-537a2e05 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes a-data-v-537a2e05{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes a-data-v-537a2e05{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.tui-loadmore-tips[data-v-537a2e05]{display:inline-block;vertical-align:middle}.tui-loading-2[data-v-537a2e05]{width:%?28?%;height:%?28?%;border:1px solid #8f8d8e;border-radius:50%;margin:0 6px;display:inline-block;vertical-align:middle;-webkit-clip-path:polygon(0 0,100% 0,100% 30%,0 30%);clip-path:polygon(0 0,100% 0,100% 30%,0 30%);-webkit-animation:rotate-data-v-537a2e05 1s linear infinite;animation:rotate-data-v-537a2e05 1s linear infinite}@-webkit-keyframes rotate-data-v-537a2e05{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-537a2e05{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.tui-loading-3[data-v-537a2e05]{display:inline-block;margin:0 6px;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:tui-rotate-data-v-537a2e05 .7s linear infinite;animation:tui-rotate-data-v-537a2e05 .7s linear infinite}.tui-loading-3.tui-loading-primary[data-v-537a2e05]{border-color:#e5e5e5 #e5e5e5 #e5e5e5 #5677fc}.tui-loading-3.tui-loading-green[data-v-537a2e05]{border-color:#e5e5e5 #e5e5e5 #e5e5e5 #19be6b}.tui-loading-3.tui-loading-orange[data-v-537a2e05]{border-color:#e5e5e5 #e5e5e5 #e5e5e5 #ff7900}.tui-loading-3.tui-loading-red[data-v-537a2e05]{border-color:#ededed #ededed #ededed #ed3f14}@-webkit-keyframes tui-rotate-data-v-537a2e05{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes tui-rotate-data-v-537a2e05{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),t.exports=e},"7c3a":function(t,e,i){"use strict";var a=i("1bd6"),o=i.n(a);o.a},"7c45":function(t,e,i){var a=i("f7fa");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("75c748b2",a,!0,{sourceMap:!1,shadowMode:!1})},8578:function(t,e,i){"use strict";i.r(e);var a=i("1261"),o=i("c716");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("5bf1");var r,l=i("f0c5"),s=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,"7d70c981",null,!1,a["a"],r);e["default"]=s.exports},"8d5d":function(t,e,i){"use strict";i.r(e);var a=i("dfa0"),o=i("747f");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("7c3a");var r,l=i("f0c5"),s=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,"537a2e05",null,!1,a["a"],r);e["default"]=s.exports},a053:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.tui-list-cell[data-v-1409a240]{position:relative;width:100%;box-sizing:border-box}.tui-radius[data-v-1409a240]{border-radius:%?6?%;overflow:hidden}.tui-cell-hover[data-v-1409a240]{background-color:#f1f1f1!important}.tui-list-cell[data-v-1409a240]::after{content:"";position:absolute;border-bottom:1px solid #eaeef1;-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0}.tui-line-left[data-v-1409a240]::after{left:%?30?%!important}.tui-line-right[data-v-1409a240]::after{right:%?30?%!important}.tui-cell-unlined[data-v-1409a240]::after{border-bottom:0!important}.tui-cell-arrow[data-v-1409a240]::before{content:" ";height:10px;width:10px;border-width:2px 2px 0 0;border-color:silver;border-style:solid;-webkit-transform:matrix(.5,.5,-.5,.5,0,0);transform:matrix(.5,.5,-.5,.5,0,0);position:absolute;top:50%;margin-top:-6px;right:%?30?%}.tui-arrow-right[data-v-1409a240]::before{right:0!important}.tui-arrow-gray[data-v-1409a240]::before{border-color:#666!important}.tui-arrow-white[data-v-1409a240]::before{border-color:#fff!important}.tui-arrow-warning[data-v-1409a240]::before{border-color:#ff7900!important}.tui-arrow-success[data-v-1409a240]::before{border-color:#19be6b!important}.tui-arrow-danger[data-v-1409a240]::before{border-color:#eb0909!important}',""]),t.exports=e},a0fa:function(t,e,i){"use strict";var a={tuiIcon:i("31cc").default,tuiListCell:i("6b93").default,tuiLoadmore:i("8d5d").default,tuiNomore:i("8578").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"tui-cmt-primary"},[i("v-uni-view",{staticClass:"tui-cmt-cell tui-cell-last"},[i("v-uni-view",{staticClass:"tui-header-box"},[i("v-uni-view",{staticClass:"tui-userinfo-box"},[i("v-uni-image",{staticClass:"tui-avatar",attrs:{src:"/static/images/news/avatar_1.jpg"}}),i("v-uni-view",{staticClass:"tui-nickname-box"},[i("v-uni-view",{staticClass:"tui-cmt-nickname"},[t._v("米兰的卡先生")]),i("v-uni-view",{staticClass:"tui-cmt-time"},[t._v("06-22 12:02")])],1)],1),i("v-uni-view",{staticClass:"tui-fabulous",class:{"tui-primary":t.isFabulous},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnFabulous.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(0==t.fabulous?"赞":t.fabulous))]),i("tui-icon",{attrs:{name:t.isFabulous?"agree-fill":"agree",size:15,color:t.isFabulous?"#5677fc":"#9a9a9a"}})],1)],1),i("v-uni-view",{staticClass:"tui-cmt-content"},[t._v("我一直没懂赛前问一个主教练如何评价对手的主教练， 记者究竟是想得到什么答案？☺☺☺☺☺")])],1)],1),i("v-uni-view",{staticClass:"tui-empty"}),i("v-uni-view",{staticClass:"tui-cmt-title"},[t._v("全部回复（44）")]),i("v-uni-view",{staticClass:"tui-cmtbox"},t._l(t.replyList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"tui-cmt-cell"},[i("v-uni-view",{staticClass:"tui-header-box"},[i("v-uni-view",{staticClass:"tui-userinfo-box"},[i("v-uni-image",{staticClass:"tui-avatar",attrs:{src:"/static/images/news/"+e.avatar}}),i("v-uni-view",{staticClass:"tui-nickname-box"},[i("v-uni-view",{staticClass:"tui-cmt-nickname"},[t._v(t._s(e.nickname))]),i("v-uni-view",{staticClass:"tui-cmt-time"},[t._v(t._s(e.time))])],1)],1),i("v-uni-view",{staticClass:"tui-fabulous",class:[e.isFabulous?"tui-primary":""],attrs:{id:a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cmtFabulous.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(0==e.fabulous?"赞":e.fabulous))]),i("tui-icon",{attrs:{name:e.isFabulous?"agree-fill":"agree",size:15,color:e.isFabulous?"#5677fc":"#9a9a9a"}})],1)],1),e.reply.length>0?i("v-uni-view",{staticClass:"tui-reply-box"},t._l(e.reply,(function(e,a){return i("tui-list-cell",{key:a,attrs:{backgroundColor:"#f2f2f2",size:28,unlined:!0}},[i("v-uni-view",{staticClass:"tui-flex-1 tui-reply-nickname"},[t._v(t._s(e.nickname))]),i("v-uni-view",{staticClass:"tui-flex-1"},[t._v(t._s(e.content))])],1)})),1):t._e(),i("v-uni-view",{staticClass:"tui-cmt-content"},[t._v(t._s(e.content))])],1)})),1),i("v-uni-view",{staticClass:"tui-operation"},[i("v-uni-view",{staticClass:"tui-operation-inner"},[i("v-uni-view",{staticClass:"tui-btn-comment",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnCmt.apply(void 0,arguments)}}},[t._v("回复楼主...")])],1)],1),t.loadding?i("tui-loadmore",{attrs:{index:3,type:"primary"}}):t._e(),t.pullUpOn?t._e():i("tui-nomore",{attrs:{backgroundColor:"#fff",text:"没有更多回复"}}),i("v-uni-view",{staticClass:"tui-safearea-bottom"})],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},c716:function(t,e,i){"use strict";i.r(e);var a=i("fb41"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},c77d:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiLoadmore",props:{text:{type:String,default:"正在加载..."},index:{type:Number,default:1},type:{type:String,default:""}}};e.default=a},d5bd:function(t,e,i){"use strict";var a=i("7666"),o=i.n(a);o.a},dfa0:function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-loadmore"},[i("v-uni-view",{class:["tui-loading-"+t.index,3==t.index&&t.type?"tui-loading-"+t.type:""]}),i("v-uni-view",{staticClass:"tui-loadmore-tips"},[t._v(t._s(t.text))])],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},f7e0:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'uni-page-body[data-v-504f0031]{background-color:#fff;color:#333}.container[data-v-504f0031]{padding-bottom:%?110?%;box-sizing:border-box}.tui-empty[data-v-504f0031]{width:100%;height:%?10?%;background-color:#eaeef1}.tui-cmt-title[data-v-504f0031]{font-size:%?30?%;font-weight:700;position:relative;padding:%?20?% %?30?%;box-sizing:border-box;margin-bottom:%?20?%}.tui-cmt-title[data-v-504f0031]::after{content:"";position:absolute;left:%?12?%;top:30%;width:%?6?%;height:40%;background:#5677fc}.tui-cmt-cell[data-v-504f0031]{width:100%;padding:%?26?% %?30?%;box-sizing:border-box;position:relative}.tui-cmt-cell[data-v-504f0031]::after{content:"";position:absolute;border-bottom:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5);transform:scaleY(.5);bottom:0;right:0;left:0}.tui-cell-last[data-v-504f0031]::after{border-bottom:0!important}.tui-header-box[data-v-504f0031]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?28?%}.tui-userinfo-box[data-v-504f0031]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-avatar[data-v-504f0031]{width:%?64?%;height:%?64?%;border-radius:%?32?%;display:block;-webkit-flex-shrink:0;flex-shrink:0}.tui-nickname-box[data-v-504f0031]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-left:%?12?%;padding-top:%?4?%;height:%?60?%}.tui-cmt-nickname[data-v-504f0031]{color:#5677fc;line-height:%?28?%}.tui-cmt-time[data-v-504f0031]{font-size:%?24?%;line-height:%?24?%;color:#9a9a9a;-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:0 100%;transform-origin:0 100%}.tui-fabulous[data-v-504f0031]{color:#9a9a9a}.tui-fabulous uni-text[data-v-504f0031]{padding-right:%?4?%;font-size:%?24?%}.tui-cmt-content[data-v-504f0031]{font-size:%?32?%;color:#333;text-align:justify;padding-top:%?16?%;word-break:break-all;word-wrap:break-word}.tui-reply-box[data-v-504f0031]{border-radius:%?8?%;overflow:hidden;margin-top:%?16?%}.tui-cell-class[data-v-504f0031]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;justify-content:flex-start!important;padding:%?20?%!important;text-align:justify;word-break:break-all;word-wrap:break-word}.tui-flex-1[data-v-504f0031]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%}.tui-reply-nickname[data-v-504f0031]{font-size:%?24?%;color:#7a7a7a;padding-bottom:%?8?%}.tui-operation[data-v-504f0031]{width:100%;padding:0 %?30?%;box-sizing:border-box;overflow:hidden;background:hsla(0,0%,100%,.95);position:fixed;left:0;bottom:0;z-index:99999}.tui-operation-inner[data-v-504f0031]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-bottom:env(safe-area-inset-bottom)}.tui-safearea-bottom[data-v-504f0031]{width:100%;height:env(safe-area-inset-bottom)}.tui-operation[data-v-504f0031]::before{content:"";position:absolute;top:0;right:0;left:0;border-top:%?1?% solid #eaeef1;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-btn-comment[data-v-504f0031]{height:%?64?%;width:100%;background:#ededed;color:#999;border-radius:%?8?%;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:%?20?%;box-sizing:border-box;padding-top:0}.tui-primary[data-v-504f0031]{color:#5677fc}body.?%PAGE?%[data-v-504f0031]{background-color:#fff}',""]),t.exports=e},f7fa:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.tui-loadmore-none[data-v-7d70c981]{width:50%;margin:1.5em auto;line-height:1.5em;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-nomore[data-v-7d70c981]{width:100%;height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?10?%;padding-bottom:%?6?%}.tui-nomore[data-v-7d70c981]::before{content:" ";position:absolute;border-bottom:%?1?% solid #e5e5e5;-webkit-transform:scaleY(.5);transform:scaleY(.5);width:100%;top:%?18?%;left:0}.tui-nomore-text[data-v-7d70c981]{color:#999;font-size:%?24?%;text-align:center;padding:0 %?18?%;height:%?36?%;line-height:%?36?%;position:relative;z-index:1}.tui-nomore-dot[data-v-7d70c981]{position:relative;text-align:center;-webkit-display:flex;display:-webkit-box;display:flex;-webkit-justify-content:center;-webkit-box-pack:center;justify-content:center;margin-top:%?10?%;padding-bottom:%?6?%}.tui-nomore-dot[data-v-7d70c981]::before{content:"";position:absolute;border-bottom:%?1?% solid #e5e5e5;-webkit-transform:scaleY(.5) translateX(-50%);transform:scaleY(.5) translateX(-50%);width:%?360?%;top:%?18?%;left:50%}.tui-dot-text[data-v-7d70c981]{position:relative;color:#e5e5e5;font-size:10px;text-align:center;width:%?50?%;height:%?36?%;line-height:%?36?%;-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center;z-index:1}',""]),t.exports=e},fb41:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiNomore",props:{backgroundColor:{type:String,default:"#fafafa"},isDot:{type:Boolean,default:!1},text:{type:String,default:"没有更多了"}},data:function(){return{dotText:"●"}}};e.default=a}}]);