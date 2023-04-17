import { refs } from './refs';
let isOpen = false;
export function onOpenFilter(e) {
  if (isOpen) {
    onCloseFilter();
  } else {
    refs.filter.classList.remove('is-hidden');
  }
  isOpen = !isOpen;
}
export function onCloseFilter() {
  refs.filter.classList.add('is-hidden');
}
