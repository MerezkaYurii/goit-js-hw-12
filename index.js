import{a as y,i as n,S as v}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const b="47340673-7535cec7cd04a1914e8f8d439",L="https://pixabay.com/api/";async function m(t,r=1){return(await y(L,{params:{key:b,q:t,image_type:"foto",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const C=document.querySelector(".gallery");function g(t){return t.map(({webformatURL:r,largeImageURL:c,tags:d,likes:e,views:o,comments:s,downloads:p})=>`
     <a class="gallery-link" href=${c}>
    <img class="gallery-image" src=${r} alt=${d}>
    
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
     <p class="value">${s}</p>
              </div>
                  <div class="field">
      <h3 class="label">Downloads</h3>
     <p class="value">${p}</p>
              </div>
    </div>
    </a>
       `).join("")}function u(){C.innerHTML=""}n.settings({position:"topRight"});const i=document.querySelector(".js-hidden"),h=document.querySelector(".gallery"),S=document.querySelector(".form");S.addEventListener("submit",q);const a=document.querySelector(".load-more-hidden");a.addEventListener("click",w);let f="";function q(t){if(t.preventDefault(),f=t.target.elements.category.value.trim(),!f){n.error({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"}),u();return}u(),i.classList.remove("hidden"),m(f,l).then(r=>{if(r.hits.length===0){n.error({message:"No images found",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"});return}h.insertAdjacentHTML("beforeend",g(r.hits)),i.classList.remove("hidden"),r.hits.length*l<r.totalHits&&a.classList.replace("load-more-hidden","button-load-more"),litebox.refresh()}).catch(r=>{console.log(r.message)}).finally(()=>{t.target.reset(),i.classList.add("hidden")})}let l=1;async function w(){l+=1,a.disabled=!0;try{const t=await m(f,l);h.insertAdjacentHTML("beforeend",g(t.hits)),i.classList.remove("hidden"),t.hits.length*l>=t.totalHits&&(a.classList.replace("button-load-more","load-more-hidden"),n.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"}));const r=document.querySelector(".img-list");window.scrollBy({left:0,top:400,behavior:"smooth"})}catch{n.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"})}finally{a.disabled=!1,i.classList.add("hidden")}new v(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"})}
//# sourceMappingURL=index.js.map
