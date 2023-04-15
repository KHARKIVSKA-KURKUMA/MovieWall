import { getDetailAboutMovie } from './fetchMovies';
import { createDetailMovieMarkUp } from './createDetailInfoMarkup';
import { refs } from './refs';
import { addLocalStorage } from './addToWatchedLocalStorage';
import { addQueueLocalStorage } from './addToQueueLocalStorage';

export function renderDetailInfoPoster(id) {
  getDetailAboutMovie(id).then(data => {
    createDetailMovieMarkUp(data);
    addLocalStorage(data);
    addQueueLocalStorage(data)
  });
}
