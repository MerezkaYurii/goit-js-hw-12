import{a as L,i as c,S as b}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const C="47340673-7535cec7cd04a1914e8f8d439",M="https://pixabay.com/api/",S=15;async function p(o,r=1){return(await L(M,{params:{key:C,q:o,image_type:"foto",orientation:"horizontal",safesearch:!0,page:r,per_page:S}})).data}const q=document.querySelector(".gallery");function y(o){return o.map(({webformatURL:r,largeImageURL:a,tags:d,likes:e,views:t,comments:l,downloads:v})=>`
     <a class="gallery-link" href=${a}>
    <img class="gallery-image" src=${r} alt=${d}>
    
     <div class="img-list">

               <div class="field">
      <h3 class="label">Likes</h3>
      <p class="value">${e}</p>
              </div>
                  <div class="field">
      <h3 class="label">Views</h3>
     <p class="value">${t}</p>
              </div>
                  <div class="field">
      <h3 class="label">Comments</h3>
     <p class="value">${l}</p>
              </div>
                  <div class="field">
      <h3 class="label">Downloads</h3>
     <p class="value">${v}</p>
              </div>
    </div>
    </a>
       `).join("")}function g(){q.innerHTML=""}c.settings({position:"topRight"});let f=new b(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"});const n=document.querySelector(".loading"),u=document.querySelector(".gallery"),w=document.querySelector(".form");w.addEventListener("submit",$);const s=document.querySelector(".load-more-hidden");s.addEventListener("click",P);const h=15;let i=1,m="";async function $(o){if(o.preventDefault(),m=o.target.elements.category.value.trim(),u.innerHTML="",!m){s.classList.replace("button-load-more","load-more-hidden"),c.error({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"}),g();return}g(),n.classList.remove("hidden"),i=1;try{const r=await p(m,i);if(!r.hits.length){s.classList.replace("button-load-more","load-more-hidden"),c.error({message:"No images found",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"});return}u.insertAdjacentHTML("beforeend",y(r.hits)),n.classList.remove("hidden"),f.refresh();const a=Math.ceil(r.totalHits/h);i>a?(s.classList.replace("button-load-more","load-more-hidden"),f.refresh()):s.classList.replace("load-more-hidden","button-load-more"),r.hits.length<h&&s.classList.replace("button-load-more","load-more-hidden")}catch{}finally{o.target.reset(),n.classList.add("hidden")}f.refresh()}async function P(){i+=1,s.disabled=!0;try{const o=await p(m,i);u.insertAdjacentHTML("beforeend",y(o.hits)),n.classList.remove("hidden");const r=Math.ceil(o.totalHits/h);console.log(i),(i>=r||!r)&&(s.classList.replace("button-load-more","load-more-hidden"),c.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#0099FF"}));const a=document.querySelector(".img-list");window.scrollBy({left:0,top:400,behavior:"smooth"})}catch{c.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#0099FF"})}finally{s.disabled=!1,n.classList.add("hidden")}f.refresh()}
//# sourceMappingURL=index.js.map
