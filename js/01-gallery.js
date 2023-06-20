import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');
  
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;
  
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;
    image.setAttribute('data-source', item.original);
  
    link.appendChild(image);
    listItem.appendChild(link);
  
    galleryEl.appendChild(listItem);
  });


  galleryEl.addEventListener('click', (event) => {
    event.preventDefault();
  
    if (event.target.tagName === 'IMG') {
  
        const sourceUrl = event.target.dataset.source;

        const instance = basicLightbox.create(`
          <img src="${sourceUrl}" alt="" />
        `);
        instance.show();
    }
  });
