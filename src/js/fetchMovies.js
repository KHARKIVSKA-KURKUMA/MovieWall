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

async function getFilmByKeyWord(search, page, lang) {
  try {
    startLoader();
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=${lang}&page=${page}&include_adult=false&query=${search}`;
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
    startLoader();
    const url = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${lang}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  } finally {
    stopLoader();
  }
}
export { getMovieTrailer };

async function getFilmByGenres(search, lang, page) {
  try {
    startLoader();
    const url = `${BASE_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=${lang}&with_genres=${search}&page=${page}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  } finally {
    stopLoader();
  }
}
export { getFilmByGenres };

async function getFilmsByLang(lang, page) {
  try {
    startLoader();
    const url = `${BASE_URL}discover/movie?api_key=${API_KEY}&language=${lang}&page=1&with_original_language=${lang}&page=${page}`;
    const response = await axios.get(url);
    return await response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  } finally {
    stopLoader();
  }
}
export { getFilmsByLang };

async function getTopRatedFilms(lang) {
  try {
    startLoader();
    const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=${lang}&page=1`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    Notify.failure('Oops, an error occurred');
  } finally {
    stopLoader();
  }
}
export { getTopRatedFilms };
