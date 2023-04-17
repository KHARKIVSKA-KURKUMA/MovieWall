import {
  genresGalleryEditor,
  genresGalleryEditorUk,
} from './genresFormatEditor';
import notAvailablePoster from '../images/poster-not-available.jpg';
import notAvailablePosterDark from '../images/poster-not-available-dark.png';
let activeLang = localStorage.getItem('lang');
function createPopularMovieMarkUp(movies) {
  if (!movies) {
    return '';
  }
  if (activeLang === 'uk') {
    return movies
      .map(movie => {
        const genres = genresGalleryEditorUk(movie.genre_ids);
        const movieDate = movie.release_date ?? movie.first_air_date ?? null;
        const movieYear = movieDate ? movieDate.slice(0, 4) : 'Невідомий рік';
        const posterSrc = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : notAvailablePoster;
        return `
      <li class="filmcard" data-movie="${movie.id}">
      <a href="#" class="filmcard-link link">      
            <img class="filmcard-img"
            src="${posterSrc}"
            alt=${movie.title}
            loading="lazy"
            />      
        <div class="movie-info">
          <p class="filmcard-name">${movie.title}</p>
          <p class="filmcard-genre"> ${genres} | ${movieYear}</p> 
        </div>
        </a>
      </li>`;
      })
      .join('');
  }
  return movies
    .map(movie => {
      const genres = genresGalleryEditor(movie.genre_ids);
      const movieDate = movie.release_date ?? movie.first_air_date ?? null;
      const movieYear = movieDate ? movieDate.slice(0, 4) : 'Unknown year';

      const posterSrc = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : notAvailablePoster;

      return `
      <li class="filmcard" data-movie="${movie.id}">
      <a href="#" class="filmcard-link link">      
            <img class="filmcard-img"
            src="${posterSrc}"
            alt=${movie.title}
            loading="lazy"
            />      
        <div class="movie-info">
          <p class="filmcard-name">${movie.title}</p>
          <p class="filmcard-genre"> ${genres} | ${movieYear}</p> 
        </div>
        </a>
      </li>`;
    })
    .join('');
}
export { createPopularMovieMarkUp };
