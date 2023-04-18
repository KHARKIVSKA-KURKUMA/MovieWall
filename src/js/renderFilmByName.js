import { getFilmByKeyWord } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import notAvailableResult from '../images/not-available-result.png';
import { renderPopularMovies } from './renderPopularPoster';
import { makeTuiPagination } from './pagination';

let searchFilm;
let text = '';
let currentPage = 1;
let totalPages = 0;
let pagination;

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
    renderPopularMovies(searchFilm, currentPage);
    return;
  }
  renderMovieByWord(searchFilm, currentPage);
  if (pagination) {
    pagination.reset();
  }
}
let activeLang = localStorage.getItem('lang');

async function renderMovieByWord(searchFilm, currentPage) {
  await getFilmByKeyWord(searchFilm, currentPage, activeLang).then(data => {
    if (!data.results || data.results.length === 0) {
      // refs.paginationEl.style.display = 'none';
      if (activeLang === 'uk') {
        refs.searchForm.insertAdjacentHTML('beforeend', createNotificationUk());
      } else {
        refs.searchForm.insertAdjacentHTML('beforeend', createNotification());
      }
      // файл не знайдено
      // checkResultActions();
    }

    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );

    totalPages = data.total_pages;

    if (!pagination) {
      pagination = makeTuiPagination(data.total_results, totalPages);
      pagination.on('beforeMove', event => {
        handlePageChange(event.page);
        currentPage = event.page;
      });
    }
  });
}

function createNotification() {
  return `<p class='search-notification'>Search result not successful. Enter the correct movie name.</p>`;
}
function createNotificationUk() {
  return `<p class='search-notification'>Результат пошуку невдалий. Введіть правильну назву фільму.</p>`;
}

export { onSubmit };

function handlePageChange(page) {
  console.log(page);
  refs.homeGalleryList.innerHTML = '';
  renderMovieByWord(searchFilm, page);
}
