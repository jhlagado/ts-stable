parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"UbnF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.putStr=exports.putch=exports.getch=exports.getquery=exports.setOutputBuffer=exports.appendInputBuffer=exports.setInputBuffer=exports.outputBuffer=exports.inputBuffer=void 0,exports.inputBuffer="",exports.outputBuffer="";var t=function(t){exports.inputBuffer=t};exports.setInputBuffer=t;var e=function(t){exports.setInputBuffer(exports.inputBuffer+t)};exports.appendInputBuffer=e;var r=function(t){exports.outputBuffer=t};exports.setOutputBuffer=r;var u=function(){return exports.inputBuffer.length>0};exports.getquery=u;var p=function(){if(0===exports.inputBuffer.length)return 0;var t=exports.inputBuffer[0];return exports.inputBuffer=exports.inputBuffer.slice(1),t.codePointAt(0)};exports.getch=p;var f=function(t){exports.outputBuffer+=String.fromCodePoint(t)};exports.putch=f;var o=function(t){exports.outputBuffer+=t};exports.putStr=o;
},{}],"eKDL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CTICK=exports.CUPPERZ=exports.CUPPERA=exports.CLOWERZ=exports.CLOWERA=exports.CCBRACE=exports.COBRACE=exports.CCBRACK=exports.COBRACK=exports.CCPAREN=exports.COPAREN=exports.CSLASH=exports.CSTAR=exports.CMINUS=exports.CPLUS=exports.CDOT=exports.CAPOS=exports.CQUOTE=exports.CNINE=exports.CZERO=exports.START_PROG=exports.DATA_SIZE=exports.START_DATA=exports.FALSE=exports.TRUE=exports.NULL=exports.DEBUG=exports.MEM_START=exports.MEM_SIZE=exports.TCELL=exports.CELL=void 0,exports.CELL=4,exports.TCELL=5,exports.MEM_SIZE=1e6,exports.MEM_START=0,exports.DEBUG=!1,exports.NULL=0,exports.TRUE=-1,exports.FALSE=0,exports.START_DATA=0,exports.DATA_SIZE=8e3,exports.START_PROG=exports.START_DATA+exports.DATA_SIZE,exports.CZERO="0".charCodeAt(0),exports.CNINE="9".charCodeAt(0),exports.CQUOTE='"'.charCodeAt(0),exports.CAPOS="'".charCodeAt(0),exports.CDOT=".".charCodeAt(0),exports.CPLUS="+".charCodeAt(0),exports.CMINUS="-".charCodeAt(0),exports.CSTAR="*".charCodeAt(0),exports.CSLASH="/".charCodeAt(0),exports.COPAREN="(".charCodeAt(0),exports.CCPAREN=")".charCodeAt(0),exports.COBRACK="[".charCodeAt(0),exports.CCBRACK="]".charCodeAt(0),exports.COBRACE="{".charCodeAt(0),exports.CCBRACE="}".charCodeAt(0),exports.CLOWERA="a".charCodeAt(0),exports.CLOWERZ="z".charCodeAt(0),exports.CUPPERA="a".charCodeAt(0),exports.CUPPERZ="z".charCodeAt(0),exports.CTICK="`".charCodeAt(0);
},{}],"UL96":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CellType=void 0,function(e){e[e.int=0]="int",e[e.float=1]="float"}(e=exports.CellType||(exports.CellType={}));
},{}],"E5yY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tset=exports.tget=exports.binaryType=exports.secondLastType=exports.lastType=exports.setb=exports.getb=exports.defSpace=exports.defStr=exports.def32=exports.def16=exports.def8=exports.setAsmPtr=exports.asmPtr=exports.mem=exports.buffer=void 0;var e=require("./constants"),t=require("./types");exports.buffer=new ArrayBuffer(e.MEM_SIZE),exports.mem=new DataView(exports.buffer),exports.asmPtr=e.MEM_START;var r=function(e){exports.asmPtr=e};exports.setAsmPtr=r;var s=function(e){var t=exports.asmPtr;return exports.mem.setUint8(0,e),exports.setAsmPtr(exports.asmPtr+1),t};exports.def8=s;var p=function(e){var t=exports.asmPtr;return exports.mem.setUint16(0,e),exports.setAsmPtr(exports.asmPtr+2),t};exports.def16=p;var o=function(e){var t=exports.asmPtr;return exports.mem.setUint32(exports.asmPtr,e),exports.setAsmPtr(exports.asmPtr+4),t};exports.def32=o;var x=function(e){for(var t=exports.asmPtr,r=(new TextEncoder).encode(e),s=r.length,p=0;p<s;p++)exports.mem.setUint8(exports.asmPtr,r[p]),exports.setAsmPtr(exports.asmPtr+1);return t};exports.defStr=x;var a=function(e){var t=exports.asmPtr;return exports.setAsmPtr(exports.asmPtr+e),t};exports.defSpace=a;var n=function(e){return exports.mem.getInt8(e)};exports.getb=n;var m=function(e,t){exports.mem.setInt8(e,t)};exports.setb=m,exports.lastType=t.CellType.int,exports.secondLastType=t.CellType.int,exports.binaryType=t.CellType.int;var f=function(e){return exports.secondLastType=exports.lastType,exports.lastType=exports.mem.getInt8(e),exports.binaryType=exports.secondLastType|exports.lastType,exports.lastType===t.CellType.float?exports.mem.getFloat32(e+1):exports.mem.getInt32(e+1)};exports.tget=f;var y=function(e,r,s){return exports.secondLastType=exports.lastType,exports.lastType=s,exports.binaryType=exports.secondLastType|exports.lastType,exports.mem.setInt8(e,s),s===t.CellType.float?exports.mem.setFloat32(e+1,r):exports.mem.setInt32(e+1,r)};exports.tset=y;
},{"./constants":"eKDL","./types":"UL96"}],"BnPy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setReg=exports.getReg=exports.selectReg=void 0;var e=require("./constants"),t=require("./memory"),r=0,s=function(e){r=e};exports.selectReg=s;var o=function(){return t.tget(r*e.TCELL)};exports.getReg=o;var n=function(s,o){return t.tset(r*e.TCELL,s,o)};exports.setReg=n;
},{"./constants":"eKDL","./memory":"E5yY"}],"UnXq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.escapeHTML=exports.formatCell=exports.asBool=void 0;var e=require("./types"),r=function(e){return e?-1:0};exports.asBool=r;var t=function(r,t){return t===e.CellType.float?r.toFixed(2).replace(/0*$/,"").replace(/\.$/,".0"):r.toString()};exports.formatCell=t;var l=function(e){return e.replaceAll(/</g,"&lt;").replaceAll(/>/g,"&gt;").replaceAll(/"/g,"&quot;")};exports.escapeHTML=l;
},{"./types":"UL96"}],"FCp6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.rpoke=exports.rpeek=exports.rpush=exports.rpop=exports.poke2=exports.peek2=exports.poke=exports.peek=exports.push=exports.pop=exports.getStackPrompt=exports.setStacks=exports.rp=exports.sp=void 0;var r=require("./constants"),t=require("./memory"),e=require("./utils");exports.sp=0,exports.rp=0;var p=function(r,t){exports.sp=r,exports.rp=t};exports.setStacks=p;var o=function(){for(var p="",o=0;o<4;o++){var s=t.tget(exports.sp+(o-3)*r.TCELL);p+="".concat(e.formatCell(s,t.lastType)," ")}return"".concat(p,">")};exports.getStackPrompt=o;var s=function(){var e=t.tget(exports.sp);return exports.sp-=r.TCELL,e};exports.pop=s;var x=function(e,p){exports.sp+=r.TCELL,t.tset(exports.sp,e,p)};exports.push=x;var n=function(){return t.tget(exports.sp)};exports.peek=n;var u=function(r,e){return t.tset(exports.sp,r,e)};exports.poke=u;var a=function(){return t.tget(exports.sp-r.TCELL)};exports.peek2=a;var c=function(e,p){return t.tset(exports.sp-r.TCELL,e,p)};exports.poke2=c;var i=function(){var e=t.tget(exports.rp);return exports.rp-=r.TCELL,e};exports.rpop=i;var v=function(e,p){exports.rp+=r.TCELL,t.tset(exports.rp,e,p)};exports.rpush=v;var k=function(){return t.tget(exports.rp)};exports.rpeek=k;var f=function(r,e){return t.tset(exports.rp,r,e)};exports.rpoke=f;
},{"./constants":"eKDL","./memory":"E5yY","./utils":"UnXq"}],"LXRC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.opcodes=exports.setToken=exports.setIncMode=exports.setIP=exports.token=exports.incMode=exports.ip=void 0;var e=require("./constants"),p=require("./io"),t=require("./memory"),o=require("./registers"),r=require("./stacks"),n=require("./types"),s=require("./utils");exports.ip=0,exports.incMode=!1,exports.token=0;var i=5,x="",k=function(e){exports.ip=e};exports.setIP=k;var u=function(e){exports.incMode=e};exports.setIncMode=u;var c=function(e){exports.token=e};exports.setToken=c;var l=function(){if(exports.incMode)o.setReg(o.getReg()+1,t.lastType);else{var e=r.pop(),p=r.peek();r.poke(p+e,t.binaryType)}},f=function(){var e=r.pop();r.poke(r.peek()&e,n.CellType.int)},T=function(){r.rpush(exports.ip,n.CellType.int),exports.ip=t.tget(exports.token*e.TCELL),0!==exports.ip?(exports.token=t.getb(exports.ip),exports.ip--):exports.ip=r.rpop()},a=function(){var p=t.getb(exports.ip+1);for(t.tset(p*e.TCELL,exports.ip+2,n.CellType.int);exports.token!==e.CCBRACE;)exports.ip++,exports.token=t.getb(exports.ip)},y=function(){var e=r.pop(),p=r.peek();r.poke(p/e,t.binaryType)},C=function(){var e=r.pop();p.putStr(s.formatCell(e,t.lastType))},g=function(){r.pop()},v=function(){var e=r.peek();r.push(e,t.lastType)},b=function(){for(var p="",o=n.CellType.int;exports.token===e.CDOT||exports.token>=e.CZERO&&exports.token<=e.CNINE;)exports.token===e.CDOT&&(o=n.CellType.float),p+=String.fromCharCode(exports.token),exports.ip++,exports.token=t.getb(exports.ip);var s=Number(p);r.push(s,o),exports.ip--},E=function(){p.putch(r.pop())},R=function(){exports.ip=r.rpop()},d=function(){r.pop()!==e.FALSE?exports.ip=r.rpeek():r.rpop()},h=function(){r.peek()===r.peek2()?r.poke(e.TRUE,n.CellType.int):r.poke(e.FALSE,n.CellType.int)},L=function(){for(exports.ip++;t.getb(exports.ip)!==e.CTICK;)x+=String.fromCharCode(t.getb(exports.ip)),exports.ip++;console.log(x)},A=function(){r.push(t.tget(o.getReg()*e.TCELL),t.lastType)},S=function(){exports.ip++,exports.token=t.getb(exports.ip),exports.token===e.CAPOS?r.poke(r.peek(),n.CellType.float):exports.token===e.CZERO&&r.poke(r.peek(),n.CellType.int)},M=function(){r.peek()<r.peek2()?r.poke(e.TRUE,n.CellType.int):r.poke(e.FALSE,n.CellType.int)},q=function(){if(r.pop()===e.FALSE)for(exports.ip++,exports.token=t.getb(exports.ip);exports.token!==e.CCPAREN;)exports.ip++,exports.token=t.getb(exports.ip)},O=function(){if(!p.getquery())return!0;var e=p.getch();e===i&&(e=0),r.push(e,n.CellType.int)},m=function(){r.peek()>r.peek2()?r.poke(e.TRUE,n.CellType.int):r.poke(e.FALSE,n.CellType.int)},F=function(){if(r.rpush(exports.ip,n.CellType.int),r.peek()===e.FALSE)for(exports.ip++,exports.token=t.getb(exports.ip);exports.token!==e.CCBRACK;)exports.ip++,exports.token=t.getb(exports.ip)},I=function(){var e=r.pop();r.poke(r.peek()%e,n.CellType.int)},P=function(){var e=r.pop(),p=r.peek();r.poke(p*e,t.binaryType)},N=function(){r.poke(-r.peek(),t.lastType)},U=function(){},B=function(){r.poke(~r.peek(),t.lastType)},D=function(){var e=r.pop();r.poke(r.peek()|e,n.CellType.int)},K=function(){r.push(r.peek2(),t.lastType)},Z=function(){for(exports.ip++,exports.token=t.getb(exports.ip);exports.token!==e.CQUOTE;)p.putch(exports.token),exports.ip++,exports.token=t.getb(exports.ip)},_=function(){exports.incMode=!0,o.selectReg(exports.token)},j=function(){o.setReg(r.pop(),t.lastType)},Q=function(){r.push(o.getReg(),t.lastType)},w=function(){if(exports.incMode)o.setReg(o.getReg()-1,t.lastType);else{var e=r.pop(),p=r.peek();r.poke(p-e,t.binaryType)}},z=function(){t.tset(o.getReg(),r.pop(),t.lastType)},G=function(){var e=r.peek();r.poke(r.peek2(),t.lastType),r.poke2(e,t.secondLastType)};exports.opcodes=[U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,U,z,Z,v,G,I,f,S,q,U,P,l,E,w,C,y,b,b,b,b,b,b,b,b,b,b,j,Q,m,h,M,A,K,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,F,g,d,O,N,L,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,a,D,R,B];
},{"./constants":"eKDL","./io":"UbnF","./memory":"E5yY","./registers":"BnPy","./stacks":"FCp6","./types":"UL96","./utils":"UnXq"}],"Tbsw":[function(require,module,exports) {
"use strict";function e(e,r){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=t(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,u=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw u}}}}function t(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t,r,n,o,i,u){try{var a=e[i](u),c=a.value}catch(s){return void r(s)}a.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var u=e.apply(t,r);function a(e){n(u,o,i,a,c,"next",e)}function c(e){n(u,o,i,a,c,"throw",e)}a(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.interpret=exports.interpReset=void 0;var i,u,a,c=require("./constants"),s=require("./memory"),f=require("./opcodes"),l=require("./stacks"),p=function(){for(var e=c.START_DATA;e<c.DATA_SIZE;e++)s.setb(e,0);u=c.START_PROG,a=u,l.setStacks(140,20),i=!0};exports.interpReset=p;var v=function(e){for(var t=e;i&&f.ip<u;){t&&f.setIP(f.ip-1),f.setToken(s.getb(f.ip));var r=Boolean(f.opcodes[f.token]());if(f.token<c.CLOWERA?f.setIncMode(!1):f.token>c.CLOWERZ&&f.setIncMode(!1),t=!1,f.setIP(f.ip+1),r)return!0}return!1},d=function(){var t=o(regeneratorRuntime.mark(function t(r){var n,o,l,p,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=!1,o=e(r);try{for(o.s();!(l=o.n()).done;)p=l.value,(d=p.codePointAt(0))===c.COBRACE&&(n=!0),s.setb(u++,d)}catch(y){o.e(y)}finally{o.f()}return s.setb(u++,c.NULL),f.setIP(a),t.next=7,new Promise(function(e){!function t(){var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=v(r);i&&f.ip<u?setTimeout(function(){return t(n)}):e()}()});case 7:n||(u=a),a=u;case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();exports.interpret=d;
},{"./constants":"eKDL","./memory":"E5yY","./opcodes":"LXRC","./stacks":"FCp6"}],"QCba":[function(require,module,exports) {
"use strict";function e(e,t,r,n,o,u,c){try{var i=e[u](c),a=i.value}catch(p){return void r(p)}i.done?t(a):Promise.resolve(a).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise(function(o,u){var c=t.apply(r,n);function i(t){e(c,o,u,i,a,"next",t)}function a(t){e(c,o,u,i,a,"throw",t)}i(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.log2=exports.log=void 0,require("regenerator-runtime/runtime");var r=require("./io"),n=require("./interpreter"),o=require("./stacks"),u=require("./utils"),c=[],i=0,a=function(e){document.getElementById("output").innerHTML+="<div class='log'><p>".concat(e,"</p></div>");var t=document.getElementById("screen");t.scrollTop=t.scrollHeight};exports.log=a;var p=function(e){document.getElementById("output").innerText+="<div class='log'><p>".concat(e,"</p></div>");var t=document.getElementById("screen");t.scrollTop=t.scrollHeight};exports.log2=p;var s=document.getElementById("input_source");s.onblur=function(){s.focus()},s.addEventListener("keyup",function(){var e=t(regeneratorRuntime.mark(function e(t){var a,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"ArrowUp"!==t.key){e.next=5;break}c.length>i&&(s.value=c[i++]),e.next=21;break;case 5:if("ArrowDown"!==t.key){e.next=9;break}i>0&&(s.value=c[--i]),e.next=21;break;case 9:if("Enter"!==t.key){e.next=21;break}return a=s.value,c.unshift(a),i=0,s.value="",r.appendInputBuffer(a),p=o.getStackPrompt(),e.next=18,n.interpret(a);case 18:exports.log("".concat(p," ").concat(u.escapeHTML(a))),document.getElementById("prompt").innerText=o.getStackPrompt();case 21:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var l=function e(){setTimeout(e),r.outputBuffer.length>0&&(exports.log(r.outputBuffer),r.setOutputBuffer(""))};l(),r.setOutputBuffer(""),exports.log("STABLE"),n.interpReset();var f=document.getElementById("prompt");f.innerText=o.getStackPrompt();
},{"regenerator-runtime/runtime":"QVnC","./io":"UbnF","./interpreter":"Tbsw","./stacks":"FCp6","./utils":"UnXq"}]},{},["QCba"], null)
//# sourceMappingURL=src.56d2b179.js.map