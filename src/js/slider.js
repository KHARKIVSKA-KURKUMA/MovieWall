import Swiper, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import { getTopRatedFilms } from './fetchMovies';
import notAvailablePoster from '../images/poster-not-available.jpg';
import { refs } from './refs';

const swiperTop = refs.swiper;

export const swiper = new Swiper(swiperTop, {
  modules: [Navigation, Autoplay],
  slidesPerView: 8,
  spaceBetween: 8,
  loop: true,
  autoplay: {
    enabled: true,
    delay: 1500,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 4,
    },
    1278: {
      slidesPerView: 8,
      spaceBetween: 8,
    },
  },
});

function renderMarkupSlider(movies) {
  if (!movies) {
    return '';
  }
  return movies
    .map(movie => {
      const posterSrc = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : notAvailablePoster;
      return `
        <li class="filmcard swiper-slide" data-movie="${movie.id}">
        <a href="#" class="filmcard-link swiper-link link">      
              <img class="filmcard-img"
              src="${posterSrc}"
              alt=${movie.title}
              loading="lazy"
              />      

          </a>
        </li>`;
    })
    .join('');
}

let activeLang = localStorage.getItem('lang');
function renderTopRatedMovies() {
  getTopRatedFilms(activeLang).then(data => {
    refs.slider.insertAdjacentHTML(
      'beforeend',
      renderMarkupSlider(data.results)
    );
  });
}

export { renderTopRatedMovies };
