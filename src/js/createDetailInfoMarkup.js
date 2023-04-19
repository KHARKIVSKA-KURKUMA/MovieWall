import { refs } from './refs';
import notAvailablePoster from '../images/poster-not-available.jpg';
import { getMovieTrailer } from './fetchMovies';
import * as basicLightbox from 'basiclightbox';

function genresDetail(array) {
  return array.map(genre => genre.name).join(', ');
}
let activeLang = localStorage.getItem('lang');

export function clearModal(movie) {
  refs.movieModalContainer.innerHTML = '';
}

function changeModalBackgroundColor(rating) {
  const currentElement = document.querySelector('.params__vote');
  if (rating > 1 && rating < 5) {
    currentElement.classList.add('red');
  }
  if (rating > 5 && rating < 8) {
    currentElement.classList.add('yellow');
  }
  if (rating >= 8) {
    currentElement.classList.add('green');
  }
}

function cutOriginalTitleMobile(title) {
  const text = document.querySelector('.params__text-font');
  const newTitle = title.length >= 20 ? title.slice(0, 20) + '...' : title;
  text.textContent = `${newTitle}`;
}

function createDetailMovieMarkUp(movie) {
  if (!movie) {
    return '';
  } else if (activeLang === 'uk') {
    const posterSrc = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : notAvailablePoster;
    const genres = genresDetail(movie.genres);
    const markup = `
      <div class="modal-wrap">
        <img
            class="modal-img"
            src="${posterSrc}"
            alt="${movie.original_title}" 
        />
        <div class="params">
          <h2 class="params__title">${movie.title}</h2>
          <div class="params__wrap">
            <div class="params__key">
              <p class="params__key__text">Рейтинг/Голосів</p>
              <p class="params__key__text">Популярність</p>
              <p class="params__key__text">Оригінальна назва</p>
              <p class="params__key__text">Жанри</p>
            </div>

            <div class="params__value">
              <p class="">
                <span class="params__vote">${movie.vote_average.toFixed(
                  2
                )} </span> 
                <span class="params__slash">/</span>
                <span class="params__vote_count">${movie.vote_count}</span></p>
              <p class="params__popularity">${movie.popularity.toFixed(1)}</p>
              <p class="params__text-font">${movie.original_title}</p>
              <p class="params__text-font params__text-retreat">${genres}</p>              
            </div>
          </div>
        
          <div class="about">
            <h3 class="about__title">Про фільм</h2>
            <p class="about__overview">${movie.overview}</p>
          </div>
          <div class="modal-buttons">
            <button class="modal-buttons__watched add-to-watched-btn" data-modal-watched>додати до Переглянутих</button>
            <button class="modal-buttons__queue add-to-queue-btn" data-modal-watched>додати до Черги</button>
          </div>
        </div>
      </div>`;
    refs.movieModalContainer.innerHTML = markup;
  } else {
    const posterSrc = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : notAvailablePoster;
    const genres = genresDetail(movie.genres);
    const markup = `
    <div class="modal-wrap">
      <img
          class="modal-img"
          src="${posterSrc}"
          alt="${movie.original_title}" 
      />
      <div class="params">
        <h2 class="params__title">${movie.title}</h2>
        <div class="params__wrap">
          <div class="params__key">
            <p class="params__key__text">Vote/Votes</p>
            <p class="params__key__text">Popularity</p>
            <p class="params__key__text">Original Title</p>
            <p class="params__key__text">Genre</p>
          </div>

          <div class="params__value">
            <p class="">
              <span class="params__vote">${movie.vote_average.toFixed(
                2
              )} </span> 
              <span class="params__slash">/</span>
              <span class="params__vote_count">${movie.vote_count}</span></p>
            <p class="params__popularity">${movie.popularity.toFixed(1)}</p>
            <p class="params__text-font">${movie.original_title}</p>
            <p class="params__text-font params__text-retreat">${genres}</p>              
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

  changeModalBackgroundColor(movie.vote_average);
  cutOriginalTitleMobile(movie.original_title);
}

export { createDetailMovieMarkUp };

export async function showtTrailer(id) {
  const data = await getMovieTrailer(id, activeLang)
    .then(({ results }) =>
      results.map(item => {
        if (item.site === 'YouTube') {
          return `https://www.youtube.com/embed/${item.key}`;
        }
      })
    )
    .catch(err => console.log(err));
  const urlTrailer = data[0];
  markupTrailer(urlTrailer);
}

function markupTrailer(url) {
  if (activeLang === 'uk') {
    const trailerMobileMarkup = `
    <button type= "button" class="modal-buttons__watched button-trailer">
     Дивитись трейлер
    </button>
    <div class="white"></div>`;
    refs.movieModalContainer.insertAdjacentHTML(
      'beforeend',
      trailerMobileMarkup
    );
  } else {
    const trailerMobileMarkup = `
    <button type= "button" class="modal-buttons__watched button-trailer">
     Watch a trailer
    </button>
    <div class="white"></div>`;
    refs.movieModalContainer.insertAdjacentHTML(
      'beforeend',
      trailerMobileMarkup
    );
  }

  const trailerRef = document.querySelector('.button-trailer');
  if (!url) {
    trailerRef.classList.add('is-hidden');
  }
  trailerRef.onclick = () => {
    basicLightbox
      .create(
        `  <iframe
        width="650"
        height="400"
        class="trailer__video"
        src="${url}?rel=0&showinfo=0&autoplay=1"
        frameborder="0"
        loading="lazy"
      </iframe>`
      )
      .show();
  };
}
