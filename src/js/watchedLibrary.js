import { refs } from './refs';
import { fetchMovieForWatched } from './fetchMovies';
import notAvailablePoster from '../images/poster-not-available.jpg';
import { renderPopularMovies } from './renderPopularPoster';
import noDataPoster from '../images/photo_clear-watched.png';

const isMovieInWatched = () => {
  let watchedMovies = null;
  try {
    watchedMovies = JSON.parse(localStorage.getItem('Watched movies'));
  } catch {
    return;
  }
  return watchedMovies;
};
let watchedMovies = isMovieInWatched();

if (watchedMovies == null || watchedMovies.length === 0) {
  clearLibrary();
} else if (watchedMovies.length > 0) {
  refs.watchedBtn.classList.add('is-active');
  renderLibrary(watchedMovies);
}
function renderPoster() {
  let activeLang = localStorage.getItem('lang');
  if (activeLang === 'uk') {
    refs.galleryContainer.insertAdjacentHTML('beforeend', createPosterUk());
  } else {
    refs.galleryContainer.insertAdjacentHTML('beforeend', createPoster());
  }
}

function renderLibrary(movies) {
  for (let i = 0; i < movies.length; i += 1) {
    let activeLang = localStorage.getItem('lang');
    fetchMovieForWatched(movies[i], activeLang).then(data => {
      refs.homeGalleryList.innerHTML = '';
      refs.galleryContainer.insertAdjacentHTML(
        'beforeend',
        createLibraryMovieItem(data)
      );
    });
  }
}

export function onWatchedBtnClick(event) {
  event.preventDefault();
  refs.watchedBtn.classList.add('is-active');
  clearLibrary();
  watchedMovies = isMovieInWatched();
  if (watchedMovies == null || watchedMovies.length === 0) {
    refs.galleryContainer.innerHTML = '';
    refs.paginationEl.style.display = 'none';
    clearLibrary();
    renderPoster();
  } else if (watchedMovies.length > 0) {
    clearLibrary();
    refs.galleryContainer.innerHTML = '';
    refs.paginationEl.style.display = 'none';
    renderLibrary(watchedMovies);
  }
}
function clearLibrary() {
  refs.homeGalleryList.innerHTML = '';
}
function createPoster() {
  return `
  <div class="clear-watched">
      <div>
    <img  src="${noDataPoster}" alt="title"loading="lazy"/>
    <div class="movie-info" >
      <p class="filmcard-name clear-watched-name" >NOTING!!</p>
      <p class="filmcard-genre clear-watched-problems">Your collection list is empty.</p>
    </div>
</div>
</div>
      `;
}
function createPosterUk() {
  return `
  <div class="clear-watched">
      <div>
    <img  src="${noDataPoster}" alt="title"loading="lazy"/>
    <div class="movie-info" >
      <p class="filmcard-name clear-watched-name" >НІЧОГО!!</p>
      <p class="filmcard-genre clear-watched-problems">Ваша колекція пуста.</p>
    </div>
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
  let genre = null;
  if (genresMovies.length > 2) {
    genre = `${genresMovie}...`;
  } else {
    genre = `${genresMovie}`;
  }
  const movieDate = release_date ?? null;
  const movieYear = movieDate ? movieDate.slice(0, 4) : 'Unknown year';
  return `<li class="filmcard" data-movie="${data.id}">
  <a href="#" class="filmcard-link link">
        <img class="filmcard-img"
        src="${posterSrc}"
        alt=${data.title}
        loading="lazy"
        />
    <div class="movie-info">
      <p class="filmcard-name">${data.title}</p>
      <p class="filmcard-genre"> ${genre} | ${movieYear}</p>
    </div>
    </a>
  </li>`;
}

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);

refs.libraryJs.addEventListener('click', onWatchedBtnClick);

// let activePage = localStorage.getItem('page');
// console.log(activePage);
// if (
//   activePage === 'library' ||
//   activePage === 'queue' ||
//   activePage === 'watched'
// ) {
//   if (activePage === 'queue') {
//     refs.queuedBtn.classList.add(refs.activeClass);
//     refs.watchedBtn.classList.remove(refs.activeClass);
//   } else {
//     refs.watchedBtn.classList.add(refs.activeClass);
//     refs.queuedBtn.classList.remove(refs.activeClass);
//   }
//   refs.libraryJs.classList.add(refs.activeClass);
//   refs.form.hidden = true;
//   refs.libraryEl.style.display = 'flex';
//   refs.homeBtn.classList.remove(refs.activeClass);
// } else if (activePage === 'home' || activePage === 'null') {
//   refs.form.hidden = false;
//   let activeLang = localStorage.getItem('lang');
//   refs.libraryEl.style.display = 'none';
//   refs.homeBtn.classList.add(refs.activeClass);
//   refs.libraryJs.classList.remove(refs.activeClass);
// }
