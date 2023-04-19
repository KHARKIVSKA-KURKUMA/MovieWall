import { refs } from './refs';
import { fetchMovieForWatched } from './fetchMovies';
import notAvailablePoster from '../images/poster-not-available.jpg';
import { renderPopularMovies } from './renderPopularPoster';
import noDataPoster from '../images/photo_clear-watched.png';
const clearWatch = document.querySelector('.div');
const isMovieInQueue = () => {
  let queueMovies = null;
  try {
    queueMovies = JSON.parse(localStorage.getItem('Queue movies'));
  } catch {
    return;
  }
  return queueMovies;
};
let queueMovies = isMovieInQueue();

if (queueMovies == null || queueMovies.length === 0) {
  clearLibrary();
} else if (queueMovies.length > 0) {
  refs.queuedBtn.classList.add('is-active');
  renderLibrary(queueMovies);
}

function renderPoster() {
  let activeLang = localStorage.getItem('lang');
  if (activeLang === 'uk') {
    clearWatch.insertAdjacentHTML('beforeend', createPosterUk());
  } else {
    clearWatch.insertAdjacentHTML('beforeend', createPoster());
  }
}

function renderLibrary(movies) {
  for (let i = 0; i < movies.length; i += 1) {
    let activeLang = localStorage.getItem('lang');
    fetchMovieForWatched(movies[i], activeLang).then(data => {
      refs.homeGalleryList.insertAdjacentHTML(
        'beforeend',
        createLibraryMovieItem(data)
      );
    });
  }
}

const onQueueBtnClick = event => {
  event.preventDefault();
  refs.queuedBtn.classList.add('is-active');
  clearLibrary();
  queueMovies = isMovieInQueue();
  if (queueMovies == null || queueMovies.length === 0) {
    clearWatch.innerHTML = '';
    renderPoster();
  } else if (queueMovies.length > 0) {
    clearLibrary();
    clearWatch.innerHTML = '';
    renderLibrary(queueMovies);
  }
};
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
  if (queueMovies == null || queueMovies.length === 0) {
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

refs.queuedBtn.addEventListener('click', onQueueBtnClick);

refs.homeBtn.addEventListener('click', e => {
  e.preventDefault();
  clearLibrary();
  refs.paginationEl.style.display = 'block';
  renderPopularMovies();
});
