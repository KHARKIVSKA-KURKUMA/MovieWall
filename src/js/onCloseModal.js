import { refs } from './refs';


export function onCloseModal() {
  refs.modal.classList.add('is-hidden');
  refs.movieModalContainer.innerHTML = '';
  refs.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onEscPress);
}

export function onEscPress(event) {
  if (event.code === 'Escape') {
onCloseModal();
}
}

export function onBackdropClick (event) {
  if (event.currentTarget === event.target) {
  onCloseModal();
  }
  }
