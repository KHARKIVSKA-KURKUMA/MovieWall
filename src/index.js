import './js/watchedLibrary'
import { refs } from './js/refs';
import { renderPopularMovies } from './js/renderPopularPoster';
import { onSubmit } from './js/renderFilmByName';
import {
  onOpenModal,
  onOpenTeamModal,
  onOpenSignModal,
  onOpenSignUpModal,
} from './js/onOpenModal';
import { onCloseModal, onCloseTeamModal } from './js/onCloseModal';

import {headerFunctionality} from './js/swichBtnOnClick';
import {
  onBackdropClick,
  onTeamBackdropClick,
  onCloseSign,
  onSignBackdropClick,
} from './js/onCloseModal';


renderPopularMovies();
headerFunctionality();

refs.homeGalleryList.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.searchForm.addEventListener('submit', onSubmit);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.closeTeamModalBtn.addEventListener('click', onCloseTeamModal);
refs.closeSignInModal.addEventListener('click', onCloseSign);
refs.teamModalBtn.addEventListener('click', onOpenTeamModal);
refs.teamBackdrop.addEventListener('click', onTeamBackdropClick);
refs.signInBackdrop.addEventListener('click', onSignBackdropClick);
refs.openSignInModal.addEventListener('click', onOpenSignModal);
refs.openSignUpModal.addEventListener('click', onOpenSignUpModal);
