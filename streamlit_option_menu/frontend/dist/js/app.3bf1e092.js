(function(e){function t(t){for(var c,a,s=t[0],l=t[1],i=t[2],b=0,d=[];b<s.length;b++)a=s[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"04d9":function(e,t,n){"use strict";n("7746")},"44dc":function(e,t,n){"use strict";n("a61a")},"5d4a":function(e,t,n){},7746:function(e,t,n){},a61a:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const r={id:"app"};function o(e,t,n,o,a,s){const l=Object(c["r"])("MyComponent"),i=Object(c["r"])("WithStreamlitConnection");return Object(c["l"])(),Object(c["c"])("div",r,[Object(c["f"])(i,null,{default:Object(c["t"])(({args:e})=>[Object(c["f"])(l,{args:e},null,8,["args"])]),_:1})])}const a=Object(c["u"])("data-v-6f770582");Object(c["n"])("data-v-6f770582");const s={class:"menu"},l=Object(c["f"])("hr",null,null,-1);Object(c["m"])();const i=a((e,t,n,r,o,a)=>(Object(c["l"])(),Object(c["c"])("div",s,[Object(c["f"])("div",{class:["container-xxl d-flex flex-column flex-shrink-0",{"p-3":!r.isHorizontal,"p-h":r.isHorizontal,"nav-justified":r.isHorizontal}],style:r.styleObjectToString(r.styles["container"])},[r.menuTitle?(Object(c["l"])(),Object(c["c"])(c["a"],{key:0},[Object(c["f"])("a",{href:"#",class:"menu-title align-items-center mb-md-0 me-md-auto text-decoration-none",style:r.styleObjectToString(r.styles["menu-title"])},[Object(c["f"])("i",{class:["icon",r.menuIcon],style:r.styleObjectToString(r.styles["menu-icon"])},null,6),Object(c["e"])(" "+Object(c["s"])(r.menuTitle),1)],4),l],64)):Object(c["d"])("",!0),Object(c["f"])("ul",{class:["nav nav-pills mb-auto",{"flex-column":!r.isHorizontal,"nav-justified":r.isHorizontal}],style:r.styleObjectToString(r.styles["nav"])},[(Object(c["l"])(!0),Object(c["c"])(c["a"],null,Object(c["p"])(n.args.options,(e,t)=>(Object(c["l"])(),Object(c["c"])("li",{class:"nav-item",key:e,style:r.styleObjectToString(r.styles["nav-item"])},["---"===e?(Object(c["l"])(),Object(c["c"])("hr",{key:0,class:{vr:r.isHorizontal},style:r.styleObjectToString(r.styles["separator"])},null,6)):(Object(c["l"])(),Object(c["c"])("a",{key:1,href:"#",class:["nav-link",{active:!1,"nav-link-horizontal":r.isHorizontal}],onClick:n=>r.onClicked(t,e),"aria-current":"page",style:r.styleObjectToString(r.styles["nav-link"])+r.styleObjectToString(r.styles["nav-link-selected"],t==r.selectedIndex)},[Object(c["f"])("i",{class:["icon",r.icons[t]],style:r.styleObjectToString(r.styles["icon"])},null,6),Object(c["e"])(" "+Object(c["s"])(e),1)],14,["onClick"]))],4))),128))],6)],6)])));var u=n("d092");function b(){Object(c["i"])(()=>{u["a"].setFrameHeight()}),Object(c["k"])(()=>{u["a"].setFrameHeight()})}
/**
 * @license
 * Copyright 2018-2020 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d=n("ec26");n("ab8b"),n("cd74");function j(e){return"bi-"!==e.slice(0,3)?"bi-"+e:e}var O={name:"MyComponent",props:["args"],setup(e){b();const t=Object(c["o"])(e.args.menuTitle),n="horizontal"==e.args.orientation,r=Object(c["o"])(e.args.menuIcon||"bi-menu-up");r.value=j(r.value);const o=Object(c["o"])(e.args.icons||[]);for(let c=0;c<e.args.options.length;c++)o.value[c]||(o.value[c]="bi-caret-right"),o.value[c]=j(o.value[c]);const a=Object(c["o"])(e.args.defaultIndex),s=(e,t)=>{a.value=e,u["a"].setComponentValue({option:t,id:Object(d["a"])()})},l=(e,t)=>{if("undefined"===typeof t&&(t=!0),!t)return"";let n="";for(const c in e)n+=`${c}:${e[c]};`;return n},i=Object(c["o"])(e.args.styles||{});return{selectedIndex:a,menuTitle:t,menuIcon:r,icons:o,styles:i,onClicked:s,styleObjectToString:l,isHorizontal:n}}},f=(n("d642"),n("6b0d")),p=n.n(f);const v=p()(O,[["render",i],["__scopeId","data-v-6f770582"]]);var y=v;const m=Object(c["u"])("data-v-bef81972");Object(c["n"])("data-v-bef81972");const g={key:0},h=Object(c["f"])("h1",{class:"err__title"},"Component Error",-1),k={class:"err__msg"};Object(c["m"])();const S=m((e,t,n,r,o,a)=>(Object(c["l"])(),Object(c["c"])("div",null,[""!=e.componentError?(Object(c["l"])(),Object(c["c"])("div",g,[h,Object(c["f"])("div",k,"Message: "+Object(c["s"])(e.componentError),1)])):null!=e.renderData?Object(c["q"])(e.$slots,"default",{key:1,args:e.renderData.args,disabled:e.renderData.disabled},void 0,!0):Object(c["d"])("",!0)])));var T=Object(c["g"])({name:"WithStreamlitConnection",setup(){const e=Object(c["o"])(void 0),t=Object(c["o"])(""),n=n=>{const c=n;e.value=c.detail,t.value=""};return Object(c["i"])(()=>{u["a"].events.addEventListener(u["a"].RENDER_EVENT,n),u["a"].setComponentReady()}),Object(c["k"])(()=>{""!=t.value&&u["a"].setFrameHeight()}),Object(c["j"])(()=>{u["a"].events.removeEventListener(u["a"].RENDER_EVENT,n)}),Object(c["h"])(e=>{t.value=String(e)}),{renderData:e,componentError:t}}});n("44dc");const _=p()(T,[["render",S],["__scopeId","data-v-bef81972"]]);var x=_,E=Object(c["g"])({name:"App",components:{MyComponent:y,WithStreamlitConnection:x}});n("04d9");const C=p()(E,[["render",o]]);var H=C;Object(c["b"])(H).mount("#app")},d642:function(e,t,n){"use strict";n("5d4a")}});
//# sourceMappingURL=app.3bf1e092.js.map