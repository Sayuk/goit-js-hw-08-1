import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(({preview, original, description}) => {
        return `<li class="gallery__item listStyle = 'none'">
        <a class="gallery__item" href="${original}" data-lightbox="lbox" onclick="return false">
            <img 
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

gallery.insertAdjacentHTML('beforeend', markup);

const arrLinks = document.querySelectorAll('a');
arrLinks.forEach(link => {
  link.style.boxShadow = 'none';
});

new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});



// const imageContainer = document.querySelector(".gallery");
// const imgMarkup = createImgGallery(galleryItems);
// imageContainer.insertAdjacentHTML("beforeend",imgMarkup );

// function createImgGallery(galleryItems){
//     return galleryItems
//     .map(({preview, original, description}) => {
//         return `<li class="gallery__item listStyle = 'none'">
//         <a class="gallery__item" href="${original}" data-lightbox="lbox" onclick="return false">
//             <img 
//             class="gallery__image"
//             loading="lazy"
//             src='${preview}'
//             data-source="${original}"
//             alt="${description}"
            
//             >
//             </a>
//             </li>
//         `
//     }).join("");
// }




 


// console.log(galleryItems);
