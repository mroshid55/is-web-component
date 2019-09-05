var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function f(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(s,f)}l((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n="is-web-component";var a=0;var i=false;var s;var f;var l=false;var o=window;var u=document;var c={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var $=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var v=new WeakMap;var h=function(e){return v.get(e)};var d=e("r",function(e,t){return v.set(t.$lazyInstance$=e,t)});var p=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return v.set(e,t)}};var m=function(e,t){return t in e};var g=function(e){return console.error(e)};var y=new Map;var b=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=y.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then(function(e){{y.set(i,e)}return e[a]},g)};var w=new Map;var _=function(){return o.__stencil_cssshim}();var S=[];var x=[];var k=[];var j=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&c.$flags$&4){R(C)}else{c.raf(C)}}}};var E=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){g(e)}}e.length=0};var L=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){g(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var C=function(){a++;E(S);var e=(c.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;L(x,e);L(k,e);if(x.length>0){k.push.apply(k,x);x.length=0}if(i=S.length+x.length+k.length>0){c.raf(C)}else{a=0}};var R=function(e){return Promise.resolve().then(e)};var P=j(x,true);var O={};var U=function(e){return e!=null};var N=function(e){return e.toLowerCase()};var A=function(e){e=typeof e;return e==="object"||e==="function"};var M=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var I=e("a",function(){if(!(o.CSS&&o.CSS.supports&&o.CSS.supports("color","var(--c)"))){return t.import("./p-dac3e2f0.system.js")}return Promise.resolve()});var z=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,a,i,s;return __generator(this,function(f){switch(f.label){case 0:e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(u.querySelectorAll("script")).find(function(e){return r.test(e.src)||e.getAttribute("data-namespace")===n});i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign({},i,{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,o.location.href));B(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-bcae8885.system.js")];case 2:f.sent();f.label=3;case 3:return[2,Object.assign({},i,{resourcesUrl:s.href})]}})})});var B=function(e){var t=M(n);try{o[t]=new Function("w","return import(w);//"+Math.random())}catch(n){var r=new Map;o[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var s=u.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise(function(e){s.onload=function(){e(o[t].m);s.remove()}});r.set(a,i);u.head.appendChild(s)}return i}}};var T=function(e,t){if(e!=null&&!A(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var H="hydrated";var q=new WeakMap;var V=function(e,t,r){var n=w.get(e);if($&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}w.set(e,n)};var W=function(e,t,r,n){var a=D(t.$tagName$);var i=w.get(a);e=e.nodeType===11?e:u;if(i){if(typeof i==="string"){e=e.head||e;var s=q.get(e);var f=void 0;if(!s){q.set(e,s=new Set)}if(!s.has(a)){{if(_){f=_.createHostStyle(n,a,i,!!(t.$flags$&10));var l=f["s-sc"];if(l){a=l;s=null}}else{f=u.createElement("style");f.innerHTML=i}e.insertBefore(f,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i])}}return a};var F=function(e,t,r){var n=W(e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h");if(t.$flags$&2){e.classList.add(n+"-s")}}};var D=function(e,t){return"sc-"+e};var G=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var f;var l=[];var o=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){o(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!A(a)){a=String(a)}if(i&&s){l[l.length-1].$text$+=a}else{l.push(i?{$flags$:0,$text$:a}:a)}s=i}}};o(r);if(t){{f=t.key||undefined}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,l,K)}var c={$flags$:0,$tag$:e,$children$:l.length>0?l:null,$elm$:undefined,$attrs$:t};{c.$key$=f}return c});var Q=e("H",{});var J=function(e){return e&&e.$tag$===Q};var K={forEach:function(e,t){return e.map(X).forEach(t)},map:function(e,t){return e.map(X).map(t).map(Y)}};var X=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var Y=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var Z=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"){var s=e.classList;ee(r).forEach(function(e){return s.remove(e)});ee(n).forEach(function(e){return s.add(e)})}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!m(e,t)){if(m(e,N(t))){t=N(t.substring(2))}else{t=N(t[2])+t.substring(3)}if(r){c.rel(e,t,r,false)}if(n){c.ael(e,t,n,false)}}else{var l=m(e,t);var o=A(n);if((l||o&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var u=n==null?"":n;if(e[t]!==u){e[t]=u}}else{e[t]=n}}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!l||i&4||a)&&!o){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var ee=function(e){return!e?[]:e.split(/\s+/).filter(function(e){return e})};var te=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||O;var s=t.$attrs$||O;{for(n in i){if(!(n in s)){Z(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){Z(a,n,i[n],s[n],r,t.$flags$)}};var re=function(e,t,r,n){var a=t.$children$[r];var i=0;var f;var o;if(U(a.$text$)){a.$elm$=u.createTextNode(a.$text$)}else{f=a.$elm$=u.createElement(a.$tag$);{te(null,a,l)}if(U(s)&&f["s-si"]!==s){f.classList.add(f["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){o=re(e,a,i);if(o){f.appendChild(o)}}}}return a.$elm$};var ne=function(e,t,r,n,a,i){var s=e;var f;for(;a<=i;++a){if(n[a]){f=re(null,r,a);if(f){n[a].$elm$=f;s.insertBefore(f,t)}}}};var ae=function(e,t,r,n){for(;t<=r;++t){if(U(e[t])){n=e[t].$elm$;le(e[t],true);n.remove()}}};var ie=function(e,t,r,n){var a=0;var i=0;var s=0;var f=0;var l=t.length-1;var o=t[0];var u=t[l];var c=n.length-1;var $=n[0];var v=n[c];var h;var d;while(a<=l&&i<=c){if(o==null){o=t[++a]}else if(u==null){u=t[--l]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(se(o,$)){fe(o,$);o=t[++a];$=n[++i]}else if(se(u,v)){fe(u,v);u=t[--l];v=n[--c]}else if(se(o,v)){fe(o,v);e.insertBefore(o.$elm$,u.$elm$.nextSibling);o=t[++a];v=n[--c]}else if(se(u,$)){fe(u,$);e.insertBefore(u.$elm$,o.$elm$);u=t[--l];$=n[++i]}else{s=-1;{for(f=a;f<=l;++f){if(t[f]&&U(t[f].$key$)&&t[f].$key$===$.$key$){s=f;break}}}if(s>=0){d=t[s];if(d.$tag$!==$.$tag$){h=re(t&&t[i],r,s)}else{fe(d,$);t[s]=undefined;h=d.$elm$}$=n[++i]}else{h=re(t&&t[i],r,i);$=n[++i]}if(h){{o.$elm$.parentNode.insertBefore(h,o.$elm$)}}}}if(a>l){ne(e,n[c+1]==null?null:n[c+1].$elm$,r,n,i,c)}else if(i>c){ae(t,a,l)}};var se=function(e,t){if(e.$tag$===t.$tag$){{return e.$key$===t.$key$}return true}return false};var fe=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;if(!U(t.$text$)){{{te(e,t,l)}}if(U(n)&&U(a)){ie(r,n,t,a)}else if(U(a)){if(U(e.$text$)){r.textContent=""}ne(r,null,t,a,0,a.length-1)}else if(U(n)){ae(n,0,n.length-1)}}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var le=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){le(e,t)})}};var oe=function(e,t,r,n){f=N(e.tagName);var a=t.$vnode$||{$flags$:0};var i=J(n)?n:G(null,null,n);i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e;{s=e["s-sc"]}fe(a,i)};var ue=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var i=function(){return ce(e,t,r,a,n)};var s;return pe(s,function(){return P(i)})};var ce=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){F(e,r,t.$modeName$)}{{t.$flags$|=4;try{oe(e,t,r,n.render())}catch(e){g(e)}t.$flags$&=~4}}if(_){_.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}$e(e,t)};var $e=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(H)}{de(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){he()}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var ve=function(e,t){{var r=h(e);if(r.$flags$&2){ue(e,r,t,false)}}};var he=function(){{u.documentElement.classList.add(H)}{c.$flags$|=2}};var de=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){g(e)}}return undefined};var pe=function(e,t){return e&&e.then?e.then(t):t()};var me=function(e,t){return h(e).$instanceValues$.get(t)};var ge=function(e,t,r,n){var a=h(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var f=a.$flags$;r=T(r,n.$members$[t][0]);if(r!==s&&(!(f&8)||s===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if((f&(4|2|16))===2){ue(i,a,n,false)}}}};var ye=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return me(this,n)},set:function(e){ge(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=h(this);return r.$onReadyPromise$.then(function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)})}})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;c.jmp(function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r})};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var be=function(e,t,n,a,i){return __awaiter(r,void 0,void 0,function(){var r,a,s,f;return __generator(this,function(l){switch(l.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;i=b(n);if(!i.then)return[3,2];return[4,i];case 1:i=l.sent();l.label=2;case 2:if(!i.isProxied){ye(i,n,2);i.isProxied=true}{t.$flags$|=8}try{new i(t)}catch(e){g(e)}{t.$flags$&=~8}r=D(n.$tagName$);if(!w.has(r)&&i.style){a=i.style;V(r,a,!!(n.$flags$&1))}l.label=3;case 3:s=t.$ancestorComponent$;f=function(){return ue(e,t,n,true)};if(s&&s["s-lr"]===false&&s["s-rc"]){s["s-rc"].push(f)}else{f()}return[2]}})})};var we=function(e,t){if((c.$flags$&1)===0){var r=h(e);if(!(r.$flags$&1)){r.$flags$|=1;{var n=e;while(n=n.parentNode||n.host){if(n["s-init"]&&n["s-lr"]===false){r.$ancestorComponent$=n;(n["s-al"]=n["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{R(function(){return be(e,r,t)})}}}};var _e=function(e){if((c.$flags$&1)===0){var t=h(e);if(_){_.removeHost(e)}}};var Se=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=u.head;var i=o.customElements;var s=a.querySelector("meta[charset]");var f=u.createElement("style");var l;Object.assign(c,t);c.$resourcesUrl$=new URL(t.resourcesUrl||"./",u.baseURI).href;if(t.syncQueue){c.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};var s=a.$tagName$;var f=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}p(t);return r}t.prototype.connectedCallback=function(){var e=this;if(l){clearTimeout(l);l=null}c.jmp(function(){return we(e,a)})};t.prototype.disconnectedCallback=function(){var e=this;c.jmp(function(){return _e(e)})};t.prototype["s-init"]=function(){var e=h(this);if(e.$lazyInstance$){$e(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){ve(this,a)};t.prototype.componentOnReady=function(){return h(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(s)&&!i.get(s)){r.push(s);i.define(s,ye(f,a,1))}})});f.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";f.setAttribute("data-styles","");a.insertBefore(f,s?s.nextSibling:a.firstChild);c.jmp(function(){return l=setTimeout(he,30)})})}}});