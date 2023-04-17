import { refs } from './refs';
let isOpen = false;
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
  refs.filter.style.marginBottom = '-53px';
}
