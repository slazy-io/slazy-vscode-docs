(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8617:function(n,e,t){"use strict";t.d(e,{c:function(){return r}});var r,o=t(809),i=t.n(o),c=t(2447),u=t(6595),a=new(t(2722).E)("https://script.google.com/macros/s/AKfycbybP2b0HMk4IV6JB7w3_AJGpzz8V0B-N_HlelwbDQ3RPnxewEZVCIYfZgLMFMifqyGFbg/exec");function s(n,e){return n||e}!function(n){var e=null;function t(){return(t=(0,c.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o();case 2:return e=n.sent,window.onbeforeunload=function(){r.leave()},n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(){return f.apply(this,arguments)}function f(){return(f=(0,c.Z)(i().mark((function n(){var t,r,o,c,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=2;break}return n.abrupt("return",e);case 2:return n.next=4,u.ZP.load();case 4:return o=n.sent,n.next=7,o.get();case 7:return c=n.sent,a={id:c.visitorId,timezone:s(c.components.timezone.value,""),platform:s(c.components.platform.value,""),languages:s(null===(t=c.components.languages.value)||void 0===t?void 0:t.join(";"),""),vendor:s(c.components.vendor.value,""),vendorFlavors:s(null===(r=c.components.vendorFlavors.value)||void 0===r?void 0:r.join(";"),"")},e=a,n.abrupt("return",a);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}n.initialize=function(){return t.apply(this,arguments)},n.getVisitor=o;n.enterPage=function(n){if(e){var t=Object.assign({},e,{visitorId:e.id,action:"EnterPage",pageName:n,referer:document.referrer,location:document.location});a.postRow(new FormData,t)}},n.leave=function(){if(e){var n=Object.assign({},e,{visitorId:e.id,action:"Leave",referer:document.referrer,location:document.location});a.postRow(new FormData,n)}},n.action=function(n,t){e&&console.log("Action :",e,n,t)},n.followLink=function(n){e&&console.log("Link :",e,n)}}(r||(r={}))},2722:function(n,e,t){"use strict";t.d(e,{E:function(){return a}});var r=t(809),o=t.n(r),i=t(2447),c=t(4047),u=t(2700),a=function(){function n(e){(0,c.Z)(this,n),this.url=e}return(0,u.Z)(n,[{key:"postRow",value:function(){var n=(0,i.Z)(o().mark((function n(e,t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t&&Object.keys(t).forEach((function(n){e.append(n,t[n])})),n.next=3,fetch("".concat(this.url),{method:"POST",body:e});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()}]),n}()},3173:function(n,e,t){"use strict";function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.r(e),t.d(e,{default:function(){return v}});var o=t(5893),i=t(809),c=t.n(i),u=t(2447),a=t(9227),s=t(7294),f=(t(8450),t(1614),t(8617));function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var v=function(n){var e=n.Component,t=n.pageProps,r=s.useState(),i=(0,a.Z)(r,2),p=i[0],v=i[1];s.useEffect((function(){d()}),[]),s.useEffect((function(){p&&(null===p||void 0===p?void 0:p.id.length)>0&&document.addEventListener("click",(function(n){var e=n.target,t=null===e||void 0===e?void 0:e.getAttribute("href");t&&f.c.followLink(t)}))}),[p]);var d=function(){var n=(0,u.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.c.initialize();case 2:e=n.sent,v(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,o.jsx)(e,l(l({},t),{},{visitor:p}))}},6363:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(3173)}])},8450:function(){},1614:function(){}},function(n){var e=function(e){return n(n.s=e)};n.O(0,[774,351,813],(function(){return e(6363),e(2441)}));var t=n.O();_N_E=t}]);