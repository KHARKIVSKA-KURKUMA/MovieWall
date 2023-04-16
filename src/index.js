import { refs } from './js/refs';
import { renderPopularMovies } from './js/renderPopularPoster';
import { onSubmit } from './js/renderFilmByName';
import { headerFunctionality } from './js/swichBtnOnClick';
import { OnFormSignIn, OnFormSignUp, onGoogleClick } from './js/firebase';
import {
  onOpenModal,
  onOpenTeamModal,
  onOpenSignModal,
  onOpenSignUpModal,
} from './js/onOpenModal';
import {
  onCloseModal,
  onCloseTeamModal,
  onBackdropClick,
  onTeamBackdropClick,
  onCloseSign,
  onCloseSignUp,
} from './js/onCloseModal';
import { onUpBtn } from './js/upBtn';

renderPopularMovies();
headerFunctionality();

refs.homeGalleryList.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.searchForm.addEventListener('submit', onSubmit);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.closeTeamModalBtn.addEventListener('click', onCloseTeamModal);
refs.closeSignInModal.addEventListener('click', onCloseSign);
refs.closeSignUpModal.addEventListener('click', onCloseSignUp);
refs.teamModalBtn.addEventListener('click', onOpenTeamModal);
refs.teamBackdrop.addEventListener('click', onTeamBackdropClick);
refs.openSignInModal.addEventListener('click', onOpenSignModal);
refs.openSignInModalNd.addEventListener('click', onOpenSignModal);
refs.openSignUpModal.addEventListener('click', onOpenSignUpModal);
refs.formSignIn.addEventListener('submit', OnFormSignIn);
refs.formSignUp.addEventListener('submit', OnFormSignUp);
refs.SignInWithGoogle.addEventListener('click', onGoogleClick);
refs.SignUpWithGoogle.addEventListener('click', onGoogleClick);
window.addEventListener('scroll', onUpBtn);