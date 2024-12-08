import{a as v,i as c,S as m}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const b="47340673-7535cec7cd04a1914e8f8d439",L="https://pixabay.com/api/";async function g(t,s=1){return(await v(L,{params:{key:b,q:t,image_type:"foto",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}const C=document.querySelector(".gallery");function h(t){return t.map(({webformatURL:s,largeImageURL:o,tags:d,likes:e,views:r,comments:i,downloads:y})=>`
     <a class="gallery-link" href=${o}>
    <img class="gallery-image" src=${s} alt=${d}>
    
     <div class="img-list">

               <div class="field">
      <h3 class="label">Likes</h3>
      <p class="value">${e}</p>
              </div>
                  <div class="field">
      <h3 class="label">Views</h3>
     <p class="value">${r}</p>
              </div>
                  <div class="field">
      <h3 class="label">Comments</h3>
     <p class="value">${i}</p>
              </div>
                  <div class="field">
      <h3 class="label">Downloads</h3>
     <p class="value">${y}</p>
              </div>
    </div>
    </a>
       `).join("")}function u(){C.innerHTML=""}c.settings({position:"topRight"});const a=document.querySelector(".js-hidden"),p=document.querySelector(".gallery"),S=document.querySelector(".form");S.addEventListener("submit",q);const l=document.querySelector(".load-more-hidden");l.addEventListener("click",w);let f="";function q(t){if(t.preventDefault(),f=t.target.elements.category.value.trim(),!f){c.error({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"}),u();return}u(),a.classList.remove("hidden"),g(f,n).then(o=>{if(o.hits.length===0){c.error({message:"No images found",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"});return}p.insertAdjacentHTML("beforeend",h(o.hits)),a.classList.remove("hidden"),o.hits.length*n<o.totalHits&&l.classList.replace("load-more-hidden","button-load-more"),s.refresh()}).catch(o=>{console.log(o.message)}).finally(()=>{t.target.reset(),a.classList.add("hidden")});let s=new m(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"})}let n=1;async function w(){n+=1,l.disabled=!0;try{const t=await g(f,n);p.insertAdjacentHTML("beforeend",h(t.hits)),a.classList.remove("hidden"),t.hits.length*n>=t.totalHits&&(l.classList.replace("button-load-more","load-more-hidden"),c.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"}));const s=document.querySelector(".img-list");window.scrollBy({left:0,top:400,behavior:"smooth"})}catch{c.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"})}finally{l.disabled=!1,a.classList.add("hidden")}new m(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"})}
//# sourceMappingURL=index.js.map
