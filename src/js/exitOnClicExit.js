import { refs } from './refs';

export function exitOnClickExit() {
  let savedName = localStorage.getItem('UserName');

  if (savedName) {
    localStorage.removeItem('UserName');
    location.reload();
  }
}
