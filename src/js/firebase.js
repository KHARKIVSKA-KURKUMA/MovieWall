import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const formSignIn = document.querySelector('.sign-in');
const formSignUp = document.querySelector('.sign-up');

const firebaseConfig = {
  apiKey: 'AIzaSyAU7wH85_udF-Qb2LdQkjbDtUFIVHR9oMA',
  authDomain: 'moviewall-aa6f6.firebaseapp.com',
  projectId: 'moviewall-aa6f6',
  storageBucket: 'moviewall-aa6f6.appspot.com',
  messagingSenderId: '494361865300',
  appId: '1:494361865300:web:fdc756003c02226f9a91c1',
  measurementId: 'G-FTSJCJXBR8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

formSignIn.addEventListener('submit', OnFormSignIn);
formSignUp.addEventListener('submit', OnFormSignUp);

function OnFormSignIn(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('Користувач авторизований:', user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Помилка авторизації:', errorCode, errorMessage);
    });
}
function OnFormSignUp(e) {
  e.preventDefault();
  const email = document.querySelector('.sign-up-mail').value;
  const password = document.querySelector('.sign-up-password').value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('Користувача успішно зареєстровано:', user);
      // Тут можна додати додаткові дії, наприклад, перенаправлення на іншу сторінку або збереження інформації про користувача в базі даних.
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notify.failure(`Помилка реєстрації користувача: ${errorMessage}`);
    });
}
