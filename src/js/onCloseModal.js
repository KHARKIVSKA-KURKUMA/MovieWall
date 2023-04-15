import { refs } from './refs';

export function onCloseModal() {
  refs.modal.classList.add('is-hidden');
  refs.movieModalContainer.innerHTML = '';
  refs.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onEscPress);
}

export function onCloseTeamModal() {
  refs.teamModal.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onTeamModalEscPress);
}

export function onCloseSign() {
  refs.signInBackdrop.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onSignModalEscPress);
}
export function onCloseSignUp() {
  refs.signUpBackdrop.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onSignUpModalEscPress);
}
export function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
export function onTeamModalEscPress(event) {
  if (event.code === 'Escape') {
    onCloseTeamModal();
  }
}
export function onSignModalEscPress(event) {
  if (event.code === 'Escape') {
    onCloseSign();
  }
}
export function onSignUpModalEscPress(event) {
  if (event.code === 'Escape') {
    onCloseSignUp();
  }
}

export function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

export function onTeamBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseTeamModal();
  }
}
