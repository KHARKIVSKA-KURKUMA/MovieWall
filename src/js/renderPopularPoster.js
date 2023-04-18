import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { getPopularFilms } from './fetchMovies';
import { makeTuiPagination } from './pagination';

let currentPage = 1;
let totalPages = 0;
let pagination;

function renderPopularMovies(id) {
  getPopularFilms(id).then(data => {
    refs.galleryContainer.innerHTML = '';
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

  function handlePageChange(page) {
    refs.homeGalleryList.innerHTML = '';
    getPopularFilms(id, page).then(data => {
      refs.homeGalleryList.insertAdjacentHTML(
        'beforeend',
        createPopularMovieMarkUp(data.results)
      );
    });
  }
}

export { renderPopularMovies };
