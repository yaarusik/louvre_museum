(()=>{"use strict";const e=document.querySelector(".end__title"),t={ru:{good:"Поздравляю! Ты выйграл :)",notbad:"У тебя хороший уровень!",bad:"Ты можешь лучше :)"},en:{good:"Congratulations! You won :)",notbad:"You have a good level!",bad:"You can better :)"}},s=e=>Math.floor(Math.random()*e),n=e=>e.sort((()=>Math.random()-.5)),a=(s,n)=>{n<=3?e.textContent=t[s].bad:n>3&&n<=7?e.textContent=t[s].notbad:n>7&&(e.textContent=t[s].good)};let c;const i=document.querySelector(".pictures__timer");let o=[];const r=document.querySelector(".question__pictures"),d=document.querySelector(".finish"),l=document.querySelector(".popup__correct-up"),u=document.querySelectorAll(".down__results"),_=document.querySelectorAll(".down__reaction"),m=document.querySelector(".change__title");let v,g,h,p,y,L=new Set,S=0,f=[];const E=e=>{l.innerHTML=`\n  <div class="popup__correct">\n            <div class="container">\n              <div class="correct__body">\n                <div class="correct__img">\n                  <div class="correct__logo ${e} background__size"></div>\n                  <img class="opacity__img" onload="this.style.opacity='1'" src="./images/assets/img/${o[v].imageNum}.jpg" alt="img" />\n                </div>\n                <div class="correct__name">${o[v].name}</div>\n                <div class="correct__author"> ${o[v].author}, ${o[v].year}</div>\n                <button class="correct__btn">Next</button>\n              </div>\n            </div>\n          </div>\n  `},q=()=>{const e=document.querySelectorAll(".indicators__round");f.forEach(((t,s)=>{"1"===t?e[s].classList.add("correct__answer"):e[s].classList.add("uncorrect__answer")}))},w=e=>{e.target.alt===o[v].imageNum?(e.target.classList.add("correct__answer"),f.push("1"),q(),E("yes"),lt.rigthAnswer()):(f.push("0"),e.target.classList.add("uncorrect__answer"),q(),E("no"),lt.wrongAnswer()),lt.playAudio(),clearInterval(c)},b=async(e,t,a)=>{let c;"number"==typeof t&&(g=t),v=e,c="en"===a?await fetch("https://raw.githubusercontent.com/yaarusik/image-data/master/imagesEn.json"):await fetch("https://raw.githubusercontent.com/yaarusik/image-data/master/images.json"),h=await c.json(),o=h.slice(h.length/2,h.length-1),(e=>{r.innerHTML=`\n  <div class="block__indicators">\n  <span class="indicators__round"></span>\n  <span class="indicators__round"></span>\n  <span class="indicators__round"></span>\n  <span class="indicators__round"></span>\n  <span class="indicators__round"></span>\n  <span class="indicators__round"></span>\n  <span class="indicators__round"></span>\n  <span class="indicators__round"></span>\n  <span class="indicators__round"></span>\n  <span class="indicators__round"></span>\n</div>\n<div class="block__variants opacity__img" onload="this.style.opacity='1'>\n  <div class="variants__body">\n    <div class="variants__row pictures__row">\n      ${(e=>{for(m.innerHTML=o[e].author,L.add(o[e].imageNum);L.size<4;)L.add(h[s(h.length-1)].imageNum);let t=[...L];return t=n(t),t.map((e=>`<div class="pictures__answer">\n                  <img class="img__opacity" onload="this.style.opacity='1'" src="./images/assets/img/${e}.jpg" alt="${e}" />\n               </div>`)).join("")})(e)} \n    </div>\n  </div>\n</div>\n  `,e&&q(),L=new Set,p=document.querySelectorAll(".pictures__answer"),p.forEach((e=>e.addEventListener("click",w)))})(e)},A=()=>{c=setInterval((()=>{i.innerHTML=+y<11?"00 : 0"+(y-1):"00 : "+(y-1),y-=1,y||(clearInterval(c),f.push("0"),q(),E("no"),lt.wrongAnswer(),lt.playAudio())}),1e3)},k=e=>{switch(e){case"on":y=Te.value.padStart(2,"0"),A();break;case"continue":A();break;default:i.innerHTML=""}};l.addEventListener("click",(e=>{e.target.classList.contains("correct__btn")&&(v+=1,9===S?((()=>{let e=f.reduce(((e,t)=>+e+ +t),0);var t;oe.classList.add("active"),a(Ie,e),lt.endGame(),d.textContent=`${e}`,t=e,u[g].innerHTML=`\n    ${t} / ${ke}\n  `})(),O(g,f,"picture"),_[g].classList.add("add__bg"),lt.playAudio()):(i.innerHTML=`00 : ${Te.value.padStart(2,"0")}`,b(v,void 0,Ie),k(_t),S+=1),l.innerHTML="")}));const $=document.querySelectorAll(".button__score"),C=document.querySelector(".score__body"),T=document.querySelectorAll(".down__common"),x=document.querySelectorAll(".local__indicator");let I=$.length/2,M=JSON.parse(localStorage.getItem("artistScore"))||[],H=JSON.parse(localStorage.getItem("pictureScore"))||[],N=JSON.parse(localStorage.getItem("scoreIndex"))||[];const j=(e,t)=>{N.push({index:e,results:t}),ut("scoreIndex",JSON.stringify(N)),$[e].classList.add("show")},O=(e,t,s)=>{let n=` \n   <div class="score__body">\n   <div class="score__logo background__size"></div>\n   <div class="score__header">\n       <div class="score__title">Score</div>\n     </div>\n     <div class="score__picture">\n         ${((e,t,s)=>{let n,a=e,c="",i=0;for(;i<ke;)n="1"===t[i]?'class ="add__bg"':"",c+="picture"===s?`\n                  <div class="picture__one">\n                  <img ${n} src="./images/assets/img/${o[a].imageNum}.jpg" alt="img" />\n                <div class="img__row">\n                <div class="img__title">\n                ${o[a].author}\n                </div>\n                <div class="img__subtitle">\n                ${o[a].name}\n                </div>\n                <div class="img__year">\n                ${o[a].year}\n                </div>\n                </div>\n                        </div>`:`\n                  <div class="picture__one">\n                  <img ${n} src="./images/assets/img/${U[a].imageNum}.jpg" alt="img" />\n                  <div class="img__row">\n                  <div class="img__title">\n                  ${U[a].author}\n                  </div>\n                  <div class="img__subtitle">\n                  ${U[a].name}\n                  </div>\n                  <div class="img__year">\n                  ${U[a].year}\n                  </div>\n                  </div>\n                  </div>`,a+=1,i+=1;return c})(e*ke,t,s)}\n     </div>\n   </div>\n`;"picture"===s?(H.push({page:n,number:e}),j(e+I,t),ut("pictureScore",JSON.stringify(H))):(M.push({page:n,number:e}),j(e,t),ut("artistScore",JSON.stringify(M)))};$.forEach(((e,t)=>{e.addEventListener("click",(e=>{e.stopPropagation(),"artist"===re?(ue.classList.add("hide"),de.classList.remove("hide")):"picture"===re&&(_e.classList.add("hide"),de.classList.remove("hide")),((e,t)=>{let s=e;if("picture"===t){s-=I;let e=H.filter((e=>e.number===s));C.innerHTML=e[e.length-1].page}else{let t=M.filter((t=>t.number===e));C.innerHTML=t[t.length-1].page}document.querySelectorAll(".picture__one").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("description__visible"),e.children[0].classList.toggle("descriptin__img-hidden"),e.children[1].classList.toggle("description__title-visible")}))})),document.querySelectorAll(".score__logo").forEach((e=>{e.addEventListener("click",(()=>{de.classList.add("hide"),ce.classList.remove("hide")}))}))})(t,re)}))})),window.onload=()=>{$.forEach(((e,t)=>{N.forEach((s=>{if(s.index===t){e.classList.add("show"),x[t].classList.add("add__bg");let n=s.results.reduce(((e,t)=>+e+ +t),0);T[t].innerHTML=`${n} / ${ke}`}}))})),document.querySelectorAll(".score__logo").forEach((e=>{e.addEventListener("click",(()=>{de.classList.add("hide"),ce.classList.remove("hide")}))}))};let R,U=[];const G=document.querySelector(".questions__block"),V=document.querySelector(".finish"),z=document.querySelector(".popup__correct-up"),J=document.querySelectorAll(".down__score"),Q=document.querySelectorAll(".down__test");let Y,Z,F,P,W,D=new Set,B=0,K=[];const X=()=>{const e=document.querySelectorAll(".indicators__circle");K.forEach(((t,s)=>{"1"===t?e[s].classList.add("correct__answer"):e[s].classList.add("uncorrect__answer")}))},ee=e=>{z.innerHTML=`\n  <div class="popup__correct opacity__img" onload="this.style.opacity='1'"">\n            <div class="container">\n              <div class="correct__body">\n                <div class="correct__img">\n                  <div class="correct__logo ${e} background__size"></div>\n                  <img class="opacity__img" onload="this.style.opacity='1'" src="./images/assets/img/${Y}.jpg" alt="img" />\n                </div>\n                <div class="correct__name">${U[Y].name}</div>\n                <div class="correct__author"> ${U[Y].author}, ${U[Y].year}</div>\n                <button class="correct__button">Next</button>\n              </div>\n            </div>\n          </div>\n  `},te=e=>{e.target.innerHTML===U[Y].author?(e.target.classList.add("correct__answer"),K.push("1"),X(),ee("yes"),lt.rigthAnswer()):(K.push("0"),e.target.classList.add("uncorrect__answer"),X(),ee("no"),lt.wrongAnswer()),lt.playAudio(),clearInterval(R)},se=()=>{R=setInterval((()=>{xe.innerHTML=+W<11?"00 : 0"+(W-1):"00 : "+(W-1),W-=1,W||(clearInterval(R),K.push("0"),X(),ee("no"),lt.wrongAnswer(),lt.playAudio())}),1e3)},ne=e=>{switch(e){case"on":W=Te.value.padStart(2,"0"),se();break;case"continue":se();break;default:xe.innerHTML=""}},ae=async(e,t,a)=>{let c;"number"==typeof t&&(Z=t),Y=e,c="en"===a?await fetch("https://raw.githubusercontent.com/yaarusik/image-data/master/imagesEn.json"):await fetch("https://raw.githubusercontent.com/yaarusik/image-data/master/images.json"),F=await c.json(),U=F.slice(0,F.length/2),(e=>{G.innerHTML=`\n  <div class="questions__block opacity__img" onload="this.style.opacity='1'">\n  <div class="block__picture">\n    <img class="opacity__img" onload="this.style.opacity='1'" src="https://raw.githubusercontent.com/yaarusik/image-data/master/img/${e}.jpg" alt="" />\n  </div>\n  <div class="block__indicators">\n    <span class="indicators__circle"></span>\n    <span class="indicators__circle"></span>\n    <span class="indicators__circle"></span>\n    <span class="indicators__circle"></span>\n    <span class="indicators__circle"></span>\n    <span class="indicators__circle"></span>\n    <span class="indicators__circle"></span>\n    <span class="indicators__circle"></span>\n    <span class="indicators__circle"></span>\n    <span class="indicators__circle"></span>\n  </div>\n  <div class="block__variants">\n    <div class="variants__body">\n      <div class="variants__row">\n       ${(e=>{for(D.add(U[e].author);D.size<4;)D.add(F[s(F.length-1)].author);let t=[...D];return t=n(t),t.map((e=>`<div class="variants__answer">${e}</div>`)).join("")})(e)}\n      </div>\n    </div>\n  </div>\n  </div> \n  `,e&&X(),D=new Set,P=document.querySelectorAll(".variants__answer"),P.forEach((e=>e.addEventListener("click",te)))})(e)};z.addEventListener("click",(e=>{e.target.classList.contains("correct__button")&&(Y+=1,9===B?((()=>{let e=K.reduce(((e,t)=>+e+ +t),0);var t;oe.classList.add("active"),a(Ie,e),lt.endGame(),V.textContent=`${e}`,t=e,J[Z].innerHTML=`\n  ${t} / ${ke}\n`})(),O(Z,K),Q[Z].classList.add("add__bg"),lt.playAudio()):(xe.innerHTML=`00 : ${Te.value.padStart(2,"0")}`,ae(Y,void 0,Ie),ne(_t),B+=1),z.innerHTML="")}));const ce=document.querySelector(".start"),ie=document.querySelector(".setting"),oe=document.querySelector(".popup__end");let re=!1;const de=document.querySelector(".score"),le=document.querySelectorAll(".main__settings"),ue=document.querySelector(".category__one"),_e=document.querySelector(".category__two"),me=document.querySelectorAll(".main__picture"),ve=document.querySelectorAll(".main__author"),ge=document.querySelectorAll(".down__row"),he=document.querySelectorAll(".questions__close"),pe=document.querySelectorAll(".menu__home"),ye=document.querySelector(".settings__close"),Le=document.querySelector(".score__row"),Se=document.querySelectorAll(".down__pictures"),fe=document.querySelector(".picture__questions"),Ee=document.querySelectorAll(".category__setting"),qe=document.querySelector(".questions"),we=document.querySelector(".popup__cancel"),be=document.querySelector(".popup__no"),Ae=document.querySelectorAll(".popup__yes");let ke=10;const $e=()=>{ce.classList.add("hide"),ie.classList.remove("hide")};Ee.forEach((e=>{e.addEventListener("click",(()=>{_e.classList.add("hide"),ue.classList.add("hide"),ie.classList.remove("hide")}))})),le.forEach((e=>{e.addEventListener("click",$e)})),ye.addEventListener("click",(()=>{"artist"===re?(ue.classList.remove("hide"),ie.classList.add("hide")):"picture"===re?(_e.classList.remove("hide"),ie.classList.add("hide")):(ce.classList.remove("hide"),ie.classList.add("hide"))})),ve.forEach((e=>{e.addEventListener("click",(()=>{re="artist",ce.classList.add("hide"),ue.classList.remove("hide"),clearInterval(R),clearInterval(c)}))})),me.forEach((e=>{e.addEventListener("click",(()=>{re="picture",ce.classList.add("hide"),_e.classList.remove("hide"),clearInterval(R),clearInterval(c)}))})),ge.forEach(((e,t)=>{e.addEventListener("click",(()=>{ue.classList.add("hide"),qe.classList.remove("hide"),ae(t*ke,t,Ie),ne(_t)}))})),Se.forEach(((e,t)=>{e.addEventListener("click",(()=>{_e.classList.add("hide"),fe.classList.remove("hide"),b(t*ke,t,Ie),k(_t)}))})),he.forEach((e=>{e.addEventListener("click",(()=>{we.classList.add("active"),clearInterval(R),clearInterval(c)}))})),pe.forEach((e=>{e.addEventListener("click",(()=>{re=!1,ue.classList.add("hide"),_e.classList.add("hide"),ce.classList.remove("hide")}))})),Ae.forEach((e=>{e.addEventListener("click",(()=>{xe.innerHTML=`00 : ${Te.value.padStart(2,"0")}`,i.innerHTML=`00 : ${Te.value.padStart(2,"0")}`,"artist"===re?(qe.classList.add("hide"),ue.classList.remove("hide"),B=0,K=[]):"picture"===re&&(fe.classList.add("hide"),_e.classList.remove("hide"),S=0,f=[]),clearInterval(R),clearInterval(c),we.classList.remove("active"),oe.classList.remove("active")}))})),be.addEventListener("click",(()=>{we.classList.remove("active"),"artist"===re?ne("continue"):k("continue")})),Le.addEventListener("click",(()=>{"artist"===re?(de.classList.add("hide"),ue.classList.remove("hide")):"picture"===re&&(de.classList.add("hide"),_e.classList.remove("hide"))}));const Ce={ru:["Квиз по художникам","Квиз по картинам","НАСТРОЙКИ","ЯЗЫК РУС / АНГЛ","ГРОМКОСТЬ","ИГРА НА ВРЕМЯ","ВРЕМЯ НА ВОПРОС","сек","СОХРАНИТЬ","Разработчик: Руслан Вильданов","Категории","РАУНД","ДОМОЙ","Кто автор этой картины?","Какую из этих картин написал ","Вы уверены, что хотите завершить тест","Да","Отмена","Результаты","Назад к категориям","Тип игры: угадать художника по картине","Тип игры: угадать картину по имени её автора"],en:["ARTIST QUIZ","PICTURES QUIZ","SETTINGS","LANGUAGE RU / EN","VOLUME","TIMER GAME","TIME TO ANSWER","sec","SAVE","Developer: Ruslan Vildanov","CATEGORIES","ROUND","HOME","Who is the author of this picture?","Which of these paintings did paint","Are you sure you want to complete the test?","Yes","Cancel","SCORE","Back to categories","Type of game: to guess the artist by the picture","Type of game: to guess the picture by the name of its author"]},Te=document.querySelector(".settings__select"),xe=document.querySelector(".questions__timer");let Ie=localStorage.getItem("lang")||"en";const Me=document.querySelectorAll(".card__description"),He=document.querySelector(".settings__text"),Ne=document.querySelector(".card__artist").childNodes,je=document.querySelector(".card__picture").childNodes,Oe=document.querySelector(".settings__title"),Re=document.querySelector(".language__title"),Ue=document.querySelector(".sound__title"),Ge=document.querySelector(".timer__title"),Ve=document.querySelector(".time__title"),ze=document.querySelector(".text__size"),Je=document.querySelector(".volume__progress"),Qe=document.querySelector(".mute"),Ye=document.querySelector(".button__save"),Ze=document.querySelector(".sound__switch"),Fe=document.querySelector(".timer__switch"),Pe=document.querySelector(".sound__indicator"),We=document.querySelector(".timer__indicator"),De=document.querySelector(".language__indicator"),Be=document.querySelector(".language__switch"),Ke=document.querySelectorAll(".category__title"),Xe=document.querySelectorAll(".down__title"),et=document.querySelectorAll(".footer__author"),tt=document.querySelectorAll(".menu__text"),st=document.querySelector(".title__picture").childNodes,nt=document.querySelector(".title__author").childNodes,at=document.querySelector(".popup__title"),ct=document.querySelector(".popup__close"),it=document.querySelector(".popup__home"),ot=document.querySelector(".score__artists"),rt=document.querySelector(".button__categories");let dt;Te.value=localStorage.getItem("timerClock")||"5";const lt=new class{constructor(){this.right="./sound/correct.mp3",this.wrong="./sound/uncorrect.mp3",this.end="./sound/end.mp3",this.gameFinish="./sound/end.mp3",this.gameCenter="./sound/gamecenter.mp3",this.audioEffects=new Audio}rigthAnswer(){this.audioEffects.src=this.right}gameFinish(){this.audioEffects.src=this.gameFinish}gameCenter(){this.audioEffects.src=this.gameCenter}wrongAnswer(){this.audioEffects.src=this.wrong}endGame(){this.audioEffects.src=this.end}playAudio(){this.audioEffects.play()}},ut=(e,t)=>{localStorage.setItem(`${e}`,t)};let _t=localStorage.getItem("timerStatus")||"on",mt=localStorage.getItem("volumeStatus")||"on";Je.addEventListener("input",(()=>{const e=(void 0).value;(void 0).style.background=`linear-gradient(to right, #00cece 0%, #00cece ${e}%, #e5e5e5 ${e}%, #e5e5e5 100%)`}));const vt=e=>{ve.textContent=Ce[e][0],me.textContent=Ce[e][1],le.textContent=Ce[e][2],Oe.textContent=Ce[e][2],Re.textContent=Ce[e][3],Ue.textContent=Ce[e][4],Ge.textContent=Ce[e][5],Ve.textContent=Ce[e][6],ze.textContent=Ce[e][8],et.forEach((t=>{t.textContent=Ce[e][9]})),Ke.forEach((t=>{t.textContent=Ce[e][10]})),Xe.forEach(((t,s)=>{t.textContent=Ce[e][11]+` ${s+1}`})),tt.forEach((t=>{t.textContent=Ce[e][12]})),nt[0].textContent=Ce[e][13],st[0].textContent=Ce[e][14],at.textContent=Ce[e][15],it.textContent=Ce[e][16],ct.textContent=Ce[e][17],rt.textContent=Ce[e][10],$.forEach((t=>{t.textContent=Ce[e][18]})),ot.textContent=Ce[e][19],Ne[0].textContent="ARTIST ",Ne[1].textContent="QUIZ",je[0].textContent="PICTURES ",je[1].textContent="QUIZ",Me[0].textContent=Ce[e][20],Me[1].textContent=Ce[e][21],He.textContent=Ce[e][2]};function gt(e){let t=e;t.style.background=`linear-gradient(to right, #00cece 0%, #00cece ${t.value}%, #e5e5e5 ${t.value}%, #e5e5e5 100%)`}const ht=()=>{lt.audioEffects.muted=!lt.audioEffects.muted,lt.audioEffects.muted?(mt="off",Pe.classList.add("change__indicator"),Qe.classList.add("unmute")):(mt="on",Pe.classList.remove("change__indicator"),Qe.classList.remove("unmute")),lt.audioEffects.muted?(Qe.setAttribute("data-volume",Je.value),Qe.classList.add("unmute"),Je.value=0,gt(Je)):(Je.value=Qe.dataset.volume,Qe.classList.remove("unmute"),gt(Je))};Qe.addEventListener("click",ht),Ze.addEventListener("click",ht),Te.addEventListener("change",(()=>{dt=Te.value})),Fe.addEventListener("click",(()=>{Te.disabled=!We.classList.contains("change__indicator"),We.classList.toggle("change__indicator")})),Be.addEventListener("click",(()=>{Ie=De.classList.contains("change__indicator")?"en":"ru",vt(Ie),De.classList.toggle("change__indicator")})),"ru"===Ie&&De.classList.add("change__indicator"),Je.oninput=function(){let e=this.value;return 0===e?(mt="off",lt.audioEffects.muted=!0,Qe.classList.add("unmute"),Pe.classList.add("change__indicator")):(mt="on",lt.audioEffects.volume=e/100,Pe.classList.remove("change__indicator"),Qe.classList.remove("unmute"),lt.audioEffects.muted=!1),ut("volumeValue",lt.audioEffects.volume),e},"off"===_t?(We.classList.add("change__indicator"),Te.disabled=!0,xe.innerHTML="",i.innerHTML=""):(We.classList.remove("change__indicator"),Te.disabled=!1,xe.innerHTML=`00 : ${Te.value.padStart(2,"0")}`,i.innerHTML=`00 : ${Te.value.padStart(2,"0")}`),Ye.addEventListener("click",(()=>{if(!0===Te.disabled)_t="off",xe.innerHTML="",i.innerHTML="";else{_t="on";let e=Te.value;xe.innerHTML=`00 : ${e}`,i.innerHTML=`00 : ${e}`}lt.audioEffects.volume="off"===mt?0:localStorage.getItem("volumeValue")||.4,vt(Ie),ut("lang",Ie),ut("volumeValue",lt.audioEffects.volume),ut("volumeStatus",mt),ut("timerStatus",_t),dt&&ut("timerClock",dt),ce.classList.remove("hide"),ie.classList.add("hide")})),"off"===mt?(lt.audioEffects.volume=0,lt.audioEffects.muted=!0,Qe.classList.add("unmute"),Pe.classList.add("change__indicator"),Je.value=0,gt(Je)):(lt.audioEffects.volume=localStorage.getItem("volumeValue")||1,lt.audioEffects.muted=!1,Qe.classList.remove("unmute"),Pe.classList.remove("change__indicator"),Je.value=100*localStorage.getItem("volumeValue")||40,gt(Je)),vt(Ie)})();