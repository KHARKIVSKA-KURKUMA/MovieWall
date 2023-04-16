import { getUkrainianFilms } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { eventActions, checkResultActions } from './checkFetchResultFun';

function onUkrMovieClick(event) {
  eventActions(event);
  // if (!event.target.classList.contains('.filter-item')|| event.target.nodeName != 'LI') {
  //     return;
  // }
  renderUkrainianMovie();
}

async function renderUkrainianMovie() {
  await getUkrainianFilms().then(data => {
    if (!data.results || data.results.length === 0) {
      checkResultActions();
    }

    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );
  });
}

export { onUkrMovieClick };
