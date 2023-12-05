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
  signInAnonymously,
} from 'firebase/auth';

import { getDatabase, ref, set, get, remove, child } from 'firebase/database';

let activeLang = localStorage.getItem('lang');

const firebaseConfig = {
  apiKey: 'AIzaSyAU7wH85_udF-Qb2LdQkjbDtUFIVHR9oMA',
  authDomain: 'moviewall-aa6f6.firebaseapp.com',
  projectId: 'moviewall-aa6f6',
  storageBucket: 'moviewall-aa6f6.appspot.com',
  messagingSenderId: '494361865300',
  appId: '1:494361865300:web:fdc756003c02226f9a91c1',
  measurementId: 'G-FTSJCJXBR8',
  databaseURL:
    'https://moviewall-aa6f6-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();
const myDataRef = ref(database, 'User');
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
      set(myDataRef, email);
      refs.openSignInModal.textContent = email;
      refs.openSignInModal.disabled = true;
      addActiveBtn();
      headerFunctionality();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
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
      set(myDataRef, Username);
      refs.openSignInModal.textContent = Username;
      refs.openSignInModal.disabled = true;
      onCloseSignUp();
      addActiveBtn();
      headerFunctionality();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
/* ---------------------------- Реєстрація гуглом --------------------------- */
export function onGoogleClick(e) {
  e.preventDefault();
  const NameInput = document.querySelector('.sign-up-name');
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
      set(myDataRef, UserName);
      refs.openSignInModal.disabled = true;
      onCloseSign();
      addActiveBtn();
      headerFunctionality();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
/* -------------------------------- Annonimys ------------------------------- */
export function onAnonClick(e) {
  e.preventDefault();
  auth;
  signInAnonymously(auth)
    .then(function (userCredential) {
      var user = userCredential.user;
      set(myDataRef, user.providerId);
      if (activeLang === 'uk') {
        refs.openSignInModal.textContent = `Невизначений`;
      } else {
        refs.openSignInModal.textContent = `Anonymous`;
      }
      refs.openSignInModal.disabled = true;
      onCloseSign();
      addActiveBtn();
      headerFunctionality();
      // console.log('User ID: ' + user.uid);
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // Notify.failure(`Error: ${errorMessage}`);
    });
}

/* -------------------------------------------------------------------------- */
const getName = get(myDataRef)
  .then(snapshot => {
    const user = snapshot.val();
    if (!user) {
      if (activeLang === 'uk') {
        refs.openSignInModal.textContent = `ВXІД`;
      } else {
        refs.openSignInModal.textContent = `SIGN IN`;
      }
    } else if (user === 'firebase') {
      refs.openSignInModal.disabled = true;
      if (activeLang === 'uk') {
        refs.openSignInModal.textContent = `Невизначений`;
      } else {
        refs.openSignInModal.textContent = `Anonymous`;
      }
    } else {
      refs.openSignInModal.disabled = true;
      refs.openSignInModal.textContent = user;
      // return user;
    }
  })
  .catch(error => {
    // Notify.failure(`Error getting data: ${error} Please try again`);
  });

function addActiveBtn() {
  if (refs.libraryEl.style.display === 'flex') {
    refs.library.classList.add(refs.activeClass);
    refs.home.classList.remove(refs.activeClass);
  } else {
    refs.home.classList.add(refs.activeClass);
    refs.library.classList.remove(refs.activeClass);
  }
}

/* --------------------------------- exitOnClick -------------------------------- */

export function exitOnClickExit() {
  if (myDataRef) {
    remove(myDataRef);
    location.reload();
  }
}
