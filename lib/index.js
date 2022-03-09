/*! For license information please see index.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports["ui-lib"]=r():e["ui-lib"]=r()}(self,(function(){return(()=>{"use strict";var e,r,t={418:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,l,s=o(e),u=1;u<arguments.length;u++){for(var p in a=Object(arguments[u]))t.call(a,p)&&(s[p]=a[p]);if(r){l=r(a);for(var c=0;c<l.length;c++)n.call(a,l[c])&&(s[l[c]]=a[l[c]])}}return s}},251:(e,r,t)=>{t(418);var n=t(82),o=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(e,r,t){var n,i={},u=null,p=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(p=r.ref),r)l.call(r,n)&&!s.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:p,props:i,_owner:a.current}}},893:(e,r,t)=>{e.exports=t(251)},129:(e,r,t)=>{t.r(r),t.d(r,{Button:()=>u,UIProvider:()=>v});var n=t(893),o=t(38),i=t.n(o);const a=e=>Object.entries(e).map((([e,r])=>"object"==typeof r?`${e} {${Object.entries(r).map((([e,r])=>`${e}:${r}`)).join(";")}}`:`${e}:${r}`)).join(";"),l=({theme:e,size:r})=>`height: ${e.height[r]}`,s={Primary:i().button`
  ${({theme:e})=>a(e.button.primary)}
  ${({theme:e,size:r="medium"})=>l({theme:e,size:r})}
`,Secondary:i().button`
  ${({theme:e})=>a(e.button.secondary)}
  ${({theme:e,size:r="medium"})=>l({theme:e,size:r})}
`};const u=e=>{var{children:r,variant:t="primary"}=e,o=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(e,["children","variant"]);const i="primary"===t?s.Primary:s.Secondary;return(0,n.jsx)(i,Object.assign({},o,{children:r}))},p={sizes:{main:"16px",xsmall:"10px",small:"12px",medium:"14px",large:"20px",xlarge:"26px"}},c={button:{display:"flex","justify-content":"center","align-items":"center","font-weight":700,"font-size":p.sizes.medium,cursor:"pointer"},font:p},d={main:"100%",xsmall:"24px",small:"32px",medium:"64px",large:"96px",xlarge:"128px"},f={main:"100%",xsmall:"24px",small:"32px",medium:"48px",large:"64px",xlarge:"96px"},m={width:{main:"2px"},radius:{main:"16px"}},h={primary:{main:"#2A2A2A",dark:"#767676",light:"#A9A9A9"},secondary:{main:"#F34986",dark:"#FD9CBF",light:"#FFE8F2"},body:{main:"#FFFFFF",dark:"",light:""},silver:{main:"DDDDDD",dark:"",light:"#ECECEC"},green:{main:"#43A496",dark:"#43A496",light:"#43A496"},white:{main:"#FFFFFF",dark:"#FFFFFF",light:"#FFFFFF"},transparent:{main:"transparent",dark:"transparent",light:"transparent"}},b=Object.assign({primary:{"font-family":"Hero New"}},c.font),g={primary:{"font-size":b.sizes.main,color:h.primary.main},secondary:{"font-size":b.sizes.small,color:h.primary.dark}},y={height:f,width:d,border:m,font:b,palette:h,button:{primary:Object.assign(Object.assign(Object.assign({},g.primary),c.button),{width:d.xlarge,height:f.medium,color:h.white.main,border:`solid ${h.primary.main} ${m.width.main}`,"border-radius":m.radius.main,background:h.primary.main,"&:hover":{background:h.primary.dark,"border-color":h.primary.dark},"&:disabled":{background:h.silver.light,"border-color":h.silver.light,color:h.primary.dark}}),secondary:Object.assign(Object.assign(Object.assign({},g.primary),c.button),{width:d.xlarge,height:f.medium,color:h.primary.main,border:`solid ${h.primary.main} ${m.width.main}`,"border-radius":m.radius.main,background:h.transparent.main,"&:hover":{background:h.secondary.light},"&:disabled":{background:h.transparent.main,"border-color":h.silver.light,color:h.primary.dark}})}},v=({children:e})=>(0,n.jsx)(o.ThemeProvider,Object.assign({theme:y},{children:e}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}return o.m=t,o.c=n,o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".index.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ui-lib:",o.l=(t,n,i,a)=>{if(e[t])e[t].push(n);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var c=u[p];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+i){l=c;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",r+i),l.src=t),e[t]=[n];var d=(r,n)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o.S={};var e={},r={};o.I=(t,n)=>{n||(n=[]);var i=r[t];if(i||(i=r[t]={}),!(n.indexOf(i)>=0)){if(n.push(i),e[t])return e[t];o.o(o.S,t)||(o.S[t]={});var a=o.S[t],l="ui-lib",s=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:l>i.from))&&(o[r]={get:t,from:l,eager:!!n})},u=[];return"default"===t&&(s("react","17.0.2",(()=>o.e(976).then((()=>()=>o(294))))),s("styled-components","5.3.3",(()=>Promise.all([o.e(163),o.e(113)]).then((()=>()=>o(163)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,i=1;i<e.length;i++)o--,n+="u"==(typeof(l=e[i]))[0]?"-":(o>0?".":"")+(o=2,l);return n}var a=[];for(i=1;i<e.length;i++){var l=e[i];a.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?a.pop()+" "+a.pop():r(l))}return s();function s(){return a.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],i=o<0;i&&(o=-o-1);for(var a=0,l=1,s=!0;;l++,a++){var u,p,c=l<r.length?(typeof r[l])[0]:"";if(a>=n.length||"o"==(p=(typeof(u=n[a]))[0]))return!s||("u"==c?l>o&&!i:""==c!=i);if("u"==p){if(!s||"u"!=c)return!1}else if(s)if(c==p)if(l<=o){if(u!=r[l])return!1}else{if(i?u>r[l]:u<r[l])return!1;u!=r[l]&&(s=!1)}else if("s"!=c&&"n"!=c){if(i||l<=o)return!1;s=!1,l--}else{if(l<=o||p<c!=i)return!1;s=!1}else"s"!=c&&"n"!=c&&(s=!1,l--)}}var d=[],f=d.pop.bind(d);for(a=1;a<r.length;a++){var m=r[a];d.push(1==m?f()|f():2==m?f()&f():m?t(m,n):!f())}return!!f()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],i=(typeof o)[0];if(n>=t.length)return"u"==i;var a=t[n],l=(typeof a)[0];if(i!=l)return"o"==i&&"n"==l||"s"==l||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}})(r,t)?t:r),0)},i=(e,o,i,l)=>{var s=n(e,i);return t(l,s)||"undefined"!=typeof console&&console.warn&&console.warn(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,i,s,l)),a(e[i][s])},a=e=>(e.loaded=1,e.get()),l=e=>function(r,t,n,i){var a=o.I(r);return a&&a.then?a.then(e.bind(e,r,o.S[r],t,n,i)):e(r,o.S[r],t,n,i)},s=l(((e,r,t,i)=>r&&o.o(r,t)?((e,r,t,o)=>{var i=n(e,t);return a(e[t][i])})(r,0,t):i())),u=l(((e,r,t,n,a)=>r&&o.o(r,t)?i(r,0,t,n):a())),p={},c={113:()=>u("default","react",[0,16,8,0],(()=>o.e(976).then((()=>()=>o(294))))),82:()=>s("default","react",(()=>o.e(294).then((()=>()=>o(294))))),38:()=>u("default","styled-components",[0,5,3,3],(()=>Promise.all([o.e(163),o.e(113)]).then((()=>()=>o(163)))))};[82,38].forEach((e=>{o.m[e]=r=>{p[e]=0,delete o.c[e];var t=c[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var d={113:[113]};o.f.consumes=(e,r)=>{o.o(d,e)&&d[e].forEach((e=>{if(o.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,o.m[e]=t=>{delete o.c[e],t.exports=r()}},n=r=>{delete p[e],o.m[e]=t=>{throw delete o.c[e],r}};try{var i=c[e]();i.then?r.push(p[e]=i.then(t).catch(n)):t(i)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(113!=r){var i=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=i);var a=o.p+o.u(r),l=new Error;o.l(a,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,n[1](l)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,i,[a,l,s]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);s&&s(o)}for(r&&r(t);u<a.length;u++)i=a[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},t=self.webpackChunkui_lib=self.webpackChunkui_lib||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),o(129)})()}));