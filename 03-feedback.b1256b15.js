!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function m(t,e,n){var o,i,f,a,u,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof t)throw new TypeError(r);function j(e){var n=o,r=i;return o=i=void 0,l=e,a=t.apply(r,n)}function T(t){return l=t,u=setTimeout(w,e),s?j(t):a}function h(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=f}function w(){var t=g();if(h(t))return O(t);u=setTimeout(w,function(t){var n=e-(t-c);return d?p(n,f-(t-l)):n}(t))}function O(t){return u=void 0,m&&o?j(t):(o=i=void 0,a)}function S(){var t=g(),n=h(t);if(o=arguments,i=this,c=t,n){if(void 0===u)return T(c);if(d)return u=setTimeout(w,e),j(c)}return void 0===u&&(u=setTimeout(w,e)),a}return e=y(e)||0,b(n)&&(s=!!n.leading,f=(d="maxWait"in n)?v(y(n.maxWait)||0,e):f,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=c=i=u=void 0},S.flush=function(){return void 0===u?a:O(g())},S}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=f.test(t);return n||a.test(t)?u(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(t,e,{leading:o,maxWait:e,trailing:i})};const j=document.querySelector(".feedback-form");j.addEventListener("input",t(e)((function(t){T[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(formData))}),500)),j.addEventListener("submit",(function(t){t.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));const T={}}();
//# sourceMappingURL=03-feedback.b1256b15.js.map
