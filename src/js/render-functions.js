import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const containerGallery = document.querySelector(".gallery");


let box;

export function createMarkup(arr){

    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>`
     <a class="gallery-link" href=${largeImageURL}>
    <img class="gallery-image" src=${webformatURL} alt=${tags}>
    
     <div class="img-list">

               <div class="field">
      <h3 class="label">Likes</h3>
      <p class="value">${likes}</p>
              </div>
                  <div class="field">
      <h3 class="label">Views</h3>
     <p class="value">${views}</p>
              </div>
                  <div class="field">
      <h3 class="label">Comments</h3>
     <p class="value">${comments}</p>
              </div>
                  <div class="field">
      <h3 class="label">Downloads</h3>
     <p class="value">${downloads}</p>
              </div>
    </div>
    </a>
       `).join("");
    



if (!box) {
    box = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });
} else {
    box.refresh();
}

}





export function clear() {
    containerGallery.innerHTML = "";
}





