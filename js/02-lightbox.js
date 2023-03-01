import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const addGalleryItems = galleryItems.map(({ preview, original, description }) => `<a class="gallery__item gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`).join("");
/*додав gallery__link до <a>, щоб працював ховер і фокус*/
galleryEl.insertAdjacentHTML('beforeend', addGalleryItems);

let gallery = new SimpleLightbox('.gallery__item', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom',
});



