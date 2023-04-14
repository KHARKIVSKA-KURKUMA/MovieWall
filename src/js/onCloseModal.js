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

export function onBackdropClick (event) {
  if (event.currentTarget === event.target) {
  onCloseModal();
  }
  }

  export function onTeamBackdropClick (event) {
    if (event.currentTarget === event.target) {
    onCloseTeamModal();
    }
    }
