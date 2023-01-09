// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


// Add imports above this line
import { galleryItems } from './gallery-items';


const imageContainer = document.querySelector(".gallery");
const imgMarkup = createImgGallery(galleryItems);
imageContainer.insertAdjacentHTML("beforeend",imgMarkup );

function createImgGallery(galleryItems){
    return galleryItems
    .map(({preview, original, description}) => {
        return `<li class="gallery__item listStyle = 'none'">
        <a class="gallery__item" href="${original}" data-lightbox="lbox" >
            <img 
            onclick="return false;
            class="gallery__image"
            loading="lazy"
            src='${preview}'
            data-source="${original}"
            alt="${description}"
            
            >
            </a>
            </li>
        `
    }).join("");
}


var gallery = new SimpleLightbox('.gallery a',{captionsData: 'alt', captionDelay: 250, });

 


console.log(galleryItems);
