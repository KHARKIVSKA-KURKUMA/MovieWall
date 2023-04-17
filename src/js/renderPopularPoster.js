import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { getPopularFilms } from './fetchMovies';

function renderPopularMovies(id) {
  getPopularFilms(id).then(data => {
    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );
  });
}
export { renderPopularMovies };
