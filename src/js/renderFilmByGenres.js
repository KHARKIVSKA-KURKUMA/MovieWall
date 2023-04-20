import { getFilmByGenres } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { eventActions, checkResultActions } from './checkFetchResultFun';
import { makeTuiPagination } from './pagination';
import { topFunction } from './topFunction';

let searchGenres = '';
let currentPage = 1;
let pagination;
let totalPages = 0;

function onGenresClick(event) {
  eventActions();
  searchGenres = event.target.value;
  renderFilmByGenres(searchGenres);
}

let activeLang = localStorage.getItem('lang');

async function renderFilmByGenres(searchGenres) {
  await getFilmByGenres(searchGenres, activeLang).then(data => {
    if (!data.results || data.results.length === 0) {
      refs.searchForm.insertAdjacentHTML('beforeend', createNotification());
      checkResultActions();
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
    function handlePageChange(page) {
      refs.homeGalleryList.innerHTML = '';
      getFilmByGenres(searchGenres, activeLang, page).then(data => {
        refs.homeGalleryList.innerHTML = '';
        refs.homeGalleryList.insertAdjacentHTML(
          'beforeend',
          createPopularMovieMarkUp(data.results)
        );
        topFunction();
      });
    }
  });
}

function createNotification() {
  return `<p class='search-notification'>OOps. Something going wrong. Try one more time</p>`;
}

export { onGenresClick };
