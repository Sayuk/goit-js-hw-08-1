!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return d.Date.now()};function b(t,e,n){var o,r,f,u,a,c,l=0,d=!1,s=!1,b=!0;if("function"!=typeof t)throw new TypeError(i);function j(e){var n=o,i=r;return o=r=void 0,l=e,u=t.apply(i,n)}function h(t){return l=t,a=setTimeout(T,e),d?j(t):u}function w(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=f}function T(){var t=y();if(w(t))return O(t);a=setTimeout(T,function(t){var n=e-(t-c);return s?p(n,f-(t-l)):n}(t))}function O(t){return a=void 0,b&&o?j(t):(o=r=void 0,u)}function x(){var t=y(),n=w(t);if(o=arguments,r=this,c=t,n){if(void 0===a)return h(c);if(s)return a=setTimeout(T,e),j(c)}return void 0===a&&(a=setTimeout(T,e)),u}return e=m(e)||0,g(n)&&(d=!!n.leading,f=(s="maxWait"in n)?v(m(n.maxWait)||0,e):f,b="trailing"in n?!!n.trailing:b),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},x.flush=function(){return void 0===a?u:O(y())},x}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=f.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError(i);return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(t,e,{leading:o,maxWait:e,trailing:r})};const j=document.querySelector(".feedback-form");j.addEventListener("input",t(e)((function(t){h[t.target.name]=t.target.value,localStorage.setItem(w,JSON.stringify(h))}),500)),j.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem(w)}));const h={},w="feedback-form-state"}();
//# sourceMappingURL=03-feedback.e03ea74e.js.map
