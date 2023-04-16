import { getFilmByLanguage } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { eventActions, checkResultActions } from './checkFetchResultFun';

let searchLanguage = '';

function onLanguageClick(event) {
  eventActions(event);
  // if (!event.target.classList.contains('.filter-item')|| event.target.nodeName != 'LI') {
  //     return;
  // }
  searchLanguage = event.target.id;
  renderFilmByLanguage(searchLanguage);
}

async function renderFilmByLanguage(searchLanguage) {
  await getFilmByLanguage(searchLanguage).then(data => {
    if (!data.results || data.results.length === 0) {
      checkResultActions();
    }
    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );
  });
}

export { onLanguageClick };
