parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"UbnF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.putStr=exports.putch=exports.getch=exports.getquery=exports.setOutputBuffer=exports.appendInputBuffer=exports.setInputBuffer=exports.outputBuffer=exports.inputBuffer=void 0,exports.inputBuffer="",exports.outputBuffer="";var t=function(t){exports.inputBuffer=t};exports.setInputBuffer=t;var e=function(t){exports.setInputBuffer(exports.inputBuffer+t)};exports.appendInputBuffer=e;var r=function(t){exports.outputBuffer=t};exports.setOutputBuffer=r;var u=function(){return exports.inputBuffer.length>0};exports.getquery=u;var p=function(){if(0===exports.inputBuffer.length)return 0;var t=exports.inputBuffer[0];return exports.inputBuffer=exports.inputBuffer.slice(1),t.codePointAt(0)};exports.getch=p;var f=function(t){exports.outputBuffer+=String.fromCodePoint(t)};exports.putch=f;var o=function(t){exports.outputBuffer+=t};exports.putStr=o;
},{}],"eKDL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CTICK=exports.CUPPERZ=exports.CUPPERA=exports.CLOWERZ=exports.CLOWERA=exports.CCBRACE=exports.COBRACE=exports.CCBRACK=exports.COBRACK=exports.CCPAREN=exports.COPAREN=exports.CSLASH=exports.CSTAR=exports.CMINUS=exports.CPLUS=exports.CDOT=exports.CAPOS=exports.CQUOTE=exports.CNINE=exports.CZERO=exports.START_PROG=exports.DATA_SIZE=exports.START_DATA=exports.FALSE=exports.TRUE=exports.NULL=exports.DEBUG=exports.MEM_START=exports.MEM_SIZE=exports.TCELL=exports.CELL=void 0,exports.CELL=4,exports.TCELL=5,exports.MEM_SIZE=1e6,exports.MEM_START=0,exports.DEBUG=!1,exports.NULL=0,exports.TRUE=-1,exports.FALSE=0,exports.START_DATA=0,exports.DATA_SIZE=2e3*exports.TCELL,exports.START_PROG=exports.START_DATA+exports.DATA_SIZE,exports.CZERO="0".charCodeAt(0),exports.CNINE="9".charCodeAt(0),exports.CQUOTE='"'.charCodeAt(0),exports.CAPOS="'".charCodeAt(0),exports.CDOT=".".charCodeAt(0),exports.CPLUS="+".charCodeAt(0),exports.CMINUS="-".charCodeAt(0),exports.CSTAR="*".charCodeAt(0),exports.CSLASH="/".charCodeAt(0),exports.COPAREN="(".charCodeAt(0),exports.CCPAREN=")".charCodeAt(0),exports.COBRACK="[".charCodeAt(0),exports.CCBRACK="]".charCodeAt(0),exports.COBRACE="{".charCodeAt(0),exports.CCBRACE="}".charCodeAt(0),exports.CLOWERA="a".charCodeAt(0),exports.CLOWERZ="z".charCodeAt(0),exports.CUPPERA="a".charCodeAt(0),exports.CUPPERZ="z".charCodeAt(0),exports.CTICK="`".charCodeAt(0);
},{}],"eS2z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.state=void 0;var e=require("./constants");exports.state={run:!0,here:e.START_PROG,oldHere:e.START_PROG,ip:0,token:0,incMode:!1,sp:0,rp:0};
},{"./constants":"eKDL"}],"UL96":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.CellType=void 0,function(e){e[e.int=0]="int",e[e.float=1]="float"}(e=exports.CellType||(exports.CellType={}));
},{}],"E5yY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tset=exports.tget=exports.binaryType=exports.secondLastType=exports.lastType=exports.setb=exports.getb=exports.defSpace=exports.defStr=exports.def32=exports.def16=exports.def8=exports.setAsmPtr=exports.asmPtr=exports.mem=exports.buffer=void 0;var t=require("./constants"),e=require("./io"),r=require("./types");exports.buffer=new ArrayBuffer(t.MEM_SIZE),exports.mem=new DataView(exports.buffer),exports.asmPtr=t.MEM_START;var s=function(t){exports.asmPtr=t};exports.setAsmPtr=s;var o=function(t){var e=exports.asmPtr;return exports.mem.setUint8(0,t),exports.setAsmPtr(exports.asmPtr+1),e};exports.def8=o;var p=function(t){var e=exports.asmPtr;return exports.mem.setUint16(0,t),exports.setAsmPtr(exports.asmPtr+2),e};exports.def16=p;var x=function(t){var e=exports.asmPtr;return exports.mem.setUint32(exports.asmPtr,t),exports.setAsmPtr(exports.asmPtr+4),e};exports.def32=x;var n=function(t){for(var e=exports.asmPtr,r=(new TextEncoder).encode(t),s=r.length,o=0;o<s;o++)exports.mem.setUint8(exports.asmPtr,r[o]),exports.setAsmPtr(exports.asmPtr+1);return e};exports.defStr=n;var a=function(t){var e=exports.asmPtr;return exports.setAsmPtr(exports.asmPtr+t),e};exports.defSpace=a;var m=function(t){return exports.mem.getInt8(t)};exports.getb=m;var c=function(t,e){exports.mem.setInt8(t,e)};exports.setb=c,exports.lastType=r.CellType.int,exports.secondLastType=r.CellType.int,exports.binaryType=r.CellType.int;var f=function(t){try{return exports.secondLastType=exports.lastType,exports.lastType=exports.mem.getInt8(t),exports.binaryType=exports.secondLastType|exports.lastType,exports.lastType===r.CellType.float?exports.mem.getFloat32(t+1):exports.mem.getInt32(t+1)}catch(s){throw e.putStr("\n\nError: tried to fetch number at address ".concat(t+1,"\n\n")),s}};exports.tget=f;var y=function(t,s,o){try{return exports.secondLastType=exports.lastType,exports.lastType=o,exports.binaryType=exports.secondLastType|exports.lastType,exports.mem.setInt8(t,o),o===r.CellType.float?exports.mem.setFloat32(t+1,s):exports.mem.setInt32(t+1,s)}catch(p){throw e.putStr("\n\nError: tried to store number ".concat(s," at address ").concat(t+1,"\n\n")),p}};exports.tset=y;
},{"./constants":"eKDL","./io":"UbnF","./types":"UL96"}],"BnPy":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setReg=exports.getReg=exports.selectReg=void 0;var e=require("./constants"),t=require("./memory"),r=0,s=function(e){r=e};exports.selectReg=s;var o=function(){return t.tget(r*e.TCELL)};exports.getReg=o;var n=function(s,o){return t.tset(r*e.TCELL,s,o)};exports.setReg=n;
},{"./constants":"eKDL","./memory":"E5yY"}],"UnXq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.escapeHTML=exports.formatCell=exports.asBool=void 0;var e=require("./types"),r=function(e){return e?-1:0};exports.asBool=r;var t=function(r,t){return t===e.CellType.float?r.toFixed(2).replace(/0*$/,"").replace(/\.$/,".0"):r.toString()};exports.formatCell=t;var l=function(e){return e.replaceAll(/</g,"&lt;").replaceAll(/>/g,"&gt;").replaceAll(/"/g,"&quot;")};exports.escapeHTML=l;
},{"./types":"UL96"}],"FCp6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.rpoke=exports.rpeek=exports.rpush=exports.rpop=exports.poke2=exports.peek2=exports.poke=exports.peek=exports.push=exports.pop=exports.getStackPrompt=void 0;var t=require("./constants"),e=require("./globals"),r=require("./memory"),p=require("./utils"),s=function(){for(var s="",o=0;o<4;o++){var a=r.tget(e.state.sp+(o-3)*t.TCELL);s+="".concat(p.formatCell(a,r.lastType)," ")}return"".concat(s,">")};exports.getStackPrompt=s;var o=function(){var p=r.tget(e.state.sp);return e.state.sp-=t.TCELL,p};exports.pop=o;var a=function(p,s){e.state.sp+=t.TCELL,r.tset(e.state.sp,p,s)};exports.push=a;var n=function(){return r.tget(e.state.sp)};exports.peek=n;var u=function(t,p){return r.tset(e.state.sp,t,p)};exports.poke=u;var x=function(){return r.tget(e.state.sp-t.TCELL)};exports.peek2=x;var c=function(p,s){return r.tset(e.state.sp-t.TCELL,p,s)};exports.poke2=c;var i=function(){var p=r.tget(e.state.rp);return e.state.rp-=t.TCELL,p};exports.rpop=i;var v=function(p,s){e.state.rp+=t.TCELL,r.tset(e.state.rp,p,s)};exports.rpush=v;var f=function(){return r.tget(e.state.rp)};exports.rpeek=f;var k=function(t,p){return r.tset(e.state.rp,t,p)};exports.rpoke=k;
},{"./constants":"eKDL","./globals":"eS2z","./memory":"E5yY","./utils":"UnXq"}],"LXRC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.opcodes=void 0;var e=require("./constants"),t=require("./globals"),p=require("./io"),o=require("./memory"),n=require("./registers"),i=require("./stacks"),s=require("./types"),a=require("./utils"),r=5,k="",u=function(){if(t.state.incMode)n.setReg(n.getReg()+1,o.lastType);else{var e=i.pop(),p=i.peek();i.poke(p+e,o.binaryType)}},l=function(){var e=i.pop();i.poke(i.peek()&e,s.CellType.int)},f=function(){i.rpush(t.state.ip,s.CellType.int),t.state.ip=o.tget(t.state.token*e.TCELL),0!==t.state.ip?(t.state.token=o.getb(t.state.ip),t.state.ip--):t.state.ip=i.rpop()},c=function(){var p=o.getb(t.state.ip+1);for(o.tset(p*e.TCELL,t.state.ip+2,s.CellType.int);t.state.token!==e.CCBRACE;)t.state.ip++,t.state.token=o.getb(t.state.ip)},T=function(){var e=i.pop(),t=i.peek();i.poke(t/e,o.binaryType)},C=function(){var e=i.pop();p.putStr(a.formatCell(e,o.lastType))},y=function(){i.pop()},g=function(){var e=i.peek();i.push(e,o.lastType)},b=function(){for(var p="",n=s.CellType.int;t.state.token===e.CDOT||t.state.token>=e.CZERO&&t.state.token<=e.CNINE;)t.state.token===e.CDOT&&(n=s.CellType.float),p+=String.fromCharCode(t.state.token),t.state.ip++,t.state.token=o.getb(t.state.ip);var a=Number(p);i.push(a,n),t.state.ip--},E=function(){p.putch(i.pop())},v=function(){t.state.ip=i.rpop()},R=function(){i.pop()!==e.FALSE?t.state.ip=i.rpeek():i.rpop()},L=function(){i.peek()===i.peek2()?i.poke(e.TRUE,s.CellType.int):i.poke(e.FALSE,s.CellType.int)},h=function(){for(t.state.ip++;o.getb(t.state.ip)!==e.CTICK;)k+=String.fromCharCode(o.getb(t.state.ip)),t.state.ip++;console.log(k)},d=function(){i.push(o.tget(n.getReg()*e.TCELL),o.lastType)},A=function(){t.state.ip++,t.state.token=o.getb(t.state.ip),t.state.token===e.CAPOS?i.poke(i.peek(),s.CellType.float):t.state.token===e.CZERO&&i.poke(i.peek(),s.CellType.int)},S=function(){i.peek()<i.peek2()?i.poke(e.TRUE,s.CellType.int):i.poke(e.FALSE,s.CellType.int)},q=function(){if(i.pop()===e.FALSE)for(t.state.ip++,t.state.token=o.getb(t.state.ip);t.state.token!==e.CCPAREN;)t.state.ip++,t.state.token=o.getb(t.state.ip)},O=function(){if(!p.getquery())return!0;var e=p.getch();e===r&&(e=0),i.push(e,s.CellType.int)},m=function(){i.peek()>i.peek2()?i.poke(e.TRUE,s.CellType.int):i.poke(e.FALSE,s.CellType.int)},F=function(){if(i.rpush(t.state.ip,s.CellType.int),i.peek()===e.FALSE)for(t.state.ip++,t.state.token=o.getb(t.state.ip);t.state.token!==e.CCBRACK;)t.state.ip++,t.state.token=o.getb(t.state.ip)},M=function(){var e=i.pop();i.poke(i.peek()%e,s.CellType.int)},N=function(){var e=i.pop(),t=i.peek();i.poke(t*e,o.binaryType)},U=function(){i.poke(-i.peek(),o.lastType)},x=function(){},P=function(){i.poke(~i.peek(),o.lastType)},B=function(){var e=i.pop();i.poke(i.peek()|e,s.CellType.int)},D=function(){i.push(i.peek2(),o.lastType)},I=function(){for(t.state.ip++,t.state.token=o.getb(t.state.ip);t.state.token!==e.CQUOTE;)p.putch(t.state.token),t.state.ip++,t.state.token=o.getb(t.state.ip)},K=function(){t.state.incMode=!0,n.selectReg(t.state.token)},Z=function(){n.setReg(i.pop(),o.lastType)},_=function(){i.push(n.getReg(),o.lastType)},j=function(){if(t.state.incMode)n.setReg(n.getReg()-1,o.lastType);else{var e=i.pop(),p=i.peek();i.poke(p-e,o.binaryType)}},Q=function(){o.tset(n.getReg()*e.TCELL,i.pop(),o.lastType)},w=function(){var e=i.peek();i.poke(i.peek2(),o.lastType),i.poke2(e,o.secondLastType)};exports.opcodes=[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,Q,I,g,w,M,l,A,q,x,N,u,E,j,C,T,b,b,b,b,b,b,b,b,b,b,Z,_,m,L,S,d,D,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,F,y,R,O,U,h,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,c,B,v,P];
},{"./constants":"eKDL","./globals":"eS2z","./io":"UbnF","./memory":"E5yY","./registers":"BnPy","./stacks":"FCp6","./types":"UL96","./utils":"UnXq"}],"Tbsw":[function(require,module,exports) {
"use strict";function t(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=e(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,s=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw s}}}}function e(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(t,e,r,n,o,a,s){try{var i=t[a](s),u=i.value}catch(c){return void r(c)}i.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,a){var s=t.apply(e,r);function i(t){n(s,o,a,i,u,"next",t)}function u(t){n(s,o,a,i,u,"throw",t)}i(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.interpret=exports.interpReset=void 0;var a=require("./constants"),s=require("./globals"),i=require("./io"),u=require("./memory"),c=require("./opcodes"),p=function(){for(var t=a.START_DATA;t<a.DATA_SIZE;t++)u.setb(t,0);i.setOutputBuffer(""),s.state.run=!0,s.state.here=a.START_PROG,s.state.oldHere=a.START_PROG,s.state.sp=140,s.state.rp=20,console.log("state",JSON.stringify(s.state))};exports.interpReset=p;var f=function(t){for(var e=t;s.state.run&&s.state.ip<s.state.here;){e&&(s.state.ip-=1),s.state.token=u.getb(s.state.ip);var r=Boolean(c.opcodes[s.state.token]());if(s.state.token<a.CLOWERA?s.state.incMode=!1:s.state.token>a.CLOWERZ&&(s.state.incMode=!1),e=!1,s.state.ip+=1,r)return!0}return!1},l=function(){var e=o(regeneratorRuntime.mark(function e(r){var n,o,c,p,l,v,d,h,y,m,S,g,b,A;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=!1,o=t(r);try{for(o.s();!(c=o.n()).done;)p=c.value,(l=p.codePointAt(0))===a.COBRACE&&(n=!0),u.setb(s.state.here++,l)}catch(R){o.e(R)}finally{o.f()}return u.setb(s.state.here++,a.NULL),s.state.ip=s.state.oldHere,e.next=8,new Promise(function(t){!function e(){var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=f(r);s.state.run&&s.state.ip<s.state.here?setTimeout(function(){return e(n)}):t()}()});case 8:n||(s.state.here=s.state.oldHere),s.state.oldHere=s.state.here,s.state.sp<140&&(s.state.sp=140),s.state.rp<20&&(s.state.rp=20),console.log("state",JSON.stringify(s.state)),e.next=23;break;case 15:for(e.prev=15,e.t0=e.catch(0),i.putStr("\n"),v=a.START_PROG;v<Math.min(1e5,s.state.here);v++)d=String.fromCodePoint(u.getb(v)),v===s.state.ip?i.putStr('<span style="color:red">'.concat(d,"</span>")):i.putStr(d),(v-a.START_PROG+1)%80==0&&i.putStr("\n");for(h=s.state,y=h.ip,m=h.sp,S=h.rp,i.putStr("ip: ".concat(y," sp: ").concat(m," rp: ").concat(S,"\n\n")),g=a.CLOWERA;g<=a.CLOWERZ;g++)b=String.fromCodePoint(g),A=u.tget(g*a.TCELL),i.putStr("".concat(b,": ").concat(A,"\t")),g%4==0&&i.putStr("\n");console.log(e.t0.stack);case 23:case"end":return e.stop()}},e,null,[[0,15]])}));return function(t){return e.apply(this,arguments)}}();exports.interpret=l;
},{"./constants":"eKDL","./globals":"eS2z","./io":"UbnF","./memory":"E5yY","./opcodes":"LXRC"}],"QCba":[function(require,module,exports) {
"use strict";function e(e,t,r,n,o,u,i){try{var c=e[u](i),a=c.value}catch(s){return void r(s)}c.done?t(a):Promise.resolve(a).then(n,o)}function t(t){return function(){var r=this,n=arguments;return new Promise(function(o,u){var i=t.apply(r,n);function c(t){e(i,o,u,c,a,"next",t)}function a(t){e(i,o,u,c,a,"throw",t)}c(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.log2=exports.log=void 0,require("regenerator-runtime/runtime");var r=require("./io"),n=require("./interpreter"),o=require("./stacks"),u=require("./utils"),i=[],c=0,a=function(e){document.getElementById("output").innerHTML+="<div class='log'><p>".concat(e,"</p></div>");var t=document.getElementById("screen");t.scrollTop=t.scrollHeight};exports.log=a;var s=function(e){document.getElementById("output").innerText+="<div class='log'><p>".concat(e,"</p></div>");var t=document.getElementById("screen");t.scrollTop=t.scrollHeight};exports.log2=s;var p=document.getElementById("input_source");p.onblur=function(){setTimeout(function(){return p.focus()},5e3)},p.addEventListener("keyup",function(){var e=t(regeneratorRuntime.mark(function e(t){var a,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"ArrowUp"!==t.key){e.next=5;break}i.length>c&&(p.value=i[c++]),e.next=21;break;case 5:if("ArrowDown"!==t.key){e.next=9;break}c>0&&(p.value=i[--c]),e.next=21;break;case 9:if("Enter"!==t.key){e.next=21;break}return a=p.value,i.unshift(a),c=0,p.value="",r.appendInputBuffer(a),s=o.getStackPrompt(),e.next=18,n.interpret(a);case 18:exports.log("".concat(s," ").concat(u.escapeHTML(a))),document.getElementById("prompt").innerText=o.getStackPrompt();case 21:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var l=function e(){setTimeout(e),r.outputBuffer.length>0&&(exports.log(r.outputBuffer),r.setOutputBuffer(""))};l(),r.setOutputBuffer(""),exports.log("STABLE"),n.interpReset();var f=document.getElementById("prompt");f.innerText=o.getStackPrompt();
},{"regenerator-runtime/runtime":"QVnC","./io":"UbnF","./interpreter":"Tbsw","./stacks":"FCp6","./utils":"UnXq"}]},{},["QCba"], null)
//# sourceMappingURL=src.d6fe80bf.js.map