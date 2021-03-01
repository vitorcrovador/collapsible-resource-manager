(()=>{"use strict";var e={153:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(645),o=n.n(a)()((function(e){return e[1]}));o.push([e.id,".badge[data-v-088ccfee]{background:var(--collapsible-menu-badge-color,var(--primary));padding:.15rem .35rem;align-self:center}.text-xxs[data-v-088ccfee]{font-size:.6rem}",""]);const i=o},109:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(645),o=n.n(a)()((function(e){return e[1]}));o.push([e.id,".collapsible-indicator{top:-2px;right:0}h4 .collapsible-indicator{top:-5px}",""]);const i=o},257:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(645),o=n.n(a)()((function(e){return e[1]}));o.push([e.id,".top_level ul li[data-v-0d88868e]:first-child{padding-top:0}.group ul li[data-v-0d88868e]:first-child{padding-top:1rem}.group h4[data-v-0d88868e]{margin-left:0}.group h4[data-v-0d88868e]:first-child{margin-top:0}",""]);const i=o},736:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(645),o=n.n(a)()((function(e){return e[1]}));o.push([e.id,".resource-list-icon{width:15px;top:-3px;left:-25px}.custom-tools *{margin:0;padding:0;font-size:inherit;position:inherit}.custom-tools img,.custom-tools svg{display:none}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);a&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{var a,o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function r(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},a=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=r(d),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(s[u].references++,s[u].updater(m)):s.push({identifier:d,updater:v(m,t),references:1}),a.push(d)}return a}function c(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,n,a){var o=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t,n){var a=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,h=0;function v(e,t){var n,a,o;if(t.singleton){var i=h++;n=f||(f=c(t)),a=m.bind(null,n,i,!1),o=m.bind(null,n,i,!0)}else n=c(t),a=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var o=r(n[a]);s[o].references--}for(var i=l(e,t),c=0;c<n.length;c++){var d=r(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=i}}}}},t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={inheritAttrs:!1,props:{duration:{type:[Number,Object],default:300},delay:{type:[Number,Object],default:0},group:Boolean,tag:{type:String,default:"span"},origin:{type:String,default:""},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"ease-out"}}}},computed:{componentType:function(){return this.group?"transition-group":"transition"},hooks:function(){return Object.assign({beforeEnter:this.beforeEnter,afterEnter:this.cleanUpStyles,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.cleanUpStyles},this.$listeners)}},methods:{beforeEnter:function(e){var t=this.duration.enter?this.duration.enter:this.duration;e.style.animationDuration=t+"ms";var n=this.delay.enter?this.delay.enter:this.delay;e.style.animationDelay=n+"ms",this.setStyles(e)},cleanUpStyles:function(e){var t=this;Object.keys(this.styles).forEach((function(n){t.styles[n]&&(e.style[n]="")})),e.style.animationDuration="",e.style.animationDelay=""},beforeLeave:function(e){var t=this.duration.leave?this.duration.leave:this.duration;e.style.animationDuration=t+"ms";var n=this.delay.leave?this.delay.leave:this.delay;e.style.animationDelay=n+"ms",this.setStyles(e)},leave:function(e){this.setAbsolutePosition(e)},setStyles:function(e){var t=this;this.setTransformOrigin(e),Object.keys(this.styles).forEach((function(n){var a=t.styles[n];a&&(e.style[n]=a)}))},setAbsolutePosition:function(e){return this.group&&(e.style.position="absolute"),this},setTransformOrigin:function(e){return this.origin&&(e.style.transformOrigin=this.origin),this}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } .fade-move { transition: transform .3s ease-out; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var t={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"fadeIn","move-class":"fade-move","leave-active-class":"fadeOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"fade-transition",mixins:[e]};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomIn { from { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } 50% { opacity: 1; } } .zoomIn { animation-name: zoomIn; } @keyframes zoomOut { from { opacity: 1; } 50% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } to { opacity: 0; } } .zoomOut { animation-name: zoomOut; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var a={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"zoomIn","move-class":"zoom-move","leave-active-class":"zoomOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"zoom-center-transition",mixins:[e]};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInX { from { opacity: 0; transform: scaleX(0); } 50% { opacity: 1; } } .zoomInX { animation-name: zoomInX; } @keyframes zoomOutX { from { opacity: 1; } 50% { opacity: 0; transform: scaleX(0); } to { opacity: 0; } } .zoomOutX { animation-name: zoomOutX; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var o={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"zoomInX","move-class":"zoom-move","leave-active-class":"zoomOutX"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"zoom-x-transition",props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}},mixins:[e]};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInY { from { opacity: 0; transform: scaleY(0); } 50% { opacity: 1; tranform: scaleY(1); } } .zoomInY { animation-name: zoomInY; } @keyframes zoomOutY { from { opacity: 1; } 50% { opacity: 0; transform: scaleY(0); } to { opacity: 0; } } .zoomOutY { animation-name: zoomOutY; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var i={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"zoomInY","move-class":"zoom-move","leave-active-class":"zoomOutY"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"zoom-y-transition",mixins:[e],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .collapse-move { transition: transform .3s ease-in-out; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var s={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"move-class":"collapse-move"},on:{"before-enter":e.beforeEnter,"after-enter":e.afterEnter,enter:e.enter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},"component",e.$attrs,!1),e.$listeners),[e._t("default")],2)},staticRenderFns:[],name:"collapse-transition",mixins:[e],methods:{transitionStyle:function(e){void 0===e&&(e=300);var t=e/1e3;return t+"s height ease-in-out, "+t+"s padding-top ease-in-out, "+t+"s padding-bottom ease-in-out"},beforeEnter:function(e){var t=this.duration.enter?this.duration.enter:this.duration;e.style.transition=this.transitionStyle(t),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height="0",e.style.paddingTop=0,e.style.paddingBottom=0,this.setStyles(e)},enter:function(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.height=e.scrollHeight+"px",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.height="",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter:function(e){e.style.transition="",e.style.height="",e.style.overflow=e.dataset.oldOverflow},beforeLeave:function(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.height=e.scrollHeight+"px",e.style.overflow="hidden",this.setStyles(e)},leave:function(e){var t=this.duration.leave?this.duration.leave:this.duration;0!==e.scrollHeight&&(e.style.transition=this.transitionStyle(t),e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0),this.setAbsolutePosition(e)},afterLeave:function(e){e.style.transition="",e.style.height="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" @keyframes scaleIn { from { opacity: 0; transform: scale(0) } to { opacity: 1; } } .scaleIn { animation-name: scaleIn; } @keyframes scaleOut { from { opacity: 1; } to { opacity: 0; transform: scale(0); } } .scaleOut { animation-name: scaleOut; } .scale-move { transition: transform .3s cubic-bezier(.25, .8, .50, 1); } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"scaleIn","move-class":"scale-move","leave-active-class":"scaleOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"scale-transition",mixins:[e],props:{origin:{type:String,default:"top left"},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideYIn { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; } } .slideYIn { animation-name: slideYIn; } @keyframes slideYOut { from { opacity: 1; } to { opacity: 0; transform: translateY(-15px); } } .slideYOut { animation-name: slideYOut; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var l={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,type:"animation","enter-active-class":"slideYIn","move-class":"slide-move","leave-active-class":"slideYOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"slide-y-up-transition",mixins:[e],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideYDownIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; } } .slideYDownIn { animation-name: slideYDownIn; } @keyframes slideYDownOut { from { opacity: 1; } to { opacity: 0; transform: translateY(15px); } } .slideYDownOut { animation-name: slideYDownOut; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var c={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"slideYDownIn","leave-active-class":"slideYDownOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"slide-y-down-transition",mixins:[e],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideXLeftIn { from { opacity: 0; transform: translateX(-15px); } to { opacity: 1; } } .slideXLeftIn { animation-name: slideXLeftIn; } @keyframes slideXLeftOut { from { opacity: 1; } to { opacity: 0; transform: translateX(-15px); } } .slideXLeftOut { animation-name: slideXLeftOut; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var d={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"slideXLeftIn","move-class":"slide-move","leave-active-class":"slideXLeftOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"slide-x-left-transition",mixins:[e],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideXRightIn { from { opacity: 0; transform: translateX(15px); } to { opacity: 1; } } .slideXRightIn { animation-name: slideXRightIn; } @keyframes slideXRightOut { from { opacity: 1; } to { opacity: 0; transform: translateX(15px); } } .slideXRightOut { animation-name: slideXRightOut; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var u={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"slideXRightIn","move-class":"slide-move","leave-active-class":"slideXRightOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"slide-x-right-transition",mixins:[e],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}},m={};function p(e,t){t&&t.components?t.components.forEach((function(t){return e.component(t.name,m[t.name])})):Object.keys(m).forEach((function(t){e.component(t,m[t])}))}m[t.name]=t,m[a.name]=a,m[o.name]=o,m[i.name]=i,m[s.name]=s,m[r.name]=r,m[l.name]=l,m[c.name]=c,m[d.name]=d,m[u.name]=u,"undefined"!=typeof window&&window.Vue&&window.Vue.use({install:p});const f={name:"Badge",props:{dim:{type:Boolean},label:{type:String}}};var h=n(379),v=n.n(h),y=n(153),g={insert:"head",singleton:!1};v()(y.Z,g);y.Z.locals;function b(e,t,n,a,o,i,s,r){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=r?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}const x=b(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-1 items-center"},[n("div",{staticClass:"flex-1",class:{dim:e.dim}},[e._t("default")],2),e._v(" "),e.label?n("div",{staticClass:"badge rounded-full text-xxs ml-2 self-start"},[e._v("\n        "+e._s(e.label)+"\n    ")]):e._e()])}),[],!1,null,"088ccfee",null).exports,_={name:"ResourceList",components:{Badge:x},props:{resources:{type:Array,required:!0},recursive:{type:Boolean,default:!1},rememberMenuState:{type:Boolean,required:!0}}};var T=n(736),C={insert:"head",singleton:!1};v()(T.Z,C);T.Z.locals;const O=b(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list-reset"},e._l(e.resources,(function(t){return n("li",{staticClass:"leading-tight pt-4 text-sm",class:{"ml-8":!e.recursive}},["group"===t.type?n("collapsible-resource-manager",{attrs:{data:t,"remember-menu-state":e.rememberMenuState,recursive:""}}):"external_link"===t.type?n("div",[n("a",{staticClass:"relative text-white text-left no-underline dim block",attrs:{href:t.url,target:t.target}},[n("Badge",{attrs:{label:t.badge}},[e._v("\n                    "+e._s(t.label)+"\n                ")]),e._v(" "),t.icon?n("div",{staticClass:"absolute resource-list-icon flex",domProps:{innerHTML:e._s(t.icon)}}):n("svg",{staticClass:"absolute resource-list-icon",attrs:{viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{attrs:{fill:"currentColor",d:"M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"}})])],1)]):n("router-link",{staticClass:"relative text-white text-left no-underline dim block",attrs:{to:t.router,target:t.target}},[t.icon?n("div",{staticClass:"absolute resource-list-icon flex",domProps:{innerHTML:e._s(t.icon)}}):e._e(),e._v(" "),n("Badge",{attrs:{label:t.badge}},[e._v("\n                "+e._s(t.label)+"\n            ")])],1)],1)})),0)}),[],!1,null,null,null).exports;const E={name:"CollapsibleIndicator",props:{expanded:{default:!0},visible:{default:!1}}};var w=n(109),S={insert:"head",singleton:!1};v()(w.Z,S);w.Z.locals;const z={name:"CollapsibleResourceManager",components:{CollapsibleIndicator:b(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("div",{staticClass:"absolute flex flex-auto collapsible-indicator"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[e.expanded?n("path",{attrs:{fill:"currentColor",d:"M16 12c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1z"}}):n("path",{attrs:{fill:"currentColor",d:"M13 11h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2V9c0-.55.45-1 1-1s1 .45 1 1v2z"}})])]):e._e()}),[],!1,null,null,null).exports,CollapseTransition:s,ResourceList:O,Badge:x},props:{data:{type:Object,required:!0},rememberMenuState:{type:Boolean,default:!1},recursive:{type:Boolean,default:!1}},data:function(){return{topExpanded:this.data.expanded,activeMenu:(e={},t=this.data.id,n=this.data.expanded,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)};var e,t,n},created:function(){var e=this;if(this.rememberMenuState){var t=localStorage.getItem(this.cacheKey);t&&(this.activeMenu[this.data.id]=JSON.parse(t)),this.$watch((function(){return e.activeMenu[e.data.id]}),(function(t){localStorage.setItem(e.cacheKey,t)}))}},computed:{isTopCollapsible:function(){return null!==this.data.expanded&&null===this.data.linkTo},isGroup:function(){return"group"===this.data.type},isTopLevel:function(){return"top_level"===this.data.type},cacheKey:function(){return"menu-state.".concat(this.data.id)},isEmpty:function(){return 0===this.data.resources.length},topLevelLink:function(){return this.data.linkTo?{is:"router-link",to:this.data.linkTo.router,target:this.data.linkTo.target,class:["cursor-pointer","dim"]}:{is:"h3"}}},methods:{toggleTopLevel:function(){this.isTopCollapsible&&(this.topExpanded=!this.topExpanded)},toggleGroup:function(e){this.activeMenu[e]=!this.activeMenu[e]}}};var k=n(257),I={insert:"head",singleton:!1};v()(k.Z,I);k.Z.locals;const B=b(z,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return!e.isEmpty||e.data.linkTo?n("div",{class:[e.data.type,{"mb-8":e.isTopLevel},"select-none"]},[e.data.label&&e.isTopLevel?n("component",e._b({staticClass:"flex flex-1 items-center font-normal text-white mb-2 text-base no-underline relative",class:{"cursor-pointer":e.isTopCollapsible},on:{click:e.toggleTopLevel}},"component",e.topLevelLink,!1),[e.data.icon?n("div",{staticClass:"sidebar-icon",domProps:{innerHTML:e._s(e.data.icon)}}):n("svg",{staticClass:"sidebar-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{fill:"var(--sidebar-icon)",d:"M3 1h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2H3c-1.1045695 0-2-.8954305-2-2V3c0-1.1045695.8954305-2 2-2zm0 2v4h4V3H3zm10-2h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2h-4c-1.1045695 0-2-.8954305-2-2V3c0-1.1045695.8954305-2 2-2zm0 2v4h4V3h-4zM3 11h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2H3c-1.1045695 0-2-.8954305-2-2v-4c0-1.1045695.8954305-2 2-2zm0 2v4h4v-4H3zm10-2h4c1.1045695 0 2 .8954305 2 2v4c0 1.1045695-.8954305 2-2 2h-4c-1.1045695 0-2-.8954305-2-2v-4c0-1.1045695.8954305-2 2-2zm0 2v4h4v-4h-4z"}})]),e._v(" "),n("Badge",{attrs:{label:e.data.badge,dim:e.isTopCollapsible||e.data.linkTo}},[n("span",{staticClass:"flex text-white sidebar-label"},[e._v("\n                "+e._s(e.data.label)+"\n            ")]),e._v(" "),n("CollapsibleIndicator",{attrs:{expanded:e.topExpanded,visible:e.isTopCollapsible}})],1)],1):e._e(),e._v(" "),n("CollapseTransition",{attrs:{duration:150}},[e.isTopLevel&&e.data.resources.length&&(!e.isTopCollapsible||e.topExpanded)?n("ResourceList",{staticClass:"resources-only",attrs:{resources:e.data.resources,recursive:e.recursive,"remember-menu-state":e.rememberMenuState}}):e._e()],1),e._v(" "),e.isGroup&&e.data.resources.length?[e.data.label?n("h4",{staticClass:"relative select-none ml-8 mt-4 text-xs text-white-50% uppercase tracking-wide cursor-pointer",on:{click:function(t){return e.toggleGroup(e.data.id)}}},[n("CollapsibleIndicator",{attrs:{expanded:e.activeMenu[e.data.id],visible:e.isTopCollapsible}}),e._v(" "),n("Badge",{attrs:{label:e.data.badge}},[e._v("\n                "+e._s(e.data.label)+"\n            ")])],1):e._e(),e._v(" "),n("CollapseTransition",{attrs:{duration:150}},[e.activeMenu[e.data.id]?n("ResourceList",{attrs:{resources:e.data.resources,recursive:e.recursive,"remember-menu-state":e.rememberMenuState}}):e._e()],1)]:e._e()],2):e._e()}),[],!1,null,"0d88868e",null).exports;Nova.booting((function(e,t,n){e.component("collapsible-resource-manager",B)}))})()})();