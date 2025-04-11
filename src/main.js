import { getImagesByQuery } from './js/pixabay-api.js';
import { changegallery, errorResult } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('.input-search');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const query = input.value.trim();
  if (query === '') {
    errorResult('Please enter a search query!');
    return;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';

  getImagesByQuery(query)
    .then(images => {
      loader.style.display = 'none';
      if (images.length === 0) {
        errorResult(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }
      changegallery(images);
    })
    .catch(error => {
      loader.style.display = 'none';
      errorResult('Error fetching images. Please try again!');
      console.error('Помилка сервера:', error.message);
    });
  form.reset();
});