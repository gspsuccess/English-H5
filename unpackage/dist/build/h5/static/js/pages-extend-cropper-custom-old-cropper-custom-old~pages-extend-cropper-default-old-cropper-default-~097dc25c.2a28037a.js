(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-cropper-custom-old-cropper-custom-old~pages-extend-cropper-default-old-cropper-default-~097dc25c"],{2100:function(t,i,e){"use strict";var a=e("b039"),n=e.n(a);n.a},"46f3":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.tui-container[data-v-160d06f0]{width:100vw;height:100vh;background-color:rgba(0,0,0,.6);position:fixed;top:0;left:0;z-index:1}.tui-image-cropper[data-v-160d06f0]{width:100vw;height:100vh;position:absolute}.tui-content[data-v-160d06f0]{width:100vw;height:100vh;position:absolute;z-index:9;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;pointer-events:none}.tui-bg-transparent[data-v-160d06f0]{background-color:rgba(0,0,0,.6);-webkit-transition-duration:.35s;transition-duration:.35s}.tui-content-top[data-v-160d06f0]{pointer-events:none}.tui-content-middle[data-v-160d06f0]{width:100%;height:200px;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box}.tui-cropper-box[data-v-160d06f0]{position:relative;\n\t/* transition-duration: 0.3s; */border-style:solid;border-width:%?1?%;box-sizing:border-box}.tui-flex-auto[data-v-160d06f0]{-webkit-box-flex:1;-webkit-flex:auto;flex:auto}.tui-cropper-image[data-v-160d06f0]{width:100%;border-style:none;position:absolute;top:0;left:0;z-index:2;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:center;transform-origin:center}.tui-cropper-canvas[data-v-160d06f0]{position:fixed;z-index:10;left:-2000px;top:-2000px;pointer-events:none}.tui-edge[data-v-160d06f0]{border-style:solid;pointer-events:auto;position:absolute;box-sizing:border-box}.tui-top-left[data-v-160d06f0]{border-bottom-width:0!important;border-right-width:0!important}.tui-top-right[data-v-160d06f0]{border-bottom-width:0!important;border-left-width:0!important}.tui-bottom-left[data-v-160d06f0]{border-top-width:0!important;border-right-width:0!important}.tui-bottom-right[data-v-160d06f0]{border-top-width:0!important;border-left-width:0!important}.tui-cropper-tabbar[data-v-160d06f0]{width:100%;height:%?120?%;padding:0 %?40?%;box-sizing:border-box;position:fixed;left:0;bottom:0;z-index:99;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#fff;font-size:%?32?%}.tui-cropper-tabbar[data-v-160d06f0]::after{content:" ";position:absolute;top:0;right:0;left:0;border-top:%?1?% solid hsla(0,0%,100%,.2);-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%}.tui-op-btn[data-v-160d06f0]{height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-rotate-img[data-v-160d06f0]{width:%?44?%;height:%?44?%}',""]),t.exports=i},"481f":function(t,i,e){"use strict";e.r(i);var a=e("5600"),n=e("72fb");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("2100");var h,o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"160d06f0",null,!1,a["a"],h);i["default"]=c.exports},5600:function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-container",on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.stop.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-image-cropper",on:{touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.cutTouchEnd.apply(void 0,arguments)},touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.cutTouchStart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.cutTouchMove.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"tui-content"},[e("v-uni-view",{staticClass:"tui-content-top tui-bg-transparent",style:{height:t.cutY+"px",transitionProperty:t.cutAnimation?"":"background"}}),e("v-uni-view",{staticClass:"tui-content-middle",style:{height:t.canvasHeight+"px"}},[e("v-uni-view",{staticClass:"tui-bg-transparent",style:{width:t.cutX+"px",transitionProperty:t.cutAnimation?"":"background"}}),e("v-uni-view",{staticClass:"tui-cropper-box",style:{width:t.canvasWidth+"px",height:t.canvasHeight+"px",borderColor:t.borderColor,transitionProperty:t.cutAnimation?"":"background"}},t._l(4,(function(i,a){return e("v-uni-view",{key:a,staticClass:"tui-edge",class:["tui-"+(a<2?"top":"bottom")+"-"+(0===a||2===a?"left":"right")],style:{width:t.edgeWidth,height:t.edgeWidth,borderColor:t.edgeColor,borderWidth:t.edgeBorderWidth,left:0===a||2===a?"-"+t.edgeOffsets:"auto",right:1===a||3===a?"-"+t.edgeOffsets:"auto",top:a<2?"-"+t.edgeOffsets:"auto",bottom:a>1?"-"+t.edgeOffsets:"auto"}})})),1),e("v-uni-view",{staticClass:"tui-flex-auto tui-bg-transparent",style:{transitionProperty:t.cutAnimation?"":"background"}})],1),e("v-uni-view",{staticClass:"tui-flex-auto tui-bg-transparent",style:{transitionProperty:t.cutAnimation?"":"background"}})],1),t.imageUrl?e("v-uni-image",{staticClass:"tui-cropper-image",style:{width:t.imgWidth?t.imgWidth+"px":"auto",height:t.imgHeight?t.imgHeight+"px":"auto",transform:t.imgTransform,transitionDuration:(t.cutAnimation?.35:0)+"s"},attrs:{src:t.imageUrl,mode:"widthFix"},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.imageLoad.apply(void 0,arguments)},error:function(i){arguments[0]=i=t.$handleEvent(i),t.imageLoad.apply(void 0,arguments)},touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.start.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.move.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.end.apply(void 0,arguments)}}}):t._e()],1),e("v-uni-canvas",{staticClass:"tui-cropper-canvas",style:{width:t.CROPPER_WIDTH*t.scaleRatio+"px",height:t.CROPPER_HEIGHT*t.scaleRatio+"px"},attrs:{"canvas-id":"tui-image-cropper",id:"tui-image-cropper","disable-scroll":!0}}),t.custom?t._e():e("v-uni-view",{staticClass:"tui-cropper-tabbar"},[e("v-uni-view",{staticClass:"tui-op-btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-image",{staticClass:"tui-rotate-img",attrs:{src:t.rotateImg},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setAngle.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"tui-op-btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.getImage.apply(void 0,arguments)}}},[t._v("完成")])],1)],1)},s=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}))},"72fb":function(t,i,e){"use strict";e.r(i);var a=e("c908"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},b039:function(t,i,e){var a=e("46f3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("08fe2d89",a,!0,{sourceMap:!1,shadowMode:!1})},c908:function(t,i,e){"use strict";(function(t){var a=e("ee27");e("99af"),e("ace4"),e("a9e3"),e("d3b7"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("f3f3"));e("96cf");var s=a(e("c964")),h={name:"tuiImageCropper",props:{imageUrl:{type:String,default:""},height:{type:Number,default:280},width:{type:Number,default:280},minWidth:{type:Number,default:100},minHeight:{type:Number,default:100},maxWidth:{type:Number,default:360},maxHeight:{type:Number,default:360},borderColor:{type:String,default:"rgba(255,255,255,0.1)"},edgeColor:{type:String,default:"#FFFFFF"},edgeWidth:{type:String,default:"34rpx"},edgeBorderWidth:{type:String,default:"6rpx"},edgeOffsets:{type:String,default:"6rpx"},lockWidth:{type:Boolean,default:!1},lockHeight:{type:Boolean,default:!1},lockRatio:{type:Boolean,default:!1},scaleRatio:{type:Number,default:2},quality:{type:Number,default:.8},rotateAngle:{type:Number,default:0},minScale:{type:Number,default:.5},maxScale:{type:Number,default:2},disableRotate:{type:Boolean,default:!0},limitMove:{type:Boolean,default:!0},custom:{type:Boolean,default:!1},startCutting:{type:[Number,Boolean],default:0},isBase64:{type:Boolean,default:!1},loadding:{type:Boolean,default:!0},rotateImg:{type:String,default:"/static/components/cropper/img_rotate.png"}},data:function(){return{MOVE_THROTTLE:null,MOVE_THROTTLE_FLAG:!0,TIME_CUT_CENTER:null,CROPPER_WIDTH:200,CROPPER_HEIGHT:200,CUT_START:null,cutX:0,cutY:0,touchRelative:[{x:0,y:0}],flagCutTouch:!1,hypotenuseLength:0,flagEndTouch:!1,canvasWidth:0,canvasHeight:0,imgWidth:0,imgHeight:0,scale:1,angle:0,cutAnimation:!1,cutAnimationTime:null,imgTop:0,imgLeft:0,ctx:null,sysInfo:null}},computed:{imgTransform:function(){return"translate3d(".concat(this.imgLeft-this.imgWidth/2,"px,").concat(this.imgTop-this.imgHeight/2,"px,0) scale(").concat(this.scale,") rotate(").concat(this.angle,"deg)")}},watch:{imageUrl:function(t,i){var e=this;this.imageReset(),this.showLoading(),uni.getImageInfo({src:t,success:function(t){e.imgComputeSize(t.width,t.height),e.limitMove&&e.imgMarginDetectionScale()},fail:function(t){e.imgComputeSize(),e.limitMove&&e.imgMarginDetectionScale()}})},canvasWidth:function(t){t<this.minWidth&&(this.canvasWidth=this.minWidth),this.computeCutSize()},canvasHeight:function(t){t<this.minHeight&&(this.canvasHeight=this.minHeight),this.computeCutSize()},rotateAngle:function(t){this.cutAnimation=!0,this.angle=t},angle:function(t){this.moveStop(),this.limitMove&&t%90&&(this.angle=90*Math.round(t/90)),this.imgMarginDetectionScale()},cutAnimation:function(t){var i=this;clearTimeout(this.cutAnimationTime),t&&(this.cutAnimationTime=setTimeout((function(){i.cutAnimation=!1}),260))},limitMove:function(t){t&&(this.angle%90&&(this.angle=90*Math.round(this.angle/90)),this.imgMarginDetectionScale())},cutY:function(t){this.cutDetectionPosition()},cutX:function(t){this.cutDetectionPosition()},startCutting:function(t){this.custom&&t&&this.getImage()}},mounted:function(){var t=this;this.sysInfo=uni.getSystemInfoSync(),this.imgTop=this.sysInfo.windowHeight/2,this.imgLeft=this.sysInfo.windowWidth/2,this.CROPPER_WIDTH=this.width,this.CROPPER_HEIGHT=this.height,this.canvasHeight=this.height,this.canvasWidth=this.width,this.ctx=uni.createCanvasContext("tui-image-cropper",this),this.setCutCenter(),this.computeCutSize(),this.cutDetectionPosition(),setTimeout((function(){t.$emit("ready",{})}),200)},methods:{getLocalImage:function(t){return(0,s.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,new Promise((function(i,e){uni.downloadFile({url:t,success:function(t){i(t.tempFilePath)},fail:function(t){e(!1)}})}));case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}}),i)})))()},getImage:function(){var i=this;if(this.imageUrl){this.loadding&&this.showLoading();var e=function(){var e=(0,s.default)(regeneratorRuntime.mark((function e(){var a,s,h,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=i.imgWidth*i.scale*i.scaleRatio,s=i.imgHeight*i.scale*i.scaleRatio,h=i.imgLeft-i.cutX,o=i.imgTop-i.cutY,i.ctx.translate(h*i.scaleRatio,o*i.scaleRatio),i.ctx.rotate(i.angle*Math.PI/180),c=i.imageUrl,i.ctx.drawImage(c,-a/2,-s/2,a,s),i.ctx.draw(!1,(function(){var e={width:i.canvasWidth*i.scaleRatio,height:Math.round(i.canvasHeight*i.scaleRatio),destWidth:i.canvasWidth*i.scaleRatio,destHeight:Math.round(i.canvasHeight)*i.scaleRatio,fileType:"png",quality:i.quality},a={url:"",base64:"",width:i.canvasWidth*i.scaleRatio,height:i.canvasHeight*i.scaleRatio};i.isBase64=!1,i.isBase64?uni.canvasGetImageData({canvasId:"tui-image-cropper",x:0,y:0,width:i.canvasWidth*i.scaleRatio,height:Math.round(i.canvasHeight*i.scaleRatio),success:function(t){var e=new Uint8Array(t.data),n=uni.arrayBufferToBase64(e);a.base64=n,i.loadding&&uni.hideLoading(),i.$emit("cropper",a)}}):uni.canvasToTempFilePath((0,n.default)({},e,{canvasId:"tui-image-cropper",success:function(t){a.url=t.tempFilePath,a.base64=t.tempFilePath,i.loadding&&uni.hideLoading(),i.$emit("cropper",a)},fail:function(i){t.log(i)}}),i)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();this.CROPPER_WIDTH!=this.canvasWidth||this.CROPPER_HEIGHT!=this.canvasHeight?(this.CROPPER_WIDTH=this.canvasWidth,this.CROPPER_HEIGHT=this.canvasHeight,this.ctx.draw(),this.$nextTick((function(){setTimeout((function(){e()}),100)}))):e()}else uni.showToast({title:"请选择图片",icon:"none"})},setCutCenter:function(){var t=this.sysInfo||uni.getSystemInfoSync(),i=.5*(t.windowHeight-this.canvasHeight),e=.5*(t.windowWidth-this.canvasWidth);this.imgTop=this.imgTop-this.cutY+i,this.cutY=i,this.imgLeft=this.imgLeft-this.cutX+e,this.cutX=e},imageReset:function(){this.scale=1,this.angle=0;var t=this.sysInfo||uni.getSystemInfoSync();this.imgTop=t.windowHeight/2,this.imgLeft=t.windowWidth/2},imageLoad:function(t){this.imageReset(),uni.hideLoading(),this.$emit("imageLoad",{})},cutDetectionPosition:function(){var t=this,i=function(){t.cutY<0&&(t.cutY=0),t.cutY>t.sysInfo.windowHeight-t.canvasHeight&&(t.cutY=t.sysInfo.windowHeight-t.canvasHeight)},e=function(){t.cutX<0&&(t.cutX=0),t.cutX>t.sysInfo.windowWidth-t.canvasWidth&&(t.cutX=t.sysInfo.windowWidth-t.canvasWidth)};if(null==this.cutY&&null==this.cutX){var a=.5*(this.sysInfo.windowHeight-this.canvasHeight),n=.5*(this.sysInfo.windowWidth-this.canvasWidth);this.cutY=a,this.cutX=n}else null!=this.cutY&&null!=this.cutX?(i(),e()):null!=this.cutY&&null==this.cutX?(i(),this.cutX=(this.sysInfo.windowWidth-this.canvasWidth)/2):null==this.cutY&&null!=this.cutX&&(e(),this.cutY=(this.sysInfo.windowHeight-this.canvasHeight)/2)},imgMarginDetectionPosition:function(t){if(this.limitMove){var i=this.imgLeft,e=this.imgTop;t=t||this.scale;var a=this.imgWidth,n=this.imgHeight;this.angle/90%2&&(a=this.imgHeight,n=this.imgWidth),i=this.cutX+a*t/2>=i?i:this.cutX+a*t/2,i=this.cutX+this.canvasWidth-a*t/2<=i?i:this.cutX+this.canvasWidth-a*t/2,e=this.cutY+n*t/2>=e?e:this.cutY+n*t/2,e=this.cutY+this.canvasHeight-n*t/2<=e?e:this.cutY+this.canvasHeight-n*t/2,this.imgLeft=i,this.imgTop=e,this.scale=t}},imgMarginDetectionScale:function(t){if(this.limitMove){t=t||this.scale;var i=this.imgWidth,e=this.imgHeight;this.angle/90%2&&(i=this.imgHeight,e=this.imgWidth),i*t<this.canvasWidth&&(t=this.canvasWidth/i),e*t<this.canvasHeight&&(t=Math.max(t,this.canvasHeight/e)),this.imgMarginDetectionPosition(t)}},imgComputeSize:function(t,i){var e=t,a=i;if(e&&a)e/a>(this.canvasWidth||this.width)/(this.canvasHeight||this.height)?(a=this.canvasHeight||this.height,e=t/i*a):(e=this.canvasWidth||this.width,a=i/t*e);else{var n=this.sysInfo||uni.getSystemInfoSync();e=n.windowWidth,a=0}this.imgWidth=e,this.imgHeight=a},computeCutSize:function(){this.canvasWidth>this.sysInfo.windowWidth?this.canvasWidth=this.sysInfo.windowWidth:this.canvasWidth+this.cutX>this.sysInfo.windowWidth&&(this.cutX=this.sysInfo.windowWidth-this.cutX),this.canvasHeight>this.sysInfo.windowHeight?this.canvasHeight=this.sysInfo.windowHeight:this.canvasHeight+this.cutY>this.sysInfo.windowHeight&&(this.cutY=this.sysInfo.windowHeight-this.cutY)},start:function(t){if(this.flagEndTouch=!1,1==t.touches.length)this.touchRelative[0]={x:t.touches[0].clientX-this.imgLeft,y:t.touches[0].clientY-this.imgTop};else{var i=Math.abs(t.touches[0].clientX-t.touches[1].clientX),e=Math.abs(t.touches[0].clientY-t.touches[1].clientY);this.touchRelative=[{x:t.touches[0].clientX-this.imgLeft,y:t.touches[0].clientY-this.imgTop},{x:t.touches[1].clientX-this.imgLeft,y:t.touches[1].clientY-this.imgTop}],this.hypotenuseLength=Math.sqrt(Math.pow(i,2)+Math.pow(e,2))}},moveThrottle:function(){var t=this;if("android"==this.sysInfo.platform)return clearTimeout(this.MOVE_THROTTLE),this.MOVE_THROTTLE=setTimeout((function(){t.MOVE_THROTTLE_FLAG=!0}),20),this.MOVE_THROTTLE_FLAG;this.MOVE_THROTTLE_FLAG=!0},move:function(t){if(!this.flagEndTouch&&this.MOVE_THROTTLE_FLAG)if(this.MOVE_THROTTLE_FLAG=!1,this.moveThrottle(),this.moveDuring(),1==t.touches.length){var i=t.touches[0].clientX-this.touchRelative[0].x,e=t.touches[0].clientY-this.touchRelative[0].y;this.imgLeft=i,this.imgTop=e,this.imgMarginDetectionPosition()}else{var a=Math.abs(t.touches[0].clientX-t.touches[1].clientX),n=Math.abs(t.touches[0].clientY-t.touches[1].clientY),s=Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),h=this.scale*(s/this.hypotenuseLength),o=0;h=h<=this.minScale?this.minScale:h,h=h>=this.maxScale?this.maxScale:h,this.imgMarginDetectionScale(h);var c=[{x:t.touches[0].clientX-this.imgLeft,y:t.touches[0].clientY-this.imgTop},{x:t.touches[1].clientX-this.imgLeft,y:t.touches[1].clientY-this.imgTop}];if(!this.disableRotate){var u=180/Math.PI*Math.atan2(c[0].y,c[0].x),r=180/Math.PI*Math.atan2(this.touchRelative[0].y,this.touchRelative[0].x),d=180/Math.PI*Math.atan2(c[1].y,c[1].x),l=180/Math.PI*Math.atan2(this.touchRelative[1].y,this.touchRelative[1].x),g=u-r,f=d-l;0!=g?o=g:0!=f&&(o=f)}this.touchRelative=c,this.hypotenuseLength=Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),this.angle=this.angle+o,this.scale=this.scale}},end:function(t){this.flagEndTouch=!0,this.moveStop()},cutTouchMove:function(t){var i=this;if(this.flagCutTouch&&this.MOVE_THROTTLE_FLAG){if(this.lockRatio&&(this.lockWidth||this.lockHeight))return;this.MOVE_THROTTLE_FLAG=!1,this.moveThrottle();var e=this.canvasWidth,a=this.canvasHeight,n=this.cutY,s=this.cutX,h=function(){e=e<=i.maxWidth?e>=i.minWidth?e:i.minWidth:i.maxWidth,a=a<=i.maxHeight?a>=i.minHeight?a:i.minHeight:i.maxHeight},o=function(){return(e>i.maxWidth||e<i.minWidth||a>i.maxHeight||a<i.minHeight)&&i.lockRatio?(h(),!1):(h(),!0)};switch(a=this.CUT_START.height+(this.CUT_START.corner>1&&this.CUT_START.corner<4?1:-1)*(this.CUT_START.y-t.touches[0].clientY),this.CUT_START.corner){case 1:if(e=this.CUT_START.width-this.CUT_START.x+t.touches[0].clientX,this.lockRatio&&(a=e/(this.canvasWidth/this.canvasHeight)),!o())return;break;case 2:if(e=this.CUT_START.width-this.CUT_START.x+t.touches[0].clientX,this.lockRatio&&(a=e/(this.canvasWidth/this.canvasHeight)),!o())return;n=this.CUT_START.cutY-(a-this.CUT_START.height);break;case 3:if(e=this.CUT_START.width+this.CUT_START.x-t.touches[0].clientX,this.lockRatio&&(a=e/(this.canvasWidth/this.canvasHeight)),!o())return;n=this.CUT_START.cutY-(a-this.CUT_START.height),s=this.CUT_START.cutX-(e-this.CUT_START.width);break;case 4:if(e=this.CUT_START.width+this.CUT_START.x-t.touches[0].clientX,this.lockRatio&&(a=e/(this.canvasWidth/this.canvasHeight)),!o())return;s=this.CUT_START.cutX-(e-this.CUT_START.width);break;default:break}this.lockWidth||this.lockHeight?this.lockWidth?this.lockHeight||(this.canvasHeight=a,this.cutY=n):(this.canvasWidth=e,this.cutX=s):(this.canvasWidth=e,this.cutX=s,this.canvasHeight=a,this.cutY=n),this.imgMarginDetectionScale()}},cutTouchStart:function(t){var i=t.touches[0].clientX,e=t.touches[0].clientY,a=this.cutX-24,n=this.cutX+24,s=this.cutY-24,h=this.cutY+24,o=this.cutX+this.canvasWidth-24,c=this.cutX+this.canvasWidth+24,u=this.cutY+this.canvasHeight-24,r=this.cutY+this.canvasHeight+24;i>o&&i<c&&e>u&&e<r?(this.moveDuring(),this.flagCutTouch=!0,this.flagEndTouch=!0,this.CUT_START={width:this.canvasWidth,height:this.canvasHeight,x:i,y:e,corner:1}):i>o&&i<c&&e>s&&e<h?(this.moveDuring(),this.flagCutTouch=!0,this.flagEndTouch=!0,this.CUT_START={width:this.canvasWidth,height:this.canvasHeight,x:i,y:e,cutY:this.cutY,cutX:this.cutX,corner:2}):i>a&&i<n&&e>s&&e<h?(this.moveDuring(),this.flagCutTouch=!0,this.flagEndTouch=!0,this.CUT_START={width:this.canvasWidth,height:this.canvasHeight,cutY:this.cutY,cutX:this.cutX,x:i,y:e,corner:3}):i>a&&i<n&&e>u&&e<r&&(this.moveDuring(),this.flagCutTouch=!0,this.flagEndTouch=!0,this.CUT_START={width:this.canvasWidth,height:this.canvasHeight,cutY:this.cutY,cutX:this.cutX,x:i,y:e,corner:4})},cutTouchEnd:function(t){this.moveStop(),this.flagCutTouch=!1},moveStop:function(){var t=this;clearTimeout(this.TIME_CUT_CENTER),this.TIME_CUT_CENTER=setTimeout((function(){t.cutAnimation||(t.cutAnimation=!0),t.setCutCenter()}),800)},moveDuring:function(){clearTimeout(this.TIME_CUT_CENTER)},showLoading:function(){uni.showLoading({title:"请稍候...",mask:!0})},stop:function(){},back:function(){uni.navigateBack()},setAngle:function(){this.cutAnimation=!0,this.angle=this.angle+90}}};i.default=h}).call(this,e("5a52")["default"])}}]);