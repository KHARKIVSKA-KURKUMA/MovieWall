import { getFilmsByLang } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { eventActions, checkResultActions } from './checkFetchResultFun';
import { makeTuiPagination } from './pagination';
import { topFunction } from './topFunction';

let selectedLang = '';
let currentPage = 1;
let pagination;
let totalPages = 0;

function onOriginalLangClick(event) {
  eventActions(event);
  selectedLang = event.target.value;
  renderMovieByLang(selectedLang);
}

async function renderMovieByLang(lang) {
  await getFilmsByLang(lang).then(data => {
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
      getFilmsByLang(lang, page).then(data => {
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

export { onOriginalLangClick };
