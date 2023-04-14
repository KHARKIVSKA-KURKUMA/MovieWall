import { refs } from './refs';
export function onCloseModal() {
  refs.modal.classList.add('is-hidden');
  refs.movieModalContainer.innerHTML = '';
  refs.body.classList.remove('no-scroll');
}
export function onEscPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  window.removeEventListener('keydown', onEscPress);
  onCloseModal();
}
