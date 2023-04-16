import { getFilmByKeyWord } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import notAvailableResult from '../images/not-available-result.png';
import { renderPopularMovies } from './renderPopularPoster';

let searchFilm;
let text = '';

function onSubmit(event) {
  event.preventDefault();
  refs.homeGalleryList.innerHTML = '';
  refs.galleryBgImg.style = 'none';
  text = refs.searchForm.querySelector('.search-notification');
  if (text) {
    text.remove();
  }
  const notification = refs.galleryBgImg.querySelector('.text-notification');
  if (notification) {
    notification.remove();
  }
  searchFilm = event.currentTarget.searchQuery.value.trim();
  if (searchFilm === '') {
    renderPopularMovies();
    return;
  }
  renderMovieByWord(searchFilm);
}

async function renderMovieByWord(searchFilm) {
  await getFilmByKeyWord(searchFilm).then(data => {
    if (!data.results || data.results.length === 0) {
      refs.galleryBgImg.style.height = '280px';
      refs.galleryBgImg.style.backgroundRepeat = 'no-repeat';
      refs.galleryBgImg.style.backgroundPosition = 'center';
      refs.galleryBgImg.style.backgroundImage = `url(${notAvailableResult})`;
      const notification = document.createElement('p');
      notification.textContent = 'OOPS! nothing found';
      refs.galleryBgImg.append(notification);
      notification.classList.add('text-notification');
      refs.searchForm.insertAdjacentHTML('beforeend', createNotification());

      //  async function stopNotification() { setTimeout(await text.remove(), 1000); }
      //   stopNotification();
    }

    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );
  });
}

function createNotification() {
  return `<p class='search-notification'>Search result not successful. Enter the correct movie name.</p>`;
}

export { onSubmit };
