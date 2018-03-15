this.wp=this.wp||{},this.wp.hooks=function(n){function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var e={};return r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},r.p="",r(r.s=571)}({1168:function(n,r,e){"use strict";function t(){var n={},r={};return{addAction:Object(o.a)(n),addFilter:Object(o.a)(r),removeAction:Object(c.a)(n),removeFilter:Object(c.a)(r),hasAction:Object(i.a)(n),hasFilter:Object(i.a)(r),removeAllActions:Object(c.a)(n,!0),removeAllFilters:Object(c.a)(r,!0),doAction:Object(u.a)(n),applyFilters:Object(u.a)(r,!0),currentAction:Object(a.a)(n),currentFilter:Object(a.a)(r),doingAction:Object(s.a)(n),doingFilter:Object(s.a)(r),didAction:Object(d.a)(n),didFilter:Object(d.a)(r),actions:n,filters:r}}var o=e(1169),c=e(1170),i=e(1171),u=e(1172),a=e(1173),s=e(1174),d=e(1175);r.a=t},1169:function(n,r,e){"use strict";function t(n){return function(r,e,t){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;if(Object(c.a)(r)&&Object(o.a)(e)){if("function"!=typeof t)return void console.error("The hook callback must be a function.");if("number"!=typeof u)return void console.error("If specified, the hook priority must be a number.");var a={callback:t,priority:u,namespace:e};if(n.hasOwnProperty(r)){for(var s=n[r].handlers,d=0;d<s.length&&!(s[d].priority>u);)d++;s.splice(d,0,a),(n.__current||[]).forEach(function(n){n.name===r&&n.currentIndex>=d&&n.currentIndex++})}else n[r]={handlers:[a],runs:0};"hookAdded"!==r&&Object(i.doAction)("hookAdded",r,e,t,u)}}}var o=e(646),c=e(498),i=e(571);r.a=t},1170:function(n,r,e){"use strict";function t(n,r){return function(e,t){if(Object(c.a)(e)&&(r||Object(o.a)(t))){if(!n.hasOwnProperty(e))return 0;var u=0;if(r)u=n[e].handlers.length,n[e]={runs:n[e].runs,handlers:[]};else for(var a=n[e].handlers,s=a.length-1;s>=0;s--)!function(r){a[r].namespace===t&&(a.splice(r,1),u++,(n.__current||[]).forEach(function(n){n.name===e&&n.currentIndex>=r&&n.currentIndex--}))}(s);return"hookRemoved"!==e&&Object(i.doAction)("hookRemoved",e,t),u}}}var o=e(646),c=e(498),i=e(571);r.a=t},1171:function(n,r,e){"use strict";function t(n){return function(r){return n.hasOwnProperty(r)?n[r].handlers.length:0}}r.a=t},1172:function(n,r,e){"use strict";function t(n,r){return function(e){if(Object(o.a)(e)){n.hasOwnProperty(e)||(n[e]={runs:0,handlers:[]});for(var t=n[e].handlers,c=arguments.length,i=Array(c>1?c-1:0),u=1;u<c;u++)i[u-1]=arguments[u];if(!t.length)return r?i[0]:void 0;var a={name:e,currentIndex:0};n.__current=n.__current||[],n.__current.push(a),n[e].runs++;for(var s=i[0];a.currentIndex<t.length;){s=t[a.currentIndex].callback.apply(null,i),r&&(i[0]=s),a.currentIndex++}return n.__current.pop(),r?s:void 0}}}var o=e(498);r.a=t},1173:function(n,r,e){"use strict";function t(n,r){return function(){return n.__current&&n.__current.length?n.__current[n.__current.length-1].name:null}}r.a=t},1174:function(n,r,e){"use strict";function t(n){return function(r){return void 0===r?void 0!==n.__current[0]:!!n.__current[0]&&r===n.__current[0].name}}r.a=t},1175:function(n,r,e){"use strict";function t(n){return function(r){if(Object(o.a)(r))return n.hasOwnProperty(r)&&n[r].runs?n[r].runs:0}}var o=e(498);r.a=t},498:function(n,r,e){"use strict";function t(n){return"string"!=typeof n||""===n?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}r.a=t},571:function(n,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),e.d(r,"addAction",function(){return c}),e.d(r,"addFilter",function(){return i}),e.d(r,"removeAction",function(){return u}),e.d(r,"removeFilter",function(){return a}),e.d(r,"hasAction",function(){return s}),e.d(r,"hasFilter",function(){return d}),e.d(r,"removeAllActions",function(){return l}),e.d(r,"removeAllFilters",function(){return f}),e.d(r,"doAction",function(){return h}),e.d(r,"applyFilters",function(){return p}),e.d(r,"currentAction",function(){return b}),e.d(r,"currentFilter",function(){return v}),e.d(r,"doingAction",function(){return A}),e.d(r,"doingFilter",function(){return m}),e.d(r,"didAction",function(){return _}),e.d(r,"didFilter",function(){return O}),e.d(r,"actions",function(){return j}),e.d(r,"filters",function(){return y});var t=e(1168);e.d(r,"createHooks",function(){return t.a});var o=Object(t.a)(),c=o.addAction,i=o.addFilter,u=o.removeAction,a=o.removeFilter,s=o.hasAction,d=o.hasFilter,l=o.removeAllActions,f=o.removeAllFilters,h=o.doAction,p=o.applyFilters,b=o.currentAction,v=o.currentFilter,A=o.doingAction,m=o.doingFilter,_=o.didAction,O=o.didFilter,j=o.actions,y=o.filters},646:function(n,r,e){"use strict";function t(n){return"string"!=typeof n||""===n?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}r.a=t}});