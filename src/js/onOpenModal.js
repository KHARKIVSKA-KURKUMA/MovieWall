import { onEscPress, onTeamModalEscPress} from './onCloseModal';
import { renderDetailInfoPoster } from './renderDetailInfoPoster';
import { refs } from './refs';

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