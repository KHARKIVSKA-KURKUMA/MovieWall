import { genresGalleryEditor } from './genresFormatEditor';
import { refs } from './refs';

function createDetailMovieMarkUp(movie) {
  if (!movie) {
    return '';
  }
  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : 'Haven`t poster';
  const markup = `<img
    class="modal-img"
    src="${posterSrc}"
    alt="Movie-Poster"
  />
  <div>
    <h2 class="modal-title">${movie.title}</h2>
  </div>`;
  refs.movieModalContainer.innerHTML = markup;
}
export { createDetailMovieMarkUp };
