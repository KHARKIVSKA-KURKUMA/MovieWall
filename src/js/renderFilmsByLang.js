import { getFilmsByLang } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { eventActions, checkResultActions } from './checkFetchResultFun';

let selectedLang = '';
function onOriginalLangClick(event) {
  eventActions(event);
  // if (!event.target.classList.contains('.filter-item')|| event.target.nodeName != 'LI') {
  //     return;
  // }
  selectedLang = event.target.value;
  renderMovieByLang(selectedLang);
}

async function renderMovieByLang(lang) {
  await getFilmsByLang(lang).then(data => {
    if (!data.results || data.results.length === 0) {
      checkResultActions();
    }

    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );
  });
}

export { onOriginalLangClick };
