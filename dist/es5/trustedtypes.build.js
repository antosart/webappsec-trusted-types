(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},f;if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var n;a:{var ca={s:!0},p={};try{p.__proto__=ca;n=p.s;break a}catch(a){}n=!1}f=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=f;
function r(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(q)q(a,b);else for(var d in b)if("prototype"!=d)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d];a.L=b.prototype}var t="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)},w="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function x(){x=function(){};w.Symbol||(w.Symbol=da)}var da=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function y(){x();var a=w.Symbol.iterator;a||(a=w.Symbol.iterator=w.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&t(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return z(this)}});y=function(){}}function z(a){var b=0;return A(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function A(a){y();a={next:a};a[w.Symbol.iterator]=function(){return this};return a}function B(a){y();var b=a[Symbol.iterator];return b?b.call(a):z(a)}function C(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function ia(a,b){if(b){var d=w;a=a.split(".");for(var e=0;e<a.length-1;e++){var c=a[e];c in d||(d[c]={});d=d[c]}a=a[a.length-1];e=d[a];b=b(e);b!=e&&null!=b&&t(d,a,{configurable:!0,writable:!0,value:b})}}
ia("WeakMap",function(a){function b(a){this.a=(g+=Math.random()+1).toString();if(a){x();y();a=B(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}function d(a){C(a,c)||t(a,c,{value:{}})}function e(a){var c=Object[a];c&&(Object[a]=function(a){d(a);return c(a)})}if(function(){if(!a||!Object.seal)return!1;try{var c=Object.seal({}),b=Object.seal({}),d=new a([[c,2],[b,3]]);if(2!=d.get(c)||3!=d.get(b))return!1;d.delete(c);d.set(b,4);return!d.has(c)&&4==d.get(b)}catch(v){return!1}}())return a;
var c="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!C(a,c))throw Error("WeakMap key fail: "+a);a[c][this.a]=b;return this};b.prototype.get=function(a){return C(a,c)?a[c][this.a]:void 0};b.prototype.has=function(a){return C(a,c)&&C(a[c],this.a)};b.prototype.delete=function(a){return C(a,c)&&C(a[c],this.a)?delete a[c][this.a]:!1};return b});
ia("Map",function(a){function b(){var a={};return a.h=a.next=a.head=a}function d(a,c){var b=a.a;return A(function(){if(b){for(;b.head!=a.a;)b=b.h;for(;b.next!=b.head;)return b=b.next,{done:!1,value:c(b)};b=null}return{done:!0,value:void 0}})}function e(a,c){var b=c&&typeof c;"object"==b||"function"==b?g.has(c)?b=g.get(c):(b=""+ ++l,g.set(c,b)):b="p_"+c;var d=a.f[b];if(d&&C(a.f,b))for(a=0;a<d.length;a++){var k=d[a];if(c!==c&&k.key!==k.key||c===k.key)return{id:b,list:d,index:a,c:k}}return{id:b,list:d,
index:-1,c:void 0}}function c(a){this.f={};this.a=b();this.size=0;if(a){a=B(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),b=new a(B([[c,"s"]]));if("s"!=b.get(c)||1!=b.size||b.get({x:4})||b.set({x:4},"t")!=b||2!=b.size)return!1;var d=b.entries(),e=d.next();if(e.done||e.value[0]!=c||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||
"t"!=e.value[1]||!d.next().done?!1:!0}catch(ba){return!1}}())return a;x();y();var g=new WeakMap;c.prototype.set=function(a,c){a=0===a?0:a;var b=e(this,a);b.list||(b.list=this.f[b.id]=[]);b.c?b.c.value=c:(b.c={next:this.a,h:this.a.h,head:this.a,key:a,value:c},b.list.push(b.c),this.a.h.next=b.c,this.a.h=b.c,this.size++);return this};c.prototype.delete=function(a){a=e(this,a);return a.c&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.c.h.next=a.c.next,a.c.next.h=a.c.h,a.c.head=
null,this.size--,!0):!1};c.prototype.clear=function(){this.f={};this.a=this.a.h=b();this.size=0};c.prototype.has=function(a){return!!e(this,a).c};c.prototype.get=function(a){return(a=e(this,a).c)&&a.value};c.prototype.entries=function(){return d(this,function(a){return[a.key,a.value]})};c.prototype.keys=function(){return d(this,function(a){return a.key})};c.prototype.values=function(){return d(this,function(a){return a.value})};c.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=
d.value,a.call(b,d[1],d[0],this)};c.prototype[Symbol.iterator]=c.prototype.entries;var l=0;return c});function ja(a,b,d,e,c){this.f=a;this.a=b;this.m=d;this.l=void 0===e?!1:e;this.o=void 0===c?null:c}function ka(a){var b=/\s+/;return a.trim().split(/\s*;\s*/).map(function(a){return a.split(b)}).reduce(function(a,b){b[0]&&(a[b[0]]=b.slice(1).map(function(a){return a}).sort());return a},{})}
function la(){var a=ma,b=ka(a),d="trusted-types"in b,e=!1,c=["*"];d&&(e=-1!==b["trusted-types"].indexOf("'url-allow-http'"),c=b["trusted-types"].filter(function(a){return"'"!==a.charAt(0)}));return new ja(!0,d,c,e,a)};var D=function(){function a(a){return c.apply(this,arguments)||this}function b(a){return c.apply(this,arguments)||this}function d(a){return c.apply(this,arguments)||this}function e(a){return c.apply(this,arguments)||this}function c(a,b){if(a!==ea)throw Error("cannot call the constructor");I(this,"policyName",{value:b,enumerable:!0})}function g(a){var b=J.get(a);void 0===b&&(b=K(null),J.set(a,b));return b}function l(a){var b=fa(a);if(null==b||fa(b)!==xa)throw Error();b=B(ya(b));for(var c=b.next();!c.done;c=
b.next())c=c.value,I(a,c,{value:a[c]});return a}function k(a,b){u(a.prototype);delete a.name;I(a,"name",{value:b})}function h(a){return function(b){return b instanceof a&&J.has(b)}}function v(c,k){function h(a,b){var d=k[b],e=u(new a(ea,c));a={};b=(a[b]=function(a){var b=u(K(e));g(b).v=""+d(a);return b},a)[b];return u(b)}return u({createHTML:h(b,"createHTML"),createScriptURL:h(d,"createScriptURL"),createURL:h(e,"createURL"),createScript:h(a,"createScript")})}var m=Object,ba=m.assign,K=m.create,I=
m.defineProperty,u=m.freeze,ya=m.getOwnPropertyNames,fa=m.getPrototypeOf,xa=m.prototype;m=Array.prototype;var za=m.forEach,Aa=m.push;x();var ea=Symbol(),J=l(new WeakMap),L=l([]),ha=l(new Map),M=l([]),N=!1;c.prototype.toString=function(){return g(this).v};c.prototype.valueOf=function(){return g(this).v};r(e,c);k(e,"TrustedURL");r(d,c);k(d,"TrustedScriptURL");r(b,c);k(b,"TrustedHTML");r(a,c);k(a,"TrustedScript");k(c,"TrustedType");var Ba={createHTML:function(){throw Error("undefined conversion");},
createURL:function(){throw Error("undefined conversion");},createScriptURL:function(){throw Error("undefined conversion");},createScript:function(){throw Error("undefined conversion");}};return u({g:b,b:e,i:d,j:a,u:function(a,b,c){c=void 0===c?!1:c;if(N&&-1===M.indexOf(a))throw Error("Policy "+a+" disallowed.");if(-1!==L.indexOf(a))throw Error("Policy "+a+" exists.");L.push(a);var d=ba(K(null),Ba);b(d);u(d);b=v(a,d);c&&ha.set(a,b);return b},w:function(a){return ha.get(a)||null},A:function(){return L.slice()},
B:h(b),F:h(e),D:h(d),C:h(a),G:function(a){-1!==a.indexOf("*")?N=!1:(N=!0,M.length=0,za.call(a,function(a){Aa.call(M,""+a)}))}})}();var E=Object.defineProperty;function na(a,b,d){E(a,b,{value:d})};var F=Reflect.apply,G=Object,H=G.getOwnPropertyNames,O=G.getOwnPropertyDescriptor,oa=G.hasOwnProperty,pa=G.getPrototypeOf,qa=G.isPrototypeOf,ra=String.prototype.slice,sa=URL.prototype.constructor,ta=window.SecurityPolicyViolationEvent||null;function ua(a){try{return new sa(a,document.baseURI||void 0)}catch(b){return null}}
for(var P={HTMLAnchorElement:{href:D.b},HTMLAreaElement:{href:D.b},HTMLBaseElement:{href:D.b},HTMLButtonElement:{formaction:D.b},HTMLSourceElement:{src:D.b},HTMLImageElement:{src:D.b},HTMLTrackElement:{src:D.b},HTMLMediaElement:{src:D.b},HTMLInputElement:{src:D.b,formaction:D.b},HTMLFrameElement:{src:D.b},HTMLIFrameElement:{src:D.b,srcdoc:D.g},HTMLLinkElement:{href:D.i},HTMLObjectElement:{data:D.i,codebase:D.i},HTMLEmbedElement:{src:D.i},HTMLScriptElement:{src:D.i,text:D.j},HTMLElement:{}},va=B(H(HTMLElement.prototype)),
Q=va.next();!Q.done;Q=va.next()){var wa=Q.value;"on"===wa.slice(0,2)&&(P.HTMLElement[wa]=D.j)}var Ca={TrustedHTML:D.B,TrustedURL:D.F,TrustedScriptURL:D.D,TrustedScript:D.C},Da={codebase:"codeBase",formaction:"formAction"};function R(){this.a=Ea;this.l={}}
function Fa(){var a=S;T(a,Element.prototype,"setAttribute",function(b,d){for(var e=[],c=1;c<arguments.length;++c)e[c-1]=arguments[c];return a.o.bind(a,this,b).apply(a,e)});T(a,Element.prototype,"setAttributeNS",function(b,d){for(var e=[],c=1;c<arguments.length;++c)e[c-1]=arguments[c];return a.m.bind(a,this,b).apply(a,e)})}
R.prototype.o=function(a,b,d){for(var e=[],c=2;c<arguments.length;++c)e[c-2]=arguments[c];if(null!==a.constructor){a:{c=(e[0]=String(e[0])).toLowerCase();var g=a.constructor;do{var l=g&&g.name&&P[g.name]&&P[g.name][c];if(l||g==HTMLElement){c=l;break a}}while(g=pa(g));c=null}if(c instanceof Function)return this.f(a,"setAttribute",c,b,1,e)}return b.apply(a,e)};
R.prototype.m=function(a,b,d){for(var e=[],c=2;c<arguments.length;++c)e[c-2]=arguments[c];return null!==a.constructor&&(e[0]=String(e[0]),c=(e[1]=String(e[1])).toLowerCase(),c=a.constructor&&a.constructor.name&&P[a.constructor.name]&&P[a.constructor.name][c],c instanceof Function)?this.f(a,"setAttributeNS",c,b,2,e):b.apply(a,e)};function U(a,b,d,e){var c=S;T(c,a,b,function(a,l){for(var g=[],h=1;h<arguments.length;++h)g[h-1]=arguments[h];return c.f.call(c,this,b,d,a,e,g)})}
function T(a,b,d,e){var c=O(b,d),g=c?c.value:null;if(!(g instanceof Function))throw new TypeError("Property "+d+" on object"+b+" is not a function");c=b.constructor.name+"-"+d;if(a.l[c])throw Error("TrustedTypesEnforcer: Double installation detected");na(b,d,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return e.bind(this,g).apply(this,b)});a.l[c]=g}
function V(a,b,d,e,c){function g(b){a.f.call(a,this,d,e,k,0,[b])}if(c&&!qa.call(c,b))throw Error("Invalid prototype chain");c=c||b;var l=O(c,d),k=l?l.set:null;if(!(k instanceof Function))throw new TypeError("No setter for property "+d+" on object"+b);var h=b.constructor.name+"-"+d;if(a.l[h])throw Error("TrustedTypesEnforcer: Double installation detected");c===b?E(b,d,{set:g}):E(b,d,{set:g,get:l.get,configurable:!0});a.l[h]=k}
R.prototype.f=function(a,b,d,e,c,g){var l=g[c],k=d.name;if(Ca.hasOwnProperty(k)&&Ca[k](l)||d===D.j&&"on"===F(ra,b,[0,2])&&null===l||"function"===typeof l)return F(e,a,g);if(d===D.b&&this.a.l){var h=""+l,v=ua(h);if(v&&("http:"==v.protocol||"https:"==v.protocol))return g[c]=h,F(e,a,g)}c=a.constructor.name||""+a;k="Failed to set "+b+" on "+c+": "+("This property requires "+k+".");this.a.f&&console.warn(k,b,a,d,l);if("function"==typeof ta){h="";if(d===D.b||d===D.i)if(h=ua(l)||"")h=h.href;d=F(ra,""+l,
[0,40]);b=new ta("securitypolicyviolation",{bubbles:!0,blockedURI:h,disposition:this.a.a?"enforce":"report",documentURI:document.location.href,effectiveDirective:"trusted-types",originalPolicy:this.a.o,statusCode:0,violatedDirective:"trusted-types",sample:c+"."+b+" "+d});a.isConnected?a.dispatchEvent(b):document.dispatchEvent(b)}if(this.a.a)throw new TypeError(k);return F(e,a,g)};"undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes&&(window.TrustedTypes={TrustedHTML:D.g,TrustedURL:D.b,TrustedScriptURL:D.i,TrustedScript:D.j,createHTML:D.H,createURL:D.K,createScriptURL:D.J,createScript:D.I,createPolicy:D.u,getExposedPolicy:D.w,getPolicyNames:D.A});var ma=function(){try{var a;if(!(a=document.currentScript)){var b=document.getElementsByTagName("script");a=b[b.length-1]}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.csp)return a.dataset.csp;var d=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(d)return d.content.trim()}catch(e){}return null}(),Ea=ma?la():new ja(!1,!1,["*"]),S=new R;D.G(S.a.m);
if(S.a.a||S.a.f){V(S,Element.prototype,"innerHTML",D.g);V(S,Element.prototype,"outerHTML",D.g);U(Range.prototype,"createContextualFragment",D.g,0);U(Element.prototype,"insertAdjacentHTML",D.g,1);O(Document.prototype,"write")?U(Document.prototype,"write",D.g,0):U(HTMLDocument.prototype,"write",D.g,0);U(window,"open",D.b,0);DOMParser&&U(DOMParser.prototype,"parseFromString",D.g,0);Fa();var Ga=S;V(Ga,HTMLScriptElement.prototype,"innerText",D.j,HTMLElement.prototype);V(Ga,HTMLScriptElement.prototype,
"textContent",D.j,Node.prototype);for(var Ha=S,Ia=B(H(P)),W=Ia.next();!W.done;W=Ia.next())for(var X=W.value,Ja=B(H(P[X])),Y=Ja.next();!Y.done;Y=Ja.next()){var Z=Y.value,Ka=F(oa,Da,[Z])?Da[Z]:Z;V(Ha,window[X].prototype,Ka,P[X][Z])}};}).call(window);//# sourceMappingURL=trustedtypes.build.js.map
