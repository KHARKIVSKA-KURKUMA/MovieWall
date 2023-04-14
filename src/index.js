import { refs } from './js/refs';
import { renderPopularMovies } from './js/renderPopularPoster';
import { onSubmit } from './js/renderFilmByName';
import { onOpenModal, onOpenTeamModal } from './js/onOpenModal';
import { onCloseModal, onCloseTeamModal } from './js/onCloseModal';
import { onBackdropClick, onTeamBackdropClick } from './js/onCloseModal';

renderPopularMovies();

refs.homeGalleryList.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.searchForm.addEventListener('submit', onSubmit);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.closeTeamModalBtn.addEventListener('click', onCloseTeamModal);
refs.teamModalBtn.addEventListener('click', onOpenTeamModal);
refs.teamBackdrop.addEventListener('click', onTeamBackdropClick);
