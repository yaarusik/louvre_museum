(()=>{"use strict";var e={669:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n",""]);const i=o},501:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,'.sources {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    height: 8.125em;\r\n    overflow: auto;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font: 300 1em "Fira Sans", sans-serif;\r\n}\r\n\r\n.source__item {\r\n    width: 10%;\r\n    min-width: 220px;\r\n    height: auto;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    /* border: 2px solid #05394e; */\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #222;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #000;\r\n    color: #000;\r\n    background: rgba(255, 255, 255, 1);\r\n\r\n    box-shadow: 0 0.5em 0.5em -0.4em rgba(255, 255, 255, 0.5);\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    white-space: nowrap;\r\n}\r\n\r\n@media (max-width: 631px) {\r\n    .sources {\r\n        justify-content: center;\r\n    }\r\n    .source__item {\r\n        width: 100%;\r\n        min-width: calc(150px - (220 - 150) * ((100vw - 220px) / (631 - 220)));\r\n    }\r\n}\r\n',""]);const i=o},767:(e,r,n)=>{n.d(r,{Z:()=>i});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id,'body {\r\n    color: #fff;\r\n    /* background: #17181c; */\r\n    font-family: sans-serif;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    border-radius: 3px;\r\n    width: 8px; /* ширина scrollbar */\r\n}\r\n::-webkit-scrollbar-track {\r\n    background: rgba(255, 255, 255, 0.6); /* цвет дорожки */\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #000; /* цвет плашки */\r\n    /* border: 1px solid grey; padding вокруг плашки */\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 40px;\r\n    font-weight: 800;\r\n}\r\n\r\nfooter {\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nfooter .copyright {\r\n    font-size: 14px;\r\n    color: #888;\r\n    text-align: center;\r\n}\r\nfooter .copyright a {\r\n    color: #999;\r\n}\r\nfooter .copyright a:hover {\r\n    color: #999;\r\n}\r\nfooter .copyright:before {\r\n    content: "©";\r\n}\r\n\r\n@media (max-width: 631px) {\r\n    header h1 {\r\n        text-align: center;\r\n    }\r\n}\r\n\r\nbody {\r\n    animation: scroll 120s linear infinite;\r\n    background: url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1.footerixid=eyJhcHBfaWQiOjEyMDd9.footerauto=format.footerfit=crop.footerw=3450.footerq=80"),\r\n        #111111;\r\n\r\n    height: 100vh;\r\n\r\n    perspective: 1000px;\r\n    perspective-origin: 50% 50%;\r\n}\r\n\r\n@keyframes scroll {\r\n    100% {\r\n        background-position: 0px -3000px;\r\n    }\r\n}\r\n\r\n@media (prefers-reduced-motion) {\r\n    body {\r\n        animation: scroll 200s linear infinite;\r\n    }\r\n}\r\n\r\n.footer {\r\n}\r\n\r\n.footer__down {\r\n}\r\n\r\n.footer__row {\r\n    color: #999;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    column-gap: 20px;\r\n}\r\n\r\n.footer__end {\r\n}\r\n\r\n.footer__year {\r\n}\r\n\r\n.footer__rsschool {\r\n}\r\n\r\n.footer__username a {\r\n    color: #999;\r\n    text-decoration: none;\r\n}\r\n',""]);const i=o},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);t&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),r.push(c))}},r}},242:(e,r,n)=>{n.r(r),n.d(r,{default:()=>s});var t=n(379),o=n.n(t),i=n(669);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},595:(e,r,n)=>{n.r(r),n.d(r,{default:()=>s});var t=n(379),o=n.n(t),i=n(501);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},427:(e,r,n)=>{n.r(r),n.d(r,{default:()=>s});var t=n(379),o=n.n(t),i=n(767);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},379:(e,r,n)=>{var t,o=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),i=[];function s(e){for(var r=-1,n=0;n<i.length;n++)if(i[n].identifier===e){r=n;break}return r}function a(e,r){for(var n={},t=[],o=0;o<e.length;o++){var a=e[o],c=r.base?a[0]+r.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:_(f,r),references:1}),t.push(d)}return t}function c(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var i=n.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(r)}return r}var l,d=(l=[],function(e,r){return l[e]=r,l.filter(Boolean).join("\n")});function u(e,r,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(r,o);else{var i=document.createTextNode(o),s=e.childNodes;s[r]&&e.removeChild(s[r]),s.length?e.insertBefore(i,s[r]):e.appendChild(i)}}function f(e,r,n){var t=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var p=null,m=0;function _(e,r){var n,t,o;if(r.singleton){var i=m++;n=p||(p=c(r)),t=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=c(r),t=f.bind(null,n,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=a(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var o=s(n[t]);i[o].references--}for(var c=a(e,r),l=0;l<n.length;l++){var d=s(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}},717:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=t(n(842)),i=n(527);r.default=class{constructor(){this.controller=new o.default,this.view=new i.AppView}start(){var e;null===(e=document.querySelector(".sources"))||void 0===e||e.addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),this.controller.getSources((e=>this.view.drawSources(e)))}}},853:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=t(n(24));class i extends o.default{constructor(){super(" https://nodenews.herokuapp.com/",{apiKey:"b4d44c5499ce43c4820fa04a9598f1f0"})}}r.default=i},842:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=t(n(853));class i extends o.default{getSources(e){super.getResp({endpoint:"sources"},e)}getNews(e,r){let n=e.target;const t=e.currentTarget;for(;n!==t;){if(n.classList.contains("source__item")){const e=n.getAttribute("data-source-id");return void(t.getAttribute("data-source")!==e&&(t.setAttribute("data-source",e),super.getResp({endpoint:"everything",options:{sources:e}},r)))}n=n.parentNode}}}r.default=i},24:(e,r)=>{var n;Object.defineProperty(r,"__esModule",{value:!0}),function(e){e.GET="GET",e.POST="POST"}(n||(n={})),r.default=class{constructor(e,r){this.baseLink=e,this.options=r}getResp({endpoint:e,options:r={}},t=(()=>{console.error("No callback for GET response")})){this.load(n.GET,e,t,r)}errorHandler(e){if(!e.ok)throw 401!==e.status&&404!==e.status||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,r){const n=Object.assign(Object.assign({},this.options),e);let t=`${this.baseLink}${r}?`;return Object.keys(n).forEach((function(e){t+=`${e}=${n[e]}&`})),t.slice(0,-1)}load(e,r,n,t){fetch(this.makeUrl(t,r),{method:e}).then(this.errorHandler).then((e=>e.json())).then((e=>n(e))).catch((e=>console.error(e)))}}},527:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.AppView=void 0;const o=t(n(798)),i=t(n(53));class s{constructor(){this.news=new o.default,this.sources=new i.default}drawNews(e){const r=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(r)}drawSources(e){const r=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(r)}}r.AppView=s,r.default=s},798:(e,r,n)=>{Object.defineProperty(r,"__esModule",{value:!0}),n(242),r.default=class{draw(e){var r;const n=e.length>=10?e.filter(((e,r)=>r<10)):e,t=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp");o&&(n.forEach(((e,r)=>{var n;const i=o.content.cloneNode(!0);r%2&&(null===(n=i.querySelector(".news__item"))||void 0===n||n.classList.add("alt")),i.querySelector(".news__meta-photo").style.backgroundImage=`url(${e.urlToImage||"img/news_placeholder.jpg"})`,i.querySelector(".news__meta-author").textContent=e.author||e.source.name,i.querySelector(".news__meta-date").textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"),i.querySelector(".news__description-title").textContent=e.title,i.querySelector(".news__description-source").textContent=e.source.name,i.querySelector(".news__description-content").textContent=e.description,i.querySelector(".news__read-more a").setAttribute("href",e.url),t.append(i)})),document.querySelector(".news").innerHTML="",null===(r=document.querySelector(".news"))||void 0===r||r.appendChild(t))}}},53:(e,r,n)=>{Object.defineProperty(r,"__esModule",{value:!0}),n(595),r.default=class{draw(e){var r,n;const t=document.createDocumentFragment(),o=document.querySelector("#sourceItemTemp");e.forEach((e=>{const r=o.content.cloneNode(!0);r.querySelector(".source__item-name").textContent=e.name,r.querySelector(".source__item").setAttribute("data-source-id",e.id),t.append(r)})),""===(null===(r=document.querySelector(".sources"))||void 0===r?void 0:r.textContent)&&(null===(n=document.querySelector(".sources"))||void 0===n||n.append(t))}}},607:function(e,r,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=t(n(717));n(427),(new o.default).start()}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(607)})();