import './js/watchedLibrary';
import { refs } from './js/refs';
import { renderPopularMovies } from './js/renderPopularPoster';
import { onSubmit } from './js/renderFilmByName';
import { headerFunctionality } from './js/swichBtnOnClick';
import { OnFormSignIn, OnFormSignUp, onGoogleClick } from './js/firebase';
import { onLangSelected } from './js/language';
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
import { onGenresClick } from './js/renderFilmByGenres';
// import { onLanguageClick } from './js/renderFilmByLanguage';
import { onOriginalLangClick } from './js/renderFilmsByLang';
import { switcherThemeFunctionality } from './js/changeThemeOnClick';
import { onUpBtn } from './js/upBtn';
import { onCloseFilter, onOpenFilter } from './js/onOpenFilter';

// renderPopularMovies();
headerFunctionality();
switcherThemeFunctionality();
onLangSelected();

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
refs.filterByGenres.addEventListener('change', onGenresClick);
// refs.filterByLanguage.addEventListener('click', onLanguageClick);
refs.filterByLanguage.addEventListener('change', onOriginalLangClick);
refs.openFilter.addEventListener('click', onOpenFilter);
refs.closeFilter.addEventListener('click', onCloseFilter);
window.addEventListener('scroll', onUpBtn);
