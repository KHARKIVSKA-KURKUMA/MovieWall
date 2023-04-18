import { getFilmByLanguage } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { eventActions, checkResultActions } from './checkFetchResultFun';

let searchLanguage = '';

function onLanguageClick(event) {
  eventActions(event);
  searchLanguage = event.target.id;
  renderFilmByLanguage(searchLanguage);
}

async function renderFilmByLanguage(searchLanguage) {
  await getFilmByLanguage(searchLanguage).then(data => {
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

export { onLanguageClick };
