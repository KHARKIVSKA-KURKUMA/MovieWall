import { refs } from './js/refs';
import { renderPopularMovies } from './js/renderPopularPoster';
import { onSubmit } from './js/renderFilmByName';
import { onOpenModal } from './js/onOpenModal';
import { onCloseModal } from './js/onCloseModal';
import { onBackdropClick } from './js/onCloseModal';

renderPopularMovies();

refs.homeGalleryList.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.searchForm.addEventListener('submit', onSubmit);
refs.backdrop.addEventListener('click', onBackdropClick);
