!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in l)return l[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return l[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=a);var r=a("5IjG7"),t=a("dwxJN");console.log(t.galleryItems);const i=document.querySelector(".gallery"),d=t.galleryItems.map((({preview:e,original:n,description:l})=>`<li class="gallery__item listStyle = 'none'">\n        <a class="gallery__item" href="${n}" data-lightbox="lbox" onclick="return false">\n            <img \n            class="gallery__image"\n            loading="lazy"\n            src='${e}'\n            data-source="${n}"\n            alt="${l}"\n            \n            >\n            </a>\n            </li>\n        `)).join("");i.insertAdjacentHTML("beforeend",d);new(e(r))(".gallery a",{captionsData:"alt",captionDelay:250});document.querySelectorAll("a").forEach((e=>{e.style.boxShadow="none"}))}();
//# sourceMappingURL=01-gallery.b9997b04.js.map
