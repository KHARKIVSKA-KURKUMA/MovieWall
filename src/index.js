import { refs } from './js/refs';
import { renderPopularMovies } from './js/renderPopularPoster';
import { renderDetailInfoPoster } from './js/renderDetailInfoPoster';

renderPopularMovies();

refs.homeGalleryList.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  const getCard = e.target.closest('.movie-card');
  if (!getCard) {
    return;
  }
  const id = getCard.dataset.movie;
  renderDetailInfoPoster(id);
  refs.movieModal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscPress);
}

function onEscPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  window.removeEventListener('keydown', onEscPress);
  onCloseModal();
}
function onCloseModal() {
  refs.movieModal.classList.add('is-hidden');
  refs.movieModalContainer.innerHTML = '';
}
