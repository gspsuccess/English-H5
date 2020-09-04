(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-qrcode-qrcode"],{1148:function(t,e,i){"use strict";var r=i("a691"),n=i("1d80");t.exports="".repeat||function(t){var e=String(n(this)),i="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(i+=e);return i}},"16f5":function(t,e,i){(function(e){var r;i("99af"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),function(){function t(t,e){for(var r=1,n=i(t),o=0,a=v.length;o<=a;o++){var u=0;switch(e){case s.L:u=v[o][0];break;case s.M:u=v[o][1];break;case s.Q:u=v[o][2];break;case s.H:u=v[o][3];break}if(n<=u)break;r++}if(r>v.length)throw new Error("Too long data");return r}function i(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}function n(t){this.mode=a.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,i=this.data.length;e<i;e++){var r=[],n=this.data.charCodeAt(e);n>65536?(r[0]=240|(1835008&n)>>>18,r[1]=128|(258048&n)>>>12,r[2]=128|(4032&n)>>>6,r[3]=128|63&n):n>2048?(r[0]=224|(61440&n)>>>12,r[1]=128|(4032&n)>>>6,r[2]=128|63&n):n>128?(r[0]=192|(1984&n)>>>6,r[1]=128|63&n):r[0]=n,this.parsedData.push(r)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function o(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}n.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,i=this.parsedData.length;e<i;e++)t.put(this.parsedData[e],8)}},o.prototype={addData:function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++){this.modules[i]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[i][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var i=-1;i<=7;i++)if(!(t+i<=-1||this.moduleCount<=t+i))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+i][e+r]=0<=i&&i<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==i||6==i)||2<=i&&i<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var t=0,e=0,i=0;i<8;i++){this.makeImpl(!0,i);var r=h.getLostPoint(this);(0==i||t>r)&&(t=r,e=i)}return e},createMovieClip:function(t,e,i){var r=t.createEmptyMovieClip(e,i),n=1;this.make();for(var o=0;o<this.modules.length;o++)for(var a=o*n,s=0;s<this.modules[o].length;s++){var u=s*n,h=this.modules[o][s];h&&(r.beginFill(0,100),r.moveTo(u,a),r.lineTo(u+n,a),r.lineTo(u+n,a+n),r.lineTo(u,a+n),r.endFill())}return r},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=h.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var i=0;i<t.length;i++){var r=t[e],n=t[i];if(null==this.modules[r][n])for(var o=-2;o<=2;o++)for(var a=-2;a<=2;a++)this.modules[r+o][n+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},setupTypeNumber:function(t){for(var e=h.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var r=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=r}for(i=0;i<18;i++){r=!t&&1==(e>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=r}},setupTypeInfo:function(t,e){for(var i=this.errorCorrectLevel<<3|e,r=h.getBCHTypeInfo(i),n=0;n<15;n++){var o=!t&&1==(r>>n&1);n<6?this.modules[n][8]=o:n<8?this.modules[n+1][8]=o:this.modules[this.moduleCount-15+n][8]=o}for(n=0;n<15;n++){o=!t&&1==(r>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=o:n<9?this.modules[8][15-n-1+1]=o:this.modules[8][15-n-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var i=-1,r=this.moduleCount-1,n=7,o=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var s=0;s<2;s++)if(null==this.modules[r][a-s]){var u=!1;o<t.length&&(u=1==(t[o]>>>n&1));var d=h.getMask(e,r,a-s);d&&(u=!u),this.modules[r][a-s]=u,n--,-1==n&&(o++,n=7)}if(r+=i,r<0||this.moduleCount<=r){r-=i,i=-i;break}}}}},o.PAD0=236,o.PAD1=17,o.createData=function(t,e,i){for(var r=f.getRSBlocks(t,e),n=new g,a=0;a<i.length;a++){var s=i[a];n.put(s.mode,4),n.put(s.getLength(),h.getLengthInBits(s.mode,t)),s.write(n)}var u=0;for(a=0;a<r.length;a++)u+=r[a].dataCount;if(n.getLengthInBits()>8*u)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*u+")");n.getLengthInBits()+4<=8*u&&n.put(0,4);while(n.getLengthInBits()%8!=0)n.putBit(!1);while(1){if(n.getLengthInBits()>=8*u)break;if(n.put(o.PAD0,8),n.getLengthInBits()>=8*u)break;n.put(o.PAD1,8)}return o.createBytes(n,r)},o.createBytes=function(t,e){for(var i=0,r=0,n=0,o=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var u=e[s].dataCount,d=e[s].totalCount-u;r=Math.max(r,u),n=Math.max(n,d),o[s]=new Array(u);for(var l=0;l<o[s].length;l++)o[s][l]=255&t.buffer[l+i];i+=u;var f=h.getErrorCorrectPolynomial(d),g=new c(o[s],f.getLength()-1),v=g.mod(f);a[s]=new Array(f.getLength()-1);for(l=0;l<a[s].length;l++){var p=l+v.getLength()-a[s].length;a[s][l]=p>=0?v.get(p):0}}var m=0;for(l=0;l<e.length;l++)m+=e[l].totalCount;var w=new Array(m),b=0;for(l=0;l<r;l++)for(s=0;s<e.length;s++)l<o[s].length&&(w[b++]=o[s][l]);for(l=0;l<n;l++)for(s=0;s<e.length;s++)l<a[s].length&&(w[b++]=a[s][l]);return w};for(var a={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},s={L:1,M:0,Q:3,H:2},u={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},h={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(h.getBCHDigit(e)-h.getBCHDigit(h.G15)>=0)e^=h.G15<<h.getBCHDigit(e)-h.getBCHDigit(h.G15);return(t<<10|e)^h.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(h.getBCHDigit(e)-h.getBCHDigit(h.G18)>=0)e^=h.G18<<h.getBCHDigit(e)-h.getBCHDigit(h.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return h.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case u.PATTERN000:return(e+i)%2==0;case u.PATTERN001:return e%2==0;case u.PATTERN010:return i%3==0;case u.PATTERN011:return(e+i)%3==0;case u.PATTERN100:return(Math.floor(e/2)+Math.floor(i/3))%2==0;case u.PATTERN101:return e*i%2+e*i%3==0;case u.PATTERN110:return(e*i%2+e*i%3)%2==0;case u.PATTERN111:return(e*i%3+(e+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new c([1],0),i=0;i<t;i++)e=e.multiply(new c([1,d.gexp(i)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case a.MODE_NUMBER:return 10;case a.MODE_ALPHA_NUM:return 9;case a.MODE_8BIT_BYTE:return 8;case a.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case a.MODE_NUMBER:return 12;case a.MODE_ALPHA_NUM:return 11;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case a.MODE_NUMBER:return 14;case a.MODE_ALPHA_NUM:return 13;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,r=0;r<e;r++)for(var n=0;n<e;n++){for(var o=0,a=t.isDark(r,n),s=-1;s<=1;s++)if(!(r+s<0||e<=r+s))for(var u=-1;u<=1;u++)n+u<0||e<=n+u||0==s&&0==u||a==t.isDark(r+s,n+u)&&o++;o>5&&(i+=3+o-5)}for(r=0;r<e-1;r++)for(n=0;n<e-1;n++){var h=0;t.isDark(r,n)&&h++,t.isDark(r+1,n)&&h++,t.isDark(r,n+1)&&h++,t.isDark(r+1,n+1)&&h++,0!=h&&4!=h||(i+=3)}for(r=0;r<e;r++)for(n=0;n<e-6;n++)t.isDark(r,n)&&!t.isDark(r,n+1)&&t.isDark(r,n+2)&&t.isDark(r,n+3)&&t.isDark(r,n+4)&&!t.isDark(r,n+5)&&t.isDark(r,n+6)&&(i+=40);for(n=0;n<e;n++)for(r=0;r<e-6;r++)t.isDark(r,n)&&!t.isDark(r+1,n)&&t.isDark(r+2,n)&&t.isDark(r+3,n)&&t.isDark(r+4,n)&&!t.isDark(r+5,n)&&t.isDark(r+6,n)&&(i+=40);var d=0;for(n=0;n<e;n++)for(r=0;r<e;r++)t.isDark(r,n)&&d++;var l=Math.abs(100*d/e/e-50)/5;return i+=10*l,i}},d={glog:function(t){if(t<1)throw new Error("glog("+t+")");return d.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return d.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)d.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)d.EXP_TABLE[l]=d.EXP_TABLE[l-4]^d.EXP_TABLE[l-5]^d.EXP_TABLE[l-6]^d.EXP_TABLE[l-8];for(l=0;l<255;l++)d.LOG_TABLE[d.EXP_TABLE[l]]=l;function c(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var i=0;while(i<t.length&&0==t[i])i++;this.num=new Array(t.length-i+e);for(var r=0;r<t.length-i;r++)this.num[r]=t[r+i]}function f(t,e){this.totalCount=t,this.dataCount=e}function g(){this.buffer=[],this.length=0}c.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var r=0;r<t.getLength();r++)e[i+r]^=d.gexp(d.glog(this.get(i))+d.glog(t.get(r)));return new c(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=d.glog(this.get(0))-d.glog(t.get(0)),i=new Array(this.getLength()),r=0;r<this.getLength();r++)i[r]=this.get(r);for(r=0;r<t.getLength();r++)i[r]^=d.gexp(d.glog(t.get(r))+e);return new c(i,0).mod(t)}},f.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f.getRSBlocks=function(t,e){var i=f.getRsBlockTable(t,e);if(void 0==i)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=i.length/3,n=[],o=0;o<r;o++)for(var a=i[3*o+0],s=i[3*o+1],u=i[3*o+2],h=0;h<a;h++)n.push(new f(s,u));return n},f.getRsBlockTable=function(t,e){switch(e){case s.L:return f.RS_BLOCK_TABLE[4*(t-1)+0];case s.M:return f.RS_BLOCK_TABLE[4*(t-1)+1];case s.Q:return f.RS_BLOCK_TABLE[4*(t-1)+2];case s.H:return f.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},g.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var v=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];r=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:s.H},"string"===typeof e&&(e={text:e}),e)for(var i in e)this._htOption[i]=e[i];this._oQRCode=null,this.canvasId=t,this._htOption.text&&this.canvasId&&this.makeCode(this._htOption.text)},r.prototype.makeCode=function(e){this._oQRCode=new o(t(e,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(e),this._oQRCode.make(),this.makeImage()},r.prototype.makeImage=function(){var t;t=this._htOption.usingIn?wx.createCanvasContext(this.canvasId,this._htOption.usingIn):wx.createCanvasContext(this.canvasId);var e=this._htOption,i=this._oQRCode,r=i.getModuleCount(),n=e.width/r,o=e.height/r,a=Math.round(n),s=Math.round(o);e.image&&""!=e.image&&t.drawImage(e.image,0,0,e.width,e.height);for(var u=0;u<r;u++)for(var h=0;h<r;h++){var d=i.isDark(u,h),l=h*n,c=u*o;t.setStrokeStyle(d?e.colorDark:e.colorLight),t.setLineWidth(1),t.setFillStyle(d?e.colorDark:e.colorLight),t.fillRect(l,c,n,o),t.strokeRect(Math.floor(l)+.5,Math.floor(c)+.5,a,s),t.strokeRect(Math.ceil(l)-.5,Math.ceil(c)-.5,a,s)}t.draw()},r.prototype.exportImage=function(t){t&&wx.canvasToTempFilePath({x:0,y:0,width:this._htOption.width,height:this._htOption.height,destWidth:this._htOption.width,destHeight:this._htOption.height,canvasId:this.canvasId,success:function(i){e.log(i.tempFilePath),t(i.tempFilePath)}})},r.CorrectLevel=s}(),t.exports=r}).call(this,i("5a52")["default"])},"408a":function(t,e,i){var r=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"705d":function(t,e,i){"use strict";i.r(e);var r=i("d571"),n=i("eb60");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("8059");var a,s=i("f0c5"),u=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"3ddb0812",null,!1,r["a"],a);e["default"]=u.exports},7531:function(t,e,i){i("c975"),i("a15b"),i("26e9"),i("b6802"),i("d3b7"),i("acd8"),i("e25e"),i("4d63"),i("ac1f"),i("25f0"),i("5319"),i("1276"),i("498a");var r={trim:function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},replaceAll:function(t,e,i){return t.replace(new RegExp(e,"gm"),i)},formatNumber:function(t){return 11===t.length?t.replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2"):t},rmoney:function(t){return parseFloat(t).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g,"$1,").replace(/\,$/,"").split("").reverse().join("")},formatDate:function(t,e){if(e){~e.indexOf(".")&&(e=e.substring(0,e.indexOf("."))),e=e.toString().replace("T"," ").replace(/\-/g,"/");var i,r="ymdhis";t||(t="y-m-d h:i:s"),i=e?new Date(e):new Date;var n=i.getMonth()+1,o=i.getDate(),a=i.getHours(),s=i.getMinutes(),u=i.getSeconds();n=n<10?"0"+n:n,o=o<10?"0"+o:o,a=a<10?"0"+a:a,s=s<10?"0"+s:s,u=u<10?"0"+u:u;for(var h=[i.getFullYear().toString(),n.toString(),o.toString(),a.toString(),s.toString(),u.toString()],d=0;d<h.length;d++)t=t.replace(r.charAt(d),h[d]);return t}return""},rgbToHex:function(t,e,i){return"#"+r.toHex(t)+r.toHex(e)+r.toHex(i)},toHex:function(t){return t=parseInt(t,10),isNaN(t)?"00":(t=Math.max(0,Math.min(t,255)),"0123456789ABCDEF".charAt((t-t%16)/16)+"0123456789ABCDEF".charAt(t%16))},hexToRgb:function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}};t.exports={trim:r.trim,replaceAll:r.replaceAll,formatNumber:r.formatNumber,rmoney:r.rmoney,formatDate:r.formatDate,rgbToHex:r.rgbToHex,hexToRgb:r.hexToRgb}},8059:function(t,e,i){"use strict";var r=i("a54c"),n=i.n(r);n.a},a54c:function(t,e,i){var r=i("df59");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("ae88aa76",r,!0,{sourceMap:!1,shadowMode:!1})},b6802:function(t,e,i){"use strict";var r=i("23e7"),n=i("a691"),o=i("408a"),a=i("1148"),s=i("d039"),u=1..toFixed,h=Math.floor,d=function(t,e,i){return 0===e?i:e%2===1?d(t,e-1,i*t):d(t*t,e/2,i)},l=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},c=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){u.call({})}));r({target:"Number",proto:!0,forced:c},{toFixed:function(t){var e,i,r,s,u=o(this),c=n(t),f=[0,0,0,0,0,0],g="",v="0",p=function(t,e){var i=-1,r=e;while(++i<6)r+=t*f[i],f[i]=r%1e7,r=h(r/1e7)},m=function(t){var e=6,i=0;while(--e>=0)i+=f[e],f[e]=h(i/t),i=i%t*1e7},w=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var i=String(f[t]);e=""===e?i:e+a.call("0",7-i.length)+i}return e};if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(g="-",u=-u),u>1e-21)if(e=l(u*d(2,69,1))-69,i=e<0?u*d(2,-e,1):u/d(2,e,1),i*=4503599627370496,e=52-e,e>0){p(0,i),r=c;while(r>=7)p(1e7,0),r-=7;p(d(10,r,1),0),r=e-1;while(r>=23)m(1<<23),r-=23;m(1<<r),p(1,1),m(2),v=w()}else p(0,i),p(1<<-e,0),v=w()+a.call("0",c);return c>0?(s=v.length,v=g+(s<=c?"0."+a.call("0",c-s)+v:v.slice(0,s-c)+"."+v.slice(s-c))):v=g+v,v}})},d571:function(t,e,i){"use strict";var r,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",[t._v("您共有")]),i("v-uni-view",{staticClass:"coupon-num"},[t._v(t._s(t.couponNum)+"张")]),i("v-uni-view",[t._v("可使用的优惠券")])],1),i("v-uni-view",{staticClass:"coupon-list"},t._l(t.couponList,(function(e,r){return i("v-uni-view",{key:r,staticClass:"coupon-item"},[i("v-uni-view",{staticClass:"coupon"},[i("v-uni-image",{staticClass:"coupon-img",attrs:{src:"/static/images/index/img_fuwuquan_blue_3x.png"}}),i("v-uni-view",{staticClass:"left-tit-box"},[i("v-uni-view",{staticClass:"tit"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"term"},[t._v("期限："+t._s(e.invalidTime))])],1),i("v-uni-view",{staticClass:"right-detail",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.spread(r)}}},[i("v-uni-text",{staticClass:"detail-txt"},[t._v("查看详情")]),i("v-uni-image",{staticClass:"arrow",class:{"tui-rotate_90":e.spread},attrs:{src:"/static/images/index/icon_next_3x.png"}})],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.spread,expression:"item.spread"}],staticClass:"hidden-box"},[i("v-uni-view",{staticClass:"code-tit"},[t._v("验证码")]),i("v-uni-view",{staticClass:"code-num"},[t._v(t._s(e.code))]),i("v-uni-view",{staticClass:"qrcode-box"},[i("v-uni-view",{staticClass:"qrcode"},[i("v-uni-canvas",{class:{"my-canvas":!e.spread},style:{width:t.qrcode_w+"px",height:t.qrcode_w+"px"},attrs:{"canvas-id":"couponQrcode"+r,id:"couponQrcode"+r}})],1)],1),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-tit"},[t._v("券有效期")]),i("v-uni-view",{staticClass:"item-con"},[t._v(t._s(e.sendTime)+"至"+t._s(e.invalidTime))])],1),i("v-uni-view",{staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-tit"},[t._v("适用商家")]),i("v-uni-view",{staticClass:"item-con"},[t._v(t._s(e.suitStore))])],1),i("v-uni-view",{staticClass:"explain"},[t._v("使用说明")]),t._l(e.useDescribe,(function(e,r){return i("v-uni-view",{key:e,staticClass:"explain-text"},[t._v(t._s(e))])}))],2)],1)})),1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.couponNum,expression:"couponNum == 0"}],staticClass:"none"},[t._v("暂无可用洗车券~")])],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}))},df59:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,"\n.container[data-v-3ddb0812]{padding-bottom:env(safe-area-inset-bottom)}.header[data-v-3ddb0812]{width:100%;padding:0 %?30?%;box-sizing:border-box;font-size:%?24?%;color:#999;height:%?54?%;line-height:%?54?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;\r\ntop:44px;\r\nz-index:999999}.coupon-num[data-v-3ddb0812]{color:#5677fc}.coupon-list[data-v-3ddb0812]{width:100%;padding:%?54?% %?50?%;box-sizing:border-box}.coupon-item[data-v-3ddb0812]{margin-top:%?20?%;width:100%;box-shadow:0 %?8?% %?10?% %?-8?% #eaeef1;border-radius:%?2?%}.coupon[data-v-3ddb0812]{height:%?160?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.coupon-img[data-v-3ddb0812]{width:100%;height:%?160?%;position:absolute;left:0;top:0;z-index:0}.left-tit-box[data-v-3ddb0812]{width:%?414?%;padding-left:%?75?%;box-sizing:border-box;z-index:10}.tit[data-v-3ddb0812]{width:%?290?%;font-size:%?30?%;color:#333;line-height:%?42?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.term[data-v-3ddb0812]{width:%?228?%;font-size:%?24?%;color:#999;line-height:%?24?%;padding-top:%?7?%;white-space:nowrap}.right-detail[data-v-3ddb0812]{width:%?236?%;text-align:center;height:%?160?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:10}.detail-txt[data-v-3ddb0812]{font-size:%?24?%;color:#fff;padding-right:%?12?%}.arrow[data-v-3ddb0812]{width:%?16?%;height:%?24?%;-webkit-transition:all .15s ease;transition:all .15s ease}.spread[data-v-3ddb0812]{width:%?24?%;height:%?16?%}.qrcode[data-v-3ddb0812]{width:%?260?%;height:%?260?%;margin:%?45?% auto %?43?% auto}.hidden-box[data-v-3ddb0812]{padding:%?35?% %?40?% %?27?% %?40?%;box-sizing:border-box;color:#333;border-top:%?1?% solid #eaeef1;background:#fff}.code-tit[data-v-3ddb0812]{font-size:%?28?%;line-height:%?28?%}.code-num[data-v-3ddb0812]{font-size:%?30?%;line-height:%?30?%;padding-top:%?23?%;font-weight:700}.qrcode-box[data-v-3ddb0812]{width:100%;border-bottom:%?1?% dashed #eaeef1;margin-bottom:%?6?%}.list-item[data-v-3ddb0812]{height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?28?%}.list-item[data-v-3ddb0812]::after{left:0}.item-tit[data-v-3ddb0812]{color:#666}.item-con[data-v-3ddb0812]{color:#333}.explain[data-v-3ddb0812]{font-size:%?28?%;line-height:%?28?%;color:#666;padding:%?33?% 0 %?25?% 0}.explain-text[data-v-3ddb0812]{font-size:%?28?%;line-height:%?41?%;color:#333}.none[data-v-3ddb0812]{width:100%;position:fixed;text-align:center;font-size:%?30?%;color:#ccc;top:49%}.tui-rotate_90[data-v-3ddb0812]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}",""]),t.exports=e},eb60:function(t,e,i){"use strict";i.r(e);var r=i("fd3d"),n=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},fd3d:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("7531");var r=i("16f5"),n={data:function(){return{show:!1,couponNum:4,couponList:[{name:"购物券",code:"xyz0900100200",invalidTime:"2019-07-01",spread:!1,sendTime:"2019-06-01",suitStore:"全部",useDescribe:["1、可在任何适用商家内消费","2、解释权归Thor所有"]},{name:"打车券",code:"xyz0900100300",invalidTime:"2019-07-01",spread:!1,sendTime:"2019-06-01",suitStore:"滴滴打车",useDescribe:["1、可在任何适用商家内消费","2、解释权归Thor所有"]},{name:"餐饮券",code:"xyz0900100400",invalidTime:"2019-07-01",spread:!1,sendTime:"2019-06-01",suitStore:"麦当劳",useDescribe:["1、可在任何适用商家内消费","2、解释权归Thor所有"]},{name:"服务券",code:"xyz0900100500",invalidTime:"2019-07-01",spread:!1,sendTime:"2019-06-01",suitStore:"如家按摩店",useDescribe:["1、可在任何适用商家内消费","2、解释权归Thor所有"]}],qrcode_w:uni.upx2px(240)}},onLoad:function(t){this.tui.isAndroid()||(this.show=!0)},methods:{spread:function(t){var e=this,i=this.couponList;i[t].spread||setTimeout((function(){e.couponQrCode(i[t].code,"couponQrcode"+t)}),60),i[t].spread=!i[t].spread,this.couponList=i},couponQrCode:function(t,e){var i=this;new r(e,{text:t,width:this.qrcode_w,height:this.qrcode_w,colorDark:"#333333",colorLight:"#FFFFFF",correctLevel:r.CorrectLevel.H}),"couponQrcode0"==e&&setTimeout((function(){i.show||(i.show=!0)}),0)}}};e.default=n}}]);