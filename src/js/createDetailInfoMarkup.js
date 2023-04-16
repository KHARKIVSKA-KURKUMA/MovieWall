import { refs } from './refs';
import notAvailablePoster from '../images/poster-not-available.jpg';
import { getMovieTrailer } from './fetchMovies';

function cutTitleMovie(movieTitle) {
  return  movieTitle = movieTitle.length <= 15 ? movieTitle : movieTitle.slice(movieTitle, 15) + "..."; 
}

function genresDetail(array) {
  return array.map(genre => genre.name).join(', ');
}

export function clearModal(movie) {
  refs.movieModalContainer.innerHTML = '';
}


function createDetailMovieMarkUp(movie) {
  if (!movie) {
    return '';
  }
  
  const cutTitle = cutTitleMovie(movie.original_title);
  const genres = genresDetail(movie.genres);

  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : notAvailablePoster;
    
   const markup = `
      <div class="modal-wrap">
        <img
            class="modal-img"
            src="${posterSrc}"
            alt="${movie.original_title}" 
        />
        
        <div class="params">
          <h2 class="params__title">${movie.original_title}</h2>
          <div class="params__wrap">
            <div class="params__key">
              <p class="params__key__text params__text-retreat">Vote / Votes</p>
              <p class="params__key__text params__text-retreat">Popularity</p>
              <p class="params__key__text params__text-retreat">Original Title</p>
              <p class="params__key__text">Genre</p>
            </div>

            <div class="params__value">
              <p class="params__text-common">
                <span class="params__vote">${movie.vote_average.toFixed(2)} </span> 
                <span class="params__slash">/</span>
                <span class="params__vote_count">${movie.vote_count}</span></p>
              <p class="params__popularity params__text-common">${movie.popularity.toFixed(1)}</p>
              <p class="params__text-font params__text-common">${cutTitle}</p>
              <p class="params__text-font params__text-common">${genres}</p>
            </div>
          </div>
        
          <div class="about">
            <h3 class="about__title">About</h2>
            <p class="about__overview">${movie.overview}</p>
          </div>
          <div class="modal-buttons">
            <button class="modal-buttons__watched add-to-watched-btn" data-modal-watched>add to Watched</button>
            <button class="modal-buttons__queue add-to-queue-btn" data-modal-watched>add to queue</button>
          </div>
        </div>
      </div>`;
  refs.movieModalContainer.innerHTML = markup;
}

export { createDetailMovieMarkUp };

export function showtTrailer(id) {
  getMovieTrailer(id).then(({ results }) => {

    if (results.length === 0) {
      console.log("results are empty");
      const message =
        `<h3 class="trailer-missing"> There is no trailer for this movie 
        </h3>`;
      refs.movieModalContainer.insertAdjacentHTML('beforeend', message);

    } else if (results.length >= 1) {
        const keyTrailer = results[0].key ;
        markupTrailer(keyTrailer);
    }
  });
};

function markupTrailer(key) {
        const trailerMarkup = `
          <button class="button-trailer" type="button"> 
              <a
                href="https://www.youtube.com/watch?v=${key}
                target="_blank"
                rel="noreferrer noopener nofollow"
                > 
                  <span class="trailer-message">Watch a trailer</span>
              </a>
          </button>

          <div class="trailer__wrapper">
            <iframe 
              width="240" 
              height="120"
              class="trailer__video"
              src="https://www.youtube.com/watch?v=${key}"
              allow="autoplay" 
              loading="lazy"
              rel="noopener noreferrer nofollow"> 
            </iframe>
        </div>`;
        refs.movieModalContainer.insertAdjacentHTML('beforeend', trailerMarkup);
}