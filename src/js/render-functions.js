import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  return images .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="thumb-block">
          <div class="block"><h2 class="tittle">Likes</h2><p class="amount">${likes}</p></div>
          <div class="block"><h2 class="tittle">Views</h2><p class="amount">${views}</p></div>
          <div class="block"><h2 class="tittle">Comments</h2><p class="amount">${comments}</p></div>
          <div class="block"><h2 class="tittle">Downloads</h2><p class="amount">${downloads}</p></div>
        </div>
      </li>`
    )
    .join('');
}

export function changegallery(images) {
  clearGallery();
  gallery.innerHTML = createGallery(images);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function errorResult(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}