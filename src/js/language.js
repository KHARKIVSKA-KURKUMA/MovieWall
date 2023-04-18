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
  refs.queuedBtn.textContent = 'ЧЕРГА';
  refs.watchedBtn.textContent = 'ПЕРЕГЛЯНУТІ';
  refs.signInTitle.textContent = 'Авторизація';
  refs.signInLabel.textContent = 'Пошта';
  refs.signInPassword.textContent = 'Пароль';
  refs.signInSubmitBtn.textContent = 'Вхід';
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
  refs.SignInWithGoogle.innerHTML = `<svg class="google-icon" width="18" height="18" viewBox="0 0 18 18">
  <path
    d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
    fill-rule="evenodd"
    fill-opacity="1"
    fill="#4285f4"
    stroke="none"
  ></path>
  <path
    d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"
    fill-rule="evenodd"
    fill-opacity="1"
    fill="#34a853"
    stroke="none"
  ></path>
  <path
    d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
    fill-rule="evenodd"
    fill-opacity="1"
    fill="#fbbc05"
    stroke="none"
  ></path>
  <path
    d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
    fill-rule="evenodd"
    fill-opacity="1"
    fill="#ea4335"
    stroke="none"
  ></path>
</svg> Продовжити з Google`;
}
function onEnglishLang() {
  filterLang.textContent = 'Filter by Original Language:';
  refs.ourTeamHead.textContent = 'Our Team';
  refs.homeBtn.textContent = 'HOME';
  refs.libraryJs.textContent = 'MY LIBRARY';
  refs.queuedBtn.textContent = 'QUEUE';
  refs.watchedBtn.textContent = 'WATCHED';
  refs.signInTitle.textContent = 'Authorization';
  refs.signInLabel.textContent = 'Email';
  refs.signInPassword.textContent = 'Password';
  refs.signInSubmitBtn.textContent = 'Sign In';
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
  refs.SignInWithGoogle.innerHTML = `<svg class="google-icon" width="18" height="18" viewBox="0 0 18 18">
  <path
    d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
    fill-rule="evenodd"
    fill-opacity="1"
    fill="#4285f4"
    stroke="none"
  ></path>
  <path
    d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"
    fill-rule="evenodd"
    fill-opacity="1"
    fill="#34a853"
    stroke="none"
  ></path>
  <path
    d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
    fill-rule="evenodd"
    fill-opacity="1"
    fill="#fbbc05"
    stroke="none"
  ></path>
  <path
    d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
    fill-rule="evenodd"
    fill-opacity="1"
    fill="#ea4335"
    stroke="none"
  ></path>
</svg> Continue with Google`;
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
