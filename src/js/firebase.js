import { initializeApp } from 'firebase/app';
import { headerFunctionality } from './swichBtnOnClick';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { onCloseSignUp, onCloseSign } from './onCloseModal';
import { refs } from './refs';
const provider = new GoogleAuthProvider();
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const STRG_KEY = 'UserName';

const firebaseConfig = {
  apiKey: 'AIzaSyAU7wH85_udF-Qb2LdQkjbDtUFIVHR9oMA',
  authDomain: 'moviewall-aa6f6.firebaseapp.com',
  projectId: 'moviewall-aa6f6',
  storageBucket: 'moviewall-aa6f6.appspot.com',
  messagingSenderId: '494361865300',
  appId: '1:494361865300:web:fdc756003c02226f9a91c1',
  measurementId: 'G-FTSJCJXBR8',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

/* ------------------------------- Вхід ------------------------------- */
export function OnFormSignIn(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      Notify.success(`The user has been successfully login! Hello ${email}`);
      onCloseSign();
      refs.openSignInModal.textContent = email;
      refs.openSignInModal.disabled = true;
      addActiveBtn();
      headerFunctionality();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //   Notify.failure(`User login error! ${errorCode} Please try again`);
    });
}
/* ------------------------------- Реєстрація ------------------------------- */
export function OnFormSignUp(e) {
  e.preventDefault();

  const email = document.querySelector('.sign-up-mail').value;
  const password = document.querySelector('.sign-up-password').value;
  const Username = document.querySelector('.sign-up-name').value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password, Username)
    .then(userCredential => {
      const user = userCredential.user;
      Notify.success(
        `The user has been successfully registered! Hello ${Username}`
      );
      refs.openSignInModal.textContent = Username;
      refs.openSignInModal.disabled = true;
      onCloseSignUp();
      addActiveBtn();
      headerFunctionality();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Notify.failure(`User registration error! ${errorCode} Please try again`);
    });
}
/* ---------------------------- Реєстрація гуглом --------------------------- */
export function onGoogleClick(e) {
  e.preventDefault();
  const NameInput = document.querySelector('.sign-up-name');
  NameInput.value = localStorage.getItem('name');
  auth;
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const UserName = user.displayName;
      Notify.success(
        `The user has been successfully registered! Hello ${UserName}`
      );
      refs.openSignInModal.textContent = UserName;
      localStorage.setItem(STRG_KEY, UserName);
      refs.openSignInModal.disabled = true;
      onCloseSign();
      addActiveBtn();
      headerFunctionality();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // Notify.failure(`User registration error! ${errorCode} Please try again`);
    });
}

const getName = localStorage.getItem(STRG_KEY);
let activeLang = localStorage.getItem('lang');

if (getName === null) {
  if (activeLang === 'uk') {
    refs.openSignInModal.textContent = `ВXІД`;
  } else {
    refs.openSignInModal.textContent = `SIGN IN`;
  }
} else {
  refs.openSignInModal.disabled = true;
  refs.openSignInModal.textContent = getName;
}

function addActiveBtn() {
  if (refs.libraryEl.style.display === 'flex') {
    refs.library.classList.add(refs.activeClass);
    refs.home.classList.remove(refs.activeClass);
  } else {
    refs.home.classList.add(refs.activeClass);
    refs.library.classList.remove(refs.activeClass);
  }
}
