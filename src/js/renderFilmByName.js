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
      checkResultActions();
    }
    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );
  });
}

export { onSubmit };
