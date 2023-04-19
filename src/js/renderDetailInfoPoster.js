import { getDetailAboutMovie } from './fetchMovies';
import { createDetailMovieMarkUp } from './createDetailInfoMarkup';
import { showtTrailer } from './createDetailInfoMarkup';
import { clearModal } from './createDetailInfoMarkup';
import { addLocalStorage } from './addToWatchedLocalStorage';
import { addQueueLocalStorage } from './addToQueueLocalStorage';

export function renderDetailInfoPoster(id, lang) {
  getDetailAboutMovie(id, lang).then(data => {
    clearModal(data);
    createDetailMovieMarkUp(data);
    showtTrailer(id);
    addLocalStorage(data);
    addQueueLocalStorage(data);
  });
}
