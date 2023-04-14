import { genresGalleryEditor } from './genresFormatEditor';
import { refs } from './refs';
import { genresItems } from '../data/genres';
import notAvailablePoster from '../images/poster-not-available.jpg';

function createDetailMovieMarkUp(movie) {
  if (!movie) {
    return '';
  }
  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : notAvailablePoster;
  const markup = `<img
      class="modal-img"
      src="${posterSrc}"
      alt="${movie.original_title}" />
    <div class="params">
      <h2 class="params__title">${movie.title}</h2>
      <div class="params__wrap">
          <div class="params__key">
            <p class="params__key__text params__text-retreat">Vote / Votes</p>
            <p class="params__key__text params__text-retreat">Popularity</p>
            <p class="params__key__text params__text-retreat">Original Title</p>
            <p class="params__key__text">Genre</p>
          </div>
        <div class="params__value">
          <p class="params__text-retreat">
            <span class="params__vote">${movie.vote_average.toFixed(2)} </span> 
            <span class="params__slash"> / </span>
            <span class="params__vote_count">${movie.vote_count}</span></p>
          <p class="params__popularity params__text-retreat">${movie.popularity.toFixed(
            1
          )}</p>
          <p class="params__text-font params__text-retreat">${
            movie.original_title
          }</p>
          <p class="params__text-font">Genre</p>
        </div>
      </div>

      <div class="about">
        <h3 class="about__title">About</h2>
        <p class="about__overview">${movie.overview}</p>
      </div>

      <div class="modal-buttons">
        <button class="modal-buttons__watched" data-modal-watched>add to Watched</button>
        <button class="modal-buttons__queue" data-modal-watched>add to queue</button>
      </div>

      <div class="trailer"> Це місце для трейлера
        
      </div>
    </div>`;
  refs.movieModalContainer.innerHTML = markup;
}
export { createDetailMovieMarkUp };
