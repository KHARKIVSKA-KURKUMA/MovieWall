import { genresGalleryEditor } from './genresFormatEditor';
function createPopularMovieMarkUp(movies) {
  if (!movies) {
    return '';
  }
  return movies
    .map(movie => {
      const genres = genresGalleryEditor(movie.genre_ids);
      const posterSrc = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : 'Haven`t poster';
      const movieDate = movie.release_date ?? movie.first_air_date ?? null;
      const movieYear = movieDate ? movieDate.slice(0, 4) : 'Unknown year';
      return `
      <li class="movie-card" data-movie="${movie.id}">
        <div class="movie-holder">        
            <img class="movie-image"
            src="${posterSrc}"
            alt=${movie.title}
            loading="lazy"
            />      
        </div>
        <div class="movie-info">
          <p class="movie-name">${movie.title}</p>
          <p class="movie-desc"> ${genres} | ${movieYear}</p> 
        </div>
      </li>`;
    })
    .join('');
}
export { createPopularMovieMarkUp };
