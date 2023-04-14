import { getFilmByKeyWord } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';

let searchFilm = '';

function onSubmit(event) {
  event.preventDefault();
  searchFilm = refs.searchQuery.value.trim();
  refs.homeGalleryList.innerHTML = '';
  renderMovieByWord(searchFilm);
}

async function renderMovieByWord(searchFilm) {
  await getFilmByKeyWord(searchFilm).then(data => {
    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );
  });
}

export { onSubmit };
