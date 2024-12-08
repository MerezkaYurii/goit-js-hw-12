// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


import {serchCategory} from "./js/pixabay-api";
import {createMarkup, clear} from "./js/render-functions";


iziToast.settings({
    position: 'topRight',
  });


 const loading = document.querySelector(".js-hidden")
const containerGallery = document.querySelector(".gallery");
const form = document.querySelector(".form");
form.addEventListener("submit", submitInput);
const btnLoadMore = document.querySelector(".load-more-hidden");
btnLoadMore.addEventListener("click", handelLoadeMore)



let category ="";

 function submitInput (event) {
    event.preventDefault();
 category = event.target.elements.category.value.trim();
if(!category) {
  iziToast.error({
    // title: 'Error',
    message: "Sorry, there are no images matching your search query. Please try again!",
    iconUrl: "../img/error.svg",  
    iconColor: '#fff',
    imageWidth: 15,
    messageColor: '#fff',
    titleColor: '#fff',
  }) ;
  clear()
 return 
}

clear();
loading.classList.remove("hidden");
 

serchCategory(category, page)
 .then( data => {

  
if(data.hits.length === 0){
  iziToast.error({
    // title: 'Error',
    message:  "No images found", 
    iconUrl: "../img/error.svg",  
    iconColor: '#fff',
    imageWidth: 15,
    messageColor: '#fff',
    titleColor: '#fff',
  });
 
  return;
}
  
  containerGallery.insertAdjacentHTML("beforeend", createMarkup(data.hits));
  loading.classList.remove("hidden")
if(data.hits.length * page < data.totalHits){

    btnLoadMore.classList.replace("load-more-hidden", "button-load-more");
}

  litebox.refresh();

  })
   .catch((error) => {
    console.log(error.message);
    
  // iziToast.error({
  //   // title: 'Error',
  //   message:   "Error fetching images. Please try again.", 
  //   iconUrl: "../img/error.svg",  
  //   iconColor: '#fff',
  //   imageWidth: 15,
  //   messageColor: '#fff',
  //   titleColor: '#fff',
  // });
 })
.finally (() => {
  event.target.reset()
  loading.classList.add("hidden")
});
}







let page = 1;
async function handelLoadeMore(){
page += 1;

btnLoadMore.disabled = true;

try{
  const data = await serchCategory(category, page);
 
containerGallery.insertAdjacentHTML("beforeend", createMarkup(data.hits));
loading.classList.remove("hidden");

if(data.hits.length * page >= data.totalHits){
  btnLoadMore.classList.replace("button-load-more", "load-more-hidden");
  iziToast.error({
    // title: 'Error',
    message:   "We're sorry, but you've reached the end of search results.", 
    iconUrl: "../img/error.svg",  
    iconColor: '#fff',
    imageWidth: 15,
    messageColor: '#fff',
    titleColor: '#fff',
  });
  }






const card = document.querySelector(".img-list");
window.scrollBy({
  left: 0, 
  top: 400, 
  behavior: "smooth", 
})


}catch(error) { iziToast.error({
  // title: 'Error',
  message:   "We're sorry, but you've reached the end of search results.", 
  iconUrl: "../img/error.svg",  
  iconColor: '#fff',
  imageWidth: 15,
  messageColor: '#fff',
  titleColor: '#fff',
});
} finally{btnLoadMore.disabled = false;
  loading.classList.add("hidden")
}
let litebox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'imageTitle',
});

 }

 


