import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getFilmByKeyWord } from './fetchMovies';
import { createPopularMovieMarkUp } from './createPopularMovieMarkUp';
import { refs } from './refs';
import notAvailableResult from '../images/not-available-result.jpg';

// galleryBgImg = document.querySelector('.gallery-container');

let searchFilm;
const url = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg';

function onSubmit(event) {
  event.preventDefault();
  if (!refs.galleryBgImg.classList.contains('container')) {
    refs.galleryBgImg.classList.add('container');
  }
  searchFilm = event.currentTarget.searchQuery.value.trim();
  refs.homeGalleryList.innerHTML = '';
  refs.galleryBgImg.style = 'none';
  // refs.searchForm.innerHTML = '';
  renderMovieByWord(searchFilm);
}

async function renderMovieByWord(searchFilm) {
  await getFilmByKeyWord(searchFilm).then(data => {
    if (!data.results || data.results.length === 0) {
      refs.galleryBgImg.style.height = '250px';
      refs.galleryBgImg.classList.remove('container');
      refs.galleryBgImg.style.margin = '0 32px 32px';
      refs.galleryBgImg.style.backgroundRepeat = 'no-repeat';
      refs.galleryBgImg.style.backgroundPosition = 'center';
      refs.galleryBgImg.style.backgroundImage = `url(${notAvailableResult})`;
      // refs.searchForm.insertAdjacentHTML('afterend', createNotification());
      Notify.failure(
        'Search result not successful. Enter the correct movie name.'
      );
        
      // const stopNotification = () => { setTimeout(refs.homeGalleryList.innerHTML = '', 1000) } 
      // stopNotification();
    }
  
refs.homeGalleryList.insertAdjacentHTML(
      'beforeend',
      createPopularMovieMarkUp(data.results)
     
    );
  });
}

function createNotification() {
  return `<p class='search-notification'>Search result not successful. Enter the correct movie name.</p>`
}
export { onSubmit };
