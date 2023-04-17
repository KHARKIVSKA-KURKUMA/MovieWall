import { refs } from './refs';
import { fetchMovieForWatched } from './fetchMovies';
import notAvailablePoster from '../images/poster-not-available.jpg';
const isMovieInWatched = () => {
  let watchedMovies = null;
  try {
    watchedMovies = JSON.parse(localStorage.getItem('Watched movies'));
  } catch {
    return;
  }
  return watchedMovies;
};
const watchedBtn = document.querySelector('.button-watched');
const galleryContainer = document.querySelector('.gallery-container');
let watchedMovies = isMovieInWatched();

if (watchedMovies == null || watchedMovies.length === 0) {
  clearLibrary();
} else if (watchedMovies.length > 0) {
  watchedBtn.classList.add('is-active');
  renderLibrary(watchedMovies);
}
function renderPoster() {
  galleryContainer.insertAdjacentHTML('beforeend', createPoster());
}
function renderLibrary(movies) {
  for (let i = 0; i < movies.length; i += 1) {
    fetchMovieForWatched(movies[i]).then(data => {
      refs.homeGalleryList.insertAdjacentHTML(
        'beforeend',
        createLibraryMovieItem(data)
      );
    });
  }
}

const onWatchedBtnClick = event => {
  watchedBtn.classList.add('is-active');

  clearLibrary();

  watchedMovies = isMovieInWatched();

  if (watchedMovies == null || watchedMovies.length === 0) {
    galleryContainer.innerHTML = '';
    renderPoster();
  } else if (watchedMovies.length > 0) {
    clearLibrary();
    renderLibrary(watchedMovies);
  }
};
function clearLibrary() {
  refs.homeGalleryList.innerHTML = '';
}
function createPoster() {
  return `
  <div class="clear-watched">
      <div class="filmcard">
    <img class="filmcard-img"  src="./images/photo_clear-watched.jpg" alt="title"loading="lazy"/>
    <div class="movie-info" >
      <p class="filmcard-name clear-watched-name" >NOTING!!</p>
      <p class="filmcard-genre clear-watched-problems">Your collection list is empty.</p>
    </div>
  </a>
</div>
</div>
      `;
}
function createLibraryMovieItem(data) {
  if (watchedMovies == null || watchedMovies.length === 0) {
    return;
  }
  const {
    id,
    title,
    overview,
    poster_path,
    release_date,
    genres,
    original_title,
    popularity,
    vote_average,
    vote_count,
  } = data;
  const posterSrc = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : notAvailablePoster;
  const genresMovies = data.genres.map(element => element.name);
  const genresMovie = genresMovies.join(', ')
    ? genresMovies.slice(0, 2).join(', ')
    : 'Unknown genres';
  const movieDate = release_date ?? null;
  const movieYear = movieDate ? movieDate.slice(0, 4) : 'Unknown year';
  return `
      <li class="filmcard">
  <a href="" class="filmcard-link link" data-id="${id}">
    <img class="filmcard-img"  src="${posterSrc}" alt="${title}"loading="lazy"/>
    <div class="movie-info" >
      <p class="filmcard-name" >${title}</p>
      <p class="filmcard-genre">${genresMovie}...|${movieYear}</p>
    </div>
  </a>
</li>
      `;
}

watchedBtn.addEventListener('click', onWatchedBtnClick);

const homeBtn = document.querySelector('.js-home');
homeBtn.addEventListener('click', e => {
  location.reload();
});
