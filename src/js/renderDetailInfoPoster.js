import { getDetailAboutMovie } from './fetchMovies';
import { createDetailMovieMarkUp } from './createDetailInfoMarkup';
import { refs } from './refs';
import { addLocalStorage } from './addToWatchedLocalStorage';

export function renderDetailInfoPoster(id) {
  getDetailAboutMovie(id).then(data => {
    createDetailMovieMarkUp(data);
    addLocalStorage(data)
  });
}
