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

if (activeLang === 'en' || activeLang === null) {
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
  refs.ourTeamHead.textContent = 'Наша команда';
  refs.homeBtn.textContent = 'ГОЛОВНА';
  refs.libraryJs.textContent = 'МОЯ БІБЛІОТЕКА';
  refs.openSignInModal.textContent = 'РЕЄСТРАЦІЯ';
  refs.queuedBtn.textContent = 'ЧЕРГА';
  refs.watchedBtn.textContent = 'ПЕРЕГЛЯНУТІ';
  refs.signInTitle.textContent = 'Авторизація';
  refs.signInLabel.textContent = 'Пошта';
  refs.signInPassword.textContent = 'Пароль';
  refs.signInSubmitBtn.textContent = 'Вхід';
  refs.signInGoogleBtn.textContent = ' Продовжити з Google';
  refs.signInNoAcc.textContent = 'Немає акаунта?';
  refs.openSignUpModal.textContent = 'Зареєструватись';
  refs.signUpTitle.textContent = 'Створити обліковий запис';
  refs.signUpName.textContent = 'Ім`я';
  refs.signUpEmail.textContent = 'Пошта';
  refs.signUpPassword.textContent = 'Пароль';
  refs.signUpSubmitBtn.textContent = 'Зареєструватись';
  refs.openSignInModalNd.textContent = 'Вхід';
  refs.signUpDesc.textContent = 'з вашим MovieWall акаунтом';
  // refs.homeBtn.textContent = '';
  // refs.homeBtn.textContent = '';
  // refs.homeBtn.textContent = '';
}
function onEnglishLang() {
  filterLang.textContent = 'Filter by Original Language:';
  refs.ourTeamHead.textContent = 'Our Team';
  refs.homeBtn.textContent = 'HOME';
  refs.libraryJs.textContent = 'MY LIBRARY';
  refs.openSignInModal.textContent = 'SIGN IN';
  refs.queuedBtn.textContent = 'QUEUE';
  refs.watchedBtn.textContent = 'WATCHED';
  refs.signInTitle.textContent = 'Authorization';
  refs.signInLabel.textContent = 'Email';
  refs.signInPassword.textContent = 'Password';
  refs.signInSubmitBtn.textContent = 'Sign In';
  refs.signInGoogleBtn.textContent = 'Continue with Google';
  refs.signInNoAcc.textContent = 'No account?';
  refs.openSignUpModal.textContent = 'Sign Up';
  refs.signUpTitle.textContent = 'Create an account';
  refs.signUpName.textContent = 'Name';
  refs.signUpEmail.textContent = 'Email';
  refs.signUpPassword.textContent = 'Password';
  refs.signUpSubmitBtn.textContent = 'Sign Up';
  refs.openSignInModalNd.textContent = 'Sign In';
  refs.signUpDesc.textContent = 'with your MovieWall account';
  // refs.homeBtn.textContent = '';
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
