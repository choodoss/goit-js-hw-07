import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const addGalleryItems = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`).join('');

galleryEl.insertAdjacentHTML('beforeend', addGalleryItems);
let instance;

galleryEl.addEventListener('click', hendleOpenImage);
function hendleOpenImage(e) {
    e.preventDefault();
    if (e.target.className !== 'gallery__image') { return; }

    instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="1280" height="852">`, {
        onShow: () => { window.addEventListener('keydown', hendlecloseImage); },
        onClose: () => { window.removeEventListener('keydown', hendlecloseImage); },
    });
    instance.show();
}

function hendlecloseImage(e) {
    if (e.code === 'Escape') {
        instance.close();
    }
};