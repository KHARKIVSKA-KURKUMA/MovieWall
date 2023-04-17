import { getFilmByGenres } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { eventActions, checkResultActions } from './checkFetchResultFun';

let searchGenres = '';

function onGenresClick(event) {
  eventActions();
  searchGenres = event.target.value;
  renderFilmByGenres(searchGenres);
}

async function renderFilmByGenres(searchGenres) {
  await getFilmByGenres(searchGenres).then(data => {
    if (!data.results || data.results.length === 0) {
      refs.searchForm.insertAdjacentHTML('beforeend', createNotification());
      checkResultActions();
    }
    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );
  });
};

function createNotification() {
  return `<p class='search-notification'>OOps. Something going wrong. Try one more time</p>`;
};

export { onGenresClick };
