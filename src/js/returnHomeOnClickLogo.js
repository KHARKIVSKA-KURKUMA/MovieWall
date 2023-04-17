import { refs } from './refs';

export function returnHomeOnClickLogo(e) {
    e.preventDefault();
    refs.home.click();
}
