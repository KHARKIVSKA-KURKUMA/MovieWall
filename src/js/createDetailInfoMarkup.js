import { refs } from './refs';
import notAvailablePoster from '../images/poster-not-available.jpg';
import { getMovieTrailer } from './fetchMovies';

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
              <p class="params__key__text params__text-retreat">Vote/Votes</p>
              <p class="params__key__text params__text-retreat">Popularity</p>
              <p class="params__key__text params__text-retreat">Original Title</p>
              <p class="params__key__text">Genre</p>
            </div>

            <div class="params__value">
              <p class="params__text-retreat">
                <span class="params__vote">${movie.vote_average.toFixed(
                  2
                )} </span> 
                <span class="params__slash">/</span>
                <span class="params__vote_count">${movie.vote_count}</span></p>
              <p class="params__popularity params__text-retreat">${movie.popularity.toFixed(
                1
              )}</p>
              <p class="params__text-font params__text-retreat">${movie.original_title}</p>
              <p class="params__text-font params__text-retreat">${genresDetail(movie.genres)}</p>
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
  changeModalBackgroundColor(movie.vote_average);
}

export { createDetailMovieMarkUp };

export async function showtTrailer(id) {
  const data = await getMovieTrailer(id)
    .then(({ results }) =>
      results.map(item => {
        if (item.site === 'YouTube') {
          return `https://www.youtube.com/embed/${item.key}`;
        }
      })
    )
    .catch(err => console.log(err));
  
  if (data[0] === '' || typeof(data[0]) === 'undefined') {
    const trailerErrorMessage = `
      <div class="trailer-message"> 
        <h3> sorry, there is no trailer for this movie <h3>
      </div>`
    refs.movieModalContainer.insertAdjacentHTML('beforeend', trailerErrorMessage);
    return;
  }
  const urlTrailer = data[0];
  markupTrailer(urlTrailer);
}
function markupTrailer(url) {
  const trailerMarkup = `
          <div class="trailer-wrapper">
            <iframe 
              width="280" 
              height="160"
              class="trailer__video"
              src="${url}?rel=0&showinfo=0&autoplay=1"
              allow="autoplay" 
              loading="lazy"
            </iframe>
        </div>`;
  refs.movieModalContainer.insertAdjacentHTML('beforeend', trailerMarkup);
}

function changeModalBackgroundColor(rating) {
  const modalMovie = document.querySelector('.modal')
  if (rating > 1 && rating < 5) {
    modalMovie.style.backgroundColor = "red";
  }
  if (rating > 5 && rating < 8) {
    modalMovie.style.backgroundColor = "yellow";
  }
   if (rating >= 8) {
    modalMovie.style.backgroundColor = "green";
  }
}

