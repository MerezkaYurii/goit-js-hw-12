import{a as L,i as l,S as b}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const C="47340673-7535cec7cd04a1914e8f8d439",M="https://pixabay.com/api/",S=15;async function p(t,e=1){return(await L(M,{params:{key:C,q:t,image_type:"foto",orientation:"horizontal",safesearch:!0,page:e,per_page:S}})).data}const $=document.querySelector(".gallery");function y(t){return t.map(({webformatURL:e,largeImageURL:a,tags:d,likes:o,views:r,comments:n,downloads:v})=>`
     <a class="gallery-link" href=${a}>
    <img class="gallery-image" src=${e} alt=${d}>
    
     <div class="img-list">

               <div class="field">
      <h3 class="label">Likes</h3>
      <p class="value">${o}</p>
              </div>
                  <div class="field">
      <h3 class="label">Views</h3>
     <p class="value">${r}</p>
              </div>
                  <div class="field">
      <h3 class="label">Comments</h3>
     <p class="value">${n}</p>
              </div>
                  <div class="field">
      <h3 class="label">Downloads</h3>
     <p class="value">${v}</p>
              </div>
    </div>
    </a>
       `).join("")}function h(){$.innerHTML=""}l.settings({position:"topRight"});let f=new b(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"});const c=document.querySelector(".loading"),u=document.querySelector(".gallery"),q=document.querySelector(".form");q.addEventListener("submit",w);const s=document.querySelector(".load-more-hidden");s.addEventListener("click",P);const g=15;let i=1,m="";function w(t){if(t.preventDefault(),m=t.target.elements.category.value.trim(),u.innerHTML="",!m){s.classList.replace("button-load-more","load-more-hidden"),l.error({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"}),h();return}h(),c.classList.remove("hidden"),i=1,p(m,i).then(e=>{if(!e.hits.length){s.classList.replace("button-load-more","load-more-hidden"),l.error({message:"No images found",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"});return}u.insertAdjacentHTML("beforeend",y(e.hits)),c.classList.remove("hidden"),f.refresh();const a=Math.ceil(e.totalHits/g);i>a?(s.classList.replace("button-load-more","load-more-hidden"),f.refresh()):s.classList.replace("load-more-hidden","button-load-more"),e.hits.length<g&&s.classList.replace("button-load-more","load-more-hidden")}).catch(e=>{console.log(e.message),l.error({message:`${e.message}`,iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"})}).finally(()=>{t.target.reset(),c.classList.add("hidden")}),f.refresh()}async function P(){i+=1,s.disabled=!0;try{const t=await p(m,i);u.insertAdjacentHTML("beforeend",y(t.hits)),c.classList.remove("hidden");const e=Math.ceil(t.totalHits/g);console.log(i),(i>=e||!e)&&(s.classList.replace("button-load-more","load-more-hidden"),l.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#0099FF"}));const a=document.querySelector(".img-list");window.scrollBy({left:0,top:400,behavior:"smooth"})}catch{l.error({message:"We're sorry, but you've reached the end of search results.",iconUrl:"../img/error.svg",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#0099FF"})}finally{s.disabled=!1,c.classList.add("hidden")}f.refresh()}
//# sourceMappingURL=index.js.map
