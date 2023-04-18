// https://developers.themoviedb.org/3/getting-started/introduction // документація
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { startLoader, stopLoader } from './loader';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'dd2eacab57962d131eb2537d52aeafc3';

async function getPopularFilms(id, page) {
  try {
    const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=${id}&page=${page}`;
    startLoader();
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  } finally {
    stopLoader();
  }
}
export { getPopularFilms };

async function getDetailAboutMovie(id, lang) {
  try {
    startLoader();
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${lang}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  } finally {
    stopLoader();
  }
}
export { getDetailAboutMovie };

async function getFilmByKeyWord(search, page) {
  try {
    startLoader();
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${search}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  } finally {
    stopLoader();
  }
}

export { getFilmByKeyWord };

async function fetchMovieForWatched(movie_id, lang) {
  startLoader();
  return await fetch(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=${lang}`
  )
    .then(response => {
      if (!response.ok) {
        Notify.failure('Oops, an error occurred');
      }
      return response.json();
    })
    .then(data => {
      stopLoader();
      return data;
    })
    .catch(error => {
      Notify.failure('Oops, an error occurred');
    });
}

export { fetchMovieForWatched };

async function getMovieTrailer(id, lang) {
  try {
    const url = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${lang}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}
export { getMovieTrailer };

async function getFilmByGenres(search, lang) {
  try {
    startLoader();
    const url = `${BASE_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=${lang}&with_genres=${search}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  } finally {
    stopLoader();
  }
}
export { getFilmByGenres };

async function getFilmByLanguage(search, page) {
  try {
    startLoader();
    const url = `${BASE_URL}discover/movie?api_key=${API_KEY}&language=${search}&page=${page}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  } finally {
    stopLoader();
  }
}
export { getFilmByLanguage };

async function getFilmsByLang(lang) {
  try {
    startLoader();
    const url = `${BASE_URL}discover/movie?api_key=${API_KEY}&language=${lang}&page=1&with_original_language=${lang}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  } finally {
    stopLoader();
  }
}
export { getFilmsByLang };

async function getTopRatedFilms() {
  try {
    const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  }
}
export { getTopRatedFilms };
