import { getDetailAboutMovie } from './fetchMovies';
import { createDetailMovieMarkUp } from './createDetailInfoMarkup';
import { refs } from './refs';

export function renderDetailInfoPoster(id) {
  getDetailAboutMovie(id).then(data => {
    createDetailMovieMarkUp(data);
  });
}
