import { genresItems, genresItemsUk } from '../data/genres';
import { refs } from './refs';
import { renderPopularMovies } from './renderPopularPoster';
const btnLangEn = document.getElementById('en');
const btnLangUk = document.getElementById('uk');
const filterLang = document.querySelector('.filter-item');

export function onLangSelected() {
  const langSwitcher = document.querySelectorAll('.change-lang');
  langSwitcher.forEach(switcher => {
    switcher.addEventListener('click', function () {
      localStorage.setItem('lang', this.dataset.lang);
      changeLang(switcher.id);
    });
  });
}

let activeLang = localStorage.getItem('lang');

if (activeLang === 'en') {
  btnLangEn.classList.add('is-hidden');
  btnLangUk.classList.remove('is-hidden');
  changeGenresNamesEn();
  onEnglishLang();
} else {
  btnLangUk.classList.add('is-hidden');
  btnLangEn.classList.remove('is-hidden');
  changeGenresNamesUk();
  onUkrainianLang();
}
renderPopularMovies(activeLang);

function changeLang(lang) {
  localStorage.setItem('lang', lang);
  location.reload();
  renderPopularMovies(lang);
  if (lang === 'en') {
    btnLangEn.classList.toggle('is-hidden');
    btnLangUk.classList.remove('is-hidden');
    changeGenresNamesEn();
    onEnglishLang();
  } else {
    changeGenresNamesUk();
    onUkrainianLang();
    btnLangUk.classList.toggle('is-hidden');
    btnLangEn.classList.remove('is-hidden');
  }
}

function onUkrainianLang() {
  filterLang.textContent = 'За мовою оригіналу:';
}
function onEnglishLang() {
  filterLang.textContent = 'Filter by Original Language:';
}

function changeGenresNamesUk() {
  const filterEl = document.querySelectorAll('.filter-item-genre');
  const genresUk = genresDetail(genresItemsUk);
  for (let i = 0; i < filterEl.length - 1; i++) {
    filterEl[0].textContent = 'За жанром:';
    filterEl[i + 1].textContent = genresUk[i];
  }
}

function changeGenresNamesEn() {
  const filterEl = document.querySelectorAll('.filter-item-genre');
  const genresEn = genresDetail(genresItems);
  for (let i = 0; i < filterEl.length - 1; i++) {
    filterEl[0].textContent = 'Filter by Genre:';
    filterEl[i + 1].textContent = genresEn[i];
  }
}

function genresDetail(array) {
  return array.map(genre => genre.name);
}
