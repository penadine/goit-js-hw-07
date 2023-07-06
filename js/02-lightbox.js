import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

// galleryItems.forEach((item) => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('gallery__item');

//   const link = document.createElement('a');
//   link.classList.add('gallery__link');
//   link.href = item.original;

//   const image = document.createElement('img');
//   image.classList.add('gallery__image');
//   image.src = item.preview;
//   image.alt = item.description;

//   link.appendChild(image);
//   listItem.appendChild(link);
//   galleryEl.appendChild(listItem);
// });

galleryItems.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  listItem.innerHTML = `
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}">
    </a>
  `;

  galleryEl.appendChild(listItem);
});


const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
  });
