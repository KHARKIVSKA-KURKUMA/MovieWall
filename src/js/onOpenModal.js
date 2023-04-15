import {
  onEscPress,
  onTeamModalEscPress,
  onSignModalEscPress,
  onSignUpModalEscPress,
} from './onCloseModal';
import { renderDetailInfoPoster } from './renderDetailInfoPoster';
import { refs } from './refs';
import { onCloseSign, onCloseSignUp } from './onCloseModal';

export function onOpenModal(e) {
  const getCard = e.target.closest('.filmcard');
  if (!getCard) {
    return;
  }

  const id = getCard.dataset.movie;
  renderDetailInfoPoster(id);
  refs.movieModal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscPress);
  refs.body.classList.add('no-scroll');
}

export function onOpenTeamModal() {
  refs.teamModal.classList.remove('is-hidden');
  window.addEventListener('keydown', onTeamModalEscPress);
  // refs.body.classList.add('no-scroll');
}
export function onOpenSignModal() {
  refs.signInBackdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onSignModalEscPress);
  refs.body.classList.add('no-scroll');
  onCloseSignUp();
}
export function onOpenSignUpModal() {
  refs.signUpBackdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onSignUpModalEscPress);
  refs.body.classList.add('no-scroll');
  onCloseSign();
}

