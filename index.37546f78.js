window.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".team__nav-list-item-link");[...e].forEach(((t,o)=>{t.addEventListener("click",(function(a){a.preventDefault();const c=document.querySelectorAll(".team__tab");t.classList.contains("team__link-active")||([...e].forEach((e=>e.classList.remove("team__link-active"))),t.classList.add("team__link-active"),[...c].forEach((e=>e.classList.remove("team__tab-active"))),c[o].classList.add("team__tab-active"))}))}));const t=document.querySelectorAll(".history__carousel-nav-item");[...t].forEach(((e,o)=>{e.addEventListener("click",(function(){const a=document.querySelector(".history__carousel-slider"),c=a.children[0].offsetWidth,r=getComputedStyle(a).getPropertyValue("gap").valueOf().slice(0,-2);offSetValue=+r+c,e.classList.contains("history__carousel-nav-item--active")||([...t].forEach((e=>e.classList.remove("history__carousel-nav-item--active"))),e.classList.add("history__carousel-nav-item--active"),a.style.transform=`translateX(${o*offSetValue}px)`)}))}));[...document.querySelectorAll(".accordion__wrapper")].forEach(((e,t)=>{e.addEventListener("click",(function(){const e=document.querySelectorAll(".accordion__content"),o=document.querySelectorAll(".accordion"),a=document.querySelectorAll(".accordion__img");""===a[t].style.transform&&(a[t].style.transform="rotate(0deg)"),e[t].style.display="block"===e[t].style.display?"none":"block",a[t].style.transform="rotate(0deg)"===a[t].style.transform?"rotate(90deg)":"rotate(0deg)",o[t].style.marginBottom="0px"===o[t].style.marginBottom?"10px":"0"}))}))}));
//# sourceMappingURL=index.37546f78.js.map