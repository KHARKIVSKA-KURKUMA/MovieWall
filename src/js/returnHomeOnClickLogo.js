import { refs } from './refs';

export function returnHomeOnClickLogo(evt) {
    evt.preventDefault();
    refs.home.click();
}
