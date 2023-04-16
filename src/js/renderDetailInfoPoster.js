import { getDetailAboutMovie } from './fetchMovies';
import { createDetailMovieMarkUp } from './createDetailInfoMarkup';
import { refs } from './refs';
import { showtTrailer } from './createDetailInfoMarkup';
import { clearModal } from './createDetailInfoMarkup';
import { addLocalStorage } from './addToWatchedLocalStorage';
import { addQueueLocalStorage } from './addToQueueLocalStorage';

export function renderDetailInfoPoster(id) {
  getDetailAboutMovie(id).then(data => {
    clearModal(data);
    createDetailMovieMarkUp(data);
    showtTrailer(data.id);
    addLocalStorage(data);
    addQueueLocalStorage(data)
  });
}
