import { getFilmByKeyWord } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { renderPopularMovies } from './renderPopularPoster';
import { makeTuiPagination } from './pagination';
import { eventActions, checkResultActions } from './checkFetchResultFun';
import { topFunction } from './topFunction';

let searchFilm;
let currentPage = 1;
let totalPages = 0;
let pagination;

function onSubmit(event) {
  event.preventDefault();
  eventActions();
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
      checkResultActions();
      if (activeLang === 'uk') {
        refs.searchForm.insertAdjacentHTML('beforeend', createNotificationUk());
      } else {
        refs.searchForm.insertAdjacentHTML('beforeend', createNotification());
      }
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
  topFunction();
  refs.homeGalleryList.innerHTML = '';
  renderMovieByWord(searchFilm, page);
}
