import{a as v,i as c,S as u}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const b="47340673-7535cec7cd04a1914e8f8d439",L="https://pixabay.com/api/",C=15;async function g(t,s=1){return(await v(L,{params:{key:b,q:t,image_type:"foto",orientation:"horizontal",safesearch:!0,page:s,per_page:C}})).data}const S=document.querySelector(".gallery");function h(t){return t.map(({webformatURL:s,largeImageURL:o,tags:d,likes:e,views:r,comments:l,downloads:y})=>`
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
     <p class="value">${l}</p>
              </div>
                  <div class="field">
      <h3 class="label">Downloads</h3>
     <p class="value">${y}</p>
              </div>
    </div>
    </a>
       `).join("")}function m(){S.innerHTML=""}c.settings({position:"topRight"});const n=document.querySelector(".loading"),p=document.querySelector(".gallery"),q=document.querySelector(".form");q.addEventListener("submit",$);const a=document.querySelector(".load-more-hidden");a.addEventListener("click",M);const w=15;let i=1,f="";function $(t){if(t.preventDefault(),i=1,f=t.target.elements.category.value.trim(),!f){a.classList.replace("button-load-more","load-more-hidden"),c.error({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"}),m();return}m(),n.classList.remove("hidden"),g(f,i).then(o=>{if(o.hits.length===0){c.error({message:"No images found",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"});return}p.insertAdjacentHTML("beforeend",h(o.hits)),n.classList.remove("hidden"),o.hits.length*i<o.totalHits&&a.classList.replace("load-more-hidden","button-load-more"),s.refresh()}).catch(o=>{console.log(o.message)}).finally(()=>{t.target.reset(),n.classList.add("hidden")});let s=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"})}async function M(){i+=1,a.disabled=!0;try{const t=await g(f,i);p.insertAdjacentHTML("beforeend",h(t.hits)),n.classList.remove("hidden"),t.hits.length*i>=t.totalHits&&(a.classList.replace("button-load-more","load-more-hidden"),c.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#0099FF"}),t.hits.length<w&&a.classList.replace("load-more-hidden","button-load-more"));const s=document.querySelector(".img-list");window.scrollBy({left:0,top:400,behavior:"smooth"})}catch{c.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#0099FF"})}finally{a.disabled=!1,n.classList.add("hidden")}new u(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"})}
//# sourceMappingURL=index.js.map
