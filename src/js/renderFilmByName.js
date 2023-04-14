import { getFilmByKeyWord } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';

let searchFilm = '';

refs.searchForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  searchFilm = refs.searchQuery.value.trim();
  console.log(searchFilm);
    refs.homeGalleryList.innerHTML = '';
    renderMovieByWord();
}

async function renderMovieByWord(searchFilm) {
  await getFilmByKeyWord(searchFilm).then(data => {
    // console.log(searchFilm);
    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );
  });
}

export { onSubmit };
