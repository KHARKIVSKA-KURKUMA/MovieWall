import { getFilmByGenres } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { eventActions, checkResultActions } from './checkFetchResultFun';

let searchGenres = '';

function onGenresClick(event) {
  eventActions();
  // if (!event.target.classList.contains('.filter-item')|| event.target.nodeName != 'LI') {
  //     return;
  // }
  searchGenres = event.target.id;
  renderFilmByGenres(searchGenres);
}

async function renderFilmByGenres(searchGenres) {
  await getFilmByGenres(searchGenres).then(data => {
    if (!data.results || data.results.length === 0) {
      checkResultActions();
    }
    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );
  });
}

export { onGenresClick };