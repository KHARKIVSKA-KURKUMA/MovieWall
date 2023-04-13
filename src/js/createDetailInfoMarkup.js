import { genresGalleryEditor } from './genresFormatEditor';

function createDetailMovieMarkUp(movie) {
  if (!movie) {
    return '';
  }
  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : 'Haven`t poster';
  return `<img
    class="modal__img"
    src="${posterSrc}"
    alt=""
    width="240"
    height="357"
  />
  <div>
    <h2 class="modal__title">${movie.title}</h2>
  </div>`;
}
export { createDetailMovieMarkUp };
