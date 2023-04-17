import { getFilmsByLang } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { eventActions, checkResultActions } from './checkFetchResultFun';

let selectedLang = '';
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
  });
}

function createNotification() {
  return `<p class='search-notification'>OOps. Something going wrong. Try one more time</p>`;
}

export { onOriginalLangClick };
