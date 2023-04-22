import './js/library';
import { refs } from './js/refs';
import { onSubmit } from './js/renderFilmByName';
import { headerFunctionality } from './js/swichBtnOnClick';
import {
  OnFormSignIn,
  OnFormSignUp,
  onGoogleClick,
  exitOnClickExit,
  onAnonClick,
} from './js/firebase';
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
import { onOriginalLangClick } from './js/renderFilmsByLang';
import { switcherThemeFunctionality } from './js/changeThemeOnClick';
import { onUpBtn } from './js/upBtn';
import { returnHomeOnClickLogo } from './js/returnHomeOnClickLogo';
import { onCloseFilter, onOpenFilter } from './js/onOpenFilter';

import { renderTopRatedMovies } from './js/slider';
import { ref } from 'firebase/database';

headerFunctionality();
switcherThemeFunctionality();
onLangSelected();

renderTopRatedMovies();

refs.linkEl.addEventListener('click', returnHomeOnClickLogo);
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
refs.filterByLanguage.addEventListener('change', onOriginalLangClick);
refs.openFilter.addEventListener('click', onOpenFilter);
refs.closeFilter.addEventListener('click', onCloseFilter);
window.addEventListener('scroll', onUpBtn);
refs.slider.addEventListener('click', onOpenModal);
refs.exitBtn.addEventListener('click', exitOnClickExit);
refs.anonBtn.addEventListener('click', onAnonClick);
