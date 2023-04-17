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

async function getFilmByGenres(search) {
  try {
    const url = `${BASE_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=${search}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}
export { getFilmByGenres };

async function getFilmByLanguage(search) {
  try {
    const url = `${BASE_URL}discover/movie?api_key=${API_KEY}&language=${search}&page=1`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}
export { getFilmByLanguage };

async function getFilmsByLang(lang) {
  try {
    const url = `${BASE_URL}discover/movie?api_key=${API_KEY}&language=${lang}&page=1&with_original_language=${lang}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}
export { getFilmsByLang };
