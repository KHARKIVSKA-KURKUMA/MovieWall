import { refs } from './js/refs';
import { renderPopularMovies } from './js/renderPopularPoster';
import { renderDetailInfoPoster } from './js/renderDetailInfoPoster';

renderPopularMovies();

refs.homeGalleryList.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);

function onOpenModal(e) {
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

function onEscPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  window.removeEventListener('keydown', onEscPress);
  onCloseModal();
}
function onCloseModal() {
  refs.modal.classList.add('is-hidden');
  refs.movieModalContainer.innerHTML = '';
  refs.body.classList.remove('no-scroll');
}
