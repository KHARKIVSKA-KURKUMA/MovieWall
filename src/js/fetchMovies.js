// https://developers.themoviedb.org/3/getting-started/introduction // документація
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'dd2eacab57962d131eb2537d52aeafc3';

async function getPopularFilms() {
  try {
    const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}
export { getPopularFilms };

async function getDetailAboutMovie(id) {
  try {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}
export { getDetailAboutMovie };
  
async function getFilmByKeyWord(search) {
  try {
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}

export { getFilmByKeyWord };
  
async function getMovieTrailer(id) {
  try {
    const url = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}
export { getMovieTrailer };