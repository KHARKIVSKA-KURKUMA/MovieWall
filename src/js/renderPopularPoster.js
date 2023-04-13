import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import { getPopularFilms } from './fetch-poster';

function renderPopularMovies() {
  getPopularFilms().then(data => {
    console.log(data.results);
    refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
    );
  });
}
export { renderPopularMovies };
