import { refs } from './refs';
let isOpen = false;
const mediaScreen = window.matchMedia('(min-width: 768px)') 
export function onOpenFilter(e) {
  if (isOpen) {
    onCloseFilter();
  } else {
    refs.filter.classList.remove('is-hidden');
    refs.filter.style.marginBottom = '0';
  }
  isOpen = !isOpen;
}
export function onCloseFilter() {
  refs.filter.classList.add('is-hidden');
  refs.filter.style.marginBottom = '-106px';
  if (mediaScreen.matches) {
  refs.filter.style.marginBottom = '-53px';
  }
}
