import{a as y,i as s,S as v}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const b="47340673-7535cec7cd04a1914e8f8d439",L="https://pixabay.com/api/";async function u(t,r=1){return(await y(L,{params:{key:b,q:t,image_type:"foto",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const C=document.querySelector(".gallery");function g(t){return t.map(({webformatURL:r,largeImageURL:n,tags:c,likes:e,views:o,comments:i,downloads:p})=>`
     <a class="gallery-link" href=${n}>
    <img class="gallery-image" src=${r} alt=${c}>
    
     <div class="img-list">

               <div class="field">
      <h3 class="label">Likes</h3>
      <p class="value">${e}</p>
              </div>
                  <div class="field">
      <h3 class="label">Views</h3>
     <p class="value">${o}</p>
              </div>
                  <div class="field">
      <h3 class="label">Comments</h3>
     <p class="value">${i}</p>
              </div>
                  <div class="field">
      <h3 class="label">Downloads</h3>
     <p class="value">${p}</p>
              </div>
    </div>
    </a>
       `).join("")}function m(){C.innerHTML=""}s.settings({position:"topRight"});const d=document.querySelector(".js-hidden"),h=document.querySelector(".gallery"),S=document.querySelector(".form");S.addEventListener("submit",q);const a=document.querySelector(".load-more-hidden");a.addEventListener("click",M);let f="";function q(t){if(t.preventDefault(),f=t.target.elements.category.value.trim(),!f){s.error({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"../img/error.png",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"}),m();return}m(),d.classList.remove("hidden"),u(f,l).then(r=>{if(r.hits.length===0){s.error({message:"No images found",iconUrl:"../img/error.png",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"});return}h.insertAdjacentHTML("beforeend",g(r.hits)),d.classList.remove("hidden"),r.hits.length*l<r.totalHits&&a.classList.replace("load-more-hidden","button-load-more"),w.refresh()}).catch(r=>{s.error({message:"Error fetching images. Please try again.",iconUrl:"../img/error.png",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"})}).finally(()=>{t.target.reset(),d.classList.add("hidden")})}let w=new v(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"}),l=33;async function M(){l+=1,a.disabled=!0;try{const t=await u(f,l);h.insertAdjacentHTML("beforeend",g(t.hits)),t.hits.length*l>=t.totalHits&&(a.classList.replace("button-load-more","load-more-hidden"),s.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.png",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"}));const r=document.querySelector(".img-list");window.scrollBy({left:0,top:400,behavior:"smooth"})}catch{s.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.png",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"})}finally{a.disabled=!1}}
//# sourceMappingURL=index.js.map
