import { getFilmByKeyWord } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { renderPopularMovies } from './renderPopularPoster';
import { eventActions, checkResultActions } from './checkFetchResultFun';

let searchFilm;

function onSubmit(event) {
  event.preventDefault();
  eventActions();
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
      refs.searchForm.insertAdjacentHTML('beforeend', createNotification());
      checkResultActions();
      
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

export { onSubmit};
