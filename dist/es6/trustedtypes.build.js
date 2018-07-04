(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';class d{constructor(a,b,c,e,f=!1,h=null){this.w=a;this.m=b;this.F=c;this.B=e;this.A=f;this.D=h}static R(a){const b=/\s+/;return a.trim().split(/\s*;\s*/).map((a)=>a.split(b)).reduce(function(a,b){b[0]&&(a[b[0]]=b.slice(1).map((a)=>a).sort());return a},{})}static G(a){const b=d.R(a),c="trusted-types"in b;let e=!1,f=["*"];c&&(e=-1!==b["trusted-types"].indexOf("'url-allow-http'"),f=b["trusted-types"].filter((a)=>"'"!==a.charAt(0)));return new d(!0,c,null,f,e,a)}};const n=function(){function a(a){let b=y.get(a);void 0===b&&(b=g(null),y.set(a,b));return b}function b(a){const b=m(a);if(null==b||m(b)!==G)throw Error();for(let c of q(b))l(a,c,{value:a[c]});return a}function c(a,b){k(a.prototype);delete a.name;l(a,"name",{value:b})}function e(a){return(b)=>b instanceof a&&y.has(b)}function f(b,c){function e(e,f){const h=c[f],N=k(new e(H,b));return k({[f](b){const c=k(g(N));a(c).v=""+h(b);return c}}[f])}return k({createHTML:e(u,"createHTML"),createScriptURL:e(v,
"createScriptURL"),createURL:e(w,"createURL"),createScript:e(x,"createScript")})}const {assign:h,create:g,defineProperty:l,freeze:k,getOwnPropertyNames:q,getPrototypeOf:m,prototype:G}=Object,{forEach:O,push:P}=Array.prototype,H=Symbol(),y=b(new WeakMap),z=b([]),I=b(new Map),A=b([]);let B=!1;class r{constructor(a,b){if(a!==H)throw Error("cannot call the constructor");l(this,"policyName",{value:""+b,enumerable:!0})}toString(){return a(this).v}valueOf(){return a(this).v}}class w extends r{}c(w,"TrustedURL");
class v extends r{}c(v,"TrustedScriptURL");class u extends r{}c(u,"TrustedHTML");class x extends r{}c(x,"TrustedScript");c(r,"TrustedType");const Q={createHTML:()=>{throw Error("undefined conversion");},createURL:()=>{throw Error("undefined conversion");},createScriptURL:()=>{throw Error("undefined conversion");},createScript:()=>{throw Error("undefined conversion");}};return k({b:u,a:w,f:v,g:x,C:function(a,b,c=!1){a=""+a;if(B&&-1===A.indexOf(a))throw Error("Policy "+a+" disallowed.");if(-1!==z.indexOf(a))throw Error("Policy "+
a+" exists.");z.push(a);const e=h(g(null),Q);b(e);k(e);b=f(a,e);c&&I.set(a,b);return b},s:function(a){return I.get(""+a)||null},H:function(){return z.slice()},M:e(u),P:e(w),O:e(v),N:e(x),S:function(a){-1!==a.indexOf("*")?B=!1:(B=!0,A.length=0,O.call(a,(a)=>{P.call(A,""+a)}))}})}();const {defineProperty:p}=Object;function t(a,b,c){p(a,b,{value:c})};const {apply:C}=Reflect,{getOwnPropertyNames:D,getOwnPropertyDescriptor:E,hasOwnProperty:F,getPrototypeOf:J,isPrototypeOf:K}=Object,{slice:L}=String.prototype,M=URL.prototype.constructor,R=window.SecurityPolicyViolationEvent||null;function S(a){try{return new M(a,document.baseURI||void 0)}catch(b){return null}}
let T={HTMLAnchorElement:{href:n.a},HTMLAreaElement:{href:n.a},HTMLBaseElement:{href:n.a},HTMLButtonElement:{formaction:n.a},HTMLSourceElement:{src:n.a},HTMLImageElement:{src:n.a},HTMLTrackElement:{src:n.a},HTMLMediaElement:{src:n.a},HTMLInputElement:{src:n.a,formaction:n.a},HTMLFrameElement:{src:n.a},HTMLIFrameElement:{src:n.a,srcdoc:n.b},HTMLLinkElement:{href:n.f},HTMLObjectElement:{data:n.f,codebase:n.f},HTMLEmbedElement:{src:n.f},HTMLScriptElement:{src:n.f,text:n.g},HTMLElement:{}};
for(let a of D(HTMLElement.prototype))"on"===a.slice(0,2)&&(T.HTMLElement[a]=n.g);const U={TrustedHTML:n.M,TrustedURL:n.P,TrustedScriptURL:n.O,TrustedScript:n.N},V={TrustedHTML:"createHTML",TrustedURL:"createURL",TrustedScriptURL:"createScriptURL",TrustedScript:"createScript"},W=n.s,X={codebase:"codeBase",formaction:"formAction"};
class Y{constructor(a){this.c=a;this.l={}}J(){n.S(this.c.B);if(this.c.m||this.c.w)this.i(Element.prototype,"innerHTML",n.b),this.i(Element.prototype,"outerHTML",n.b),this.h(Range.prototype,"createContextualFragment",n.b,0),this.h(Element.prototype,"insertAdjacentHTML",n.b,1),E(Document.prototype,"write")?this.h(Document.prototype,"write",n.b,0):this.h(HTMLDocument.prototype,"write",n.b,0),this.h(window,"open",n.a,0),DOMParser&&this.h(DOMParser.prototype,"parseFromString",n.b,0),this.V(),this.L(),
this.K()}L(){this.i(HTMLScriptElement.prototype,"innerText",n.g,HTMLElement.prototype);this.i(HTMLScriptElement.prototype,"textContent",n.g,Node.prototype)}K(){for(let a of D(T))for(let b of D(T[a])){const c=C(F,X,[b])?X[b]:b;this.i(window[a].prototype,c,T[a][b])}}V(){let a=this;this.o(Element.prototype,"setAttribute",function(b,...c){return a.U.bind(a,this,b).apply(a,c)});this.o(Element.prototype,"setAttributeNS",function(b,...c){return a.T.bind(a,this,b).apply(a,c)})}I(a,b){a=a.constructor;do{let c=
a&&a.name&&T[a.name]&&T[a.name][b];if(c||a==HTMLElement)return c}while(a=J(a));return null}U(a,b,...c){if(null!==a.constructor){var e=(c[0]=String(c[0])).toLowerCase();e=this.I(a,e);if(e instanceof Function)return this.j(a,"setAttribute",e,b,1,c)}return b.apply(a,c)}T(a,b,...c){if(null!==a.constructor){c[0]=String(c[0]);var e=(c[1]=String(c[1])).toLowerCase();e=a.constructor&&a.constructor.name&&T[a.constructor.name]&&T[a.constructor.name][e];if(e instanceof Function)return this.j(a,"setAttributeNS",
e,b,2,c)}return b.apply(a,c)}h(a,b,c,e){let f=this;this.o(a,b,function(a,...g){return f.j.call(f,this,b,c,a,e,g)})}o(a,b,c){var e=E(a,b);let f=e?e.value:null;if(!(f instanceof Function))throw new TypeError("Property "+b+" on object"+a+" is not a function");e=this.u(a,b);if(this.l[e])throw Error("TrustedTypesEnforcer: Double installation detected");t(a,b,function(...a){return c.bind(this,f).apply(this,a)});this.l[e]=f}i(a,b,c,e=void 0){function f(a){k.j.call(k,this,b,c,g,0,[a])}if(e&&!K.call(e,a))throw Error("Invalid prototype chain");
e=e||a;let h=E(e,b),g=h?h.set:null;if(!(g instanceof Function))throw new TypeError("No setter for property "+b+" on object"+a);let l=this.u(a,b);if(this.l[l])throw Error("TrustedTypesEnforcer: Double installation detected");let k=this;e===a?p(a,b,{set:f}):p(a,b,{set:f,get:h.get,configurable:!0});this.l[l]=g}u(a,b){return""+a.constructor.name+"-"+b}j(a,b,c,e,f,h){let g=h[f];var l=""+c.name;if(U.hasOwnProperty(l)&&U[l](g)||c===n.g&&"on"===C(L,b,[0,2])&&null===g||"function"===typeof g)return C(e,a,h);
if(c===n.a&&this.c.A){var k=""+g,q;if(q=(q=S(k))?"http:"==q.protocol||"https:"==q.protocol:!1)return h[f]=k,C(e,a,h)}if((k=this.c.F)&&(k=W.call(n,k))&&U.hasOwnProperty(l)){try{var m=k[V[l]](g)}catch(G){}h[f]=m;return C(e,a,h)}f=a.constructor.name||""+a;l=`Failed to set ${b} on ${f}: `+`This property requires ${l}.`;this.c.w&&console.warn(l,b,a,c,g);if("function"==typeof R){m="";if(c===n.a||c===n.f)if(m=S(g)||"")m=m.href;c=C(L,""+g,[0,40]);b=new R("securitypolicyviolation",{bubbles:!0,blockedURI:m,
disposition:this.c.m?"enforce":"report",documentURI:document.location.href,effectiveDirective:"trusted-types",originalPolicy:this.c.D,statusCode:0,violatedDirective:"trusted-types",sample:`${f}.${b} ${c}`});a.isConnected?a.dispatchEvent(b):document.dispatchEvent(b)}if(this.c.m)throw new TypeError(l);return C(e,a,h)}};"undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes&&(window.TrustedTypes={TrustedHTML:n.b,TrustedURL:n.a,TrustedScriptURL:n.f,TrustedScript:n.g,createHTML:n.W,createURL:n.Z,createScriptURL:n.Y,createScript:n.X,createPolicy:n.C,getExposedPolicy:n.s,getPolicyNames:n.H});{const a=function(){try{var c;if(!(c=document.currentScript)){{let a=document.getElementsByTagName("script");c=a[a.length-1]}}if(c&&"Content-Security-Policy:"==c.textContent.trim().substr(0,24))return c.textContent.trim().slice(24);if(c.dataset.csp)return c.dataset.csp;const a=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(a)return a.content.trim()}catch(e){}return null}(),b=a?d.G(a):new d(!1,!1,null,["*"]);(new Y(b)).J()};}).call(window);//# sourceMappingURL=trustedtypes.build.js.map
