import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

// вирішив попрактивуватись у створенні елементів, можу зробити і шаблонним рядком (по лінивому)) 
const addGalleryItems = galleryItems.map((img, i) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = "large-image.jpg";

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.setAttribute('data-source', `${galleryItems[i].original}`);
    galleryImage.src = `${galleryItems[i].preview}`;
    galleryImage.alt = `${galleryItems[i].description}`;

    galleryLink.append(galleryImage);
    galleryItem.append(galleryLink);

    return galleryItem;
});
galleryEl.append(...addGalleryItems);
let instance;

galleryEl.addEventListener('click', (e) => {
    e.preventDefault()
    window.addEventListener('keydown', closeImage)
    if (e.target.classList.value === 'gallery__image') {
        instance = basicLightbox.create(`<img src=${e.target.dataset.source} width="1280" height="852">`);
        return instance.show();
    }
    instance = basicLightbox.create(`<img src=${e.target.firstElementChild.dataset.source} width="1280" height="852">`);
    instance.show();
});

function closeImage(e) {
    if (e.code === 'Escape' || e.code === 'Space' || e.code === 'Enter') {
        instance.close();
    };
};

